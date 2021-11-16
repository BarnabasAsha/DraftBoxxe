import React, { useRef, useState, useEffect } from "react"
import Draft, { AtomicBlockUtils, Editor, EditorState, getDefaultKeyBinding, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import InlineControl from "./InlineControls";
import BlockControls from "./BlockControls";
import MediaControls from "./MediaControls";
import MediaRender from "./MediaRender";

interface iEditor {
    initialContent?: {title: "", content: ""},
    saveContent: Function
}

const NoteEditor = (props: iEditor) => {
    const { initialContent, saveContent } = props
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    )
    const [title, setTitle] = useState("")
    const editorRef = useRef(null)

    const handleChange = (state: EditorState) => {
        setEditorState(state)
    }

    const getCurrentContent = () => {
        const contentState = editorState.getCurrentContent();
        const rawJson = Draft.convertToRaw(contentState);
        const snapshot = rawJson.blocks[0].text
        const jsonStr = JSON.stringify(rawJson, null, 1);
        saveContent({title: title, content: jsonStr, snapshot: snapshot})
    }

    const createWithRawContent = () => {
        if (initialContent.content) {
            const rawJson = JSON.parse(initialContent.content)
            const contentState = Draft.convertFromRaw(rawJson)
            const newEditorState = Draft.EditorState.createWithContent(contentState)
            setTitle(initialContent.title)
            handleChange(newEditorState)
        }
    }

    useEffect(() => {
        createWithRawContent()
    }, [])

    useEffect(() => {
        getCurrentContent()
    }, [editorState])

    const handleFocus = () => {
        // editorRef.current.focus()
        getCurrentContent()
    }

    const handleKeyCommand = (command: string, editorState: any) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)

        if (newState) {
            handleChange(newState)
            return 'handled'
        }
        return 'not-handled'
    }

    const mapKeyToEditorCommand = (e: any) => {
        if (e.keyCode === 9) {
            const newEditorState = RichUtils.onTab(
                e,
                editorState,
                4,
            )
            if (newEditorState !== editorState) {
                handleChange(editorState)
            }
            return
        }
        return getDefaultKeyBinding(e)
    }

    const toggleBlockType = (blockType: string) => {
        handleChange(RichUtils.toggleBlockType(editorState, blockType))
    }

    const getBlockStyle = (block) => {
        switch (block.getType()) {
            case 'blockquote': return 'RichEditor-blockquote';
            default: return "";
        }
    }

    function mediaBlockRenderer(block: any) {
        if (block.getType() === 'atomic') {
            return {
                component: MediaRender,
                editable: false,
            };
        }

        return null;
    }

    const toggleInlineStyle = (inlineStyle: string) => {
        handleChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))
    }

    const toggleConfirmMedia = (urlType: string, urlValue: string) => {
        console.log(urlType, urlValue)
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', { src: urlValue })
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
        handleChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '))
    }

    return (
        <section className="w-full h-xx RichEditor-root">
            <div className="flex items-center">
                <InlineControl editorState={editorState} onToggle={toggleInlineStyle} />
                <BlockControls editorState={editorState} onToggle={toggleBlockType} />
                <MediaControls onToggle={toggleConfirmMedia} />
            </div>
            <div className="w-full h-xx mt-5 p-4">
                <textarea className="border-0 font-bold text-xl w-full outline-none resize-none" name="title" placeholder="Title" rows={1} autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className="RichEditor-editor">
                    <Editor blockRendererFn={mediaBlockRenderer} blockStyleFn={getBlockStyle} editorState={editorState} customStyleMap={styleMap} keyBindingFn={mapKeyToEditorCommand} onChange={setEditorState} handleKeyCommand={handleKeyCommand} spellCheck={true} ref={editorRef}
                    />
                </div>
            </div>
        </section>
    )
}

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: '#000000',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },

    h1: {
        fontSize: '3rem'
    }
};


export default NoteEditor