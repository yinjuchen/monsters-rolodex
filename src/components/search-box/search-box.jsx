
import './search-box.css'

const SearchBox = ({onChangeHnadler}) => {
  return (
    <input className="search-box-container"
      type='search'
      placeholder='search-name'
      onChange= {onChangeHnadler}
    />
  )
}

export default SearchBox