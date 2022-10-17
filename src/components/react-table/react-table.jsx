import React from 'react';
import { useTable, usePagination, useFilters, useSortBy, useGlobalFilter, useAsyncDebounce } from 'react-table'
import './react-table.css';
import TablePagination from "./table-pagination";
import GlobalFilter from "./global-filter"
import ShowHideColumns from "./show-hide-columns"



const Table = ({ columns, data, isLoading }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
        allColumns,
        getToggleHideAllColumnsProps,
        page,
        pageOptions,
        state,
        gotoPage,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        pageCount,
        setPageSize
    } = useTable(
        {
            columns,
            data,
            initialState: { 
                pageIndex: 0,
                pageSize: 5,
            }
        },
        useGlobalFilter,
        useFilters, // useFilters!
        useSortBy,
        usePagination,
    );
    const { pageIndex, pageSize } = state;
    return (
        <div className='container pb-5'>
            <div className="row justify-content-center">
                <div className="col-11 col-md-10 table-with-search-container">
                    {/* ********** Start search section ********** */}
                    <div className='search-section'>
                        <h1>User Directory</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                        <div className='search-with-paginator'>
                            <GlobalFilter
                                preGlobalFilteredRows={preGlobalFilteredRows}
                                globalFilter={state.globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />
                            <div>
                                <span>{`Showing  ${pageSize > rows.length ? rows.length : pageSize} of ${rows.length
                                    }  User`} </span>
                                <select
                                    value={pageSize}
                                    onChange={(e) => setPageSize(Number(e.target.value))}
                                >
                                    {[5,10,15].map((pageSize) => (
                                        <option key={pageSize} value={pageSize}>
                                            {pageSize}
                                        </option>
                                    ))}
                                </select>
                                <span> per page</span>
                            </div>
                        </div>
                    </div>
                    {/* ********** End search section ********** */}

                    {/* ********** Start Show and Hide section ********** */}
                    <h1 className='show-hide-state'>Show and Hide columns:</h1>
                    <div className='show-hide-checkboxes'>
                        <ShowHideColumns getToggleHideAllColumnsProps={getToggleHideAllColumnsProps} allColumns={allColumns} />
                    </div>
                    {/* ********** End Show and Hide section ********** */}

                    <table {...getTableProps()} className="table table-striped">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                        >
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? <i class="fa fa-sort-down"></i>
                                                        : <i class="fa fa-sort-up"></i>
                                                    : <i class="fa fa-sort-up"></i>
                                                    }
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                page.length > 0 && page.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => {
                                                if (cell.column.id == 'status' && cell.value == 'active') {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}
                                                        >
                                                            <span className="mobile">{cell.column.Header} </span>
                                                            <div className='active-status'>
                                                                <div className='circle'></div>
                                                                {cell.render('Cell')}
                                                            </div>
                                                        </td>
                                                    )
                                                } else if (cell.column.id == 'status' && cell.value == 'inactive') {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}
                                                        >
                                                            <span className="mobile">{cell.column.Header}</span>
                                                            <div className='inactive-status d-flex'>
                                                                <div className='circle'></div>
                                                                {cell.render('Cell')}

                                                            </div>
                                                        </td>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}

                                                        >
                                                            <span className="mobile">{cell.column.Header} </span>
                                                            {cell.render('Cell')}
                                                        </td>
                                                    )
                                                }

                                            })}
                                        </tr>
                                    )
                                }) || (
                                    <tr className='text-center'>
                                        <td colSpan="5">No Results</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>

                    {/* ********** Start Pagination section ********** */}
                    {page.length > 0 && (
                        <TablePagination
                            page={page}
                            gotoPage={gotoPage}
                            previousPage={previousPage}
                            nextPage={nextPage}
                            canPreviousPage={canPreviousPage}
                            canNextPage={canNextPage}
                            pageOptions={pageOptions}
                            pageSize={pageSize}
                            pageIndex={pageIndex}
                            setPageSize={setPageSize}
                            dataLength={rows.length}
                        />
                    )}
                    {/* ********** End Pagination section ********** */}

                </div>


            </div>

        </div>
    );
}

export default Table;