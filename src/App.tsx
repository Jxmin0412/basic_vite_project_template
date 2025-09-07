import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <div className=" text-6xl text-center mt-10">
                Welcome to the React App!
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="text-6xl text-center mt-10">Not found</div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
