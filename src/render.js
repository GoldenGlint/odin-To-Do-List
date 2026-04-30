
const render = {
    
    sidebar(arr){

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
    },
    projectOverview(){

    }
    
}