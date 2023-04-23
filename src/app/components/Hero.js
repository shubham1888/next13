import herostyle from "../styles/herosection.module.css"
import styles from "../styles/common.module.css"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"


const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

const Hero = (props) => {
    return (
        <main className={herostyle.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={herostyle.hero_content}>
                        <h2>{props.title}</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link href={"/movie"} >
                            <button className={poppins.className} >Explore movies</button>
                        </Link>
                    </div>
                    <div className={herostyle.hero_image}>
                        <Image src={props.imageUrl} alt="hero img" height={500} width={500} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero