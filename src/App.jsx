import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import OrderTracking from './components/OrderTracking';
import TrackingUnavailable from './components/TrackingUnavailable';

function App() {
  const [state, setState] = useState("normal");

  return (
<div className="app">
      {/* Demo State Switcher */}
      <div className="demo-panel">
        <h2>Order Tracking Demo</h2>
        <p>Switch between the required task states</p>

        <div className="state-buttons">
          <button
            className={state === "normal" ? "active" : ""}
            onClick={() => setState("normal")}
          >
            Normal
          </button>

          <button
            className={state === "delayed" ? "active delayed-btn" : ""}
            onClick={() => setState("delayed")}
          >
            Delayed
          </button>

          <button
            className={state === "notReceived" ? "active warning-btn" : ""}
            onClick={() => setState("notReceived")}
          >
            Not Received
          </button>

          <button
            className={state === "unavailable" ? "active gray-btn" : ""}
            onClick={() => setState("unavailable")}
          >
            No Tracking
          </button>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="phone">
        <Header />

        {state === "unavailable" ? (
          <TrackingUnavailable />
        ) : (
          <OrderTracking state={state} />
        )}
      </div>
    </div>
  );
}


export default App
