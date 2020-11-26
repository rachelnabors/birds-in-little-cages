import React, { useState, useEffect } from "react";
import lostLogs from "./logs.js";
import { Link } from "react-router-dom";

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
          <li>
            <strong>Log {props.id}</strong> {props.entry}
          </li>
          <li>
            {props.lastLog ? (
              <Link to="/" className="button">
                <button>End Transmission</button>
              </Link>
            ) : null}
            {props.cntdLog ? (
              <button onClick={() => transferLogs(logs[0])}>Continue</button>
            ) : null}
          </li>
        </>
      );
    } else {
      return (
        <li>
          <strong>Dating Log {props.id}</strong> {props.entry}
        </li>
      );
    }
  }

  function keyGen(text) {
    return (
      text.toString().split(" ").join("").toLowerCase() +
      text.length +
      Math.floor(Math.random() * (1000 - 0) + 0)
    );
  }
  return (
    <ol>
      {logsReceived.map((log, index) => {
        return (
          <LogItem
            key={keyGen(log.id)}
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
    </ol>
  );
}

export default LostLog;
