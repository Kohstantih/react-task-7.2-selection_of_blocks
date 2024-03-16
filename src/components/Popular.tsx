export default function Popular({ children }: { children: React.ReactNode}) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {children}
        </div>
    )
}
