import React from 'react';


class Letter extends React.Component {
  constructor(props){
    super(props);

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      disabled: false,
      value: ""
    };
  }

  clickHandler(e){
    if (e.altKey === true) {
      if(this.state.disabled){
        this.setState({disabled: false});
      }
      else{
        this.setState({disabled: true, value: ""});
      }
    }
  }

  render(){
    const letterStyle = {
      backgroundColor: this.state.disabled ? '#000' : '#FFF'
    };

    return (
      <div className="letter-box" onClick={this.clickHandler}>
        <input maxLength="1" disabled={this.state.disabled} value={this.state.value} style={letterStyle} />
      </div>
    );
  }
}

export default Letter;
