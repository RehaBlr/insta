import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function (props) {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem("insta");
    props.setUser(null);
    toast.success("Çıkış başarılı", { autoClose: 1500 });
    setTimeout(() => {
      history.push("/login");
    }, 2000);
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
