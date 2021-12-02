import React, {useState} from 'react';
import Background from '../../images/mortgage.svg'
import './form.css'
import {
    InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, 
    Heading, ImgWrap, Img
} from './Form1Elements';


const Form = () => {
    const [values, setValues] = useState({
        FirstName: "", MiddleName: "", LastName: "", DOB: "",
        Email: "", Phone: "", StreetAddress: "", City: "",
        Message: "", State: "", PostCode: "", Country: ""
    });

const [submitted, setSubmitted] = useState(false);
const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({...values, FirstName: event.target.value})
    }
    const handleMiddleNameInputChange = (event) => {
        setValues({...values, MiddleName: event.target.value})
    }
    const handleLastNameInputChange = (event) => {
        setValues({...values, LastName: event.target.value})
    }
    const handleDOBInputChange = (event) => {
        setValues({...values, DOB: event.target.value})
    }
    const handleEmailInputChange = (event) => {
        setValues({...values, Email: event.target.value})
    }
    const handlePhoneInputChange = (event) => {
        setValues({...values, Phone: event.target.value})
    }
    const handleStreetAddressInputChange = (event) => {
        setValues({...values, StreetAddress: event.target.value})
    }
    const handleCityInputChange = (event) => {
        setValues({...values, City: event.target.value})
    }
    const handleStateInputChange = (event) => {
        setValues({...values, State: event.target.value})
    }
    const handlePostCodeInputChange = (event) => {
        setValues({...values, PostCode: event.target.value})
    }
    const handleCountryInputChange = (event) => {
        setValues({...values, State: event.target.value})
    }
    const handleMessageInputChange = (event) => {
        setValues({...values, Country: event.target.value})
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if(values.Name && values.Email && values.Phone && values.Message) {
    //         setValid(true);
    //         emailjs.sendForm('service_dwhvbw5', 'template_cx9ve8e', event.target, 'user_bZYe7wtxHIQeQH9aU3Zwk').then(res=>{
    //           console.log(res);
    //         }).catch(err=> console.log(err));
    //     }
    //     setSubmitted(true);


    // }
    
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <Heading>Get started with us today!</Heading>
                            <div class="form-container">
                            <form class="register-form"  >
                                {submitted && valid ? <div className="success-message">Success! Thank you for submitting</div> : null}
                            {/* Uncomment the next line to show the success message */}
                            {/* <div class="success-message">Success! Thank you for registering</div> */}
                            <input
                            onChange={handleFirstNameInputChange}
                            value={values.FirstName}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="First Name"
                            name="Name"/>
                            {submitted && !values.FirstName ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleMiddleNameInputChange}
                            value={values.MiddleName}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="Middle Name"
                            name="Name"/>
                            {submitted && !values.MiddleName ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleLastNameInputChange}
                            value={values.LastName}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="Last Name"
                            name="Name"/>
                            {submitted && !values.LastName ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleDOBInputChange}
                            value={values.DOB}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="Date of Birth"
                            name="Name"/>
                            {submitted && !values.DOB ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleEmailInputChange}
                            value={values.Email}
                            id="email"
                            class="form-field"
                            type="email"
                            placeholder="Email"
                            name="Email"/>
                            {submitted && !values.Email ? <span id="email-error">Please enter a valid email</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handlePhoneInputChange}
                            value={values.Phone}
                            id="phone"
                            class="form-field"
                            type="tel"
                            placeholder="Phone"
                            name="Phone"/>
                            {submitted && !values.Phone ? <span id="phone-error">Please enter a phone number</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleStreetAddressInputChange}
                            value={values.StreetAddress}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="Street Address "
                            name="Name"/>
                            {submitted && !values.StreetAddress ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleCityInputChange}
                            value={values.City}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="City"
                            name="Name"/>
                            {submitted && !values.City ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleStateInputChange}
                            value={values.State}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="State"
                            name="Name"/>
                            {submitted && !values.State ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handlePostCodeInputChange}
                            value={values.PostCode}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="Post Code"
                            name="Name"/>
                            {submitted && !values.PostCode ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleCountryInputChange}
                            value={values.Country}
                            id="name"
                            class="form-field"
                            type="text"
                            placeholder="Country"
                            name="Name"/>
                            {submitted && !values.Country ? <span id="name-error">Please enter a first name</span> : null}
                            {/* Uncomment the next line to show the error message */}

                            <input
                            onChange={handleMessageInputChange}
                            value={values.Message}
                            id="message"
                            class="form-field"
                            type="text"
                            placeholder="Message"
                            name="Message"/>
                            {submitted && !values.Message ? <span id="message-error">Please enter a message</span> : null}
                            {/* Uncomment the next line to show the error message */}
                            <button class="form-field" type="submit">
                            Submit
                            </button>
                        </form>
                        </div>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={  Background } />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Form;
