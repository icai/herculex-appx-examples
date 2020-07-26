// x import Store from 'herculex';
// 不要直接import导入，分包文件会打包多一份，调用主包引用
const Store = getApp().herculex;
export default new Store({
  connectGlobal: true,
  state: {
    value: 0
  }
});
