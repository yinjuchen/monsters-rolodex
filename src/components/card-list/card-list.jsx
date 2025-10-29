import Card from "../card/card"
import './card-list.css'

const CardList = ({monsters}) => {
  return (
     <div className='card-container'>
    {
      monsters.map(({name, email, id}) => {
        return (
          <Card key={id} name={name} email={email} id={id}></Card>
        )
      })
    }
    </div>
  )
}

export default CardList