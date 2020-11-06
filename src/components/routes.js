import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Contacts from "../components/Contacts";

export default [
    {
        path: "/",
        component: Login
      },
      {
        path: "/signup",
        component: Signup
      },
      {
        path: "/contacts",
        component: Contacts
      }
]