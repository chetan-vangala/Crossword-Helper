import React from 'react';
import {Link} from 'react-router';
import Puzzle from '../puzzle/Puzzle';
import Selector from './Selector';

class HomePage extends React.Component {
  constructor(props){
      super(props);

      this.updateRows = this.updateRows.bind(this);
      this.updateColumns = this.updateColumns.bind(this);

      this.state = {
        rows: 15,
        columns: 15
      };
  }

  updateRows(count){
    const rowCount = parseInt(count, 10);
    this.setState({rows: isNaN(rowCount) ? 0 : rowCount});
  }

  updateColumns(count){
    const columnCount = parseInt(count, 10);
    this.setState({columns: isNaN(columnCount) ? 0 : columnCount});
  }

  render(){
    return (
      <div>
        <h1>Crossword Helper</h1>
        <div id="settings">
          <Selector name="Rows" onSelect={this.updateRows} />
          <Selector name="Columns" onSelect={this.updateColumns} />
        </div>
        <Puzzle rows={this.state.rows} columns={this.state.columns} />
      </div>
    );
  }
}

export default HomePage;
