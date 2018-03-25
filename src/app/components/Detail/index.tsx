import * as React from 'react';
import Title from '../Title';
import './style.css';

interface IMessages {
  name: string;
  value: string;
}

interface DetailProps {
  title: string;
  messages: (IMessages)[];
}

class Detail extends React.Component<DetailProps, {}> {
  render () {
    const messages = this.props.messages.map((item, index) => {
      return (
        <p key={index}><span>{item.name}</span>{item.value}</p>
      )
    })
    return (
      <div className={'tl-detail-container'}>
        <Title title={this.props.title}/>
        <div className={'tl-detail-form'}>
          {messages}
        </div>
      </div>
    );
  }
}

export default Detail;