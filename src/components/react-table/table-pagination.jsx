import React from "react";
import Pagination from "react-bootstrap/Pagination";
import './react-table.css';

const TablePagination = ({
  gotoPage,
  canPreviousPage,
  pageOptions,
  pageIndex,
  previousPage,
  nextPage,
  canNextPage,
}) => {
  const arrayPageIndex =
    pageIndex - 2 < 0
      ? pageOptions.slice(0, pageIndex + 3)
      : pageOptions.slice(pageIndex - 2, pageIndex + 3);

  return (
    <>
      <Pagination>
        <li className="page-item">
          <button className="page-link" onClick={previousPage}
            disabled={!canPreviousPage}>
            <i className="fa fa-arrow-left"></i>
          </button>
        </li>

        {arrayPageIndex.map((i) => (
          <Pagination.Item
            className="pagination__item"
            active={pageIndex === i}
            key={i}
            onClick={() => gotoPage(i)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <li className="page-item">
          <button className="page-link"
            onClick={nextPage}
            disabled={!canNextPage}>
            <i className="fa fa-arrow-right"></i>
          </button>
        </li>

      </Pagination>
    </>
  );
};

export default TablePagination;
