// 定义类别
class Link extends React.Component {
  // 呼叫浏览器开始动态生成内容
  render() {
    // 回传生成内容
    return(
      <div>
        <div>
          Cat:
          <a href="/CATandDOG/?c=cat&i=0">_0_</a>.
          <a href="/CATandDOG/?c=cat&i=1">_1_</a>.
          <a href="/CATandDOG/?c=cat&i=2">_2_</a>.
          <a href="/CATandDOG/?c=cat&i=3">_3_</a>.
          <a href="/CATandDOG/?c=cat&i=4">_4_</a>
        </div>
        <div>
          Dog:
          <a href="/CATandDOG/?c=dog&i=0">_0_</a>.
          <a href="/CATandDOG/?c=dog&i=1">_1_</a>.
          <a href="/CATandDOG/?c=dog&i=2">_2_</a>.
          <a href="/CATandDOG/?c=dog&i=3">_3_</a>.
          <a href="/CATandDOG/?c=dog&i=4">_4_</a>
        </div>
      </div>
    );
  }
};
// 把 Link 类别的动态生成内容填充进 linker 元件里
ReactDOM.render(
  <Link mode="code" />,
  document.getElementById('linker')
);