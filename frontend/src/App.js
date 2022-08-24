import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OverviewRoute from './routes/overview'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={OverviewRoute} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
