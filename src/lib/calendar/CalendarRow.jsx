import React from 'react';
import Cell from './Cell'
class CalendarRow extends React.Component {
    generateCells(){
        let cells = [];
        let daysSize = this.props.rowDays.length;
        for(let i = 0; i < daysSize; i++){
            cells.push(<Cell
                key={i}
                cellDay={this.props.rowDays[i]}
                date={this.props.date}
                otherDate={this.props.otherDate}
                maxDate={this.props.maxDate}
                month={this.props.month}
                year={this.props.year}
                dateSelectedNoTimeCallback={this.props.dateSelectedNoTimeCallback}
                keyboardCellCallback={this.props.keyboardCellCallback}
                focusOnCallback={this.props.focusOnCallback}
                focusDate={this.props.focusDate}
                cellFocusedCallback={this.props.cellFocusedCallback}
            />);
        }
        return cells;
    }


    render(){
        let cells = this.generateCells();
        return(
            <div className="calendarGrid">
                {cells}
            </div>
        );
    }
}
export default CalendarRow
