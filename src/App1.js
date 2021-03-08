import React, {Component} from 'react';

class TimerClass extends Component {
    state = {
      seconds: 0
    };
    componentDidMount() {
      this.timer = setInterval(
        () =>
          this.setState({
            seconds: this.state.seconds + 1
          }),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timer);
    }
    render() {
      const { seconds } = this.state;
      return (
        <div>
          <h2>Timer class: {seconds}</h2>
        </div>
      );
    }
  }

  export default TimerClass;