import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatPage from "./ChatsPage";

function App() {
  const [user, setUsername] = useState(undefined);

  if(!user){
    return <AuthPage onAuth={(user) => setUsername(user)} />;
  }else{
    return <ChatPage user = {user} />;
  }
}
  
export default App;