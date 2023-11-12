import Link from 'next/link';
import Img_slide from './Img_slide';
import Project_Detail from '../Project_Detail';

export default function Slider({ data }) {
  return (
    <>
      <div className='flat-pages-title-home3'>
        <div className='bg-grid-line'>
          <div className='bg-line' />
        </div>
        <div className='themesflat-container w1346'>
          <div className='row'>
            <div className='col-12 pages-title'>
              <div className='content'>
                <h1
                  data-wow-delay='0s'
                  className='wow fadeInUp'
                  style={{ fontFamily: 'EB Garamond' }}
                >
                  {data.preproject_name_eng || data.project_name_eng}
                </h1>
                <p
                  data-wow-delay='0.1s'
                  className='wow fadeInUp'
                >
                  Project Description: -
                </p>
              </div>
            </div>
            <div className='col-12'>{/* <Img_slide /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
}
