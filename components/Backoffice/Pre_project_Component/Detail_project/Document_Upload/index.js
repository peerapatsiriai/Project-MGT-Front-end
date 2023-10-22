import Link from 'next/link';
import { useState } from 'react';

export default function Document_Upload({ DocumentData, activeIndex, setActiveIndex, crossData }) {
  console.log('DocumentData', DocumentData);

  // Rout to CE01 Upload Document page
  const CE01Page = (project_id) => {
    setActiveIndex(1.3_1);
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

            {/* CE01 Content */}
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
                      onClick={() => CE01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>CE01</Link>
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
            {/* End CE01 Content */}

            {/* CE02 Content */}
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
                      onClick={() => CE01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>CE02</Link>
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
            {/* End CE02 Content */}

            {/* CE03 Content */}
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
                      onClick={() => CE01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>CE03</Link>
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
            {/* End CE03 Content */}

            {/* CE04 Content */}
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
                      onClick={() => CE01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>CE04</Link>
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
            {/* End CE04 Content */}

            {/* CE05 Content */}
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
                      onClick={() => CE01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>CE05</Link>
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
            {/* End CE05 Content */}

            {/* CE06 Content */}
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
                      onClick={() => CE01Page(crossData)}
                      href='#'
                      className='tf-button'
                    >
                      <span>VIEW</span>
                    </a>
                  </div>
                </div>
                <h5 className='name'>
                  <Link href='#'>CE06</Link>
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
            {/* End CE06 Content */}

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
                      onClick={() => CE01Page(crossData)}
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
                      onClick={() => CE01Page(crossData)}
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
