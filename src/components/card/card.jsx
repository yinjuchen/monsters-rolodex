import './card.css'

const Card = (props) => {
  const {name, email,id} = props
  return (
      <div className="card">
        <img src={`https://robohash.org/${id}?set=set5`} alt={name}/>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
  )
}

export default Card