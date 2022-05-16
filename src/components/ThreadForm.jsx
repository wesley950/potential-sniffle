import React from "react";
import { useNavigate } from "react-router-dom";

function ThreadForm() {
    const navigate = useNavigate()

    const submitThread = () => {
        let titleInput = document.getElementById("thread-title")
        let textInput = document.getElementById("thread-text")

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            if (this.status == 201) {
                var response = JSON.parse(this.responseText)
                var newPath = `/thread/${response.id}/`
                navigate(newPath)
            }
        }

        xhr.open("POST", "http://localhost:8080/t/submit/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            title: titleInput.value,
            description: textInput.value
        }))
    }

    return (
        <div className="mt-3">
            <h3>Faça a sua própria postagem</h3>
            <input type="text" id="thread-title" className="form-control mb-2" placeholder="Título (requerido)" />
            <textarea className="form-control mb-2" id="thread-text" cols="30" rows="10" placeholder="Mensagem (opcional)"></textarea>
            <button className="btn btn-primary" onClick={submitThread}>Enviar</button>
        </div>
    )
}

export default ThreadForm;