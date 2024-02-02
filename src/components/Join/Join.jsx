import React, { useRef } from "react";
import  './Join.css'
import emailjs from '@emailjs/browser'

const Join =()=>{
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_7d0wpyj', 'template_yx85x8g', form.current, 'yiuam6vf-sBiajEOM')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
	  };
	
	return (
<div className="Join">
	<div className="left-j">
		<hr />
		<div><span className="stroke-text">READY TO</span><span>LEVEL UP</span>
		</div>
		<div><span>YOUR BOBY</span><span className="stroke-text">WITH US?</span></div>
	</div>
	<div className="right-j">
		<form ref={form} action="" className="email-container" onSubmit={sendEmail}>
			<input type="email" name="user_email" placeholder="Enter Your Email Address" />
			<button className="btn btn-j">Join Now</button>
		</form>
	</div>
</div>


	)
}
export default Join;