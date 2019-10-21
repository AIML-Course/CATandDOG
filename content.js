// 定义常数
// 从网页网址列输入变数抓取常数值
const params = new URLSearchParams(document.location.search);
const i = (params.get("i") === undefined) ? 0 : params.get("i");
const c = (params.get("c") === undefined) ? "cat" : params.get("c");
const r = 10;
// 定义类别
class Box extends React.Component {
  // 呼叫浏览器开始动态生成内容
  render() {
    // 依据常数值建立载入影像名单
    var images = [];
    if(c == "cat" || c == "dog") {
      for (var j = 1; j <= r; j++) {
        var imagename = c + "/" + c + "." + (i * r + j) + ".jpg";
        console.log(imagename);
        images.push(imagename);
      }
    }
    // 将影像名单转换为网页元件
    var imagelist = images.map(function(imagename, index) {
      return (
        <img key={index} src={imagename} width="200" height="200"/>
      );
    }, this);
    // 回传生成内容
    return(
      <div> {imagelist} </div>
    );
  }
};
// 把 Box 类别的动态生成内容填充进 content 元件里
ReactDOM.render(
  <Box mode="code" />,
  document.getElementById('content')
);