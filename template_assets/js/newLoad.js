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
async function sendTest(event){
    event?.preventDefault();
    const form = event?.target?.closest("form") || document.querySelector("#testing");
    if (!form) {
        console.error("Unable to send test: testing form was not found.");
        return;
    }
    const status = form.querySelector("output");
    const button = form.querySelector("button[type='submit']");
    if (!status || !button) {
        console.error("Unable to send test: form requires an output element and a submit button.");
        return;
    }
    const values = new FormData(form);
    const url = sessionStorage.getItem("hookURL");
    button.disabled = true;
    status.textContent = "Sending...";
    try {
        if (!url) {
            throw new Error("Webhook URL is missing from session storage.");
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                msg: values.get("message"),
                phone: values.get("phone"),
                forceMMS: sessionStorage.getItem("forceMMS") === "true"
            })
        });
        if (!response.ok) {
            throw new Error("Webhook returned HTTP " + response.status);
        }
        status.textContent = "Test sent.";
        return response;
    } catch (error) {
        status.textContent = "Unable to send test: " + error.message;
    } finally {
        button.disabled = false;
    }
}