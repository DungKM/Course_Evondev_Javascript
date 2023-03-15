const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownList = document.querySelector(".dropdown__list");
const dropdown = document.querySelector(".dropdown");
const dropdownCarret = document.querySelector(".dropdown__caret");
// dropdown item
dropdownSelect.addEventListener("click", function(event){
    const dropdownList = event.target.nextElementSibling;
        dropdownList.classList.toggle("show");
        dropdownCarret.classList.toggle("fa-caret-up")
});
dropdownItems.forEach(item => item.addEventListener("click", function(event){
        const text = event.target.querySelector(".dropdown__text").textContent;
       dropdownSelected.textContent=text;
       dropdownList.classList.remove("show");
}));
// click document
document.addEventListener("click", function(e){
    if(!dropdown.contains(e.target))
        dropdownList.classList.remove("show")
});