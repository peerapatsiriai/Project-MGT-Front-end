import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import axios from 'axios';

// Import Component
import AutoSlider1 from '@/components/slider/AutoSlider1';
import AutoSlider2 from '@/components/slider/AutoSlider2';

// Next Imports

export default function Preproject_table({ activeIndex, setActiveIndex }) {
  // data variables
  const [prejectdata, setProjectData] = useState([]);

  console.log('prejectdata', prejectdata);

  // filter Control
  // const [activeIndex, setActiveIndex] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/preprojects`);
        console.log(response.data.data);
        setProjectData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Rout to Insert Project page
  const handleInsertProjectClick = () => {
    setActiveIndex(1.1);
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
            <h2 style={{ fontFamily: 'EB Garamond' }}>Pre Project Management page</h2>
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

          {/* Content 01 */}
          <div className='widget-tabs relative'>
            {/* Filter Button */}
            <ul className='widget-menu-tab'>
              <li
                className={activeIndex === 1 ? 'item-title active' : 'item-title'}
                onClick={() => handleOnClick(1)}
              >
                <span className='inner'>All history</span>
              </li>
              <li
                className={activeIndex === 2 ? 'item-title active' : 'item-title'}
                onClick={() => handleOnClick(2)}
              >
                <span className='inner'>Transaction</span>
              </li>
              <li
                className={activeIndex === 3 ? 'item-title active' : 'item-title'}
                onClick={() => handleOnClick(3)}
              >
                <span className='inner'>Upload</span>
              </li>
              <li
                className={activeIndex === 4 ? 'item-title active' : 'item-title'}
                onClick={() => handleOnClick(4)}
              >
                <span className='inner'>Operation</span>
              </li>
            </ul>
            {/* End Filter Button */}

            {/* Insert Project Button */}
            <div
              className='create menu-tab'
              style={{ marginBottom: '10px' }}
            >
              <div
                className='tf-button style-1 type-1 tablinks'
                data-tabs='create'
                onClick={handleInsertProjectClick}
              >
                <span>Insert Project</span>
                <i className='icon-create' />
              </div>
            </div>
          </div>
          {/* End Insert Project Button */}

          {/* Table Content */}
          <div
            data-wow-delay='0s'
            className='wow fadeInUp col-12'
          >
            <div className='product-item offers'>
              <h6>
                <i className='icon-description' />
                data
              </h6>
              <i className='icon-keyboard_arrow_down' />
              <div className='content'>
                {/* header Colum */}
                <div className='table-heading'>
                  <div className='column'>Project Id</div>
                  <div className='column'>Project Name</div>
                  <div className='column'>Term</div>
                  <div className='column'>Sec</div>
                  <div className='column'>Year</div>
                  <div className='column'>Project Type</div>
                  <div className='column'>Status</div>
                  <div className='column'>Action</div>
                </div>
                {/* End header Colum */}

                {/* Data Table */}
                {prejectdata && prejectdata.length > 0 ? (
                  prejectdata.map((project) => (
                    <div
                      className='table-item'
                      key={project.preproject_id}
                    >
                      <div className='column'>{project.preproject_id}</div>
                      <div className='column'>{project.preproject_name_th}</div>
                      <div className='column'>{project.semester_order}</div>
                      <div className='column'>{project.section_name}</div>
                      <div className='column'>{project.sem_year}</div>
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
                      <div className='column'>
                        <span>
                          <span className='tf-color'>{project.created_by}</span>
                        </span>
                      </div>
                      {/* End Button Colum */}
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
