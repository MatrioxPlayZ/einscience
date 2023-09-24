import Image from "./logo.png";
import CategoriesComponent from "./CategoriesComponent.tsx";

const HeroComponent = () => {
    return (
        <>
            <nav className={'navbar'}>
                <img src={Image} className={'navImage'} alt="logo"/>
            </nav>

            <CategoriesComponent/>
        </>
    )
}
export default HeroComponent