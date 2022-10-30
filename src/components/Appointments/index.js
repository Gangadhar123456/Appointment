import {Component} from 'react'

import {v4} from 'uuid'

class Appointment extends Component {
  state = {roleInput: '', appointmentList: []}

  onChangeTitle = event => {
    this.setState(event.target.value)
    console.log(event.target.value)
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {roleInput} = this.state
    const addAppointment = {
      id: v4(),
      role: roleInput,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, addAppointment],
    }))
  }

  render() {
    const {roleInput, appointmentList} = this.state
    console.log(appointmentList)
    return (
      <div>
        <form onSubmit={this.onAddAppointment}>
          <h1>Add Appointment</h1>
          <input value={roleInput} type="text" onChange={this.onChangeTitle} />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default Appointment
