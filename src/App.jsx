import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'


const App = () => {
  console.log('rendering app')
  const [monsters, setMonsters] = useState([])
  const [searchMonsters, setSearchMonsters] = useState("")


  const filterMonster = monsters.filter((monster) => monster.name.toLowerCase().includes(searchMonsters.toLowerCase()))


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

  return (
    <>
    <h1 className='app-title'>Robot Technicians</h1>
    <SearchBox type='search'onChangeHnadler={onSearchChange}/>
    <CardList monsters={filterMonster}/>
    </>
  )
}


export default App
