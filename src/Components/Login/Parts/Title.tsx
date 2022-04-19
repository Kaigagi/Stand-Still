
interface Props{
    width:number;
    height?:number;
}

const  Title:React.FC<Props> = ({width, height}) =>{
    return(
        <div className="Title">
            <img src="./Assets/Title.png" alt="Title" width={width+"px"} height={height+"px"} />
        </div>
    );
}

export default Title;