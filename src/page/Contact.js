import React from "react";
import "../css/homePage/contact.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { LuMail } from "react-icons/lu";


function Contact() {
  return (
    <section>
      <div>
        <h1 className="f1 ">Contact us</h1>
        <p className="text-center cnt-t1 fonts-contact contact-t">
          <span className="fonts-contact contact-t">
            Home
          </span>
          <span className="fonts-contact ms-2">
            <BiRightArrowAlt  />
          </span>
         <span className="fonts-contact ms-2 contact-t" >
         contact us
         </span>
        </p>
      </div>
      <div className="row cnt-sec-2">
        <div className="col-lg-6 col-12 mx-auto text-center">
          <img
            src="https://demothemesflat.co/onatrixkit/wp-content/uploads/2022/12/img_testimonial_About-N5733US.png"
            sizes="(max-width: 970px) 100vw, 970px"
            className="contact-img"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-12 cnt-2-txt">
          <h3 className="first-txt fonts-contact  ">Let us know about your next project</h3>
          <div className="mt-5 registered_address row">
            <span className="locatin_icon col-lg-6 col-12  ms-4">
              <ImLocation />
            </span>
            <h2 className="sec-txt2-contact mt-3 col-lg-6 col-12 ms-4">
              Registered Address
            </h2>{" "}
            <br />
            <p className="w-75 ms-5 contect-pera contact-t">
              15th Floor, Unit No. 1B, GIFT One Building, Village Ratanpur,
              Taluka Gandhinagar-382355
            </p>
          </div>
          <div className="row mt-4 registered_address">
            <span className="locatin_icon col-lg-6 col-12  ms-4">
              <ImLocation />
            </span>
            <h2 className="sec-txt2-contact mt-3 col-lg-6 col-12 ms-4 fonts-contact">
              Correspondence Address
            </h2>{" "}
            <br />
            <p className="w-75 ms-5 fonts-contact contact-t">
              U-8, Jolly Plaza, AthwaGate, Surat-395001
            </p>
          </div>
          <div className="mt-4 registered_address row">
            <span className="locatin_icon col-lg-6 col-12 ms-4">
              <IoIosCall />
            </span>
            <h2 className="col-lg-6 col-12 sec-txt2-contact mt-3 ms-4  fonts-contact">
              {" "}
              Phone number
            </h2>
            <p className="ms-5 fonts-contact contact-t">0261-6794000</p>
          </div>
          <div className="mt-4   row">
            <span className="locatin_icon col-lg-6 col-12 ms-4">
              <LuMail />
            </span>
            <h2 className="col-lg-6 col-12 sec-txt2-contact mt-3 ms-4 ">
              {" "}
              Email address
            </h2>
            <p className="ms-5  contact-t ">
              <a className="mail" href="mailto:contact@arhamshare.com">
                contact@arhamshare.com
              </a>
              <a className="mail" href="mailto:grievances@arhamshare.com">
                grievances@arhamshare.com
              </a>
            </p>
          </div>
        </div>
      </div>

     <div className="map ">
     <div className="mai-img ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14880.56810885609!2d72.7927976554199!3d21.18651619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e77566930db%3A0x1abe4e7a2b647043!2sArham%20Share%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1699259083718!5m2!1sen!2sin" width="100%" height="550px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="map-txt  shadow ">
        <p class="text-map1">Request a call back</p>
        <h2 class="text-map2">Let us know about your<br/>next project</h2>
        <p className="text-map3 conatct-pera contact-t">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur, ligula semper sagittis lobortis, eros metus efficitur purus</p>
        <div class="container overflow-hidden text-center">
        <div class="row gy-5">
             <div class="col-6">
               <div class=" input-form">
                <input type="text" placeholder="Name "/>
               </div>
             </div>
             <div class="col-6">
               <div class=" input-form">
                <input type="text" placeholder="Phone " />
               </div>
             </div>
             <div class="col-6">
               <div class=" input-form">
                <input type="text" placeholder="Email address "/>
               </div>
             </div>
             <div class="col-6">
               <div class="input-form">
                <input placeholder="Financial consulting" />
               </div>
               </div>
              </div>
              </div>
              <button className=" mt-5  btn-d">
                Submit
              </button>
        </div>
     
     </div>
  
    </section>
  );
}

export default Contact;
