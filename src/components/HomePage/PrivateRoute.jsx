import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import DrivePage from "./../GoogleDrivePage/GoogleDrive"; // Your protected page
import Home from "./components/Home"; // Your home page
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/drive"
          element={
            <PrivateRoute>
              <DrivePage />
            </PrivateRoute>
          }
        />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
