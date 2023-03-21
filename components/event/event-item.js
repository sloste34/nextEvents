import Link from 'next/link';
import styles from './event-item.module.css';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  //event리스트의 date를 받아서 humanReadableDate로 데이터를 가공해준다.
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  //각각의 id를 받아서 events의 페이지로 넘어 갈 수 있게 해준다.
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt='title' />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
        <div>container</div>
      </div>
    </li>
  );
}

export default EventItem;
