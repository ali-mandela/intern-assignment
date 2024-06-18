export const NavSection = () => {
    return (
        <div className="flex justify-between">
            <h1 className="italic text-4xl font-bold text-white ">DAMAC</h1>
            <button
                className="text-sm text-[#17ABFF] border-2 border-[#17ABFF] px-4 py-2 rounded-lg">
                ENQUIRE NOW
            </button>
        </div>
    )
}

//
export const HeaderSection = () => {
    return (
        <div className="flex md:flex-row flex-col gap-4">
            <div className="flex basis-full flex-col gap-12 md:basis-2/4">
                <h1 className="text-4xl leading-normal w-3/4 text-white font-black uppercase ">Harbour Lights
                    <br/>DE
                     <span className="text-[#17ABFF] "> GRESOGONO</span>
                </h1>
                <p className="font-extrabold text-xl">1, 2 & 3 Bedrooms Seaside Apartments<br/>
                    in Dubai Maritime City</p>
                <div className="flex flex-col gap-8">
                    <Htext>Rental Returns of UPTO 11%**
                    </Htext>
                    <Htext>Capital Appreciation of UPTO 32%**
                    </Htext>
                </div>
            </div>
            <div className="basis-2/4">
                <RightSection/>
            </div>
        </div>
    )
}

export const Htext = ({children}) => <div
    className="border-l-4 inline text-xl py-2  bg-slate-400 border-[#17ABFF] pl-4">{children}</div>

const RightSection = () => {
    return (
        <div className=" flex justify-end">
            <div className="rounded-lg bg-white bg-opacity-35  backdrop-blur-lg w-full md:w-3/4">
                <div className="p-8">
                    <p className="uppercase text-white">PRICING Start from</p>
                    <p className="text-4xl text-white font-black my-2">$ 425,000</p>
                    <p className="text-2xl text-white font-bold">AED 1.3 Million</p>
                    <button
                        className="uppercase w-full mt-6 bg-[#17ABFF] py-4 text-sm font-bold rounded-lg text-[#FFF]">GET a Presentation</button>
                </div>
                <div className=" px-8 py-6 border-t-2 border-[#333">
                    <p>
                        Get an Expert’s Presentation of Real Estate in Dubai for Life and investment
                    </p>
                </div>
            </div>
        </div>
    )
}