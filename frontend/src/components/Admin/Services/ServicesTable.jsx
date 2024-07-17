import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const theme = createTheme({
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          marginTop: "20px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "2px 5px",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
  },
});

function createData(
  id,
  service,
  serviceType,
  refill,
  cancel,
  provider,
  min,
  max,
  status
) {
  return {
    id,
    service,
    serviceType,
    refill,
    cancel,
    provider,
    min,
    max,
    status,
  };
}

const rows = [
  createData(
    270,
    "INSTAGRAM VIEWS - FAST Speed [ Start :0-15Min ] S2",
    "Default",
    "Off",
    "Off",
    "hackintown.in",
    10,
    2147483647,
    "Enabled"
  ),
  createData(
    271,
    "INSTAGRAM VIEWS - SUPER Fast Speed [ Start :0-10Min ] [ Cancel button ] S3",
    "Default",
    "Off",
    "Off",
    "hackintown.in",
    10,
    90000000,
    "Enabled"
  ),
  createData(
    272,
    "INSTAGRAM VIEWS - ULTRA FAST Speed [ RECOMMENDED ]",
    "Default",
    "Off",
    "Off",
    "hackintown.in",
    100,
    99999999,
    "Enabled"
  ),
  createData(
    273,
    "INSTAGRAM VIEWS - Fast Speed [ Start :0-40Min ] Cheapest",
    "Default",
    "Off",
    "Off",
    "hackintown.in",
    100,
    90000000,
    "Enabled"
  ),
  createData(
    274,
    "INSTAGRAM LIKES - BOT Mix - NON Refill [ 0-10min ]",
    "Default",
    "Off",
    "Off",
    "hackintown.in",
    10,
    200000,
    "Enabled"
  ),
];

const ServicesTable = () => {
  const handleEdit = (id) => {
    alert(`Edit service with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete service with ID: ${id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Refill</TableCell>
              <TableCell>Cancel</TableCell>
              <TableCell>Provider</TableCell>
              <TableCell>Min</TableCell>
              <TableCell>Max</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.service}</TableCell>
                <TableCell>{row.serviceType}</TableCell>
                <TableCell>{row.refill}</TableCell>
                <TableCell>{row.cancel}</TableCell>
                <TableCell>{row.provider}</TableCell>
                <TableCell>{row.min}</TableCell>
                <TableCell>{row.max}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(row.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default ServicesTable;
