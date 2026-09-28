import { Check } from "lucide-react";

function NotReceivedMessage() {
  return (
    <div className="message received-message">
      <div className="message-icon">
        <Check size={20} />
      </div>

      <div>
        <strong>Order marked as delivered</strong>

        <p>
          Our system shows that your order was delivered,
          but you haven't received it.
        </p>

        <span className="small-note">
          Please contact support for help.
        </span>
      </div>
    </div>
  );
}

export default NotReceivedMessage;