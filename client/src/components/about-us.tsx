import { About1, About2, About3, About4 } from "../assets";

const AboutUs = () => {

    const cards = [
        {
            title: "Discover Your Perfect Home",
            description: "Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.",
            isLeft: true,
            image: About1
        },
        {
            title: "Showcase Your Property",
            description: "List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly.",
            isLeft: false,
            image: About2
        },
        {
            title: "Connect and Communicate",
            description: "Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward.",
            isLeft: true,
            image: About3
        },
        {
            title: "Seal the Deal Securely",
            description: "Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property.",
            isLeft: false,
            image: About4
        },

    ];

    return (
        <section className="my-[120px]">
            <div className="header text-center">
                <h3 className="text-7xl font-bold uppercase">How It Works?</h3>
                <p className="mt-6 text-xl">Step by Step Guide</p>
            </div>
            <div className="cards mt-20 gap-y-20 flex flex-col items mx-auto max-w-screen-xl ">
                {cards.map(card => (
                    <div key={card.title} className={`flex gap-x-20 ${card.isLeft ? "self-start" : "self-end flex-row-reverse"}`}>
                        <div className="image">
                            <img src={card.image} alt="Card Image" />
                        </div>
                        <div className={`content flex gap-4 flex-col ${card.isLeft ? "text-start" : "text-right"} justify-center`}>
                            <h4 className="text-5xl font-semibold">{card.title}</h4>
                            <p className="w-[600px] text-gray-500 text-xl">{card.description}</p>
                            <a href="" className="text-xl text-gray-500 underline">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutUs