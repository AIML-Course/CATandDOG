const params = new URLSearchParams(document.location.search);
const i = (params.get("i") === undefined) ? 0 : params.get("i");
const c = (params.get("c") === undefined) ? "cat" : params.get("c");
const r = 10;
class Box extends React.Component {
  render() {
    var images = [];
    if(c == "cat" || c == "dog") {
      for (var j = 1; j <= r; j++) {
        var imagename = c + "/" + c + "." + (i * r + j) + ".jpg";
        console.log(imagename);
        images.push(imagename);
      }
    }
    var imagelist = images.map(function(imagename, index) {
      return (
        <img key={index} src={imagename} width="200" height="200"/>
      );
    }, this);
    return(
      <div> {imagelist} </div>
    );
  }
};
ReactDOM.render(
  <Box mode="code" />,
  document.getElementById('content')
);