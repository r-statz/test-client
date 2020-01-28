import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toName: '',
      toEmail: '',
      subject: '',
      // body: ''
      noun1: '',
      noun2: '',
      adjective1: '',
      adjective2: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = async () => {
    if (
      !this.state.toName.length ||
      !this.state.toEmail.length ||
      !this.state.subject.length ||
      !this.state.noun1.length ||
      !this.state.noun2.length ||
      !this.state.adjective1.length ||
      !this.state.adjective2.length
    ) {
      alert('All of the fields are required.');
    }
    try {
      const emailResponse = await fetch(
        `https://statz-server.herokuapp.com/api/email`,
        {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        }
      );
      await emailResponse.json();
    } catch (e) {
      console.log(e, 'e');
    }
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const button = {
      height: '30px',
      width: '100px',
      backgroundColor: 'yellow'
    };
    const inputStyle = {
      height: '30px',
      width: '300px',
      marginLeft: '30px',
      marginBottom: '20px'
    };
    const labelStyle = {
      marginLeft: '10px',
      marginRight: '40px'
    };
    return (
      <div>
        <form autoComplete="off">
        <input type='hidden' value='something'/>
          <label style={labelStyle}>
            To Name:
            <input
            autoComplete="off"
              style={inputStyle}
              name="toName"
              value={this.state.toName}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label style={labelStyle}>
            To Email:
            <input
              autoComplete="off"
              style={inputStyle}
              name="toEmail"
              value={this.state.toEmail}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label style={labelStyle}>
            Subject:
            <input
              style={inputStyle}
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label style={labelStyle}>
            Noun 1:
            <input
              style={inputStyle}
              name="noun1"
              value={this.state.noun1}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label style={labelStyle}>
            Noun 2:
            <input
              style={inputStyle}
              name="noun2"
              value={this.state.noun2}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label style={labelStyle}>
            Adjective 1:
            <input
              style={inputStyle}
              name="adjective1"
              value={this.state.adjective1}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label style={labelStyle}>
            Adjective 2:
            <input
              style={inputStyle}
              name="adjective2"
              value={this.state.adjective2}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button style={button} onClick={this.submitForm}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default App;
