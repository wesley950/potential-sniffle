function likeComment(commentID, onceDone) {
    var path = "http://localhost:8080/c/like/?commentID=" + commentID
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;

        if (this.status === 200) {
            var data = JSON.parse(this.responseText)
            onceDone(data)
        }
    }

    xhr.open("POST", path)
    xhr.send()
}

export {
    likeComment
}