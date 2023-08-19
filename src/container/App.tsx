import { Fragment } from 'react';
import ApplicationRoutes from '../routes';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
  return (
    <Fragment>
      <Provider store={store} >
        <h1>App</h1>
        <ApplicationRoutes />
      </Provider>
    </Fragment>
  )
}

export default App
