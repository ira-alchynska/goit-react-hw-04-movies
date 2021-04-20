import React, { Component } from 'react';
import { getPopularMovies } from '../../apiServise/apiServise';
import MovieList from '../../components/MoviesList';
import s from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await getPopularMovies();

    this.setState({ movies: response.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <section className={s.section}>
          <h1 className={s.title}>Trending today</h1>
          <MovieList movies={movies} />
        </section>
      </>
    );
  }
}

export default HomePage;
