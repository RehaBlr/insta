import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/MainNavigation";

import Login from "./components/Login";
import { useState } from "react";
import { checkLsForUser } from "./utils";
/*
localstorage'a bak 
"insta" keyinde bir string varsa, bunu kontrol et
çıkan objeyi user objesinin başlangıç değeri olarak ver.
yoksa user = null olsun
*/
function App() {
  const userFormLs = checkLsForUser();
  const [user, setUser] = useState(userFormLs);

  console.log("içerdeki kullanıcı ", user);

  return (
    <div className="container max-w-[480px] mx-auto ">
      <MainNavigation user={user} setUser={setUser} />

      <Switch>
        <Route path="/" exact>
          <article className="bg-white">
            <div className="flex item-center p-2">
              <img
                className="w-8 h-8 mr-3 rounded-full"
                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg"
                alt="avatar"
              />
              <h3 className="font-bold flex-1">cute_cat</h3>
              <div className="text-stone-600">1s önce</div>
            </div>
            <div>
              <img
                src="https://fastly.picsum.photos/id/772/600/600.jpg?hmac=4PCJUoOi2oDQCNivylXqFOoKMOY4Vwp7P-F9SHQsf-c"
                alt="foto"
              />
            </div>
            <div>like,like sayısı</div>
            <div>comentler (opsiyonel)</div>
          </article>
        </Route>
        <Route path="/me">
          <h1 class="text-3xl font-bold text-green-700">Profil</h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
