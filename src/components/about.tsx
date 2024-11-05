import styles from "./About.module.css";
import image from '../images/About/image.gif'
import banner from '../images/banner.gif'

const About=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img className={styles.banner} src={banner}/>
                <div className={styles.image_wrapper}><img src={image} className={styles.image}/></div>
                <div className={styles.body_wrapper}>
                    <p className={styles.title}>Red vs. Blue, the Battle is New!</p>
                    <p className={styles.text}>
                    Join the ultimate meme coin showdown inspired by Trump vs. Kamala! 🚀 As red meets blue, rally behind your favorite candidate and watch the coin's value rise with the election hype. Fun events, collectible memes, and epic gains—Trump-Kamala Coin brings the campaign excitement straight to your wallet!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About