import { Fragment } from "react/jsx-runtime";
import highlightDeterminant from "../funcs/highlightDeterminant";
import { ListItemType } from "../types/ListItemType";
import Article from "./Article";
import HighlightWidget from "./HighlightWidget";
import New from "./New";
import Popular from "./Popular";
import Video from "./Video";

export default function List({ list }: {list: ListItemType[]}) {
    
    const highlightList =  {lowLvl: New, mediumLvl: Fragment, highLvl: Popular};

    return list.map((item, index) => {
        let Component = null;
        switch (item.type) {
            case 'video':
                Component = Video;
                break

            case 'article':
                Component = Article;
                break
        }

        const ItemWithHighlight = HighlightWidget(Component, highlightDeterminant, { value: item.views, highlightList });

        return <ItemWithHighlight key={index} {...item} />
    });
}
