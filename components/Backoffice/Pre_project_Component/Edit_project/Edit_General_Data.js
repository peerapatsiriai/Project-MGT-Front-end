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
// import LoadingComponent from 'src/pages/pages/component/LoadingComponent';

// Custom Style
import {
  dropdownStyle,
  inputLabelStyle,
  typographyStyle,
  textFieldStyle,
  buttonStyle,
  buttonStyle2,
} from 'public/assets/style_custom/style';

export default function Edit_General_Data({ activeIndex, setActiveIndex, crossData }) {
  const requestdata = crossData; // Get project id from properties

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

  //project status/type from api
  const [statusApi, setStatusApi] = useState(''); // รับค่า Status จาก Api
  const [typeApi, setTypeApi] = useState(''); // รับค่า Type จาก Api

  // ล้างค่าข้อมูล Component เก่าก่อนจะเซตค่าใหม่
  useEffect(() => {
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
  }, [activeIndex]);

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
      // updatedValue = updatedValue.replace(/[^ก-๙เ\s]/g, '');
      setProjectNameTh(updatedValue);
    } else if (type === 'en') {
      // updatedValue = updatedValue.replace(/[^a-zA-Z\s]/g, '');
      setProjectNameEn(updatedValue);
    }
  };

  // ฟังก์ชันสำหรับ Edit DATA
  const handleEditSubmit = (e) => {
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
      preproject_id: requestdata,
      section_id: selectedTerm,
      preproject_name_th: projectNameTh,
      preproject_name_eng: projectNameEn,
      project_code: projectCode,
      project_status: projectstatus,
      project_type: projecttype,
      adviser: advisorId,
      subadviser: allAdvisorSubValues,
      committee: allCommitteeValues,
      studen_id: allStudent,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/updatepreproject`, data)
      .then((response) => {
        console.log(response);
        handleClose();

        // window.location.reload()
        Route.replace(Route.asPath, undefined, { scroll: false });
        handleCancel(); // รีข้อมูล
      })
      .catch((error) => {
        console.log(error);
      });

    Swal.fire({
      icon: 'success',
      title: 'อัปเดทข้อมูลแล้วเสร็จ',
    });

    setActiveIndex(1);
  };

  // ตัวแปรเช็คว่ามีข้อมูลให้ Map หรือไม่
  const [hasData, setHasData] = useState(false);

  // รับค่าข้อมูลจาก Api
  const [curriculumsData, setCurriculumsData] = useState([]); // รับข้อมูลหลักสูตร
  const [subjectsData, setSubjectsData] = useState([]); // รับข้อมูลวิชา
  const [yearData, setYearData] = useState([]); // รับข้อมูลปี
  const [termData, setTermData] = useState([]); // รับข้อมูล เทอม กับ Sec
  const [teacherData, setTeacherData] = useState([]); // รับข้อมูลชื่ออาจารย์

  // ดึงข้อมูล Api มา Set form Edit
  useEffect(() => {
    const fetchEditData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/preproject?preproject_id=${requestdata}`);
        setCurriculumsId(response.data.PreprojectData[0].curriculum_id);
        setSubjectId(response.data.PreprojectData[0].subject_id);
        setYearId(response.data.PreprojectData[0].sem_year);
        setSelectedTerm(response.data.PreprojectData[0].section_id);
        setProjectCode(response.data.PreprojectData[0].project_code);
        setProjectType(response.data.PreprojectData[0].project_type);
        setProjectStatus(response.data.PreprojectData[0].project_status);
        setProjectNameTh(response.data.PreprojectData[0].preproject_name_th);
        setProjectNameEn(response.data.PreprojectData[0].preproject_name_eng);
        setAdvisorId(response.data.PreprojectData[0].teacher_id);

        //--------------------------------------เซตค่าเริ่มต้นให้ Sub Advisors--------------------------------------------//

        // เช็คว่ามีข้อมูล Sub Advisors มากกว่า 0 ค่าหรือไม่
        if (response.data.PreprojectSubAdviser.length > 0) {
          setSelectedValueAdvisorSub(response.data.PreprojectSubAdviser[0].teacher_id);

          // ใช้ slice() เพื่อเลือกข้อมูลใน Array ตั้งแต่ช่องที่ 1 เป็นต้นไป
          const subAdvisersFromSecondElement = response.data.PreprojectSubAdviser.slice(1);

          // เซ็ตค่าเริ่มต้นให้กับ state additionalSubAdvisorForms
          const initialSubAdvisorIds = subAdvisersFromSecondElement.map((subAdvisor) => subAdvisor.teacher_id);
          setAdditionalSubAdvisorForms(initialSubAdvisorIds);
        }

        //--------------------------------------จบการเซตค่าเริ่มต้นให้ Sub Advisors--------------------------------------------//

        //--------------------------------------เซตค่าเริ่มต้นให้ Committee--------------------------------------------//

        setSelectedValueCommittee(response.data.PreprojectCommittee[0].teacher_id);

        // ใช้ slice() เพื่อเลือกข้อมูลใน Array ตั้งแต่ช่องที่ 1 เป็นต้นไป
        const CommitteeFromSecondElement = response.data.PreprojectCommittee.slice(1);

        // เซ็ตค่าเริ่มต้นให้กับ state additionalSubAdvisorForms
        const initialCommittee = CommitteeFromSecondElement.map((committee) => committee.teacher_id);
        setAdditionalCommitteeForms(initialCommittee);

        //--------------------------------------จบการเซตค่าเริ่มต้นให้ Committee--------------------------------------------//

        //--------------------------------------เซตค่าเริ่มต้นให้ Student--------------------------------------------//
        setSelectedValueStudent(response.data.PreprojectStudent[0]);
        // ใช้ slice() เพื่อเลือกข้อมูลใน Array ตั้งแต่ช่องที่ 1 เป็นต้นไป
        const StudentFromSecondElement = response.data.PreprojectStudent.slice(1);
        // เซ็ตค่าเริ่มต้นให้กับ state additionalSubAdvisorForms
        const initialStudent = StudentFromSecondElement.map((student) => student.student_id);
        setAdditionalStudentForms(initialStudent);

        // นำค่าที่เซตเริ่มต้นทั้งหมดไปเก็บใน allStudentValues
        const allStudentData = [response.data.PreprojectStudent[0].student_id, ...initialStudent].filter((value) => value !== '');
        setAllStudent(allStudentData);

        //--------------------------------------จบการเซตค่าเริ่มต้นให้ Student--------------------------------------------//
      } catch (error) {
        console.error(error);
      }
    };

    fetchEditData();
  }, [requestdata, activeIndex]);

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

  // ดึงข้อมูล Status จาก Api
  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/preproject_status`);
        const statusData = response.data.data || [];
        setStatusApi(statusData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatusData();
  }, []);

  // ดึงข้อมูล Type จาก Api
  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/project_type`);
        const typeData = response.data.data || [];
        setTypeApi(typeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatusData();
  }, []);

  // ฟังก์ชันจัดการการเปลี่ยนแปลงของค่าใน Select dropdown
  const handleCurriculumsChange = (event) => {
    setCurriculumsId(event.target.value);
    setSubjectId('');
    setYearId('');
    setTermData('');
  }; // จัดการการเปลี่ยนแปลงค่าของหลักสูตร

  const handleSubjectChange = (event) => {
    setSubjectId(event.target.value);
    setYearId('');
    setTermData('');
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
        <InputLabel
          id={`additional-sub-advisor-label-${formIndex}`}
          sx={inputLabelStyle}
        >
          Sup Adviser {formIndex + 2}
        </InputLabel>
        <Select
          sx={dropdownStyle}
          label={`additional sub advisor ${formIndex + 1}`}
          labelId={`additional-sub-advisor-label-${formIndex}`}
          value={additionalSubAdvisor || ''}
          onChange={(event) => handleAdditionalSubAdvisorChange(event, formIndex)}
        >
          {selectableSubTeachers.map((contentTeacher) => (
            <MenuItem
              key={contentTeacher.teacher_id}
              value={contentTeacher.teacher_id}
              disabled={allAdvisorSubValues.includes(contentTeacher.teacher_id)}
            >
              {contentTeacher.prefix} {contentTeacher.first_name} {contentTeacher.last_name}
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
        <InputLabel
          id={`additional-committee-label-${formIndex}`}
          sx={inputLabelStyle}
        >
          Committee {formIndex + 2}
        </InputLabel>
        <Select
          sx={dropdownStyle}
          label={`additional committee ${formIndex + 1}`}
          labelId={`additional-committee-label-${formIndex}`}
          value={additionalCommittee || ''}
          onChange={(event) => handleAdditionalCommitteeChange(event, formIndex)}
        >
          {selecCommittee.map((contentTeacher) => (
            <MenuItem
              key={contentTeacher.teacher_id}
              value={contentTeacher.teacher_id}
              disabled={allCommitteeValues.includes(contentTeacher.teacher_id)}
            >
              {contentTeacher.prefix} {contentTeacher.first_name} {contentTeacher.last_name}
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

  // อัปเดทค่า นักศึกษาใหม่
  useEffect(() => {
    const updatedAllStudent = allStudentValues.map((value) => value?.student_id).filter((id) => id !== undefined);
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

  const getOptionLabel = (option) => {
    if (!option) return '';

    const selectedStudent = selectStudent.find((student) => student.student_id === option);

    if (selectedStudent) {
      return `${selectedStudent.prefix} ${selectedStudent.first_name} ${selectedStudent.last_name} ${selectedStudent.id_rmutl}`;
    }

    if (option) {
      return `${option.prefix} ${option.first_name} ${option.last_name} ${option.id_rmutl}`;
    }

    return '';
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
              sx={textFieldStyle}
              {...params}
              label={`Student ${formIndex + 2}`}
            />
          )}
        />
      </FormControl>
    );
  };

  return (
    <div>
      <div className='heading-section'>
        <h2
          className='tf-title pb-30'
          style={{ color: 'rgba(221, 242, 71, 1)', fontFamily: 'Manrope' }}
        >
          EDIT PROJECT
        </h2>
      </div>
      <div>
        <Card style={{ backgroundColor: '#161616' }}>
          {/* <LoadingComponent /> */}
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
                    sx={typographyStyle}
                  >
                    Required information** (Please specify information in order)
                  </Typography>
                </Grid>

                {/* Curriculum Select */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <FormControl fullWidth>
                    <InputLabel
                      id='curriculum-label'
                      sx={inputLabelStyle}
                    >
                      Curriculums
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
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
                    <InputLabel
                      id='subject-label'
                      sx={inputLabelStyle}
                    >
                      Subjects
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
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
                        <MenuItem disabled>Nodata</MenuItem>
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
                    <InputLabel
                      id='year-label'
                      sx={inputLabelStyle}
                    >
                      Year
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
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
                        <MenuItem disabled>Nodata</MenuItem>
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
                    <InputLabel
                      id='term-label'
                      sx={inputLabelStyle}
                    >
                      Term/Sec
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
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
                            Term{term.semester_order} {term.section_name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>Nodata</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Project-Code TextField */}
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <TextField
                    sx={textFieldStyle}
                    fullWidth
                    type='text'
                    label='Pre-projec Code'
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
                    <InputLabel
                      id='term-label'
                      sx={inputLabelStyle}
                    >
                      Pre-project Type
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
                      label='Project-Type'
                      defaultValue=''
                      id='select-04'
                      labelId='Project-Type'
                      onChange={handleProjectTypeChange}
                      error={submitted && !projecttype} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                      value={projecttype}
                    >
                      {typeApi && typeApi.length > 0 ? (
                        typeApi.map((type) => (
                          <MenuItem
                            key={type.type_id}
                            value={type.type_name}
                          >
                            {type.type_name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No data</MenuItem>
                      )}
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
                    <InputLabel
                      id='term-label'
                      sx={inputLabelStyle}
                    >
                      Pre-porject Status
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
                      label='Project-Status'
                      defaultValue=''
                      id='select-04'
                      labelId='Project-Type'
                      onChange={handleProjectStatusChange}
                      error={submitted && !projectstatus} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                      value={projectstatus}
                    >
                      {statusApi && statusApi.length > 0 ? (
                        statusApi.map((status) => (
                          <MenuItem
                            key={status.status_id}
                            value={status.status_id}
                          >
                            {status.status_name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No data</MenuItem>
                      )}
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
                    sx={typographyStyle}
                  >
                    Pre-project Name **
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <TextField
                    sx={textFieldStyle}
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
                    sx={textFieldStyle}
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
                    sx={typographyStyle}
                  >
                    Adviser
                  </Typography>
                  <br></br>
                  <br></br>
                  <FormControl fullWidth>
                    <InputLabel
                      id='advisor-label'
                      sx={inputLabelStyle}
                    >
                      Adviser
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
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
                          value={contentTeacher.teacher_id}
                        >
                          {contentTeacher.prefix} {contentTeacher.first_name} {contentTeacher.last_name}
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
                    sx={typographyStyle}
                  >
                    Sub Adviser**
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
                        sx={buttonStyle}
                      >
                        Add
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={buttonStyle}
                        size='small'
                        onClick={handleClearSubAdvisorData}
                      >
                        Clear
                      </Button>
                    </Grid>
                  </Grid>
                  <FormControl fullWidth>
                    <InputLabel
                      id='sub-advisor-label'
                      sx={inputLabelStyle}
                    >
                      Sup Adviser
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
                      label='Sub Advisor'
                      labelId='sub-advisor-label'
                      value={selectedValueAdvisorSub || ''}
                      onChange={handleSubAdvisorChange}
                    >
                      {selectableSubTeachers.map((contentTeacher) => (
                        <MenuItem
                          key={contentTeacher.teacher_id}
                          value={contentTeacher.teacher_id}
                          disabled={additionalSubAdvisorForms.includes(contentTeacher.teacher_id)}
                        >
                          {contentTeacher.prefix} {contentTeacher.first_name} {contentTeacher.last_name}
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
                    sx={typographyStyle}
                  >
                    Committee Name**
                  </Typography>
                  <Grid
                    container
                    justifyContent='flex-end'
                    alignItems='center'
                  >
                    <Grid item>
                      <Button
                        sx={buttonStyle}
                        size='small'
                        onClick={handleAddCommitteeData}
                      >
                        Add
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={buttonStyle}
                        size='small'
                        onClick={handleClearCommitteeData}
                      >
                        Clear
                      </Button>
                    </Grid>
                  </Grid>
                  <FormControl fullWidth>
                    <InputLabel
                      id='committee-label'
                      sx={inputLabelStyle}
                    >
                      Committee
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
                      label='Committee'
                      labelId='committee-label'
                      value={selectedValueCommittee || ''}
                      onChange={handleCommitteeChange}
                      error={submitted && allCommitteeValues.length === 0} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                    >
                      {selecCommittee.map((contentTeacher) => (
                        <MenuItem
                          key={contentTeacher.teacher_id}
                          value={contentTeacher.teacher_id}
                          disabled={additionalCommitteeForms.includes(contentTeacher.teacher_id)}
                        >
                          {contentTeacher.prefix} {contentTeacher.first_name} {contentTeacher.last_name}
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
                    sx={typographyStyle}
                  >
                    Students **
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
                        sx={buttonStyle}
                      >
                        Add
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        size='small'
                        onClick={handleClearStudentData}
                        sx={buttonStyle}
                      >
                        Clear
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
                            sx={textFieldStyle}
                            {...params}
                            label='Student Name'
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
                sx={buttonStyle2}
                variant='outlined'
                onClick={handleEditSubmit}
              >
                Insert
              </Button>
              <Button
                size='large'
                color='warning'
                variant='outlined'
                onClick={handleResetForm}
                sx={buttonStyle2}
              >
                Reset
              </Button>
              <Button
                size='large'
                color='error'
                variant='outlined'
                onClick={function () {
                  setActiveIndex(1);
                }}
                sx={buttonStyle2}
              >
                Back
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    </div>
  );
}
