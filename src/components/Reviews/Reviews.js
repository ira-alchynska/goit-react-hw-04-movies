import React, { Component } from 'react';
import { getReviews } from '../../apiServise/apiServise';

import s from './Reviews.module.css';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const response = await getReviews(this.props.match.params.movieId);
    this.setState({ reviews: [...response.results] });
    console.log(response.results);
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li className={s.item} key={review.id}>
              <p className={s.headline}>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews for this movie</p>
        )}
      </ul>
    );
  }
}
