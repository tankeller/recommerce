const theme = {
  colors: {
    primaryColor: '#61DBFB',
    primaryHoverColor: '#61DBFB',
    secondaryColor: 'red',
    textColor: '#828282',
    textColorLight: '#9b9c9d',
    borderColor: '#efefef',
  },
  font: {
    familyBase: 'Arial, Helvetica, sans-serif',
    sizes: {
      small: '12px',
      medium: '14px',
      large: '20px',
    },
  },
  boxShadow: {
    base: '0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08)',
    big:
      '0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px - 18px rgba(0, 0, 0, 0.3), 0 -12px 36px - 8px rgba(0, 0, 0, 0.025)',
  },
  pageMaxWidth: '1260px',
  screen: {
    mobile: 'screen and (max-device-width : 767px)',
    mobilePortrait: 'only screen and (max-width : 480px)',
    mobileLandscape:
      'screen and (min-device-width : 481px) and (max-device-width : 767px)',
    mobileLandscapeUp: 'screen and (min-device-width : 481px)',
    tablet:
      'screen and (min-device-width : 768px) and (max-device-width : 1259px)',
    tabletPortrait:
      'screen and (min-device-width : 768px) and (max-device-width : 1024px)',
    tabletPortraitUp: 'screen and (min-device-width : 768px)',
    tabletLandscape:
      'screen and (min-device-width : 1025px) and (max-device-width : 1259px)',
    tabletLandscapeUp: 'screen and (min-device-width : 1025px)',
    desktop: 'only screen and (min-device-width : 1260px)',
    large: 'only screen and (min-device-width : 1600px)',
  },
};

export default theme;
