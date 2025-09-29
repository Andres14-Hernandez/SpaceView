import { useEffect, useState, useRef } from "react";
import styles from "./Home.module.css";
import HomeArticles from '../../Components/HomeArticles'

const IMAGES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
  "/images/hero6.jpg",
  "/images/hero7.jpg",

];

function shuffleArray(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function Home({ intervalMs = 5000 }) {
    const [images, setImages] = useState([]);
    const [ready, setReady] = useState(false);
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const shuffled = shuffleArray(IMAGES);
        setImages(shuffled);

        const preloadPromises = shuffled.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;

                if (img.decode) {
                img.decode()
                .then(() => resolve({ src, ok: true }))
                .catch(() => {
                img.onload = () => resolve({ src, ok: true });
                img.onerror = () => resolve({ src, ok: false });
                });
                } 
                
                else {
                    img.onload = () => resolve({ src, ok: true });
                    img.onerror = () => resolve({ src, ok: false });
                }
        });
    });
    
    Promise.allSettled(preloadPromises).then(() => {
        setReady(true);
    });

    return () => {};
    }, []);
    
    useEffect(() => {
        if (!ready || images.length === 0) return;
        setIndex(0);

        intervalRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, intervalMs);

        return () => {
        clearInterval(intervalRef.current);
        };
    }, [ready, images, intervalMs]);

    if (images.length === 0) {
        return (
          <section className={styles.hero}>
            <div className={styles.hero_content}>
              <h1>Discover the Universe, One Photo at a Time</h1>
              <p>Unveil breathtaking photos and hidden stories from the cosmos.</p>
            </div>
          </section>
        );
    }
    
    return (
        <main>
            <section className={styles.hero}>
              <div className={styles.slides}>
                {images.map((src, i) => (
                  <img
                    key={src + i}
                    src={src}
                    alt={`Hero ${i + 1}`}
                    className={`${styles.slide} ${i === index ? styles.visible : ""}`}
                    aria-hidden={i === index ? "false" : "true"}
                    draggable={false}
                  />
                ))}
              </div>

              <div className={styles.hero_content}>
                <h1>Discover the Universe, One Photo at a Time</h1>
                <p>
                  Unveil breathtaking photos and hidden stories from the cosmos. Search,
                  explore, and let the universe surprise you.
                </p>
              </div>
            </section>

            <section>
                <HomeArticles/>
            </section>
        </main>
        
    );
}


export default Home;