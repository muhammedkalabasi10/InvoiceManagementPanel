 /* eslint-disable */
import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux'
import { createProduct } from '../../actions/productActions'
import { useLocation } from 'react-router-dom';

import { useSnackbar } from 'react-simple-snackbar'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: '#1976D2',
    marginLeft: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'white',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const AddProduct = ({ setOpen, open }) => {

    const location = useLocation()
    const [productData, setProductData] = useState({ name: '', price: '' })
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
       // eslint-disable-next-line 
       const [openSnackbar, closeSnackbar] = useSnackbar()


    useEffect(() => {
    },[location])
   

    const handleSubmitProduct =(e)=> {
        e.preventDefault()
          dispatch(createProduct(productData, openSnackbar))
        
        clear()
        handleClose()
    }

  const clear =() => {
    setProductData({ name: '', price: '' })
  }
    
  const handleClose = () => {
    setOpen(false);
  };


  const inputStyle = {
      display: "block",
      padding: "1.4rem 0.75rem",
      width: "100%",
      fontSize: "0.8rem",
      lineHeight: 1.25,
      color: "#55595c",
      backgroundColor: "#fff",
      backgroundImage: "none",
      backgroundClip: "padding-box",
      borderTop: "0",
      borderRight: "0",
      borderBottom: "1px solid #eee",
      borderLeft: "0",
      borderRadius: "3px",
      transition: "all 0.25s cubic-bezier(0.4, 0, 1, 1)"
  }

  const focus = {
    "input:focus, textarea:focus": { outline: "0", borderBottomColor: "#ffab00" }
  }
  

  return (
    <div>
        <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth>
            <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{paddingLeft: '20px', color: 'white'}}>
                New Product
            </DialogTitle>
            <DialogContent dividers>
           

          <div className="customInputs">
              <input 
                placeholder="Name" 
                style={inputStyle} 
                name='name' 
                type='text'  
                onChange={(e) => setProductData({...productData, name: e.target.value})}
                value={productData.name} 
              />

              <input 
                placeholder="Price" 
                style={inputStyle} 
                name='price' 
                type='text' 
                onChange={(e) => setProductData({...productData, price: e.target.value})}
                value={productData.price} 
              />
              
          </div>

            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleSubmitProduct} variant="contained" style={{marginRight: '25px'}} >
                Save Product
            </Button>
            </DialogActions>
      </Dialog>
        </div>
    </div>
  );
}

export default AddProduct