import React from "react";

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const maskedNumber = `**** **** **** ${number.slice(-4)}`;
  const formattedExpiration = `${expirationMonth
    .toString()
    .padStart(2, "0")}/${expirationYear.toString().slice(-2)}`;
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  return (
    <div style={cardStyle}>
      <div style={{ alignSelf: "flex-end", fontSize: "24px" }}>
        {type === "Visa" ? "•••• Visa" : "•••• Master Card"}
      </div>
      <div style={{ fontSize: "28px", marginTop: "20px" }}>{maskedNumber}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <div>
          <p>Expires {formattedExpiration}</p>
          <p>{bank}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
}
