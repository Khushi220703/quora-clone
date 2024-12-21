import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import Spaces from "./components/spaces";
import Home from "./pages/home";
import NotificationSidebar from "./pages/NotificationSidebar";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Router>
      <Navbar
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        toggleModal={toggleModal}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              toggleModal={toggleModal}
            />
          }
        />
        <Route path="/spaces" element={<Spaces />} />
        <Route
          path="/notifications"
          element={<NotificationSidebar />}
        />
      </Routes>
    </Router>
  );
}

export default App;
