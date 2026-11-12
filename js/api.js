export function fetchapi(priority = "", assignee = "", search = "") {
    let parametre = new URLSearchParams();

    if (priority !== "") {
        parametre.append("priority", priority);
    }

    if (assignee !== "") {
        parametre.append("assignee", assignee);
    }

    if (search !== "") {
        parametre.append("q", search);
    }

    return fetch("https://flowboard-api-virid.vercel.app/cards?" + parametre)
        .then(result => {
            if (!result.ok) {
                throw new Error("Erreur serveur");
            }

            return result.json();
        });
}