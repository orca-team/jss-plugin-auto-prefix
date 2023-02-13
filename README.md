# jss-plugin-auto-prefix

自动将 `jss` 样式的 `class` 名称，转换为以 `param-case` 规则命名，并添加前缀。适用于公共组件可读样式的自动生成，便于其它组件通过 `css` 的方式覆盖样式。

## 示例

```js
// 假设样式编写如下：
import autoPrefix from '@orca-fe/jss-plugin-auto-prefix';

jss.use(autoPrefix({ prefix: 'demo-comp' }));

const sheet = jss.createStyleSheet({
  root: {
    position: 'relative',
    color: 'red',
    backgroundColor: 'yellow',
  },
  mainButton: {
    backgroundColor: 'var(--primary-color)',
    cursor: 'pointer',
  },
});

// 输出的 classes
console.log(sheet.classes);
/**
 * 会为每个样式额外添加一个带前缀的class（明文）
 * {
 *   root: 'root-x-x demo-comp-root',
 *   mainButton: 'button-x-x demo-comp-main-button',
 * }
 */
```
