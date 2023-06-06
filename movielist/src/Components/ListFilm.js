import React from 'react';
import FilmCard from './FilmCard';

const ListFilm = ({Movies, searchName, searchRate}) => {
  return (
    <div>
      {Movies.filter(
        (e) =>
          e.title
            .toLowerCase()
            .trim()
            .includes(searchName.toLowerCase().trim()) && (e.rate <= searchRate)
      ).map((movie) => (
        <FilmCard
          title={movie.title}
          description={movie.description}
          imageUrl={movie.imgUrl}
          date={movie.date}
          rate={movie.rate}
        />
      ))}
    </div>
  )
}

export default ListFilm
