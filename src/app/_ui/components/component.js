/* eslint-disable @next/next/no-img-element */
import {MdBorderInner} from "react-Icons/md";

export function WhyUsSection() {
    const data = [
        {
            id: 1,
            name: "Book WIth",
            text: "only 20%",
            Icon: <MdBorderInner/>
        }, {
            id: 2,
            name: "payment plan",
            text: "EASE 70/30",
            Icon: <MdBorderInner/>
        }, {
            id: 3,
            name: "handover on",
            text: "q2 2027",
            Icon: <MdBorderInner/>
        }, {
            id: 4,
            name: "area starts from",
            text: "700 sqmt",
            Icon: <MdBorderInner/>
        }
    ];
    return (
        <>
            <div className=" bg-[#F4F9FF] hidden md:flex p-8  justify-evenly">
            {data.map((item) => <Card key={item.id} item={item}/>)
}
        </div>
        <div className=" bg-[#F4F9FF] flex  md:hidden p-8  justify-evenly">
            {data.slice(1,3).map((item) => <Card key={item.id} item={item}/>)
}
        </div>
        </>
    )
}

const Card = ({item}) => {
    return (
        <div className="flex items-center flex-col gap-4">
            <p className="text-[#08254B] text-4xl uppercase">{item.Icon}</p>
            <p className="text-[#08254B] uppercase text-1xl ">{item.name}</p>
            <p className="text-[#08254B] uppercase text-2xl font-black ">{item.text}</p>
            <hr className="border-b-2 h-1 border-gray-200"/>
        </div>
    )
}

export const Feature = () => {

    const data = [
        {
            id: 1,
            img: 'https://picsum.photos/id/302/300/300',
            name: "Floating Pools"
        }, {
            id: 2,
            img: 'https://picsum.photos/id/652/300/300',
            name: "Spacious Cabins Like Rooms"
        }, {
            id: 3,
            img: 'https://picsum.photos/id/77/300/300',
            name: "Sea Facing Swimming Pools"
        }, {
            id: 4,
            img: 'https://picsum.photos/id/203/300/300',
            name: "Gymnasium & FItness"
        }
    ];
    return (
        <div className=" bg-[#ffff] p-4 md:px-36 py-8">
            <div className="text-center">
                <p className="md:text-3xl text-2xl font-semibold">Harbour</p>
                <p className="md:text-3xl text-2xl font-semibold">Lights</p>
                <p className="text-xl italic">de GRISOGONO</p>

            </div>

            <h1 className="md:text-3xl text-2xl font-black text-center my-4 text-[#08254B]">Features and Amnenities</h1>
            <p className="text-center text-xl mx:auto md:px-28">Harbour Lights beautifully
                honours maritime voyages while embracing an opulent seafront lifestyle. Its
                maritime-inspired amenities provide an unmatched seaside experience, offering a
                life of tranquility and bliss.</p>
            <div className="flex justify-between my-8 flex-wrap gap-1">
            {
                data.map((item)=> <FeatureCard key={item.id} item={item}/>)
            }

            </div>
            <p className="text-right text-sm">*T&Cs apply | ** Based on similar branded
                projects in the last 2 years. Source 1 | Source 2</p>
        </div>
    )
}

const FeatureCard=({item})=>{
    return(
        <div className="w-5/12 shadow-2xl rounded-b-lg my-2 md:w-1/5 pt-1 px-1 border-slate-300 border-t-4 rounded-t-full">
            <div className="flex items-center justify-center  flex-col gap-4 ">
            <img src={item.img} alt="image" className=" rounded-full" />
            <p className=" font-semibold text-center px-8">{item.name}</p>
            </div>
        </div>
    )
}