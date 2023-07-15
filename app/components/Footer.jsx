import React from "react";

export default function Footer() {
  const Year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>Copyright © {Year} WebRizen LLP - All rights reserved</p>
      </footer>
    </>
  );
}
