import Image from "next/image";
import styles from "@/app/styles/common.module.css"
import Link from "next/link";

const MovieCard = (props) => {
    const { id, type, title, synopsis, backgroundImage } = props.jawSummary;
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={backgroundImage.url} alt="card img" height={250} width={260} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0, 20)}</h2>
                    <p>{synopsis.substring(0, 66)} ...</p>
                    <Link href={`/movie/${id}`}>
                        <button>Read more</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard