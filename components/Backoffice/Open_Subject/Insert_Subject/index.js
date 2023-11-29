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

export default function Insert_Subject({ activeIndex, setActiveIndex }) {
  // นำเข้าตัวsweetalert2
  const Swal = require('sweetalert2');

  // ตัวแปรสเช็คค่าสถานะปุ่ม Submit
  const [submitted, setSubmitted] = useState(false);

  // ตัวแปร เก็บ ค่า เพื่อส่งไปในฟอร์ม
  const [curriculumsId, setCurriculumsId] = useState(''); // เก็บข้อมูลหลักสูตร
  const [subjectId, setSubjectId] = useState(''); // เก็บข้อมูลวิชา
  const [subjectType, setSubjectType] = useState(''); // เก็บข้อมูลประเภทวิชา

  // รีข้อมูล Input ทุกครั้งที่เปลี่ยนหน้า
  useEffect(() => {
    setCurriculumsId('');
    setSubjectId('');
    setSubjectType('');

    setSubmitted(false);
  }, [activeIndex]);

  // ฟังก์ชันรีเซ็ตข้อมูลในฟอร์ม
  const handleResetForm = () => {
    setCurriculumsId('');
    setSubjectId('');
    setSubjectType('');

    // รีสถานะกล่องแดง
    setSubmitted(false);
  };

  // ฟังก์ชันสำหรับ INSERT DATA
  const handleInsertSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ตรวจสอบค่าว่างใน TextField
    if (!curriculumsId || !subjectId || !subjectType) {
      Swal.fire({
        icon: 'error',
        title: 'คุณกรอกข้อมูลไม่ครบ...',
        text: 'กรุณาระบุข้อมูลให้ครบถ้วน!',
      });

      return;
    }

    const data = {
      curriculum_id: curriculumsId,
      subject_id: subjectId,
      subject_type: subjectType,
    };

    // console.log('data jong', data);

    axios
      .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/select_project_subject`, data)
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

    setActiveIndex(3);
  };

  // ตัวแปรเช็คว่ามีข้อมูลให้ Map หรือไม่
  const [hasData, setHasData] = useState(false);

  // รับค่าข้อมูลจาก Api
  const [curriculumsData, setCurriculumsData] = useState([]); // รับข้อมูลหลักสูตร
  const [subjectsData, setSubjectsData] = useState([]); // รับข้อมูลวิชา
  const [yearData, setYearData] = useState([]); // รับข้อมูลปี

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
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/subject_general`, {
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

  // ฟังก์ชันจัดการการเปลี่ยนแปลงของค่าใน Select dropdown
  const handleCurriculumsChange = (event) => {
    setCurriculumsId(event.target.value);
    setSubjectId('');
  }; // จัดการการเปลี่ยนแปลงค่าของหลักสูตร

  const handleSubjectChange = (event) => {
    setSubjectId(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของวิชา

  const handleProjectTypeChange = (event) => {
    setSubjectType(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของประเภทวิชา

  return (
    <div style={{ fontFamily: 'Manrope' }}>
      {/* <div className='heading-section'>
        <h2
          className='tf-title pb-30'
          style={{ color: 'rgba(221, 242, 71, 1)', fontFamily: 'Manrope' }}
        >
          ADD NEW SUBJECT
        </h2>
      </div> */}
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
                      id='Subject Type-label'
                      sx={inputLabelStyle}
                    >
                      Subject Type
                    </InputLabel>
                    <Select
                      sx={dropdownStyle}
                      label='Subject Type'
                      value={subjectType}
                      onChange={handleProjectTypeChange}
                      labelId='subject type-label'
                      error={submitted && !subjectType} // แสดงสีแดงเมื่อกดส่งและค่าว่าง
                    >
                      <MenuItem value={1}>Pre-project</MenuItem>
                      <MenuItem value={2}>Project</MenuItem>
                    </Select>
                  </FormControl>
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
                  setActiveIndex(3);
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
