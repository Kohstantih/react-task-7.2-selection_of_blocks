import { highlightDeterminantReturnType, highlightDeterminantType } from "../types/highlightDeterminantType"

export default function highlightDeterminant({ value, highlightList }: highlightDeterminantType): highlightDeterminantReturnType {
    if (value < 100) return highlightList.lowLvl;
    if (value > 1000) return highlightList.highLvl;
    
    return highlightList.mediumLvl
}
