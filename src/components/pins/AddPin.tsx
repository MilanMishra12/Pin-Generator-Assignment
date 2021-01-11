import { useState } from "react";
import "../../App.css";
import { PinGenerator } from "./PinGenerator";
import { useDispatch } from "react-redux";
import { addPin } from "../../actions/pinActions";
import { generate } from "shortid";
import { useHistory } from "react-router-dom";

const AddPin = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [pin, setPin] = useState({});

  const [generatePin, setGeneratPin] = useState("");

  const generatepin = () => {
    let generatPin = new PinGenerator().generate();
    setGeneratPin(generatPin);
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
          <br />
          <br />
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
            &nbsp;
          </div>
          <br />
          <br />
          <br />
          <div>
            <div className="colAA">
              <button
                id="btn1"
                onClick={() => {
                  generatepin();
                }}
              >
                <strong>GENERATE</strong>
              </button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <button id="btn2" onClick={(e) => createPin(e)}>
                <strong>SAVE</strong>
              </button>
            </div>
            <br />
            <br />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddPin;
