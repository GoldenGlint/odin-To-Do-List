import {project, item} from "./classes.js";
import {render} from "./render.js";
import { format, compareAsc,isPast, isFuture, isToday, parseISO, addWeeks, isAfter, isBefore  } from "date-fns";

export class controller{
    #projectList=[];
    #projectCounter=0;

    addProject(project){
        this.#projectList.push(project);
        this.#projectCounter++;
    }

    removeProject(ID){
        this.#projectList=this.#projectList.filter(project=>project.projectID!=ID);
        this.#projectCounter--;
    }

    findProject(ID){
        const project=this.#projectList.find(project=>project.projectID==ID);
        return project;
    }

    findTodayProject(){
        const projects=this.projectList;
        let itemsToday=[];
        for(let i=0; i<projects.length; i++){
            let items=projects[i].itemsList;
            for(let l=0; l<items.length; l++){
                if(isToday(items[l].dueDate)){
                    itemsToday.push(items[l]);
                }
            }
        }
        return itemsToday;
    }

    findWeekProject(){
        const projects=this.projectList;
        let itemsWeek=[];
        const today=new Date();
        const week=addWeeks(today, 1);
        for(let i=0; i<projects.length; i++){
            let items=projects[i].itemsList;
            for(let l=0; l<items.length; l++){
                if(isToday(items[l].dueDate)||(isAfter(items[l].dueDate, today)&&isBefore(items[l].dueDate, week))){
                    itemsWeek.push(items[l]);
                }
            }
        }
        console.log(itemsWeek);
        return itemsWeek;
    }

    navigateFromCard(ID){
        const project=this.findProject(ID);
        console.log(ID);
        this.renderProject(project);
    }

    submitNewProject(e){

        console.log("Submit new project");
        e.preventDefault();
        const newProjectInfo=e.target;

        const newProjectData=new FormData(newProjectInfo);
        const projectTitle=newProjectData.get("projectName");
        const projectDescription=newProjectData.get("projectDescription");
        const newProject=new project(projectTitle, projectDescription);
        this.addProject(newProject);
        const dialog = document.querySelector("#new-project-dialog");
        dialog.close();
        this.renderProject(newProject);    

    }

    submitNewItem(e, project){


        console.log("Submit new item");
        e.preventDefault();
        
        const newItemInfo=e.target;

        const newItemData=new FormData(newItemInfo);
        const itemTitle=newItemData.get("itemName");
        const itemDescription=newItemData.get("itemDescription");
        const itemDate=newItemData.get("itemDate");
        const itemPriority=newItemData.get("itemPriority");
        const newItem=new item(itemTitle, itemDescription, itemDate, itemPriority);
        project.addItem(newItem);
        
        const dialog = document.querySelector("#new-item-dialog");
        dialog.close();
        this.renderProject(project);
           

    }

    removeProjectAction(ID){
       
        this.removeProject(ID);
        this.renderHomepage();
    }

    removeItemAction(itemID, project, view="project"){

        project.removeItem(itemID);
        if(view=="today"){
        this.renderToday();
        } else if(view=="week"){
            this.renderWeek();
        } else {
            this.renderProject(project);
        }

    }

    get projectList(){
        return this.#projectList;
    }

    get projectCounter(){
        return this.#projectCounter;
    }

    renderHomepage(){
        render.sidebar(this.projectList,  (id) => {
            const project = this.findProject(id);
            this.renderProject(project)}, 
            ()=>this.renderHomepage(),
            ()=>this.renderToday(),
            ()=>this.renderWeek()
        );
        render.mainHeader(this.projectCounter, () => this.renderHomepage());
        render.projectOverview(this.projectList, (e)=>this.submitNewProject(e), (ID)=>this.navigateFromCard(ID), (ID)=>this.removeProjectAction(ID));
    }
    renderProject(project){
        render.itemOverview(project, (e)=>this.submitNewItem(e, project), (ID, project)=>this.removeItemAction(ID, project));
        render.projectSidebar(this.projectList, project, (id) => {
            const project = this.findProject(id);
            this.renderProject(project)}, 
            ()=>this.renderHomepage(),
            ()=>this.renderToday(),
            ()=>this.renderWeek()
        );
        render.projectHeader(project.counter, () => this.renderHomepage());
    }
    renderToday(){
        const itemToday=this.findTodayProject();
        render.itemsToday(itemToday, (ID, project) => this.removeItemAction(ID, project, "today"))
        render.sidebar(this.projectList,  (id) => {
            const project = this.findProject(id);
            this.renderProject(project)}, 
            ()=>this.renderHomepage(), 
            ()=>this.renderToday(), 
            ()=>this.renderWeek()
        );
        render.mainHeader(this.projectCounter, () => this.renderHomepage());
        
    }
    renderWeek(){
        const itemWeek=this.findWeekProject();
        render.itemsWeek(itemWeek, (ID, project) => this.removeItemAction(ID, project, "week"))
        render.sidebar(this.projectList,  (id) => {
            const project = this.findProject(id);
            this.renderProject(project)}, 
            ()=>this.renderHomepage(), 
            ()=>this.renderToday(), 
            ()=>this.renderWeek()
        );
        render.mainHeader(this.projectCounter, () => this.renderHomepage());
        
    }
}