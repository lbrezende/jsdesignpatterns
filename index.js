/*Executing javascript after page load*/
window.onload = function() {


    var catsModel = {
        getAllCats: function() {
            cats = [
                {
                    id: "cat1",                    
                    name: "Cat 1",
                    image: "img/cat1.jpg"
                },
                {
                    id: "cat2",
                    name: "Cat 2",
                    image: "img/cat2.jpg"
                },
                {
                    id: "cat3",
                    name: "Cat 3",
                    image: "img/cat3.jpg"
                },
                {
                    id: "cat4",
                    name: "Cat 4",
                    image: "img/cat4.jpg"
                },
                {
                    id: "cat5",
                    name: "Cat 5",
                    image: "img/cat5.jpg"
                }               
            ]
            return cats;
        }
    }

    var catsView = {
        init: function() {
            menuArea = document.getElementById('menu-cat');
            displayAreaBlank = document.getElementById('display-cat__content--blank');
            displayAreaShow = document.getElementById('display-cat__content--show');
            
            catsView.renderButtons();
            catsView.renderCats();
            catsView.renderBlank();
        },
        renderButtons: function() {
            var htmlBtns = '';
            catsOctopus.getCats().forEach(function(cat){
                htmlBtns += '<div id="'+cat.id+'" class="menu-cat__list"><h2 class="menu-cat__name">'+cat.name+'</h2><img class="menu-cat__photo" src="'+cat.image+'"></div>';
            })
            menuArea.innerHTML = htmlBtns ;
        },
        renderCats: function() {
            displayAreaShow.innerHTML = '<h3 class="display-cat__name">Hi! I am <span id="display-cat__name-description">{{cat name}}</span>!</h3><img id="display-cat__img" src="img/cat1.jpg" /><h3 class="display-cat__number">Your cat was clicked <span id="display-cat__counter">{{clicks}}</span> times</h3>';
        },
        renderBlank: function() {
            displayAreaBlank.innerHTML = '<h3 class="display-cat__name">No cats selected</h3><img class="display-cat__img" src="img/noCat.png">' ;
        }        
    }

    var catsOctopus = {
        init: function(){
            var display = document.getElementById("display-cat__content--show");
            display.style.display = "none";       
        },
        getCats: function(){
            return catsModel.getAllCats();
        },
        updateCat: function(){
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
                        catsOctopus.displayFirstCat();
                        catNameDisplay.innerHTML = catNameCopy;
                        catCounterDisplay.innerHTML = catCounterCopy;
                        catImgDisplay.src = catImageCopy;
                        catCounterCopy++;
                    }

               })(catCounter, catName, catImage));

            };
        },
        displayFirstCat: function(){
            var display = document.getElementById("display-cat__content--show");
            var displayBlank = document.getElementById("display-cat__content--blank");
            displayBlank.style.display = "none";
            display.style.display = "block";
        }
    }


    catsOctopus.init();
    catsView.init();    
    catsOctopus.updateCat();


    var adminModel = {
        init: function (){

        },
        add: function(obj){

            catsModel.getAllCats.cats.push(obj);
            console.log('passou');
        }
    }

    var adminView = {
 
    }

    var adminOctopus = {
        init: function() {
            document.getElementById('form-admin').style.display = "none";
            document.getElementById('close-admin').style.display = "none";

            document.getElementById('open-admin').addEventListener('click', function(){
                adminOctopus.renderAdminForm();
            }, false); 

            document.getElementById('save-cat').addEventListener('click', function(){
                
                var newCatSubmit = document.getElementById('save-cat');

                newCatSubmit.addEventListener('click', function(e){

                    newCatName = document.getElementById('form-name');
                    newCatId = document.getElementById('form-id');
                    newCatImg = document.getElementById('form-image');
                    
                    adminOctopus.saveAdminForm(newCatName.value, newCatId.value, newCatImg.value);
                    newCatName.val('');
                    newCatId.val('');
                    newCatImg.val('');
                    e.preventDefault();
                });    

                catsOctopus.updateCat();
            }, false);       

            document.getElementById('close-admin').addEventListener('click', function(){
                adminOctopus.removeAdminForm();
            }, false);                                        
        },
        renderAdminForm: function() {
            document.getElementById('form-admin').style.display = "inline-block";
            document.getElementById('close-admin').style.display = "inline-block";
            document.getElementById('open-admin').style.display = "none";
        }, 
        removeAdminForm: function() {
            document.getElementById('form-admin').style.display = "none";
            document.getElementById('close-admin').style.display = "none";
            document.getElementById('open-admin').style.display = "inline-block";
        },
        saveAdminForm: function(name, id, img) {
            alert(name);
            adminModel.add({
                    id: name,                    
                    name: id,
                    image: img
            });


        }                           
    }        

    adminOctopus.init();


} 

