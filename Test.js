const dataToSend = {
    punteggio: "1"
};

fetch("http://127.0.0.1:3000/add", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));