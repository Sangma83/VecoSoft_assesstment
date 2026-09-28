import { Package, Truck, Check } from "lucide-react";

function Timeline({ state }) {
  const delivered = state === "notReceived";

  const steps = [
    {
      title: "Processing",
      date: "12 Apr",
      icon: <Package size={15} />,
      completed: true,
    },
    {
      title: "Shipped",
      date: "13 Apr",
      icon: <Package size={15} />,
      completed: true,
    },
    {
      title: "Out for Delivery",
      date: "14 Apr",
      icon: <Truck size={15} />,
      completed: delivered,
    },
    {
      title: "Delivered",
      date: delivered ? "15 Apr" : "-",
      icon: <Check size={15} />,
      completed: delivered,
    },
  ];

  return (
    <section className="timeline-card">
      <div className="timeline">
        {steps.map((step, index) => (
          <div key={step.title}>
            <div className="timeline-step">
              <div
                className={`timeline-icon ${
                  step.completed ? "completed" : ""
                } ${index === 2 && !delivered ? "current" : ""}`}
              >
                {step.icon}
              </div>

              <div className="step-title">{step.title}</div>
              <div className="step-date">{step.date}</div>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`timeline-line ${
                  steps[index + 1].completed ? "completed-line" : ""
                }`}
              />
            )}
            </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;