import { useEffect, useState } from "react";
import "./App.scss";
import CatList from "./components/catList";
import axios from "axios";

function Appv2() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await axios.get("http://localhost:8080/catdata.json");
      console.log(response.data.cats);
      setCats(response.data.cats);
    };
    fetchCats();
  }, []);

  return (
    <>
      <CatList cats={cats} />
    </>
  );
}

export default Appv2;
