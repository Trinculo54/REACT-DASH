import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { FaDiscord } from "react-icons/fa";

function Home() {
  return (
    <div className={"App-Main"}>
      <div className={"App-Hero"}>
        <p align="center" style={{paddingTop: "70px"}}>
        <Image height={150} draggable={false} className={"Hero-Img"} src="https://cdn.discordapp.com/avatars/577848986464157707/015e46ab72cf62b8fb69407af525e36b.webp?size=1024" roundedCircle/>
        </p>
        <p align="center">
        <span className={"Hero-Title"}>Pulse</span>
        </p>
        <p align="center">
          <Button>
            <span style={{fontFamily: "Balsamiq Sans"}}>
            Invite Me
            </span>
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button href="/commands" variant="danger">
            <span style={{fontFamily: "Balsamiq Sans"}}>
            My Commands
            </span>
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Home;