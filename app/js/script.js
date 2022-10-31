const header = document.querySelector(".header__toggle")
// const overlay = document.querySelector('.overlay')
const body = document.querySelector("body")
const fadeEle = document.querySelectorAll(".has-fade")
header.addEventListener('click', function(){
    if (header.classList.contains('open')){
        header.classList.remove("open");
        body.classList.remove("no-scroll")
        fadeEle.forEach((e)=> {
            e.classList.add("fade-out");
            e.classList.remove("fade-in");
        })
        
        
    }else {
        header.classList.add('open')
        body.classList.add("no-scroll")
        fadeEle.forEach((e) => {
            e.classList.add("fade-in");
            e.classList.remove("fade-out");

        })

    }

});