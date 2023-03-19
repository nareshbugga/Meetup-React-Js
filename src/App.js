/* eslint-disable no-unused-vars */
import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import RegisterContext from './Context/RegisterContext'

class App extends Component {
  state = {condition: true, name: '', topic: 'Arts and Culture', errorMsg: ''}

  updateName = name => {
    this.setState({name})
  }

  updateTopic = topic => {
    this.setState({topic})
  }

  updateCondition = () => {
    this.setState({condition: false})
  }

  updateError = errorMsg => {
    this.setState({errorMsg})
  }

  render() {
    const {name, topic, condition, errorMsg} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          errorMsg,
          condition,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          updateError: this.updateError,
          updateCondition: this.updateCondition,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
