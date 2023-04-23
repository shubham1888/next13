import Image from "next/image";
import styles from "@/app/styles/common.module.css"
import Link from "next/link";

const MovieCard = (props) => {
    const { id, type, title, synopsis } = props.jawSummary;
    const { imgurl } = props.jawSummary.backgroundImage.url;
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={imgurl} alt="card img" height={250} width={200} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title}</h2>
                    <p>{synopsis}</p>
                    <Link href={`/movie/${id}`}>
                        <button>Read more</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard