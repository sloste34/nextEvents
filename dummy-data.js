const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Seoul Night Tour',
    description: 'Travel night street of Seoul!',
    location: 'Seoul Station',
    date: '2023-05-12',
    image: 'images/seoul-night.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Tokyo Night Tour',
    description: "Let's enjoy wonderful night street of Tokyo.",
    location: 'Shibuya Station',
    date: '2023-05-30',
    image: 'images/tokyo-night.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Taipei Night Market Tour',
    description: 'Enjoy wonderful foods and view of Taipei night market. ',
    location: 'Taipei Station',
    date: '2023-04-10',
    image: 'images/taipei-night.jpg',
    isFeatured: true,
  },
];
export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
