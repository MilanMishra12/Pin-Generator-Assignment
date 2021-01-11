import React from "react";
import { Link } from "react-router-dom";
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
      <td>{id}</td>
      <td>{generatePin}</td>
      <td>
        <Link to={`/edit/${id}`}>
          <strong>Edit</strong>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          to="#"
          onClick={() => dispatch(deletePin(id))}
          style={{ color: "red" }}
        >
          <strong>Delete</strong>
        </Link>
      </td>
    </tr>
  );
};

export default Pin;
