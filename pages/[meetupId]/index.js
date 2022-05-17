import React from "react";
import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  const router = useRouter();
  const { meetupId } = router.query;

  console.log(router.query);
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Istanbul_Tram_%282%29.jpg/1024px-Istanbul_Tram_%282%29.jpg"
      title="Meetup at Taksim"
      description="Meetup at Taksim"
      address="Taksim/Istanbul"
    />
  );
}

export default MeetupDetails;
