import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import MovieList from '../../components/MoviesList';
import { getSearchMovies } from '../../apiServise/apiServise';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleSearchSubmit = query => {
    this.setState({ query });
  };

  async componentDidMount() {
    const response = await getSearchMovies(this.state.query);
    this.setState({ movies: response.results });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const response = await getSearchMovies(this.state.query);
      console.log(response.results);
      this.setState({ movies: [...response.results] });
    }
    if (this.state.movies.length === 0) {
      alert('');
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.handleSearchSubmit} />

        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    );
  }
}
