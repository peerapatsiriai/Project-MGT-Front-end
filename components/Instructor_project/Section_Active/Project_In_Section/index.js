import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import axios from 'axios';

// Import Component
import AutoSlider1 from '@/components/slider/AutoSlider1';
import AutoSlider2 from '@/components/slider/AutoSlider2';
import { Menu } from '@headlessui/react';

// Next Imports

export default function Project_In_Section({ activeIndex, setActiveIndex, projectIdData, setProjectIdData, sectionIdData }) {
  // data variables
  const [projectdata, setProjectData] = useState([]);

  // sweetalert2 Import
  const Swal = require('sweetalert2');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //   `${process.env.NEXT_PUBLIC_API}api/project-mgt/preproject_in_sec?section_id=${sectionIdData}`
          `${process.env.NEXT_PUBLIC_API}api/project-mgt/preproject_in_sec?section_id=10`
        );
        setProjectData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeIndex]);

  //=====================================Rount page Functions================================//

  // Rout to Detail Project page
  const handleDetailProjectClick = (project_id) => {
    setProjectIdData(project_id);
    setActiveIndex(3.1_1);
  };

  // Rout to Project Status Chang page
  const handleChangProjectStatusClick = (project_id) => {
    // setProjectIdData(project_id);
    // setActiveIndex(2.2);
  };

  // Rout to Project Transfer project Selection page
  const handleTransferSelecttionClick = (project_id) => {
    setActiveIndex(3.1_2);
  };

  // Back page before
  const handleBackClick = (project_id) => {
    setActiveIndex(3);
  };

  //=====================================End Rount page Functions================================//

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
            <h2>Project In Section</h2>
            <div className='bg-home7'>
              <AutoSlider1 />
              <AutoSlider2 />
              <AutoSlider1 />
            </div>
          </div>
          {/* Table Head Card */}

          <div className='heading-section'>
            <h2 className='tf-title pb-30'>PROJECT - LIST</h2>
          </div>

          {/* Button Control */}
          <div
            className='widget-tabs relative'
            style={{ display: 'flex' }}
          >
            {/* Tranfer Rount page Project Button */}
            <div
              className='create menu-tab'
              style={{ marginBottom: '10px' }}
            >
              <div
                className='tf-button style-1 type-1 tablinks'
                data-tabs='create'
                onClick={handleTransferSelecttionClick}
                style={{ cursor: 'pointer' }}
              >
                <span>Transfer project</span>
                {/* <i className='icon-create' /> */}
              </div>
            </div>
            {/* End ITranfer Rount page Project Button  */}

            {/* Back Button */}
            <div
              className='create menu-tab'
              style={{ marginBottom: '10px', marginLeft: '5px' }}
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
          </div>
          {/* End Button Control */}

          {/* Table Content */}
          <div
            data-wow-delay='0s'
            className='wow fadeInUp col-12'
            style={{ marginLeft: '-16px' }}
          >
            <div className='product-item offers'>
              <h6>
                <i className='icon-description' />
                Data
              </h6>
              <i className='icon-keyboard_arrow_down' />
              <div
                className='content'
                style={{ overflowX: 'auto' }}
              >
                {/* header Colum */}
                <div className='table-heading'>
                  <div className='column'>Project Code</div>
                  <div className='column'>Project Name</div>
                  <div className='column'>Project Type</div>
                  <div className='column'>Status</div>
                  {/* <div className='column'>Edit</div> */}
                  {/* <div className='column'>Detail</div> */}
                  <div className='column'>Menu</div>
                </div>
                {/* End header Colum */}

                {/* Data Table */}
                {projectdata && projectdata.length > 0 ? (
                  projectdata.map((project) => (
                    <div
                      className='table-item'
                      key={project.preproject_id}
                    >
                      <div className='column'>{project.project_code}</div>
                      <div
                        className='column'
                        style={{ fontFamily: 'Kanit, sans-serif' }}
                      >
                        {project.preproject_name_th}
                      </div>
                      <div className='column'>{project.project_type}</div>
                      <div className='column'>
                        <span>
                          <span className='tf-color'>
                            {(() => {
                              if (project.project_status === 0) return 'Reject';
                              else if (project.project_status === '1') return 'Wait for Confirm';
                              else if (project.project_status === '2') return 'Confirm and In Process';
                              else if (project.project_status === '3') return 'Ready to Test';
                              else if (project.project_status === '4') return 'In Testing';
                              else if (project.project_status === '5') return 'Tested Pass';
                              else if (project.project_status === '6') return 'Transfer';
                              else return 'Unknown Status';
                            })()}
                          </span>
                        </span>
                      </div>
                      {/* Button Colum */}
                      {/* <div className='column'>
                        <div className='create menu-tab'>
                          <div
                            className='tf-button style-2 type-1 tablinks'
                            data-tabs='create'
                            onClick={() => handleEditProjectClick(project.preproject_id)}
                            style={{ cursor: 'pointer' }}
                          >
                            <span>Edit Data</span>
                          </div>
                        </div>
                      </div> */}
                      {/* End Button Colum */}

                      {/* Select Button Colum */}
                      <div className='column'>
                        <Menu
                          as='div'
                          className='dropdown'
                        >
                          <Menu.Button
                            className='btn btn-secondary dropdown-toggle'
                            type='button'
                            id='dropdownMenuButton'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z'
                                stroke='white'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                            <span className='inner'>Menu</span>
                          </Menu.Button>
                          <Menu.Items
                            as='div'
                            className='dropdown-menu d-block'
                          >
                            <div className='dropdown-item'>
                              <div
                                className='sort-filter'
                                onClick={() => handleDetailProjectClick(project.preproject_id)}
                                style={{ cursor: 'pointer' }}
                              >
                                <span>Detail</span>
                              </div>
                            </div>
                            <div className='dropdown-item'>
                              <div
                                className='sort-filter'
                                onClick={() => handleChangProjectStatusClick(project.preproject_id)}
                                style={{ cursor: 'pointer' }}
                              >
                                <span>Chang Status</span>
                              </div>
                            </div>
                          </Menu.Items>
                        </Menu>
                      </div>
                      {/* End Select Button Colum */}
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
