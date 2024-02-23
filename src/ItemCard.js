import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCard = ( { item, onOpen } ) => {
  return (
    <Card className="shadow" style={{height: '55vh', backgroundColor: "#fcfcfa"}}>
      <Card.Img style={{height: '30vh'}} variant="top" src={require('./pizza.jpg')} />
      <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div>
        <Card.Title className="font-link">{item.label}</Card.Title>
        <Card.Text className="font-link">
          {item.description}
        </Card.Text>
        </div>
        <div style={{verticalAlign: 'middle'}}>
          <span className="font-link">${item.price}</span>
          <Button variant="primary" className="float-end font-link" onClick={(onOpen)}>Add</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
export default ItemCard;