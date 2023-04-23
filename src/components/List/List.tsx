import React from 'react';
import { newReleasesSelector } from '@/recoil/list/newReleaseSelector';
import { useRecoilValueLoadable } from 'recoil';
import styles from '@/styles/App.module.scss';

const List = () => {
  const newReleases = useRecoilValueLoadable(newReleasesSelector({}));

  return newReleases.state === 'hasValue' ? (
    <div className={styles.list}>
      {newReleases.contents?.albums?.items && newReleases.contents?.albums?.items.length > 0
        ? newReleases.contents?.albums.items.map((item) => (
            <a
              className={styles.list__item}
              key={item.id}
              href={item.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              {/* <Image className={styles['list__item-img']} src={item.images[0]?.url} alt="" width={100} height={100} /> */}
              <div className={styles['list__item-info']}>
                {item.name}
                <div>{item.artists.map((artist) => artist.name).join('/')}</div>
              </div>
            </a>
          ))
        : ''}
    </div>
  ) : (
    <div>loading</div>
  );
};

export default List;
