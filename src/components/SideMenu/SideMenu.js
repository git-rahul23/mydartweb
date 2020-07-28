import React, { useState, useRef } from 'react';

import {connect} from 'react-redux';
import {submit} from '../../redux/index';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import './SideMenu.css';

const theme = createMuiTheme({
    palette: {
      primary:  {
        main:   '#3F51B5'
      }
    },
  });

 const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      marginLeft : '30px',
      width : '330px'
    },
  }));

function SideMenu (props) {

    const [price,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0);
    const [invAmt,setInvAmt] = useState(0);
    const [shareName,setShareName] = useState('');

    const priceRef = useRef(null);
    const classes = useStyles();

    const handlePriceChange = (event) =>{
        setPrice(event.target.value);
    }
    const handleQuantityChange = (event) =>{
      setQuantity(event.target.value);
    }
    const handleIAmtChange = (event) =>{
      setInvAmt(event.target.value);
    }

    const handleNameChange = (event) => {
    
        let name = event.target.value;
        const showData = props.data.find(d => d.sname == name);
        setShareName(name);
        setPrice(showData.price);
        setQuantity(showData.quantity);
        setInvAmt(showData.investedAmount);

        console.log(showData);
    
    }

    const submitHandler = () => {
      const updatedValues = {
        sname: shareName,
        quantity: parseInt(quantity),
        price: parseInt(price),
        investedAmount : parseInt(invAmt),
        avgcost : invAmt/quantity,
        marketValue : price*quantity,
        lastCheckReturn : (price*quantity) - invAmt < 0 ? false : true,
        unrealPL : Math.abs((price*quantity) - invAmt),
        percentReturn : (Math.abs((((price*quantity) - invAmt) *100)/ invAmt)).toFixed(2),
        

      };
      props.submit(updatedValues);
    }


    return  <div> 
                    <Select
                    native
                    labelId="filled-select-native-simple"
                    value={shareName}
                    onChange={handleNameChange}
                    inputProps={{
                        name: 'select',
                        id: 'filled-select-native-simple',
                    }}
                    className="select-group"

                    >  <option></option>
                       { props.data ? (props.data.map((d) => <option value={d.sname}>{d.sname}</option> )) : <option></option>};
                      
                </Select>
                <ThemeProvider theme={theme}>
                     <TextField
                         className={classes.margin}
                        label="Price"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        onChange={handlePriceChange}
                        value ={price ? price : ''}
                    />
                 </ThemeProvider>

                 <ThemeProvider theme={theme}>
                     <TextField
                         className={classes.margin}
                        label="Quantity"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        onChange={handleQuantityChange}
                        value ={quantity ? quantity : ''}
                    />
                 </ThemeProvider>

                 <ThemeProvider theme={theme}>
                     <TextField
                         className={classes.margin}
                        label="Invested Amount"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        onChange={handleIAmtChange}
                        value ={invAmt ? invAmt : ''}
                    />
                 </ThemeProvider>

                 <button className="side-btn" onClick={submitHandler}>
                     SUBMIT
                 </button>
            </div>
}


const mapStateToProps = state => {
    return {
     data : state.data
    }
  }
  
  const mapDispatchToProps = dispatch => {
  
    return {
      submit : (updatedValues) => dispatch(submit(updatedValues)),
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(SideMenu);