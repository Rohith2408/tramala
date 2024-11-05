import styles from "./home.module.css";
import { useEffect, useRef, useState } from "react";
import telegram_icon from '../images/Home/telegram.png'
import twitter_icon from '../images/Home/twitter.png'
import dex_icon from '../images/Home/dex.png'
//import coingecko_icon from '../images/Home/coingecko.png'
// import sunswap_icon from '../images/Section1/sunswap.jpeg'
import dextools_icon from '../images/Home/dextools.png'
import copy_icon from '../images/Home/copy.png'
import banner from '../images/banner.gif'
import insta_icon from '../images/Home/instagram.png'
import flag_image from '../images/Home/bg.png'
import tramala_image from '../images/Home/image.png'
import Line from "./line";
import star from '../images/Home/star.png'

const Home=()=>{

    const socialIcons= useRef([
        { src: telegram_icon, link: "" },
        { src: twitter_icon, link: "" },
        { src:dex_icon, link: "" },
        { src: dextools_icon, link: "" },
        // { src:coingecko_icon, link: "" },
        // { src:insta_icon, link: "" }
    ]).current
    const [currentbg,setCurrentBg]=useState(0)
    const ca=useRef("TBA").current

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <div className={styles.title_wrapper}>
                        <div>
                            <div className={styles.title_subwrapper}>
                                <p className={styles.title}>$Tramala</p>
                                <img className={styles.star_icon} src={star}></img>
                            </div>
                            <Line width={"120%"} height={7.5}/>
                        </div>
                        <div className={styles.socialWrapper}>
                        {
                            socialIcons.map((icon) => (
                                <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                    <img
                                        className={styles.socialicons}
                                        loading="lazy"
                                        alt=""
                                        src={icon.src}
                                    />
                                </a>
                            ))}
                        </div>
                        <div className={styles.cawrapper}>
                            <p className={styles.caHeading}>CA</p>
                            <p className={styles.ca} >{ca}</p>
                            <button className={styles.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                        </div>
                    </div>
                    <div className={styles.flag_wrapper}>
                        <img className={styles.tramala_image} src={tramala_image}/>
                        <img className={styles.flag_image} src={flag_image}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home