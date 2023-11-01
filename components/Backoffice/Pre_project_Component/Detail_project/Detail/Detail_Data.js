import React, { useEffect, useState } from 'react';

export default function Detail_Data({ Project_data, Committee_data, Students_data, SubAdviser_data }) {
  console.log('00000', Project_data.project_type);
  return (
    <>
      <div>
        <div className='heading-section pb-30'>
          <h2 className='tf-title '>Project Detail</h2>
        </div>
        <div
          data-wow-delay='0s'
          className='wow fadeInUp product-item details'
        >
          {/* header Table */}
          <h6>
            <i className='icon-description' />
            Details
          </h6>
          <i className='icon-keyboard_arrow_down' />
          {/*End header Table */}

          <div className='content'>
            {/* Content 01 */}
            <div className='details-item'>
              <span>Project Name TH</span>
              <span className='tf-color'>{Project_data.preproject_name_th || Project_data.project_name_th}</span>
            </div>
            {/* End Content 01 */}

            {/* Content 02 */}
            <div className='details-item'>
              <span>Project Name EN</span>
              <span className='tf-color'>{Project_data.preproject_name_eng || Project_data.project_name_eng}</span>
            </div>
            {/* End Content 02 */}

            {/* Content 03 */}
            <div className='details-item'>
              <span>Status</span>
              <span className='tf-color'>
                {Project_data.project_status === '0'
                  ? 'Reject'
                  : Project_data.project_status === '1'
                  ? 'Wait for Confirm'
                  : Project_data.project_status === '2'
                  ? 'Confirm and In Process'
                  : Project_data.project_status === '3'
                  ? 'Ready to Test'
                  : Project_data.project_status === '4'
                  ? 'In Testing'
                  : Project_data.project_status === '5'
                  ? 'Tested Pass'
                  : Project_data.project_status === '6'
                  ? 'Transfer'
                  : 'Unknown Status'}
              </span>
            </div>
            {/* End Content 03 */}

            <br />
            {/* Content 04 */}
            <div className='details-item'>
              <span>Year</span>
              <span className='tf-color'>{Project_data.sem_year}</span>
            </div>
            {/* End Content 04 */}

            {/* Content 05 */}
            <div className='details-item'>
              <span>Term</span>
              <span className='tf-color'>{Project_data.semester_order}</span>
            </div>
            {/* End Content 05 */}

            {/* Content 06 */}
            <div className='details-item'>
              <span>Section</span>
              <span className='tf-color'>{Project_data.section_name}</span>
            </div>
            {/* End Content 06 */}

            {/* Content 07 */}
            <div className='details-item'>
              <span>Project ID</span>
              <span className='tf-color'>{Project_data.subject_code}</span>
            </div>
            {/* End Content 07 */}

            {/* Content 08 */}
            <div className='details-item'>
              <span style={{ marginRight: '10px' }}>Curriculum</span>
              <span className='tf-color'>{Project_data.curriculum_name}</span>
            </div>
            {/* End Content 08 */}

            {/* Content 08 */}
            <div className='details-item'>
              <span>Type</span>
              <span className='tf-color'>{Project_data.project_type}</span>
            </div>
            {/* End Content 08 */}

            <br />
            {/* Content 09 */}
            <div className='details-item'>
              <span>Adviser</span>
              <span className='tf-color'>
                {Project_data.tea_name} {Project_data.tea_lname}
              </span>
            </div>
            {/* End Content 09 */}

            {/* Content 10 */}
            <div className='details-item'>
              <span>Sub Adviser</span>
              <div className='tf-color'>
                {SubAdviser_data.length > 0
                  ? SubAdviser_data.map((subAdviser, index) => (
                      <span key={index}>
                        {subAdviser.tea_name} {subAdviser.tea_lname}
                        {index < SubAdviser_data.length - 1 ? ', ' : ''}
                      </span>
                    ))
                  : 'No data'}
              </div>
            </div>
            {/* End Content 10 */}

            {/* Content 11 */}
            <div className='details-item'>
              <span>Committee</span>
              <div className='tf-color'>
                {Committee_data.length > 0
                  ? Committee_data.map((Committee, index) => (
                      <span key={index}>
                        {Committee.tea_name} {Committee.tea_lname}
                        {index < Committee_data.length - 1 ? ', ' : ''}
                      </span>
                    ))
                  : 'No data'}
              </div>
            </div>
            {/* End Content 11 */}

            {/* Content 12 */}
            <div className='details-item'>
              <span style={{ marginRight: '10px' }}>Member</span>
              <div className='tf-color'>
                {Students_data.length > 0
                  ? Students_data.map((Students, index) => (
                      <span key={index}>
                        {Students.stu_name} {Students.stu_lname}
                        {index < Students_data.length - 1 ? ', ' : ''}
                      </span>
                    ))
                  : 'No data'}
              </div>
            </div>
            {/* End Content 12 */}
          </div>
        </div>
      </div>
    </>
  );
}
