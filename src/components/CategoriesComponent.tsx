import Icon150Cogs from "./icons/Engineering.tsx";
import IconBxMath from "./icons/Math.tsx";
import IconCashStack from "./icons/MaarifTank.tsx";
import IconCode from "./icons/Hackathon.tsx";
import IconHeadLightbulb from "./icons/Trova.tsx";
import IconLocationPinAlt from "./icons/Scavenger.tsx";
import IconRobot from "./icons/Robot.tsx";
import IconMasksTheater from "./icons/Syrup.tsx";
import {gsap} from "gsap";
import {useState} from "react";

type DescriptionsComponentProps = {
    id: string;
    onClose: () => void;
};

const roboticsComponent = () => {
    return <>Component 1</>
}
const mathComponent = () => {
    return <><h1 className={'mathCat'}>The Maths Olympiad!
    </h1>
        <section className="mathSection">
            <p>Yes delegates, the subject the majority of us despise (and I mean loathe, with every fibre of our being)
                is something others find best to do while they are bored.</p>
            <p>Divulge into an intricate sequence of strenuous maths equations that'll leave even the Einsteins within
                our ranks racking their brains for a solution. Problem solving and the ability to see overlooked detail
                will be put to the test as the Maths Olympiad at Einscience is not for the faint of heart.</p>
            <p>So sharpen your best pencil and refine your trusty mind, for the Maths Olympiad has summoned you in its
                presence, the geniuses who walk among us (pun intended).</p>
        </section>

    </>
}
const engineerComponent = () => {
    return <>Component 3</>
}
const syrupComponent = () => {
    return <>Component 4</>
}
const cercaComponent = () => {
    return <>Component 5</>
}
const hackComponent = () => {
    return <>Component 6</>
}
const huntComponent = () => {
    return <>Component 7</>
}
const tankComponent = () => {
    return <>Component 8</>
}

const DescriptionsComponent: React.FC<DescriptionsComponentProps> = ({id, onClose}) => {
    const descriptions = {
        robotics: roboticsComponent(),
        math: mathComponent(),
        engineer: engineerComponent(),
        syrup: syrupComponent(),
        cerca: cercaComponent(),
        hack: hackComponent(),
        hunt: huntComponent(),
        tank: tankComponent(),
    };

    // @ts-ignore
    const componentToRender = descriptions[id] || null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {componentToRender}
            </div>
        </div>
    );
};

const CategoriesComponent: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    const handleHover = (e: any) => {
        gsap.to(e.currentTarget, {
            duration: 0.2,
            scale: 1.1,
            ease: 'ease-out',
            boxShadow: '0px 0px 15px 3px rgba(73, 158, 155, 0.5)',
        });
        gsap.to(e.currentTarget.children[0], {duration: 0.2, opacity: 0, ease: 'ease-out'});
        gsap.to(e.currentTarget.children[1], {duration: 0.2, opacity: 0, ease: 'ease-out'});
        gsap.to(e.currentTarget.children[2], {duration: 0.2, opacity: 1, ease: 'ease-out', delay: 0.1});
    };

    const handleLeave = (e: any) => {
        gsap.to(e.currentTarget, {
            duration: 0.2,
            scale: 1,
            ease: 'ease-out',
            boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.75)',
        });
        gsap.to(e.currentTarget.children, {duration: 0.2, opacity: 1, ease: 'ease-out', y: 0, delay: 0.1});
        gsap.to(e.currentTarget.children[2], {duration: 0.2, opacity: 0, ease: 'ease-out', delay: 0.1});
    };

    const handleClick = (e: any) => {
        const id = e.currentTarget.id;
        setSelectedId(id);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedId('');
    };

    return (
        <>
            <div className={'categories'}>
                <h1 className="text1">CATEGORIES</h1>
                <div className="subCat">
                    <div className={'icon'} id={'robotics'} onMouseEnter={handleHover} onMouseLeave={handleLeave}
                         onClick={handleClick}>
                        <IconRobot/>
                        <div className={'labelText'}>Robotics</div>
                        <div className="shortDesc"><span className='learnMore'>Learn More</span></div>
                    </div>
                    <div className={'icon'} id={'math'} onMouseEnter={handleHover} onMouseLeave={handleLeave}
                         onClick={handleClick}
                         onTouchStart={handleClick}
                    >
                        <IconBxMath/>
                        <div className={'labelText'}>Math Olympiad</div>
                        <div className="shortDesc"><span className='learnMore'>Learn More</span></div>
                    </div>
                    <div className={'icon'} id={'engineer'} onMouseEnter={handleHover} onMouseLeave={handleLeave}
                         onClick={handleClick}>
                        <Icon150Cogs/>
                        <div className={'labelText'}>Engineering <br/>Encounters</div>
                        <div className="shortDesc"><span className='learnMore'>Learn More</span></div>
                    </div>
                    <div className={'icon'} id={'syrup'} onMouseEnter={handleHover} onMouseLeave={handleLeave}
                         onClick={handleClick}>
                        <IconMasksTheater/>
                        <div className={'labelText'}>Syrup</div>
                        <div className="shortDesc"><span className='learnMore'>Learn More</span></div>
                    </div>
                    <br/>
                    <div className={'icon'} id={'cerca'} onMouseEnter={handleHover} onMouseLeave={handleLeave}
                         onClick={handleClick}>
                        <IconHeadLightbulb/>
                        <div className={'labelText'}>Cerca-Trova</div>
                        <div className="shortDesc"><span className='learnMore'>Learn More</span></div>
                    </div>
                    <div className={'icon'} id={'hack'} onMouseEnter={handleHover} onMouseLeave={handleLeave}
                         onClick={handleClick}>
                        <IconCode/>
                        <div className={'labelText'}>Hackathon</div>
                        <div className="shortDesc"><span className='learnMore'>Learn More</span></div>
                    </div>
                    <div className={'icon'} id={'hunt'} onMouseEnter={handleHover} onMouseLeave={handleLeave}
                         onClick={handleClick}>
                        <IconLocationPinAlt/>
                        <div className={'labelText'}>Scavenger <br/> Hunt</div>
                        <div className="shortDesc"><span className='learnMore'>Learn More</span></div>
                    </div>
                    <div className={'icon'} id={'tank'} onMouseEnter={handleHover} onMouseLeave={handleLeave}
                         onClick={handleClick}>
                        <IconCashStack/>
                        <div className={'labelText'}>Maarif <br/> Tank</div>
                        <div className="shortDesc"><span className='learnMore'>Learn More</span></div>
                    </div>
                </div>
                <h1 className="text2">CATEGORIES</h1>
            </div>
            <header><h1>20 | 21 | 22 October 2023</h1></header>
            {modalVisible && (
                <DescriptionsComponent id={selectedId} onClose={handleCloseModal}/>
            )}
        </>
    )
}
export default CategoriesComponent