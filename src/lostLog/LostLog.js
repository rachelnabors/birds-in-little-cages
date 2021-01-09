import React, { useState, useEffect, memo, useCallback } from "react";
import lostLogs from "./logs.js";
import { Link as ReactLink } from "react-router-dom";
import {
  ListItem,
  Button,
  OrderedList,
  DarkMode,
  space,
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// TODO
// - Stop rerendering EVERY TIME—does the state need to impact the whole list?
// - Narrow it up a bit
// - nicer button color
// - center all

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        background: "black",
        height: "100%",
      },
      "#root": {
        height: "100%",
      },
      ol: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-end",
        height: "100%",
      },
      li: {
        listStyle: "none",
        animation: "fadeIn 400ms",
        color: "white",
        marginBottom: theme.space[2],
      },
      "@keyframes fadeIn": {
        from: {
          opacity: 0,
          height: 0,
        },
        to: {
          opacity: 1,
        },
      },
    }),
  },
});

function LostLog() {
  const [logsReceived, setLogsReceived] = useState([]);
  const [logs, setLogs] = useState(lostLogs);

  const transferLogs = useCallback(
    (incomingLog) => {
      setLogs(logs.slice(1));
      setLogsReceived([...logsReceived, incomingLog]);
    },
    [logs]
  );

  useEffect(() => {
    if (logs.length) {
      const incomingLog = logs[0];
      if (incomingLog.id !== "920 cntd") {
        const receiveLog = setTimeout(() => {
          transferLogs(incomingLog);
        }, incomingLog.delay * 200);
        return () => {
          clearTimeout(receiveLog);
        };
      }
    }
  });

  const LogItem = memo(({ lastLog, cntdLog, id, entry }) => {
    if (lastLog || cntdLog) {
      return (
        <>
          <ListItem fontFamily="mono">
            <strong>Log {id}</strong> {entry}
          </ListItem>
          <ListItem fontFamily="mono">
            {lastLog ? (
              <Button as={ReactLink} to="/">
                End Transmission
              </Button>
            ) : null}
            {cntdLog ? (
              <Button onClick={() => transferLogs(logs[0])}>Continue</Button>
            ) : null}
          </ListItem>
        </>
      );
    } else {
      return (
        <ListItem fontFamily="mono">
          <strong>Dating Log {id}</strong> {entry}
        </ListItem>
      );
    }
  });

  // function LogItem(props) {
  //   if (props.lastLog || props.cntdLog) {
  //     return (
  //       <>
  //         <ListItem fontFamily="mono">
  //           <strong>Log {props.id}</strong> {props.entry}
  //         </ListItem>
  //         <ListItem fontFamily="mono">
  //           {props.lastLog ? (
  //             <Button as={ReactLink} to="/">
  //               End Transmission
  //             </Button>
  //           ) : null}
  //           {props.cntdLog ? (
  //             <Button onClick={() => transferLogs(logs[0])}>Continue</Button>
  //           ) : null}
  //         </ListItem>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <ListItem fontFamily="mono">
  //         <strong>Dating Log {props.id}</strong> {props.entry}
  //       </ListItem>
  //     );
  //   }
  // }

  function keyGen(text) {
    return (
      text.toString().split(" ").join("").toLowerCase() +
      text.length +
      Math.floor(Math.random() * (1000 - 0) + 0)
    );
  }
  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
        <OrderedList>
          {logsReceived.map((log, index) => {
            return (
              <LogItem
                key={log.id}
                cntdLog={
                  logs.length &&
                  (log.id === 920 || log.id === "920 cntd") &&
                  index + 1 === logsReceived.length
                }
                lastLog={
                  !logs.length &&
                  (log.id === 920 || log.id === "920 cntd") &&
                  index + 1 === logsReceived.length
                }
                id={log.id}
                entry={log.entry}
              />
            );
          })}
        </OrderedList>
      </DarkMode>
    </ChakraProvider>
  );
}

export default LostLog;
