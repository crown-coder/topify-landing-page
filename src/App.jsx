import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TalkToUs from "./pages/TalkToUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talk-to-us" element={<TalkToUs />} />
      </Routes>
    </Router>
  );
};

export default App;
