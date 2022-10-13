import { useState } from "react";
import "./App.scss";
import data from "./catdata.json";
import CatList from "./components/catList/catList";
import CatHeader from "./components/header";

function App() {
  const [sorted, setSorted] = useState([]);
  const [active, setActive] = useState("Alla");

  console.log(active);

  console.log(data.cats)
  let kittens = [];
  switch (active) {
    case "pretty":
      kittens = data.cats.sort((a, b) =>
        a.cutenessLevel > b.cutenessLevel ? 1 : -1
      );
      console.log(kittens)
      break;
    case "ugly":
      kittens = data.cats.sort((a, b) =>
        a.cutenessLevel > b.cutenessLevel ? -1 : 1
      );
      break;
    case "crazy":
      kittens = data.cats.sort((a, b) =>
        a.livesLeft > b.livesLeft ? 1 : -1
      );
      break;
    case "cuddle":
      kittens = data.cats.filter((cat) => cat.allergyInducingFur === true);
    break;
      case "Alla": 
      kittens = data.cats;
  }

  // let cutest = data.cats.sort((a, b) =>
  //   a.cutenessLevel > b.cutenessLevel ? 1 : -1
  // );
  // let uggliest = data.cats.sort((a, b) =>
  //   a.cutenessLevel > b.cutenessLevel ? -1 : 1
  // );
  // let craziest = data.cats.sort((a, b) => (a.livesLeft > b.livesLeft ? 1 : -1));
  // let cosyFurr = data.cats.filter((cat) => cat.allergyInducingFur === true);
  // console.log(cosyFurr);

  return (
    <>
      <CatHeader active={active} setActive={setActive} />
      <main className="content">
        <CatList catData={kittens} />
      </main>
    </>
  );
}

export default App;
