import styled from 'styled-components';
import { colors } from 'assets/styles/_variables';

const StyledMovie = styled.div`
  position: relative;
  background: ${colors.black};
  border: 1px solid ${colors.gray};
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  height: 200px;

  &:hover {
    box-shadow: none;
  }
`;

const StyledPoster = styled.div`
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const StyledAddBtn = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${colors.white};
  border: 2px solid ${colors.black};
  cursor: pointer;
  z-index: 100;

  span {
    font-weight: bold;
    font-size: 20px;
    color: ${colors.black};
  }
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.black};
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8085609243697479) 22%,
    rgba(255, 255, 255, 0) 100%
  );
  text-align: center;

  p {
    font-size: 16px;
    line-height: 26px;
    color: ${colors.white};
    width: 80%;
    margin: 0 auto 20px auto;
  }
`;

export { StyledMovie, StyledPoster, StyledAddBtn, StyledTitle };
