import "./App.css";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="bg-gray-100 h-screen">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          rtl={false}
          draggable
          pauseOnHover
          closeButton={true}
          style={{ width: "fit-content" }}
        />
        <Router />
      </div>
    </>
  );
}

export default App;
