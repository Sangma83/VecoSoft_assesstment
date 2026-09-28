import { AlertCircle, CalendarDays, Check } from "lucide-react";


function DeliveryInfo({ state }) {
  const delivered = state === "notReceived";
  const delayed = state === "delayed";

  return (
    <section className="delivery-card">
      <div className="delivery-icon">
        {delivered ? (
          <Check size={20} />
        ) : delayed ? (
          <AlertCircle size={20} />
        ) : (
          <CalendarDays size={20} />
        )}
      </div>

      <div>
        <span className="card-label">
          {delivered ? "Delivered On" : "Estimated Delivery"}
        </span>

        <strong>
          {delivered
            ? "15 Apr 2025"
            : delayed
            ? "18 Apr 2025"
            : "15 Apr 2025"}
        </strong>

        <span className="delivery-time">
          {delivered ? "04:32 PM" : "10:00 AM – 02:00 PM"}
        </span>
      </div>
    </section>
  );
}

export default DeliveryInfo;