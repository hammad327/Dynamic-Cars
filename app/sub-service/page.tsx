"use client";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import React, { useEffect } from "react"; // <-- Ensure React and useEffect are imported

const ServicesPage = () => {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to the target section
    if (window.location.hash) {
      const targetId = window.location.hash;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, []);
  return (
    <Layout footerStyle={1}>
      <div>
        {/* Page Header */}
        <div className="page-header pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img
                className="w-100 h-100 img-banner "
                src="/assets/imgs/page-header/banner1.png"
                alt="Dynamic-Cars"
              />
            </div>
            <div className="container position-absolute z-1 top-50 start-50 translate-middle text-center">
              <h2 className="text-white text-4xl font-bold">Our Services</h2>
              <span className="text-white text-xl-medium">
                Perfect service, top experts
              </span>
            </div>
            <div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3">
              <Link href="/" className="neutral-700 text-md-medium">
                Home
              </Link>
              <span>
                <img
                  src="/assets/imgs/template/icons/arrow-right.svg"
                  alt="Arrow"
                />
              </span>
              <Link href="/services" className="neutral-700 text-md-medium">
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="container mx-auto my-16 mt-60 px-6">
          {/* Airport Transfers */}
          <div
            id="airport-transfers"
            className="service-section mt-50  mb-50 "
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#EEEDED",
              padding: "10px",
            }}
          >
            <div className="hide-on-mobile">
              <img
                src="/assets/imgs/servicepage/airporttransfer/1.jpeg"
                alt="Airport Transfers"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg mr-20  unoptimized={true} "
                style={{
                  height: "400px",
                  width: "600px",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3>Airport Transfers</h3>
              <p>
                At Dynamic Cars, we understand that airport transportation is
                more than just a ride—it’s about timeliness, reliability, and
                comfort.
              </p>
              <p>
                We take pride in our modern, well-maintained fleet and our team
                of experienced, courteous drivers who are dedicated to
                delivering a first-class experience. Whether you’re traveling
                alone or in a group, we provide a range of private and executive
                transport options to suit your specific requirements. With our
                24/7 availability, you can count on us for reliable airport
                transfers at any hour of the day or night.
              </p>
              <p>
                At Dynamic Cars, we prioritize exceptional customer service and
                aim to exceed expectations with every journey. Our drivers are
                highly knowledgeable about local routes, ensuring you arrive at
                your destination safely and on time. With competitive pricing
                and transparent billing, you can travel with confidence, knowing
                you’re getting a fair and cost-effective service.
              </p>
              <p>
                Whether you’re traveling for business or leisure, let Dynamic
                Cars handle your airport transportation needs. Book your ride
                today and experience the difference of a professional, reliable,
                and hassle-free transfer service!
              </p>
            </div>
          </div>

          {/* Chauffeur Services */}
          <div
            id="chauffeur-services"
            className="service-section mt-50 mb-50"
            style={{ display: "flex", alignItems: "center", padding: "10px", }}
          >
            <div style={{ flex: 1 }}>
              <h3>Chauffeur Services</h3>
              <p>
                Experience luxury and comfort with our professional chauffeur
                services.
              </p>
              <p>
                Dynamic Cars offers premium chauffeur services across the UK,
                operating under private hire vehicle (PHV) regulations. Unlike
                traditional taxis, our private hire vehicles must be pre-booked
                through a licensed operator and cannot be hailed on the street
                or wait at taxi ranks. This ensures a structured and
                professional service, providing clients with a seamless and
                stress-free travel experience. Our chauffeurs are fully
                licensed, highly trained, and committed to delivering a
                first-class service tailored to your needs.
              </p>
              <p>
                At Dynamic Cars, we specialize in luxury and executive travel.
                We offer a fleet of high-end vehicles, including Mercedes-Benz,
                BMW, and Rolls-Royce, to provide the ultimate comfort and
                sophistication. We guarantee a smooth and stylish journey
                whether you need reliable transport for corporate meetings,
                airport transfers, special events, hotel transfers, or city
                tours. Our services are designed for those who value
                punctuality, discretion, and exceptional customer service.
              </p>
              <p>
                All our vehicles are fully insured and meticulously maintained
                to meet strict safety and licensing requirements set by local
                authorities, including Transport for London (TfL) for operations
                in the capital. With transparent, pre-agreed fares and no taxi
                meters, we offer a hassle-free experience with no hidden costs.
                Whether traveling for business or leisure, Dynamic Cars ensures
                a luxurious and comfortable ride, making every journey
                effortless and enjoyable.
              </p>
            </div>
            <div className="hide-on-mobile">
              <img
                src="/assets/imgs/servicepage/chauffeur.jpeg"
                alt="chauffeur"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg ml-20  unoptimized={true} "
                style={{ height: "400px", width: "600px",  }}
              />
            </div>
          </div>

          {/* Long Distance & Cruise Transfers */}

          <div
            id="long-distance"
            className="service-section mt-50  mb-50"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#EEEDED",
              padding: "10px",
            }}
          >
            <div className="hide-on-mobile">
              <img
                src="/assets/imgs/servicepage/long-distance.jpeg"
                alt="long distance Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg mr-20 unoptimized={true} "
                style={{ height: "400px", width: "600px" }}
              />
            </div>
            <div style={{ flex: 1, marginRight: "20px" }}>
              <h3>Long Distance & Cruise Transfers</h3>
              <p>
                Safe and relaxing journeys for long distances and cruise
                transfers.
              </p>
              <p>
                At Dynamic Cars, we provide reliable and comfortable
                long-distance and cruise terminal transfers, ensuring a smooth
                and stress-free journey. Whether traveling across the UK for
                business or leisure or heading to a cruise terminal for your
                next adventure, we are committed to delivering a first-class
                experience.
              </p>
              <p>
                Our long-distance transfer service is the perfect solution for
                those looking to avoid the hassle of public transport. We offer
                comfortable, modern, and well-maintained vehicles, driven by
                experienced professionals who know the best routes to ensure a
                safe and timely trip. We make long-distance travel effortless
                with flexible scheduling, personalized service, and transparent
                pricing.
              </p>
              <p>
                We provide seamless transportation to major UK ports, including
                Southampton, Dover, Tilbury, and Liverpool, for cruise
                transfers. We ensure stress-free travel, accommodating extra
                luggage space for your cruise essentials while tracking your
                departure and arrival times for punctual service. Choose from
                luxury and executive vehicle options for a premium experience.
              </p>
              <p>
                Book your long-distance or cruise transfer with Dynamic Cars
                today and travel with confidence!
              </p>
            </div>
          </div>

          {/* Courier Services */}
          <div
            id="courier-services"
            className="service-section mt-50  mb-50"
            style={{ display: "flex", alignItems: "center", padding: "10px", }}
          >
            <div style={{ flex: 1, marginRight: "20px" }}>
              <h3>Courier Services</h3>
              <p>
                Fast, reliable, and secure courier services, available 24/7.
              </p>
              <p>
                Operating 24 hours a day, 7 days a week – Dynamic Cars &
                Couriers UK deliver your parcels at a time to suit you. Need the
                parcel to reach the office before you do? Let us know. We need
                an urgent letter sent to a customer out of business hours –
                we're here for you.
              </p>
              <p>
                Each delivery handled by Dynamic Cars & Couriers UK is fully
                assured and insured. Not only do we promise to meet the agreed
                delivery time, we're so sure of our service that we'll give you
                your money back if we don't. We can facilitate urgent same-day
                deliveries nationwide and guarantee a safe, secure, reliable and
                fully insured same-day or next-day delivery.
              </p>
              <p>
                Dynamic Cars & Couriers UK's specialized services include
                special pick-up times and internal handling requirements,
                dedicated line haul or delivery schedules, customized billing,
                and administrative procedures.
              </p>
              <p>
                Dynamic Cars offers fast, secure, and reliable courier services
                across the UK. Whether you need to send important documents,
                parcels, or time-sensitive deliveries, our professional team
                ensures safe and timely transportation to your desired
                destination.
              </p>
              <p>
                Our courier service is designed for businesses and individuals
                who require a trusted and efficient delivery solution. We handle
                everything from urgent same-day deliveries to scheduled and
                multi-drop consignments. With a fleet of well-maintained
                vehicles and dedicated drivers, we guarantee secure handling,
                real-time tracking, and proof of delivery for your peace of
                mind.
              </p>
              <p>
                Whether local or long-distance delivery, you can count on
                Dynamic Cars for a professional, cost-effective, and hassle-free
                courier experience. Contact us today to book your courier
                service!
              </p>
            </div>
            <div className="hide-on-mobile">
              <img
                src="/assets/imgs/servicepage/courier.jpeg"
                alt="chauffeur"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg  unoptimized={true} "
                style={{ height: "400px", width: "600px" }}
              />
            </div>
          </div>

          {/* Airport Meet & Greet */}
          <div
            id="airport-meet-greet"
            className="service-section mt-50  mb-50"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#EEEDED", padding: "10px",
            }}
          >
            <div className="hide-on-mobile">
              <img
                src="/assets/imgs/servicepage/meet-greet.jpeg"
                alt="long distance Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg mr-20  unoptimized={true} "
                style={{ height: "400px", width: "600px" }}
              />
            </div>
            <div style={{ flex: 1, marginRight: "20px" }}>
              <h3>Airport Meet & Greet</h3>
              <p>
                Personalized airport meet and greet services for a seamless
                experience.
              </p>
              <p>
                Dynamic Cars offers a premium Meet & Greet Airport Service to
                ensure a smooth and stress-free arrival at any UK airport.
                Whether you’re a frequent traveller, a business executive, or
                visiting the UK for the first time, our professional team
                provides a warm welcome and seamless transfer experience.
              </p>
              <p>
                With our Meet & Greet service, your dedicated driver will track
                your flight, arrive on time, and wait for you inside the
                terminal with a personalized name board. They will assist with
                your luggage and guide you to your comfortable, pre-booked
                vehicle, ensuring a hassle-free journey from the airport to your
                destination.
              </p>
              <p>
                Our service is available at all major UK airports, including
                Heathrow, Gatwick, Stansted, Luton, Birmingham, and Manchester.
                Our punctual, professional, and courteous drivers, whether
                travelling for business or leisure, ensure a relaxed and
                efficient transfer.
              </p>
              <p>
                Choose Dynamic Cars for a reliable and stress-free airport
                experience. Book your Meet & Greet service today and travel with
                ease!
              </p>
            </div>
          </div>

          {/* Event Management */}
          <div
            id="event-management"
            className="service-section mt-50  mb-50"
            style={{ display: "flex", alignItems: "center", padding: "10px", }}
          >
            <div>
              <h3>Event Management</h3>
              <p>
                Professional event transport solutions for all types of events.
              </p>
              <p>
                At Dynamic Cars, we provide professional and seamless event
                transport management for all occasions, ensuring smooth and
                efficient transportation for guests, staff, and VIPs. Whether
                you’re organizing a corporate event, wedding, concert,
                conference, or private gathering, our dedicated team handles all
                transport logistics so you can focus on your event.
              </p>
              <p>
                We offer a fleet of executive and luxury vehicles, experienced
                drivers, and a tailored service to accommodate your event’s
                specific needs. From airport transfers for VIPs to shuttle
                services for large groups, we ensure punctual, reliable, and
                comfortable travel. Our team also provides real-time
                coordination and flexible scheduling to handle last-minute
                changes smoothly.
              </p>
              <p>
                Trust Dynamic Cars to deliver a stress-free, organized,
                professional transport experience for your event. Contact us
                today to discuss your requirements and get a customized
                transport solution!
              </p>
            </div>
            <div className="hide-on-mobile">
              <img
                src="/assets/imgs/servicepage/event.jpeg"
                alt="chauffeur"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg ml-20  unoptimized={true} "
                style={{ height: "400px", width: "2200px" }}
              />
            </div>
          </div>

          {/* VIP Tours */}
          <div
            id="vip-tours"
            className="service-section mt-50  mb-50 mr-20  unoptimized={true} "
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#EEEDED", padding: "10px",
            }}
          >
            <div className="hide-on-mobile">
              <img
                src="/assets/imgs/servicepage/vip-tours.jpeg"
                alt="long distance Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg  unoptimized={true} "
                style={{ height: "400px", width: "2800px" }}
              />
            </div>
            <div className="ml-20">
              <h3>VIP Tours</h3>
              <p>
                Exclusive VIP tours with premium transport and guided
                experiences.
              </p>
              <p>
                Experience the UK like never before with Dynamic Cars’ VIP Tour
                Service, designed for those who appreciate luxury, comfort, and
                a personalized travel experience. Whether you’re a tourist,
                business executive, or special guest, our tailored private tours
                ensure you explore the most iconic landmarks and hidden gems
                with style and ease.
              </p>
              <p>
                Our VIP tours offer luxury vehicles, professional
                chauffeur-driven service, and customized itineraries based on
                your interests. Visit historic castles, vibrant cities,
                countryside retreats, and cultural hotspots with the convenience
                of a private guide and a flexible schedule. Whether it’s a
                London city tour, a scenic journey through the Cotswolds, or an
                exclusive visit to heritage sites, we provide an unparalleled
                travel experience.
              </p>
              <p>
                Enjoy first-class comfort, privacy, and a hassle-free journey
                with our dedicated VIP service. Book your bespoke VIP tour with
                Dynamic Cars today and explore the UK in luxury!
              </p>
            </div>
          </div>

          {/* Wedding Services */}
          <div
            id="wedding-services"
            className="service-section mt-50  mb-50"
            style={{ display: "flex", alignItems: "center", padding: "10px", }}
          >
            <div>
              <h3>Wedding Services</h3>
              <p>Luxury wedding transport for your special day.</p>
              <p>
                Make your special day even more memorable with Dynamic Cars’
                premium wedding transport service. We provide luxury vehicles,
                professional chauffeurs, and seamless coordination to ensure a
                stress-free and elegant travel experience for you and your
                guests.
              </p>
              <p>
                Our fleet includes executive cars, luxury saloons, and spacious
                vehicles to accommodate the bridal party, family, and VIP
                guests. Whether you need a grand entrance for the bride and
                groom, guest transfers between venues, or a honeymoon getaway
                car, we tailor our service to your unique wedding plans.
              </p>
              <p>
                With punctual service, immaculate vehicles, and professional
                chauffeurs, we guarantee a smooth and stylish journey on your
                big day. Let Dynamic Cars handle your wedding transport so you
                can focus on celebrating. Book your wedding transport today!
              </p>
            </div>
            <div className="hide-on-mobile">
              <img
                src="/assets/imgs/servicepage/wedding.jpeg"
                alt="chauffeur"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg ml-20  unoptimized={true} "
                style={{ height: "400px", width: "1900px" }}
              />
            </div>
          </div>

          {/* School Run */}
          <div
            id="school-run"
            className="service-section mt-50 mb-50"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#EEEDED", padding: "10px",
            }}
          >
            <div className="hide-on-mobile">
            <img
      src="/assets/imgs/servicepage/school-run.jpeg"
      alt="Long Distance Services"
      className="rounded-2xl shadow-lg mr-20"
      style={{ height: "400px", width: "1800px" }}
    />
            </div>
            <div className="ml-20">
              <h3>School Run</h3>
              <p>Safe and reliable school run services for your children.</p>
              <p>
                At Dynamic Cars, we provide a trusted and professional school
                run service, ensuring your child travels to and from school
                safely, comfortably, and on time. Our fully vetted, DBS-checked
                drivers are dedicated to providing a secure and friendly
                environment, giving parents peace of mind.
              </p>
              <p>
                We offer flexible and punctual pick-up and drop-off services,
                accommodating different school schedules and after-school
                activities. Our modern, well-maintained vehicles ensure a
                comfortable ride, while our real-time tracking and reliable
                communication keep you updated on your child’s journey.
              </p>
              <p>
                Whether you need a daily school run, occasional transport, or
                group travel arrangements, Dynamic Cars guarantees a safe,
                stress-free, and efficient solution for your family. Book your
                child’s school transport with us today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
