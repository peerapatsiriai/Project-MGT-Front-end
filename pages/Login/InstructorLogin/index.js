import Layout from '@/components/layout/Layout';
import Link from 'next/link';
export default function InstructorLogin() {
  return (
    <>
      <Layout
        headerStyle={5}
        footerStyle={5}
      >
        <div className='tf-section-2 pt-60 widget-box-icon'>
          <div className='themesflat-container w920'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='heading-section-1'>
                  <h2 className='tf-title pb-16'>Instructor Login</h2>
                  <p className='pb-40'>Get started today by entering just a few details</p>
                </div>
              </div>
              <div className='col-12'>
                <div className='widget-login'>
                  <form
                    id='commentform'
                    className='comment-form'
                  >
                    <fieldset className='email'>
                      <label>Email *</label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        tabIndex={2}
                        aria-required='true'
                        required
                        style={{ color: 'black' }}
                      />
                    </fieldset>
                    <fieldset className='password'>
                      <label>Password *</label>
                      <input
                        className='password-input'
                        type='password'
                        id='password'
                        name='password'
                        tabIndex={2}
                        aria-required='true'
                        required
                        style={{ color: 'black' }}
                      />
                      {/* <i
                        className='icon-show password-addon'
                        id='password-addon'
                      /> */}
                      <div className='forget-password'>
                        <Link href='/Login'>Back to select role</Link>
                      </div>
                    </fieldset>
                    <div className='btn-submit mb-30'>
                      <Link
                        href='/market'
                        className='tf-button style-1 h50 w-100'
                        type='submit'
                      >
                        Login
                        <i className='icon-arrow-up-right2' />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
