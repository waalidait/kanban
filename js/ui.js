 
import { fetchapi } from "./api.js";

let product = [];

let error = document.querySelector("#erreur");

let todo = document.querySelector("#todo");
let progress = document.querySelector("#in-progress");
let done = document.querySelector("#done");

 function getdata() {
    fetchapi()
        .then(data => {
            product = data;
            affichertask(product);
            error.classList.add("hidden");
        })
        .catch(err => {
            error.classList.remove("hidden");
        });
}

getdata();

 function affichertask(data) {

    todo.replaceChildren();
    progress.replaceChildren();
    done.replaceChildren();

    data.forEach(element => {

        let card = document.createElement("div");
        card.className = "bg-white p-3 rounded-lg mt-3";

        let title = document.createElement("h3");
        title.textContent = element.title;

        let prp = document.createElement("p");
        prp.textContent = element.priority;
        prp.className = "bg-yellow-500 text-white rounded-lg px-3 py-1 w-24 text-center";

        let desc = document.createElement("p");
        desc.textContent = element.description;

        card.appendChild(prp);
        card.appendChild(title);
        card.appendChild(desc);

        if (element.status === "todo") {
            todo.appendChild(card);
        }

        if (element.status === "in-progress") {
            progress.appendChild(card);
        }

        if (element.status === "done") {
            done.appendChild(card);
        }
    });
}
