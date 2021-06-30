import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { StyledSearchBar } from 'components/search-bar/styled-search-bar';
import { colors } from 'assets/styles/_variables';

const SearchBar = (props) => {
  const [formValue, setFormValue] = useState('');

  return (
    <StyledSearchBar data-testid="search-bar">
      <FaSearch color={colors.gray} />
      <form onSubmit={(e) => props.handleSubmit(e, formValue)}>
        <input
          type="text"
          value={formValue}
          placeholder="Search for a movie"
          onChange={(e) => setFormValue(e.target.value)}
        />
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
