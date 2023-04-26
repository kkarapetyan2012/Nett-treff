import React, { useState } from 'react';
import myData from '../../data/userData.json';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import theme from '../../theme/theme';
import DynamicInput from '../../components/Input/DynamicInput';
import { makeStyles } from '@mui/styles';
import img from '../../assets/images/Pic.png'
import img1 from '../../assets/images/NettTreff1.png'
import img2 from '../../assets/images/NettTreff2.png'
import inActiveImg from '../../assets/images/inactive.png'
import activeImg from '../../assets/images/activeImg.png'
import img3 from '../../assets/images/couple.png';
import next from '../../assets/images/next.png';
import back from '../../assets/images/back.png';

import Slider from "react-slick";

import useMediaQuery from '@mui/material/useMediaQuery';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  signupContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 142,
    paddingRight: 69,
    marginTop: 5,
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 42,
      paddingRight: 42,
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  infoContainer: {
    width: '100%',
    maxWidth: '612px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'calc(100vh - 220px)',
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      maxWidth: '100%',
      marginTop: 64,
    },
  },
  imgContainer: {
    width: '100%',
    maxWidth: 'calc(100% - 612px)',
    paddingLeft: 61,
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      paddingLeft: 0,
      marginTop: 16,
    },
  },
  laptopImage: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileImageBlock: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      margin: 'auto',
      width: '100%',
      maxWidth: 342,
    },
  },
  signupBlock: {
    backgroundColor: theme.palette.light.main,
    width: '100%',
    maxWidth: '612px',
    borderRadius: 16,
    boxShadow: '0px 0px 30px rgba(91, 105, 152, 0.2)',
    '&.MuiBox-root': {
      margin: 0,
      padding: '50px 50px 30px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 'calc(100% - 68px)',
      '&.MuiBox-root': {
        padding: '20px 20px 21px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'calc(100% - 16px)',
    },
  },
  signupTitle: {
    '&.MuiTypography-root': {
      marginTop: 0,
      textTransform: 'uppercase',
      fontSize: theme.typography.h1.fontSize, 
      lineHeight: theme.typography.h1.lineHeight, 
      color: theme.palette.primary.main, 
      fontWeight: theme.typography.h1.fontWeight, 
      fontFamily: theme.typography.h1.fontFamily,
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
        lineHeight: '19px',
      },
    }
  },
  signupForm: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      marginTop: 14,
    },
  },
  blockItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  optionStyle: {
    '&.MuiOutlinedInput-root, &.MuiTextField-root .MuiInputBase-root': {
      borderRadius: 12,
    },
    '&.MuiOutlinedInput-root, &.MuiTextField-root': {
      marginLeft: 24,
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
      },
    },
    
    '& fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    '&:hover fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    '& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    
    
  },
  errorsClass: {
    '& fieldset': {
        borderColor: 'red', // change the border color here
      },
      '&:hover fieldset': {
        borderColor: 'red', // change the border color on hover here
      },
      '&.Mui-focused fieldset': {
        borderColor: 'red', // change the border color when focused here
      },
      
    
},
    
    
  // },
  label: {
    fontWeight: 800,
    fontFamily: 'Manrope',
    color: theme.palette.primary.main,
    lineHeight: '22px',
    [theme.breakpoints.down('md')]: {
      marginBottom: 10,
      fontSize: 14,
      lineHeight: '19px',
      display: 'inline-block',
    },
  },
  labelInfo: {
    margin: '2px 0 0',
    fontSize: '8px',
    lineHeight: '11px',
    fontWeight: 400,
    width: '100%',
    maxWidth: '380px',
    paddingLeft: 20,
  },
  toSubmit: {
    '&.MuiButtonBase-root': {
      borderRadius: 12,
      padding: '10px 30px',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      marginLeft: 'auto',
      lineHeight: '22px',
      textTransform: 'uppercase',
      fontWeight: 500,
      '&:hover': {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    }
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 31,
  },
  paragraph: {
    lineHeight: '22px',
    fontWeight: 800,
    color: theme.palette.primary.main,
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      lineHeight: '16px',
    },
  },
  link: {
    color: theme.palette.link.main,
    lineHeight: '22px',
    marginLeft: 14,
    position: 'relative',
    fontFamily: 'Manrope',
    fontWeight: 800,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 4,
      left: 0,
      height: 1,
      width: '100%',
      backgroundColor: theme.palette.link.main,
    },
    [theme.breakpoints.down('md')]: {
      lineHeight: '16px',
      marginLeft: 8,
      fontSize: 12,
    },
  },
  footerBlock: {
    marginTop: 170,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  footerMenu_list: {
    display: 'flex',
    
  },
  footerMenu_item: {
    '&:not(:first-child)': {
      marginLeft: 40,
    }
  },
  footerMenu_link: {
    lineHeight: '22px',
    position: 'relative',
    fontFamily: 'Manrope',
    fontWeight: 500,
    color: theme.palette.primary.main,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 4,
      left: 0,
      height: 1,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    }
  },
  copyRight: {
    textAlign: 'center',
    marginTop: 8,
    lineHeight: '22px',
    fontFamily: 'Manrope',
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  secondImg: {
    marginLeft: 'auto',
    display: 'block',
    marginRight: 47
  },
  firstImg: {
    marginTop: -40,
    marginLeft: 10,
  },
  buttonsBlock: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  next: {
    '&.MuiButtonBase-root': {
      color: theme.palette.primary.main,
      fontSize: 10,
      lineHeight: '14px',
      fontWeight: 500,
      textTransform: 'uppercase',
      padding: 6,
      borderRadius: 8,
      backgroundColor: theme.palette.secondary.main,
      width: 'calc(50% - 6px)',
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
      },
    }    
  },
  nextImg: {
    marginLeft: 12,
  },
  prev: {
    '&.MuiButtonBase-root': {
      color: theme.palette.primary.main,
      fontSize: 10,
      lineHeight: '14px',
      fontWeight: 500,
      textTransform: 'uppercase',
      padding: 6,
      borderRadius: 8,
      backgroundColor: theme.palette.secondary.main,
      width: 'calc(50% - 6px)',
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
      },
    }
  },
  prevImg: {
    marginRight: 12,
  },
  thumbnailContainer: {
    '&.MuiBox-root': {
      marginTop: 15,
    },
  },
  thumbnailImg: {
    cursor: 'pointer',
    '&:not(:first-child)': {
      marginLeft: 16,
    },
  },
  error: {
    color: 'red',
    width: '100%',
    maxWidth: '380px',
    fontSize: '8px',
    lineHeight: '11px',
    fontWeight: 800,
    marginTop: '4px',
    paddingLeft: '10px',
  }
}));

