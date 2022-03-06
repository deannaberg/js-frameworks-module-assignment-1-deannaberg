import Heading from "../layout/Heading";
import donuts from "../../images/deanna_berg_donuts.jpg"

export default function Home() {
    return <><Heading title="Home" />
        <img src={donuts} />
    </>;
}