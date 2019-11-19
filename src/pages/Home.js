import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from '../components/Services';

export default function Home() {
  return (
    <>
    <Hero>
      <Banner title="Bay Area Home" subtitle="Center of Everything">
        <Link to="/rooms" className="btn-primary">
          House Info
        </Link>
      </Banner>
    </Hero>
    <Services />
    </>
  );
}
