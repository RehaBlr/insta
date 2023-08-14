import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}

      <NavLink to="/" exact activeClassName="text-blue-600">
        Anasayfa
      </NavLink>
      <NavLink to="/me" activeClassName="text-blue-600">
        Profil
      </NavLink>
      <Switch>
        <Route path="/" exact>
          <h1 class="text-3xl font-bold underline">Hello world!</h1>
        </Route>
        <Route path="/me">
          <h1 class="text-3xl font-bold underline">Profil</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
