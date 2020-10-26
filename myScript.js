// Non-map JS


// Events Slideshow Widget

var iconImg; 
var pictures = [ "gophers-mascot.png", "floco.jpg", "coffman.jpg", "zoom.jpg"];
var descriptions = [ "Goldy Gopher", "Floco Apartments", "Coffman Memorial Union", "Zoom"];
var index = 0;

function pickImage() {
    console.log("pickImage called, index is: " + index);   
    console.log("array length: " + pictures.length);
    iconImg.setAttribute( "src", pictures[ index ] );
    iconImg.setAttribute( "alt", descriptions[ index ] );
    console.log(iconImg);
    if (index >= 3){
       index = 0;
    } else {
       index = index + 1;
    }
 
}

function start() {
    console.log("got in start");
    iconImg = document.getElementById( "replaceImg" );
    console.log(iconImg);
    int = setInterval(function(){pickImage()},2000);
    //document.getElementById("largeImage").innerHTML = '<img src="floco.jpg" alt="Floco">';
}

function stop() {
    clearInterval(int);
}



// SMALL TAB IMAGE FUNCTIONS FOR EVENTS TABLE

function sundayOn() {
    document.getElementById("S").innerHTML = '<img src="floco.jpg" alt="Floco" class="smallImg">';
    
}
function sundayOff() {
    document.getElementById("S").innerHTML = '';
    
}

function mondayOn() {
    document.getElementById("M").innerHTML = '<img src="zoom.jpg" alt="Zoom Icon" class="smallImg">';
    
}
function mondayOff() {
    document.getElementById("M").innerHTML = '';
    
}

function tuesdayOn() {
    document.getElementById("T").innerHTML = '<img src="coffman.jpg" alt="Coffman Memorial Union" class="smallImg">';
    
}
function tuesdayOff() {
    document.getElementById("T").innerHTML = '';
    
}

function wednesdayOn() {
    document.getElementById("W").innerHTML = '<img src="floco.jpg" alt="Floco" class="smallImg">';
    
}
function wednesdayOff() {
    document.getElementById("W").innerHTML = '';
    
}

function thursdayOn() {
    document.getElementById("Th").innerHTML = '<img src="zoom.jpg" alt="Zoom Icon" class="smallImg">';
    
}
function thursdayOff() {
    document.getElementById("Th").innerHTML = '';
    
}

function thursdayOn() {
    document.getElementById("Th").innerHTML = '<img src="zoom.jpg" alt="Zoom Icon" class="smallImg">';
    
}
function thursdayOff() {
    document.getElementById("Th").innerHTML = '';
    
}

function fridayOn() {
    document.getElementById("F").innerHTML = '<img src="zoom.jpg" alt="Zoom Icon" class="smallImg">';

}
function fridayOff() {
    document.getElementById("F").innerHTML = '';
    
}

function saturdayOn() {
    document.getElementById("Sa").innerHTML = '<img src="zoom.jpg" alt="Zoom Icon" class="smallImg">';
    
}
function saturdayOff() {
    document.getElementById("Sa").innerHTML = '';
    
}


// PASSWORD STRENGTH FUNCTION FOR WIDGETS PAGE

function pwStrength(password) {
    var lowercase = 0;
    var uppercase = 0;
    var number = 0;
    var specialchar = 0;

    var totalStrength = 0;

    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    var special = "$@$!%*#?&";


    if (password.length <= 7){
        document.getElementById("strength").innerHTML = "Too short";
        document.getElementById("strength-bar").style.width = "0px";
    } else {
        for (let i = 0; i < password.length; i++) {
            if (lower.includes(password[i])){
                lowercase = 1;
            }
            if (upper.includes(password[i])){
                uppercase = 1;
            }
            if (num.includes(password[i])){
                number = 1;
            }
            if (special.includes(password[i])){
                specialchar = 1;
            }
        }
        totalStrength = lowercase + uppercase + number + specialchar;

        if (totalStrength == 0 || totalStrength == 1){
            document.getElementById("strength").innerHTML = "Weak";
            document.getElementById("strength-bar").style.width = "50px";
        } else if (totalStrength == 2){
            document.getElementById("strength").innerHTML = "Medium";
            document.getElementById("strength-bar").style.width = "100px";
        } else if (totalStrength == 3){
            document.getElementById("strength").innerHTML = "Strong";
            document.getElementById("strength-bar").style.width = "150px";
        } else if (totalStrength == 4){
            document.getElementById("strength").innerHTML = "Very Strong";
            document.getElementById("strength-bar").style.width = "200px";
        }
        
    }


}

