import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Column from "./Column";
import Image from "./Image";

function App(){

  


    return(
<div className="container">
    <div className="card">
      <div className="row">
        <div className="col col-lg-6 col-sm-12 first">
           <Image src="./images/illustration-woman-online-desktop.svg"
                  alt="woman-img"
                  class="desktop-overlaid"
           />
           <div className="card-img-overlay">
           <Image src="./images/illustration-box-desktop.svg"
                  alt="box-img"
                  class="box-overlaid"
           />
          </div>
          </div>

        <div className="col col-lg-6 col-sm-12 second">
          <div className="card-body">
            <h1 className="card-title">FAQ</h1>
            <Column divclass="tns one"
                    h6class="members"
                    heading6="How many team members can i invite?"
                    paragraph="You are allowed a maximum of 5 people"
                    paragraphClass="memberparagraph"
                    
                    
            />
            <hr></hr>
            <Column divclass="tns two"
                    h6class="file-size"
                    heading6="What is the maximum upload file size"
                    paragraph="No more than 2GB.All files in your account must fit your allocated space"
                    paragraphClass="file-sizeparagraph"
            />
            <hr></hr>
            
            <Column divclass="tns three"
                    h6class="password"
                    heading6="How do i reset my password"
                    paragraph="Call our offices and we are sure to assist"
                    paragraphClass="passwordparagraph"
            />
            <hr></hr>
            <Column divclass="tns four"
                    h6class="subscription"
                    heading6="Can i cancel my subscription?"
                    paragraph="Yes you can,anytime"
                    paragraphClass="subscriptionparagraph"
            />
            <hr></hr>
            <Column divclass="tns five"
                    h6class="support"
                    heading6="Do you provide additional support?"
                    paragraph="We love supporting our customers"
                    paragraphClass="supportparagraph"
            />
          </div>
        </div>
      </div>
      </div>
      </div>
    );
}

export default App;