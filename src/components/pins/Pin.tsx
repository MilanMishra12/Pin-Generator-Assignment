import React from "react";
import { useDispatch } from "react-redux";
import { deletePin } from "../../actions/pinActions";

interface PinInterface {
  pin: any;
}

const Pin: React.FC<PinInterface> = ({ pin }) => {
  const dispatch = useDispatch();
  const { generatePin, id } = pin;
  return (
    <tr>
      <td>
        <input type="text" defaultValue="Name"></input>
      </td>
      <td>{generatePin}</td>
      <td>
        <button
          onClick={() => dispatch(deletePin(id))}
          style={{ color: "red" }}
        >
          <strong>Delete</strong>
        </button>
      </td>
    </tr>
  );
};

export default Pin;
