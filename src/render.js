
const render = {
    
    sidebar(arr){
        const sidebarContainer=document.createElement("div");
        sidebarContainer.id="sidebar-container";

        const mainButtonContainer=document.createElement("div");
        mainButtonContainer.id="main-buttons-container";

        const inbox=document.createElement("button");
        inbox.id="inbox";
        inbox.textContent="Inbox";

        const today=document.createElement("button");
        inbox.id="today";
        inbox.textContent="Today";

        const thisWeek=document.createElement("button");
        inbox.id="week";
        inbox.textContent="This Week";

        mainButtonContainer.append(inbox, today, thisWeek);

        const projects=document.createElement("projects");
        mainButtonContainer.id="projects";

        const projectOverview=document.createElement("button");
        inbox.id="project-overview";
        inbox.textContent="Project Overview";

        for(const i=0; i<arr.size(); i++){
            const project=document.createElement("button");
            project.id=arr[i].getID;
            project.textContent=arr[i].name;
            project.classList.add("project-button");
            projects.appendChild(project);
        }
        sidebarContainer.append(mainButtonContainer, projects);
    },
    mainHeader(num){
        const header=document.querySelector("#header-container");

        const title=document.createElement("h1");
        title.id="title";
        title.textContent="To-Do-List";

        const counter=document.createElement("h1");
        const text=num + " Projects";
        counter.textContent=text;
        counter.id="project-counter";

        const button=document.createElement("button");
        button.id="toggle";
        button.textContent="Dark Mode";

        header.append(title, counter, button);
    },
    projectOverview(){

    }
    
}