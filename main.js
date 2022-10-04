//-----LANDING PAGE JAVASCRIPT-----

//Saving content as variables
const my_name = "Israel Calderon Patiño";
const isra_icon = "assets/global/Portrait v1.svg";
const landing_page_backgroud = "assets/landing_page/Torotoro - Bolivia.jpg";
const landing_page_backgroud_label = "Bolivia - Torotoro August 2018";

//-----DOM manipulation-----
//Setting the text of the h4 element with the id "isra_cp"
const israCP = document.getElementById("isra_cp");
israCP.textContent = my_name;

//Setting the Isra Icon on the landing page
const isra_icon_landing_page = document.querySelector("#isra");
isra_icon_landing_page.src = isra_icon;

//Setting the main image of the landing page
const main_image = document.querySelector("#lp_background");
main_image.src = landing_page_backgroud;

//Setting the label for the main image
const main_image_label = document.querySelector(".label_background");
main_image_label.textContent = landing_page_backgroud_label;
