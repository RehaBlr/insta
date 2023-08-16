import { NavLink } from "react-router-dom";

export default function () {
  return (
    <nav className="text-lg py-2 font-bold flex gap-2 justify-center">
      <NavLink to="/" exact activeClassName="text-yellow-400">
        Anasayfa
      </NavLink>
      <NavLink to="/me" activeClassName="text-yellow-400">
        Profil
      </NavLink>
      <NavLink to="/login" activeClassName="text-yellow-400">
        Login
      </NavLink>
    </nav>
  );
}
