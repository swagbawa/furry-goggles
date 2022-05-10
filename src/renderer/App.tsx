import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
import 'tailwindcss/tailwind.css';
import Layout from './Components/Layout/layout';

const Hello = () => {
  return (
    <div className="App w-100 h-100 p-0 m-0">
      <Layout />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
