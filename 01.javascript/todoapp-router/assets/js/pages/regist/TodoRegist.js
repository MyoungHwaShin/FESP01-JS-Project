// 할일 등록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import { linkTo } from "../../Router.js";

const TodoRegist = function () {
    const page = document.createElement("div");
    page.setAttribute("id", "page");

    const inputForm = document.createElement("form");
    inputForm.setAttribute("id", "form");

    //   const legend = document.createElement("legend");

    const fieldset = document.createElement("fieldset");
    fieldset.setAttribute("id", "fieldset");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "input");
    input.setAttribute("placeholder", "제목을 입력해주세요.");

    const textarea = document.createElement("textarea");
    textarea.setAttribute("id", "textarea");
    textarea.setAttribute("type", "text");
    textarea.setAttribute("placeholder", "내용을 입력해주세요.");

    const content = document.createElement("div");
    content.setAttribute("id", "content");

    const newRegister = document.createElement("button");
    newRegister.setAttribute("id", "buttonCommon");
    newRegister.setAttribute("class", "newRegister");
    const registerTitle = document.createTextNode("등록 완료");
    newRegister.appendChild(registerTitle);

    inputForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const title = input.value;
        const content = textarea.value;

        console.log("Title:", title);
        console.log("Content:", content);

        try {
            const response = await axios.post(
                "http://localhost:33088/api/todolist",
                {
                    title,
                    content,
                }
            );
            console.log("새로운 할일:", response.data);
            linkTo("/"); // 이동할 경로 변경 필요
        } catch (error) {
            console.error("할일 추가 중 오류 발생:", error);
            const errorElement = document.createTextNode(
                "할일 추가 중 오류가 발생했습니다."
            );
            content.appendChild(errorElement);
        }
    });

    page.appendChild(Header("TODO App 등록"));
    page.appendChild(content);
    content.appendChild(inputForm);
    inputForm.appendChild(fieldset);
    inputForm.appendChild(input);
    inputForm.appendChild(textarea);
    inputForm.appendChild(newRegister);
    page.appendChild(Footer());

    return page;
};

export default TodoRegist;
