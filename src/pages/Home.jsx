import QRCode from "react-qr-code";
import { useState } from "react";
import "./style.css";

const Home = () => {
  const initialValue = {
    value_text: "",
    nama_lengkap: "",
  };

  const [inputValue, setInputValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(e);
    setIsLoading(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  console.table(inputValue);

  return (
    <div className="Home">
      <h2>QR GENERATOR</h2>
      <div className="qrcode">
        {isLoading ? (
          <QRCode
            size={256}
            // style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={inputValue.value_text}
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
          name="value_text"
          placeholder="Text atau Link url "
          //  required="required"
          value={inputValue.value_text}
          onChange={(e) => handleChange(e)}
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
