import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/utils/NotFound";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1 className="heading_1">What's up!</h1>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
