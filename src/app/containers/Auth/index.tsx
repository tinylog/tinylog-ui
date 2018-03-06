import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IAuth } from '../../interfaces/index';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import './style.css';

@inject('token')
@observer
class Auth extends React.Component<IAuth, {}> {
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render () {
    return (
      <div className="auth">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            <Input prefix={<Icon type="user"/>} type="email" placeholder="邮箱" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码" />
          </FormItem>
          <FormItem>
              <Checkbox>记住密码</Checkbox>
              <a className="login-form-forgot" href="">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
              或 <a href="">开始注册!</a>
          </FormItem>
        </Form>  
      </div>
    );
  }
}

export default Auth;