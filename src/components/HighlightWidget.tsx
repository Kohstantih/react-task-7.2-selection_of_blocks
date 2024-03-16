import { ListItemType } from "../types/ListItemType";
import { highlightDeterminantReturnType, highlightDeterminantType } from "../types/highlightDeterminantType";

const HighlightWidget = (
    Component: ((props: ListItemType) => JSX.Element) | null,
    determinantComponents: (params: highlightDeterminantType) => highlightDeterminantReturnType,
    params: highlightDeterminantType) => (props: ListItemType) => {
    const ChooseComponent = determinantComponents(params);

    if (!Component) return;

    return <ChooseComponent children={<Component {...props} />} />
}

export default HighlightWidget;
