import javascript from "./svg/javascript.svg";
import react from "./svg/react.svg";
import redux from "./svg/redux.svg";
import nodejs from "./svg/nodejs.svg";
import vscode from "./svg/vscode.svg";
import figma from "./svg/figma.svg";

export const data = {
  header: {
    hOne: "Bertan",
    img: { name: "headerPhoto", src: "https://picsum.photos/id/1/500/500" },
    hTwoFirstPart: "I am a Frontend",
    hTwoSecondPart: "Developer...",
    text: "...who likes to craft solid and scalable frontend products with great user experiences.",
  },
  skills: {
    hTwo: "Skills",
    allSkills: [
      { name: "JAVASCRIPT", img: javascript },
      { name: "NODE", img: nodejs },
      { name: "REACT", img: react },
      { name: "VS CODE", img: vscode },
      { name: "REDUX", img: redux },
      { name: "FIGMA", img: figma },
    ],
  },
  profile: {
    hTwo: "Profile",
    hThreeOne: "Basic Information",
    information: [
      { key: "Date of birth: ", value: "05.02.1992" },
      { key: "Residance: ", value: "ANTALYA" },
      { key: "Education: ", value: "Master" },
      { key: "Preferred role: ", value: "Frontend developer" },
    ],
    img: { name: "headerPhoto", src: "https://picsum.photos/id/1/500/500" },
    hThreeTwo: "Basic Information",
    p: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      "   Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quo deserunt quam temporibus cumque magnam!",
    ],
  },
  projects: {
    hTwo: "Projects",
    allProjects: [
      {
        name: "Workintech",
        text: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        buttons: ["React", "Redux", "Vercel"],
        img: "https://picsum.photos/id/1/500/500",
        anchors: [{name: "Visit Site", link: "https://www.wikipedia.org/"}, {name: "Github", link: "https://www.wikipedia.org/"}]
      },
      {
        name: "Journey",
        text: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        buttons: ["React", "Redux", "Vercel"],
        img: "https://picsum.photos/id/1/500/500",
        anchors: [{name: "Visit Site", link: "https://www.wikipedia.org/"}, {name: "Github", link: "https://www.wikipedia.org/"}]
      }
    ],
  },
  footer: {
    hTwo: "Send me a message!",
    text: "Got a question or proposal, or just want to say hello? Go ahead.",
    email: "bertansogutlu@gmail.com"
  }
};
