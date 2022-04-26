import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    useEffect(()=>{
		const accountKey = sessionStorage.getItem('accountKey')!;
		fetch('http://localhost:8080/api/v1/verify/account-key',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'apiKey': 'Quan dep zai',
				'accountKey': accountKey,
			},
		}).then((res)=>{
			// check if verify success
			if (res.status === 200) {
				return; 
			}
            navigate('/login');
			return;
		})
		// disable warning
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
    return (
        <div className="Home">
            
        </div>
    );
}

export default Home;