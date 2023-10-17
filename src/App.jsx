import "./polyfills.ts";
import {
  ChatViewComponent,
  ChatUIProvider,
  lightChatTheme,
} from "@pushprotocol/uiweb";
import './App.css'

function App() {

  return (
<div style={{height: "70vh"}}>  
  <ChatUIProvider env={"prod"} theme={lightChatTheme}>
        <ChatViewComponent
          chatId="4ac5ab85c9c3d57adbdf2dba79357e56b2f9ef0256befe750d9f93af78d2ca68"
          limit={10}
        />
      </ChatUIProvider>
      </div>
  )
}

export default App
