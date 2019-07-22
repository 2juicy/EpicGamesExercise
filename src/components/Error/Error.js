import React from "react";

export default function Error({ css, children }) {
  return (
    <div style={css}>
      <h4>{children}</h4>
      <button value="Refresh Page" onClick={() => window.location.reload()}>
        Refresh Page
      </button>
    </div>
  );
}
