import React, { Component } from 'react';
//action in redux
import { todosList } from '../action';
//using redux store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Blog extends Component {

  constructor(porps) {
    super(porps);
    this.state = {
      todos: ""
    }
  }

  componentWillMount() {
    this.props.todosList()
  }

  renderNow = () => {
    if (this.props.data.todos !== undefined) {
      return this.props.data.todos.map((val, i) => {
        return (
          <div key={i}>
            {val}
          </div>
        )
      })
    }
  }

  submitTodo = (e) => {
    e.preventDefault();
    this.props.data.todos.push(this.state.todos)
    this.setState({ todos: "" })
  }

  render() {
    return (
      <div>
        <h1>Todos With Redux</h1>
        {this.renderNow()}
        <form onSubmit={this.submitTodo}>
          <input type="text" name="todos" value={this.state.todos} onChange={e => this.setState({ todos: e.target.value })} />
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    todosList
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);