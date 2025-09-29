import { useEffect, useRef, useState } from "react";
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

export default function Hero({ intervalMs = 5000, minToStart = 2, maxWaitMs = 5000 }) {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const startedRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const shuffled = shuffleArray(IMAGES);
    setImages(shuffled);
    console.info("[Hero] images list:", shuffled);

    let okCount = 0;
    let failCount = 0;
    let settled = 0;
    let started = false;

    const maybeStart = () => {
      if (started) return;
      if (okCount >= Math.min(minToStart, shuffled.length)) {
        started = true;
        startCycle();
      }
    };

    const startCycle = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setIndex(0);
      timerRef.current = setTimeout(tick, intervalMs);
      console.info("[Hero] slideshow started (okCount):", okCount, "failCount:", failCount);
    };

    const tick = () => {
      setIndex((i) => (i + 1) % shuffled.length);
      timerRef.current = setTimeout(tick, intervalMs);
    };

    shuffled.forEach((src, idx) => {
      const img = new Image();
      img.src = src;

      const markOk = () => {
        okCount += 1;
        settled += 1;
        console.info(`[Hero] PRELOAD OK  (${okCount}/${shuffled.length}):`, src);
        maybeStart();
      };

      const markFail = (err) => {
        failCount += 1;
        settled += 1;
        console.warn(`[Hero] PRELOAD FAIL (${failCount}/${shuffled.length}):`, src, err || "");
      };

      if (img.decode) {
        img.decode()
          .then(markOk)
          .catch((err) => {
            img.onload = markOk;
            img.onerror = () => markFail(err);
          });
      } else {
        img.onload = markOk;
        img.onerror = () => markFail();
      }
    });


    const fallback = setTimeout(() => {
      if (!started) {
        console.warn("[Hero] Fallback: starting slideshow after wait (ok/failed):", okCount, failCount);
        startCycle();
      }
    }, maxWaitMs);

    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(fallback);
    };
  }, [intervalMs, minToStart, maxWaitMs]);


  if (!images || images.length === 0) {
    return (
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <h1>Discover the Universe</h1>
          <p>Loading hero images...</p>
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
              draggable={false}
            />
          ))}
        </div>

        <div className={styles.hero_content}>
          <h1>Discover the Universe, One Photo at a Time</h1>
          <p>Unveil breathtaking photos and hidden stories from the cosmos.</p>
        </div>
      </section>

      <section>
        <HomeArticles/>
      </section>
    </main>
  );
}
