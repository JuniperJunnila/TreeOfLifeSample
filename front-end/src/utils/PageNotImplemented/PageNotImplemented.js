import React from "react";
import "./PageNotImplemented.css";

export default function PageNotImplemented({ pageName }) {
  return (
    <div className="container-fluid">
      <h1 className="m-3 p-3 text-center">
        Sorry, the {pageName} page has not yet been implemented.
      </h1>
    </div>
  );
}
