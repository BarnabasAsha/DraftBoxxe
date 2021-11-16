import { EditorState } from "draft-js";
import EditorButton from "./EditorButton";

const BLOCK_STYLES = [
    { component: <i className="fas fa-list-ul"></i>, style: 'unordered-list-item', label: 'Unordered List' },
    { component: <i className="fas fa-list-ol"></i>, style: 'ordered-list-item', label: 'Ordered List' },
    { component: <i className="fas fa-quote-left"></i>, style: 'blockquote', label: 'Blockquote' },
    { component: <i className="fas fa-code"></i>, style: 'code-block', label: 'Code Block' },
];

const BlockControls = (props: { editorState: EditorState, onToggle: Function }) => {
    const { editorState, onToggle } = props
    const selection = editorState.getSelection()
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType()

    const setHeading = (e) => {
        onToggle(e.target.value)
    }

    return (
        <div className="flex items-center">
            {
                BLOCK_STYLES.map((type: any) => {
                    return <EditorButton
                        key={type.label}
                        label={type.label}
                        component={type.component}
                        style={type.style}
                        toggle={onToggle}
                        active={type.style === blockType}
                    />
                })
            }
            <select className="border-0 p-1 cursor-pointer" onChange={setHeading}>
                <option aria-label="Heading One" value="header-one">H1</option>
                <option aria-label="Heading Two" value="header-two">H2</option>
                <option aria-label="Heading Three" value="header-three">H3</option>
                <option aria-label="Heading Four" value="header-four">H4</option>
                <option aria-label="Heading Five" value="header-five">H5</option>
                <option aria-label="Heading Six" value="header-six">H6</option>
            </select>
        </div>
    )
}

export default BlockControls