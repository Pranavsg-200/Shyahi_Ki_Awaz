import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './GroupExample.css'; // Import your custom CSS

function GroupExample() {
  return (
    <div className="card-container"> {/* Create a parent container */}
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title><h4>Viral</h4></Card.Title>
            <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/kamal-nath--amit-shah-031737824-16x9_0.jpg?VersionId=ZMwVEOP59UMx4ffMokExpExlL64Ci214&size=200:113" />
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title><h4>Auto</h4></Card.Title>
            <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Curvv/9578/1674204567508/front-left-side-47.jpg" />
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title><h4>New on Youtube</h4></Card.Title>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IH3miSP6SBihwY1ARO1hyf_vwlb0iUKYxA&usqp=CAU" />
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default GroupExample;
