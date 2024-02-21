import React, { useState } from 'react'

function Footer() {
    // const aboutClick = document.getElementById('def').SetInnerHTML=
    const [definition,setDefinition] = useState("click the button on the left")
    const handleAboutClick =()=>{
        setDefinition("About us  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique quibusdam nobis cumque mollitia, blanditiis qui aut repellendus cum eveniet repellat aliquid alias ad nam. Blanditiis aliquid soluta ratione numquam.")
    }
    const handleOurMissionClick =()=>{
        setDefinition("Our Mission  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique quibusdam nobis cumque mollitia, blanditiis qui aut repellendus cum eveniet repellat aliquid alias ad nam. Blanditiis aliquid soluta ratione numquam.")
    }
    const handleVission =()=>{
        setDefinition("vision   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique quibusdam nobis cumque mollitia, blanditiis qui aut repellendus cum eveniet repellat aliquid alias ad nam. Blanditiis aliquid soluta ratione numquam.")
    }

  return (
    <div className='footer fixed-bottom'>
         <div className='container footerFirstPart'>
            <h1>About US</h1>
            <div className='row'>
                <div className='options col-lg-5'>
                    <div><button onClick={handleAboutClick} className='btn text-white'>about</button></div>
                    <div><button onClick={handleOurMissionClick} className='btn text-white'>our mission</button></div>
                    <div><button onClick={handleVission} className='btn text-white'>vision</button></div>
                </div>
                <div className='col-lg-5'>
                    <p id='def'>{definition}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer