import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+'];
const ids = {
  7: 'seven',
  8: 'eight',
  9: 'nine',
  4: 'four',
  5: 'five',
  6: 'six',
  1: 'one',
  2: 'two',
  3: 'three',
  0: 'zero',
  '/': 'divide',
  '*': 'multiply',
  '-': 'subtract',
  '+': 'add' };


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastPressed: undefined,
      calc: '0',
      operation: undefined };


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { calc, lastPressed } = this.state;
    const { innerText } = e.target;

    switch (innerText) {
      case 'AC':{
          this.setState({
            calc: '0' });

          break;
        }
      case '=':{
          const evaluated = eval(calc);
          this.setState({
            calc: evaluated });

          break;
        }
      case '.':{
          const splitted = calc.split(/[\+\-\*\/]/);
          const last = splitted.slice(-1)[0];

          if (!last.includes('.')) {
            this.setState({
              calc: calc + '.' });

          }
          break;
        }
      default:{
          let e = undefined;
          if (ops.includes(innerText)) {
            if (ops.includes(lastPressed) && innerText !== '-') {
              const lastNumberIdx = calc.
              split('').
              reverse().
              findIndex(
              char => char !== ' ' && nums.includes(+char));

              e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
            } else {
              e = `${calc} ${innerText}`;
            }
          } else {
            e = calc === '0' ? innerText : calc + innerText;
          }
          this.setState({
            calc: e });

        }}

    this.setState({
      lastPressed: innerText });

  }

  render() {
    const { currentNum, calc } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "display", className: "display" },
      calc), /*#__PURE__*/

      React.createElement("div", { className: "nums-container" }, /*#__PURE__*/
      React.createElement("button", {
        id: "clear",
        className: "light-grey big-h ac",
        onClick: this.handleClick }, "AC"), /*#__PURE__*/



      React.createElement("button", {
        id: ids['/'],
        className: "orange divbtn",
        onClick: this.handleClick },

      ops[0]),

      nums.map((num) => /*#__PURE__*/
      React.createElement("button", {
        className: `dark-grey ${num === 0 && 'big-h'}`,
        key: num,
        onClick: this.handleClick,
        id: ids[num] },

      num)), /*#__PURE__*/


      React.createElement("button", {
        id: "decimal",
        className: "light-grey",
        onClick: this.handleClick }, ".")), /*#__PURE__*/




      React.createElement("div", { className: "ops-container" },
      ops.slice(1).map((op) => /*#__PURE__*/
      React.createElement("button", {
        key: op,
        className: "orange",
        onClick: this.handleClick,
        id: ids[op] },

      op)), /*#__PURE__*/


      React.createElement("button", {
        id: "equals",
        className: "orange big-v",
        onClick: this.handleClick }, "="))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));