import Card from "react-bootstrap/Card";

function SmallCard({ img, desc }) {
  return (
    <Card style={{ padding: "1",margin:"20px 10px 0px 10px",border:"none" }}>
      <Card.Img variant="top" src={img} style={{borderRadius:"5px",height:"80px"}}/>
      <Card.Body style={{ padding: "0" }}>
        <Card.Text>{desc.substring(0, 50) + "..."}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SmallCard;
