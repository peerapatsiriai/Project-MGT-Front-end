import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import axios from 'axios';

// Next Imports
import { useRouter } from 'next/router';

// Import Component
import AutoSlider1 from '@/components/slider/AutoSlider1';
import AutoSlider2 from '@/components/slider/AutoSlider2';
import { Menu } from '@headlessui/react';

export default function Open_Subject({ activeIndex, setActiveIndex }) {
  // data variables
  const [generalSubjectData, setGeneralSubjectData] = useState([]);
  const [curiculumsData, setCuriculumsData] = useState([]);
  const [curiculumsId, setCuriculumsId] = useState([]);

  // console.log('generalSubjectData', generalSubjectData);
  // console.log('curiculumsData', curiculumsData);
  // console.log('curiculumsId', curiculumsId);

  // filter Control
  // const [activeIndex, setActiveIndex] = useState(1);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}api/project-mgt/subject_general?curriculum_id=${curiculumsId}`
        );
        setGeneralSubjectData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [curiculumsId]);

  // Fetch data Curiculum from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/curriculums`);
        setCuriculumsData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //=====================================Rount page Functions================================//
  // Rout to Insert Subject page
  const handleInsertSubjectClick = () => {
    setActiveIndex(3.1);
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
            <h2>Open Subject page</h2>
            <div className='bg-home7'>
              <AutoSlider1 />
              <AutoSlider2 />
              <AutoSlider1 />
            </div>
          </div>
          {/* Table Head Card */}

          <div className='heading-section'>
            <h2 className='tf-title pb-30'>SUBJECT - LIST</h2>
          </div>

          {/* Content 01 */}
          <div className='widget-tabs relative'>
            {/* Filter Button */}
            <ul className='widget-menu-tab'>
              <li
                className={'item-title'}
                onClick={handleInsertSubjectClick}
              >
                <span className='inner'>Insert Subject</span>
              </li>

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
                    <span className='inner'>Curriculum</span>
                  </Menu.Button>
                  <Menu.Items
                    as='div'
                    className='dropdown-menu d-block'
                  >
                    {curiculumsData && curiculumsData.length > 0 ? (
                      curiculumsData.map((curriculum) => (
                        <div
                          key={curriculum.curriculum_id}
                          className='dropdown-item'
                        >
                          <div
                            className='sort-filter'
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              setCuriculumsId(curriculum.curriculum_id);
                              // setActiveIndex(3);
                            }}
                          >
                            <span>{curriculum.curriculum_name}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div
                        key='no-data'
                        className='dropdown-item'
                      >
                        <div
                          className='sort-filter'
                          style={{ cursor: 'pointer' }}
                        >
                          <span>No data</span>
                        </div>
                      </div>
                    )}
                  </Menu.Items>
                </Menu>
              </div>
              {/* End Select Button Colum */}
            </ul>
            {/* End Filter Button */}
          </div>

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
                  <div className='column'>Subject Name Th</div>
                  <div className='column'>Subject Name En</div>
                  <div className='column'>Action</div>
                </div>
                {/* End header Colum */}

                {/* Data Table */}
                {generalSubjectData && generalSubjectData.length > 0 ? (
                  generalSubjectData.map((generalSubject) => (
                    <div
                      className='table-item'
                      key={generalSubject.preproject_id}
                    >
                      <div className='column'>{generalSubject.subject_name_th}</div>
                      <div className='column'>{generalSubject.subject_name_en}</div>
                      {/* <div className='column'>
                        <span>
                          <span className='tf-color'>{generalSubject.project_status}</span>
                        </span>
                      </div> */}
                      {/* Button Colum */}
                      <div className='column'>
                        <span>
                          <span className='tf-color'>Button</span>
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
