import "../styles/catList.scss";
import CatHeader from "./catListHeader";
import { useState } from "react";
import CatListBody from "./catListBody";

function CatList({ cats }) {
  const [sorting, setSorting] = useState('none');
  const sortings = ['none', "pretty", "ugly", "crazy", "cozy"];

  return (
    <>
      <CatHeader setSorting={setSorting} sorting={sorting} sortings={sortings} />
      <CatListBody cats={cats} sorting={sorting} />
    </>
  );
}

export default CatList;
