import React from 'react'

function Aboutme() {

    return (
        <div id="maindiv" className="flex flex-col items-center mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold mt-4 mb-8">About Me</h1>

            <div>
                <p className="mb-4">Hey all! I'm Shaon Debnath, and I'm a typical software engineer. I studied computer science at NIT Durgapur and I love to create exciting things. 
                In this blog, I write about things which I feel like will change the world...no not really lol. I write about whatever I feel like.
                I love to play chess so if you feel you're good enough to beat me then send me a challenge at <a href="https://lichess.org/@/brucewayne72" className="text-blue-500">lichess.org</a></p>
            </div>
            
        </div>
        
    )
}

export default Aboutme;