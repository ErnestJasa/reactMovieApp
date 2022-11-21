import {useState} from "react";


const Search = (props)=>{
    const [term, setTerm] = useState('');
    const handleChange = (e)=>{
        setTerm(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        props.onSearch(term);
    }

    return(
        <div className="container">
            <div className="card mt-2">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Filmo pavadinimas..." onChange={handleChange} className="form-control mb-2"/>
                        <button type="submit" className="btn btn-primary">Ieskoti</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Search