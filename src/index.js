import React from "react";
import ReactDOM from "react-dom";

// You can try to run test demo in this file
// how to use ? you can read https://github.com/MuYunyun/cpreact/blob/master/.github/PULL_REQUEST_TEMPLATE.md
class App extends React.Component {
  render() {
    return (
      <div>hello, react</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)