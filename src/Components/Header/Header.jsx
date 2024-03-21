import React from 'react';
import { useState } from 'react';
import menus from '../../JSON/header.json';
import logo from '../../assets/img/momondo.png';
import { Container, Nav, Navbar, NavDropdown, Modal,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [show, setShow] = useState(false);
  const Close=()=>setShow(false);
  const Open=()=>setShow(true);
  const [login,setLogin] = useState("LogIn");
  const[lstate,setLstate] = useState(true);
  const [details,setDetails] = useState({
    name : "sneha",
    pass : "123"
  });
  
  function Mainmenu({demo}){
        return <Link to={demo.link} className='text-light link'>{demo.label}</Link>
    }

  function checkLogin(){
      
      if(login=="LogIn"){
        let varName = document.getElementById("name").value;
        let varPass = document.getElementById("pass").value;

      if (varName == details.name && varPass == details.pass)
      {
        alert("Login Successfull !");
        setLogin("LogOut");
        setLstate(false);
      }
      else{
        alert("Register now !");
        let newName = prompt("Name");
        let newPass = prompt("Password");
        alert("Hello " + newName + " your password is **" + newPass[newPass.length-1]);
        setDetails({
          name : newName,
          pass : newPass
        });
        while (name == newName && pass == newPass)
        { 
          setLogin("Login");
          alert("Login Successfull !");
          setLstate(false);
        }
      }
      setShow(false);
      } 
    }
    
  function logOut(){
      setShow(false);
      let cnf = confirm("Do you want to Log out ?");
      if(cnf){
        setLogin("LogIn");
        location.reload();
      }
      else{
        setLogin("LogOut");
      }
     }

  return (
    <>
      <Navbar expand="lg" className='header Navbar-light'>
        <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {menus.map((item,index)=>{
                        return <Mainmenu demo={item} key={index}></Mainmenu>
                    })}
                </Nav>
                <NavDropdown title="Englisg (GBP)" className='text-light'>
                        <NavDropdown.Item href="#action/3.1">British</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">French</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">German</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='text-green ms-3' onClick={ lstate ? Open : logOut}> {login} </Nav.Link>

            </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>{login} Now </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <input className="form-control" type = "text" id="name" name="name"
               placeholder='User Name'></input> <br />
            </div>
            <div className="form-group">
              <input className="form-control" type = "password" id="pass" name ="pass"
               placeholder='Password'></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Close}>
            Cancel
          </Button>
          <Button variant="primary" onClick={checkLogin}>
           {login}
          </Button>
        </Modal.Footer>
      </Modal>
  

    </>
  )
}

//=====================USING Material UI=========================

// import * as React from 'react';
// import { AppBar, Box, Toolbar, IconButton, Typography ,Menu ,Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
// import logo from '../../assets/img/momondo.png';
// import menus from '../../JSON/header.json';
// import MenuIcon from '@mui/icons-material/Menu';
// import flag from '../../../public/usa.jpg';

// const pages = ['Flights','Hotels','Car Hire','Trip Finder','Inspirations'];
// const settings = ['Profile', 'Account','Dashboard','Logout'];
// const lang = ['English (GBP)' , 'Hindi',"Japnese"]

// export default function Header(){

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [Language,setLanguage] = React.useState(null);

//   const handleOpenNavMenu = (event) =>{
//     setAnchorElNav(event.currentTarget);}

//   const handleOpenUserMenu = (event) =>{
//     setAnchorElUser(event.currentTarget);}

//   const handleOpenLang = (event) =>{
//     setLanguage(event.currentTarget);}

//   const handleCloseNavMenu = (event) =>{
//     setAnchorElNav(null);}

//   const handleCloseUserMenu = (event) =>{
//     setAnchorElUser(null);} 

//   const handleCloseLang = (event) =>{
//     setLanguage(null);} 

//   return(
//     <>
//      <AppBar position="static" style={{background:'#161638'}}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             {/* LOGO */}
//             <img src={logo}></img>
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {menus.map((item,index) => (
//                 <MenuItem key={index} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{item.label}</Typography>
//                 </MenuItem>
//               ))}
              
//             </Menu>
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             {/* LOGO */}
//             <img src={logo} alt="logo"></img>

//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>

//           <Button sx={{color:"#fff"}} onClick={handleOpenLang} maxWidth="xl">
//             <img src={flag} alt="flag" width={30}/> &nbsp; English (GBP)
//           </Button>

//           <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={Language}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(Language)}
//               onClose={handleCloseLang}>

//               {lang.map((item) => (
//                 <MenuItem key={item} onClick={handleCloseLang}>
//                   <Typography textAlign="center">{item}</Typography>
//                 </MenuItem>
//               ))}

//             </Menu>

//           <Tooltip title="Open settings">

//             <IconButton onClick={handleOpenUserMenu} 
//             sx={{ color: "lightGreen",fontSize:"16px" }}>
//             Login
//             </IconButton>

//           </Tooltip>
           
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}>

//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}

//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </>
//   )
// }