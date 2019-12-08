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
        icon: <IoIosWine />,
        title: "Wine Country",
        info:
          "30 miles way from the best wine in the world. Travel to Napa and Sanoma valley on your weekends."
      },
      {
        icon: <MdDirectionsTransit />,
        title: "BART",
        info:
          "Between two bart station within a 1 mile.  Commute to work or visit history Oakland or the City of San Franciscos"
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info:
          "Enjoy the out doors.  The house is minutes away from Mount Diablo State Park and Briones Regional Park."
      },
      {
        icon: <GiModernCity />,
        title: "San Francisco",
        info:
          "Travel to San Francisco which is 30 miles away. Visit the Mission, North Beach or Chinatown"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Description" />
        <p className="service-p">
          A warm and inviting single level home which is on a spacious 6,120 +sq
          ft flat lot, in Holbrook Heights neighborhood. Features 3 bedrooms and
          2 bathrooms. Laundry room, hardwood floors and lots of natural
          lighting. The HOA shares a community pool and clubhouse which is
          across the street.
        </p>
        <p className="service-p">
          Near the Concord North BART station (1.3 miles). Close to Baldwin
          Park, Willow Pass Community Park, and Pixieland Amusement Park. Enjoy
          walking downtown to Todos Santos during the evening to get dinner and
          drinks (1.4 miles).
        </p>
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
