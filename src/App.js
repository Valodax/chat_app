import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
    if (!localStorage.getItem("username")) return <LoginForm />;
    return (
        <ChatEngine
            height="100vh"
            projectID="98a6d893-6a05-4b38-9f69-b6a72c9c3058"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
