import Image from 'next/image';
import Link from 'next/link';
import { getVideos } from './utilities/firebase/functions';
import styles from './page.module.css';
import { Fragment } from 'react';

export default async function Home() {
  const videos = await getVideos();

  return (
    <Fragment>
      <main className={styles.main}>
        {videos.map((video) => (
          <div>
            <Link
              className={styles.container}
              href={`/watch?v=${video.filename}`}
              key={video.id}
            >
              <div className={styles.video}>
                <Image
                  src={'/thumbnail.png'}
                  alt="video"
                  width={120}
                  height={80}
                  className={styles.thumbnail}
                />
                <p className={styles.title}>{video.filename?.split('.')[1]}</p>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </Fragment>
  );
}

export const revalidate = 30;
