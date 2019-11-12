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
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
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

        {/*select capacity*/}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/*end select capacity */}

        {/*select price*/}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*end select price */}

        {/* size */}
        <div className='form-group'>
          <label htmlFor='size'>
            room size
            <div className='size-inputs'>
              <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input'/>
              <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input'/>
            </div>
          </label>
        </div>
        {/* end of size */}
      </form>
    </section>
  );
}
