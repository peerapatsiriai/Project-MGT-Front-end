import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router';
import axios from 'axios';

// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function Handle_Transfer({ activeIndex, setActiveIndex, Project_id }) {
  // นำเข้าตัวsweetalert2
  const Swal = require('sweetalert2');

  // ตัวแปรสเช็คค่าสถานะปุ่ม Submit
  const [submitted, setSubmitted] = useState(false);

  // ตัวแปรเช็คค่าว่าง
  const [hasData, setHasData] = useState(false);

  //------------------------------------สร้างตัวแปรเก็บค่าข้อมูลเพื่อส่ง------------------------//
  const [newYearData, setNewYearData] = useState(''); // เก็บข้อมูลปีใหม่
  const [newTermData, setNewTermData] = useState(''); // เก็บข้อมูลSec และ เทอม ใหม่
  const [projectPK, setProjectPK] = useState(''); // // เก็บค่า ID ของ Project เพื่อส่งค่าไปที่ Select ที่สอง

  //------------------------------------สร้างตัวแปรเก็บค่าข้อมูลจาก Api 2 สหาย เพื่อเเสดงในตัวเลือก ------------------------//
  const [allYearData, setAllYearData] = useState([]); // เก็บข้อมูลปีใหม่
  const [allTermData, setAllTermData] = useState([]); // เก็บข้อมูลSec และ เทอม ใหม่

  //----------------------------ตัวแปร Routers ------------------------//
  const router = useRouter(); // router สร้าง path
  const requestdata = Project_id; // หากไม่เก็บค่าลงตัวแปรใหม่ Additional Select จะมีการเปลี่ยนแปลงค่า Id ตลอดเวลาตัวเลือกจะปิดเองอัตโนมัติ

  //-------------------รีเซตค่า input ใหม่ทุกครั้งที่มีการเรียก Component-------------------------//
  useEffect(() => {
    setNewYearData('');
    setNewTermData('');
  }, [Project_id, activeIndex]);

  //-------------------------------------------รับค่าข้อมูล Api หลักสูตรใหม่ทีที่จะโอนย้าย--------------------------------------//

  // ดึงข้อมูลปีจาก Api year
  useEffect(() => {
    const fetchYearData = async () => {
      if (requestdata) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/getallyearsubjectproject`, {
            params: { preproject_id: requestdata },
          });
          const yearData = response.data && response.data.all_years ? response.data.all_years : []; // ตรวจสอบและกำหนดค่าเป็นอาร์เรย์ว่างหากไม่มีข้อมูล
          setAllYearData(yearData);
          setProjectPK(response.data.project_subject_id);
          setHasData(yearData.length > 0); // ตรวจสอบว่ามีข้อมูลหรือไม่
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchYearData();
  }, [requestdata]);

  // ดึงข้อมูล Sec และ Term จาก Api
  useEffect(() => {
    const fetchTermData = async () => {
      if (newYearData) {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/getallsecinprojectsubject`, {
            params: { subject_project_id: projectPK, year: newYearData },
          });
          const termData = response.data.data || []; // ตรวจสอบและกำหนดค่าเป็นอาร์เรย์ว่างหากไม่มีข้อมูล
          setAllTermData(termData);
          setHasData(response.data.data.length > 0); // ตรวจสอบว่ามีข้อมูลหรือไม่
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchTermData();
  }, [projectPK, newYearData]);

  //------------------------------------จบการรับค่าข้อมูล Api หลักสูตรใหม่ทีที่จะโอนย้าย---------------------------------//

  //---------ฟังก์ชันจัดการการเปลี่ยนแปลงของค่าใน Select dropdown---------//

  const handleNewYearChange = (event) => {
    setNewYearData(event.target.value);
    setNewTermData('');
  }; // จัดการการเปลี่ยนแปลงค่าของปีการศึกษา

  const handleNewTermChange = (event) => {
    setNewTermData(event.target.value);
  }; // จัดการการเปลี่ยนแปลงค่าของ เทอม เเละ Sec

  //---------จบ ฟังก์ชันจัดการการเปลี่ยนแปลงของค่าใน Select dropdown---------//

  // ส่งค่าไปหน้า Edit
  // const handleEditClick = (Project_id) => {
  //   router.push(`/pages/BackOffice/DisplayPreProject/PreprojectEditForm/?id=${Project_id}`);
  // };

  // ฟังชันส่งค่าการโอนย้ายข้อมูล
  const handleTranferSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ตรวจสอบค่าว่างใน TextField
    if (!newYearData || !newTermData) {
      Swal.fire({
        icon: 'error',
        title: 'คุณกรอกข้อมูลไม่ครบ...',
        text: 'กรุณาระบุข้อมูลให้ครบถ้วน!',
      });

      return;
    }

    const data = {
      section_id: newTermData,
      preproject_id: Project_id,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/transferproject`, data)
      .then((response) => {
        // ตรวจสอบ HTTP status code ของ response
        if (response.status === 200) {
          // กรณีสำเร็จ
          Swal.fire({
            icon: 'success',
            title: 'โอนย้ายข้อมูลแล้วเสร็จ',
          });
          setActiveIndex(1);
        } else {
          // กรณีไม่สำเร็จ และตรวจสอบ HTTP status code เพื่อแสดงข้อความแจ้งเตือนที่ต้องการ
          if (response.status === 400) {
            // กรณี Error 400 (Bad Request)
            Swal.fire({
              icon: 'error',
              title: 'มิคุ น่ารั๊ก',
            });
          } else {
            // กรณี Error อื่น ๆ
            Swal.fire({
              icon: 'error',
              title: 'คุณได้โอนย้ายโครงการนี้ไปแล้ว',
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);

        // กรณีเกิด error จากการเชื่อมต่อหรืออื่นๆ
        Swal.fire({
          icon: 'error',
          title: 'คุณได้โอนย้ายโครงการนี้ไปแล้ว',
        });
      });
  };

  // ฟังก์ชันรีเซ็ตข้อมูลในฟอร์ม
  const handleResetForm = () => {
    setNewYearData('');
    setNewTermData('');
  };

  return (
    <Box sx={{ width: '80%', mt: 1 }}>
      {/* ระบุรายละเอียดการโอนย้ายโครงงาน  */}
      <Card sx={{ mb: 1, borderRadius: 2 }}>
        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
          >
            {/* Year Select */}
            <Grid
              item
              xs={12}
              sm={3}
            >
              <FormControl fullWidth>
                <InputLabel id='year-label'>ปีการศึกษา</InputLabel>
                <Select
                  label='Year'
                  value={newYearData}
                  onChange={handleNewYearChange}
                  labelId='year-label'
                >
                  {allYearData && allYearData.length > 0 ? (
                    allYearData.map((year) => (
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
              sm={3}
            >
              <FormControl fullWidth>
                <InputLabel id='term-label'>เทอม/เซ็คชัน</InputLabel>
                <Select
                  label='Term'
                  value={newTermData}
                  onChange={handleNewTermChange}
                  labelId='term-label'
                  disabled={!newYearData || !hasData}
                >
                  {allTermData && allTermData.length > 0 ? (
                    allTermData.map((term) => (
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
          </Grid>
        </CardContent>
      </Card>

      {/* จบการระบุรายละเอียดการโอนย้ายโครงงาน  */}

      {/* Button Menu */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          size='large'
          color='success'
          variant='outlined'
          onClick={handleTranferSubmit}
          sx={{ mt: 1, mr: 2 }}
        >
          โอนย้าย
        </Button>
        <Button
          size='large'
          color='warning'
          variant='outlined'
          onClick={handleResetForm}
          sx={{ mt: 1, mr: 2 }}
        >
          รีข้อมูล
        </Button>
        <Button
          size='large'
          color='error'
          variant='outlined'
          onClick={function () {
            setActiveIndex(1);
          }}
          sx={{ mt: 1 }}
        >
          ย้อนกลับ
        </Button>
      </div>
    </Box>
  );
}
