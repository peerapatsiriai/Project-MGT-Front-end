import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import axios from 'axios';

// Component Import
import Slider from '@/components/Backoffice/Pre_project_Component/Detail_project/Project_Slider/Slider';
import Detail_Data from '@/components/Backoffice/Pre_project_Component/Detail_project/Detail/Detail_Data';
// import Document_Upload from '@/components/Backoffice/Pre_project_Component/Detail_project/Document_Upload';

import P_Detail from './P_Detail';

export default function Project_Insec_Detail({ activeIndex, setActiveIndex, projectIdData, setProjectIdData }) {
  // data variables
  const [prejectdata, setProjectData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}api/project-mgt/preproject?preproject_id=${projectIdData}`
        );
        setProjectData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeIndex]);

  // Back page before
  const handleBackClick = (project_id) => {
    setActiveIndex(3.1);
  };

  return (
    <>
      <Layout
        headerStyle={5}
        footerStyle={5}
      >
        {prejectdata && prejectdata.PreprojectData && prejectdata.PreprojectData.length > 0 ? (
          <>
            {/* Slide Content */}
            <Slider data={prejectdata.PreprojectData[0]} />
            {/* Detail Content */}
            <P_Detail
              Project_data={prejectdata.PreprojectData[0]}
              Committee_data={prejectdata.PreprojectCommittee}
              Students_data={prejectdata.PreprojectStudent}
              SubAdviser_data={prejectdata.PreprojectSubAdviser}
            />
            {/* Document Upload */}
            {/* <Document_Upload
              DocumentData={prejectdata.PreprojectDocument}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              projectIdData={projectIdData}
              setProjectIdData={setProjectIdData}
            /> */}
          </>
        ) : (
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            No data
          </p>
        )}

        {/* Button Control */}
        <div
          className='widget-tabs relative'
          style={{ display: 'flex' }}
        >
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
      </Layout>
    </>
  );
}
