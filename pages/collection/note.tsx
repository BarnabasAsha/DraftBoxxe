import React, { useState } from "react"
import Head from "next/head";
import { AtomicBlockUtils, Editor, EditorState, getDefaultKeyBinding, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Layout from "../../components/Layout"
import InlineControl from "../../components/InlineControls";
import BlockControls from "../../components/BlockControls";
import MediaControls from "../../components/MediaControls";
import MediaRender from "../../components/MediaRender";

const Note = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    );

    const handleChange = (state: EditorState) => {
        setEditorState(state)
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
        <Layout>
            <Head>
                <title>DraftBoxxe - Create</title>
                <meta charSet="utf-8" />
            </Head>
            <section className="w-full h-xx RichEditor-root">
                <div className="flex items-center">
                    <InlineControl editorState={editorState} onToggle={toggleInlineStyle} />
                    <BlockControls editorState={editorState} onToggle={toggleBlockType} />
                    <MediaControls onToggle={toggleConfirmMedia} />
                </div>
                <div className="w-full h-xx mt-5 border border-secondary overflow-hidden overflow-y-scroll p-4">
                    <Editor blockRendererFn={mediaBlockRenderer} editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand}
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Note