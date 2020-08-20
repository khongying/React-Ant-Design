import React from 'react';
import API from '../../services/api';
import {Table} from 'antd';

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {members: []};
        console.log(this.state)
    }

    async componentDidMount() {
        console.log('componentDidMount')
        await this.getMember();
    }

    async getMember() {
        await API.get(`api/users?page=2`).then((res => {
            if (res.status === 200) {
                this.setState({
                    members: res.data.data
                })
                console.log(this.state.members)
            } else {
                this.setState({
                    members: []
                })
            }
        })).catch(err => {
            console.error(err)
            this.setState({
                members: []
            })
        })
    }

    render() {

        const pagination = {
            pageSize: 5,
        }

        const columns = [
            {
                title: 'First name',
                dataIndex: 'first_name',
                width: '20%',
            },
            {
                title: 'Last name',
                dataIndex: 'last_name',
                width: '20%',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                width: '20%',
            }
        ];
        return (
            <div>
                <Table
                    dataSource={this.state.members}
                    rowKey={record => record.id}
                    columns={columns}
                    pagination={pagination}
                >
                </Table>
            </div>
        )
    }
}
