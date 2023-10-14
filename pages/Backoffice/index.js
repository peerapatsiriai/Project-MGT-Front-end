import ActiveBid from '@/components/sections/ActiveBid';
import Link from 'next/link';
import { useState } from 'react';

// Component Import
import Create from '@/components/sections/Create';
import Market from '@/components/sections/Market';
import Preproject_table from '@/components/Backoffice/Preproject_table';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!isToggled);

  const [isToggled2, setToggled2] = useState(false);
  const handleToggle2 = () => setToggled2(!isToggled2);

  const [isMobileSidebar, setMobileSidebar] = useState(false);
  const handleMobileSidebar = () => setMobileSidebar(!isMobileSidebar);

  return (
    <>
      <div id='wrapper'>
        <div
          id='page'
          className={`market-page ${isMobileSidebar ? 'full' : ''}`}
        >
          <div id='market-header'>
            <div className='market-header flex items-center justify-between'>
              <div className='widget-search'>
                <form
                  action='#'
                  method='get'
                  role='search'
                  className='search-form relative'
                >
                  <input
                    type='search'
                    id='search'
                    className='search-field style-1'
                    placeholder='Search Someting...'
                    name='s'
                    title='Search for'
                    required
                  />
                  <button
                    className='search search-submit'
                    type='submit'
                    title='Search'
                  >
                    <i className='icon-search' />
                  </button>
                </form>
              </div>
              <div
                className='admin_active'
                id='header_admin'
              >
                <div className='popup-notification relative'>
                  <div
                    className='notification'
                    onClick={handleToggle2}
                  >
                    <svg
                      width={24}
                      height={25}
                      viewBox='0 0 24 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12 18.8476C17.6392 18.8476 20.2481 18.1242 20.5 15.2205C20.5 12.3188 18.6812 12.5054 18.6812 8.94511C18.6812 6.16414 16.0452 3 12 3C7.95477 3 5.31885 6.16414 5.31885 8.94511C5.31885 12.5054 3.5 12.3188 3.5 15.2205C3.75295 18.1352 6.36177 18.8476 12 18.8476Z'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M14.3888 21.8574C13.0247 23.3721 10.8967 23.3901 9.51947 21.8574'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <circle
                        cx={17}
                        cy={5}
                        r={4}
                        fill='#DDF247'
                        stroke='#1D1D1D'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </div>
                  <div className={`avatar_popup ${isToggled2 ? 'visible' : ''}`}>
                    <h5 className='mb-30'>Notification</h5>
                    <div className='widget-recently'>
                      <div className='card-small'>
                        <div className='author'>
                          <img
                            src='assets/images/blog/sidebar-06.jpg'
                            alt=''
                          />
                          <div className='info'>
                            <h6>
                              <Link href='#'>Propw</Link>
                            </h6>
                            <p>
                              <Link href='#'>@themes</Link>
                            </p>
                          </div>
                        </div>
                        <span className='date'>Mon, 08 May </span>
                      </div>
                      <div className='card-small'>
                        <div className='author'>
                          <img
                            src='assets/images/blog/sidebar-06.jpg'
                            alt=''
                          />
                          <div className='info'>
                            <h6>
                              <Link href='#'>Propw</Link>
                            </h6>
                            <p>
                              <Link href='#'>@themes</Link>
                            </p>
                          </div>
                        </div>
                        <span className='date'>Mon, 08 May </span>
                      </div>
                      <div className='card-small'>
                        <div className='author'>
                          <img
                            src='assets/images/blog/sidebar-06.jpg'
                            alt=''
                          />
                          <div className='info'>
                            <h6>
                              <Link href='#'>Propw</Link>
                            </h6>
                            <p>
                              <Link href='#'>@themes</Link>
                            </p>
                          </div>
                        </div>
                        <span className='date'>Mon, 08 May </span>
                      </div>
                      <div className='card-small'>
                        <div className='author'>
                          <img
                            src='assets/images/blog/sidebar-06.jpg'
                            alt=''
                          />
                          <div className='info'>
                            <h6>
                              <Link href='#'>Propw</Link>
                            </h6>
                            <p>
                              <Link href='#'>@themes</Link>
                            </p>
                          </div>
                        </div>
                        <span className='date'>Mon, 08 May </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* user top-bar */}
                <div className='popup-user relative'>
                  <div
                    className='user'
                    onClick={handleToggle}
                  >
                    <img
                      src='assets/images/avatar/avatar-small-09.png'
                      alt=''
                    />
                    <span>
                      Au Esan
                      <i className='icon-keyboard_arrow_down' />
                    </span>
                  </div>
                  <div className={`avatar_popup2 ${isToggled ? 'visible' : ''}`}>
                    <div>
                      <div className='links'>
                        <Link
                          className='block mb-30'
                          href='#'
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M0.774902 18.333C0.774902 18.7932 1.14762 19.1664 1.60824 19.1664C2.06885 19.1664 2.44157 18.7932 2.44157 18.333C2.44157 15.3923 4.13448 12.7889 6.77329 11.5578C7.68653 12.1513 8.77296 12.4997 9.94076 12.4997C11.113 12.4997 12.2036 12.1489 13.119 11.5513C13.9067 11.9232 14.6368 12.4235 15.2443 13.0307C16.6611 14.4479 17.4416 16.3311 17.4416 18.333C17.4416 18.7932 17.8143 19.1664 18.2749 19.1664C18.7355 19.1664 19.1083 18.7932 19.1083 18.333C19.1083 15.8859 18.1545 13.5845 16.4227 11.8523C15.8432 11.2725 15.1698 10.7754 14.4472 10.3655C15.2757 9.3581 15.7741 8.06944 15.7741 6.66635C15.7741 3.44979 13.1569 0.833008 9.94076 0.833008C6.72461 0.833008 4.10742 3.44979 4.10742 6.66635C4.10742 8.06604 4.60379 9.35154 5.42863 10.3579C2.56796 11.9685 0.774902 14.9779 0.774902 18.333V18.333ZM9.94076 2.49968C12.2381 2.49968 14.1074 4.36898 14.1074 6.66635C14.1074 8.96371 12.2381 10.833 9.94076 10.833C7.6434 10.833 5.77409 8.96371 5.77409 6.66635C5.77409 4.36898 7.6434 2.49968 9.94076 2.49968V2.49968Z'
                              fill='white'
                            />
                          </svg>
                          <span>My Profile</span>
                        </Link>
                        <Link
                          className='block mb-30'
                          href='profile.html'
                        >
                          <svg
                            width={20}
                            height={18}
                            viewBox='0 0 20 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M17.1154 0.730469H2.88461C1.29402 0.730469 0 2.02449 0 3.61508V14.3843C0 15.9749 1.29402 17.2689 2.88461 17.2689H17.1154C18.706 17.2689 20 15.9749 20 14.3843V3.61508C20 2.02449 18.706 0.730469 17.1154 0.730469ZM18.7529 10.6035H14.6154C13.6611 10.6035 13 9.95407 13 8.99969C13 8.04532 13.661 7.34544 14.6154 7.34544H18.7529V10.6035ZM18.7529 6.11508H14.6154C13.0248 6.11508 11.7308 7.40911 11.7308 8.99969C11.7308 10.5903 13.0248 11.8843 14.6154 11.8843H18.7529V14.3843C18.7529 15.3386 18.0698 15.9996 17.1154 15.9996H2.88461C1.93027 15.9996 1.29231 15.3387 1.29231 14.3843V3.61508C1.29231 2.66074 1.93023 1.99963 2.88461 1.99963H17.1266C18.0809 1.99963 18.7529 2.6607 18.7529 3.61508V6.11508Z'
                              fill='white'
                            />
                          </svg>
                          <span>Wallet</span>
                        </Link>
                        <Link
                          className='block'
                          href='login.html'
                          id='logout'
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.9668 18.3057H2.49168C2.0332 18.3057 1.66113 17.9335 1.66113 17.4751V2.52492C1.66113 2.06644 2.03324 1.69437 2.49168 1.69437H9.9668C10.4261 1.69437 10.7973 1.32312 10.7973 0.863828C10.7973 0.404531 10.4261 0.0332031 9.9668 0.0332031H2.49168C1.11793 0.0332031 0 1.15117 0 2.52492V17.4751C0 18.8488 1.11793 19.9668 2.49168 19.9668H9.9668C10.4261 19.9668 10.7973 19.5955 10.7973 19.1362C10.7973 18.6769 10.4261 18.3057 9.9668 18.3057Z'
                              fill='white'
                            />
                            <path
                              d='M19.7525 9.40904L14.7027 4.42564C14.3771 4.10337 13.8505 4.10755 13.5282 4.43396C13.206 4.76036 13.2093 5.28611 13.5366 5.60837L17.1454 9.16982H7.47508C7.01578 9.16982 6.64453 9.54107 6.64453 10.0004C6.64453 10.4597 7.01578 10.8309 7.47508 10.8309H17.1454L13.5366 14.3924C13.2093 14.7147 13.2068 15.2404 13.5282 15.5668C13.691 15.7313 13.9053 15.8143 14.1196 15.8143C14.3306 15.8143 14.5415 15.7346 14.7027 15.5751L19.7525 10.5917C19.9103 10.4356 20 10.2229 20 10.0003C20 9.77783 19.9111 9.56603 19.7525 9.40904Z'
                              fill='white'
                            />
                          </svg>
                          <span>Log out</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End user top-bar */}
              </div>
            </div>
          </div>
          {/* Top bar content End */}

          {/* Mobile Sidebar Control */}
          <div className={`btn-canvas ${isMobileSidebar ? '' : 'active'}`}>
            <div
              className='canvas'
              onClick={handleMobileSidebar}
            >
              <span />
            </div>
          </div>
          {/* Mobile Sidebar Control */}

          {/* Sidebar Content */}
          <div className='flat-tabs'>
            <div className={`section-menu-left ${isMobileSidebar ? 'null' : ''}`}>
              {/* Sidebar logo */}
              <div className='box-logo'>
                <Link href='/'>
                  {/* <img
                    src='assets/images/logo/logo.png'
                    alt=''
                  /> */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '60px',
                      backgroundColor: '#333',
                      color: '#DDF247',
                      fontSize: '25px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      borderRadius: '15px',
                    }}
                  >
                    Project-MGT
                  </div>
                </Link>
              </div>
              {/* End Sidebar logo */}

              {/* header Sidebar Show */}
              <div className='create menu-tab'>
                <a
                  className='tf-button style-1 type-1 tablinks'
                  data-tabs='create'
                  onClick={() => handleOnClick(9)}
                >
                  <span>Create</span>
                  <i className='icon-create' />
                </a>
              </div>
              {/*End header Sidebar Show */}

              <div className='over-content'>
                {/* Menu Sidebar Show */}
                <div className='content'>
                  <h6>Marketplace</h6>
                  <ul className='menu-tab'>
                    {/* pre_project Tab */}
                    <li
                      className={activeIndex === 1 ? 'tablinks active' : 'tablinks'}
                      data-tabs='Pre_project'
                      onClick={() => handleOnClick(1)}
                    >
                      <svg
                        width={22}
                        height={22}
                        viewBox='0 0 22 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g opacity='0.2'>
                          <path
                            d='M6.75731 9.35159V15.64'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M11.0351 6.34253V15.64'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M15.2431 12.6746V15.6401'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M15.2954 1.83334H6.70492C3.71048 1.83334 1.8335 3.95275 1.8335 6.95307V15.0469C1.8335 18.0473 3.70175 20.1667 6.70492 20.1667H15.2954C18.2986 20.1667 20.1668 18.0473 20.1668 15.0469V6.95307C20.1668 3.95275 18.2986 1.83334 15.2954 1.83334Z'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                      </svg>
                      <svg
                        width={22}
                        height={22}
                        viewBox='0 0 22 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.71982 1.83371H15.2806C18.3982 1.83371 20.1582 3.60196 20.1673 6.71954V15.2812C20.1673 18.3979 18.3982 20.167 15.2806 20.167H6.71982C3.60223 20.167 1.83398 18.3979 1.83398 15.2812V6.71954C1.83398 3.60196 3.60223 1.83371 6.71982 1.83371ZM11.0456 16.372C11.4407 16.372 11.7697 16.0787 11.8064 15.6845V6.34371C11.8431 6.05954 11.7065 5.77446 11.459 5.61954C11.2014 5.46371 10.8897 5.46371 10.6432 5.61954C10.3947 5.77446 10.2582 6.05954 10.2847 6.34371V15.6845C10.3315 16.0787 10.6606 16.372 11.0456 16.372ZM15.2628 16.372C15.6478 16.372 15.9769 16.0787 16.0237 15.6845V12.6779C16.0502 12.3836 15.9137 12.1095 15.6652 11.9537C15.4187 11.7979 15.107 11.7979 14.8503 11.9537C14.6019 12.1095 14.4653 12.3836 14.502 12.6779V15.6845C14.5387 16.0787 14.8677 16.372 15.2628 16.372ZM7.534 15.6845C7.49734 16.0787 7.16825 16.372 6.77317 16.372C6.379 16.372 6.049 16.0787 6.01325 15.6845V9.35038C5.98575 9.0653 6.12234 8.78205 6.37075 8.62621C6.61734 8.47038 6.92992 8.47038 7.17742 8.62621C7.424 8.78205 7.56242 9.0653 7.534 9.35038V15.6845Z'
                          fill='#DDF247'
                        />
                      </svg>
                      Pre project Table
                    </li>
                    {/* End pre_project Tab */}

                    {/* Project Tab */}
                    <li
                      className={activeIndex === 2 ? 'tablinks active' : 'tablinks'}
                      data-tabs='Project'
                      onClick={() => handleOnClick(2)}
                    >
                      <svg
                        width={22}
                        height={22}
                        viewBox='0 0 22 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g opacity='0.2'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6.61499 14.6693C6.46832 14.6693 6.32074 14.6226 6.19607 14.5272C5.89541 14.2953 5.83857 13.8636 6.07049 13.5629L8.81407 9.99708C8.92591 9.85133 9.09182 9.75691 9.27332 9.73399C9.45849 9.71016 9.63999 9.76149 9.78391 9.87608L12.3689 11.9065L14.6303 8.98874C14.8632 8.68716 15.294 8.63124 15.5947 8.86591C15.8953 9.09874 15.9503 9.53049 15.7175 9.83024L13.0317 13.2952C12.9198 13.4401 12.7548 13.5345 12.5733 13.5565C12.39 13.5812 12.2085 13.5281 12.0637 13.4153L9.48049 11.3858L7.16041 14.4007C7.02474 14.5767 6.82124 14.6693 6.61499 14.6693Z'
                            fill='white'
                          />
                          <mask
                            id='mask0_1075_3648'
                            style={{ maskType: 'luminance' }}
                            maskUnits='userSpaceOnUse'
                            x={15}
                            y={1}
                            width={6}
                            height={6}
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M15.8555 1.83344H20.7541V6.73293H15.8555V1.83344Z'
                              fill='white'
                            />
                          </mask>
                          <g mask='url(#mask0_1075_3648)'>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M18.3048 3.20834C17.7126 3.20834 17.2305 3.68959 17.2305 4.28268C17.2305 4.87484 17.7126 5.35793 18.3048 5.35793C18.897 5.35793 19.3791 4.87484 19.3791 4.28268C19.3791 3.68959 18.897 3.20834 18.3048 3.20834ZM18.3048 6.73293C16.9546 6.73293 15.8555 5.63384 15.8555 4.28268C15.8555 2.93151 16.9546 1.83334 18.3048 1.83334C19.656 1.83334 20.7541 2.93151 20.7541 4.28268C20.7541 5.63384 19.656 6.73293 18.3048 6.73293Z'
                              fill='white'
                            />
                          </g>
                          <mask
                            id='mask1_1075_3648'
                            style={{ maskType: 'luminance' }}
                            maskUnits='userSpaceOnUse'
                            x={1}
                            y={2}
                            width={20}
                            height={19}
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M1.83398 2.60526H20.0407V20.8112H1.83398V2.60526Z'
                              fill='white'
                            />
                          </mask>
                          <g mask='url(#mask1_1075_3648)'>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M14.8809 20.8112H6.9939C3.90748 20.8112 1.83398 18.6433 1.83398 15.4166V8.00809C1.83398 4.77684 3.90748 2.60526 6.9939 2.60526H13.6562C14.0357 2.60526 14.3437 2.91326 14.3437 3.29276C14.3437 3.67226 14.0357 3.98026 13.6562 3.98026H6.9939C4.6949 3.98026 3.20898 5.56059 3.20898 8.00809V15.4166C3.20898 17.8962 4.65915 19.4362 6.9939 19.4362H14.8809C17.1799 19.4362 18.6658 17.8586 18.6658 15.4166V8.96417C18.6658 8.58467 18.9738 8.27667 19.3533 8.27667C19.7328 8.27667 20.0408 8.58467 20.0408 8.96417V15.4166C20.0408 18.6433 17.9673 20.8112 14.8809 20.8112Z'
                              fill='white'
                            />
                          </g>
                        </g>
                      </svg>
                      <svg
                        width={22}
                        height={22}
                        viewBox='0 0 22 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M15.7481 4.0425C15.7481 2.82333 16.7381 1.83333 17.9573 1.83333C19.1764 1.83333 20.1664 2.82333 20.1664 4.0425C20.1664 5.26166 19.1764 6.25166 17.9573 6.25166C16.7381 6.25166 15.7481 5.26166 15.7481 4.0425ZM12.2188 13.5294L14.868 10.1111L14.8313 10.1294C14.978 9.92777 15.0055 9.6711 14.9047 9.44194C14.8048 9.21277 14.5838 9.05694 14.3464 9.0386C14.098 9.0111 13.8514 9.1211 13.7038 9.32277L11.4864 12.1919L8.94634 10.1936C8.79051 10.0744 8.60717 10.0277 8.42384 10.0469C8.24142 10.0744 8.07642 10.1744 7.96551 10.321L5.25309 13.8511L5.19717 13.9336C5.04134 14.226 5.11467 14.6019 5.38967 14.8044C5.51801 14.8869 5.65551 14.9419 5.81134 14.9419C6.02309 14.9511 6.22384 14.8402 6.35217 14.6669L8.65301 11.7052L11.2655 13.6678L11.348 13.7219C11.6413 13.8777 12.008 13.8053 12.2188 13.5294ZM14.1622 3.46527C14.1255 3.69444 14.1072 3.9236 14.1072 4.15277C14.1072 6.21527 15.7755 7.88269 17.8288 7.88269C18.058 7.88269 18.278 7.8561 18.5072 7.81944V15.216C18.5072 18.3244 16.6738 20.1669 13.5572 20.1669H6.78392C3.66634 20.1669 1.83301 18.3244 1.83301 15.216V8.4336C1.83301 5.31694 3.66634 3.46527 6.78392 3.46527H14.1622Z'
                          fill='#DDF247'
                        />
                      </svg>
                      Project Table
                    </li>
                    {/* Project Tab */}
                  </ul>
                </div>
                {/* End Menu Sidebar Show */}
              </div>

              {/* footer Sidebar Show */}
              <div className='bottom'>
                <p>© 2023 Npc99</p>
                <p>Saran_Kawaii</p>
              </div>
              {/* End footer Sidebar Show */}
            </div>
            {/* End Sidebar Content */}

            {/*------------------------------Display Content-------------------------------*/}
            <div className='content-tabs'>
              <div
                id='create'
                className={activeIndex === 9 ? 'tabcontent active' : 'tabcontent'}
              >
                <Create />
              </div>

              {/* display Pre_project table */}
              <div
                id='market'
                className={activeIndex === 1 ? 'tabcontent active' : 'tabcontent'}
              >
                <Preproject_table />
              </div>

              {/* display Project table */}
              <div
                id='bid'
                className={activeIndex === 2 ? 'tabcontent active' : 'tabcontent'}
              >
                <ActiveBid />
              </div>
            </div>
            {/*------------------------------End Display Content-------------------------------*/}
          </div>
        </div>
        <div
          className='modal fade popup'
          id='popup_bid'
          tabIndex={-1}
          role='dialog'
          aria-hidden='true'
        >
          <div
            className='modal-dialog modal-dialog-centered'
            role='document'
          >
            <div className='modal-content'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
              <div className='modal-body'>
                <div className='image'>
                  <img
                    src='assets/images/backgroup-section/popup.png'
                    alt=''
                  />
                </div>
                <div className='logo-rotate'>
                  <img
                    src='assets/images/item-background/item6-img.png'
                    alt=''
                  />
                </div>
                <h2>Subscribe to our newsletter</h2>
                <p>Subscribe for our newsletter to stay in the loop</p>
                <fieldset className='email'>
                  <input
                    type='email'
                    className='style-1'
                    id='email'
                    placeholder='Email address*'
                    name='email'
                    tabIndex={2}
                    aria-required='true'
                    required
                  />
                </fieldset>
                <Link
                  href='#'
                  className='tf-button style-1 h50'
                >
                  Subscribe
                  <i className='icon-arrow-up-right2' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
