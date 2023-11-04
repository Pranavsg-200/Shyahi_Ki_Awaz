import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function LastContainer() {
  const listItem=[
    {
      liItem:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      liItem:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      liItem:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      liItem:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      liItem:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    }
  ]
  return (
    <>
     
    <Card style={{ padding: "1",margin:"20px 0px 0px 10px",border:"none",backgroundColor:"#fff5f6" }}>
      <Card.Body>
        <Card.Title>SKA </Card.Title>
        <Card.Text>
          <b>Read in-depth stories by experts</b>
        </Card.Text>
        <ul>
          <li>Will 16th finance panel widen the north-south divide?</li>
          <li>Why Rahul's caste stand goes against Rajiv, Indira's</li>
          <li>Does Centre take more but give less to Tamil Nadu?</li>
          <li>Has bigotry blocked view of shared humanity in West Asia?</li>
          <li>Will the Scindias survive or sink in Rajasthan and MP?</li>
        </ul>
      </Card.Body>
    </Card>

    <ListGroup style={{ padding: "1", margin: "20px 10px 0px 10px" }}>
      {
        listItem.map((element)=>(
          <ListGroup.Item style={{border:"none",borderBottom:"1px dotted black"}}><li type="circle">{element.liItem.substring(0,43)+"....."}</li></ListGroup.Item>
        ))
      }
    </ListGroup>
   
    <Card style={{ padding: "1",margin:"20px 10px 0px 10px",border:"none",backgroundColor:"#fff5f6" }}>
      <Card.Body>
        
        <Card.Text>
          <b>Top 10 Stories</b>
        </Card.Text>
        <ul>
          <li>Will 16th finance panel widen the north-south divide?</li>
          <li>Why Rahul's caste stand goes against Rajiv, Indira's</li>
          <li>Does Centre take more but give less to Tamil Nadu?</li>
          <li>Has bigotry blocked view of shared humanity in West Asia?</li>
          <li>Will the Scindias survive or sink in Rajasthan and MP?</li>
        </ul>
      </Card.Body>
    </Card>

    <ListGroup style={{ padding: "1", margin: "20px 10px 0px 10px" }}>
      {
        listItem.map((element)=>(
          <ListGroup.Item style={{border:"none",borderBottom:"1px dotted black"}}><li type="circle">{element.liItem.substring(0,43)+"....."}</li></ListGroup.Item>
        ))
      }
    </ListGroup>
     
    </>
  );
}

export default LastContainer;
