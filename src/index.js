import "./style.css";
import { startOfDay,getDate } from "date-fns";
import Project from "./Project";
import Task from "./Task";
import {importProjectsFromLocalStorage, exportProjectsToLocalStorage} from "./Project";

let allProjects= importProjectsFromLocalStorage("allprojects");

const today = document.querySelector("#today");
const allTasks = document.querySelector("#allTasks");
const important = document.querySelector("#important");
const tasksInRight = document.querySelector(".tasksInRight");
const btnAddNewTask = document.querySelector(".btnAddNewTask");
const addNewProject = document.querySelector(".addNewProject");
const barTitle = document.querySelector(".barTitle");
const projectsList = document.querySelector(".projectsList");




makeProject();


let canClikAgain = true;



function forAddingNewProject(){
    if(canClikAgain){
        
   
        
        const newProject = document.createElement("div");
        newProject.classList.add("newProject");
    

        const projectName = document.createElement("input");
        
         newProject.appendChild(projectName);
        projectName.classList.add("projectName");
        

        const btnAddProject = document.createElement("button");
        btnAddProject.textContent = "Add";
        newProject.appendChild(btnAddProject);
        btnAddProject.classList.add("btnAddProject");
    
        btnAddProject.addEventListener("click", () => {
            if(projectName.value == ""){
                alert("You must fill input with some value");
            } else{
                projectsList.removeChild(projectsList.lastChild);
                const p = new Project();
                p.title = projectName.value
                allProjects.push(p);
                exportProjectsToLocalStorage("allprojects", allProjects);
                makeProject();
                canClikAgain = true;
                

            }
        })

        const btnCancelProject = document.createElement("button");
        btnCancelProject.textContent = "Cancel";
        newProject.appendChild(btnCancelProject);
        btnCancelProject.addEventListener("click", () => {
        projectsList.removeChild(projectsList.lastChild);
        canClikAgain = true;

        })

        btnCancelProject.classList.add("btnCancelProject");


        
      

        projectsList.appendChild(newProject);
        canClikAgain = false;
    }
    
}
console.log(allProjects);


addNewProject.addEventListener("click", () => {
    
    forAddingNewProject();

    
    
})

 
function  makeProject(){
    
    
    while(projectsList.firstChild){
        projectsList.removeChild(projectsList.lastChild);
    }
    allProjects.forEach(pro => {
        let index = allProjects.indexOf(pro);
        
    const projectBox = document.createElement("div");
    projectBox.classList.add("projectBox");
    const para = document.createElement("p");
    para.textContent = pro.title;
    projectBox.appendChild(para);

    
    let taksBtnCreated = false;

    projectBox.addEventListener("click", () => {
        barTitle.innerHTML = pro.title;
        
      tasksInRight.innerHTML = "";
    
      taksBtnCreated = false;
     


        if(taksBtnCreated == false){
            btnAddNewTask.innerHTML = "";

            const createBtn = document.createElement("button");
            createBtn.textContent= "+Add";
            btnAddNewTask.appendChild(createBtn);

        

        createBtn.addEventListener("click", () =>{
        
            const taskBox = document.createElement("div");
            const taskTitle = document.createElement("p");
            taskTitle.textContent = "Title:";
            taskBox.appendChild(taskTitle);
            
            const taskTitleInput = document.createElement("input");
            taskBox.appendChild(taskTitleInput);

            const taskDetails = document.createElement("p");
            taskDetails.textContent = "Details:";
            taskBox.appendChild(taskDetails);

            const taskDetailsInput = document.createElement("input");
            taskBox.appendChild(taskDetailsInput);

            const datePara = document.createElement("p");
            datePara.textContent = "Pick a date";
            taskBox.appendChild(datePara);
        
            const datePicker = document.createElement("input");
            datePicker.setAttribute('type', 'date');
            taskBox.appendChild(datePicker);

            const importance = document.createElement("p");
            importance.textContent = "priority?";
            taskBox.appendChild(importance);
            const imp = document.createElement("button");
            imp.textContent = "not priority";
            imp.style.color = "black";
            
            taskBox.appendChild(imp);
            imp.addEventListener("click" , ()=> {
                if(imp.textContent == "not priority"){
                    imp.style.color = "white";
                    imp.style.backgroundColor ="green";
                    imp.textContent = "priority";
                } 
                else if(imp.textContent == "priority"){
                    imp.style.backgroundColor ="red";
                    imp.style.color = "black";
                    imp.textContent = "not priority";
                }
            })

            

            const add = document.createElement("button");
            add.textContent = "Add";
            taskBox.appendChild(add);
            add.classList.add("add");
    
        add.addEventListener("click", () => {
            
                tasksInRight.removeChild(tasksInRight.lastChild);
                const task = new Task();
                task.title = taskTitleInput.value;
                task.description = taskDetailsInput.value;
                if(imp.textContent == "not priority"){
                    task.priority = "not priority";
                } else if(imp.textContent == "priority"){
                    task.priority = "priority";
                }
                
                task.date = datePicker.value;
                pro.addTaskIntoProject(task);
                exportProjectsToLocalStorage("allprojects", allProjects);

                makeTask(task,pro);
                
               
                
            
        })

         

        const btnCancelTask = document.createElement("button");
        btnCancelTask.textContent = "Cancel";
        taskBox.appendChild(btnCancelTask);
        btnCancelTask.addEventListener("click", () => {
            tasksInRight.removeChild(tasksInRight.lastChild);
        

        })

            tasksInRight.appendChild(taskBox);


        })

        

        taksBtnCreated = true;
        
        }
        // displaying tasks in current project
       
        displayTasks(pro);
    })
    

    

    const removeProject = document.createElement("button");
    removeProject.textContent = "remove";
    projectBox.appendChild(removeProject);
    removeProject.addEventListener("click", ()=> {
        allProjects.splice(index,1);
        exportProjectsToLocalStorage("allprojects", allProjects);
        makeProject();
        barTitle.textContent = "";
        btnAddNewTask.innerHTML = "";
        tasksInRight.innerHTML = "";
    })

    projectsList.appendChild(projectBox);
    })
    
}
function displayTasks(pro){
   
    pro.tasks.forEach(taskInProject => {
        makeTask(taskInProject,pro);
      })
}


