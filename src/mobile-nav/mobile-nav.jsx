import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ForumIcon from '@material-ui/icons/Forum';
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    background: "#5556d8",
  }
});

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
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
  const [value, setValue] = React.useState("recents");
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();


  const handleClickOpen = () => {
    setOpen(true);
    console.log("modal click works! now get it to open...")
  };

  const handleClose = value => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedValue(value);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Giveaways"
        value="recents"
        icon={<CardGiftcardIcon />}
      />
      <BottomNavigationAction
        label="Services"
        value="favorites"
        icon={<BusinessCenterIcon />}
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
