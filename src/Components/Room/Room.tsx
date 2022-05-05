import { useParams } from "react-router-dom";

//import component
import { Card, CardBody, Button } from "reactstrap";
import CharacterSlide from "./Parts/CharactersSlide";

//import css
import './Room.css';

//interface
interface playerNameDisplayProps{
    name: string,
    side: string
}

function PlayerNameDisplay({name, side}: playerNameDisplayProps) {
    return (
        <Card className={`player-side${side}`}>
            <CardBody>
                {name}
            </CardBody>
        </Card>
    );
}

function Room() {
    let roomName = useParams();
    return(
        <div className="Room container-fluid">
            <div className="row">
                <div className="teamA col-3 d-flex flex-column align-items-center pt-5">
                    <h2 className="team-title-A">Team 1</h2>
                    <PlayerNameDisplay name="QuanDam" side="A" />
                    <PlayerNameDisplay name="Player 2" side="A" />
                    <PlayerNameDisplay name="Player 3" side="A" />
                </div>
                <div className="gameSetting col-6 d-flex flex-column align-items-center justify-content-center">
                    <Card className="setting-board">
                        <CardBody className="d-flex flex-column align-items-center">
                            <CharacterSlide />
                            <Card className="room-chat"></Card>
                        </CardBody>
                    </Card>
                    <Button className="button-ready">Ready</Button>
                </div>
                <div className="teamB col-3 d-flex flex-column align-items-center pt-5">
                    <h2 className="team-title-B">Team 2</h2>
                    <PlayerNameDisplay name="QuanDam" side="B" />
                    <PlayerNameDisplay name="Player 2" side="B" />
                    <PlayerNameDisplay name="Player 3" side="B" />
                </div>
            </div>
        </div>
    );
}

export default Room;