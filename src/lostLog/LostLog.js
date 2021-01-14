import React, { useState, useEffect, useRef, useCallback } from "react";
import logs from "./logs.js";
import { Link as ReactLink } from "react-router-dom";
import {
  ListItem,
  Button,
  OrderedList,
  DarkMode,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        background: "black",
        height: "100%",
        overflow: "auto",
      },
      "#root": {
        height: "100%",
        overflow: "auto",
      },
      ol: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "flex-end",
        minHeight: "100%",
        scrollBehavior: "smooth",
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
        },
        to: {
          opacity: 1,
        },
      },
    }),
  },
});

function LogItem(props) {
  if (props.lastLog || props.cntdLog) {
    return (
      <>
        <ListItem fontFamily="mono" w="100%" maxWidth="50rem">
          <strong>Dating Log {props.id}</strong> {props.entry}
        </ListItem>
        <ListItem fontFamily="mono" w="100%" maxWidth="50rem">
          {props.lastLog ? (
            <Button as={ReactLink} to="/">
              End Transmission
            </Button>
          ) : null}
          {props.cntdLog ? (
            <Button
              onClick={() => props.transferLogs(props.lostLogs.current[0])}
            >
              Continue
            </Button>
          ) : null}
        </ListItem>
      </>
    );
  } else {
    return (
      <ListItem fontFamily="mono" w="100%" maxWidth="50rem">
        <strong>Dating Log {props.id}</strong> {props.entry}
      </ListItem>
    );
  }
}

function LostLog() {
  // The array of logs we've received
  // When it changes, React will map each log onto a list item
  const [logsReceived, setLogsReceived] = useState([]);
  // The array of logs we must read from. TBH, React doesn't need to track this, does it?
  // const [logs, setLogs] = useState(lostLogs);
  const lostLogs = useRef(logs);

  // need to access the logList as it grows so we can scroll to the bottom
  // put it in a ref for future use!
  const logList = useRef(null);

  // Moves a log from lostLogs to logsReceived
  const transferLogs = useCallback(
    (incomingLog) => {
      // This function adds a log from lostLogs to logsReceived, triggering re-render
      setLogsReceived([...logsReceived, incomingLog]);
      // and removes that entry from the logs array
      lostLogs.current = lostLogs.current.slice(1);
    },
    [logsReceived]
  );

  useEffect(() => {
    if (lostLogs.current.length) {
      const incomingLog = lostLogs.current[0];
      if (incomingLog.id !== "920 cntd") {
        const receiveLog = setTimeout(() => {
          transferLogs(incomingLog);
        }, incomingLog.delay * 2000);
        return () => {
          clearTimeout(receiveLog);
        };
      }
    }
  }, [transferLogs]);

  useEffect(() => {
    logList.current.scrollIntoView(false);
  }, [transferLogs]);

  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
        <OrderedList ref={logList}>
          {logsReceived.map((log, index) => {
            return (
              <LogItem
                key={log.id}
                cntdLog={
                  lostLogs.current.length &&
                  (log.id === 920 || log.id === "920 cntd") &&
                  index + 1 === logsReceived.length
                }
                lastLog={
                  !lostLogs.current.length &&
                  (log.id === 920 || log.id === "920 cntd") &&
                  index + 1 === logsReceived.length
                }
                id={log.id}
                entry={log.entry}
                transferLogs={transferLogs}
                lostLogs={lostLogs}
              />
            );
          })}
        </OrderedList>
      </DarkMode>
    </ChakraProvider>
  );
}

export default LostLog;
