import { BiSearchAlt } from "react-icons/bi";
import './content.css'

function Content() {
    return (
        <div className="container">
            <h1 className="title">Find Adress</h1>
            <div className="form-group">
                <input type="text" className="input-text" placeholder="Search Zip Code..."/>
                <button className="btn-search">
                    <BiSearchAlt size={25} color="rgb(55, 55, 55)"/>
                </button>
            </div>
            <main className="main">
                <h2>ZipCode: 2312334</h2>
                <span>Rua qualquer</span>
                <span>Complemento</span>
                <span>Bairro</span>
                <span>Cidade</span>
            </main>
        </div>
    )
}

export default Content;