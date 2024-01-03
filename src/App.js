import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage/Home';
import Product from './Product/Product'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from './Landing/land';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Land/>} />
          <Route path='/front' element={<Homepage/>}/>
          <Route path='/store' element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;