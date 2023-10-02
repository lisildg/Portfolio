import fusionajob from "./public/fusionajob.png";
import nextholiday from "./public/nextholiday.png";
import food from "./public/food.png";
import reflex from "./public/reflex.png"
const projects = [
    {
        name: "Fusionajob",
        description: "Fusionajob is a job portal to search and publish job opportunities. It's the final project that we developed along with the rest of the team for the soyHenry bootcamp",
        image: "fusionajob.png",
        techStack: " Redux Toolkit, Tailwind, React, Express, Firebase, Cloudinary, PostgreSQL y Sequelize.",
        site: "https://fusionajob.vercel.app/"
    },
    {
        name: "Rick and Morty",
        description:"This is a web application where you can view the characters, locations, and episodes of Rick and Morty. You can filter them by gender, species, and status. You can also filter characters by name search. Additionally, you can see the characters that appear in each episode and location." ,
        image:"rickandmorty.png",
        techStack:"React, JavaScript, CSS, Bootstrap, Bootswatch",
        site:"https://rick-and-morty-lisi.vercel.app/",
    },
    {
        name: "Weather App",
        description: "It's a weather app that has a search feature where you choose the city to display the maximum temperature, minimum temperature, wind chill, visibility, humidity, wind speed, air pressure, sunrise time, sunset time, and it also provides a forecast for the next 7 days.",
        image: "weather.png",
        techStack: " Next, React, JavaScript, CSS, Tailwind, HTML",
        site: "https://weatherapp-lisildg.vercel.app/"
    },
    {
        name: "Reflex Game",
        description: "It's a reflex game, as you accumulate more points in the game, the difficulty increases as the button becomes smaller.",
        image: "reflex.png",
        techStack: " Vite, React, TypeScript, CSS, HTML",
        site: "https://reflexgame-lisildg.netlify.app/"
    },
    {
        name: "Next Holiday",
        description: "It is an app that displays the next holiday in Argentina, how many days are left until it, and which was the previous holiday.",
        image: "nextholiday.png",
        techStack: " Vite, React, TypeScript, CSS, HTML",
        site: "https://nextholiday-lisildg.netlify.app/"
    },
    {
        name: "Food App",
        description: "This is a web application that uses a food recipe API to allow users to search for recipes, view recipe information, filter recipes, sort them, and even create new recipes.",
        image: "food.png",
        techStack: " Redux, CSS, React, Express, PostgreSQL, Sequelize",
        site: "https://github.com/lisildg/Food"
    },
    
    
];
export default projects;