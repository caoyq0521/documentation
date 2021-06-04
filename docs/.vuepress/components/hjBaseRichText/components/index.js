const modulesFiles = require.context('./', false, /\.vue$/);
const ToolComponents = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const allTools = getAllComponentsName();
/**
 * 获取对外组件名
 */
function getAllComponentsName () {
  return Object.keys(ToolComponents).map(item => item.replace(/^(\w){5}/, (a, b) => b.toLowerCase()));
}
export default {
  ToolComponents,
  allTools
};
