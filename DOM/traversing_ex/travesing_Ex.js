
const body = document.body;
const modal = document.createElement("div")
modal.classList.add("modal")
// modal-content
const modalContent= document.createElement("div");
modalContent.classList.add("modal-content");
// modal-close
const modal_close= document.createElement("div")
modal_close.classList.add("modal-close");
const modal_i = document.createElement("i");
modal_i.className="bx bx-x";
const modal_desc = document.createElement("div");
modal_desc.classList.add("modal-desc");
modal_desc.textContent="  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptatibus iure odio quo quae dolores, temporibus corrupti praesentium quam eveniet quis perferendis deleniti? Impedit, ad beatae at sint facere officia?"
// modal-action
const modal_action= document.createElement("div");
modal_action.classList.add("modal-action")
const submit = document.createElement("button");
submit.className="modal-submit";
submit.textContent="Submit";
const cancel = document.createElement("button");
cancel.className="modal-cancel";
cancel.textContent="Cancel";

// appenChild
modalContent.appendChild(modal_close);
modal_close.appendChild(modal_i);
modalContent.appendChild(modal_desc);
modalContent.appendChild(modal_action)
modal_action.appendChild(submit);
modal_action.appendChild(cancel);
modal.appendChild(modalContent);
document.body.appendChild(modal);



// const templane = `
// <div class="modal">
// <div class="modal-content">
//     <div class="modal-close">
//         <i class='bx bx-x'></i>
//     </div>
//    <div class="modal-desc">
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptatibus iure odio quo quae dolores, temporibus corrupti praesentium quam eveniet quis perferendis deleniti? Impedit, ad beatae at sint facere officia?
//    </div>

//    <div class="modal-action">
//     <button class="modal-submit">Confirm</button>
//     <button class="modal-cancel">Cancel</button>
//    </div>
// </div>
//     </div>
// `;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", templane);

const modal_click = document.querySelector(".modal");
if(modal_click){
    setTimeout(function(){
modal_click.classList.add("is-show")
    },3000);
}