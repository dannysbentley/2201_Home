import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

// get all unique values
// using set to collect only the unique items for the drop down list
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

// use the context to decouple the room data.
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const { handleChange, type } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["All Spaces", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Living Space" />
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">Select Space</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end select type*/}
      </form>
    </section>
  );
}
