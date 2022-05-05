import {io} from 'socket.io-client';

//socket io
const socket = io(`${process.env.REACT_APP_SERVICE_SERVER_HOST}`,{
	withCredentials: true,
});

export default socket;