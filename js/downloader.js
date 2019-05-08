class UI {
    static showError(message) {
        const div = document.createElement("div");

        div.className = "alert error";
    
        div.appendChild(document.createTextNode(message));
    
        const container = document.querySelector(".container");
    
        const form = document.getElementById("convert-form");
    
        container.insertBefore(div, form);
    
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 2500);
    }

    static showMessage(message) {
        const div = document.createElement("div");

        div.className = "alert success";
    
        div.appendChild(document.createTextNode(message));
    
        const container = document.querySelector(".container");
    
        const form = document.getElementById("convert-form");
    
        container.insertBefore(div, form);
    
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3500);
    }

    static loading(status) {
        const loadingBar = document.getElementById("loadingBar");

        loadingBar.hidden = !status;
    }
}

const form = document.getElementById("convert-form");
let startedConverting = false;

form.addEventListener("submit", (e) => {
    

    e.preventDefault();
});