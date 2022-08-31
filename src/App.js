import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './Layout/Layout';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<Skills />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
