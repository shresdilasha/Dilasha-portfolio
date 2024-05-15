import './Contact.css';

const Contact = () => {
  return (
    <div class="contact">
      <div class="Contact-info">
        <h1>Contact Me</h1>
        <ul>
          <li><i class="fa fa-envelope" ></i> dilasha.shrestha@gmail.com</li>
          <li><i class="fa fa-phone" ></i> +977-9818142010</li>
          <li></li>
          <div class="icon">
            <li><a href=" https://github.com/shresdilasha"><i class="fa fa-github" ></i></a></li>
            <li> <a href=" https://www.instagram.com/shresthadilasha"><i class="fa fa-instagram" ></i></a></li>
            <li><a href=""><i class="fa fa-linkedin" ></i></a></li>
            <li><a href=""><i class="fa fa-pinterest" ></i></a></li>
          </div>
        </ul>
      </div>
      <div class="send-info">
        <h1>Get in touch</h1>
        <br></br>
        <form>
          <input type='text' id='Name' name='Name' placeholder='Enter you full name.' />
          <input type='text' id='email' name='email' placeholder='Enter valid email.' />
          <textarea id='msg' name='msg' placeholder='Enter message.' rows={10} cols={50} />
        </form>
      </div>
    </div>


  )
}
export default Contact;
