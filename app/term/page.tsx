
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Term() {

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 rounded-12 img-banner" src="/assets/imgs/page-header/banner5.png" alt="Dynamic-Cars" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">Terms Of Service</h2>
								<span className="text-white text-xl-medium">Last update: 25 August, 2024</span>
							</div>
						</div>
					</div>
					<section className="box-section-term background-body pt-85 pb-85">
	<div className="container">
		<div className="row">
		<div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
    <div className="sidebar rounded-3 border py-5 px-4">
        <div className="sidebar-menu">
            <h6 className="neutral-1000 mb-3">Table of Contents</h6>
            <ul>
                <li className="mb-2"><Link href="#Definitions" className="text-md-medium neutral-500">Definitions</Link></li>
                <li className="mb-2"><Link href="#Agreement" className="text-md-medium neutral-500">Agreement</Link></li>
                <li className="mb-2"><Link href="#Quotes" className="text-md-medium neutral-500">Quotes</Link></li>
                <li className="mb-2"><Link href="#Charges" className="text-md-medium neutral-500">Charges</Link></li>
                <li className="mb-2"><Link href="#WaitingTime" className="text-md-medium neutral-500">Waiting Time</Link></li>
                <li className="mb-2"><Link href="#AirportPickup" className="text-md-medium neutral-500">Airport Pick-ups</Link></li>
                <li className="mb-2"><Link href="#Bookings" className="text-md-medium neutral-500">Bookings</Link></li>
                <li className="mb-2"><Link href="#Cancellation" className="text-md-medium neutral-500">Cancellation</Link></li>
                <li className="mb-2"><Link href="#RefundPolicy" className="text-md-medium neutral-500">Refund Policy</Link></li>
                <li className="mb-2"><Link href="#Damages" className="text-md-medium neutral-500">Damages</Link></li>
                <li className="mb-2"><Link href="#LostProperty" className="text-md-medium neutral-500">Lost Property</Link></li>
                <li className="mb-2"><Link href="#Accounts" className="text-md-medium neutral-500">Accounts</Link></li>
                <li className="mb-2"><Link href="#RightOfRefusal" className="text-md-medium neutral-500">Right of Refusal</Link></li>
                <li className="mb-2"><Link href="#DataProtection" className="text-md-medium neutral-500">Data Protection</Link></li>
                <li className="mb-2"><Link href="#CrimePrevention" className="text-md-medium neutral-500">Crime Prevention</Link></li>
                <li className="mb-2"><Link href="#TelephoneCalls" className="text-md-medium neutral-500">Telephone Calls</Link></li>
            </ul>
        </div>
    </div>
</div>

<div className="col-lg-9 px-lg-5">
    <div className="d-flex flex-column gap-4">
        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="Definitions">Definitions</h3>
            <p className="text-md-medium neutral-500">
			The company, we, our, us means Dynamic Cars & Couriers LTD.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="Agreement">Agreement</h3>
            <p className="text-md-medium neutral-500">
			When you book a job with us you agree with our terms and conditions for using our service and our tariff.


            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="Quotes">Quotes</h3>
            <p className="text-md-medium neutral-500">
			All quotes where given are approximate. We operate a fixed rate for journeys and all quotes are according to mileage, time, out of pocket expenditure, type of car and service required.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="Charges">Charges</h3>
            <p className="text-md-medium neutral-500">
			Most of journeys are quoted via the shortest route. Any change of circumstances like extra drop or pick up or change of route requested by customer will incur different charge.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="WaitingTime">Waiting Time</h3>
            <p className="text-md-medium neutral-500">
			Where a driver has to wait beyond the required time booked, customer is liable for waiting time whether accidental or out of customer control.


            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="AirportPickup">Airport Pick-ups</h3>
            <p className="text-md-medium neutral-500">
                1. For outside pick-up there is no charge for flight delays as we monitor planes landing time. Driver will call to arrange meeting the customer and by the time customer is out driver will be waiting outside.<br/>
                2. For inside pick-up driver will have a sign board with customer name on it. Meet and Greet Charges apply.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="Bookings">Bookings</h3>
            <p className="text-md-medium neutral-500">
			1. Bookings must be made through the office and not with driver. It is illegal for a driver to pick up without job being pre booked by email or phoning the office.<br/>
			2. For a booking to be completed full postal address including post code telephone number preferably mobile full name and destination address and pick up time is required.<br/>
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="Cancellation">Cancellation</h3>
            <p className="text-md-medium neutral-500">
			For online bookings cancellation should be made 4 hours prior to the time of booking. <br/>
1. There is normally no charge for cancelling a booking if driver is not dispatched at the time of cancellation. <br/>
2. If cancellation made after dispatching driver customer will be liable for cancellation fee and cost of driver mileage and any other expenditure occurred for the journey.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="RefundPolicy">Refund Policy</h3>
            <p className="text-md-medium neutral-500">
			If the driver is getting late because of any unseen circumstances company will inform the customer. In the event that driver does not turn up at the Agreed Pick-Up Point within 30 minutes of the Agreed Time – or within 45  minutes if the pick-up point is an airport – and You do not use our company for the Trip, You will be entitled to a full refund of the Fare.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="Damages">Damages</h3>
            <p className="text-md-medium neutral-500">
			The Company is not responsible for any damage caused during loading or uploading passenger belongings. In the case of any damage sustained to the company’s property or vehicles by customer however, customer will be liable for all costs. These include damage repair, vehicle cleaning, and company’s loss of earning.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="LostProperty">Lost Property</h3>
            <p className="text-md-medium neutral-500">
			The Company shall not be liable for any property left in a vehicle provided to a customer.<br/>
1. Any item found will be held in the company’s office and every effort will be made to return the item to the customer.<br/>	
2. Any property returned to customer will be chargeable except collected from company’s office.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="Accounts">Accounts</h3>
            <p className="text-md-medium neutral-500">
			The Client undertakes to pay the invoices within the time specified on the invoice.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="RightOfRefusal">Right of Refusal</h3>
            <p className="text-md-medium neutral-500">
			The Company reserves the right to refuse to carry any passenger or object that the company deems to be likely to cause the driver or his vehicle any damage.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="DataProtection">Data Protection</h3>
            <p className="text-md-medium neutral-500">
			We do not store credit card details nor do we share customer details with any third parties. All of our clients are assured that their details are kept confidential and only authorised persons are allowed to get access to their details for booking or invoicing purposes.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="CrimePrevention">Crime Prevention</h3>
            <p className="text-md-medium neutral-500">
			In order to protect our customers and us from fraud and theft, we may pass on information that we obtain from making identity checks and other information in our customer records, including how you conduct your account, to other Group companies, other retailers and to financial and other organisations involved in fraud prevention and detection, to use in the same way. Without limitation to the foregoing, we may disclose any information and data relating to you to the police or any regulatory or government authority including and not limited to law enforcement agencies in response to a request in connection with the investigation of any suspected illegal activities.
            </p>
        </div>

        <div className="content">
            <h3 className="text-xl-bold mb-2 neutral-1000" id="TelephoneCalls">Telephone Calls</h3>
            <p className="text-md-medium neutral-500">
			Calls may be recorded to verify content and may be used together with other customer records for regulatory compliance, quality control and staff training, preventing or detecting criminal activity and for complaint resolution.
            </p>
        </div>
    </div>
</div>

						</div>  
					</div>  
				</section>  

				</div>

			</Layout>
		</>
	)
}