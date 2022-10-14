import "../styles/catHeader.scss";
import cn from "classnames";

function CatHeader({ setSorting, sorting, sortings }) {
  let catMap = new Map([
    ["none","None"],
    ["pretty", "Prettiest cats"],
    ["ugly", "Not so pretty"],
    ["crazy", "Cats who lived life ;)"],
    ["cozy", "You can cuddle without sneezing"],
]);

  return (
    <header className="header">
      <h1 className="heading">Hello CatLovers!</h1>
      <nav className="nav">
        <p>Sort cats: </p>
        {sortings.map((sortItem, i) => {
            return <button className={cn("button", sorting === sortItem && "active")} key={i} onClick={() => setSorting(sortItem)} >{catMap.get(sortItem)}</button>
        })}
      </nav>
    </header>
  );
}

export default CatHeader;
