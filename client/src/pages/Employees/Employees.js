import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import useTable from "./../../components/useTable";
import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import * as employeeService from "./../../services/employeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
];

const Employees = () => {
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const classes = useStyles();
  const { TblContainer, TblHead, TblPagination } = useTable(records, headCells);
  return (
    <React.Fragment>
      <PageHeader
        title="New Employee"
        subTitle="Form design with Validation"
        icon={<PeopleAltIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />

        <TblContainer>
          <TblHead />
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.fullName}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>{record.mobile}</TableCell>
                <TableCell>{record.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </React.Fragment>
  );
};

export default Employees;
