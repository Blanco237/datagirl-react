import "./App.css";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from "./pages/counter";
import Users from "./pages/users";
import SignIn from "./pages/signin";
import Todo from "./pages/todo";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />}  />
        <Route path="/users" element={<Users />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
