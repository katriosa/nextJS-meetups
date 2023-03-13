import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://thekatrin:1029384756am@cluster0.y61lx2d.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false, // all paths
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    //   [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  //fetch data for single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://thekatrin:1029384756am@cluster0.y61lx2d.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
      // {
      //   id: meetupId,
      //   image:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg/1024px-Kastellet_citadel_on_Kastellholmen_Stockholm_2016_02.jpg",
      //   title: "A first Meetup in Stockholm",
      //   address: "Some street, 5",
      //   description: "The meetup description",
      // },
    },
  };
}
export default MeetupDetails;
