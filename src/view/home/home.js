import React, {useEffect} from 'react';
import {Table} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {fetchEmployees} from "../../actions/employees";
import API from '../../services/api'

function HomeComponent() {
    const employees = useSelector(state => state.employees.employees);
    const dispatch = useDispatch();
    useEffect(() => {
        getEmployees().then()
    }, [])

    const pagination = {
        pageSize: 5,
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'employee_name',
            width: '20%',
        },
        {
            title: 'Age',
            dataIndex: 'employee_age',
            width: '20%',
        },
        {
            title: 'Salary',
            dataIndex: 'employee_salary',
            width: '20%',
        }
    ];

    const getEmployees = async () => {
        const data = await API.get(`api/v1/employees`).then((res => {
            if (res.status === 200) {
                return res.data.data
            } else {
                return []
            }
        })).catch(err => {
            console.error(err)
            return []
        })
        dispatch(fetchEmployees(data))
    }

    return (
        <div>
            <Table
                dataSource={employees}
                rowKey={record => record.id}
                columns={columns}
                pagination={pagination}
            >
            </Table>
        </div>
    );
}

export default HomeComponent;
