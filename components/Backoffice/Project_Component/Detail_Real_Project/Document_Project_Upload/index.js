import Link from 'next/link';
import { useState } from 'react';

export default function Document_Project_Upload({ DocumentData, activeIndex, setActiveIndex, crossData }) {
  // Rout to Chapter01 Upload Document page
  const Chapter01Page = (project_id) => {
    setActiveIndex(2.1_1);
  };

  // Rout to Chapter02 Upload Document page
  const Chapter02Page = (project_id) => {
    setActiveIndex(2.1_2);
  };

  // Rout to Chapter03 Upload Document page
  const Chapter03Page = (project_id) => {
    setActiveIndex(2.1_3);
  };

  // Rout to Chapter04 Upload Document page
  const Chapter04Page = (project_id) => {
    setActiveIndex(2.1_4);
  };

  // Rout to Chapter05 Upload Document page
  const Chapter05Page = (project_id) => {
    setActiveIndex(2.1_5);
  };

  // Rout to Chapter06 Upload Document page
  const Chapter06Page = (project_id) => {
    setActiveIndex(2.1_6);
  };

  return (
    <>
      <div className='tf-section discover-item loadmore-8-item'>
        <div className='themesflat-container'>
          <div className='row'>
            {/* header */}
            <div className='col-md-12'>
              <div className='heading-section pb-30'>
                <h2 className='tf-title '>Document</h2>
              </div>
            </div>
            {/* End header */}

            {/* บทที่ 01 Content */}
            <div
              data-wow-delay='0s'
              className='wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6'
            >
              <div className='tf-card-box style-1'>
                <div className='card-media'>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/124/124063.png'
                      alt=''
                    />
                  </div>

                  <div className='button-place-bid'>
                    <a
                      onClick={() => Chapter01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>บทที่ 1</Link>
                </h5>
                {/* Send Time */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Send Time : 00/00/0000</span>
                </div>
                {/* End Send Time */}

                <div className='divider' />
                {/* Status Content */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Document Status</span>
                  <h6 className='price gem'>
                    <i className='icon-gem' />
                    {DocumentData.ce01.status}
                  </h6>
                </div>
                {/* End Status Content */}
              </div>
            </div>
            {/* End บทที่ 1 Content */}

            {/* บทที่ 2 Content */}
            <div
              data-wow-delay='0s'
              className='wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6'
            >
              <div className='tf-card-box style-1'>
                <div className='card-media'>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/124/124063.png'
                      alt=''
                    />
                  </div>

                  <div className='button-place-bid'>
                    <a
                      onClick={() => Chapter02Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>บทที่ 2</Link>
                </h5>
                {/* Send Time */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Send Time : 00/00/0000</span>
                </div>
                {/* End Send Time */}

                <div className='divider' />
                {/* Status Content */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Document Status</span>
                  <h6 className='price gem'>
                    <i className='icon-gem' />
                    {DocumentData.ce02.status}
                  </h6>
                </div>
                {/* End Status Content */}
              </div>
            </div>
            {/* End บทที่ 2 Content */}

            {/* บทที่ 3 Content */}
            <div
              data-wow-delay='0s'
              className='wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6'
            >
              <div className='tf-card-box style-1'>
                <div className='card-media'>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/124/124063.png'
                      alt=''
                    />
                  </div>

                  <div className='button-place-bid'>
                    <a
                      onClick={() => Chapter03Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>บทที่ 3</Link>
                </h5>
                {/* Send Time */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Send Time : 00/00/0000</span>
                </div>
                {/* End Send Time */}

                <div className='divider' />
                {/* Status Content */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Document Status</span>
                  <h6 className='price gem'>
                    <i className='icon-gem' />
                    {DocumentData.ce03.status}
                  </h6>
                </div>
                {/* End Status Content */}
              </div>
            </div>
            {/* End บทที่ 3 Content */}

            {/* บทที่ 4 Content */}
            <div
              data-wow-delay='0s'
              className='wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6'
            >
              <div className='tf-card-box style-1'>
                <div className='card-media'>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/124/124063.png'
                      alt=''
                    />
                  </div>

                  <div className='button-place-bid'>
                    <a
                      onClick={() => Chapter04Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>บทที่ 4</Link>
                </h5>
                {/* Send Time */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Send Time : 00/00/0000</span>
                </div>
                {/* End Send Time */}

                <div className='divider' />
                {/* Status Content */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Document Status</span>
                  <h6 className='price gem'>
                    <i className='icon-gem' />
                    {DocumentData.ce04.status}
                  </h6>
                </div>
                {/* End Status Content */}
              </div>
            </div>
            {/* End บทที่ 4 Content */}

            {/* บทที่ 5 Content */}
            <div
              data-wow-delay='0s'
              className='wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6'
            >
              <div className='tf-card-box style-1'>
                <div className='card-media'>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/124/124063.png'
                      alt=''
                    />
                  </div>

                  <div className='button-place-bid'>
                    <a
                      onClick={() => Chapter05Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>บทที่ 5</Link>
                </h5>
                {/* Send Time */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Send Time : 00/00/0000</span>
                </div>
                {/* End Send Time */}

                <div className='divider' />
                {/* Status Content */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Document Status</span>
                  <h6 className='price gem'>
                    <i className='icon-gem' />
                    {DocumentData.ce05.status}
                  </h6>
                </div>
                {/* End Status Content */}
              </div>
            </div>
            {/* End บทที่ 5 Content */}

            {/* บทที่ 6 Content */}
            <div
              data-wow-delay='0s'
              className='wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6'
            >
              <div className='tf-card-box style-1'>
                <div className='card-media'>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/124/124063.png'
                      alt=''
                    />
                  </div>

                  <div className='button-place-bid'>
                    <a
                      onClick={() => Chapter06Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>บทที่ 6</Link>
                </h5>
                {/* Send Time */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Send Time : 00/00/0000</span>
                </div>
                {/* End Send Time */}

                <div className='divider' />
                {/* Status Content */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Document Status</span>
                  <h6 className='price gem'>
                    <i className='icon-gem' />
                    {DocumentData.ce06.status}
                  </h6>
                </div>
                {/* End Status Content */}
              </div>
            </div>
            {/* End บทที่ 6 Content */}

            {/* Slide Content */}
            <div
              data-wow-delay='0s'
              className='wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6'
            >
              <div className='tf-card-box style-1'>
                <div className='card-media'>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/124/124063.png'
                      alt=''
                    />
                  </div>

                  <div className='button-place-bid'>
                    <a
                      //   onClick={() => CE01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>Slide</Link>
                </h5>
                {/* Send Time */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Send Time : 00/00/0000</span>
                </div>
                {/* End Send Time */}

                <div className='divider' />
                {/* Status Content */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Document Status</span>
                  <h6 className='price gem'>
                    <i className='icon-gem' />
                    Pass
                  </h6>
                </div>
                {/* End Status Content */}
              </div>
            </div>
            {/* End Slide Content */}

            {/* VDO Content */}
            <div
              data-wow-delay='0s'
              className='wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6'
            >
              <div className='tf-card-box style-1'>
                <div className='card-media'>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/124/124063.png'
                      alt=''
                    />
                  </div>

                  <div className='button-place-bid'>
                    <a
                      //   onClick={() => CE01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>VDO</Link>
                </h5>
                {/* Send Time */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Send Time : 00/00/0000</span>
                </div>
                {/* End Send Time */}

                <div className='divider' />
                {/* Status Content */}
                <div className='meta-info flex items-center justify-between'>
                  <span className='text-bid'>Document Status</span>
                  <h6 className='price gem'>
                    <i className='icon-gem' />
                    Pass
                  </h6>
                </div>
                {/* End Status Content */}
              </div>
            </div>
            {/* End VDO Content */}
          </div>
        </div>
      </div>
    </>
  );
}
