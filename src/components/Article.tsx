import { ListItemType } from "../types/ListItemType";

export default function Article({ title, views }: ListItemType) {
    return (
        <div className="item item-article">
            <h3><a href="#">{title}</a></h3>
            <p className="views">Прочтений: {views}</p>
        </div>
    )
}
