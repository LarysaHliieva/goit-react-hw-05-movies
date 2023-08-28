import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCastById } from 'api/movies-api';

import fotoDefault from 'components/photoDefault.avif';

import styles from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const data = await getCastById(movieId);
        setActors(data.cast);
      } catch (response) {
        console.log(response.data.message);
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [setIsLoading, movieId]);

  return (
    <div className={styles.cast}>
      {isLoading && <p>Loading...</p>}
      {error && <p>😥 Something went wrong... Please, reload and try again!</p>}
      {Boolean(actors.length) && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img
                className={styles.actorFoto}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : fotoDefault
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
