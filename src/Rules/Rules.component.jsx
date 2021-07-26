import React from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ClearIcon from '@material-ui/icons/Clear';
import './Rules.styles.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 1px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 20px',
    },
  });

const Navbar = ({menuOpen, setMenuOpen}) => {
    
    const classes = useStyles();
    if (menuOpen) {
        return (
        <div className="topRightFixed" onClick={()=>setMenuOpen(!menuOpen)}>
                <ClearIcon className={classes.root}/>
            </div>
    );
        }else {

    return(
            <div className="topRightFixed" onClick={()=>setMenuOpen(!menuOpen)}>
                <HelpOutlineIcon className={classes.root} />
            </div>
        
    );
        }
}

export default Navbar;