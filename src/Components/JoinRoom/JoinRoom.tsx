//import css
import './JoinRoom.css'

//import component
import {Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';

function JoinRoom() {
    const navigate = useNavigate();
    return(
        <div className="JoinRoom">
            <div className="room-board-area container">
                <div className="row">
                    <div className="room-board col-9">
                        <div className="board p-3">
                            <div className="room p-1" onClick={()=>{navigate('/room/room1')}}>Room 1</div>
                        </div>
                    </div>
                    <div className="room-detail col-3">
                        <div className="detail d-flex align-items-center flex-column">
                            <p className='p-2 container'>
                                Room name: Kaigagi <br/>
                                Capacity: 2/5 <br/>
                                Roomdetail: <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quia vero eius exercitationem eos? Cumque ab voluptates aspernatur dolores non magnam, voluptatibus totam amet repellendus aliquam nam id quos. Sint.
                            </p>
                            <hr className='room-detail-line' />
                            <Button className='join-button'>JOIN</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinRoom;