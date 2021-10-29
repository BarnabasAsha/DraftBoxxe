import { EditorState } from "draft-js";
import EditorButton from "./EditorButton";

const INLINE_STYLES = [
    { component: <i className="fas fa-bold"></i>, style: 'BOLD', label: 'Bold' },
    { component: <i className="fas fa-italic"></i>, style: 'ITALIC', label: 'Italic' },
    { component: <i className="fas fa-underline"></i>, style: 'UNDERLINE', label: 'Underline' },
];

const InlineControls = (props: { editorState: EditorState, onToggle: Function }) => {
    const currentStyle = props.editorState.getCurrentInlineStyle()
    return (
        <div className="flex items-center">
            {
                INLINE_STYLES.map((type: any) => {
                    return <EditorButton
                        key={type.label}
                        label={type.label}
                        component={type.component}
                        style={type.style}
                        toggle={props.onToggle}
                        active={currentStyle.has(type.style)}
                    />
                })
            }
        </div>
    )
}

export default InlineControls