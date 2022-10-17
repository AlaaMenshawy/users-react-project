import React from 'react';
import { forwardRef, useEffect, useRef } from "react";


const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <div className="checkbox-action">
            <label>
                <input type="checkbox" ref={resolvedRef} {...rest} />
                <span>All</span>
            </label>
        </div>
    );
});

const ShowHideColumns = ({getToggleHideAllColumnsProps , allColumns}) => {
    return (
        <>
            <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
            {
                allColumns.map((column) => (
                    <div className="checkbox-action" key={column.id}>
                        <label>
                            <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
                            <span>{column.Header}</span>
                        </label>
                    </div>
                ))
            }
        </>
    );
}

export default ShowHideColumns;