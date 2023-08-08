import { Fragment } from 'react';
import ApplicationRoutes from '../routes';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
  return (
    <Fragment>
      <Provider store={store} >
        <ApplicationRoutes />
      </Provider>
    </Fragment>
  )
}

export default App
