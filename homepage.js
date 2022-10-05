//-----HOMEPAGE JAVASCRIPT-----
//import { isra_icon } from "./main.js";
//Saving content as variables
const homepage_image = "assets/homepage/Israel and Ben.JPEG";
const isra_icon = "assets/global/Portrait v1.svg";
const main_paragraph = [
  "About me",
  "Born in La Paz, Bolivia on October 21, 1991.",
  "My family took a leap of faith and migrated to London in November 1997 when I was 6 years old.",
  "I have created this page to showcase who I am as a person on this journey we call life and to record my professional development as a software engineer.",
  "November 2021, I decided to leave my job as a Quality Assurance Advisor for the RCS England and take a deep dive into a field that I find a lot more interesting and really push my strongest skills and abilities to its limits.",
  "This page will continue to evolve and I intend to record every stage.  To start things off, these first two pages have been created with the core fundamentals of HTML, CSS and JavaScript. Later on I plan to use a familiar framework to me, React.",
  "I hope you enjoy getting to know me through my page and if you would like to get in contact, just send me an email!",
];

//Setting the isra icon
const isra_icon_homepage = document.querySelector("#isra");
isra_icon_homepage.src = isra_icon;

//Setting the homepage image
const homepage_main_image = document.querySelector(".homepage_image");
homepage_main_image.src = homepage_image;

//Functionality for new paragraph in the main text section of the homepage

function new_paragraph(new_sentence) {
  paragraph = document
    .querySelector(".homepage_main_text_container")
    .appendChild(document.createElement("p"));
  //The class attribute for styling each paragraph is "main_text"
  paragraph.textContent = new_sentence;
  paragraph.setAttribute("class", "main_text");
}

main_paragraph.forEach(new_paragraph);