const Signin = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width: 992px)');
  const [datas, setDatas] = useState([]);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [index, setIndex] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    setDatas(myData);
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleThumbnailClick = (index) => {
    setIndex(index);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully', datas);
      navigate('/home');
      localStorage.setItem('datas', JSON.stringify(datas))
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const userName = datas.map(user => user.username);
  const password = datas.map(user => user.password);

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.email) {
      formIsValid = false;
      errors['email'] = 'Email is required';
    } else if (formData.email === `${userName}@gmail.com`) {
      formIsValid = true;
      
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors['email'] = 'Email is invalid';
    }

    if (!formData.password) {
      formIsValid = false;
      errors['password'] = 'Password is required';
    } else if (formData.password === password) {
      alert(1)
      formIsValid = true;
    }

    setErrors(errors);
    return formIsValid;
};

const slideItems = [
  <div className={classes.blockItem}>
    <div>
      <span className={classes.label}>My email:</span>
      <DynamicInput 
        varinat='outlined'
        placeholder="your email address"
        // label="your email address"
        handleChange={handleChange}
        required={false}
        value={formData.email}
        hiddenLabel
        type="email"
        wrapperClassName={classes.optionStyle}
      />
      <div style={{ color: 'red' }}>{errors['email']}</div>
    </div>
  </div>,

  <div className={classes.blockItem}>
    <div>
      <span className={classes.label}>My password:</span>
      <DynamicInput 
        varinat='outlined'
        placeholder="create your password"
        handleChange={handleChange}
        value={formData.password}
        // label="create your password"
        hiddenLabel
        type="password"
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        wrapperClassName={classes.optionStyle}
      />
      <div style={{ color: 'red' }}>{errors['password']}</div>
    </div>
  </div>
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const validateNextSlide = (nextSlide) => {
    // Add your validation checks here
    validateForm();
    if (nextSlide < 0 || nextSlide > 1) {
      alert("Invalid slide");
      return false;
    }
    return true;
  };

  const handleBeforeChange = (current, next) => {
    if (!validateNextSlide(next)) {
      return false;
    }
    setCurrentSlide(next);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully', formData);
      // 
    }
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >NEXT</div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Button
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >Back</Button>
    );
  }
  const settings = {
    dots: true,
    beforeChange: handleBeforeChange,
    nextArrow: <SampleNextArrow />,
    // nextArrow: <Button type="submit">next</Button>,
    prevArrow: <SamplePrevArrow />,
    customPaging: function(i) {
      return (
        <a>
          <img className={classes.thumbnailImg}  key={i} src={i === index ? activeImg : inActiveImg} alt="" onClick={() => handleThumbnailClick(i)}  />
        </a>
      );
    },
    dotsClass: "slick-dots slick-thumb",

    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        vertical: false,
        verticalSwiping: false,
        adaptiveHeight: false,
        
        }
      },
    ]
  };
      
  return (
    <div className={classes.signupContainer}>
      <div className={classes.infoContainer}>
        <Box className={classes.signupBlock} sx={{ padding: theme.spacing(2), margin: theme.spacing(3) }} >
          <Typography variant="h1" className={classes.signupTitle} mt={2}>GET LOVELY CUTIES IN YOUR AREA!</Typography>
            <form onSubmit={handleSubmit} className={classes.signupForm}>

              {!matches ? 
                <div>
                  <Slider {...settings}>
                    {slideItems.map((item, i) => (
                      <div key={i}>
                        {item}     
                      </div> 
                    ))}
                    <button className="next-button" onClick={handleNextClick}>Next</button>
                  </Slider>
                </div> :
              
                <div >

                  <div className={classes.blockItem}>
                    <span className={classes.label}>My email:</span>
                    <DynamicInput 
                      varinat='outlined'
                      // label="your email address"
                      placeholder="your email address"
                      handleChange={handleChange}
                      value={formData.email}
                      hiddenLabel
                      type="email"
                      name="email"
                      required={false}
                      errors={errors}
                      errorClassName={classes.errorsClass}
                      wrapperClassName={classes.optionStyle}
                    />
                    <div className={classes.error}>{errors['email']}</div>
                  </div>
                  
                  <div className={classes.blockItem}>
                    <span className={classes.label}>My password:</span>
                    <DynamicInput 
                      varinat='outlined'
                      placeholder="create your password"
                      handleChange={handleChange}
                      value={formData.password}
                      hiddenLabel
                      type="password"
                      name="password"
                      showPassword={showPassword}
                      handleClickShowPassword={handleClickShowPassword}
                      handleMouseDownPassword={handleMouseDownPassword}
                      errors={errors}
                      errorClassName={classes.errorsClass}
                      wrapperClassName={classes.optionStyle}
                    />
                    <div className={classes.error}>{errors['password']}</div>
                  </div>
                  
                </div>}
              
              <Button type="submit" className={classes.toSubmit}>
                start!
              </Button>
            </form>

            <div className={classes.flexContainer}>
              <p className={classes.paragraph}>Yet don't have account?</p>
              <Link className={classes.link} to="/">Register</Link>
            </div>
        </Box>

        <footer className={classes.footerBlock}>
          <ul className={classes.footerMenu_list}>
            <li className={classes.footerMenu_item}>
              <a className={classes.footerMenu_link} href="https://www.nett-treff.com/c3RhdGljUGFnZS9wcml2YWN5cG9saWN5bmV0dC10cmVmZi5jb20=">Privacy Policy</a>
            </li>
            <li className={classes.footerMenu_item}>
              <a className={classes.footerMenu_link} href="https://www.nett-treff.com/c3RhdGljUGFnZS90ZXJtc25ldHQtdHJlZmYuY29t">Terms of Use</a>
            </li>
            <li className={classes.footerMenu_item}>
              <a className={classes.footerMenu_link} href="https://www.nett-treff.com/c3RhdGljUGFnZS90ZXJtcz9odG1sPXNhZmVkYXRpbmduZXR0LXRyZWZmLmNvbQ==">Safe Dating</a>
            </li>
            <li className={classes.footerMenu_item}>
              <a className={classes.footerMenu_link} href="https://www.nett-treff.com/support/contactUs">Contact Us</a>
            </li>
          </ul>
          <p className={classes.copyRight}>© Copyright {new Date().getFullYear()}, Kaleton Web s.r.o.</p>
        </footer>
      </div>
      <div className={classes.imgContainer}>
        <img className={classes.laptopImage} src={img} alt='nett-treff' />
        <div className={classes.mobileImageBlock}>
          <img className={classes.secondImg} src={img2} alt='nett-treff' />
          <img className={classes.firstImg} src={img1} alt='nett-treff' />
          <img className={classes.thirthImg} src={img3} alt='nett-treff' />
          <p className={classes.copyRight}>© Copyright {new Date().getFullYear()}, Kaleton Web s.r.o.</p>
        </div>
      </div>
    </div>
  );
};

export default Signin;

