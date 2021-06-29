import { useState } from 'react';
import { StyledPageSearch } from 'pages/search/styled-page-search';
import Header from 'components/header/header';
import SearchTitle from 'components/search-title/search-title';
import MoviesGrid from 'components/movies-grid/movies-grid';
// import Modal from 'components/modal/modal';

const PageSearch = () => {
  const apiKey = 'a73ed059';
  const baseUrl = `https://www.omdbapi.com/?apiKey=${apiKey}`;
  const fastFurious = `${baseUrl}&s=The%20Fast%20and%20the%20Furious`;

  // const urlSuffix = `?api_key=${apiKey}&language=en-US&page=`;
  // const mostRecent = `${baseUrl}/movie/now_playing${urlSuffix}&page=`;

  const [searchParams, setSearchParams] = useState('');
  // const [initNewSearch, setInitNewSearch] = useState(false);
  // const [modalContent, setModalContent] = useState({});
  // const [hasModal, setHasModal] = useState(false);
  const [getUrl, setGetUrl] = useState(fastFurious);

  let isValidSearchParam = searchParams.length > 0;
  const searchTitle = isValidSearchParam
    ? `Search:  ${searchParams}`
    : 'The Fast and the Furious Movies';

  const showModal = (content) => {
    // document.body.classList.add('no-scroll');
    // setModalContent(content);
    // setHasModal(true);
    console.log('show modal');
  };

  const hideModal = () => {
    // document.body.classList.remove('no-scroll');
    // setHasModal(false);
    console.log('hide modal');
  };

  const handleSubmit = (e, formValue) => {
    const trimmed = formValue.trim();

    e.preventDefault();
    console.log('handleSubmit');
    // setInitNewSearch(true);

    if (trimmed.length > 0) {
      const uriEncoded = encodeURIComponent(trimmed);
      // const searchUrl = `${baseUrl}/search/multi${urlSuffix}&query=${uriEncoded}&page=`;
      console.log(49, uriEncoded);

      setSearchParams(trimmed);
      // setGetUrl(searchUrl);
    } else {
      setSearchParams('');
      // setGetUrl(mostRecent);
    }

    // initNewSearch={initNewSearch}
  };

  return (
    <StyledPageSearch data-testid="page-search">
      <Header handleSubmit={handleSubmit} />
      <main>
        <SearchTitle title={searchTitle} />
        <MoviesGrid showModal={showModal} getUrl={getUrl} />
      </main>
      {/* <Modal content={modalContent} hasModal={hasModal} hideModal={hideModal} /> */}
    </StyledPageSearch>
  );
};

export default PageSearch;
