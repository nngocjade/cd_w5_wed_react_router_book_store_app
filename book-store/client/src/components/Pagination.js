import React from "react";

const Pagination = (handlePageChange) => {
  return (
    <div>
      <button onClick={() => handlePageChange}></button>
    </div>
  );
};

export default Pagination;
