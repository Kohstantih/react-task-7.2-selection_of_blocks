export type highlightDeterminantType = {
    value: number,
    highlightList: {
        lowLvl: ({ children }: {
            children: JSX.Element;
        }) => JSX.Element;
        mediumLvl: React.ExoticComponent<{
            children?: React.ReactNode;
        }>;
        highLvl: ({ children }: {
            children: JSX.Element;
        }) => JSX.Element;
    }
}

export type highlightDeterminantReturnType = (
    ({ children }: { children: JSX.Element }) => JSX.Element
) | React.ExoticComponent<{ children?: React.ReactNode }>
