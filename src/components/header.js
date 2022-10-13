function CatHeader({ setActive }) {

  return (
    <header className="header">
      <h1 className="heading">Hello CatLovers!</h1>
      <nav className="nav">
        <p>Sort Cats: </p>
        <a onClick={() => setActive("Alla")}>All cats</a>
        <a onClick={() => setActive("pretty")}>Prettiest cats</a>
        <a onClick={() => setActive("ugly")}>Uggliest cats</a>
        <a onClick={() => setActive("crazy")}>Cats who lived life :D</a>
        <a onClick={() => setActive("cuddle")}>
          Cats you can cuddle without sneezing
        </a>
      </nav>
    </header>
  );
}

export default CatHeader;
