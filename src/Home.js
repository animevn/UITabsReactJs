import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import {HomeContent, ContactContent, ProfileContent} from "./data";

function Home() {

  const [tab, setTab] = useState({tab1: true, tab2: false, tab3: false});

  function onHomeClick(event) {
    event.preventDefault();
    setTab({tab1: true, tab2: false, tab3: false});
  }

  function onProfileClick(event) {
    event.preventDefault();
    setTab({tab1: false, tab2: true, tab3: false});
  }

  function onContactClick(event) {
    event.preventDefault();
    setTab({tab1: false, tab2: false, tab3: true});
  }

  return (
    <Grid>


    </Grid>
  )
}

export default Home;