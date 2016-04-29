/*Executing javascript after page load*/
window.onload = function() {


    /**********************
    initialize()
        Shows placeholder and hide display cat area
        
    Author: Leandro
    Date: 29/04/2016
    /**********************/
    function initialize() {
        var display = document.getElementById("display-cat__content--show");
        display.style.display = "none";
    }

    /**********************
    displayFirstCat()
        Hides placeholder and show display cat area

    Author: Leandro
    Date: 29/04/2016
    /**********************/
    function displayFirstCat(){
        var display = document.getElementById("display-cat__content--show");
        var displayBlank = document.getElementById("display-cat__content--blank");
        displayBlank.style.display = "none";
        display.style.display = "block";
    }

    /**********************
    updateCat()
        Add a eventListener to each item in menu to display bigger in display area after click

    Author: Leandro
    Date: 29/04/2016
    /**********************/
    function updateCat() {


        //Areas to update numbers
        var catCounterDisplay = document.getElementById("display-cat__counter");
        var catNameDisplay = document.getElementById("display-cat__name-description");
        var catImgDisplay = document.getElementById("display-cat__img");

        //Selector to add eventListener        
        var selectedCat = document.getElementsByClassName("menu-cat__list");

        //Iteraction to add a eventListener in each item of the list
        for (var i = 0; i < selectedCat.length; i++) {

           //counter
           catCounter = 1;  

           //getCatData
           catId = selectedCat[i].id;
           catName = selectedCat[i].getElementsByClassName("menu-cat__name")[0].innerText;
           catImage = selectedCat[i].getElementsByClassName("menu-cat__photo")[0].src;

           //encapsulate funcion as closure to use the variable in the context
           selectedCat[i].addEventListener("click", (function(catCounterCopy, catNameCopy, catImageCopy) {
                
                return function() {
                    displayFirstCat();
                    catNameDisplay.innerHTML = catNameCopy;
                    catCounterDisplay.innerHTML = catCounterCopy;
                    catImgDisplay.src = catImageCopy;
                    catCounterCopy++;
                }

           })(catCounter, catName, catImage));

        };

    }


    //Initialize layout 
    initialize();
    updateCat();

} 

