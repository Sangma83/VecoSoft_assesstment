import { Package, RefreshCw, SearchX } from "lucide-react";

function TrackingUnavailable() {
  return (
    <main className="empty-state">
      <div className="empty-icon">
        <SearchX size={48} />
      </div>

      <h2>Tracking isn't available yet</h2>

      <p>
        Your order has been placed successfully, but
        tracking information isn't available yet.
      </p>

      <div className="empty-info">
        <Package size={19} />

        <div>
          <strong>Order #OD123456789</strong>
          <span>Tracking will appear once your order ships.</span>
        </div>
      </div>

      <button className="retry-btn">
        <RefreshCw size={17} />
        Check Again
      </button>

      <button className="support-link">
        Contact Support
      </button>
    </main>
  );
}

export default TrackingUnavailable;