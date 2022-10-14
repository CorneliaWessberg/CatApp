import CatListItem from "./catListItem";

function CatListBody({ cats, sorting }) {
  // calculate sorted list of cats
  const catsSorted = [...cats].sort((a, b) => {
    switch (sorting) {
      case "none":
        return 0;
      case "pretty":
        return -(a.cutenessLevel - b.cutenessLevel);
      case "ugly": // reverse pretty
        return a.cutenessLevel - b.cutenessLevel;
      case "crazy":
        return a.livesLeft > b.livesLeft ? 1 : -1;
      case "cuddle": // true - false = 1, false - true = -1
        return -(a.allergyInducingFur - b.allergyInducingFur);
    }
  });

  return (
    <>
      <main className="content">
        <ul className="catList">
          {catsSorted.map((cat, i) => (
            <CatListItem key={i} cat={cat} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default CatListBody;
