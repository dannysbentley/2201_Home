import React, { Component } from "react";
import { FaHiking } from "react-icons/fa";
import { MdDirectionsTransit } from "react-icons/md";
import { IoIosWine } from "react-icons/io";
import { GiModernCity } from "react-icons/gi";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <IoIosWine/>,
        title: "Wine Country",
        info: "30 miles way from the best wine in the world. Travel to Napa and Sanoma valley on your weekends."
      },
      {
        icon: <MdDirectionsTransit />,
        title: "BART",
        info: "Between two bart station within a 1 mile.  Commute to work or visit history Oakland or the City of San Franciscos"
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info: "Enjoy the out doors.  The house is minutes away from Mount Diablo State Park and Briones Regional Park."
      },
      {
        icon: <GiModernCity />,
        title: "San Francisco",
        info: "Travel to San Francisco which is 30 miles away. Visit the Mission, North Beach or Chinatown"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Description" />
        <p className='service-p'>A warm and inviting single level rancher is on a spacious 6,120 +sq ft flat lot, in Hoolbrook neighborhood. Features 3 bedrooms and 2 bath rooms.  Laundry room, hardwood floors and lots of natural lighting.  </p>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
