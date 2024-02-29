import PrimaryButton from "./buttons/primary"
import { FaArrowRight } from "react-icons/fa";
import { HeroImage } from "../assets";

const Header = () => {
    return (
        <section>
            <div className="mt-20 flex flex-col gap-10 items-center">
                <div className="hero-content text-center">
                    <h1 className=" text-7xl font-[700] uppercase">Connecting Dreams to Reality <br /><span className="italic text-[#2C8FB5]">Your Premier</span><br />Real Estate Marketplace</h1>
                    <p className="mt-6 text-xl">Where every search ends with a home.</p>
                </div>

                <div className="hero-buttons flex items-center justify-center gap-20">
                    <PrimaryButton title="Find Your Home" icon={FaArrowRight} />
                    <PrimaryButton title="List Your Property" icon={FaArrowRight} />
                </div>
            </div>
            <div className="mt-[120px]">
                <img src={HeroImage} alt="Hero Image" className="w-full" />
            </div>
        </section>
    )
}

export default Header