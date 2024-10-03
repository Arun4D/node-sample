import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import Login  from "./login/login";
import Dashboard from './dashboard/dashboard';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" /> } />
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  );
}

export default App;
