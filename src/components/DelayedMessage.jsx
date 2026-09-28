import { AlertCircle } from "lucide-react";


function DelayedMessage() {
  return (
    <div className="message delayed-message">
      <div className="message-icon">
        <AlertCircle size={20} />
      </div>

      <div>
        <strong>Your order is delayed</strong>

        <p>
          We're sorry for the inconvenience. Your order
          is taking longer than expected.
        </p>

        <span className="small-note">
          New delivery date: 18 Apr 2025
        </span>
      </div>
    </div>
  );
}

export default DelayedMessage;