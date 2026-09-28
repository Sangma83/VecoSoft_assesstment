import { MapPin } from "lucide-react";

function DeliveryAddress() {
  return (
    <section className="section address">
      <div className="address-icon">
        <MapPin size={20} />
      </div>

      <div>
        <span className="card-label">Delivery Address</span>

        <p>
          House 12, Road 3,
          <br />
          Nikunja-2, Dhaka, Bangladesh
        </p>
      </div>
    </section>
  );
}


export default DeliveryAddress;