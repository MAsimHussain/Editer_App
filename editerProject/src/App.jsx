import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { authServices } from "./Appwrite/auth";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { logout, login } from "./store/authSlice";
function App() {
  const [loading, setLoading] = useState(true);
  const dispathch = useDispatch();

  useEffect(() => {
    authServices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispathch(login({ userData }));
        } else {
          dispathch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex justify-center  text-center text-3xl  bg-gray-700 text-white">
      <div className="w-full block">
        <main>
          <Header />
          <h1>Curent user Find or not</h1>
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  ) : null;
}

export default App;
