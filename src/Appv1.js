import "./App.scss";
import data from "./catdata.json";
import CatList from "./components/catList";

function App() {

  return (
    <>
      <CatList cats={data.cats} />
    </>
  );
}

export default App;
