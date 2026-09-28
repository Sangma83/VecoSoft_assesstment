import { AlertCircle, ChevronRight, Headphones, Package, Timeline } from "lucide-react";
import DelayedMessage from "./DelayedMessage";
import NotReceivedMessage from "./NotReceivedMessage";
import DeliveryInfo from "./DeliveryInfo";
import OrderItems from "./OrderItems";
import DeliveryAddress from "./DeliveryAddress";


function OrderTracking({ state }) {
  const isDelayed = state === "delayed";
  const isNotReceived = state === "notReceived";

  return (
    <main className="content">
      {/* Order Header */}
      <section className="order-card">
        <div className="product-icon">
          <Package size={23} />
        </div>

        <div className="order-info">
          <strong>Order #OD123456789</strong>
          <span>Placed on 12 Apr 2025</span>
        </div>

        <span
          className={`status-pill ${
            isDelayed
              ? "status-delayed"
              : isNotReceived
              ? "status-delivered"
              : "status-normal"
          }`}
        >
          {isDelayed ? "Delayed" : isNotReceived ? "Delivered" : "On Track"}
        </span>
      </section>

      {/* Timeline */}
      <Timeline state={state} />

      {/* State Message */}
      {isDelayed && <DelayedMessage />}

      {isNotReceived && <NotReceivedMessage />}

      {/* Estimated Delivery */}
      <DeliveryInfo state={state} />

      {/* Product */}
      <OrderItems />

      {/* Address */}
      <DeliveryAddress />

      {/* Bottom Actions */}
      <div className="actions">
        <button className="support-btn">
          <Headphones size={17} />
          Contact Support
        </button>

        {isDelayed || isNotReceived ? (
          <button className="primary-btn">
            <AlertCircle size={17} />
            Report Issue
          </button>
        ) : (
          <button className="primary-btn">
            View Order
            <ChevronRight size={17} />
          </button>
        )}
      </div>
    </main>
  );
}

export default OrderTracking;
