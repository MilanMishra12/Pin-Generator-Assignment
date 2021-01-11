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
      <td>
        <input className="savedPin" value={generatePin} readOnly></input>
      </td>
      <td>
        <button
          onClick={() => dispatch(deletePin(id))}
          className="delete_button"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default Pin;
