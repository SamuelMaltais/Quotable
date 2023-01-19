import { Route, BrowserRouter as Router, Routes , Pathname} from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import AllQuotes from './pages/AllQuotes';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <Router location={"/"}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<AllQuotes />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='profile' element={<Profile />} />
        <Route path='signup' element={<SignupPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
