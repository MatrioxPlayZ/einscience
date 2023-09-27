import Icon150Cogs from "./icons/Engineering.tsx";
import IconBxMath from "./icons/Math.tsx";
import IconCashStack from "./icons/MaarifTank.tsx";
import IconCode from "./icons/Hackathon.tsx";
import IconHeadLightbulb from "./icons/Trova.tsx";
import IconLocationPinAlt from "./icons/Scavenger.tsx";
import IconRobot from "./icons/Robot.tsx";
import IconMasksTheater from "./icons/Syrup.tsx";
import {gsap} from "gsap";
import {useState, useEffect} from "react";

type DescriptionsComponentProps = {
    id: string;
    onClose: () => void;
};

const roboticsComponent = () => {
    return <>Component 1</>
}
const mathComponent = () => {
    return (
        <>
            <h1 className={'mathCat'}>Maths Olympiad!</h1>
            <section className="mathSection catSection">
                <p>Yes delegates, the subject the majority of us despise (and I mean loathe, with every fibre of our
                    being)
                    is something others find best to do while they are bored.</p>
                <p>Divulge into an intricate sequence of strenuous maths equations that'll leave even the Einsteins
                    within
                    our ranks racking their brains for a solution. Problem solving and the ability to see overlooked
                    detail
                    will be put to the test as the Maths Olympiad at Einscience is not for the faint of heart.</p>
                <p>So sharpen your best pencil and refine your trusty mind, for the Maths Olympiad has summoned you in
                    its
                    presence, the geniuses who walk among us (pun intended).</p>
            </section>

        </>)
}
const engineerComponent = () => {
    return (
        <>
            <h1 className={'mathCat'}>Engineering Encounters!
            </h1>
            <section className="constructionSection catSection">
                <p>For all you builders out there, here's something that can quench your thirst for construction!
                    Delegates will be charged with putting together scientific objects and instruments from domestic
                    materials.</p>
                <p>Participants' quick wit and creativity will determine whether or not their inventions are applicable.
                    From making a spaceship from yarn and matchsticks to designing a satellite from loose wire and a CD,
                    this category will truly bring out the engineer in us all!</p>
            </section>


        </>)
}
const syrupComponent = () => {
    return (
        <>
            <h1 className={'mathCat'}>Syrup!</h1>
            <section className="advertisementSection catSection">
                <p>Delegates, introducing our most inventive sub-category yet, a challenge designed to put your wit and
                    creativity to the test. The Einscience team takes great pride in unveiling: Syrup.</p>
                <p>The art of crafting compelling advertisements that entice viewers to buy your product on the spot is
                    a skill possessed by only a select few individuals, and it has always appealed to us.</p>
                <p>In this category, participants will receive a product and be tasked with creating an advertisement
                    video that is both humorous and informative. Participants will then have to present the video to a
                    jury and live audience!</p>
                <p>This category demands participants who can think on the spot, are intuitive and embrace the power of
                    humor and originality in their ideas. Ensure that you harness these elements to the fullest in your
                    videos. On a more serious note, remember that plagiarism will result in disqualification. We eagerly
                    anticipate your participation in this event!</p>
            </section>


        </>)
}
const cercaComponent = () => {
    return (
        <>
            <h1 className={'mathCat'}>CERCA TROVA!</h1>
            <section className="roundSection catSection">
                <h2>ROUND 1 - The inQUIZitive</h2>
                <p>Cercatrova means ‘seek and you shall find’ and that is exactly what the participants will be expected
                    to do. The sub event would be divided into three rounds</p>
                <p>If science piques your interest, this one's for you! Rest assured this is not going to be some long,
                    jaded activity of circling the right letter, instead, we've created a level that will ensure that
                    your thought-provoking brain remains fixated on the task.</p>
                <p>Your mission, should you choose to accept it, will contain the need to step up your game. Also,
                    remember those concepts of Biology, Chemistry, and Physics that we always disregard because they're
                    useless? Yeah, turns out you're gonna need them.</p>

                <h2>ROUND 2 - The Great Green Debate</h2>
                <p>This is a distinguished round concocted by fusing two very distinct elements: public speaking and
                    environmental science! This will test your speaking skills, critical thinking, and obviously
                    diplomacy (yes MUN people, we can hear you jumping out of your boots already).</p>
                <p>And just like MUN conferences, participants will be assigned a country prior to the conference and
                    through a series of sessions; we aim to familiarize delegates with global environmental issues,
                    where each team will have to come up with innovative and excitingly new arguments!</p>

                <h2>ROUND 3 - Mind Martians</h2>
                <p>This event is for all astronomy-obsessors out there, but will also intrigue anybody who sees
                    themselves as a future engineer and uses common sense to conquer any and every challenge.
                    Participants will be required to design an orbital space colony and work out its structure and
                    operational requirements.</p>
                <p>The judges will also require thorough research, sound science, and practical solutions. Participants
                    will present their working and findings through an elaborately creative presentation (please make it
                    interesting!)</p>
            </section>


        </>)
}
const hackComponent = () => {
    return (
        <>
            <h1 className={'mathCat'}>HACKATHON!</h1>
            <section className="hackathonSection catSection">
                <p>Prove yourself in your cyber knowledge in the arena of our second category; we present to you the
                    Hackathon.</p>
                <p>Excel in the fluency of the language of code while a quest has been provided to be fulfilled by only
                    those with the most creative of minds.</p>
                <p>Provided with the contestants would be a coding-related task to commit to in order to come up with
                    the most imposing work, it could range from on-spot scenario inquiries to a functioning video
                    game.</p>
                <p>Will you be able to forge the path to complete the challenge? Find out with wits through Einscience's
                    Hackathon.</p>
            </section>


        </>)
}
const huntComponent = () => {
    return (
        <>
            <h1 className={'mathCat'}>SCAVENGER HUNT!</h1>
            <section className="scavengerHuntSection catSection">
                <p>Welcome, esteemed delegates, to the exciting culmination of Einscience, our premier science event.
                    Prepare to put your scientific acumen and problem-solving skills to the ultimate test in our 8th and
                    final category, the Science Scavenger Hunt.</p>

                <p>The Scavenger Hunt is not your ordinary adventure; it's a journey of intellectual discovery. With
                    three progressively challenging rounds, we'll take you on an immersive exploration of scientific
                    clues to find hidden items throughout our campus.</p>

                <h2>Round 1 - The Beginner's Quest</h2>
                <p>In the initial round, we'll introduce you to the world of scientific scavenging. Clues will lead you
                    to various locations on our campus, where you'll begin your quest for knowledge and hidden
                    treasures. It's a perfect starting point for all participants.</p>

                <h2>Round 2 - The Intermediate Challenge</h2>
                <p>As you progress to the second round, the stakes rise. Here, your scientific knowledge will be put to
                    the test, and you'll need to solve more intricate clues. It's a challenge that separates the budding
                    scientists from the rest.</p>

                <h2>Round 3 - The Expert Expedition</h2>
                <p>In this round, we present the ultimate test of your scientific prowess. This is where the true
                    science enthusiasts shine. With the most complex clues, only the most knowledgeable and astute among
                    you will successfully uncover the hidden treasures.</p>

                <h2>Round 4 - The Finale</h2>
                <p>Finally, participants will be challenged to take upon science as a personality! The scavenger clues
                    can range from autobiographies of scientific personnel to answering questions on which space movie
                    was a box office hit in the 10s. Here, pop culture and science have an unlikely interaction.</p>

                <p>So, assemble your teams, don your thinking caps, and embark on this thrilling scientific journey.
                    Prizes await the top-performing teams, and the glory of scientific discovery is within your
                    reach.</p>

                <p>Are you ready to unravel the mysteries of science? See you at the Hunt!</p>
            </section>


        </>)
}
const tankComponent = () => {
    return (
        <>
            <h1 className={'mathCat'}>MAARIF TANK!</h1>
            <section className="maarifTankSection catSection">
                <p>Delegates, the Maarif Einscience team presents to you, with great honor, our 7th and most unique
                    category, MAARIF TANK! An expedition designed to bring out your inner salesman.</p>

                <p>The duty of pitching products and getting deals, this is indeed the epitome of creating, presenting,
                    and most importantly, selling.</p>

                <p>In this category, participants will present products to judges. Their presentation, speaking, body
                    language, all is put to the test in this category! The products need to catch the judge's eye, and
                    the presentation needs to be unique and eye-striking too.</p>

                <p>Delegates, this category needs participants with not only great speaking but also that little extra
                    wit to catch the judge's eye and in turn, impress them to the very core. We are waiting for your
                    participation in this year's Maarif Einscience!</p>
            </section>


        </>)
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

    useEffect(() => {
        // Add the class to disable overflow when the modal is active
        document.body.classList.add('disable-overflow');

        // Remove the class when the modal is closed
        return () => {
            document.body.classList.remove('disable-overflow');
        };
    }, []);
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="scrollable-content">
                    {componentToRender}
                </div>
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
                        <div className={'labelText'}>Engineering Encounters</div>
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