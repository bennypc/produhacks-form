import "./App.css";
import Form from "./components/Form";
import { Route, Routes, Link } from "react-router-dom";
import ThankYouPage from "./components/ThankYou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
