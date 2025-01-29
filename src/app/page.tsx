"use client";

import { useState } from "react";

export default function Home() {
  const ONE_LICTOR_IN_EUROS = 40;
  const [inputValue, setInputValue] = useState("1");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>EURO</p>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: "90%", height: "50px", fontSize: "24px" }}
        />
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>LICTOR</p>
          <p>{(Number(inputValue) / ONE_LICTOR_IN_EUROS).toFixed(2)}</p>
          <img className="lictor" src="/lictor.webp" alt="Warhammer Lictor" />
        </div>
      </div>
    </div>
  );
}
