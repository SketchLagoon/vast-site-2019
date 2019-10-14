import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    background: "#5556d8",
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      />
    </BottomNavigation>
  );
}
