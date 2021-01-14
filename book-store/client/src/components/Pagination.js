import React from "react";
import ReactPagination from "react-js-pagination";

const Pagination = ({ handlePageChange, pageNum, totalItemsCount }) => {
  console.log("totalItemsCount", totalItemsCount);
  return (
    <div>
      <ReactPagination
        activePage={pageNum}
        totalItemsCount={totalItemsCount}
        onChange={handlePageChange}
        itemsCountPerPage={10}
      />
    </div>
  );
};

export default Pagination;
