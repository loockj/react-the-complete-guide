export default function TabButton({ children, isSelected, ...props }) {
    // console.log(`TAB COMPONENT EXECUTING`);

    return (
        <li>
            <button className={isSelected ? `active` : ``} {...props}>
                {children}
            </button>
        </li>
    );
}
