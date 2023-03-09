import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg/1024px-Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg"
      title="A first Meetup in Stockholm"
      address="Some street, 5"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false, // all paths
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg/1024px-Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg",
        title: "A first Meetup in Stockholm",
        address: "Some street, 5",
        description: "The meetup description",
      },
    },
  };
}
export default MeetupDetails;
