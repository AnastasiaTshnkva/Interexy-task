import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from 'Layout/Layout';
import HomePage from 'Sceens/HomePage/HomePage';
import { persistor, store } from 'store/initStore';

const App = () => {
  return (
      <Provider store={store}>
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
              <Layout>
                <HomePage></HomePage>
              </Layout>
          </PersistGate>
      </Provider>
  )
};

export default App;