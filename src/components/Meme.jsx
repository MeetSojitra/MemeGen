import React from "react";

export default function Meme() {
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
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
            
            <div className="meme--image">
                <img src="" alt="" />
                <h2 className="meme--topText"></h2>
                <h2 className="meme--bottomText"></h2>
            </div>
        </main>
    )
}