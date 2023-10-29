import Template from './components/walletConnect';
import Routers from './routes';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Template>
          <Routers />
        </Template>
      </Provider>
    </div>
  );
}

export default App;
