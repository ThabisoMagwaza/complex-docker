import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Fib />} />
          <Route path="/otherPage" element={<OtherPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
