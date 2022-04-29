//import component
import { useEffect } from 'react';
import RoomListElement from './RoomListElement'

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

interface Props{
    roomList: Array<roomInfo>
}

function RoomList({roomList}:Props) {
    useEffect(()=>{
        let roomArray = [];
    },[])
    return (
        <div className="RoomList">

        </div>
    );
}

export default RoomList;