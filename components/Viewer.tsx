import { useEffect, useState } from "react"
import Draft from "draft-js"
import { stateToHTML } from "draft-js-export-html"

interface iViewer {
    title: string,
    content: string
}

const Viewer = ({ title, content }: iViewer) => {
    const [html, setHtml] = useState('')

    const getContent = () => {
        if(title !== '' || content !== '') {
            const rawJson = JSON.parse(content)
            const contentState = Draft.convertFromRaw(rawJson)
            setHtml(stateToHTML(contentState))
        }   
    }

    useEffect(() => {
        getContent()
    }, [])

    return (
        <article className="max-w-7xl mx-auto w-full p-8 mt-5">
            <h1 className="text-3xl font-bold my-6">{title}</h1>
            <div className="w-100 viewer" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    )
}

export default Viewer