import { navigate } from './utils/navigate';
import { $ } from './utils/querySelector';
import { BASE_URL } from './constants/routeInfo';
import Router from './router';

function App($container) {
  this.$container = $container;

  const init = () => {
    $('.nav_wrapper').addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      e.preventDefault();
      const targetURL = e.target.href.replace(BASE_URL, '');
      navigate(targetURL);
    });

    new Router($container);
  };

  init();
}

export default App;
