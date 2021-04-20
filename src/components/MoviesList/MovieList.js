import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li className={s.item} key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <MoviePreview poster_path={poster_path} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default withRouter(MovieList);
