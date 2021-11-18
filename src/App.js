import React, { useState, useEffect } from "react";
import "./App.css";

import { Button, FormControl, InputLabel, Input } from "@mui/material";
import Message from "./Message";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "./firebase.js";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Lisa", message: "hey guys" },
    { username: "Lily", message: "whats up" },
  ]);
  const [username, setUsername] = useState("");

  //test
  console.log(input);
  console.log(messages);

  useEffect(() => {
    //run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //all of the documents are in the snapshot, snapshot.docs will give all of the documents under the collection
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
    //any changes happen to collection will run and catch by snapshot
  }, []);

  useEffect(() => {
    // const username = prompt("Please enter your name");
    setUsername(prompt("Please enter your name"));
  }, []);

  //all the logic to send a message goes
  const sendMessage = (event) => {
    event.preventDefault();

    //connect firebase, we just need to push in an object
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //spread out whatever in the messages & append the input
    //******we will delete this later and merge it to firebase */
    // setMessages([...messages, { username: username, message: input }]);
    //*******************************/
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
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
