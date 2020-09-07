import React, { useState, useEffect } from "react";
import lostLogs from "./logs.js";

function LostLog() {
  const [logsReceived, setLogsReceived] = useState([]);
  const [logs, setLogs] = useState(lostLogs);

  function transferLogs(incomingLog) {
    setLogs(logs.slice(1));
    setLogsReceived([...logsReceived, incomingLog]);
  }

  useEffect(() => {
    if (logs.length) {
      const incomingLog = logs[0];
      if (incomingLog.id !== "920 cntd") {
        const receiveLog = setTimeout(() => {
          transferLogs(incomingLog);
        }, incomingLog.delay * 2000);
        return () => {
          clearTimeout(receiveLog);
        };
      }
    }
  });

  function LogItem(props) {
    if (props.lastLog || props.cntdLog) {
      return (
        <>
          <li key={props.index}>
            <strong>Log {props.id}</strong> {props.entry}
          </li>
          <li>
            {props.lastLog && <button>End Transmission</button>}
            {props.cntdLog && (
              <button onClick={() => transferLogs(logs[0])}>Continue</button>
            )}
          </li>
        </>
      );
    } else {
      return (
        <li key={props.index}>
          <strong>Log {props.id}</strong> {props.entry}
        </li>
      );
    }
  }

  return (
    <ol>
      {logsReceived.map((log, index) => {
        return (
          <LogItem
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
            index={log.index}
            id={log.id}
            entry={log.entry}
          />
        );
      })}
    </ol>
  );
}

export default LostLog;
