//import component
import { MouseEvent, useRef, useState } from 'react';
import {Card} from 'reactstrap'

//interface
interface CharacterProps{
    isSelected : boolean,
}

interface MouseCoordinate{
    x: number,
    y: number,
}

function Character({isSelected}: CharacterProps){

    if (isSelected) {
        return <Card className="characters character-selected"></Card>
    }

    return (
        <Card className="characters"></Card>
    );
}

function CharacterSlide() {

    let mousePreviousObj:MouseCoordinate = {x:0,y:0} ;
    let mouseCurrentObj:MouseCoordinate = {x:0,y:0} ;
    let isDrag = false;

    const characterSlide = useRef<HTMLDivElement>(null);

    function handleMouseDrag() {
        const distance = mousePreviousObj.x - mouseCurrentObj.x;
        if (distance < 0) {
            if (characterSlide.current != undefined) {
                let leftPosition = getComputedStyle(characterSlide.current).left;
                let leftPositionLength = leftPosition.length;
                leftPosition = leftPosition.substring(0,leftPositionLength-2);
                console.log(leftPosition)
                let leftPositionNumber = Number.parseInt(leftPosition);
                leftPositionNumber += -distance;
                characterSlide.current.style.left =  leftPositionNumber + "px";
            }
        }
        if (distance > 0) {
            if (characterSlide.current != undefined) {
                let leftPosition = getComputedStyle(characterSlide.current).left;
                let leftPositionLength = leftPosition.length;
                leftPosition = leftPosition.substring(0,leftPositionLength-2);
                console.log(leftPosition)
                let leftPositionNumber = Number.parseInt(leftPosition);
                leftPositionNumber += -distance;
                characterSlide.current.style.left =  leftPositionNumber + "px";
            }
        }
    }

    return (
        <div 
            className="characters-selection" 
            onMouseDown={
                (e: MouseEvent)=>{
                    const clientX = e.clientX;
                    const clientY = e.clientY;
                    mousePreviousObj = {x:clientX,y:clientY};
                    isDrag = true;
                }
            }

            onMouseMove = {
                (e:MouseEvent) =>{
                    if (isDrag === true) {
                        const clientX = e.clientX;
                        const clientY = e.clientY;
                        mouseCurrentObj = {x:clientX,y:clientY};
                        handleMouseDrag();
                        mousePreviousObj = {x:clientX,y:clientY};
                    }
                }
            }

            onMouseUp = {
                (e: MouseEvent)=>{
                    isDrag = false;
                }
            }
        >
            <div 
                className="character-slide"
                ref={characterSlide}
            >
                <Character isSelected={false}></Character>
                <Character isSelected={true}></Character>
                <Character isSelected={false}></Character>
                <Character isSelected={false}></Character>
                <Character isSelected={false}></Character>
                <Character isSelected={false}></Character>
                <Character isSelected={false}></Character>
                <Character isSelected={false}></Character>
                <Character isSelected={false}></Character>

                <Character isSelected={false}></Character>
            </div>
        </div>
    );
}

export default CharacterSlide;