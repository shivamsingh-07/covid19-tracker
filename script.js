async function start() {
    let body = document.getElementById("body");
    var head = new Array();
    await $.ajax({
        url: "https://api.thevirustracker.com/free-api?global=stats",
        dataType: "json",
        success: function(data) {
            head = data.results;
        }
    });
    document.getElementById("wait").style.display = "none";
    Object.keys(head[0]).forEach(key => {
        if (key != "source") {
            let t = document.createElement("tr");
            t.innerHTML = `<td>${key.replace(/_/g, " ")}</td><td>${head[0][key]}</td>`;
            body.appendChild(t);
        }
    });
}
