class OneRM extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange=this.handleChange.bind(this);
    this.handleChange=this.handleSubmit.bind(this);

    handleChange(event) {
      this.setState({value:event.target.value})
    }

    handleSubmit(event){
      alert('A value was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>1RM Bench:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
}