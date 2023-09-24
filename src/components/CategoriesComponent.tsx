import Icon150Cogs from "./icons/Engineering.tsx";
import IconBxMath from "./icons/Math.tsx";
import IconCashStack from "./icons/MaarifTank.tsx";
import IconCode from "./icons/Hackathon.tsx";
import IconHeadLightbulb from "./icons/Trova.tsx";
import IconLocationPinAlt from "./icons/Scavenger.tsx";
import IconRobot from "./icons/Robot.tsx";
import IconMasksTheater from "./icons/Syrup.tsx";
import {gsap} from "gsap";


const CategoriesComponent = () => {


    const handleHover = (e: any) => {
        gsap.to(e.target, {duration: 0.1, opacity: 0.5, ease: 'ease-out', y: -20})
    }
    const handleLeave = (e: any) => {
        gsap.to(e.target, {duration: 0.1, opacity: 1, ease: 'ease-out', y: 0, delay: 0.1})
    }
    return (
        <>
            <div className={'categories'}>
                <h1 className="text1">CATEGORIES</h1>
                <div className="subCat">
                    <div className={'icon'} id={'robotics'} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <IconRobot/>
                        <div className={'labelText'}>Robotics</div>
                    </div>
                    <div className={'icon'} id={'math'} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <IconBxMath/>
                        <div className={'labelText'}>Math Olympiad</div>
                    </div>
                    <div className={'icon'} id={'engineer'} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <Icon150Cogs/>
                        <div className={'labelText'}>Engineering <br/>Encounters</div>
                    </div>
                    <div className={'icon'} id={'syrup'} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <IconMasksTheater/>
                        <div className={'labelText'}>Syrup</div>
                    </div>
                    <br/>
                    <div className={'icon'} id={'cerca'} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <IconHeadLightbulb/>
                        <div className={'labelText'}>Cerca-Trova</div>
                    </div>
                    <div className={'icon'} id={'hack'} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <IconCode/>
                        <div className={'labelText'}>Hackathon</div>
                    </div>
                    <div className={'icon'} id={'hunt'} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <IconLocationPinAlt/>
                        <div className={'labelText'}>Scavenger <br/> Hunt</div>
                    </div>
                    <div className={'icon'} id={'tank'} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <IconCashStack/>
                        <div className={'labelText'}>Maarif <br/> Tank</div>
                    </div>
                </div>
                <h1 className="text2">CATEGORIES</h1>
            </div>
        </>
    )
}
export default CategoriesComponent