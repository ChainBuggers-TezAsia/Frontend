import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
// import CardBase from "./components/CardBase";
// import TheatreSelectionPage from "./pages/TheatreSelectionPage";
// import TheatreSelectionPage from "./pages/TheatreSelectionPage";
import LandingPage from "./pages/LandingPage";
// import MovieCard from "./components/Movie";
import SeatSelectionPage from "./pages/SeatSelectionPage";
import MovieBanner from "../src/components/MovieBanner";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import TheatreSelectionPage from "./pages/TheatreSelectionPage";
<<<<<<< HEAD
import LogInPage from "./pages/LogInPage";
import Data from "./pages/data";
=======
import SignUpPage from "./pages/SignUpPage";
import MyTicketsPage from "./pages/MyTicketsPage";

>>>>>>> 547def526a876b214306d9d4833500dbae432e23

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">

      {/* <Header setLogin={setLogin} checkLogin={login} className="z-10" />
      {login && (
        <div>
          <Login />
        </div>
      )} */}
      {/* <SeatSelectionPage /> */}

      {/* <MovieBanner /> */}

      {/* <Navbar /> */}
      {/* <Header setLogin={setLogin} checkLogin={login} className="z-10" /> */}
      {
        login && <Login setLogin={setLogin} checkLogin={login} />
      }
      {!login && <BrowserRouter>
        <Header setLogin={setLogin} checkLogin={login} />
        <Routes>
          <Route exact path="/" element={<SeatSelectionPage />} />
          <Route
            exact
            path="/theatreSelection"
            element={<TheatreSelectionPage />}
          />
          <Route exact path="/seatSelection" element={<SeatSelectionPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/tickets" element={<MyTicketsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>}
    </div>
  );
}

export default App;