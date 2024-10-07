import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./GetStarted/GetStarted";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
