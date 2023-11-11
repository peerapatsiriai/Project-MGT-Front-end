import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

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
// import withStyles  from '@material-ui/core';

// Custom Style
import {
  dropdownStyle,
  inputLabelStyle,
  typographyStyle,
  textFieldStyle,
  buttonStyle,
  buttonStyle2,
} from 'public/assets/style_custom/style'; // Adjust the path to your styles file

export default function Insert_Sec({ activeIndex, setActiveIndex, crossSecData, setCrossSecData }) {
  // นำเข้าตัวsweetalert2
  const Swal = require('sweetalert2');

  // ตัวแปรสเช็คค่าสถานะปุ่ม Submit
  const [submitted, setSubmitted] = useState(false);

  // ตัวแปร เก็บ ค่า เพื่อส่งไปในฟอร์ม
  const [curriculumsId, setCurriculumsId] = useState(''); // เก็บข้อมูลหลักสูตร
  const [subjectId, setSubjectId] = useState(''); // เก็บข้อมูลวิชา
  const [yearId, setYearId] = useState(''); // เก็บข้อมูลปี
  const [SectionName, setSectionName] = useState(''); // เก็บข้อมูลชื่อ Sec
  const [selectedTerm, setSelectedTerm] = useState(''); // เก็บข้อมูล term ที่ถูกเลือก

  // รีข้อมูล Input ทุกครั้งที่เปลี่ยนหน้า
  useEffect(() => {
    setCurriculumsId('');
    setSubjectId('');
    setYearId('');
    setSectionName('');
    setSelectedTerm('');

    setSubmitted(false);
  }, [activeIndex]);

  // ฟังก์ชันรีเซ็ตข้อมูลในฟอร์ม
  const handleResetForm = () => {
    setCurriculumsId('');
    setSubjectId('');
    setYearId('');
    setSectionName('');
    setSelectedTerm('');

    // รีสถานะกล่องแดง
    setSubmitted(false);
  };

  // เช็คการรับค่าใน input
  const handleChange = (e, key, type) => {
    const { value } = e.target;
    let updatedValue = value;
    setSectionName(updatedValue);
  };

  // ฟังก์ชันสำหรับ INSERT DATA
  const handleInsertSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ตรวจสอบค่าว่างใน TextField
    if (!subjectId || !selectedTerm || !yearId || !SectionName) {
      Swal.fire({
        icon: 'error',
        title: 'คุณกรอกข้อมูลไม่ครบ...',
        text: 'กรุณาระบุข้อมูลให้ครบถ้วน!',
      });

      return;
    }

    const data = {
      subject_id: subjectId,
      semester: selectedTerm,
      year: yearId,
      sec_name: SectionName,
    };

    console.log('Insert Sec data', data);

    axios
      .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/opennewsection`, data)
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
    setActiveIndex(1);
  };

  // ตัวแปรเช็คว่ามีข้อมูลให้ Map หรือไม่
  const [hasData, setHasData] = useState(false);

  // รับค่าข้อมูลจาก Api
  const [curriculumsData, setCurriculumsData] = useState([]); // รับข้อมูลหลักสูตร
  const [subjectsData, setSubjectsData] = useState([]); // รับข้อมูลวิชา
  const [yearData, setYearData] = useState([]); // รับข้อมูลปี
  const [termData, setTermData] = useState([]); // รับข้อมูล เทอม กับ Sec

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
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/getsubjectincurriculums`, {
            curriculum_id: curriculumsId,
          });

          const subjectData = response.data.data || [];
          setSubjectsData(subjectData);
          setHasData(subjectData.length > 0);
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

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของ เทอม เเละ Sec

  return (
    <div style={{ fontFamily: 'Manrope' }}>
      <div className='heading-section'>
        <h2
          className='tf-title pb-30'
          style={{ color: 'rgba(221, 242, 71, 1)', fontFamily: 'Manrope' }}
        >
          ADD SECTION
        </h2>
      </div>
      <div>
        <Card
          style={{
            backgroundColor: '#161616',
          }}
        >
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
                      error={submitted && !curriculumsId}
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
                        <MenuItem disabled>No data</MenuItem>
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
                        <MenuItem disabled>No data</MenuItem>
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
                      Term
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
                      label='Term'
                      value={selectedTerm}
                      onChange={handleTermChange}
                      labelId='term-label'
                      error={submitted && !selectedTerm} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                    >
                      <MenuItem value={'1'}>Term 1</MenuItem>
                      <MenuItem value={'2'}>Term 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Section Name TextField */}
                <Grid
                  item
                  xs={12}
                >
                  <Typography
                    variant='body2'
                    sx={typographyStyle}
                  >
                    Section Name **
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
                    label='Section Name'
                    placeholder='Section Name'
                    error={submitted && !SectionName} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                    value={SectionName}
                    onChange={(e) => {
                      //   handleSectionNameChange;
                      handleChange(e, 'sec_name', 'en');
                    }}
                  />
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
                onClick={handleInsertSubmit}
              >
                Insert
              </Button>
              <Button
                sx={buttonStyle2}
                size='large'
                color='warning'
                variant='outlined'
                onClick={handleResetForm}
              >
                Reset
              </Button>
              <Button
                sx={buttonStyle2}
                size='large'
                color='error'
                variant='outlined'
                onClick={function () {
                  setActiveIndex(1);
                }}
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
