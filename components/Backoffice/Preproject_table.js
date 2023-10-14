import Link from 'next/link';

import { useState } from 'react';
export default function History() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className='wrapper-content'>
        <div className='inner-content'>
          {/* Table Head Card */}
          <div className='action__body w-full mb-40'>
            <div className='tf-tsparticles'>
              <div
                id='tsparticles7'
                data-color='#161616'
                data-line='#000'
              />
            </div>
            <h2>Discover, create and sell your own NFT</h2>
          </div>
          {/* Table Head Card */}

          <div className='heading-section'>
            <h2 className='tf-title pb-30'>PROJECT - LIST</h2>
          </div>

          {/* Content 01 */}
          <div className='widget-tabs relative'>
            {/* Filter Button */}
            <ul className='widget-menu-tab'>
              <li
                className={activeIndex === 1 ? 'item-title active' : 'item-title'}
                onClick={() => handleOnClick(1)}
              >
                <span className='inner'>All history</span>
              </li>
              <li
                className={activeIndex === 2 ? 'item-title active' : 'item-title'}
                onClick={() => handleOnClick(2)}
              >
                <span className='inner'>Transaction</span>
              </li>
              <li
                className={activeIndex === 3 ? 'item-title active' : 'item-title'}
                onClick={() => handleOnClick(3)}
              >
                <span className='inner'>Upload</span>
              </li>
              <li
                className={activeIndex === 4 ? 'item-title active' : 'item-title'}
                onClick={() => handleOnClick(4)}
              >
                <span className='inner'>Operation</span>
              </li>
            </ul>
            {/* End Filter Button */}
          </div>
        </div>
      </div>
    </>
  );
}
