import React from "react";
import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  const router = useRouter();
  const { meetupId } = router.query;

  console.log(router.query);
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
    />
  );
}


export async function getStaticPaths() {
  //fetch data/id from the api
  return {
    paths: [
      { params: {meetupId: "1"} },
      { params: {meetupId: "2"} },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params

  console.log("onGetStaticProps: ",meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Istanbul_Tram_%282%29.jpg/1024px-Istanbul_Tram_%282%29.jpg",
        title: "Meetup at Taksim",
        description: "Meetup at Taksim",
        address: "Taksim/Istanbul",
      },
    },
  };
}

export default MeetupDetails;
