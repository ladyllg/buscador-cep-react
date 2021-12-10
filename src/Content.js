import { BiSearchAlt } from "react-icons/bi";
import './content.css'
import { useState } from 'react'
import api from './services/api';

function Content() {

    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})

    async function handleSearch(){
        if(input !== ''){
            try{
                const response = await api.get(`${input}/json`);
                setCep(response.data);
                setInput('');
            }catch{
                console.log('zip cop not found')
                setInput('')
            }
        }
    }

    return (
        <div className="container">
            <h1 className="title">Find Adress</h1>
            <div className="form-group">
                <input type="text" className="input-text" placeholder="Search Zip Code..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button className="btn-search" onClick={handleSearch}>
                    <BiSearchAlt size={25} color="rgb(55, 55, 55)"/>
                </button>
            </div>
            {Object.keys(cep).length > 0 && (
                <main className="main">
                    <h2>ZipCode: { cep.cep }</h2>
                    <span>{ cep.logradouro }</span>
                    <span>{ cep.bairro }</span>
                    <span>{ cep.localidade} - { cep.uf }</span>
                </main>
            )}                
        </div>
    )
}

export default Content;