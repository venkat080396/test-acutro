import * as React from "react";

export default function Select(props) {
  const menus = props.array.map((item, inx) => (
    <option
      style={{
        border: "none",
        backgroundColor: "blueviolet",
        color: "white",
      }}
      value={inx}
      key={inx}
    >
      {item}
    </option>
  ));

  return (
    <div>
      <select
        style={{
          border: "0.5px solid white",
          padding: '2px 20px 2px 4px',
          background: "linear-gradient(130.77deg, rgba(255, 255, 255, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)",
          textAlign: 'left',
          borderRadius:'7px',
          backgroundColor: "transparent",
          color: "white",
          margin: "3px",
        }}
      >
        {menus}
      </select>
    </div>
  );
}
