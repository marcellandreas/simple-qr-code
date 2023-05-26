import QRCode from "react-qr-code";
import { useState } from "react";
import "./style.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset nilai input
    setInputValue("");
    setIsLoading(true);
  };

  return (
    <div className="Home">
      <h2>QR GENERATOR</h2>
      <div className="qrcode">
        {isLoading ? (
          <QRCode
            size={256}
            // style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={inputValue}
            viewBox={`0 0 256 256`}
          />
        ) : (
          <>Harap Masukan Text atau Url terlebih dahulu!</>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>Masukan Link Text / URL Website Anda </label>
        <input
          type="text"
          placeholder="Text atau Link url "
          required="required"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {isLoading ? (
          <button style={{ display: "none" }}>Clear</button>
        ) : (
          <button>Submit</button>
        )}
      </form>
    </div>
  );
};

export default Home;
