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
            <div className={herostyle['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={herostyle['shape-fill']}></path>
                </svg>
            </div>
        </main>
    )
}

export default Hero