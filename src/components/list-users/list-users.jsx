import React, { useEffect, useState } from 'react';
import Table from "../react-table/react-table";
import { getAllUsers } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./list-users.css"




const ListUsers = (props) => {
    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'id', // accessor is the "key" in the data
                enableSorting: true
            },
            {
                Header: 'Name',
                accessor: 'name',
                enableSorting: true
            },
            {
                Header: 'Email Address',
                accessor: 'email', // accessor is the "key" in the data
            },
            {
                Header: 'Gender',
                accessor: 'gender',

            },
            {
                Header: 'Status',
                accessor: 'status', // accessor is the "key" in the data
            },
            // {
            //     Header: 'Created Date',
            //     accessor: 'createdDate',
            // },
            // {
            //     Header: 'Updated Date',
            //     accessor: 'UpdatedDate', // accessor is the "key" in the data
            // },
        ],
        []
    );

    useEffect(() => {
        props.getAllUsers();
    }, []);
    return (
        <>
            {
                props.isLoading == false && !props?.isApiFailed && props?.listUsers && props.listUsers.length > 0 ? (
                    <Table columns={columns} data={props.listUsers} />
                ) : (
                    props.isLoading == false && (
                        <div className="error-container">
                            <i class="fa fa-exclamation-circle"></i>
                            <h1 className='error-msg'>SomeThing Error happened, Please try again later</h1>
                        </div>
                    )
                )



            }
            {
                props?.isLoading == true && (
                    <div class="sm-overlay-loader show" id="overlay">
                        <i class="fa-spin fa fa-spinner"></i>
                    </div>
                )
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        listUsers: state.ListUsers?.data,
        isLoading: state.ListUsers?.isLoading,
        isApiFailed: state.ListUsers?.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAllUsers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)