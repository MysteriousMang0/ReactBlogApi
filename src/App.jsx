import { BrowserRouter as Routes, Route, Navigate, Router } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import About from './pages/About';
import ProtectedRouts from "./utils/ProtectedRouts";
import DynamicPage from "./pages/DynamicPage";

function App() {
  return (

    <Router basename="/ReactBlogApi">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route element={<ProtectedRouts/>}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
      
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/pages/:pageId" element={<DynamicPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
}

export default App;