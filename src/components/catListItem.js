import "../styles/catItem.scss";

function CatListItem({ cat }) {
    return(
        <li className="catItem">
            <img src={cat.image}/>
            <p>{cat.name}</p>
        </li>
    );
}

export default CatListItem; 