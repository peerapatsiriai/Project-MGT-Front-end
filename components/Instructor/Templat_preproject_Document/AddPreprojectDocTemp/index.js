import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Box,
  Grid,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from '@mui/material';
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DataGrid } from '@mui/x-data-grid';

const MAX_FILE_SIZE = 1 * 1024 * 1024 * 1024; // กำหนดขาดสูดของไฟล์ที่อัปโหลดเป็น 1GB

const ACCEPTED_FILE_TYPES = [
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
  'application/pdf',
  'video/mp4',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]; // กำหนด fix ประเภทไฟล์

const WhiteBlackButton = styled(Button)({
  background: 'linear-gradient(to bottom, white, white)',
  color: 'black',
  border: '2px solid black',
  '&:hover': {
    background: 'linear-gradient(to bottom, white, white)',
    color: 'black',
    border: '2px solid black',
  },
});

const AddPreprojectDocTemp = ({ activeIndex, setActiveIndex }) => {
  // นำเข้าตัวsweetalert2
  const Swal = require('sweetalert2');

  const [selectedFile, setSelectedFile] = useState(null); // ตัวแปรเก็บค่าไฟล์ที่อัปโหลด
  const [documentName, setDocumentName] = useState(''); // เก็บชื่อเอกสารพร้อมนามสกุลก่อนกดอัปโหลดไฟล์
  const [showFileDetails, setShowFileDetails] = useState(false); // ตัวแปรควบคุมการแสดงรายละเอียดเอกสาร
  const [openFileDialog, setOpenFileDialog] = useState(false); // ตัวแปรควบคุมการเปิดปิด Dialog
  const [fileInputKey, setFileInputKey] = useState(0); // ตัวแปร state สำหรับ key ของ input(ทำให้ input รีค่าใหม่ทึกครั้งที่มีการ อัปโหลดไฟล์)
  const [refreshFlag, setRefreshFlag] = useState(true); // ตัวแปรรีค่าทีเซตใน useEffect

  //-------------------รีเซตค่า input ใหม่ทุกครั้งที่มีการเรียก Component-------------------------//
  useEffect(() => {
    setDocTemp('');
    setSelectedFile('');
  }, [activeIndex]);

  //-------------------------------------------------เริ่มกระบวนการ ฮัปโหลดเอกสาร------------------------------------------//
  //-------------------เริ่มการดึงข้อมูล Api มาเซตข้อมูล-------------------------//

  // ดึงข้อมูลโครงงานจาก id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/preproject?preproject_id=${projectID}`);
        setDocumentName('CE04_' + response.data.PreprojectData[0].preproject_name_th);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [documentName, activeIndex]);

  // ดึงข้อมูลไฟล์เอกสารในฐานข้อมูล
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}api/project-mgt/getallonedocumenttype?preproject_id=1&document_type=CE04`
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [refreshFlag, activeIndex]);

  //-------------------จบการเริ่มการดึงข้อมูล Api มาเซตข้อมูล-------------------------//

  // ฟังก์ชันเก็บค่าไฟลที่อัปโหลด
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        // alert('ขนาดไฟล์เกิน 1GB')
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'ขนาดไฟล์เกิน 1GB',
        });
      } else if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        // alert('อนุญาตเฉพาะไฟล์ docx, doc, imag, pdf, mp4 และไฟล์นำเสนอ powerpoint เท่านั้น')
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'อนุญาตเฉพาะไฟล์ docx, doc, imag, pdf, mp4 และไฟล์นำเสนอ powerpoint เท่านั้น',
        });
      } else {
        setSelectedFile(file);

        // setDocumentType(file.type)
        const i = event.target.files[0];

        // เปลี่ยนค่า key เพื่อให้ React ทำการสร้าง input ใหม่
        setFileInputKey((prevKey) => prevKey + 1);
      }
    }
  };

  // ฟังชันควบคุม การแสดง รายละเอียดไฟล์
  const toggleFileDetails = () => {
    setShowFileDetails(!showFileDetails);
  };

  const toggleFileDetailsClose = () => {
    setShowFileDetails(false); // Hide details
  };

  // ฟังก์ชัน ควบคุมการเปิด/ปิด Dialog
  const handleOpenFileDialog = () => {
    toggleFileDetailsClose(); // Close file details if open
    setOpenFileDialog(true);
  };

  // ฟังก์ชัน รีเซตข้อมูล
  const ResetData = () => {
    setDocTemp('');
    setSelectedFile('');
  };

  // ฟังก์ชันสำหรับ ส่งเอกสาร
  const handleDoctempUpload = async () => {
    const subjectType = 'Preproject';
    try {
      // ประกอบร่างชื่อใหม่
      const fileExtension = selectedFile.name.split('.').pop(); // รับนามสกุลของไฟล์
      //ชื่อไฟล์ใหม่
      const Counttime = Date.now(); // รับค่า เวลาตอนกดใช้งานฟังชัน
      const newFilename = `${docTemp}_${Counttime}.${fileExtension}`;

      // ส่วนเซฟไฟล์ลงในเครื่อง
      const body = new FormData();
      body.append('file', selectedFile); //ส่งไฟล์เข้า Api
      body.append('newFilename', newFilename); //ส่งชื่อเอกสารเข้าไปใน Api
      // ส่งข้อมูลประเภทเอกสารเข้าไปในหน้า Upload
      body.append('subjectType', subjectType); //ส่งประเภทวิชาเข้าไปใน Api

      const uploadResponse = await fetch('/api/upload_doc_temp', {
        method: 'POST',
        body,
      });

      if (!uploadResponse.ok) {
        Swal.fire({
          icon: 'error',
          title: 'มีข้อผิดพลาดเกิดขึ้นนะจ๊ะคนดี',
        });

        return; // ออกจากฟังก์ชันหลังจากแสดงข้อผิดพลาด
      }

      // ตรวจสอบค่าว่างของ Input ก่อนส่ง
      if (docTemp.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'คุณกรอกข้อมูลไม่ครบ...',
          text: 'กรุณาระบุข้อมูลให้ครบถ้วน!',
        });

        return;
      }

      // ส่วนส่งข้อมูลไปยัง API ภายนอก
      const data = {
        ce_file_name: newFilename,
        ce_type: docTemp,
      };

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/insert_new_document_ce`, data);

        Swal.fire({
          icon: 'success',
          title: 'อัปโหลดข้อมูลแล้วเสร็จ',
        });

        // เมื่ออัปโหลดเสร็จ ให้เปลี่ยนค่า refreshFlag เพื่อให้ useEffect ทำงานใหม่
        setRefreshFlag((prevFlag) => !prevFlag); // สลับค่า refreshFlag
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาดในการอัปโหลดข้อมูล',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'มีข้อผิดพลาดเกิดขึ้น',
      });
    }
  };

  //--------------------------------------------------------------ฟังก์ชันดาวน์โหลดเอกสาร--------------------------------------------------//
  // กำหนดตัวแปร
  const [rowdata, setRowData] = useState([]); // ตัวแปรเก็บค่า Row
  // กำหนดหัว Colum
  const columns = [
    {
      field: 'ce_type',
      headerName: 'Document Type',
      width: 80,
      editable: true,
    },
    {
      field: 'ce_file_name',
      headerName: 'Document Name',
      width: 250,
      editable: true,
    },
    {
      field: 'Preview_data',
      headerName: 'ดูตัวอย่างเอกสาร',
      width: 150,
      editable: false,
      renderCell: (params) => (
        <Button
          variant='h6'
          style={{ color: 'pink' }}
          onClick={() => handlePreview(params.row.ce_file_name)}
        >
          ...
        </Button>
      ),
    },
    {
      field: 'download_button',
      headerName: 'ดาวน์โหลดเอกสาร',
      width: 180,
      renderCell: (params) => (
        <Button
          variant='outlined'
          onClick={() => handleDownload(params.row.ce_file_name)}
        >
          ดาวน์โหลด
        </Button>
      ),
    },
  ];

  //-------------------เริ่มการดึงข้อมูล Api มาเซตข้อมูล-------------------------//

  // ดึงข้อมูลไฟล์เอกสารในฐานข้อมูล
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/getallformdocument_ce`);
        console.log('Doc data', response.data.data);

        setRowData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [refreshFlag, activeIndex]);

  //-------------------จบการเริ่มการดึงข้อมูล Api มาเซตข้อมูล-------------------------//

  //----------------------------เริ่มฟังก์ชันดาวโหลดเอกสาร--------------------------//
  const handleDownload = async (FileName) => {
    const fileName = FileName;
    const subjectType = 'Preproject';

    try {
      const downloadResponse = await fetch('/api/download_doc_temp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName, subjectType }),
        responseType: 'blob', // Indicate that the response should be treated as binary data
      });

      if (downloadResponse.ok) {
        const blob = await downloadResponse.blob();
        const blobUrl = URL.createObjectURL(blob);

        // Create a download link and initiate the download
        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = fileName;
        downloadLink.click();

        // Clean up the object URL after the download is initiated
        URL.revokeObjectURL(blobUrl);

        console.log('Download initiated');
      } else {
        console.error('Error downloading document:', downloadResponse.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  //----------------------------จบฟังก์ชันดาวโหลดเอกสาร--------------------------//

  //----------------------------เริ่มฟังก์พรีวิวเอกสาร--------------------------//
  // State to control the preview dialog
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewDocumentUrl, setPreviewDocumentUrl] = useState('');

  // Function to open the preview dialog
  const handlePreview = async (FileName) => {
    const subjectType = 'Preproject';
    try {
      const previewResponse = await fetch('/api/download_doc_temp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName: FileName, subjectType: subjectType }),
        responseType: 'blob',
      });

      if (previewResponse.ok) {
        const blob = await previewResponse.blob();
        setPreviewDocumentUrl(blob);

        console.log('pdf data', previewDocumentUrl);
      } else {
        console.error('Error fetching document:', downloadResponse.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    setPreviewOpen(true);
  };

  // Function to close the preview dialog
  const handleClosePreview = () => {
    setPreviewOpen(false);
    setPreviewDocumentUrl('');
  };

  //----------------------------จบฟังก์พรีวิวเอกสาร--------------------------//

  //--------------------------------------------------------------จบฟังก์ชันดาวน์โหลดเอกสาร--------------------------------------------------//

  //---------------------------------ฟังก์ชันระบุ Type เอกสาร------------------------------------//
  const [docTemp, setDocTemp] = useState([]); // Type of document

  // เก็บข้อมูลลง Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}api/project-mgt/getallonedocumenttype?preproject_id=1&document_type=docTemp`
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [activeIndex]);

  //---------ฟังก์ชันจัดการการเปลี่ยนแปลงของค่าใน Select dropdown---------//

  const handleDoctempTypeChange = (event) => {
    setDocTemp(event.target.value);
  };

  //---------จบ ฟังก์ชันจัดการการเปลี่ยนแปลงของค่าใน Select dropdown---------//

  //---------------------------------จบฟังก์ชันระบุ Document Type------------------------------------//
  return (
    <div>
      {/* ฟังก์ชันระบุ Roleและเลือกผู้ส่งเอกสาร  */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '15px' }}>
        <Card sx={{ mb: 0.5, borderRadius: 2, width: '70%' }}>
          <Typography
            align='center'
            variant='h6'
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AccountCircleIcon style={{ marginRight: '0.2rem', height: '5vh' }} /> Select Type of Document
          </Typography>
          <CardContent>
            <Grid
              container
              spacing={2}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {/* Doctype Select */}
              <Grid
                item
                xs={12}
                sm={3}
              >
                <FormControl fullWidth>
                  <InputLabel id='docTemp-label'>Document Type</InputLabel>
                  <Select
                    labelId='docTemp-label'
                    id='docTemp-select'
                    value={docTemp}
                    label='DocTemp'
                    onChange={handleDoctempTypeChange}
                  >
                    <MenuItem value={'CE01'}>CE01</MenuItem>
                    <MenuItem value={'CE02'}>CE02</MenuItem>
                    <MenuItem value={'CE03_PERSONAL'}>CE03_PERSONAL</MenuItem>
                    <MenuItem value={'CE03_GROUP'}>CE03_GROUP</MenuItem>
                    <MenuItem value={'CE04'}>CE04</MenuItem>
                    <MenuItem value={'CE05'}>CE05</MenuItem>
                    <MenuItem value={'CE06'}>CE06</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* ฟังก์ชันอัปโหลดเอกสาร */}
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '60%', borderRadius: 15 }}>
          <Typography
            align='center'
            variant='h6'
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PostAddIcon style={{ marginRight: '0.2rem', height: '5vh' }} /> Upload Document Template
          </Typography>
          <CardContent align='center'>
            {/* Upload Input */}
            <Grid
              container
              direction='row'
              justifyContent='center'
            >
              <Grid justifyContent='center'>
                <label htmlFor='file-upload'>
                  <WhiteBlackButton
                    variant='contained'
                    color='primary'
                    component='span'
                    onClick={toggleFileDetailsClose}
                    startIcon={<CloudUploadIcon />}
                    style={{ height: '6vh', marginBottom: '5px' }}
                  >
                    <div style={{ width: '15vh' }}>
                      <input
                        key={fileInputKey} // ใช้ค่า key เพื่อให้ input รีเซ็ตเมื่อมีการอัปโหลด
                        type='file'
                        id='file-upload'
                        // style={{ display: 'none' }}
                        onChange={handleFileChange}
                      />
                    </div>
                  </WhiteBlackButton>
                </label>
              </Grid>
              <Grid justifyContent='center'>
                <WhiteBlackButton
                  style={{ marginLeft: 2, height: '6vh' }}
                  variant='contained'
                  color='primary'
                  endIcon={<SendIcon />}
                  disabled={!selectedFile}
                  onClick={() => {
                    handleDoctempUpload();
                    setRefreshFlag((prevFlag) => !prevFlag); // เรียกใช้ useEffect ใน CE02Record
                  }}
                >
                  ส่ง
                </WhiteBlackButton>
              </Grid>
            </Grid>
            {/* Upload Input */}

            <div>
              <Button
                variant='contained'
                style={{ marginTop: 10 }}
                onClick={toggleFileDetails}
                disabled={!selectedFile}
              >
                ดูรายละเอียดเอกสารที่อัปโหลด
              </Button>
            </div>

            {showFileDetails && selectedFile && (
              <Card sx={{ width: '75%' }}>
                <CardContent>
                  <div>
                    <Typography variant='subtitle1'>รายละเอียดไฟล์ </Typography>
                    <Typography>ชื่อไฟล์: {selectedFile.name}</Typography>
                    <Typography>ขนาดไฟล์: {selectedFile.size} bytes</Typography>
                    <Typography>ประเภทไฟล์: {selectedFile.type || 'ไม่ทราบ'}</Typography>
                    <WhiteBlackButton
                      style={{ marginTop: 5 }}
                      onClick={handleOpenFileDialog}
                    >
                      ดูตัวอย่างไฟล์
                    </WhiteBlackButton>
                  </div>
                </CardContent>
              </Card>
            )}

            <Dialog
              open={openFileDialog}
              onClose={() => setOpenFileDialog(false)}
              fullWidth
              maxWidth='md'
            >
              <DialogTitle>ตัวอย่างไฟล์</DialogTitle>
              <DialogContent>
                <iframe
                  src={selectedFile ? URL.createObjectURL(selectedFile) : ''}
                  title='File Preview'
                  width='100%'
                  height='450'
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenFileDialog(false)}>ปิด</Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <Button
          size='large'
          color='warning'
          variant='outlined'
          style={{ marginTop: 10 }}
          onClick={ResetData}
        >
          รีเซ็ตข้อมูล
        </Button>
        <Button
          size='large'
          color='error'
          variant='outlined'
          style={{ marginTop: 10, marginLeft: 5 }}
          onClick={function () {
            setActiveIndex(2);
          }}
        >
          ย้อนกลับ
        </Button>
      </Box>

      {/* เริ่มทำฟังก์ชัน Download เอกสาร */}
      <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '80%', borderRadius: 15 }}>
          <Typography
            align='center'
            variant='h6'
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AccessTimeIcon style={{ marginRight: '0.2rem', height: '5vh' }} /> Document upload history
          </Typography>
          <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
            <Box></Box>
            <Card style={{ width: '80%' }}>
              <DataGrid
                rows={rowdata}
                columns={columns}
                getRowId={(row) => row.ce_doc_id}
                autoHeight
                components={{
                  NoRowsOverlay: () => (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        height: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      <Typography
                        variant='h6'
                        color='textSecondary'
                      >
                        ไม่พบข้อมูล
                      </Typography>
                    </div>
                  ),
                }}
                pageSize={5}
                disableRowSelectionOnClick
              />
            </Card>

            {/* Preview Dialog */}
            <Dialog
              open={previewOpen}
              onClose={handleClosePreview}
              fullWidth
              maxWidth='md'
            >
              <DialogTitle>ตัวอย่างเอกสาร</DialogTitle>
              <DialogContent>
                {/* Use an iframe to display the PDF inline */}
                <iframe
                  src={previewDocumentUrl ? URL.createObjectURL(previewDocumentUrl) : ''}
                  title='PDF Preview'
                  width='100%'
                  height='600'
                  style={{ border: 'none' }}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClosePreview}
                  color='primary'
                >
                  ปิด
                </Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default AddPreprojectDocTemp;
