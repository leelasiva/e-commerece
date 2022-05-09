import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div className="loader">Loading..</div>}>
          <Login />
        </Suspense>
        }>
        </Route>
        <Route path="/Home" element={<Suspense fallback={<div className="loader">Loading..</div>}>
          <Home/>
        </Suspense>
        }></Route>
        
      </Routes>
      </Router>
    </div>
  );
}





export default App;