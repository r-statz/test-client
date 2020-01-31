import React, { Component } from 'react';
// import flowers from './flowers.jpeg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toName: '',
      toEmail: '',
      subject: '',
      noun1: '',
      noun2: '',
      adjective1: '',
      adjective2: '',
      message: '',
      errors: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = async () => {
    try {
      const emailResponse = await fetch(
        // 'http://localhost:8000/api/email',
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
      const x = await emailResponse.json();
      if (x.hasOwnProperty('errors')) {
        this.setState({ errors: x.errors.errors, message: '' });
      } else {
        this.setState({ message: x.message, errors: [] });
      }
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
    const container = {
      height: '100vh',
      width: '100vw',
      textAlign: 'center', 
      // backgroundImage: `url(${flowers}`
    };
    const button = {
      height: '40px',
      width: '140px',
      backgroundColor: 'maroon',
      fontSize: '18px',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '4px'
    };
    const topInput = {
      marginTop: '60px',
      height: '30px',
      width: '300px',
      marginLeft: '30px',
      marginBottom: '20px',
      fontSize: '18px',
      paddingLeft: '10px'
    };
    const inputStyle = {
      height: '30px',
      width: '300px',
      marginLeft: '30px',
      marginBottom: '20px',
      fontSize: '18px',
      paddingLeft: '10px'
    };
    const success = {
      color: 'maroon',
      marginTop: '20px'
    };

    return (
      <div style={container}>
        <div autoComplete="off">
          <input type="hidden" value="something" />
          <input
            autoComplete="off"
            style={topInput}
            name="toName"
            placeholder="To name"
            value={this.state.toName}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            autoComplete="off"
            style={inputStyle}
            name="toEmail"
            placeholder="To email"
            value={this.state.toEmail}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            style={inputStyle}
            name="subject"
            placeholder="Subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            style={inputStyle}
            name="noun1"
            placeholder="Noun 1"
            value={this.state.noun1}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            style={inputStyle}
            name="noun2"
            placeholder="Noun 2"
            value={this.state.noun2}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            style={inputStyle}
            name="adjective1"
            placeholder="Adjective 1"
            value={this.state.adjective1}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            style={inputStyle}
            name="adjective2"
            placeholder="Adjective 2"
            value={this.state.adjective2}
            onChange={this.handleInputChange}
          />
          <br />
          <button style={button} onClick={this.submitForm}>
            SUBMIT
          </button>
          <h3 style={success}>{this.state.message}</h3>
          {this.state.errors.length ? (
            <div>
              {this.state.errors.map((value, index) => {
                return <div key={index}>{value}</div>;
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
