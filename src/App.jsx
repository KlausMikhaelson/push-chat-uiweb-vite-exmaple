import "./polyfills.ts";
import {
  ChatViewComponent,
  ChatUIProvider,
  lightChatTheme,
} from "@pushprotocol/uiweb";
import './App.css'

function App() {

  return (
<div>  
  <ChatUIProvider env={"staging"} theme={lightChatTheme}>
        <ChatViewComponent
          chatId="69159d7bfdb8ee705e436decf8a425423d90b7e2b24ea53b9541d7fa45154ef3"
          limit={10}
        />
      </ChatUIProvider>
      </div>
  )
}

export default App
