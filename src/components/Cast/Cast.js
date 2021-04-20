import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCredits } from '../../apiServise/apiServise';
import s from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  };

  state = {
    cast: [],
  };

  async componentDidMount() {
    const response = await getCredits(this.props.match.params.movieId);
    this.setState({ cast: [...response.cast] });
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          {cast &&
            cast.map(actor => {
              return (
                <li className={s.actorCard} key={actor.cast_id}>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                        : 'https://kritka.info/uploads/posts/no_poster.jpg'
                    }
                    alt={actor.name}
                    className={s.actorImg}
                  />
                  <div className={s.descr}>
                    <p className={s.text}>{actor.name}</p>
                    <p className={s.text}>
                      <span className={s.content}>Character:</span>
                      {actor.character}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default Cast;
