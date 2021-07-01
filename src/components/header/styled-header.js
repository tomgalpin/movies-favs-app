import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, screenWidths } from 'assets/styles/_variables';

const StyledHeader = styled.header`
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors['gray']};
  margin-bottom: 37px;
  background-color: ${colors.white};

  @media screen and (min-width: ${screenWidths.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;

    @media screen and (min-width: ${screenWidths.mobile}) {
      font-size: 24px;
    }

    @media screen and (min-width: ${screenWidths.tablet}) {
      margin-bottom: 0;
    }

    span {
      color: ${colors.pink};
    }
  }
`;

const StyledRouterLink = styled(Link)`
  display: block;
  font-size: 15px;
  font-weight: bold;
  color: ${colors.black};
  margin-bottom: 10px;

  &:hover {
    color: ${colors.pink};
  }

  @media screen and (min-width: ${screenWidths.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${screenWidths.tablet}) {
    margin-bottom: 0;
  }
`;

export { StyledHeader, StyledRouterLink };
