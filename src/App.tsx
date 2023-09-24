import HeroComponent from "./components/HeroComponent.tsx";
import './components/components.css'
import Details from "./components/Details.tsx";
import {gsap} from "gsap";

function App() {
gsap.to('body', {duration: 1, opacity: 1, ease: 'ease-out'})
    return (
        <>
            <HeroComponent/>
            <Details/>
        </>
    )
}

export default App
