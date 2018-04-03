import * as React from 'react';
import './index.css';
import { IBaseMsgPage, IHost } from '../../interfaces';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';
import { Table, Button, Modal, Form, Input, message, Select } from 'antd';
import Detail from '../../components/Detail';
const FormItem = Form.Item;
const Option = Select.Option;
const confirm = Modal.confirm;

interface WebsiteState {
  visible: boolean;
  domain: string;
}

@inject('auth', 'host', 'router')
@autobind
@observer
class Website extends React.Component<IBaseMsgPage, WebsiteState> {
  constructor (props: IBaseMsgPage, state: WebsiteState) {
    super(props, state);
    this.state = {
      visible: false,
      domain: ''
    }
  }
  async componentWillMount () {
    await this.props.host.getHost();
  }
  showModal () {
    this.setState({
      ...this.state,
      visible: true
    })
  }
  handleCancel = () => {
    this.setState({ 
      ...this.state,
      visible: false
    });
  }
  handleSubimt = async () => {
    if (!this.state.domain) {
      message.info('请输入待添加网站的域名');
      return;
    }
    const res = await this.props.host.postHost({
      timezone: '+08:00',
      domain: this.state.domain
    })
    if (res.code === 200) {
      message.info('添加成功')
      await this.props.host.getHost();
      this.handleCancel();
    }
  }
  handleInput = (event: any) => {
    this.setState({
      ...this.state,
      domain: event.target.value
    })
  }
  handleSelectChange = (val) => {
    this.props.host.setCurHost(val - 1);
  }
  handleDelete = async (val: IHost) => {
    var self = this;
    confirm({
      title: '是否确认删除此站点?',
      async onOk() {
        const res = await self.props.host.deleteHost(val.id);
        if (res.code === 200) {
          message.info('删除成功')
          await self.props.host.getHost();
        }
      }
    })
  }
  render () {
    const messages = [
      { name: '站点总数:', value: this.props.host.hosts.slice().length },
      { name: '当前站点:', value: this.props.host.domain }
    ]
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    }, {
      title: '域名',
      dataIndex: 'domain',
      key: 'domain'
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#" className="ant-dropdown-link" onClick={this.handleDelete.bind(this, record)}>删除</a>
        </span>
      )
    }]
    return (
      <div className="website-page">
        <div className="action-panel">
          <Button type="primary" onClick={this.showModal}>添加</Button>
          <Select placeholder="选择切换站点" style={{ marginLeft: 20, width: 250 }} onChange={this.handleSelectChange}>
            {
              this.props.host.hosts.slice().map((item, index) => {
                return (
                  <Option value={item.id} key={index}>{item.domain}</Option>
                )
              })
            }
          </Select>
        </div>
        <Detail title="当前站点" messages={messages}/>
        <Table
          columns={columns}
          dataSource={this.props.host.hosts.slice().map((item, index) => {
            item.key = index;
            return item;
          })}
        />
        <Modal 
          visible={this.state.visible}
          title="添加网站:"
          okText="添加"
          onOk={this.handleSubimt}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <FormItem label="网站地址">
              <Input onChange={this.handleInput}/>
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Website;