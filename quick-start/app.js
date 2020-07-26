import Store from './store';
import herculex from 'herculex';
App(Store({
  onLaunch(options) {
  },
  onShow(options) {
    console.log('app onShowApp', options);
  },
  onHide() {
    console.log('app onHide');
  },
  onError(msg) {
    console.log('app OnError: ', msg);
  },
  herculex: herculex,
  globalData: {
  },
}));
