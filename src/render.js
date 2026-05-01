
export const render = {
    
    sidebar(arr){
        const sidebarContainer=document.querySelector("#sidebar-container");
        sidebarContainer.innerHTML="";

        const mainButtonContainer=document.createElement("div");
        mainButtonContainer.id="main-buttons-container";

        const inbox=document.createElement("button");
        inbox.id="inbox";
        inbox.textContent="Inbox";

        const today=document.createElement("button");
        today.id="today";
        today.textContent="Today";

        const thisWeek=document.createElement("button");
        thisWeek.id="week";
        thisWeek.textContent="This Week";

        mainButtonContainer.append(inbox, today, thisWeek);

        const projects=document.createElement("div");
        projects.id="projects";
        

        const projectOverview=document.createElement("button");
        projectOverview.id="project-overview";
        projectOverview.textContent="Project Overview";
        projects.appendChild(projectOverview);

        for(let i=0; i<arr.length; i++){
            const project=document.createElement("button");
            project.dataset.id=arr[i].projectID;
            project.textContent=arr[i].name;
            project.classList.add("project-button");
            projects.appendChild(project);
        }
        sidebarContainer.append(mainButtonContainer, projects);
    },
    mainHeader(num){
        const header=document.querySelector("#header-container");
        header.innerHTML="";

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
    projectOverview(projectList){
        const projectContainer=document.querySelector("#project-container");
        projectContainer="";
        projectContainer.classList.remove("list-view");
        for(let i=0; i<projectList.length; i++){
            const projectCard=document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.dataset.id=projectList[i].getID;

            const projectName=document.createElement("h2");
            projectName.textContent=projectList[i].name;
            projectName.classList.add("project-name");

            const projectDescription=document.createElement("p");
            projectDescription.textContent=projectList[i].description;
            projectDescription.classList.add("project-description");

            const projectCounter=document.createElement("p");
            projectCounter.textContent=projectList[i].counter+ " items";
            projectCounter.classList.add("project-counter");
            
            const items=projectList[i].itemsList;
            const projectItems=document.createElement("ul");

            for(let z=0; z<items.length; z++){
                const item=document.createElement("li");
                item.textContent=items[z].title;
                item.classList.add("item-name");
                projectItems.appendChild(item);
            }
            projectCard.append(projectName, projectDescription, projectCounter, projectItems);
            projectContainer.appendChild(projectCard);
        }
        

    }
   
}