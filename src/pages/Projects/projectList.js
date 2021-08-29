import image1 from "../../assets/Images/Projects Image/art-1478831_1280.jpg";
import image2 from "../../assets/Images/Projects Image/pro-1.jpg";
import image3 from "../../assets/Images/Projects Image/startup-594090_1280.jpg";
const ProjectList = [
  {
    projectImage: "https://i.ibb.co/6WSzy63/audrey-clothings.png",
    projectImageName: "audrey-clothing",
    projectNumber: "01",
    projectHeading: "Audrey Clothing",
    projectLink: "https://audrey-clothings.netlify.app",
    projectDescription:
      "This is a small app mimicking a clothing site. Built with react library, redux (state management), firebase (authorization) and stripe for payment(without backend). Routing is enabled with react-router and images are from unsplash.com. All links and locations used here is for demonstation",
    bgColor: "green",
  },
  {
    projectImage: "https://i.ibb.co/4Mfw3sV/food-mine.png",
    projectImageName: "food-mine",
    projectNumber: "02",
    projectHeading: "Food Mine",
    projectLink: "http://food-mine.netlify.app",
    projectDescription:
      "This is a small recipe app. Built with vanilla javasript, css and html.  Modules are used here to ease the MVC architechture and parcel bundler has been used. The API used here is Jonas schmedtmann's forkify app's api. This app is also inspired by his forkify app.",
    bgColor: "yellow",
  },
  {
    projectImage: "https://i.ibb.co/r4dYbdL/Capture.png",
    projectImageName: "platonic-villa",
    projectNumber: "03",
    projectHeading: "Platonic Villa",
    projectLink: "https://platonic-villa.netlify.app/",
    projectDescription:
      "This is a pure html and css fully responsive landing page of a resort. Images here used are from unsplash.com",
    bgColor: "purple",
  },
  {
    projectImage: "https://i.ibb.co/k9p7HBM/glow-todo.png",
    projectImageName: "glow-todo",
    projectNumber: "04",
    projectHeading: "Glow Todo",
    projectLink: "https://glow-todo.netlify.app/",
    projectDescription:
      "This is a vanilla javascript , html and css small todo app. It is fully responsive to devices.",
    bgColor: "purple",
  },
];
export default ProjectList;
