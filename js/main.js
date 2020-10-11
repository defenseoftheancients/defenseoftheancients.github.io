(()=>{
    let nav__toggle = document.getElementById('nav__toggle');
    nav__toggle.addEventListener('click', 
        function () {
            let nav__box = document.getElementsByClassName('nav__box')[0];
            if(nav__box.style.transform == "scale(1)") {
                nav__box.style.transform = "scale(0)";       
            } 
            else{
                nav__box.style.transform = "scale(1)";
            }
    })
})();

(()=>{
    let review__btn = document.getElementsByClassName('review__btn')[0];
    review__btn.addEventListener('click', 
        function () {
            let review__btn = document.getElementsByClassName('review__btn')[0];
            let review__listitem = document.getElementsByClassName('review__listitem');
            let load = document.querySelector('.review__btn i');
            load.style.display = 'block';
            setTimeout(function () {
                for(let i = 3; i <= 5;i++) {
                    
                    review__listitem[i].style.transform = 'scale(1)';
                }
                review__btn.style.display = 'none';
            },1000);
    })
})();