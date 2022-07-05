import "./style.css";
import { users } from "./data";

const container = document.querySelector(".container");

const createHtmlRow = ({ id, name, age, email, country, company, birthday }) =>
    `
           <span class="user-id"> <b>id: </b> ${id} </span>
           <span class="user-name"> <b> name: </b>${name} </span>
           <span class="user-age"> <b> age: </b>${age} </span>
           <span class="user-email"> <b> email: </b>${email} </span>
           <span class="user-country"> <b> country: </b>${country} </span>
           <span class="user-company"> <b> company: </b>${company} </span>
           <span class="user-birthday"> <b> birthday: </b> <time>${birthday}</time> </span>
`;

const render = () => {
    const rows = users.map((user) => {
        const row = document.createElement("div");
        row.className = "user-row";
        row.innerHTML = createHtmlRow(user);

        return row;
    });

    container.append(...rows);
};

render();