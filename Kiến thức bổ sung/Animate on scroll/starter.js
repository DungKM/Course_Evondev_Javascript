document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll("div img");
    window.addEventListener("scroll",function(){
        const windowScrollTop = window.pageYOffset;
        [...images].forEach(item => {
          const itemOffsetTop = item.offsetTop;
          if(windowScrollTop > itemOffsetTop - 400){
            item.classList.add("active");
          }
        });
    });
});