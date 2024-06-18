import Image from "next/image";
import {HeaderSection, NavSection} from "./_ui/header/header";
import {Feature, WhyUsSection} from "./_ui/components/component";
import {Carousel} from "./_ui/components/Carousel";
import Footer from "./_ui/components/Footer";

export default function Home() {
    return (
        <main>
            <div
                className="min-h-screen bg-slate-200 p-4 md:px-36 py-8 bg-gradient-to-r from-[#062349] to-[#ffffff00]">
                <div className="flex flex-col gap-32 ">
                    <NavSection/>
                    <HeaderSection/>
                </div>
            </div>
            <WhyUsSection/>
            <Feature/>
            <Carousel/>
            <Footer/>
        </main>
    );
}
