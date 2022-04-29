//import css
import './JoinRoom.css'

//import component
import {Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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
    const selectedRoom = useRef<string>('');
    const roomBoard = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8080/api/v1/room/getRooms',{
            method: 'GET',
			headers:{
				'Content-Type': 'application/json',
				'apiKey': 'Quan dep zai'
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
    },[roomList])

    return(
        <div className="JoinRoom">
            <div className="room-board-area container">
                <div className="row">
                    <div className="room-board col-9">
                        <div className="board p-3" ref={roomBoard}>
                            {
                                (()=>{
                                    let roomArray:Array<JSX.Element> = [];
                                    roomList.forEach((roomData)=>{
                                        roomArray.push(
                                            <RoomListElement roomName={roomData.roomName} selectedRoom={selectedRoom}></RoomListElement>
                                        )
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
                            <Button className='join-button' onClick={()=>{navigate('/room/'+selectedRoom.current)}}>JOIN</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinRoom;