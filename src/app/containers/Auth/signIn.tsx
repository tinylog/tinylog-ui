import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IAuth } from '../../interfaces/index';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { autobind } from 'core-decorators';
import { ISignIn } from '../../interfaces';
const FormItem = Form.Item;
import './style.css';

interface SignInState extends ISignIn {
}

@inject('token', 'auth')
@autobind
@observer
class SignIn extends React.Component<IAuth, SignInState> {
  async handleSubmit (e: any) {
    e.preventDefault();
    const res = await this.props.auth.signIn({
      email: this.state.email,
      password: this.state.password
    })
    if (res.code === 200) {
      console.log('finish')
    }
  }
  handleInputEmail (event: any) {
    this.setState({
      email: event.target.value
    });
  }
  handleInputPass (event: any) {
    this.setState({
      password: event.target.value
    });
  }
  render () {
    return (
      <div className="auth">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            <Input prefix={<Icon type="mail"/>} type="email" placeholder="邮箱" onChange={this.handleInputEmail} />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码" onChange={this.handleInputPass}/>
          </FormItem>
          <FormItem>
              <Checkbox>记住密码</Checkbox>
              <a className="login-form-forgot" href="">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
              或 <Link to={'/signUp'}>开始注册!</Link>
          </FormItem>
        </Form>  
      </div>
    );
  }
}

export default SignIn;