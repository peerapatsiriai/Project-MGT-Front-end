//------------------------------ Custom Style --------------------------//
export const dropdownStyle = {
    border: '1px solid #DDF247',
    fontFamily: 'Manrope',
    color: 'rgba(221, 242, 71, 1)', // change color of arrow icon in dropdown but not work
    '.MuiSelect-icon': {
      color: 'rgba(255, 255, 255, 0.53)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '#DDF247',
    },
  };

  export const inputLabelStyle = {
    color: 'rgba(255, 255, 255, 0.53)',
    fontFamily: 'Azeret Mono',
    backgroundColor: '#161616',
    padding: '0 10px 0 10px',
    '&.Mui-focused': {
      color: '#161616',
      backgroundColor: '#DDF247',
    },
  };

  export const typographyStyle = {
    color: '#DDF247',
    // color: '#fff',
    fontFamily: 'Manrope',
    fontSize: '16px',
    fontWeight: 900,
  };

  export const textFieldStyle = {
    borderColor: 'rgba(221, 242, 71, 1)',
    border: '0.5px solid #DDF247',
    fontFamily: 'Azeret Mono',
    color: 'rgba(221, 242, 71, 1)',
    '& input': {
      color: 'rgba(255, 255, 255, 0.53)', // Change this to your desired label color
      fontFamily: 'Azeret Mono',
    },
    '& label': {
      color: 'rgba(255, 255, 255, 0.53)', // Change this to your desired label color
      fontFamily: 'Azeret Mono',
      backgroundColor: '#161616',
      padding: '0 10px 0 10px',
    },
    '& label.Mui-focused': {
      color: '#161616',
      padding: '0 10px 0 10px',
      backgroundColor: '#DDF247',
    },
    '& .MuiInput-underline:after': {
      // borderBottomColor: 'rgba(221, 242, 71, 1)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'rgba(221, 242, 71, 1)',
      },
      '&:hover fieldset': {
        // borderColor: 'rgba(221, 242, 71, 1)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
  };

  // For add and clear button
  export const buttonStyle = {
    color: '#fff',
    // color: '#DDF247',
    // color: 'rgba(255, 255, 255, 0.53)',
    fontFamily: 'Azeret Mono',
  };

  // For submit button
  export const buttonStyle2 = {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '22px',
    backgroundColor: 'rgba(221, 242, 71, 1)',
    color: 'rgba(22, 22, 22, 1)',
    borderRadius: '14px',
    padding: '10px',
    height: '50px',
    border: 'none',
    display: 'inline-block',
    WebkitAppearance: 'none',
    WebkitTransition: 'all ease 0.3s',
    MozTransition: 'all ease 0.3s',
    transition: 'all ease 0.3s',
    width: '90px',
    margin: '0px 10px',
    '&:hover': {
      // outline: '0',
      border: 'none',
      // backgroundColor:' rgba(22, 22, 22, 1)',
      color: 'rgba(221, 242, 71, 1)',
    },
  };