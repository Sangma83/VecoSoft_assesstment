import { ChevronRight } from "lucide-react";

function OrderItems() {
  return (
    <section className="section">
      <div className="section-header">
        <h3>Order Items</h3>

        <button className="details-btn">
          View Details
          <ChevronRight size={15} />
        </button>
      </div>

      <div className="item">
        <div className="shoe-image">
          👟
        </div>

        <div className="item-info">
          <strong>Running Shoes</strong>

          <span>Size: 42 &nbsp; | &nbsp; Qty: 1</span>

          <b>৳ 2,499</b>
        </div>
      </div>
    </section>
  );
}

export default OrderItems;