//import component
import Title from '../Parts/Title';
import {Card, CardBody} from "reactstrap"

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './News.css';

function News() {
    return(
        <div className="News d-flex flex-column align-items-center">
            <Title width= {500} height = {250} />
            <br />
            <div className='title'>-----WHAT'S NEW-----</div>
            <br />
            <Card >
                <CardBody>

                </CardBody>
            </Card>
        </div>
    );
}

export default News;