
class Image extends React.Component {

 constructor(){
      super();
      this.state = {image: "http://www.popoptiq.com/wp-content/uploads/2015/03/marshmallow-man.jpg"};

  }

  _showImage(newBook){
    let currentImage = this.state.image;

  if (currentImage){
    this.setState({image: null});
} else
{
      this.setState({image: "http://www.popoptiq.com/wp-content/uploads/2015/03/marshmallow-man.jpg"});
}
}
  render(){
    return (
      <div>
        <h1>Here is an image you don't care about!</h1>
        <img src={ this.state.image } />
        <Button click={ this._showImage.bind(this) } />
      </div>
    )
  }
}


class Button extends React.Component {
    _handleClick(){
      this.props.click();
    }
    render(){
      return (
        <div>
          <button onClick={ this. _handleClick.bind(this) } > REWIND </button>
        </div>
        );
     }
};







ReactDOM.render(<Image />, document.getElementById('app-container'));
