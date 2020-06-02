import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

import Img from '../img/Img';
import logo from '../../../assets/static/logo.png';
import logoRetina from '../../../assets/static/logo@2x.png';

const Logo = ({ pathToLogo, ...props }) => {
  return (
    <LogoContainer {...props}>
      <Link to="/">
        <Img src={pathToLogo} srcRetina={logoRetina} alt="Logo" />
      </Link>
    </LogoContainer>
  );
};

export const LogoContainer = styled.div`
  max-width: 200px;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

Logo.defaultProps = {
  pathToLogo: logo,
};

Logo.propTypes = {
  pathToLogo: PropTypes.string,
};

export default Logo;
