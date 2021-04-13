import * as MODEL from "../model/model.js";
//import {getName as MODEL} from "../model/model.js";

function init(){
    let currentHeroImage = "home";

    $("nav a").click(function(e){
        let btnId = this.id;
        let contentID = btnId + "Content";

       $(".hero")
            .removeClass(`${currentHeroImage}-hero-image`)
            .addClass(`${btnId}-hero-image`);
        currentHeroImage = btnId;
       // this was previously commented out //$(".hero").css("background-image", "url(../images/hero/about-hero.jpg)");   //.hero  is what its looking for  .css is where it looks
        $(".hero-content .page-name").html(btnId);//this changes the page name in the hero content to match the button
        
        MODEL.getPageContent(contentID);
    })
}

//this checks for all of the elements to be read by the browser
$(document).ready(function() {
    //MODEL.getPageContent("homeContent");
    init();           //if you don't want the JS to run, you can just comment out this init
    MODEL.getPageContent("homeContent");
});







