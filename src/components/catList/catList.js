import CatItem from "./catItem/catItem";
import "../../styles/catList.scss";

function CatList({ catData }) {
    return(
        <ul className="catList">
            {catData.map((cat, i) => {
                return(
                    <CatItem 
                    key={i}
                    catData={cat}
                    />
                )
            })}
        </ul>
    );
}

export default CatList; 