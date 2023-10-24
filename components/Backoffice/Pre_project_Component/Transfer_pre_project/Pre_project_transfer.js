import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import axios from 'axios';

// Component Import
import Slider from '../Detail_project/Project_Slider/Slider';
import Detail_Data from '../Detail_project/Detail/Detail_Data';
import Handle_Transfer from './Handle_Transfer';

export default function Pre_project_transfer({ activeIndex, setActiveIndex, crossData, setCrossData }) {
  // data variables
  const [prejectdata, setProjectData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/project-mgt/preproject?preproject_id=${crossData}`);
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
            {/* Transfer project Content */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
                width: '100%',
                padding: '5px',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '2vh',
              }}
            >
              <Handle_Transfer
                Project_id={crossData}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
            {/* Detail Content */}
            <Detail_Data
              Project_data={prejectdata.PreprojectData[0]}
              Committee_data={prejectdata.PreprojectCommittee}
              Students_data={prejectdata.PreprojectStudent}
              SubAdviser_data={prejectdata.PreprojectSubAdviser}
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
