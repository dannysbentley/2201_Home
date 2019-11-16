import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomContainer";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Living Spaces">
          <Link to="/" className="btn-primary">
            Return To Main Page
          </Link>
        </Banner>
      </Hero>
      <RoomContainer/>
    </>
  );
};

export default Rooms;
