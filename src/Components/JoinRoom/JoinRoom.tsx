//import css
import './JoinRoom.css'

//import component
import {Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RoomListElement from './Parts/RoomListElement';

//interface
interface roomInfo{
    roomName:string,
    owner: string,
    Capacity: {
        current: number,
        max: number,
    }
    roomDetail: string,
}

interface FetchData{
    msg: string,
    result: Array<roomInfo>
}

function JoinRoom() {
    const [roomList, setRoomList] = useState<Array<roomInfo>>([])
    const [selectedRoom, setSelectedRoom] = useState<roomInfo>();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVICE_SERVER_HOST}${process.env.REACT_APP_API_VERSION}room/getRooms`,{
            method: 'GET',
			headers:{
				'Content-Type': 'application/json',
				'apiKey':`${process.env.REACT_APP_API_KEY}`,
			},
        }).then(async (res)=>{
            const fetchData: FetchData = JSON.parse(await res.text().then((data)=>data));
            if (roomList === fetchData.result) {
                return;
            }
            setRoomList(fetchData.result);
        }).catch(()=>{
            alert("somethings went wrong on server")
        })
    },[])

    function setSelectedRoomWrapper(room:roomInfo) {
        setSelectedRoom(room);
    }

    return(
        <div className="JoinRoom">
            <div className="room-board-area container">
                <div className="row">
                    <div className="room-board col-9">
                        <div className="board p-3">
                            {
                                (()=>{
                                    let roomArray:Array<JSX.Element> = [];
                                    let key = 0;
                                    roomList.forEach((roomData)=>{
                                        roomArray.push(
                                            <RoomListElement 
                                                key= {key}
                                                roomData={roomData}
                                                selectedRoom = {selectedRoom} 
                                                setSelectedRoom={setSelectedRoomWrapper}
                                            />
                                        )
                                        key++;
                                    })
                                    return roomArray;
                                })()
                            }
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
                            <Button className='join-button' onClick={()=>{if(selectedRoom !== undefined) navigate('/room/'+selectedRoom?.roomName)}}>JOIN</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinRoom;