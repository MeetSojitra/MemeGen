import React from "react";
import memesdata from "../memedata.jsx"

export default function Meme() {
    function clicked(){
        const memesarray=memesdata.data.memes;
        const randomImage = Math.floor(Math.random() * memesarray.length);
        const url = memesarray[randomImage].url;
        console.log(url);
    }

    return(
        <main>
            <form className="form">
                <input
                    type="text"
                    className="input"
                    placeholder="Top Text"
                />
                <input
                    type="text"
                    className="input"
                    placeholder="Bottom Text"
                />
                <button onClick={clicked} className="form--button">Get a new meme image 🖼</button>
            </form>
            
            <div className="meme--image">
                <img src="" alt="" />
                <h2 className="meme--topText"></h2>
                <h2 className="meme--bottomText"></h2>
            </div>
        </main>
    )
}