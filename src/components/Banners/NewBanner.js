import React from 'react';
import Input from '../UI/Input';
import classes from './NewBanner.module.css';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

function NewBanner(props) {
  return (
    <form className={classes.form}>
        <div className={classes.formTitle}>New Banner Form</div>
        <button className={classes.closeButton} onClick={props.closeForm}><CloseSharpIcon/></button>
        <Input 
        label={{for: 'Title'}} 
        input={{type: 'text',placeholder: 'Event Title'}}
        labelName='Event Title'/>
        <Input 
        label={{for: 'AgencyName'}} 
        input={{type: 'text',placeholder: 'Event Agency Name'}}
        labelName='Event Agency Name'/>
        <Input 
        label={{for: 'Phone'}} 
        input={{type: 'text',placeholder: 'Contact Number'}}
        labelName='Contact Number'/>
        <Input 
        label={{for: 'Venue'}} 
        input={{type: 'text',placeholder: 'Event Venue'}}
        labelName='Event Venue'/>
        <Input 
        label={{for: 'Website'}} 
        input={{type: 'text',placeholder: 'Event website'}}
        labelName='Event website'/>
        <Input 
        label={{for: 'title'}} 
        input={{type: 'date',placeholder: 'Event Date'}}
        labelName='Event Date'/>
        <button type='submit' className={classes.button}>Submit</button>
    </form>
  )
}

export default NewBanner