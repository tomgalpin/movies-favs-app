import { useDispatch, useSelector } from 'react-redux';
import { addToPlaylist } from 'store/playlist.js';
import { FaRegCheckCircle, FaPlusCircle } from 'react-icons/fa';
import {
  StyledMovie,
  StyledPoster,
  StyledAddBtn,
  StyledTitle,
} from 'components/movie/styled-movie';
import { colors } from 'assets/styles/_variables';

const Movie = (props) => {
  const dispatch = useDispatch();
  const hasPoster = props.poster !== 'N/A';
  const playlist = useSelector((state) => state.playlist.playlist.value);
  const hasMovieInPlaylist = !!playlist[props.id];

  const addMovie = () => {
    dispatch(addToPlaylist(props));
  };

  const renderIcon = () => {
    if (hasMovieInPlaylist) {
      return <FaRegCheckCircle color={colors.green} />;
    } else {
      return <FaPlusCircle color={colors.mediumGray} />;
    }
  };

  const renderAddBtn = () => {
    if (!props.isPlaylist) {
      return (
        <StyledAddBtn
          onClick={addMovie}
          hasMovieInPlaylist={hasMovieInPlaylist}
        >
          {renderIcon()}
        </StyledAddBtn>
      );
    }
  };

  return (
    <StyledMovie data-testid="movie">
      {renderAddBtn()}
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
