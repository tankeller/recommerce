/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../../assets/theme';

import SectionWrapper from '../../atoms/sectionWrapper/SectionWrapper';
import Ul from '../..//atoms/ul/Ul';
import NavListElement from '../../atoms/navListElement/NavListElement';

const AppFooter = ({ ...props }) => {
  return (
    <Footer {...props}>
      <FooterMainInner>
        <Row>
          <div className="widget-block">
            <div className="widget-block-title">Column 1</div>
            <div className="widget-block-body">
              <Ul>
                <NavListElement>Link 1</NavListElement>
                <NavListElement>Link 2</NavListElement>
                <NavListElement>link 3</NavListElement>
              </Ul>
            </div>
          </div>
          <div className="widget-block">
            <div className="widget-block-title">Column 2</div>
            <div className="widget-block-body">
              <Ul>
                <NavListElement>Link 1</NavListElement>
                <NavListElement>Link 2</NavListElement>
                <NavListElement>link 3</NavListElement>
              </Ul>
            </div>
          </div>
          <div className="widget-block">
            <div className="widget-block-title">Column 3</div>
            <div className="widget-block-body">
              <Ul>
                <NavListElement>Link 1</NavListElement>
                <NavListElement>Link 2</NavListElement>
                <NavListElement>link 3</NavListElement>
              </Ul>
            </div>
          </div>
          <div className="widget-block">
            <div className="widget-block-title">Column 4</div>
            <div className="widget-block-body">
              <Ul>
                <NavListElement>Link 1</NavListElement>
                <NavListElement>Link 2</NavListElement>
                <NavListElement>link 3</NavListElement>
              </Ul>
            </div>
          </div>
        </Row>
      </FooterMainInner>
      <FooterCopy>
        <FooterCopyInner>©copyrights by Portaltech</FooterCopyInner>
      </FooterCopy>
    </Footer>
  );
};

export default AppFooter;

/**
 * Styles
 */
export const Footer = styled.footer`
  display: block;
  width: 100%;
  background: #f1f1f1;
`;

export const FooterMainInner = styled(SectionWrapper)`
  display: block;
  width: 100%;
  padding: 30px 0 0;
  font-size: ${theme.font.sizes.medium};
`;

export const Row = styled.div`
  display: block;

  &:after {
    content: '';
    display: table;
    clear: both;
  }

  .widget-block {
    width: 100%;
    padding: 0 30px;
    margin-bottom: 30px;
    color: ${theme.colors.textColorLight};

    @media ${theme.screen.tablet}, ${theme.screen.desktop} {
      float: left;
    }

    @media ${theme.screen.tablet} {
      width: 50%;
    }

    @media ${theme.screen.desktop} {
      width: 25%;
    }
  }

  .widget-block-title {
    font-size: ${theme.font.sizes.large};
  }

  .widget-block-body {
    margin-top: 10px;
  }
`;

export const FooterCopy = styled.div`
  background: #fff;
  display: block;
  width: 100%;
`;

export const FooterCopyInner = styled(SectionWrapper)`
  padding: 10px 15px;
  text-align: center;
  color: ${theme.colors.textColorLight};
  font-size: ${theme.font.sizes.small};
`;
