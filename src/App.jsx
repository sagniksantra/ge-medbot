import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./Landing";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            exact
            path="/"
            element={ <Landing /> }
          />
          <Route
            exact
            path="/chat"
            element={ <Chat /> }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;