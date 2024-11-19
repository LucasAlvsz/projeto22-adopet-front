import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const useSocket = (token) => {
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io('http://localhost:3000', {
      auth: {
        token: token,
      },
    });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Conectado");
    });

    socket.on("disconnect", () => {
      console.log("Desconectado");
    });

    socket.on("connect_error", (error) => {
      console.log("Erro de conexão: ", error);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [token]);

  return socketRef;
};

export default useSocket;
