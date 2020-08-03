import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  makeStyles,
  useTheme,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Switch } from "@material-ui/core";

import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import NavFooter from "./components/NavFooter";
import LinkList from "./components/LinkList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Photography from "./components/Photography";
import SideNavPhoto from "./components/SideNavPhoto";
import Smile from "./components/Smile";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  views: {
    display: "flex",
    flexDirection: "column",
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

//App starts here
function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const styleIcon = !darkMode ? <NightsStayIcon /> : <WbSunnyIcon />;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <SideNavPhoto />

      <Divider />
      <div>
        <Divider />
        <NavFooter />
      </div>
      <Divider />

      <div>
        <LinkList color={darkMode ? "white" : "black"} />
      </div>

      <div
        style={{
          direction: "flex",
          position: "fixed",
          bottom: 0,
          width: 240,
        }}
      >
        <Divider />
        <div style={{ marginLeft: 80, padding: 10 }}>
          {styleIcon}
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
      </div>
    </div>
  );

  const styles = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <ThemeProvider theme={styles}>
        <div className={classes.root}>
          <CssBaseline />
          <Box component="span" position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Box>

          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>

          <div>
            <div style={{ minHeight: "100vh" }} id="home">
              <Home />
            </div>
            <div style={{ minHeight: "100vh" }} id="about">
              <About />
            </div>
            <div style={{ minHeight: "100vh" }} id="projects">
              <Projects />
            </div>
            <div style={{ minHeight: "100vh" }} id="photography">
              <Photography />
            </div>
            <div style={{ minHeight: "100vh" }} id="contact">
              <Contact />
            </div>
          </div>
        </div>
      </ThemeProvider>

      {/* Routes to handle switching between links */}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/photography" component={Photography} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default ResponsiveDrawer;
