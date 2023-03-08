import EventList from '../components/event/event-list';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
