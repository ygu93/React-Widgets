import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    this.state =
      {date: new Date().toDateString(), time: new Date().toTimeString()};
  }

  componentDidMount(){
    this.setInterval();
  }

  setInterval(){
    window.setInterval(()=>{
      let time = new Date().toTimeString();
      this.setState({time});
    }, 1000);
  }

  render(){
    return(
      <div className="clock">
        <h1 className="clock-title">Clock</h1>
        <ul className="clock-table">
          <div>
            <h2>Time:</h2>
            <h2>Date:</h2>
          </div>
          <div>
            <li>{this.state.time}</li>
            <li className="clock-date">{this.state.date}</li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Clock;
