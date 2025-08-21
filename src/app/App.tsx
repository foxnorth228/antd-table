import { store } from '@app/store/store';
import { ContentPage } from '@pages/content/ui/page';
import { Provider } from 'react-redux';

export function App() {
  return (
    <Provider store={store}>
      <ContentPage />
    </Provider>
  );
}
