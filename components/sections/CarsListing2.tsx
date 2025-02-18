import Link from "next/link";

export default function CarsListing2() {
  return (
    <>
      <section className="cars-listing-section">
        <div className="container">
          <div className="row align-items-end mb-10">
            <div className="col-md-8">
              <h3 className="neutral-1000 wow fadeInUp">Our Fleet</h3>
              <p className="text-lg-medium neutral-500 wow fadeInUp">
                Choose from eco-friendly luxury sedans, hybrids, and custom orders.
              </p>
            </div>
          </div>

          <div className="cars-grid">
            {/* Car 1 */}
            <div className="cars-card wow fadeIn" data-wow-delay="0.1s">
              <div className="cars-image">
                <img src="/assets/imgs/cars-listing/cars-listing-2/car-1.png" alt="Sedan (Prius)" />
              </div>
              <div className="cars-info">
                <div className="cars-title">
                  <Link href="">Sedan (Prius)</Link>
                </div>
                <div className="cars-facilities">
                  <p><i className="fa-solid fa-user-group"></i> Capacity 4</p>
                  <p><i className="fa-solid fa-suitcase"></i> Luggage 2</p>
                </div>
              </div>
            </div>

            {/* Car 2 */}
            <div className="cars-card wow fadeIn" data-wow-delay="0.1s">
              <div className="cars-image">
                <img src="/assets/imgs/cars-listing/cars-listing-2/car-2.png" alt="Executive (E class)" />
              </div>
              <div className="cars-info">
                <div className="cars-title">
                  <Link href="">Executive (E class)</Link>
                </div>
                <div className="cars-facilities">
                  <p><i className="fa-solid fa-user-group"></i> Capacity 4</p>
                  <p><i className="fa-solid fa-suitcase"></i> Luggage 2</p>
                </div>
              </div>
            </div>

            {/* Car 3 */}
            <div className="cars-card wow fadeIn" data-wow-delay="0.1s">
              <div className="cars-image">
                <img src="/assets/imgs/cars-listing/cars-listing-2/car-3.png" alt="MPV (Vito Car)" />
              </div>
              <div className="cars-info">
                <div className="cars-title">
                  <Link href="">MPV (Vito Car)</Link>
                </div>
                <div className="cars-facilities">
                  <p><i className="fa-solid fa-user-group"></i> Capacity 5</p>
                  <p><i className="fa-solid fa-suitcase"></i> Luggage 3</p>
                </div>
              </div>
            </div>

            {/* Car 4 */}
            <div className="cars-card wow fadeIn" data-wow-delay="0.1s">
              <div className="cars-image">
                <img src="/assets/imgs/cars-listing/cars-listing-2/car-4.png" alt="Luxury (S Class)" />
              </div>
              <div className="cars-info">
                <div className="cars-title">
                  <Link href="">Luxury (S Class)</Link>
                </div>
                <div className="cars-facilities">
                  <p><i className="fa-solid fa-user-group"></i> Capacity 5</p>
                  <p><i className="fa-solid fa-suitcase"></i> Luggage 3</p>
                </div>
              </div>
            </div>

            {/* Car 5 */}
            <div className="cars-card wow fadeIn" data-wow-delay="0.1s">
              <div className="cars-image">
                <img src="/assets/imgs/cars-listing/cars-listing-2/car-5.png" alt="Luxury MPV (V Class)" />
              </div>
              <div className="cars-info">
                <div className="cars-title">
                  <Link href="">Luxury MPV (V Class)</Link>
                </div>
                <div className="cars-facilities">
                  <p><i className="fa-solid fa-user-group"></i> Capacity 5</p>
                  <p><i className="fa-solid fa-suitcase"></i> Luggage 3</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
