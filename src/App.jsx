import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import store from './store/index'
import { GlobalStyle } from './style.js'


// const App = (props) => {
//   return (
//     <Fragment>
//       <GlobalStyle />
//       <Provider store={store}>
//         {props.children}
//       </Provider>
//     </Fragment>

//   );
// }

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </Fragment>
    );
  }
}


export default App