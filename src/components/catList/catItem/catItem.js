import "../../../styles/catItem.scss";

function CatItem({ catData }) {
    return(
        <li className="catItem">
            <img src={catData.image}/>
            <p>{catData.name}</p>
        </li>
    );
}

export default CatItem; 