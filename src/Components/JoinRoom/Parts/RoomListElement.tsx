import { MutableRefObject, useEffect, useRef } from "react";

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
    roomData: roomInfo,
    selectedRoom: roomInfo | undefined,
    setSelectedRoom: (room:roomInfo) => void,
}

function RoomListElement({roomData, selectedRoom, setSelectedRoom}:Props) {
    const roomDisplay = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if (roomData === selectedRoom) {
            return roomDisplay.current?.classList.add('room-clicked');
        }
        return roomDisplay.current?.classList.remove('room-clicked');
    },[selectedRoom])
    return(
        <div className="RoomListElement">
            <div 
                className="room p-1" 
                ref={roomDisplay} 
                onClick={()=>{
                    setSelectedRoom(roomData); 
                }}
            >
                {roomData.roomName}
            </div>
        </div>
    );
}

export default RoomListElement;