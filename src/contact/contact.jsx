import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import "../home/App.css";

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
      <form action="https://formspree.io/jawright94" method="POST">
        <input className="nameInput" placeholder="Name" type="text" name="name"/>
        <input className="emailInput" placeholder="Email" type="email" name="_replyto" />
        <textarea id="message" placeholder="Message..." type="text" name="message"/>
        <input type="submit" value="Send"/>
      </form>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1"></Typography>
      <br />
      <a onClick={handleClickOpen}>test</a>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
// const style = StyleSheet.create({
 
// })