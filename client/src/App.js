import './App.css';

// import components
import CompNavbar from './components/navbar/navbar'
import CompBodyStudents from './components/views/bodyStudents'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CompFormEditStudent from "./components/views/editStudent";

function App() {
  return (
      <div className="App">
          <header className="align-content-md-center">
              <CompNavbar></CompNavbar>
          </header>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<CompBodyStudents/>}></Route>
                  <Route path="/students/:id/edit" element={<CompFormEditStudent/>}></Route>

              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
