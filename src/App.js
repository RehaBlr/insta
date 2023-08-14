import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div className="container max-w-[480px] mx-auto bg-slate-200">
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <h1 class="text-3xl font-bold text-violet-700">fotolar</h1>

          <article className="border border-black">
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
          <h1 class="text-3xl font-bold text-blue-700">Login</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
