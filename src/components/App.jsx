import "./App.css";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import StateLab from "./labs/StateLab";
import TrackCases from "./covidTracker/TrackCases";
import Hospital from "./hospital/Hospital";
import Helpline from "./helpline/Helpline";
import Ngo from "./ngo/Ngo";
import NavBar from "./NavBar";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={TrackCases} />
          <Route exact path="/hospital" component={Hospital} />
          <Route exact path="/labs" component={StateLab} />
          <Route exact path="/ngo" component={Ngo} />
          <Route exact path="/helpline" component={Helpline} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;
