import { useDispatch } from 'react-redux';
import { addToPlaylist } from 'store/playlist.js';
import {
  StyledMovie,
  StyledPoster,
  StyledAddBtn,
  StyledTitle,
} from 'components/movie/styled-movie';

const Movie = (props) => {
  const dispatch = useDispatch();
  const hasPoster = props.poster !== 'N/A';

  const addMovie = () => {
    // console.log('add the movie to the redux playlist');
    dispatch(addToPlaylist('test'));
  };

  return (
    <StyledMovie data-testid="movie">
      <StyledAddBtn onClick={addMovie}>
        <span>+</span>
      </StyledAddBtn>
      <StyledPoster>
        {hasPoster && <img src={props.poster} alt={props.title} />}
      </StyledPoster>
      <StyledTitle>
        <p>{props.title}</p>
      </StyledTitle>
    </StyledMovie>
  );
};

export default Movie;
