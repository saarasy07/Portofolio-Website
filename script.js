// Greeting

const hour = new Date().getHours();

if(hour < 12){
    document.getElementById("greeting").textContent =
    "Good Morning";
}
else if(hour < 18){
    document.getElementById("greeting").textContent =
    "Good Afternoon ";
}
else{
    document.getElementById("greeting").textContent =
    "Good Evening ";
}


const subtitles = [
    "Here are some projects that I have worked on.",
    "Some of my favorite projects.",
    "Projects from my learning journey."
];

const randomIndex =
Math.floor(Math.random() * subtitles.length);

document.getElementById("subtitle").textContent =
subtitles[randomIndex];