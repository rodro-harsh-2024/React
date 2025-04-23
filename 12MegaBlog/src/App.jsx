import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("App.jsx : useEffect : error in getting user");
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="min-h-sc flex flex-wrap bg-gray-400 content-between">
      <div className="w-full block">
        <Header />
        <main>Todo Outlet</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
