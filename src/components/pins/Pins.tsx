import React from "react";
import Pin from "./Pin";
import "../../App.css";
import { createSelectorHook } from "react-redux";

type IRootState = {
  pin: any;
};

const useSelector = createSelectorHook<IRootState>();

const Pins = () => {
  const pins = useSelector((state) => state.pin.pins);
  if (pins.length == 0) {
    return (
      <h2 id="body" style={{ paddingTop: "12rem" }}>
        No Pins generated..
      </h2>
    );
  } else
    return (
      <div id="body">
        <table className="table bg-white shadow">
          <tbody>
            {pins.map((pin: any) => (
              <Pin key={pin.id} pin={pin} />
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Pins;
