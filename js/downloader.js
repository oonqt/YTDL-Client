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
        }, 3500);
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
        console.log("err");
    }
}


const form = document.getElementById("convert-form");

form.addEventListener("submit", (e) => {
    const video = document.getElementById("video").value;
    const format = document.getElementById("format").value;
    const url = `https://memester.cf/api/convert?url=${video}&format=${format}`;
    let isConverting = false;

    if(video === "") {
        UI.showError("You must provide a YouTube video");
    } else {
        const req = new XMLHttpRequest();

        req.open("GET", url, true);
        
        req.onreadystatechange = function() {
            if(this.status === 400 && this.readyState === 4) {
                UI.showError("Invalid or private YouTube video");
            } else if (this.status === 200 && this.readyState === 3 && isConverting === false) {
                UI.showMessage("Converting");
                isConverting = true;
            } else if (this.status === 200 && this.readyState === 4) {
                UI.showMessage("Downloading");
                download(this.response);
            }
        }

        req.send();
    }

    e.preventDefault();
});