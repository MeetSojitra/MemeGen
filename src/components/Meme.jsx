import React from "react";
import memesdata from "../memedata.jsx"

export default function Meme() {
     
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    const[meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        });

    const[allMemeImages, setAllMemeImages] = React.useState(memesdata);

    function getMemeImage(){
        const memesarray=memesdata.data.memes;
        const randomImage = Math.floor(Math.random() * memesarray.length);
        
        setMeme(prev => {
            return {
                ...prev,
                randomImage: memesarray[randomImage].url
            }
        });
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <img src={meme.randomImage} className="meme--image"/>
            
            
        </main>
    )
}