//import component
import Title from '../Parts/Title';
import {Card, CardBody} from "reactstrap"

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './News.css';
import { useRef } from 'react';


function News() {

    const articleHoverEffect = useRef<HTMLDivElement>(null)

    // a function to handle css when hover an article
    function hoverArticleIn() {
        const element = articleHoverEffect.current !;
        element.style.animationName = "article-fade-in"
    }

    function hoverArticleOut() {
        const element = articleHoverEffect.current !;
        element.style.animationName = "article-fade-out"
    }

    return(
        <div className="News d-flex flex-column align-items-center">
            <Title width= {500} height = {250} />
            <br />
            <div className='title'>-----WHAT'S NEW-----</div>
            <br />
            <Card className='article-card' onMouseEnter={hoverArticleIn} onMouseLeave={hoverArticleOut}>
                <div className='article-hover-effect' ref={articleHoverEffect}></div>
                <CardBody>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam, optio doloremque vel laudantium natus itaque autem eos tempora libero sunt similique nulla hic amet eius iure ratione ex ab!
                </CardBody>
            </Card>
        </div>
    );
}

export default News;