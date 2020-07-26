import store from './store';

Page(store.register({
  // you can use mapActionsToMethods instead
  onLoad(options) {
    console.log('sub demo onLoad, options: ', options);
  },
  onReady() {
    console.log('sub demo onReady');
  },
  onShow() {
    console.log('sub demo onShow');
  },
  onHide() {
    console.log('sub demo onHide');
  },
  onUnload() {
    console.log('sub demo onUnload');
  }
}));
