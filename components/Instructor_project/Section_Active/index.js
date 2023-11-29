import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

// Import Component
import AutoSlider1 from '@/components/slider/AutoSlider1';
import AutoSlider2 from '@/components/slider/AutoSlider2';
import { Menu } from '@headlessui/react';

// Next Imports

export default function Section_Active({ activeIndex, setActiveIndex, setSectionIdData }) {
  // data variables
  const [secdata, setSecData] = useState([]);

  // sweetalert2 Import
  const Swal = require('sweetalert2');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/secs_active`);
        setSecData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeIndex]);

  //=====================================Rount page Functions================================//

  // Rout to Insert Section page
  const handleSectionDetailClick = (section_id) => {
    setSectionIdData(section_id);
    setActiveIndex(3.1);
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
            <h2>Section Active</h2>
            <div className='bg-home7'>
              <AutoSlider1 />
              <AutoSlider2 />
              <AutoSlider1 />
            </div>
          </div>
          {/* Table Head Card */}

          <div className='heading-section'>
            <h2 className='tf-title pb-30'>ACTIVE SECTION - LIST</h2>
          </div>

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
                  <div className='column'>Section Detail</div>
                </div>
                {/* End header Colum */}

                {/* Data Table */}
                {secdata && secdata.length > 0 ? (
                  secdata
                    .filter((Sec) => Sec.subject_type === 2)
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
                              onClick={() => handleSectionDetailClick(Sec.section_id)}
                              style={{ cursor: 'pointer' }}
                            >
                              <span>Detail</span>
                            </div>
                          </div>
                        </div>
                        {/* End Button 1 Colum */}
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
