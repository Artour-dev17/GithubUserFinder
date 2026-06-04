import './App.css'
import SearchForm from "./Components/SearchForm.tsx";
import UserCard from "./Components/UserCard.tsx";

function App() {


  return (
      <div>
        <h1>Github User Finder</h1>

        <SearchForm />

        <UserCard />
      </div>

  )
}

export default App
