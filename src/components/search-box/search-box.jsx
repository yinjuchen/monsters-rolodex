
import './search-box.css'

const SearchBox = ({onChangeHandler}) => {
  return (
    <input 
      className="search-box-container"
      type='search'
      placeholder='search-name'
      onChange= {onChangeHandler}
    />
  )
}

export default SearchBox