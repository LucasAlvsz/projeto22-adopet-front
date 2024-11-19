// useSocket.js
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const useSocket = (token) => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:3000', {
      auth: {
        token: token,
      },
    });

    socketRef.current.on("connect", () => {
      console.log("Conectado");
    });

    socketRef.current.on("disconnect", () => {
      console.log("Desconectado");
    });

    socketRef.current.on("connect_error", (error) => {
      console.log("Erro de conexão: ", error);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [token]);

//   const emit = (event, data) => {
//     socketRef.current.emit(event, data);
//   };

//   const on = (event, callback) => {
//     socketRef.current.on(event, callback);
//   };
  return socketRef.current;
};

export default useSocket;
