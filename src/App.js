import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  //test
  console.log(input);
  console.log(messages);

  //all the logic to send a message goes
  const sendMessage = (event) => {
    event.preventDefault();
    //spread out whatever in the messages & append the input
    setMessages([...messages, input]);
    //set input to be blank afterwards
    setInput("");
  };

  return (
    <div className="App">
      <h1>hallo programmer</h1>

      {/* input field */}
      {/* submit  button */}
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          Send Message
        </button>
      </form>
      {/* messages themselves */}
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
