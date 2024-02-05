import { useState } from 'react'
import './App.css'
import LogIn from './components/LogIn';
import MessageInputBar from './components/MessageInputBar';
import Messages from './components/Messages';
import { Box } from '@mui/material';

function App() {

  const borderPadding = 0.5;   // Border Padding

  // This is the current user that is logged in
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  // This is the current user that is selected (This will be the user that the current user is sending a message to, and it could be any other logged in user)
  const [currentSelectedUser, setCurrentSelectedUser] = useState<string | null>(null);

  // This is the current message that the user is typing and will keep track of what is in the text box
  const [message, setMessage] = useState<string | null>(null);

  const onUserLogIn = (username: string) => {
    console.log("New Login:", username); // API call that makes a new user and brings them to the main space
    setCurrentUser(username);
  }

  const onTextBoxChange = () => {
    // If the text box changes, update the message
    console.log("Text Box Changed");
    setMessage(message);
  }

  const onSendButtonClick = () => {
    console.log("Send Button Clicked"); // API call that sends the message to the selected user
  }

  const onLogOffClick = () => {
    console.log(currentUser, "Logged Off");
    // API call that logs the user off
    setCurrentUser(null);
  }

  const onUserSelectorClick = () => {
    console.log("User Selector");
  }

  // If there is no current user, show the login page
  if (currentUser == null) {
    return (
      <LogIn onUserLogIn={onUserLogIn} />
    )
  }
  // Otherwise, show the whole chat app where the user can send messages to other users
  return (
    <Box
      sx={{
        width: '98vw',
        height: '98vh',
        display: 'flex',
        flexDirection: 'column', // Stack children as a column
        lignItems: 'stretch', // Stretch children to fill the width
        margin: borderPadding
      }}
    >
      <Messages username={currentUser} />
      <MessageInputBar
        currentSelectedUser={currentSelectedUser}
        onUserSelectorClick={onUserSelectorClick}
        onTextBoxChange={onTextBoxChange}
        onSendButtonClick={onSendButtonClick}
        onLogOffClick={onLogOffClick}
      />
    </Box>
  );
};

export default App
