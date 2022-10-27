import React,{memo} from 'react';
import Map from '../../assets/img/map.jpg';
import styled from 'styled-components';


const ContactContainer = styled.div`
  width: 94%;
  margin: 0 30px;
  img {
    margin-top: 30px;
    width: 100%;
  }
  h3 {
    font-size: 20px;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
    font-weight: normal;
  }
  p {
    margin: 20px 0;
  }
  hr {
    width: 100%;
    border: 0.1px solid #eee;
  }
  input {
    height: 40px;
    margin-bottom: 15px;
    border-radius: 0;
    border: 0.2px solid #aaa;
    width: 94%;
  }
  button {
    border: 0;
    background-color: black;
    width: 150px;
    height: 50px;
    font-size: 13px;
    margin: 10px 0;
    color: white;
    &:hover {
      background-color: #aaa;
      color: black;
    }
  }
`;
const Contact = memo(() => {
  return (
    <ContactContainer>
      <div className="contact">
        <h3>Contact</h3>
        <hr />
        <p>Lets get in touch and talk about your next project.</p>
        <form className='info'>
            <input type="text" className="name" defaultValue="Name" required />
            <input type="email" className="email" defaultValue="Email" required />
            <input type="text" className="subject" defaultValue="Subject" required />
            <input type="text" className="comment" defaultValue="Comment" required />
            <button className="submit" type="submit">SEND MESSAGE</button>
        </form>
        <img src={Map} alt="map" />
      </div>
    </ContactContainer>
  );
});

export default Contact;