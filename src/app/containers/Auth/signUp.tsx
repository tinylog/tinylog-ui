import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IAuth } from '../../interfaces/index';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { autobind } from 'core-decorators';
import { ISignUp } from '../../interfaces';
const FormItem = Form.Item;
import './style.css';

interface SignUpState extends ISignUp {
  passwordConfirm: string;
}

@inject('token', 'auth')
@autobind
@observer
class SignUp extends React.Component<IAuth, SignUpState> {
  componentWillMount () {
    if (localStorage.getItem('token')) {
      this.props.history.push('/');
      return;
    }
  }
  async handleSubmit (event: any) {
    event.preventDefault();
    const res = await this.props.auth.signUp({
      email: this.state.email,
      password: this.state.password
    })
    if (res.code === 200) {
      this.props.history.push('/');
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
  handleInputPassConfirm (event: any) {
    this.setState({
      passwordConfirm: event.target.value
    });
  }
  render () {
    return (
      <div className="auth">
        <div className="auth-logo"/>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            <Input prefix={<Icon type="mail"/>} type="email" placeholder="邮箱" onChange={this.handleInputEmail} />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码" onChange={this.handleInputPass}/>
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock"/>} type="password" placeholder="确认密码" onChange={this.handleInputPassConfirm}/>
          </FormItem>
          <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                注册
              </Button>
              或 <Link to={'/signIn'}>返回登陆!</Link>
          </FormItem>
        </Form>  
      </div>
    );
  }
}

export default SignUp;