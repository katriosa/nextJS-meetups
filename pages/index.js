import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg/1024px-Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg",
    address: "Stockholm",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg/1024px-Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg",
    address: "Goteborg",
    description: "This is a first meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
