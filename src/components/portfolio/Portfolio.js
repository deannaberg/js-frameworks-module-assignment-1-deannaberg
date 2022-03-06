import Heading from "../layout/Heading";
import ListGroup from "react-bootstrap/ListGroup";


export default function Home() {
    return <>
        <Heading title="My Portfolio" />
        <div className="container-sm">
            <ListGroup variant="flush">
                <ListGroup.Item>First Item</ListGroup.Item>
                <ListGroup.Item>Second Item</ListGroup.Item>
                <ListGroup.Item>Third Item</ListGroup.Item>
                <ListGroup.Item>Fourth Item</ListGroup.Item>
            </ListGroup>
        </div>
    </>;
}