import { ListItemType } from "../types/ListItemType";

export default function Video({ url, views }: ListItemType) {
    return (
        <div className="item item-video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    )
}
