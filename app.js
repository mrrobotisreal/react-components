const App = () => (
  <section>
    <h1>Mitch's Delicious Grocery List</h1>
    <Items items={[`Eggs`, `Onion Bagels`, `Frank's Red Hot`, `Peppers`, `Orange Juice`]}/>
  </section>
)

class GroceryItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false
    }
  }

  onListItemClick() {
    console.log(`Don't! That tickles, hehe`);
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.items}</li>
    );
  }
}

const Items = (props) => (
  <ul>
    {
      props.items.map(item => <GroceryItems items={item} />)
    }
  </ul>
)

ReactDOM.render(<App />, document.getElementById('app'));