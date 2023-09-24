import IconDown from "./icons/DownArrow.tsx";
import RegisterButton from "./RegisterButton.tsx";
import DarkThemedMap from "./MapComponent.tsx";

const Details = () => {


    return <>
        <div className="styleBlock"><h1 className={'detailsButton underline-animation'}>EVENT DETAILS</h1>
            <div className="down" onClick={() => {
                const contactsSection = document.querySelector('#contacts');
                if (contactsSection) {
                    contactsSection.scrollIntoView({behavior: 'smooth'});
                }
            }}><IconDown/></div>
        </div>
        <div className="register"><RegisterButton/></div>
        <div className="eventDetails">
            <div className="contactUs"><h1>Contact Us</h1>

                <div className="subContact" id={'contacts'}>
                    <h3>| Hassan Shahid: 0321-8890981 |</h3>
                    <h3>| Hammad Hussain: 0320-7819831 |</h3>
                    <h3>| Umar Raza: 0323-4468228 |</h3>
                    <h3>| Syed Faakhir Hussain: 0309-4453826 |</h3>
                </div>
            </div>
            <h3 className={'location'}>Pak-Turk Maarif International Schools and Colleges Lahore Boys Campus, Raiwind
                Road, Block D OPF Housing
                Scheme, Lahore, Punjab, Pakistan, 54000</h3>
        </div>
       <DarkThemedMap/>

    </>
}
export default Details