function likeThread(threadID, onceDone) {
    var path = `http://localhost:8080/t/like/?threadID=${threadID}`
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;

        if (this.status === 200) {
            onceDone()
        }
    }

    xhr.open("POST", path)
    xhr.send()
}

function commentThread(threadID, comment, onceDone) {
    var path = "http://localhost:8080/c/submit/"
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;

        if (this.status === 201) {
            onceDone()
        }
    }

    xhr.open("POST", path)
    xhr.setRequestHeader("Content-Type", "application/json")
    var content = JSON.stringify({
        text: comment,
        thread: {
            id: threadID
        }
    })
    xhr.send(content)
}

export {
    likeThread,
    commentThread
}