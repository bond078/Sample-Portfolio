window.onload = function(){
    var i = 0, text;
    text = "Hey, I'm ";

    function typing(){
        if(i < text.length){
            document.querySelector(".typedtext").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 200);
        }
    }

    var textrise = document.querySelector(".textrise");
    textrise.setAttribute(
        "style", "transform: translateY(0vh); opacity: 1;"
    );

    function timingSpan(){
        var textspan = document.querySelectorAll(".textrise p span");
        // Turning the nodelist of spans into an array and looping through each of them
        Array.from(textspan).forEach(function(text){
            // console.log(text.textContent)
            text.setAttribute(
                "style", "transform: translateX(0vw); opacity: 1;"
            )
        })
    }
    typing();
    timingSpan();
};

// Was having a weird bug where the inside container of resume(the text and all other content) would sometimes appear on load on the page when revisiting the site. Will try to see if this fixes it.
function resume(){
    var resume = document.querySelector(".resume");
    resume.classList.toggle("resumetog");
    var resumecontainer = document.querySelector(".resumecontainer");
    resumecontainer.style.display = "block";
}

function exitResume(){
    var resume = document.querySelector(".resume");
    resume.classList.toggle("resumetog");
}

function toggleVideo(){
    var displayvideo = document.querySelector(".displayvideo");
    displayvideo.classList.toggle("revealvid");
}

function forBio(){
    var about = document.querySelector(".about");
    about.classList.add("forBio");
}


// Makes sure the transition that is usually on the scroll navigation is not going on while resizing the screen.
function clearScrollNav(){
    var scrollnav = document.querySelector(".scrollnav");
    var links = document.querySelectorAll(".scrollnav ul li a");
    var header = document.querySelector(".headerintro");
    var uparrow = document.querySelector(".uparrow");

    if(window.innerWidth <= 880){
        scrollnav.setAttribute(
            "style", "transition: none"
        )
        scrollnav.classList.remove("scrollnavshow");
    }else{
        scrollnav.removeAttribute(
            "style", "transition: none"
        )     
        scrollnav.classList.add("scrollnavshow");
        for(var i = 0; i < links.length; i++){
            links[i].setAttribute(
                "style", "opacity: 1; transition: all 1s ease-in .3s; display: block"
            )
        } 
    }

    // Used to ensure that the scrollnav will not appear in the header when resizing the screen. 
    if(window.pageYOffset > header.scrollHeight  && window.innerWidth >= 880){
        scrollnav.classList.add("scrollnavshow");
        for(var i = 0; i < links.length; i++){
            links[i].setAttribute(
                "style", "opacity: 1; transition: all 1s ease-in .3s; display: block"
            )
        }
        uparrow.classList.add("uparrowshow");
    }else{
        scrollnav.classList.remove("scrollnavshow");
        for(var i = 0; i < links.length; i++){
            links[i].setAttribute(
                "style", "opacity: 0;"
            )
        }
        uparrow.classList.remove("uparrowshow");
    }
}


window.onscroll = function(){
    var scrollnav = document.querySelector(".scrollnav");
    var header = document.querySelector(".headerintro");
    var links = document.querySelectorAll(".scrollnav ul li a");
    var uparrow = document.querySelector(".uparrow");
    var mobileNav = document.querySelector(".mobileNav");

    // Check to see if window scroll is greater than the header height and the innerwidth is greater than 880. IF so, then the scroll navigation will appear. Intended to hide for Ipad / Mobile devices
    if(window.pageYOffset > header.scrollHeight  - 1 && window.innerWidth >= 880){
        scrollnav.classList.add("scrollnavshow");
        for(var i = 0; i < links.length; i++){
            links[i].setAttribute(
                "style", "opacity: 1; transition: all 1s ease-in .3s; display: block"
            )
        }
        uparrow.classList.add("uparrowshow");
    }else{
        scrollnav.classList.remove("scrollnavshow");
        for(var i = 0; i < links.length; i++){
            links[i].setAttribute(
                "style", "opacity: 0;"
            )
        }
        uparrow.classList.remove("uparrowshow");
    }

    // Add a drop shadow to the mobile navigation after it passes the header.
    if(window.pageYOffset > header.scrollHeight - 500 && window.innerWidth <= 880){
        mobileNav.setAttribute(
            "style", "box-shadow: 2px 3px 18px rgb(36, 36, 36);"
        )
    }else{
        mobileNav.removeAttribute(
            "style", "box-shadow: 2px 3px 18px rgb(36, 36, 36);"
        )
    }
}

// changes hamburger menu into an X
function menuChange(x) {
    x.classList.toggle("change");
};

function mobileNav(){
    var mobileNav = document.querySelector(".mobileNav");
    mobileNav.classList.toggle("mobileNavTog");
}


// When a link is clicked in the mobile navigation the x is returned to a hamburger, and the background containing the links disappears.
function mobNavClickedLink(){
    var mobileNav = document.querySelector(".mobileNav");
    mobileNav.classList.remove("mobileNavTog");
    var change = document.querySelector(".change");
    change.classList.remove("change");
}