import { ArrowLeft, Headphones } from "lucide-react";


function Header() {
  return (
    <header className="header">
      <button className="icon-button">
        <ArrowLeft size={21} />
      </button>

      <h1>Track Order</h1>

      <button className="icon-button">
        <Headphones size={21} />
      </button>
    </header>
  );
}

export default Header