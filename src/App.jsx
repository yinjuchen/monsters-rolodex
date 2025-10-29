import { useState, useEffect} from 'react'
import './App.css'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'


const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchMonsters, setSearchMonsters] = useState("")


  const onSearchChange = (event) => {
  setSearchMonsters(event.target.value.toLowerCase())
  }


  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data)=> {
     setMonsters(data);
  })
  }, [])

  const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchMonsters.toLowerCase()))

  return (
    <>
    <h1 className='app-title'>Robot Technicians</h1>
    <SearchBox onChangeHandler={onSearchChange}/>
    <CardList monsters={filteredMonsters}/>
    </>
  )
}


export default App
