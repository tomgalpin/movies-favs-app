import styled from 'styled-components';
import { colors } from 'assets/styles/_variables';

const StyledSearchTitle = styled.h3`
  font-style: normal;
  color: ${colors.black};
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.01em;
  margin-bottom: 23px;
`;

const SearchTitle = ({ searchParams }) => {
  const isValidSearchParam = searchParams.length > 0;
  const searchTitle = isValidSearchParam
    ? `Search:  ${searchParams}`
    : 'The Fast and the Furious Movies';

  return (
    <StyledSearchTitle data-testid="search-title">
      {searchTitle}
    </StyledSearchTitle>
  );
};

export default SearchTitle;
