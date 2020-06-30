import React from 'react';
import {Form, Input, InputNumber, Button} from 'antd';
import {toastNotification} from "../../actions/toast";
import {useDispatch} from "react-redux";
import {loadingEnd, loadingStart} from "../../actions";


function AboutComponent() {
    const dispatch = useDispatch();

    const layout = {
        labelCol: {span: 4},
        wrapperCol: {span: 8},
    };
    const tailLayout = {
        wrapperCol: {offset: 8, span: 16},
    };

    const onFinish = async (values) => {
        dispatch(loadingStart())
        dispatch(toastNotification({message: 'XXXXX', description: 'ZZZZZ'}))
        setTimeout(() => {
            dispatch(loadingEnd())
        }, 2000)
        // await API.post(`create`, values).then((res => {
        //     console.log(res)
        // })).catch((err => {
        //     console.log(err)
        // }))
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <Form
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{required: true, message: 'Please input your name!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Salary"
                    name="salary"
                    rules={[{required: true, message: 'Please input your salary!'}]}
                >
                    <InputNumber
                        style={{width: 200}}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[{required: true, message: 'Please input your age!'}]}
                >
                    <InputNumber style={{width: 200}}/>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AboutComponent;
