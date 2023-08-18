import { NavLink, useHistory } from "react-router-dom";

import { logout } from "../store/actions";
import { useDispatch } from "react-redux";

export default function MainNavigation(props) {
  const history = useHistory();

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout(history));
  }

  return (
    <nav className="text-lg py-2 font-bold flex gap-2 justify-center">
      <NavLink to="/" exact activeClassName="text-yellow-400">
        Anasayfa
      </NavLink>
      {props.user && (
        <NavLink to="/me" activeClassName="text-yellow-400">
          Profil
        </NavLink>
      )}
      {props.user ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <NavLink to="/login" activeClassName="text-yellow-400">
          Login
        </NavLink>
      )}
    </nav>
  );
}
