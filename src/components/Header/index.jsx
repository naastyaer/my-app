/*const { default: Button } = require("components/Button"); это он мне сам импортировал что ли?*/
import Button from "components/Button";

function Header (){
    return(
        <header className="bg-indigo-800 py-8 text-white font-semibold flex px-20 justify-between text-xl">
            <nav className="flex gap-8 justify-center items-center  ">
                <div>
                    Список студентов
                </div>
                <div>
                    Контакты
                </div>
                <div>
                    Отзывы
                </div>
            </nav>
            <Button title="Связаться с нами"/>
        </header>
    )
}
export default Header
