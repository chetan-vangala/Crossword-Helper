import React, {PropTypes}  from 'react';
import Letter from './Letter.js';


class Puzzle extends React.Component {
  constructor(props){
    super(props);

    this.generatePuzzle = this.generatePuzzle.bind(this);

    this.state = {
      letterGrid: this.generatePuzzle(this.props.rows, this.props.columns)
    };
  }

  generatePuzzle(rows, columns){
    return Array.from(
      {length: rows},
      (c,i) => {
        return Array.from({length: columns}, (v,k) => k+1).map((curr,index) => {
          return <Letter key={index} />;
      });
    },
    this);
  }

  render(){
    let puzzleStyle = {
      height: ((this.props.rows * 30) + 2) + 'px',
      width: ((this.props.columns * 30) + 2) + 'px'
    };
    return (
      <div id="puzzle-board" style={puzzleStyle}>
        {
          this.state.letterGrid
        }
      </div>
    );
  }
}

Puzzle.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired
};

export default Puzzle;
