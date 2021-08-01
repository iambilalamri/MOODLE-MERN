import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const Form = (props) => {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <form className={classes.root} {...other} autoComplete="off">
      {children}
    </form>
  );
};

export default Form;
