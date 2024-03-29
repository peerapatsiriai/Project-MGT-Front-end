import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// MUI Import
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';

export default function PreprojectInsert() {
  const router = useRouter(); // router สร้าง path
  // นำเข้าตัวsweetalert2
  const Swal = require('sweetalert2');

  // ตัวแปรสเช็คค่าสถานะปุ่ม Submit
  const [submitted, setSubmitted] = useState(false);

  // ตัวแปร เก็บ ค่า เพื่อส่งไปในฟอร์ม
  const [curriculumsId, setCurriculumsId] = useState(''); // เก็บข้อมูลหลักสูตร
  const [subjectId, setSubjectId] = useState(''); // เก็บข้อมูลวิชา
  const [yearId, setYearId] = useState(''); // เก็บข้อมูลปี
  const [projecttype, setProjectType] = React.useState(''); // รับข้อมูล ประเภทโครงงาน
  const [projectstatus, setProjectStatus] = useState(''); // รับข้อมูล ประเภทโครงงาน
  const [projectCode, setProjectCode] = useState(''); // เก็บข้อมูลรหัสโครงงาน
  const [projectNameTh, setProjectNameTh] = useState(''); // เก็บข้อมูลชื่อโครงงาน (ภาษาไทย)
  const [projectNameEn, setProjectNameEn] = useState(''); // เก็บข้อมูลชื่อโครงงาน (ภาษาอังกฤษ)
  const [selectedTerm, setSelectedTerm] = useState(''); // เก็บข้อมูล Sec ที่ถูกเลือก

  const [advisorId, setAdvisorId] = useState(''); // เก็บข้อมูลอาจารย์ที่ปรึกษา
  const [allAdvisorSubValues, setAllAdvisorSubValues] = useState([]); // เก็บข้อมูลอาจารย์ที่ปรึกษารอง
  const [allCommitteeValues, setAllCommitteeValues] = useState([]); // เก็บข้อมูลคณะกรรมการ
  //เก็บตัวแปรนักเรียน
  const [allStudentValues, setAllStudentValues] = useState([]); // เก็บข้อมูลนักเรียนทั้งหมด(ใช้อันนี้บัคเยอะนะ)
  const [allStudent, setAllStudent] = useState([]); // รับ Id นักเรียนเพื่อส่งฟอร์ม

  // ฟังก์ชันรีเซ็ตข้อมูลในฟอร์ม
  const handleResetForm = () => {
    setCurriculumsId('');
    setSubjectId('');
    setYearId('');
    setProjectType('');
    setAdvisorId('');
    setProjectCode('');
    setProjectNameTh('');
    setProjectNameEn('');
    setSelectedTerm('');
    setProjectStatus('');
    setSelectedValueAdvisorSub(''); //  ล้างค่าข้อมูลอาจารย์ AdvisorSub ใน select ตัวแรก
    setAdditionalSubAdvisorForms([]); //  ล้างค่าข้อมูลอาจารย์ AdvisorSub ใน Additional select
    setSelectedValueCommittee(''); //  ล้างค่าข้อมูลอาจารย์ AdvisorSub ใน select ตัวแรก
    setAdditionalCommitteeForms([]); //  ล้างค่าข้อมูลอาจารย์ AdvisorSub ใน Additional select
    // ล้างค่าของ นศ.
    setSelectedValueStudent(''); // เซ็ตค่า selectedValueStudent เป็น null หรือค่าว่าง
    setAdditionalStudentForms([]); // เซ็ตค่า additionalStudentForms เป็นอาเรย์ว่าง
    setAllStudentValues([]); // เซ็ตค่า allStudentValues เป็นอาเรย์ว่าง
    setAllStudent([]);

    // รีสถานะกล่องแดง
    setSubmitted(false);
  };

  // เช็คการรับค่าใน input
  const handleChange = (e, key, type) => {
    const { value } = e.target;
    let updatedValue = value;
    if (type === 'th') {
      updatedValue = updatedValue.replace(/[^ก-๙เ\s]/g, '');
      setProjectNameTh(updatedValue);
    } else if (type === 'en') {
      updatedValue = updatedValue.replace(/[^a-zA-Z\s]/g, '');
      setProjectNameEn(updatedValue);
    }
  };

  // ฟังก์ชันสำหรับ INSERT DATA
  const handleInsertSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ตรวจสอบค่าว่างใน TextField
    if (
      !curriculumsId ||
      !subjectId ||
      !yearId ||
      !projecttype ||
      !projectCode ||
      !projectNameTh ||
      !projectNameEn ||
      !selectedTerm ||
      !advisorId ||
      !projectstatus ||
      allCommitteeValues.length === 0 ||
      allStudent.length === 0
    ) {
      Swal.fire({
        icon: 'error',
        title: 'คุณกรอกข้อมูลไม่ครบ...',
        text: 'กรุณาระบุข้อมูลให้ครบถ้วน!',
      });

      return;
    }

    // เพิ่มเงื่อนไขเพื่อตรวจสอบข้อมูลที่ซ้ำกันของเหล่าอาจารย์ทั้งหลาย
    const allTeacherValues = [advisorId, ...allAdvisorSubValues, ...allCommitteeValues];
    const uniqueValues = new Set(allTeacherValues);
    if (allTeacherValues.length !== uniqueValues.size) {
      Swal.fire({
        icon: 'warning',
        title: 'คุณกรอกข้อมูลอาจารย์ซ้ำ',
        text: 'กรุณาตรวจสอบข้อมูลที่กรอกอีกครั้ง',
      });

      return;
    }

    // เพิ่มเงื่อนไขเพื่อตรวจสอบข้อมูลที่ซ้ำกันในภายในตัวแปร studen_id
    const uniqueStudents = new Set(allStudent);
    if (uniqueStudents.size !== allStudent.length) {
      Swal.fire({
        icon: 'warning',
        title: 'คุณเลือกนักศึกษาซ้ำกัน',
        text: 'กรุณาเลือกนักศึกษาใหม่อีกครั้ง',
      });

      return;
    }

    const data = {
      section_id: selectedTerm,
      preproject_name_th: projectNameTh,
      preproject_name_eng: projectNameEn,
      project_code: projectCode,
      project_status: projectstatus,
      project_type: projecttype,
      created_by: '11',
      adviser: advisorId,
      subadviser: allAdvisorSubValues,
      committee: allCommitteeValues,
      studen_id: allStudent,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/insertpreproject`, data)
      .then((response) => {
        console.log(response);

        // window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      });
    Swal.fire({
      icon: 'success',
      title: 'เพิ่มข้อมูลแล้วเสร็จ',
    });
    window.location.reload();
    // router.push(`/Backoffice`);
  };

  // ตัวแปรเช็คว่ามีข้อมูลให้ Map หรือไม่
  const [hasData, setHasData] = useState(false);

  // รับค่าข้อมูลจาก Api
  const [curriculumsData, setCurriculumsData] = useState([]); // รับข้อมูลหลักสูตร
  const [subjectsData, setSubjectsData] = useState([]); // รับข้อมูลวิชา
  const [yearData, setYearData] = useState([]); // รับข้อมูลปี
  const [termData, setTermData] = useState([]); // รับข้อมูล เทอม กับ Sec
  const [teacherData, setTeacherData] = useState([]); // รับข้อมูลชื่ออาจารย์

  // ดึงข้อมูลหลักสูตรจาก Api curriculums
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/curriculums`);
        setCurriculumsData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // ดึงข้อมูลวิชาจาก Api subjects
  useEffect(() => {
    const fetchSubjectsData = async () => {
      if (curriculumsId) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/curriculums/subjects`, {
            params: { curriculum_id: curriculumsId },
          });
          const subjectData = response.data.data || []; // ตรวจสอบและกำหนดค่าเป็นอาร์เรย์ว่างหากไม่มีข้อมูล
          setSubjectsData(subjectData);
          setHasData(response.data.data.length > 0); // ตรวจสอบว่ามีข้อมูลหรือไม่
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchSubjectsData();
  }, [curriculumsId]);

  // ดึงข้อมูลปีจาก Api year
  useEffect(() => {
    const fetchYearData = async () => {
      if (subjectId) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/curriculums/subjects/year`, {
            params: { subject_id: subjectId },
          });
          const yearData = response.data.data || []; // ตรวจสอบและกำหนดค่าเป็นอาร์เรย์ว่างหากไม่มีข้อมูล
          setYearData(yearData);
          setHasData(response.data.data.length > 0); // ตรวจสอบว่ามีข้อมูลหรือไม่
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchYearData();
  }, [subjectId]);

  // ดึงข้อมูล Sec และ Term จาก Api
  useEffect(() => {
    const fetchTermData = async () => {
      if (subjectId && yearId) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/curriculums/subjects/year/sections`, {
            params: { subject_id: subjectId, year: yearId },
          });
          const termData = response.data.data || []; // ตรวจสอบและกำหนดค่าเป็นอาร์เรย์ว่างหากไม่มีข้อมูล
          setTermData(termData);
          setHasData(response.data.data.length > 0); // ตรวจสอบว่ามีข้อมูลหรือไม่
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchTermData();
  }, [subjectId, yearId]);

  // ดึงข้อมูล อาจารย์ จาก Api
  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/instructors`);
        const teacherData = response.data.data || [];
        setTeacherData(teacherData);
        setSelectableSubTeachers(teacherData);
        setSelecCommittee(teacherData);
        setHasData(response.data.data.length > 0); // ตรวจสอบว่ามีข้อมูลหรือไม่
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeacherData();
  }, []);

  // ดึงข้อมูล นักเรียนจาก Api
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/students`);
        const studentData = response.data.data || [];
        setSelectStudent(studentData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, []);

  // ฟังก์ชันจัดการการเปลี่ยนแปลงของค่าใน Select dropdown
  const handleCurriculumsChange = (event) => {
    setCurriculumsId(event.target.value);
    setSubjectId('');
    setYearId('');
  }; // จัดการการเปลี่ยนแปลงค่าของหลักสูตร

  const handleSubjectChange = (event) => {
    setSubjectId(event.target.value);
    setYearId('');
  }; // จัดการการเปลี่ยนแปลงค่าของวิชา

  const handleYearChange = (event) => {
    setYearId(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของปีการศึกษา

  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของประเภทโครงงาน

  const handleProjectStatusChange = (event) => {
    setProjectStatus(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของประเภทโครงงาน

  const handleAdvisorChange = (event) => {
    setAdvisorId(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของอาจารที่ปรึกษา

  const handleProjectNameThChange = (event) => {
    setProjectNameTh(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของ ชื่อโครงงานภาษาไทย

  const handleProjectNameEnChange = (event) => {
    setProjectNameEn(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของ ชื่อโครงงานภาษาอังกฤษ

  const handleProjectCodeChange = (event) => {
    setProjectCode(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของ โปรเจค Code

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของ เทอม เเละ Sec

  //-----------------------ฟังชันเก็บค่าอาจารย์ที่ปรึกษารอง(Select)----------------------//
  const [selectedValueAdvisorSub, setSelectedValueAdvisorSub] = useState('');
  const [selectableSubTeachers, setSelectableSubTeachers] = useState([]);
  const [additionalSubAdvisorForms, setAdditionalSubAdvisorForms] = useState([]);
  useEffect(() => {
    const updatedAllAdvisorSubValues = [selectedValueAdvisorSub, ...additionalSubAdvisorForms].filter((value) => value !== '');
    setAllAdvisorSubValues(updatedAllAdvisorSubValues);
  }, [selectedValueAdvisorSub, additionalSubAdvisorForms]);

  const handleAddSubAdvisorData = () => {
    setAdditionalSubAdvisorForms((prevForms) => {
      const updatedForms = [...prevForms, ''];

      return Array.from(new Set(updatedForms));
    });
  };

  const handleClearSubAdvisorData = () => {
    setAdditionalSubAdvisorForms([]);
    setSelectedValueAdvisorSub('');
  };

  const handleSubAdvisorChange = (event) => {
    setSelectedValueAdvisorSub(event.target.value);
  };

  const handleAdditionalSubAdvisorChange = (event, formIndex) => {
    const selectedSubAdvisor = event.target.value;
    setAdditionalSubAdvisorForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms[formIndex] = selectedSubAdvisor;

      const updatedAllAdvisorSubValues = [selectedValueAdvisorSub, ...updatedForms].filter((value) => value !== '');
      setAllAdvisorSubValues(updatedAllAdvisorSubValues);

      return Array.from(new Set(updatedForms));
    });
  };

  const AdditionalSubAdvisorForm = ({ formIndex, selectedOptions }) => {
    const additionalSubAdvisor = additionalSubAdvisorForms[formIndex];

    return (
      <FormControl
        fullWidth
        style={{ marginTop: '15px' }}
      >
        <InputLabel id={`additional-sub-advisor-label-${formIndex}`}>ที่ปรึกษารอง {formIndex + 2}</InputLabel>
        <Select
          label={`additional sub advisor ${formIndex + 1}`}
          labelId={`additional-sub-advisor-label-${formIndex}`}
          value={additionalSubAdvisor || ''}
          onChange={(event) => handleAdditionalSubAdvisorChange(event, formIndex)}
        >
          {selectableSubTeachers.map((contentTeacher) => (
            <MenuItem
              key={contentTeacher.tea_id}
              value={contentTeacher.tea_id}
              disabled={allAdvisorSubValues.includes(contentTeacher.tea_id)}
            >
              {contentTeacher.tea_name} {contentTeacher.tea_lname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  //-----------------------จบฟังชันเก็บค่าอาจารย์ที่ปรึกษารอง(Select)----------------------//

  //------------------------------ฟังชันเก็บค่ากรรมการ(Select)--------------------------//
  const [selectedValueCommittee, setSelectedValueCommittee] = useState('');
  const [selecCommittee, setSelecCommittee] = useState([]);
  const [additionalCommitteeForms, setAdditionalCommitteeForms] = useState([]);

  useEffect(() => {
    const updatedAllCommitteeValues = [selectedValueCommittee, ...additionalCommitteeForms].filter((value) => value !== '');
    setAllCommitteeValues(updatedAllCommitteeValues);
  }, [selectedValueCommittee, additionalCommitteeForms]);

  const handleAddCommitteeData = () => {
    setAdditionalCommitteeForms((prevForms) => {
      const updatedForms = [...prevForms, ''];

      return Array.from(new Set(updatedForms));
    });
  };

  const handleClearCommitteeData = () => {
    setAdditionalCommitteeForms([]);
    setSelectedValueCommittee('');
  };

  const handleCommitteeChange = (event) => {
    setSelectedValueCommittee(event.target.value);
  };

  const handleAdditionalCommitteeChange = (event, formIndex) => {
    const selectedCommittee = event.target.value;
    setAdditionalCommitteeForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms[formIndex] = selectedCommittee;

      const updatedAllCommitteeValues = [selectedValueCommittee, ...updatedForms].filter((value) => value !== '');
      setAllCommitteeValues(updatedAllCommitteeValues);

      return Array.from(new Set(updatedForms));
    });
  };

  const AdditionalCommitteeForm = ({ formIndex, selectedOptions }) => {
    const additionalCommittee = additionalCommitteeForms[formIndex];

    return (
      <FormControl
        fullWidth
        style={{ marginTop: '15px' }}
      >
        <InputLabel id={`additional-committee-label-${formIndex}`}>กรรมการ {formIndex + 2}</InputLabel>
        <Select
          label={`additional committee ${formIndex + 1}`}
          labelId={`additional-committee-label-${formIndex}`}
          value={additionalCommittee || ''}
          onChange={(event) => handleAdditionalCommitteeChange(event, formIndex)}
        >
          {selecCommittee.map((contentTeacher) => (
            <MenuItem
              key={contentTeacher.tea_id}
              value={contentTeacher.tea_id}
              disabled={allCommitteeValues.includes(contentTeacher.instructor_id)}
            >
              {contentTeacher.tea_name} {contentTeacher.tea_lname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  //------------------------------จบฟังชันเก็บค่ากรรมการ(Select)--------------------------//

  //------------------------------ฟังชันเก็บค่านักศึกษา (Autocom)--------------------------//
  const [selectedValueStudent, setSelectedValueStudent] = useState('');
  const [selectStudent, setSelectStudent] = useState([]);
  const [additionalStudentForms, setAdditionalStudentForms] = useState([]);

  //ตัวรี Input
  const autocompleteRef = useRef();

  useEffect(() => {
    const updatedAllStudentValues = [selectedValueStudent, ...additionalStudentForms].filter((value) => value !== '');
    setAllStudentValues(updatedAllStudentValues);
  }, [selectedValueStudent, additionalStudentForms]);

  useEffect(() => {
    const updatedAllStudent = allStudentValues.map((value) => value?.Id).filter((id) => id !== undefined);
    setAllStudent(updatedAllStudent);
  }, [allStudentValues]);

  const handleAddStudentData = () => {
    setAdditionalStudentForms((prevForms) => Array.from(new Set([...prevForms, ''])));
  };

  const handleClearStudentData = () => {
    setSelectedValueStudent('');
    setAdditionalStudentForms([]);

    // เคลียร์ค่าที่แสดงในกล่อง input ของ Autocomplete ด้วยการกำหนดค่าว่าง
    if (autocompleteRef.current) {
      autocompleteRef.current.value = '';
    }
  };

  const handleStudentChange = (_, value) => {
    setSelectedValueStudent(value);
  };

  const handleAdditionalStudentChange = (_, value, formIndex) => {
    setAdditionalStudentForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms[formIndex] = value;
      const updatedAllStudentValues = [selectedValueStudent, ...updatedForms].filter((value) => value !== '');
      setAllStudentValues(updatedAllStudentValues);

      return Array.from(new Set(updatedForms));
    });
  };

  // display Student Name on Autocomplete
  const getOptionLabel = (option) => {
    return option ? `${option.stu_name} ${option.stu_lname} ${option.stu_id}` : '';
  };

  const AdditionalStudentForm = ({ formIndex }) => {
    return (
      <FormControl
        fullWidth
        style={{ marginTop: '15px' }}
      >
        <Autocomplete
          id={`additional-student-label-${formIndex}`}
          value={additionalStudentForms[formIndex] || null}
          onChange={(event, newValue) => handleAdditionalStudentChange(event, newValue, formIndex)}
          options={selectStudent}
          getOptionLabel={getOptionLabel}
          renderInput={(params) => (
            <TextField
              {...params}
              label={`นักศึกษา ${formIndex + 2}`}
            />
          )}
        />
      </FormControl>
    );
  };

  return (
    <Card>
      <form>
        <CardContent>
          <Grid
            container
            spacing={5}
          >
            <Grid
              item
              xs={12}
            >
              <Typography
                variant='body2'
                sx={{ fontWeight: 600 }}
              >
                ข้อมูลจำเป็น**(กรุณาระบุข้อมูลตามลำดับ)
              </Typography>
            </Grid>

            {/* Curriculum Select */}
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl fullWidth>
                <InputLabel id='curriculum-label'>หลักสูตร</InputLabel>
                <Select
                  label='Curriculum'
                  value={curriculumsId}
                  onChange={handleCurriculumsChange}
                  labelId='curriculum-label'
                  error={submitted && !curriculumsId} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                >
                  {curriculumsData.map((curriculum) => (
                    <MenuItem
                      key={curriculum.curriculum_id}
                      value={curriculum.curriculum_id}
                    >
                      {curriculum.curriculum_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Subject Select */}
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl fullWidth>
                <InputLabel id='subject-label'>วิชา</InputLabel>
                <Select
                  label='Subject'
                  value={subjectId}
                  onChange={handleSubjectChange}
                  labelId='subject-label'
                  error={submitted && !subjectId} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                  disabled={!curriculumsId || !hasData}
                >
                  {subjectsData && subjectsData.length > 0 ? (
                    subjectsData.map((subject) => (
                      <MenuItem
                        key={subject.subject_id}
                        value={subject.subject_id}
                      >
                        {subject.subject_name_th}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>ไม่มีข้อมูล</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            {/* Year Select */}
            <Grid
              item
              xs={12}
              sm={4}
            >
              <FormControl fullWidth>
                <InputLabel id='year-label'>ปีการศึกษา</InputLabel>
                <Select
                  label='Year'
                  value={yearId}
                  onChange={handleYearChange}
                  labelId='year-label'
                  error={submitted && !yearId} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                  disabled={!subjectId || !hasData}
                >
                  {yearData && yearData.length > 0 ? (
                    yearData.map((year) => (
                      <MenuItem
                        key={year.sem_year}
                        value={year.sem_year}
                      >
                        {year.sem_year}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>ไม่มีข้อมูล</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            {/* Term Select */}
            <Grid
              item
              xs={12}
              sm={4}
            >
              <FormControl fullWidth>
                <InputLabel id='term-label'>เทอม/เซค</InputLabel>
                <Select
                  label='Term'
                  value={selectedTerm}
                  onChange={handleTermChange}
                  labelId='term-label'
                  error={submitted && !selectedTerm} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                  disabled={!yearId || !hasData}
                >
                  {termData && termData.length > 0 ? (
                    termData.map((term) => (
                      <MenuItem
                        key={term.section_id}
                        value={term.section_id}
                      >
                        เทอม{term.semester_order} {term.section_name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>ไม่มีข้อมูล</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            {/* Project-Code TextField */}
            <Grid
              item
              xs={12}
              sm={4}
              style={{ backgroundColor: 'white !important' }}
            >
              <TextField
                fullWidth
                type='text'
                label='รหัสโครงงาน'
                placeholder='CE0101'
                value={projectCode}
                error={submitted && !projectCode} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                onChange={handleProjectCodeChange}
              />
            </Grid>

            {/* Project-Type Select */}
            <Grid
              item
              xs={12}
              sm={4}
            >
              <FormControl fullWidth>
                <InputLabel id='term-label'>ประเภทของโครงงาน</InputLabel>
                <Select
                  label='Project-Type'
                  defaultValue=''
                  id='select-04'
                  labelId='Project-Type'
                  onChange={handleProjectTypeChange}
                  error={submitted && !projecttype} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                  value={projecttype}
                >
                  <MenuItem value={'HardWare'}>HardWare</MenuItem>
                  <MenuItem value={'SoftWare'}>SoftWare</MenuItem>
                  <MenuItem value={'Network'}>Network</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Project-Status Select */}
            <Grid
              item
              xs={12}
              sm={4}
            >
              <FormControl fullWidth>
                <InputLabel id='term-label'>สถานะของโครงงาน</InputLabel>
                <Select
                  label='Project-Status'
                  defaultValue=''
                  id='select-04'
                  labelId='Project-Type'
                  onChange={handleProjectStatusChange}
                  error={submitted && !projectstatus} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                  value={projectstatus}
                >
                  <MenuItem value={'0'}>ไม่ผ่าน</MenuItem>
                  <MenuItem value={'1'}>โครงงานยังไม่ได้รับการอนุมัติ</MenuItem>
                  <MenuItem value={'2'}>ยังไม่ได้ดำเนินการ</MenuItem>
                  <MenuItem value={'3'}>อยู่ระหว่างการดำเนินการ</MenuItem>
                  <MenuItem value={'4'}>สามารถสอบได้</MenuItem>
                  <MenuItem value={'5'}>ยังไม่ผ่านการสอบ</MenuItem>
                  <MenuItem value={'6'}>ผ่านแล้วแต่ยังไม่ได้โอน</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Project-Name Th,En TextField */}
            <Grid
              item
              xs={12}
            >
              <Typography
                variant='body2'
                sx={{ fontWeight: 600 }}
              >
                ชื่อโครงงาน**
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                type='text'
                label='ชื่อโครงงาน(ภาษาไทย)'
                placeholder='ชื่อโครงงาน(ภาษาไทย)'
                error={submitted && !projectNameTh} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                value={projectNameTh}
                onChange={(e) => {
                  handleProjectNameThChange;
                  handleChange(e, 'preproject_name_th', 'th');
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                type='text'
                label='ชื่อโครงงาน(ภาษาอังกฤษ)'
                placeholder='ชื่อโครงงาน(ภาษาอังกฤษ)'
                error={submitted && !projectNameEn} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                value={projectNameEn}
                onChange={(e) => {
                  handleProjectNameEnChange;
                  handleChange(e, 'preproject_name_eng', 'en');
                }}
              />
            </Grid>

            {/* Advisor Select */}
            <Grid
              item
              xs={12}
              sm={12}
            >
              <Typography
                variant='body2'
                sx={{ fontWeight: 600, mb: 5 }}
              >
                ชื่ออาจารย์ที่ปรึกษา**
              </Typography>
              <FormControl fullWidth>
                <InputLabel id='advisor-label'>ที่ปรึกษา</InputLabel>
                <Select
                  label='Advisor'
                  labelId='advisor-label'
                  value={advisorId}
                  onChange={handleAdvisorChange}
                  disabled={!hasData}
                  error={submitted && !advisorId} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                >
                  {teacherData.map((contentTeacher, value) => (
                    <MenuItem
                      key={value}
                      value={contentTeacher.tea_id}
                    >
                      {contentTeacher.tea_name} {contentTeacher.tea_lname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* Sub Advisor Select */}
            <Grid
              item
              xs={12}
              sm={12}
            >
              <Typography
                variant='body2'
                sx={{ fontWeight: 600 }}
              >
                ชื่ออาจารย์ที่ปรึกษารอง**
              </Typography>
              <Grid
                container
                justifyContent='flex-end'
                alignItems='center'
              >
                <Grid item>
                  <Button
                    size='small'
                    onClick={handleAddSubAdvisorData}
                  >
                    เพิ่มข้อมูล
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    size='small'
                    onClick={handleClearSubAdvisorData}
                  >
                    ล้างข้อมูล
                  </Button>
                </Grid>
              </Grid>
              <FormControl fullWidth>
                <InputLabel id='sub-advisor-label'>ที่ปรึกษารอง</InputLabel>
                <Select
                  label='Sub Advisor'
                  labelId='sub-advisor-label'
                  value={selectedValueAdvisorSub || ''}
                  onChange={handleSubAdvisorChange}
                >
                  {selectableSubTeachers.map((contentTeacher) => (
                    <MenuItem
                      key={contentTeacher.tea_id}
                      value={contentTeacher.tea_id}
                      disabled={additionalSubAdvisorForms.includes(contentTeacher.tea_id)}
                    >
                      {contentTeacher.tea_name} {contentTeacher.tea_lname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {additionalSubAdvisorForms.map((_, index) => (
                <AdditionalSubAdvisorForm
                  key={index}
                  formIndex={index}
                  selectedOptions={additionalSubAdvisorForms}
                />
              ))}
            </Grid>

            {/* Committee Select */}
            <Grid
              item
              xs={12}
              sm={12}
            >
              <Typography
                variant='body2'
                sx={{ fontWeight: 600 }}
              >
                ชื่อคณะกรรมการ**
              </Typography>
              <Grid
                container
                justifyContent='flex-end'
                alignItems='center'
              >
                <Grid item>
                  <Button
                    size='small'
                    onClick={handleAddCommitteeData}
                  >
                    เพิ่มข้อมูล
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    size='small'
                    onClick={handleClearCommitteeData}
                  >
                    ล้างข้อมูล
                  </Button>
                </Grid>
              </Grid>
              <FormControl fullWidth>
                <InputLabel id='committee-label'>กรรมการ</InputLabel>
                <Select
                  label='Committee'
                  labelId='committee-label'
                  value={selectedValueCommittee || ''}
                  onChange={handleCommitteeChange}
                  error={submitted && allCommitteeValues.length === 0} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                >
                  {selecCommittee.map((contentTeacher) => (
                    <MenuItem
                      key={contentTeacher.tea_id}
                      value={contentTeacher.tea_id}
                      disabled={additionalCommitteeForms.includes(contentTeacher.tea_id)}
                    >
                      {contentTeacher.tea_name} {contentTeacher.tea_lname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {additionalCommitteeForms.map((_, index) => (
                <AdditionalCommitteeForm
                  key={index}
                  formIndex={index}
                  selectedOptions={additionalCommitteeForms}
                />
              ))}
            </Grid>

            {/* Student Select */}
            <Grid
              item
              xs={12}
              sm={12}
            >
              <Typography
                variant='body2'
                sx={{ fontWeight: 600 }}
              >
                รายชื่อนักศึกษา**
              </Typography>
              <Grid
                container
                justifyContent='flex-end'
                alignItems='center'
              >
                <Grid item>
                  <Button
                    size='small'
                    onClick={handleAddStudentData}
                  >
                    เพิ่มข้อมูล
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    size='small'
                    onClick={handleClearStudentData}
                  >
                    ล้างข้อมูล
                  </Button>
                </Grid>
              </Grid>
              <FormControl fullWidth>
                <FormControl fullWidth>
                  <Autocomplete
                    id='student-label'
                    value={selectedValueStudent === '' ? null : selectedValueStudent}
                    onChange={handleStudentChange}
                    options={selectStudent}
                    getOptionLabel={getOptionLabel}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='ชื่อนักศึกษา'
                        error={submitted && allStudent.length === 0}
                      />
                    )}
                  />
                </FormControl>
              </FormControl>
              {additionalStudentForms.map((_, index) => (
                <AdditionalStudentForm
                  key={index}
                  formIndex={index}
                />
              ))}
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button
            size='large'
            color='success'
            type='submit'
            sx={{ mr: 2 }}
            variant='outlined'
            onClick={handleInsertSubmit}
          >
            บัณทึก
          </Button>
          <Button
            size='large'
            color='warning'
            variant='outlined'
            onClick={handleResetForm}
          >
            รีข้อมูล
          </Button>
          <Button
            size='large'
            color='error'
            variant='outlined'
            onClick={function () {
              window.location.reload();
              //router.push(`/Backoffice`);
            }}
          >
            ย้อนกลับ
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
