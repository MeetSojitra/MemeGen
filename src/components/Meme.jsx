import React from "react";
import memesdata from "../memedata.jsx"

export default function Meme() {
     /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    function clicked(){
        const memesarray=memesdata.data.memes;
        // get a random image from the memesData array
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