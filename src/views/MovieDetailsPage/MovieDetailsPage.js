import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { getDetailsMovie } from '../../apiServise/apiServise';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';
import s from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    original_title: null,
    genres: [],
    overview: null,
    popularity: null,
    poster_path: null,
    tagline: null,
    vote_average: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await getDetailsMovie(this.props.match.params.movieId);
      this.setState({ ...response });
    } catch (error) {
      console.log(error);
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      id,
      poster_path,
      tagline,
      title,
      vote_average,
      overview,
      genres,
      error,
    } = this.state;

    return (
      <section className={s.section}>
        <button type="button" className={s.btn} onClick={this.handleGoBack}>
          Go back
        </button>
        {error ? (
          <h1>The page is not found</h1>
        ) : (
          <>
            <div className={s.movieBlock}>
              <img
                className={s.movieImg}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://kritka.info/uploads/posts/no_poster.jpg'
                }
                alt={tagline}
              />
              <div>
                <h1 className={s.title}>{title}</h1>
                <p>Raiting: {vote_average}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                  {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={s.text}>Additional information</p>
            <ul>
              <Link to={`/movies/${id}/cast`}>
                <li className={s.item}>Cast</li>
              </Link>
              <Link to={`/movies/${id}/reviews`}>
                <li className={s.item}>Reviews</li>
              </Link>
            </ul>
            <Switch>
              <Route path={routes.cast} component={Cast} />
              <Route path={routes.reviews} component={Reviews} />
            </Switch>
          </>
        )}
      </section>
    );
  }
}

export default MovieDetailsPage;
