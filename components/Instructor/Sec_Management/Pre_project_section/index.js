import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

// Import Component
import AutoSlider1 from '@/components/slider/AutoSlider1';
import AutoSlider2 from '@/components/slider/AutoSlider2';
import { Menu } from '@headlessui/react';

// Next Imports

export default function Pre_project_section({ activeIndex, setActiveIndex, crossSecData, setCrossSecData }) {
  // data variables
  const [secdata, setSecData] = useState([]);

  // sweetalert2 Import
  const Swal = require('sweetalert2');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/sections`);
        setSecData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeIndex]);

  //=====================================Rount page Functions================================//
  // Rout to Section page
  const handleBackClick = () => {
    setActiveIndex(1);
  };

  //=====================================End Rount page Functions================================//

  // ฟังก์ชันสำหรับ Active Sec
  const handleActiveSection = (section_id) => {
    Swal.fire({
      title: 'Do you want to active this section ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: 'no',
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          section_id: section_id,
        };
        console.log('sec data', data);
        if (section_id !== '') {
          axios
            .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/activesection`, data)
            .then(function (response) {
              console.log(response);

              Swal.fire({
                icon: 'success',
                title: 'Finished Active Section.',
              });

              // ทำการอัปเดตค่าในตารางทันทีหลังจากได้รับการประมวลผลจาก API
              setSecData((prevData) => {
                const updatedData = prevData.map((section) =>
                  section.section_id === section_id
                    ? { ...section, sec_status: '1' } // ทำการอัปเดตค่า sec_status เป็น '1' (Active)
                    : section
                );
                return updatedData;
              });
            })
            .catch(function (error) {
              console.log(error);

              Swal.fire({
                icon: 'error',
                title: 'An error occurred.',
                text: 'Unable to Active This Section',
              });
            });
        } else {
          console.log('not have any id to delete');
        }
      } else if (result.isDenied) {
        console.log('cancelled delete');
      }
    });
  };

  // ฟังก์ชันสำหรับ Unactive Sec
  const handleUnActiveSection = (section_id) => {
    Swal.fire({
      title: 'Do you want to unactive this section ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: 'no',
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          section_id: section_id,
        };
        console.log('sec data', data);
        if (section_id !== '') {
          axios
            .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/unactivesection`, data)
            .then(function (response) {
              console.log(response);

              Swal.fire({
                icon: 'success',
                title: 'Finished Unactive Section.',
              });

              //   setSecData((prevData) => prevData.filter((section) => section.section_id !== section_id));
              // ทำการอัปเดตค่าในตารางทันทีหลังจากได้รับการประมวลผลจาก API
              setSecData((prevData) => {
                // ทำการคัดกรองข้อมูลใหม่
                const updatedData = prevData.map((section) =>
                  section.section_id === section_id
                    ? { ...section, sec_status: '0' } // ทำการอัปเดตค่า sec_status เป็น '0' (Unactive)
                    : section
                );
                return updatedData;
              });
            })
            .catch(function (error) {
              console.log(error);

              Swal.fire({
                icon: 'error',
                title: 'An error occurred.',
                text: 'Unable to Unactive This Section',
              });
            });
        } else {
          console.log('not have any id to delete');
        }
      } else if (result.isDenied) {
        console.log('cancelled delete');
      }
    });
  };

  return (
    <>
      <div className='wrapper-content'>
        <div style={{ width: '100%' }}>
          {/* Table Head Card */}
          <div className='action__body w-full mb-40'>
            <div className='tf-tsparticles'>
              <div
                id='tsparticles7'
                data-color='#161616'
                data-line='#000'
              />
            </div>
            <h2>Section Management Page</h2>
            <div className='bg-home7'>
              <AutoSlider1 />
              <AutoSlider2 />
              <AutoSlider1 />
            </div>
          </div>
          {/* Table Head Card */}

          <div className='heading-section'>
            <h2 className='tf-title pb-30'>PRE-PROJECT SECTION - LIST</h2>
          </div>

          {/* Back Button */}
          <div
            className='create menu-tab'
            style={{ marginBottom: '10px' }}
          >
            <div
              className='tf-button style-1 type-1 tablinks'
              data-tabs='create'
              onClick={handleBackClick}
              style={{ cursor: 'pointer' }}
            >
              <span>Back</span>
            </div>
          </div>
          {/* End Back Button */}

          {/* Table Content */}
          <div
            data-wow-delay='0s'
            className='wow fadeInUp col-12'
            style={{ marginLeft: '-16px' }}
          >
            <div className='product-item offers'>
              <h6>
                <i className='icon-description' />
                data
              </h6>
              <i className='icon-keyboard_arrow_down' />
              <div
                className='content'
                style={{ overflowX: 'auto' }}
              >
                {/* header Colum */}
                <div className='table-heading'>
                  <div className='column'>Subject Code</div>
                  <div className='column'>Term/Year</div>
                  <div className='column'>Section Name</div>
                  <div className='column'>Status</div>
                  <div className='column'>Active Section</div>
                  <div className='column'>Unactive Section</div>
                </div>
                {/* End header Colum */}

                {/* Data Table */}
                {secdata && secdata.length > 0 ? (
                  secdata
                    .filter((Sec) => Sec.subject_code === 'ENGCE113' || Sec.subject_code === 'TEDEE310')
                    .map((Sec) => (
                      <div
                        className='table-item'
                        key={Sec.section_id}
                      >
                        <div className='column'>{Sec.subject_code}</div>
                        <div className='column'>
                          Term{Sec.semester_order} {Sec.sem_year}
                        </div>
                        <div
                          className='column'
                          style={{ fontFamily: 'Kanit, sans-serif' }}
                        >
                          {Sec.section_name}
                        </div>
                        <div className='column'>
                          <span>
                            <span className='tf-color'>
                              {(() => {
                                if (Sec.project_status === 0) return 'Reject';
                                else if (Sec.sec_status === '0') return 'Unactive';
                                else if (Sec.sec_status === '1') return 'Active';
                                else return 'Unknown Status';
                              })()}
                            </span>
                          </span>
                        </div>
                        {/* Button 1 Colum */}
                        <div className='column'>
                          <div className='create menu-tab'>
                            <div
                              className='tf-button style-2 type-1 tablinks'
                              data-tabs='create'
                              onClick={() => handleActiveSection(Sec.section_id)}
                              style={{ cursor: 'pointer' }}
                            >
                              <span>Active</span>
                            </div>
                          </div>
                        </div>
                        {/* End Button 1 Colum */}

                        {/* Button 2 Colum */}
                        <div className='column'>
                          <div className='create menu-tab'>
                            <div
                              className='tf-button style-2 type-1 tablinks'
                              data-tabs='create'
                              onClick={() => handleUnActiveSection(Sec.section_id)}
                              style={{ cursor: 'pointer' }}
                            >
                              <span>Unactive</span>
                            </div>
                          </div>
                        </div>
                        {/* End Button 2 Colum */}
                      </div>
                    ))
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <p>No data</p>
                  </div>
                )}
                {/* End Data Table */}
              </div>
            </div>
          </div>
          {/* End Table Content */}
        </div>
      </div>
    </>
  );
}
