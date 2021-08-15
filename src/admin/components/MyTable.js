import { useQuery } from "@apollo/client";
import React, { useEffect, useImperativeHandle, useState } from "react";
import ReactPaginate from "react-paginate";
import { usePagination, useRowSelect, useTable } from "react-table";
import Spinner from "./Spinner";
const PAGE_SIZE = 5;

const MyTable = React.forwardRef(
    ({ columns, gqlQuery, dataParser = (v) => v, totalCountParser }, ref) => {
        const [controlledPageCount, setControlledPageCount] = useState(0);
        const [limit, setLimit] = useState(PAGE_SIZE);
        const [offset, setOffset] = useState(0);
        const { data, loading, error, refetch } = useQuery(gqlQuery, {
            variables: {
                limit: limit,
                offset: offset,
            },
        });

        useImperativeHandle(ref, () => ({
            refetch: refetch,
        }));

        const items = (data && dataParser(data)) || [];

        const tableInstance = useTable(
            {
                columns,
                data: items,
                initialState: {
                    pageIndex: 0,
                    pageSize: limit,
                }, // Pass our hoisted table state
                manualPagination: true, // Tell the usePagination
                // hook that we'll handle our own data fetching
                // This means we'll also have to provide our own
                // pageCount.
                pageCount: controlledPageCount,
            },
            usePagination
        );

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,

            //pagination
            pageOptions,
            page,
            state: { pageIndex, pageSize, selectedRowIds },
            gotoPage,
            previousPage,
            nextPage,
            setPageSize,
            canPreviousPage,
            canNextPage,

            // end pagination
        } = tableInstance;

        useEffect(() => {
            const totalCount = (data && totalCountParser(data)) || 0;
            setControlledPageCount(Math.ceil(totalCount / pageSize));
        }, [data]);

        useEffect(() => {
            setOffset(pageSize * pageIndex);
        }, [pageIndex, pageSize]);

        return (
            <div>
                {loading ? (
                    <div className="mb-4">
                        <Spinner />
                    </div>
                ) : (
                    <table className="table" {...getTableProps()}>
                        <thead>
                            {
                                // Loop over the header rows
                                headerGroups.map((headerGroup) => (
                                    // Apply the header row props
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            // Loop over the headers in each row
                                            headerGroup.headers.map(
                                                (column) => (
                                                    // Apply the header cell props
                                                    <th
                                                        {...column.getHeaderProps()}
                                                    >
                                                        {
                                                            // Render the header
                                                            column.render(
                                                                "Header"
                                                            )
                                                        }
                                                    </th>
                                                )
                                            )
                                        }
                                    </tr>
                                ))
                            }
                        </thead>
                        <tbody>
                            {
                                // Loop over the table rows
                                rows.map((row) => {
                                    // Prepare the row for display
                                    prepareRow(row);
                                    return (
                                        // Apply the row props
                                        <tr {...row.getRowProps()}>
                                            {
                                                // Loop over the rows cells
                                                row.cells.map((cell) => {
                                                    // Apply the cell props
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}
                                                        >
                                                            {
                                                                // Render the cell contents
                                                                cell.render(
                                                                    "Cell"
                                                                )
                                                            }
                                                        </td>
                                                    );
                                                })
                                            }
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                )}

                <nav aria-label="Page navigation example">
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={controlledPageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={(data) => {
                            const newPageIndex = data.selected;
                            gotoPage(newPageIndex);
                        }}
                        previousClassName="page-item"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                        containerClassName={"pagination justify-content-center"}
                        activeClassName={"active"}
                    />
                </nav>
            </div>
        );
    }
);

export default MyTable;
