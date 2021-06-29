import { useState } from 'react';
import searchIcon from 'assets/icons/search.svg';
import { StyledSearchBar } from 'components/search-bar/styled-search-bar';

const SearchBar = (props) => {
  const [formValue, setFormValue] = useState('');

  return (
    <StyledSearchBar data-testid="search-bar">
      <img src={searchIcon} alt="Search icon" />
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
