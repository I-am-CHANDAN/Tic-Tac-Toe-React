import React, { useRef, useState } from 'react';
import './game.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

const GameApp = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    //Toggle Button Function for printing the Icons !!
    const toggleBtn = (e, num) => {
        if (lock) {
            return 0;
        }
        else if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = 'x';
            setCount(++count);
        }
        else {
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = 'o';
            setCount(++count);
        }
        CheckWin();
    }

    //CheckWin Function to check the Winner !!
    const CheckWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            Won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            Won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            Won(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            Won(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            Won(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            Won(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            Won(data[8]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            Won(data[6]);
        }
    }

    const Won = (winner) => {
        setLock(true);
        if (winner === 'x') {
            titleRef.current.innerHTML = `Congratulation: <img src=${cross_icon}> Wins the Game`;
        }
        else {
            titleRef.current.innerHTML = `Congratulation :<img src=${circle_icon}> Wins the Game`;
        }
    }

    //Reset Function here
    const resetBtn = () => {
        setLock(false);   //Toggle 
        data = ["", "", "", "", "", "", "", "", ""];  //Reset data variables
        titleRef.current.innerHTML = ""
        boxArray.map((e) => {
            e.current.innerHTML = "";
        })
    }

    return (
        <div className="Game">
            <h1>Tic-Tac-Toe <span>Game</span></h1>
            <div className='container'>
                <div className='row1'>
                    <div className='boxes' ref={box1} onClick={(e) => { toggleBtn(e, 0) }}></div>
                    <div className='boxes' ref={box2} onClick={(e) => { toggleBtn(e, 1) }}></div>
                    <div className='boxes' ref={box3} onClick={(e) => { toggleBtn(e, 2) }}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' ref={box4} onClick={(e) => { toggleBtn(e, 3) }}></div>
                    <div className='boxes' ref={box5} onClick={(e) => { toggleBtn(e, 4) }}></div>
                    <div className='boxes' ref={box6} onClick={(e) => { toggleBtn(e, 5) }}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' ref={box7} onClick={(e) => { toggleBtn(e, 6) }}></div>
                    <div className='boxes' ref={box8} onClick={(e) => { toggleBtn(e, 7) }}></div>
                    <div className='boxes' ref={box9} onClick={(e) => { toggleBtn(e, 8) }}></div>
                </div>
            </div>
            {/* titleRef used to the win message */}
            <h2 ref={titleRef} className='winner-title'></h2>
            <button className='reset' onClick={() => { resetBtn() }}>Play Again</button>
        </div>
    );
}

export default GameApp;