function makeTask(task,pro){

    

    
    const taskBox = document.createElement("div");
    taskBox.classList.add("taskBox");
    const title = document.createElement("p");
    title.textContent = task.title;
    taskBox.appendChild(title);

    const description = document.createElement("p");
    description.textContent = task.description;
    taskBox.appendChild(description);

    const date = document.createElement("p");
    date.textContent = task.date;
    taskBox.appendChild(date);


    const importance = document.createElement("p");
    importance.textContent = task.priority;
    taskBox.appendChild(importance);

    const done = document.createElement("button");
    done.textContent = "unfinished";
    task.status = "unfinished"
    done.style.backgroundColor ="red";
    done.addEventListener("click", ()=>{
        if(done.textContent == "unfinished"){
            done.style.color = "white";
            done.style.backgroundColor ="green";
            done.textContent = "finished";
            task.status = "finished"
        } 
        else if(done.textContent == "finished"){
            done.style.backgroundColor ="red";
            done.style.color = "black";
             done.textContent = "unfinished";
             task.status = "unfinished"
        }
        

    })
    taskBox.appendChild(done);
    

    const delTask = document.createElement("button");
    delTask.textContent = "delete";
    delTask.addEventListener("click", () => {
        
        
        pro.removeTask(pro.tasks.indexOf(task));
        exportProjectsToLocalStorage("allprojects", allProjects);
        
        tasksInRight.innerHTML = "";
        displayTasks(pro);
        
    })
    taskBox.appendChild(delTask);

    tasksInRight.appendChild(taskBox);
 }

function initialDIsplay(){
    barTitle.textContent = allTasks.innerHTML;
    btnAddNewTask.innerHTML = "";
    tasksInRight.innerHTML = "";
    allProjects.forEach(project => {
        project.tasks.forEach(taskInProject => {
            makeTask(taskInProject);
            
          })
    })
}

allTasks.addEventListener("click" , () => {
   
    barTitle.textContent = allTasks.innerHTML;
    btnAddNewTask.innerHTML = "";
    tasksInRight.innerHTML = "";
    allProjects.forEach(project => {
        project.tasks.forEach(taskInProject => {
            makeTask(taskInProject);
            
          })
    })
})

important.addEventListener("click" , ()=> {
    barTitle.textContent = important.innerHTML;
    btnAddNewTask.innerHTML = "";
    tasksInRight.innerHTML = "";
    allProjects.forEach(project => {
        project.tasks.forEach(taskInProject => {
            if(taskInProject.priority == "priority"){
                makeTask(taskInProject);
            }
            
            
          })
    })

})

today.addEventListener("click", () => {
    barTitle.textContent = today.innerHTML;
    btnAddNewTask.innerHTML = "";
    tasksInRight.innerHTML = "";
    allProjects.forEach(project => {
        project.tasks.forEach(taskInProject => {
            const date = new Date();
            date.getDate();
            const result = date.toISOString().split('T')[0]
            
            if(taskInProject.date == result){
               makeTask(taskInProject);
            }
            
            
          })
    })

})

