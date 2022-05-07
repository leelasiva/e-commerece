import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Login from "./components/Login";

function App() {
  return (
    <div>
      <header>Hello
      </header>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div className="loader">Loading..</div>}>
          <Login />
        </Suspense>
        }>
        </Route>
      </Routes>
    </div>
  );
}





export default App;