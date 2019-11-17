import './clearButton.css';

class clearButton extends Component {
  render(){
  return (
    <div 
    className="input">
        {this.props.children}
    </div>
    )
  }
}

export default clearButton;