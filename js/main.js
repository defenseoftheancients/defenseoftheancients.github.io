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
    let project__btn = document.getElementsByClassName('project__btn')[0];
    project__btn.addEventListener('click', 
        function () {
            let project__btn = document.getElementsByClassName('project__btn')[0];
            let project__listitem = document.getElementsByClassName('project__listitem');
            let load = document.querySelector('.project__btn i');
            load.style.display = 'block';
            setTimeout(function () {
                for(let i = 6; i <= 8;i++) {
                    project__listitem[i].style.position = 'relative';
                    project__listitem[i].style.opacity = '1';
                    project__listitem[i].style.transform = 'scale(1)';
                }
                project__btn.style.display = 'none';
            },1000);
    })
})();