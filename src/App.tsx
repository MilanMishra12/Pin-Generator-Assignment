import Pins from "./components/pins/Pins";
import Navbar from "./components/elements/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPin from "./components/pins/AddPin";
import EditPins from "./components/pins/EditPins";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div id="body">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/savedpins" component={Pins} />
                <Route exact path="/" component={AddPin} />
                <Route exact path="/edit/:id" component={EditPins} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
