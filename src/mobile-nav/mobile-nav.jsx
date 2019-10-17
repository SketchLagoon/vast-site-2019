import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ForumIcon from '@material-ui/icons/Forum';
import Dialog from "@material-ui/core/Dialog";
import "../home/App.css"

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    background: "#1c2755",
  }
});

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <form action="https://formspree.io/jawright94@gmail.com" method="POST">
        <input placeholder="Name" type="text" name="name" />
        <input placeholder="Email" type="email" name="_replyto" />
        <input placeholder="Message..." type="text" name="message"/>
        <input type="submit" value="Send" />
      </form>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(new URL(window.location.href).pathname.toString());
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    //set contact form to re-apply nav selection to page instead of contact here
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedValue(value);
  };

  const loadHome = () =>{
    window.location.href = "/";
  }

  const loadServices = () =>{
    window.location.href = "/services";
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
   
        <BottomNavigationAction
          label="Giveaways"
          value="/"
          icon={<CardGiftcardIcon />}
          onClick={loadHome}
        />
   
     
        <BottomNavigationAction
          label="Services"
          value="/services"
          icon={<BusinessCenterIcon />}
          onClick={loadServices}
        />
     
      
      <BottomNavigationAction
        label="Contact"
        value="nearby"
        icon={<ForumIcon />}
        onClick={handleClickOpen}
      />
       <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      
      
    </BottomNavigation>
  );
}
