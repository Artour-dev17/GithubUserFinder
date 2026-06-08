import {useState} from "react";


type OnSearchProp = {
    onSearch: (searchTerm: string) => void;
}
function SearchForm({ onSearch, }: OnSearchProp) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleUserSearch = ()=>{
       onSearch(searchTerm);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Github username..."
                value={searchTerm}
                onChange={(event)=>
                setSearchTerm(event.target.value)
            }
            />

            <button onClick={handleUserSearch}>
                Search
            </button>
        </div>
    );
}
export default SearchForm;