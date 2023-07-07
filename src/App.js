import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navigation from "./routes/Navigation";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/nice-select.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      <ToastContainer autoClose={800}  limit={2}/>
    </div>
  );
};

export default App;
