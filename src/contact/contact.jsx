import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import "../home/App.css";

function SimpleDialog({ onClose, selectedValue, open }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <form action="https://formspree.io/jawright94" method="POST">
        <input
          className="nameInput"
          placeholder="Name"
          type="text"
          name="name"
        />
        <input
          className="emailInput"
          placeholder="Email"
          type="email"
          name="_replyto"
        />
        <textarea
          id="message"
          placeholder="Message..."
          type="text"
          name="message"
        />
        <input type="submit" value="Send" />
      </form>
    </Dialog>
  );
}

export default SimpleDialog;
