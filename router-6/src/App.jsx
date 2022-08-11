import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Singlepage from "./pages/Singlepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/new" element={<Createpost/>}/>
          <Route path="/blog/:id" element={<Singlepage/>}/>
          <Route path="/blog/:id/edit" element={<Editpost/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/*" element={<Notfound/>}/>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
