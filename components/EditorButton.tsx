
const EditorButton = (props: { label: string, toggle: Function, style: string, active: boolean, component: HTMLElement }) => {

    const onToggle = (e) => {
        e.preventDefault()
        props.toggle(props.style)
    }
    return (
        <button aria-label={props.label} onMouseDown={onToggle} className={`border-0 outline-none text-black p-1 mx-2 ${props.active ? 'text-blue-700' : null}`}>
            {props.component}
        </button>
    )
}

export default EditorButton