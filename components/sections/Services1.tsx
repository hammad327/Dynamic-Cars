'use client'
import Link from "next/link"

const services = [
    { id: 1, title: "Airport Transfers", img: "/assets/imgs/services/services-1/img-1.png", link: "/services" },
    { id: 2, title: "Chauffeur Services", img: "/assets/imgs/services/services-1/img-2.png", link: "/services" },
    { id: 3, title: "Long Distance & Cruise Transfers", img: "/assets/imgs/services/services-1/img-3.png", link: "/services" },
    { id: 4, title: "Courier Services", img: "/assets/imgs/services/services-1/img-4.png", link: "/services" },
    { id: 5, title: "Airport Meet & Greet", img: "/assets/imgs/services/services-1/img-5.png", link: "/services" },
    { id: 6, title: "Event Management", img: "/assets/imgs/services/services-1/img-6.png", link: "/services" },
    { id: 7, title: "VIP Tours", img: "/assets/imgs/services/services-1/img-7.png", link: "/services" },
    { id: 8, title: "Corporate Travel", img: "/assets/imgs/services/services-1/img-8.png", link: "/services" },
    { id: 9, title: "Wedding Services", img: "/assets/imgs/services/services-1/img-9.png", link: "/services" }
];

export default function Services1() {
    return (
        <section className="section-box box-properties-area pt-96 pb-50 background-body">
            <div className="container">
                <div className="row align-items-end mb-40">
                    <div className="col-md-8">
                        <h3 className="neutral-1000">Our Services</h3>
                        <p className="text-lg-medium neutral-500">Serving You with Quality, Comfort, and Convenience</p>
                    </div>
                </div>

                <div className="row">
                    {services.map((service) => (
                        <div key={service.id} className="col-md-4 mb-4">
                            <div className="card-spot background-card wow fadeInDown">
                                <div className="card-image">
                                    <Link href={service.link}>
                                        <img 
                                            className="rounded-3 img-fluid" 
                                            src={service.img} 
                                            alt={service.title} 
                                        />
                                    </Link>
                                </div>
                                <div className="card-info background-card">
                                    <div className="card-left">
                                        <div className="card-title">
                                            <Link className="text-sm-bold neutral-1000" href={service.link}>{service.title}</Link>
                                        </div>
                                    </div>
                                    <div className="card-right">
                                        <div className="card-button">
                                            <Link href={service.link}>
                                                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
