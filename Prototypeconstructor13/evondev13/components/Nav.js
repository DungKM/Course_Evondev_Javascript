import { menuList } from "../data";


const Nav = () => {
  return `
  <ul class="dropdown-menu" style="display:block">
       ${menuList
         .map(
           ({ path, name }) =>
             `<li> <a class="dropdown-item" href="${path}">${name}</a></li>`
         )
         .join("")}
  </ul>
  `;
};
export default Nav;
