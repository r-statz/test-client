import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toName: '',
      toEmail: '',
      subject: '',
      body: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = async () => {
    try {
      const emailResponse = await fetch(`https://statz-server.herokuapp.com/api/email`, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        });
        await emailResponse.json();
    } catch(e) {
      console.log(e, "e")
    }

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          To Name:
          <input
            name="toName"
            value={this.state.toName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          To Email:
          <input
            name="toEmail"
            value={this.state.toEmail}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email Subject:
          <input
            name="subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email Body:
          <input
            name="body"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.submitForm}>SUBMIT</button>
      </form>
    );
  }
}

export default App;
