import Link from 'next/link';

import { useState } from 'react';

export default function Add_General_Data() {
  // Component move control
  const [activeComponent, setActiveComponent] = useState(1);
  const handleOnClick = (index) => {
    setActiveComponent(index);
  };

  return (
    <>
      <div className='wrapper-content'>
        <div style={{ width: '100%' }}>
          {/* Table Head Card */}
          {/* Table Head Card */}

          <div className='heading-section'>
            <h2 className='tf-title pb-30'>PROJECT - LIST</h2>
          </div>

          {/* Content 01 */}
          <div className='widget-tabs relative'>
            <div className='widget-tabs relative'>
              {/* Index Chang */}
              <ul className='widget-menu-tab'>
                <li
                  className={activeComponent === 1 ? 'item-title active' : 'item-title'}
                  onClick={() => handleOnClick(1)}
                >
                  <span className='inner'>
                    <span className='order'>1</span> Add General Data <i className='icon-keyboard_arrow_right' />
                  </span>
                </li>

                <li
                  className={activeComponent === 2 ? 'item-title active' : 'item-title'}
                  onClick={() => handleOnClick(2)}
                >
                  <span className='inner'>
                    <span className='order'>2</span> Add Kawaii to saran <i className='icon-keyboard_arrow_right' />
                  </span>
                </li>

                <li
                  className={activeComponent === 3 ? 'item-title active' : 'item-title'}
                  onClick={() => handleOnClick(3)}
                >
                  <span className='inner'>
                    <span className='order'>3</span> Saran increase Kawaii <i className='icon-keyboard_arrow_right' />
                  </span>
                </li>

                <li
                  className={activeComponent === 4 ? 'item-title active' : 'item-title'}
                  onClick={() => handleOnClick(4)}
                >
                  <span className='inner'>
                    <span className='order'>4</span> Saran rises of kawaii <i className='icon-keyboard_arrow_right' />
                  </span>
                </li>

                <li
                  className={activeComponent === 5 ? 'item-title active' : 'item-title'}
                  onClick={() => handleOnClick(5)}
                >
                  <span className='inner'>
                    <span className='order'>5</span> saran the most kawaii <i className='icon-keyboard_arrow_right' />
                  </span>
                </li>
              </ul>
              {/* End Index Chang */}

              {/* Content data */}
              <div className='widget-content-tab'>
                {/* Content Active 1 */}
                <div
                  className={activeComponent === 1 ? 'widget-content-inner upload active' : 'widget-content-inner upload'}
                  style={{ display: `${activeComponent == 1 ? '' : 'none'}` }}
                >
                  1
                </div>
                {/* End Content Active 1 */}

                {/* Content Active 2 */}
                <div
                  className={activeComponent === 2 ? 'widget-content-inner upload active' : 'widget-content-inner upload'}
                  style={{ display: `${activeComponent == 2 ? '' : 'none'}`, pointerEvents: 'none' }}
                >
                  2
                </div>
                {/* End Content Active 2 */}

                {/* Content Active 3 */}
                <div
                  className={activeComponent === 3 ? 'widget-content-inner upload active' : 'widget-content-inner upload'}
                  style={{ display: `${activeComponent == 3 ? '' : 'none'}` }}
                >
                  3
                </div>
                {/* End Content Active 3 */}

                {/* Content Active 4 */}
                <div
                  className={activeComponent === 4 ? 'widget-content-inner upload active' : 'widget-content-inner upload'}
                  style={{ display: `${activeComponent == 4 ? '' : 'none'}` }}
                >
                  4
                </div>
                {/* End Content Active 4 */}

                {/* Content Active 5 */}
                <div
                  className={activeComponent === 5 ? 'widget-content-inner upload active' : 'widget-content-inner upload'}
                  style={{ display: `${activeComponent == 5 ? '' : 'none'}` }}
                >
                  5
                </div>
                {/* End Content Active 5 */}
              </div>
              {/* End Content data */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
