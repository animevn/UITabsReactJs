import React, {useState} from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import {HomeContent, ContactContent, ProfileContent} from "./data";
import {useTheme } from '@material-ui/core/styles';


function Home() {
  const theme = useTheme();
  const width = {xs:12, sm:12, md:12, lg:10, xl:9};
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function a11yProps(index) {
    return {
      id: `tab${index}`,
      'aria-controls': `tab${index}`,
    };
  }

  const TabPanel = (props)=>{
    const { children, value, index, ...other } = props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`tab{index}`}
        aria-labelledby={`tab${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  return (
    <Grid container direction="row" justify="center">
      <Grid item {...width}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Profile" {...a11yProps(1)} />
            <Tab label="Contact" {...a11yProps(2)} />

          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {HomeContent}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {ProfileContent}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {ContactContent}
          </TabPanel>
        </SwipeableViews>

      </Grid>
    </Grid>
  )
}

export default Home;