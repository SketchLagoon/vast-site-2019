import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Dialog from "@material-ui/core/Dialog";
import ForumIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    background: "#2d4179"
  }
});

const MobileNav = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  let history = useHistory();

  return (
    <>
      <BottomNavigation
        onChange={(e, newValue) => setValue(newValue)}
        value={value}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Giveaways"
          value="/"
          icon={<CardGiftcardIcon />}
          onClick={() => history.push("/")}
        />

        <BottomNavigationAction
          label="Services"
          value="/services"
          icon={<BusinessCenterIcon />}
          onClick={() => history.push("/services")}
        />

        <BottomNavigationAction
          label="Contact"
          value="nearby"
          icon={<ForumIcon />}
          onClick={() => setOpen(true)}
        />
      </BottomNavigation>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
      >
        <form action="https://formspree.io/jawright94@gmail.com" method="POST">
          <input placeholder="Name" type="text" name="name" />
          <input placeholder="Email" type="email" name="_replyto" />
          <input placeholder="Message..." type="text" name="message" />
          <input type="submit" value="Send" />
        </form>
      </Dialog>
    </>
  );
};

export default MobileNav;
