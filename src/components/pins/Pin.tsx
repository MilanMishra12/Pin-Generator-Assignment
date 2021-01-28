import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import { deletePin } from "../../actions/pinActions";
import { getName, updateName } from "../../actions/pinActions";

interface PinInterface {
  pin: any;
}

const Pin: React.FC<PinInterface> = ({ pin }) => {
  const dispatch = useDispatch();
  const { generatePin, id } = pin;

  //to change the name in input field..
  const [name, setName] = useState(shortid.generate()); //using shortId to give a random string id or name to every pin.

  useEffect(() => {
    if (pin !== null) {
      setName(pin.name);
    }
    dispatch(getName(name));
  }, [pin]);

  const onUpdateId = (event: any) => {
    event.preventDefault();
    const update_name = Object.assign(pin, { name: name }); //we can update name from input field directly.. also add space after editing new name.
    dispatch(updateName(update_name));
  };

  return (
    <tr>
      <td>
        <form onChange={(e) => onUpdateId(e)}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </form>
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
