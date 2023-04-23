import styles from "@/app/styles/common.module.css"
import Image from "next/image"

const MovieDynamicRoute = async ({ params }) => {
    const id = params.id
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&land=en`
    const options = {
        method: 'GET',
        headers: {
            // 'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'e92a81aba4mshc62efc0935e9949p1bcf90jsn77ed9a86b483',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    let movie = []

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        movie = result[0].details
        // console.log(result)
    } catch (error) {
        console.error(error);
    }
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.movie_title}>
                    Netflix / <span> {movie.type} </span>
                </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={movie.backgroundImage.url} alt={movie.title} height={250} width={200} />
                    </div>
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDynamicRoute