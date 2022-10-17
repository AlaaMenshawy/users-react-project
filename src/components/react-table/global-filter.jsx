import React from 'react';
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) => {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    return (
        <div className='search-container'>
            <i className="fa fa-search"></i>
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`Search...`}

            />
        </div>
    );
}

export default GlobalFilter;
