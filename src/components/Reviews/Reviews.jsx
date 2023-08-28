import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewstById } from 'api/movies-api';

import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getReviewstById(movieId);
        setReviews(data.results);
        console.log(data.results);
      } catch (response) {
        console.log(response.data.message);
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [setIsLoading, movieId]);
  return (
    <div className={styles.cast}>
      {isLoading && <p>Loading...</p>}
      {error && <p>😥 Something went wrong... Please, reload and try again!</p>}
      {Boolean(reviews.length) && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
