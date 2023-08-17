import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/MainNavigation";

import Login from "./components/Login";
import { useState } from "react";
import { checkLsForUser } from "./utils";
import NewEntry from "./components/NewEntry";
import EntryList from "./components/EntryList";
/*
localstorage'a bak 
"insta" keyinde bir string varsa, bunu kontrol et
çıkan objeyi user objesinin başlangıç değeri olarak ver.
yoksa user = null olsun
*/
function App() {
  const userFormLs = checkLsForUser();
  const [user, setUser] = useState(userFormLs);

  // console.log("içerdeki kullanıcı ", user);

  return (
    <div className="container max-w-[480px] mx-auto ">
      <MainNavigation user={user} setUser={setUser} />

      <Switch>
        <Route path="/" exact>
          <EntryList />
        </Route>

        {user && (
          <>
            <Route path="/me">
              <NewEntry userId={user.id} />
              <EntryList userId={user.id} />
            </Route>
          </>
        )}

        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
