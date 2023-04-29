import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Grid } from "@mui/material";
import theme from "./theme/theme";
import { makeStyles } from '@mui/styles';
import './App.css';

const Signup = lazy(() => import('./pages/Signup/Signup'));
const Signin = lazy(() => import('./pages/Signin/Signin'));
const Home = lazy(() => import('./pages/Home/Home'));

const useStyles = makeStyles(() => ({
  customContainer: {
    width: '100%',
    maxWidth: '1456px',
    margin: 'auto',
    padding: '50px 8px',
    display: 'flex',
    '@media screen and (max-width: 959.95px)': {
      padding: '20px 8px',
    }
  },
  logoBloock: {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 99,
    '@media screen and (max-width: 959.95px)': {
      width: 56,
      marginRight: 16,
    }
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Grid className={classes.customContainer} sx={{ flexDirection: 'column' }}>
          <BrowserRouter>
            <div className={classes.logoBloock}>
              <Link to="/"><img src="https://i.ibb.co/n6W2hCy/logo-Nett-Treff.jpg" alt="logo-Nett-Treff" border="0" /></Link>
            </div>
      
            <Routes>
              <Route  path="/" element={<Signup />} />
              <Route  path="/signin" element={<Signin />} />
              <Route  path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;



