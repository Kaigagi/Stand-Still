import { MutableRefObject } from "react";

interface Props{
    roomName:string,
    selectedRoom: MutableRefObject<string>
}

function RoomListElement({roomName, selectedRoom}:Props) {
    return(
        <div className="RoomListElement">
            <div className="room p-1" onClick={()=>{selectedRoom.current = roomName}}>{roomName}</div>
        </div>
    );
}

export default RoomListElement;