import { useState } from "react"
import Head from "next/head";
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Layout from "../../components/Layout"

const Note = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    );

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)

        if (newState) {
            setEditorState(newState)
            return 'handled'
        }
        return 'not-handled'
    }

    const setBold = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
    }

    const setItalic = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
    }

    return (
        <Layout>
            <Head>
                <title>DraftBoxxe - Create</title>
                <meta charSet="utf-8" />
            </Head>
            <section className="w-full h-4/5">

                <div className="w-full h-full mt-5 border border-secondary p-4">
                    <ul className="flex justify-end mt-3">
                        <li className="mx-2">
                            <button onClick={setBold} className="border border-secondary w-10 h-8 font-bold">B</button>
                        </li>
                        <li className="mx-2">
                            <button onClick={setItalic} className="border border-secondary w-10 h-8 italic">I</button>
                        </li>
                        <li className="mx-2">
                            <button className="border border-secondary w-10 h-8 underline">U</button>
                        </li>
                        <li className="mx-2">
                            <button className="border border-secondary w-10 h-8"><i className="fas fa-image"></i></button>
                        </li>
                    </ul>
                    <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand} />
                </div>
            </section>
        </Layout>
    )
}

export default Note