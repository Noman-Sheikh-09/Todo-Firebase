import React from "react";
import {
  Box,
  Button,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// import UseTaskList from "./UseTaskList";
import "./TaskListStyle.css";
export default function TaskList({tasks,
  ctaDeleteHandler,
  ctaUpdateHandler
}) {
  // const { tasks, ctaDeleteHandler, ctaUpdateHandler } = UseTaskList();
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {
          tasks.map((item, index) => (
            <TableRow key={index}>
              <TableCell
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  {item.task}
                </div>
                <div>
                  <Button>
                    <StarBorderIcon />
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => ctaDeleteHandler(item.docID)}
                  >
                    Del
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={()=>ctaUpdateHandler(item)}
                  >
                    Edit
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
