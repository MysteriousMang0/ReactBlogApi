import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import '../../src/index.css'

export default function Dashboard() {

    document.title = "About"
    let link = document.querySelector("link[rel*='icon']");
    link.href = "https://www.sanctamaria.nl/runtime/images/49/32x32/sancta_rood_equilibrist.jpg"


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const createPage = (e) => {

        e.preventDefault()

        fetch("https://worker-hello.torvic2021.workers.dev/api/postpage", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( { 
                PageTitle: title,
                PageContent: content
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                console.log("success", data.uuid)
                navigate("/pages/" + data.uuid)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    return(
        <>
            <form onSubmit={createPage}  className="editor-form">
                <textarea
                    name="Title"
                    id="Title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="title-textarea"
                ></textarea>
                <textarea
                    name="Content"
                    id="Content"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="content-textarea"
                ></textarea>
                <button id="button" type="submit" className="submit-button">Create</button>
            </form>
        </>
    )
}

