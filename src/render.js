import { toggleDarkMode } from "./eventListeners";  
export const render = {
    
    sidebar(projectList, onProjectClick){
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

        for(let i=0; i<projectList.length; i++){
            const project=document.createElement("button");
            project.dataset.id=projectList[i].projectID;
            project.textContent=projectList[i].name;
            project.classList.add("project-button");
            projects.appendChild(project);
            project.addEventListener("click", (e) => {
              const id=e.target.dataset.id;
              console.log("clicked id:", id, typeof id);
              if(id) onProjectClick(id);
            });
            
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
        const root=document.querySelector(":root");
        if(root.classList.contains("dark")){
            button.textContent="Light Mode";
        }
        else{
            button.textContent="Dark Mode";
        }
        
        button.addEventListener("click", toggleDarkMode);

        header.append(title, counter, button);
    },
    projectOverview(projectList){
        const projectContainer=document.querySelector("#project-container");
        projectContainer.innerHTML="";
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
        

    },
    projectHeader(num){
        const header=document.querySelector("#header-container");
        header.innerHTML="";

        const title=document.createElement("h1");
        title.id="title";
        title.textContent="To-Do-List";

        const counter=document.createElement("h1");
        const text=num + " Items";
        counter.textContent=text;
        counter.id="item-counter";

        const button=document.createElement("button");
        button.id="toggle";
        
        const root=document.querySelector(":root");
        if(root.classList.contains("dark")){
            button.textContent="Light Mode";
        }
        else{
            button.textContent="Dark Mode";
        }
        

        button.addEventListener("click", toggleDarkMode);

        header.append(title, counter, button);
    },
    itemOverview(project){
        const itemContainer=document.querySelector("#project-container");
        itemContainer.innerHTML="";
        itemContainer.classList.add("list-view");

        const projectTitle=document.createElement("h1");
        projectTitle.id="project-title";
        projectTitle.textContent=project.name;

        itemContainer.appendChild(projectTitle);

        const items=project.itemsList;
        for(let i=0; i<items.length; i++){
            const itemCard=document.createElement("div");
            itemCard.classList.add("item-card");

            const itemGroup=document.createElement("div");;
            itemGroup.classList.add("item-group");

            const itemSpecificName=document.createElement("h2");
            itemSpecificName.classList.add("item-specific-name");
            itemSpecificName.textContent=items[i].title;

            const itemDate=document.createElement("h2");
            itemDate.classList.add("item-date");
            itemDate.textContent=items[i].dueDate;

            const itemPriority=document.createElement("h2");
            itemPriority.classList.add("item-priority");
            itemPriority.textContent=items[i].priority;

            if(items[i].priority=="high"){
                itemCard.classList.add("high-priority");
                itemPriority.classList.add("high-priority");
            }
            else if(items[i].priority=="low"){
                itemCard.classList.add("low-priority");
                itemPriority.classList.add("low-priority");
            }
            else if(items[i].priority=="medium"){
                itemCard.classList.add("medium-priority");
                itemPriority.classList.add("medium-priority");
            }
            else if(items[i].priority=="cancelled"){
                itemCard.classList.add("cancel-priority");
                itemPriority.classList.add("cancel-priority");
            }
            itemGroup.append(itemSpecificName, itemDate, itemPriority);
            
            const itemDescription=document.createElement("p");
            itemDescription.textContent=items[i].description;
            itemDescription.classList.add("item-description");

            const completedButton=document.createElement("button");
            completedButton.textContent="completed";
            completedButton.classList.add("completed-button");

            itemCard.append(itemGroup, itemDescription, completedButton)
            itemContainer.appendChild(itemCard);            
        }
    },

    projectSidebar(projectList, project, onProjectClick){
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

        for(let i=0; i<projectList.length; i++){
            const projectButton=document.createElement("button");
            projectButton.dataset.id=projectList[i].projectID;
            projectButton.textContent=projectList[i].name;
            projectButton.classList.add("project-button");
            projectButton.addEventListener("click", (e) => {
              const id=e.target.dataset.id;
              console.log("clicked id:", id, typeof id);
              if(id) onProjectClick(id);
            });

            projects.appendChild(projectButton);
            if(projectList[i]==project){
                console.log("Hello World");
                const itemList=project.itemList;
                for(let l=0; l<project.counter; l++){
                    const taskButton=document.createElement("button");
                    taskButton.classList.add("task-button");
                    taskButton.textContent=project.itemsList[l].title;
                    projects.appendChild(taskButton);
                }
            }
        }
        sidebarContainer.append(mainButtonContainer, projects);
    }

   
}