
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const pagesize=5;
 
  return (
    <>
    <Router>
<Navbar />
<Routes>
<Route path="/" element={<News apiKey="a6b7739d65dd485492322518c4ecab93" key="general" country="in" pagesize={pagesize} category="general"/>}></Route>
<Route path="/business" element={<News  apiKey="a6b7739d65dd485492322518c4ecab93" key="business" country="in" pagesize={pagesize} category="business"/>}></Route>
<Route path="/sports" element={<News  apiKey="a6b7739d65dd485492322518c4ecab93" key="sports" country="in" pagesize={pagesize} category="sports"/>}></Route>
<Route path="/entertainment" element={<News  apiKey="a6b7739d65dd485492322518c4ecab93" key="entertainment" country="in" pagesize={pagesize} category="entertainment"/>}></Route>
<Route path="/health" element={<News  apiKey="a6b7739d65dd485492322518c4ecab93" key="health" country="in" pagesize={pagesize} category="health"/>}></Route>
<Route path="/science" element={<News  apiKey="a6b7739d65dd485492322518c4ecab93" key="science" country="in" pagesize={pagesize} category="science"/>}></Route>
<Route path="/technology" element={<News  apiKey="a6b7739d65dd485492322518c4ecab93" key="technology" country="in" pagesize={pagesize} category="technology"/>}></Route>
</Routes>
</Router>
    </>
  );
}

export default App;
