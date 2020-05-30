const theme = {
  colors: {
    primaryColor: '#61DBFB',
    primaryHoverColor: '#61DBFB',
    secondaryColor: 'red',
    textColor: '#828282',
    textColorLight: '#9b9c9d',
  },
  font: {
    sizes: {
      small: '12px',
      medium: '14px',
      large: '20px',
    },
  },
  pageMaxWidth: '1260px',
  screen: {
    mobile: 'screen and (max-device-width : 767px)',
    mobilePortrait: 'only screen and (max-width : 480px)',
    mobileLandscape:
      'screen and (min-device-width : 481px) and (max-device-width : 767px)',
    tablet:
      'screen and (min-device-width : 768px) and (max-device-width : 1259px)',
    tabletPortrait:
      'screen and (min-device-width : 768px) and (max-device-width : 1024px)',
    tabletLandscape:
      'screen and (min-device-width : 1025px) and (max-device-width : 1259px)',
    desktop: 'only screen and (min-device-width : 1260px)',
    large: 'only screen and (min-device-width : 1600px)',
  },
};

export default theme;
