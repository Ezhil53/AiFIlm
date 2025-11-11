import React from 'react'
import "../components/ai.css";
import AiHero from '../components/AiHero'
import AiService from "../components/AiService";
import AiWork from "../components/AiWork";
import AiShoot from "../components/AiShoot";
import AiWhy from '../components/AiWhy';
import AiNavbar from "../components/AiNavbar";
import AiFooter from "../components/AiFooter";
import AiVision from "../components/AiVision";

const Home = () => {
    return (
        <div>
            <AiNavbar />
            <AiHero/>
            <AiService />
            <AiShoot />
            <AiWork />
            <AiWhy />
            {/* <AiVision /> */}
            <AiFooter />

        </div>
    )
}

export default Home
