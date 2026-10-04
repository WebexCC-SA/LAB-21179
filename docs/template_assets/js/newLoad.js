document$.subscribe(function(){loadem()})
function loadem() {
    Object.keys(sessionStorage).forEach(key => { Array.from(document.getElementsByClassName(key)).forEach((index) => { index.innerHTML = sessionStorage.getItem(key) }) });

    [].forEach.call(document.getElementsByTagName("copy"), function (el) {
        el.addEventListener("click", function (event) {
            if (event.target.tagName == "COPY") { navigator.clipboard.writeText(event.target.innerText) }
            if (event.target.tagName == "W") { navigator.clipboard.writeText(event.target.parentNode.innerText) }
        })
    })
        document.querySelector("#info").querySelectorAll("input").forEach((input) => { input.value = sessionStorage.getItem(input.name) });
} loadem()
function setValues() {
    document.querySelector("#info").querySelectorAll("input").forEach((input) => { sessionStorage.setItem(input.name, input.value) });
    Event.preventDefault()
    loadem()
}
function setItem(key,value){
    sessionStorage.setItem(key, value);
    loadem();
}