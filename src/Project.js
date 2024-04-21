import Task from "./Task";

export default class Project {
    constructor(title){
      this.title=title;
      this.tasks = [];
    }
  
    addTaskIntoProject(task){
      this.tasks.push(task);
    }
  
    removeTask(index){
      this.tasks.splice(index,1);
    }   
  }

  export let importProjectsFromLocalStorage = (key) => {
    let allProjects = JSON.parse(localStorage.getItem(key));
    if(!allProjects){
      // if there is nothing stored in localStorage,
      return [];
    }
    // here, we have an array of generic objects.
    //  we likely want to .map() over that array, and tell
    //  them that they are `Project` objects instead
    allProjects = allProjects.map( (genericObject) =>{
      let project = new Project(genericObject.title);
      project.tasks = genericObject.tasks.map((genericTask)=>{
        let newTaskInP = new Task(genericTask.title, genericTask.description, genericTask.date, genericTask.priority, genericTask.status)
        return newTaskInP;
      })
      return project;
    })
    // if we did that map right, we have an array of Project things!
    return allProjects;
  }
  
  export let exportProjectsToLocalStorage = (key, thingToSave) =>
    localStorage.setItem(key, JSON.stringify(thingToSave) );


    