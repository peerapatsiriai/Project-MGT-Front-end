import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

// Import Component
import AutoSlider1 from '@/components/slider/AutoSlider1';
import AutoSlider2 from '@/components/slider/AutoSlider2';

export default function Templat_project_Document({ activeIndex, setActiveIndex, crossSecData, setCrossSecData }) {
  // data variables
  const [docTemp, setDocTemp] = useState([]);
  // sweetalert2 Import
  const Swal = require('sweetalert2');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/getallformdocument_ch`);
        setDocTemp(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeIndex]);

  //=====================================Rount page Functions================================//

  // Rout to Insert Doctenp page
  const handleInsertDoctempClick = () => {
    setActiveIndex(2.1);
  };

  //=====================================End Rount page Functions================================//

  // ฟังก์ชันสำหรับ Active docTemp
  const handleActiveDocument = (ch_doc_id, ch_status) => {
    Swal.fire({
      title: 'Do you want to active this Document ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: 'no',
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          ch_doc_id: ch_doc_id,
        };
        if (ch_doc_id !== '') {
          axios
            .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/activecedocument_ch`, data)
            .then(function (response) {
              console.log(response);

              Swal.fire({
                icon: 'success',
                title: 'Finished Active Document.',
              });

              // ทำการอัปเดตค่าในตารางทันทีหลังจากได้รับการประมวลผลจาก API
              setDocTemp((prevData) => {
                const updatedData = prevData.map((docTemp) =>
                  docTemp.ch_doc_id === ch_doc_id
                    ? { ...docTemp, ch_status: 1 } // ทำการอัปเดตค่า ce_status เป็น '1' (Active)
                    : docTemp
                );
                return updatedData;
              });
            })
            .catch(function (error) {
              console.log(error);

              Swal.fire({
                icon: 'error',
                title: 'An error occurred.',
                text: 'Unable to Active This Document',
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

  // ฟังก์ชันสำหรับ Unactive docTemp
  const handleUnActiveDocument = (ch_doc_id, ch_status) => {
    Swal.fire({
      title: 'Do you want to Unactive this Document ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: 'no',
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          ch_doc_id: String(ch_doc_id),
        };
        if (ch_doc_id !== '') {
          axios
            .post(`${process.env.NEXT_PUBLIC_API}api/project-mgt/unactivecedocument_ch`, data)
            .then(function (response) {
              console.log(response);

              Swal.fire({
                icon: 'success',
                title: 'Finished Active Section.',
              });

              // ทำการอัปเดตค่าในตารางทันทีหลังจากได้รับการประมวลผลจาก API
              setDocTemp((prevData) => {
                const updatedData = prevData.map((docTemp) =>
                  docTemp.ch_doc_id === ch_doc_id
                    ? { ...docTemp, ch_status: 0 } // ทำการอัปเดตค่า ch_status เป็น '0' (UnActive)
                    : docTemp
                );
                return updatedData;
              });
            })
            .catch(function (error) {
              console.log(error);

              Swal.fire({
                icon: 'error',
                title: 'An error occurred.',
                text: 'Unable to Active This Document',
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
            <h2 className='tf-title pb-30'>DOCUMENT - LIST</h2>
          </div>

          <div
            className='widget-tabs relative'
            style={{ display: 'flex' }}
          >
            {/* Insert Doctemp Button */}
            <div
              className='create menu-tab'
              style={{ marginBottom: '10px' }}
            >
              <div
                className='tf-button style-1 type-1 tablinks'
                data-tabs='create'
                onClick={handleInsertDoctempClick}
                style={{ cursor: 'pointer' }}
              >
                <span>Add Document</span>
                <i className='icon-create' />
              </div>
            </div>
            {/* End Insert Doctemp Button */}
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
                  <div className='column'>Document Type</div>
                  <div className='column'>File name</div>
                  <div className='column'>Status</div>
                  <div className='column'>Active Section</div>
                  <div className='column'>Unactive Section</div>
                </div>
                {/* End header Colum */}

                {/* Data Table */}
                {docTemp && docTemp.length > 0 ? (
                  docTemp.map((docTemp) => (
                    <div
                      className='table-item'
                      key={docTemp.ch_doc_id}
                    >
                      <div className='column'>{docTemp.ch_type}</div>
                      <div className='column'>
                        <div className='column'>
                          {docTemp.ch_file_name !== undefined && docTemp.ch_file_name !== null
                            ? docTemp.ch_file_name.length <= 11
                              ? docTemp.ch_file_name
                              : `${docTemp.ch_file_name.slice(0, 12)}...`
                            : ''}
                        </div>
                      </div>
                      <div className='column'>
                        <span>
                          <span className='tf-color'>
                            {(() => {
                              if (docTemp.ch_status === 0) return 'Unactive';
                              else if (docTemp.ch_status === 1) return 'Active';
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
                            onClick={() => handleActiveDocument(docTemp.ch_doc_id, docTemp.ch_status)}
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
                            onClick={() => handleUnActiveDocument(docTemp.ch_doc_id, docTemp.ch_status)}
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
