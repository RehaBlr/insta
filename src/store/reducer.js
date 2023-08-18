import { checkLsForUser } from "../utils";
import { toast } from "react-toastify";

//
const initialStore = {
  user: checkLsForUser(),
};

export function reducer(state = initialStore, action) {
  if (action.type === "logout") {
    console.log("logout kısmındayız");

    let history = action.payload;
    localStorage.removeItem("insta");

    toast.success("Çıkış başarılı", { autoClose: 1500 });

    console.log("history : ", action);
    setTimeout(() => {
      history.push("/login");
    }, 2000);
    return { ...state, user: null };
  }
  return state;
}
