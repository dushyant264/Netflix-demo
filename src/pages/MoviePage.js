import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MoviePageContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const MovieImage = styled.div`
  flex: 1;
  height: 50vh; /* Updated height */
  background-size: cover;
  background-position: center;
  position: relative;
`;

const MovieInfo = styled.div`
  flex: 1;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NetflixLogo = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  background-image: url('https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png');
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: 200px;
`;

const MovieTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const GenresContainer = styled.div`
  margin-bottom: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 0.5rem;

    li {
      &:before {
        content: '|';
        margin: 0 0.5rem;
      }

      &:first-child:before {
        content: none;
      }
    }
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 2rem;
`;

const MoviePage = () => {
  const location = useLocation();
  const movie = location.state && location.state.movie;

  if (!movie) {
    // Handle the case where movie data is not available
    return <div>No movie data found.</div>;
  }

  return (
    <MoviePageContainer>
      <MovieImage style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.image})` }} />
      <MovieInfo>
        <NetflixLogo />
        <MovieTitle>{movie.name}</MovieTitle>
        <GenresContainer>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={genre}>{genre}{index < movie.genres.length - 1 && '|'}</li>
            ))}
          </ul>
        </GenresContainer>
        <DescriptionContainer>
          <p>{movie.overview}</p>
        </DescriptionContainer>
      </MovieInfo>
    </MoviePageContainer>
  );
};

export default MoviePage;
