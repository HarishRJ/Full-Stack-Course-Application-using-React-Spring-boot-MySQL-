import React,{ useEffect} from 'react';
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import { Container,Button } from 'reactstrap';

    
    const Contact = () => {
            useEffect(()=>{
                document.title="About || Course Application";  
         },[]);
        return (<div>
            <label for="demo"><h4>E-mail:</h4></label>
            <br></br>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Email" id="demo" name="email"></input>
              <div class="input-group-append">
                <span class="input-group-text">@example.com</span>
              </div>
            </div>
            <label for="comment"><h4>Comment:</h4></label>
            <br></br>
            <textarea class="form-control" rows="5" id="comment"></textarea>
            <br></br>
            <button type="button" class="btn btn-success">Submit</button>
        </div>
            
            
        );
    };
    
    export default Contact;


