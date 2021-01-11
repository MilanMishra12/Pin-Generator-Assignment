import { useState, useEffect, FC } from "react";
import "../../App.css";
import { createSelectorHook, useDispatch } from "react-redux";
import { getPin, updateId } from "../../actions/pinActions";
import { useHistory, useParams } from "react-router-dom";

interface ParamsTypes {
  id: any;
}

type IRootState = {
  pin: any;
};

const useSelector = createSelectorHook<IRootState>();

const EditPins: FC = () => {
  const history = useHistory();
  let { id } = useParams<ParamsTypes>(); //extract id
  const dispatch = useDispatch();
  const pin = useSelector((state) => state.pin.pin);
  const [ids, setIds] = useState("");
  const [generatePin, setGeneratePin] = useState("");

  useEffect(() => {
    if (pin != null) {
      setIds(pin.id);
      setGeneratePin(pin.generatePin);
    }
    dispatch(getPin(id));
  }, [pin]);

  const onUpdateId = (event: any) => {
    event.preventDefault();

    const update_id = Object.assign(pin, { id: ids });
    dispatch(updateId(update_id));
    history.push("/savedpins");
  };

  return (
    <div>
      <div id="body">
        <br />
        <section>
          <p>
            <strong>
              <br />
              Edit Pin Name
            </strong>
          </p>
          <br />
          <form onSubmit={(e) => onUpdateId(e)}>
            <div className="row">
              <div className="colA">
                <strong>
                  <label>Name: </label> &nbsp;
                </strong>
              </div>
              <div className="colB">
                <strong>
                  <input
                    id="generatedPin"
                    name="generatedPin"
                    type="text"
                    value={ids}
                    onChange={(e) => setIds(e.target.value)}
                  />
                </strong>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="colA">
                <strong>
                  <label>Pin: </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </strong>
              </div>
              <div className="colB">
                <strong>
                  <input
                    id="generatedPin"
                    name="generatedPin"
                    type="text"
                    readOnly
                    value={generatePin}
                  />
                </strong>
              </div>
            </div>
            &nbsp;
            <br />
            <div>
              <div className="row">
                <div className="col">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button id="btn2">
                    <strong>EDIT</strong>
                  </button>
                </div>
              </div>
              <br />
              <br />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditPins;
