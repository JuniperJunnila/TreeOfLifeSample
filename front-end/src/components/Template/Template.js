import React from "react";

const temp = { tempName1: "container-fluid", tempName2: "m-3" };

export default function Component1() {
  return (
    <div className={tempName1} id="tempName1">
      <div className={tempName2} id="tempName2">
        {/* content */}
      </div>
    </div>
  );
}
