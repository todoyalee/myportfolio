import project4 from '../images/project4.jpg'
import project6 from '../images/project6.jpg'
import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
import portfolio from '../images/portfolio.png'
import WipeLacer from '../images/WipeLacer.png'
import TheFoodiesWebsite from '../images/TheFoodiesWebsite.png'

const cardsData =  [
    {
        title:"Black Jack Game",
        parenthesis: "(html/css/vanilla js)",
        paragraph: `This is a little game i made while learning the basics`,
        link: "https://github.com/dalideco/myportfolio",
        image: project4
    },
    {
        title:"Food Website",
        parenthesis: "(html/css/vanilla js)",
        paragraph: `This is a little website i made while learning the basics`,
        link: "https://github.com/dalideco/myportfolio",
        image: project6
    },
    {
        title:"NewsLetter",
        parenthesis: "(nodejs)",
        paragraph: `building a news letter app using mailchimp api`,
        link: "https://github.com/dalideco/myportfolio",
        image: project1
    },
    {
        title:"To do list",
        parenthesis: "(nodejs/mongoose)",
        paragraph: `building an app with many to do lists on different routes storing its data
         on an atlas database`,
        link: "https://github.com/dalideco/myportfolio",
        image: project2
    },
    {
        title:"Keeper app",
        parenthesis: "(React js/Node js/Mongoose)",
        paragraph: `a keeper app built on React on the brower and node on serverside 
         with the notes stored on an atlas database  `,
        link: "https://github.com/dalideco/myportfolio",
        image: project3
    },
    {
        title:"This Portfolio",
        parenthesis: "(reactjs/nodejs)",
        paragraph: `This is my personal Portfolio create using React impleminting many other libraries 
        such as node-sass, styled-components and react-spring`,
        link: "https://github.com/dalideco/myportfolio",
        image: portfolio
    },
    {
        title:"Wipe Lacer",
        parenthesis: "(reactjs/nodejs/mongodb)",
        paragraph: `on going...`,
        link: "https://github.com/Dismalness/WipeLacer",
        image: WipeLacer
    },{
        title:"The Foodies Website",
        parenthesis: "(html/css/vanilla js/symfony/MySQL)",
        paragraph: `on going...`,
        link: "https://github.com/Dismalness/WipeLacer",
        image: TheFoodiesWebsite
    }
]
export default cardsData;