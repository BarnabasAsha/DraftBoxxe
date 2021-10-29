import { useState } from "react";
import { EditorState } from "draft-js";
import EditorButton from "./EditorButton";

const BLOCK_STYLES = [
    { component: <i className="fas fa-list-ul"></i>, style: 'unordered-list-item', label: 'Unordered List' },
    { component: <i className="fas fa-list-ol"></i>, style: 'ordered-list-item', label: 'Ordered List' },
    { component: <i className="fas fa-quote-left"></i>, style: 'blockquote', label: 'Blockquote' },
    { component: <i className="fas fa-code"></i>, style: 'code-block', label: 'Code Block' },
];

const HEADING_STYLES = ['header-one', 'header-two', 'header-three', 'header-four', 'header-five', 'header-six']

const BlockControls = (props: { editorState: EditorState, onToggle: Function }) => {
    const [index, updateIndex] = useState(0)
    const { editorState, onToggle } = props
    const selection = editorState.getSelection()
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType()

    const increaseHeading = () => {
        if (index < 6) {
            onToggle(HEADING_STYLES[index])
            updateIndex(index => index++)
        }
        updateIndex(0)
    }

    const decreaseHeading = () => {
        if (index > 0 || index === 0) {
            onToggle(HEADING_STYLES[index])
            updateIndex(index => index--)
        }
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
            <button className="border-0 outline-none text-black p-1 mx-2" onClick={increaseHeading}>A+</button>
            <button className="border-0 outline-none text-black p-1 mx-2" onClick={decreaseHeading}>A-</button>
        </div>
    )
}

export default BlockControls