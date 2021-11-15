import React, { useState, useEffect } from "react";
import "./App.css";

import { Button, FormControl, InputLabel, Input } from "@mui/material";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Lisa", text: "hey guys" },
    { username: "Lily", text: "whats up" },
    { username: "Lucy", text: "all good" },
  ]);
  const [username, setUsername] = useState("");

  //test
  console.log(input);
  console.log(messages);

  useEffect(() => {
    // const username = prompt("Please enter your name");
    setUsername(prompt("Please enter your name"));
  }, []);

  //all the logic to send a message goes
  const sendMessage = (event) => {
    event.preventDefault();
    //spread out whatever in the messages & append the input
    setMessages([...messages, { username: username, text: input }]);
    //set input to be blank afterwards
    setInput("");
  };

  return (
    <div className="App">
      <h1>hallo programmer</h1>
      <h2>Welcome {username}</h2>

      {/* input field */}
      {/* submit  button */}

      <form>
        <FormControl>
          <InputLabel>Enter a Message</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {/* messages themselves */}
      {messages.map((message) => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
