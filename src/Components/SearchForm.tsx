import {useState} from "react";

function SearchForm() {
    const [searchTerm, setSearchTerm] = useState("");
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

            <button>
                Search
            </button>
        </div>
    );
}
export default SearchForm;