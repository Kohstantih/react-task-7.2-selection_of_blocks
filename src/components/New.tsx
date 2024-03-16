export default function New({ children }: { children: React.ReactNode}) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    )
}
