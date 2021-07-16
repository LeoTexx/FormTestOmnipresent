import "./App.scss";
import Shapes from "./components/Shapes";
import Form from "./components/Form";

function App({ Component, pageProps }) {
  return (
    <div className="app-container ">
      <div id="app-container">
        <Shapes />
        <div className="container pt-4 pb-4">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
