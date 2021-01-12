import { useState } from "react";
import PinGenerator from "./PinGenerator";
import { useDispatch } from "react-redux";
import { addPin } from "../../actions/pinActions";
import { generate } from "shortid";
import { useHistory } from "react-router-dom";
import { GENERATE_BUTTON, SAVE_BUTTON } from "../../stylesheet";

const AddPin = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [pin, setPin] = useState({});

  const [generatePin, setGeneratPin] = useState("");

  const generatepin = () => {
    setGeneratPin(PinGenerator);
  };

  const createPin = (event: any) => {
    event.preventDefault();
    const new_pin = {
      id: generate(),
      generatePin: generatePin,
    };
    dispatch(addPin(new_pin));
    history.push("/");
    setGeneratPin("");
  };

  const onInputChange = (event: any) => {
    setPin({ ...pin, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div id="body">
        <br />
        <section>
          <p>
            <strong>
              <br />
              Click on the button to generate random 4 digit 5 numbers
            </strong>
          </p>
          <div>
            <strong>
              <input
                id="generatedPin"
                name="generatedPin"
                type="text"
                readOnly
                value={generatePin}
                onChange={(event) => onInputChange(event)}
              />
            </strong>
          </div>
          <div>
            <div className="colAA">
              <GENERATE_BUTTON
                onClick={() => {
                  generatepin();
                }}
              >
                <strong>GENERATE</strong>
              </GENERATE_BUTTON>

              <SAVE_BUTTON onClick={(e) => createPin(e)}>
                <strong>SAVE</strong>
              </SAVE_BUTTON>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddPin;
