import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from '../../store/authSlice';
import { Button } from '@mui/material';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      navigate('/');
    };

    return (
        <div>
            <h1>Welcome to the home page!</h1>
            <Button onClick={handleLogout}>logout</Button>
        </div>
    );
};

export default Home;