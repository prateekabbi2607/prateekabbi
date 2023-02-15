import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "@mantine/core";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const UserMessages = () => {
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://prateekabbi-backend.herokuapp.com/messagesApi/getMessages")
      .then((data) => {
        setMessageArray(data.data);
      });
  }, []);

  return (
    <div style={{ padding: "26px 16px" }}>
      <Card
        shadow="lg"
        p="lg"
        style={{ backgroundColor: "#2a3748", marginBottom: 15 }}
      >
        <TableContainer sx={{ maxHeight: 315 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    // width: "100px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{
                    // width: "160px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  style={{
                    // width: "160px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Subject
                </TableCell>
                <TableCell
                  style={{
                    // width: "190px",
                    backgroundColor: "#2a3748",
                    color: "#f4c427",
                    borderBottom: "1px solid #f4b93b",
                  }}
                >
                  Message
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messageArray.map((message) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={message._id}
                  >
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {message.name}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      <a href={`mailto:$`}>{message.email}</a>
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {message.subject}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#fff",
                        borderBottom: "1px solid #f4b93b",
                      }}
                    >
                      {message.message}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default UserMessages;
