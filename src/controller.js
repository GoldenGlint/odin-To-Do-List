import {project, item} from "./classes.js";
import {render} from "./render.js";
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

    submitNewProject(e){

        console.log("Submit new project");
        e.preventDefault();
        const newProjectInfo=e.target;

        const newProjectData=new FormData(newProjectInfo);
        const projectTitle=newProjectData.get("projectName");
        const projectDescription=newProjectData.get("projectDescription");
        const newProject=new project(projectTitle, projectDescription);
        this.addProject(newProject);
        this.renderProject(newProject);    

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
            this.renderProject(project)}, ()=>this.renderHomepage()
        );
        render.mainHeader(this.projectCounter);
        render.projectOverview(this.projectList, (e)=>this.submitNewProject(e));
    }
    renderProject(project){
        render.itemOverview(project);
        render.projectSidebar(this.projectList, project, (id) => {
            const project = this.findProject(id);
            this.renderProject(project)}, ()=>this.renderHomepage()
        );
        render.projectHeader(project.counter);
    }
}