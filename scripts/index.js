class Activity {
    static contador = 1;
    constructor(title,description,imgUrl) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.id = Activity.contador++;
    }
}

class Repository {
    constructor(){
        this.activities = [];
    }

    createActivity (title,description,imageUrl) {
        let activity = new Activity(title,description,imageUrl);
        this.activities.push(activity);
    }

    getAllActivities () {
        return this.activities;
    }

    deleteActivity (id) {
        this.activities.forEach((activity) => {
            if (activity.id == id) {
                let index = this.activities.indexOf(activity);
                this.activities.splice(index,1);
            }
        });
        activitiesHTML();
    }
}

const repo = new Repository();

function activityHTML (activity) {
    const {title, description, imgUrl, id} = activity;

    const nuevoH4 = document.createElement("h4");
    const nuevoP = document.createElement("p");
    const nuevoImg = document.createElement("img");
    
    nuevoH4.innerHTML = title;
    nuevoH4.classList.add("h3");

    nuevoP.innerHTML = description;
    nuevoP.classList.add("p");

    nuevoImg.src = imgUrl;
    nuevoImg.classList.add("imagenAct");

    const div = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "Eliminar";
    button.addEventListener("click", () => {repo.deleteActivity(id)});

    console.log(repo.activities);
    div.appendChild(nuevoH4);
    div.appendChild(nuevoImg);
    div.appendChild(nuevoP);
    div.appendChild(button);
    div.classList.add("misActividades");

    return div;

} 

function activitiesHTML () {
    const divActividades = document.getElementsByClassName("contActividades")[0];
    divActividades.innerHTML = "";
    const allActivities = repo.getAllActivities();
    const allActHTML = allActivities.map((activity) => activityHTML(activity));
    allActHTML.forEach((element) => {
        divActividades.appendChild(element)
    });
}

function agregar () {
    const titleInput = document.getElementById("title");
    const title = titleInput.value;
    
    const descriptionInput = document.getElementById("description");
    const description = descriptionInput.value;

    const imgUrlInput = document.getElementById("imgUrl");
    const imgUrl = imgUrlInput.value;

    if (!title || !description || !imgUrl) {
        alert("Información incompleta. Por favor complete todos los espacios.")
    } else {
        repo.createActivity(title, description, imgUrl);

        activitiesHTML();

        titleInput.value = "";
        descriptionInput.value = "";
        imgUrlInput.value = "";
    }
}

const span = document.getElementsByTagName("span")[0];
span.addEventListener("click", agregar);