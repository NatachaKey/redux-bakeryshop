import  './Contact.css';

const Contacts = ()=>{
    return <div class="container">  
    <form action="https://formspree.io/f/mpzbnday" id="contact"  method="POST">
      <h3>Contact us</h3>
      <h4>We will answer you as soon as possible</h4>
      <fieldset>
        <input placeholder="Name" type="text" tabindex="1" required />
      </fieldset>
      <fieldset>
        <input placeholder="Email" type="email" tabindex="2"  name="email" required/>
      </fieldset>
      <fieldset>
        <textarea placeholder="Your message..." tabindex="5"  name="message"required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Enviando"> Submit</button>
      </fieldset>
     
    </form>
  </div>
}

export default Contacts;
;