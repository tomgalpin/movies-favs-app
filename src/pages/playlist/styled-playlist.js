import styled from 'styled-components';
import { colors } from 'assets/styles/_variables';

const footerHeight = '100px';

const StyledPagePlaylist = styled.div`
  min-height: 100vh;
  background-color: ${colors.green};

  main {
    padding: 0 20px ${footerHeight} 20px;
  }
`;

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${footerHeight};
  background-color: ${colors.white};
`;

export { StyledPagePlaylist, StyledFooter };
