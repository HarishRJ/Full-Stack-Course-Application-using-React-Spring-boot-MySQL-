//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import { Button } from "react-bootstrap";
import { ToastContainer,toast } from 'react-toastify';
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from './components/AddCourse';
import { Row ,Col,Container} from 'reactstrap';
import Menus from "./components/Menus";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Updatecourse from "./components/Updatecourse";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const btnHandle=()=>{
    toast.error("done",{
      position: "top-center"
    });
  };
  var cors = require('cors');
 
  return(
    
     
       <div>
     <Router>
     <ToastContainer/>
     <Container>
      <Header/>
      <Row>
         <Col md={4}><Menus/></Col>
         <Col md={8}><Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/add-course" element={<AddCourse/>} exact/>
           <Route path="/view-courses" element={<Allcourses/>} exact/> 
           <Route path="/about-course" element={<About/>} exact/> 
           <Route path="/contact-course" element={<Contact/>} exact/> 
           <Route path="/update-courses" element={<Updatecourse/>} exact/>
          </Routes>
         </Col>
       </Row>
     </Container>
     </Router>
    </div>
     
    
    );
    // <div> 
    //   <Header name='sakshi' title='first card' />
    //   <hr/>
    //   <Header name='harsh' title='second card'/>
    //   <hr/>
    //   <h1>This is my react js application</h1>
    //   <p>this is my paragram. I am currently learning react js</p>
    //   <p>because i want to develop application that calls my Rest Api's</p>
    //   <Header name='neha' title='third card'/>
    //   <hr/>
    //   <Header name='bhavya' title='fourth card'/>
    // </div> 
//  );
}

export default App;
