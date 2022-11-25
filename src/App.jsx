import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'store/initStore';
import Layout from 'Layout/Layout';
import RootRouter from 'Routes/RootRouter';

const App = () => {
  return (
      <Provider store={store}>
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
              <BrowserRouter>
                  <Layout>
                      <RootRouter/>
                  </Layout>
              </BrowserRouter>
          </PersistGate>
      </Provider>
  )
};

export default App;