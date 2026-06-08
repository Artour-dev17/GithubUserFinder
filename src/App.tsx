import './App.css'
import SearchForm from "./Components/SearchForm.tsx";
import UserCard from "./Components/UserCard.tsx";
import { getUser } from "./Services/githubApi.ts";
import { useState } from "react";
import type {User} from "./Types/user.ts";


function App() {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (
        username: string
    )=>{
        setError("");
        setLoading(true);
        setUser(null);
        const data = await getUser(username);

        if (data.login){
            setUser(data)
        } else {
            setUser(null);
            setError("Ошибка, пользователь не найден");

        }
        setLoading(false);
    }

  return (
      <div>
        <h1>Github User Finder</h1>

        <SearchForm onSearch={handleSearch}/>

          {error && <p>{error}</p>}
          {loading && <p>Loading...</p>}
          {user && <UserCard user={user} />}

      </div>

  )
}

export default App
