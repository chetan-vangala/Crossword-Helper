import React, {PropTypes} from 'react';

class Selector extends React.Component{

  constructor(props){
    super(props);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e){
    this.props.onSelect(e.target.value);
  }

  render(){
    return(
      <div>
        <select onChange={this.updateValue}>
          <option>15</option>
          <option>21</option>
        </select>
        <label>{this.props.name}</label>
      </div>
    );
  }
}

Selector.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Selector;
