import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const styles = colors.map(styleEl => {
    return <li style={{ color: styleEl }}>{styleEl}</li>
  })

  return (

    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {styles}
      </ol>
    </div>
  );
}

export default ColorList;
