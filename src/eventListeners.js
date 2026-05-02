export function toggleDarkMode(e){
    const root=document.querySelector(":root");
    if(root.classList.contains("dark")){
        root.classList.remove("dark");
        e.target.textContent = "Dark Mode";
    }
    else{
        root.classList.add("dark");
        e.target.textContent = "Light Mode";
    }
    console.log("Toggle Dark Mode");

}

