import * as React from "react";

export default function SelectAutoWidth(props) {
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
          border: "none",
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
