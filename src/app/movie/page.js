import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css"

const Movie = async () => {
  const url = process.env.RAPID_API_KEY
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'e92a81aba4mshc62efc0935e9949p1bcf90jsn77ed9a86b483',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  let movies = []

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    movies = result.titles
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
  // console.log(movies)
  console.log("A new request to rapidapi made")

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movies and series</h1>
          <div className={styles.card_section}>
            {
              movies.map((i) => {
                return (
                  <MovieCard key={i.jawSummary.id} {...i} />
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie