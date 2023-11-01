import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import axios from 'axios';

// Component Import
import Slider from '../../Pre_project_Component/Detail_project/Project_Slider/Slider';
import Detail_Data from '../../Pre_project_Component/Detail_project/Detail/Detail_Data';
import Document_Project_Upload from './Document_Project_Upload';

export default function Project_Real_Detail({ activeIndex, setActiveIndex, crossdataProject }) {
  // data variables
  const [prejectdata, setProjectData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/project?project_id=${crossdataProject}`);
        setProjectData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeIndex]);

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
            <Detail_Data
              Project_data={prejectdata.PreprojectData[0]}
              Committee_data={prejectdata.PreprojectCommittee}
              Students_data={prejectdata.PreprojectStudent}
              SubAdviser_data={prejectdata.PreprojectSubAdviser}
            />
            {/* Document Upload */}
            <Document_Project_Upload
              DocumentData={prejectdata.PreprojectDocument}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              crossData={crossdataProject}
            />
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
      </Layout>
    </>
  );
}
