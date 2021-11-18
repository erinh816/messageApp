//rfce + tab => a function component
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./Message.css";

function Message({ message, username }) {
  //test if username equals to the user logged in
  //test if username is true
  const isUser = username === message.username;
  //so we can style only my message to a fixed style
  return (
    <Card className={`message ${isUser && "message__user"}`}>
      <CardContent>
        <Typography color="black" variant="h5" coponent="h2">
          {message.username}:{message.message}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
