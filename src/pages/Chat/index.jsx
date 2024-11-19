import { io } from "socket.io-client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import WorkingInProgress from "../../components/WorkingInProgress";
import { useEffect, useContext } from "react";
// import { BackgroundColor } from "styled-icons/foundation";
import { AuthContext } from "../../providers/AuthProvider";
import useSocket from "../../hooks/useSocket";

const Chat = () => {
  //   const [isConnected, setIsConnected] = useState(socket.connected);
  const { user } = useContext(AuthContext);
  const socketRef = useSocket(user.token);

  useEffect(() => {
    if (socketRef.current) {
      const socket = socketRef.current;
      console.log("Socket:", socket);

      socket.on("server-message", (message) => {
        console.log("Mensagem do servidor:", message);
      });

      return () => {
        socket.off("server-message");
      };
    }
  }, [socketRef]);
  return (
    <main>
      <Header />
      {/* <WorkingInProgress  */}

      <p
        onClick={() => {
          console.log("teste");
          socketRef.current.emit("message", { data: "data" });
        }}
      >
        teste
      </p>
      <Footer />
    </main>
  );
};

export default Chat;
