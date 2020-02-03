import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "cc9bbcbce7710aaabe8f56065e3c843f";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch();
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return( 
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }

};
export default App;