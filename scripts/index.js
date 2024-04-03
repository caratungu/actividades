class Activity {
    constructor(title,description,imgUrl) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.id = [this.title, this.description, this.imgUrl];
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
        console.log(this.activities);
    }

    deleteActivity (clave) {
        for (let i = 0; i < this.activities.length; i++) {
            for (let j = 0; j < this.activities[i].length; j++) {
                if (this.activities[i][j] === clave) {
                    console.log("Encontrado");
                } else {
                    console.log("No funciona");
                }
            }
        }
        let index = this.activities = this.activities.filter((id) => id !== clave);
    }
}

const repo = new Repository();

repo.createActivity("Leer","Nos lleva a mundos distintos","url");

repo.createActivity("Patinar","Distrae la mente","url2");

repo.createActivity("Jugar Rummy","PErmite ejercitar pensamiento abstracto","url3");

repo.getAllActivities();

repo.deleteActivity(['Leer', 'Nos lleva a mundos distintos', 'url']);

repo.getAllActivities();

const array = [[1,2],[3,4,5],[5,6,7,8]];
console.log(array[1][1] === 1);