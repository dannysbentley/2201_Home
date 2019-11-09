import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Cocktails",
        info: "info"
      },
      {
        icon: <FaBeer />,
        title: "Beer",
        info: "info"
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info: "info"
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle Van",
        info: "info"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="service" />
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
