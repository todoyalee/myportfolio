import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import {PropagateLoader} from 'react-spinners'




function Contact(props) {

    const [submitMessage, setSubmitMessage]= useState('')

    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
             setLoading(false)
        },1000)
    },[])

    const handleChange = (e)=>{
        const {name, value}= e.target;
        props.setMyInput(prev =>{
            return {
                ...prev, 
                [name]:value
            }
        })
    }

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(props.myInput);
        axios.post('/send',props.myInput)
        .then((response)=>{
            setSubmitMessage(response.data.message)
        }).then(
            ()=>{
                props.setMyInput(prev=>{
                        return{
                        name: '',
                        email:'',
                        description:''
                    }})
            });
        
    }

    const {name, email, description} = props.myInput;
    return (
        loading?
        <div className="load">
            
            <PropagateLoader></PropagateLoader>
        </div>
        :
        <div className="form">
            <Fade>
            <h3>If you want to contact me you can fill the form</h3>
            <h3 style ={{
                color:'green'
            }}>
                {submitMessage}
            </h3>
            <form>
                <input name="name" type="text" placeholder="Name"
                    onChange={handleChange} value={name}></input>
                <input name="email" type="email" placeholder="E-mail"
                    onChange={handleChange} value={email}></input>
                <textarea name="description" type="text" placeholder="Description"
                    onChange={handleChange} value={description}></textarea>
                <Fade bottom><button onClick={handleSubmit}>Send</button></Fade>
            </form>
            </Fade>
        </div>
        
    )
}

export default Contact
