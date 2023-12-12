// export default function TabButton({ children, onSelect, isSelected }) {
    export default function TabButton({ children,  isSelected, ...props }) {
    return (
        <li>
            <button
                className={isSelected ? 'active' : undefined}
                // onClick={onSelect}
                {...props}
            >
                {children}
            </button>
        </li>
    );
}
