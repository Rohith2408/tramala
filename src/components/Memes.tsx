import styles from "./Memes.module.css";
import { useEffect, useRef, useState } from "react";
// import bg from '../images/Section2/bg.png'
import image1 from '../images/memes/1.png'
import image2 from '../images/memes/2.png'
import image3 from '../images/memes/3.png'
import image4 from '../images/memes/4.png'
import image5 from '../images/memes/5.png'
import image6 from '../images/memes/6.png'
import banner from '../images/banner.gif'

const Memes=()=>{

    const images=useRef([image1,image2,image3,image4,image5,image6]).current;
    const [bannerHeight,setBannerHeight]=useState(0)

    return(
        <section className={styles.mainwrapper} id="memes" data-scroll-to="memes">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <img className={styles.banner} src={banner}/>
                    <p className={styles.title}>Memes</p>
                    <div className={styles.imageswrapper}>
                    {
                        images.map((img)=>
                        <img src={img} className={styles.image}></img>
                        )
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Memes