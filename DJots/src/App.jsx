import Template from './components/walletConnect';
import Routers from './routes';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import 'animate.css';

function App() {
  return (
    <div className='animate__backInDown'>
      <Provider store={store}>
        <Template>
          <Routers />
        </Template>
      </Provider>
    </div>
  );
}

export default App;
