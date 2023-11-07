import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { SiAmazonapigateway } from "react-icons/si";
import { GiExecutionerHood } from "react-icons/gi";
import { SiPowerbi } from "react-icons/si";
import { FaStairs } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import mocap from '../assets/Images/mobile_pc_chart.png'
import "../css/homePage/About.css";
import vt1 from "../assets/Vactors/work-progress-concept-illustration/5097611.jpg";
import img1 from "../assets/Images/handsome-bearded-businessman-rubbing-hands-having-deal.jpg";
import img2 from "../assets/Images/young-bearded-man-with-striped-shirt.jpg";
import img3 from "../assets/Images/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg";

function AboutUs() {
  return (
    <section className="">
      <div className="about_img  ">
       <div className="about_txt">
       <h2 className=" pt-5 ps-5 ms-5 ">About US</h2>
          <span className="about_img_text tm1">Home</span>
          <span className="about_img_text tm2"> <MdOutlineKeyboardArrowRight/></span>
          <span className="about_img_text  tm3">About us</span>
      
       </div>
      </div>
      {/* --------------------core Ativities---------------------------- */}
      <div className="row  core_activities_sec padding_side pt-5">
        <div className="col-12 col-lg-6  pt-5">
          <img
            src={mocap}
            height="auto"
            width="100%"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-6 pt-5 ps-4 ">
          <h2 className="about_txt2  ">Core Activities</h2>
          <h3 className="line"></h3>
          <h5 className="about_pera bolt pt-3">
            Arham Group is Founded in 2010 to become India’s best Equity Broking
            House and the Largest Distribution Network
          </h5>
          <p className="about_pera pt-3">
            ARHAM is a Share Broking Company offering a comprehensive range of
            financial services including institutional and retail brokerage,
            online trading, depository services, IPOs, and insurance.
          </p>
          <p className="about_pera">
            ARHAM Group, founded 15 years ago, focuses on diverse talent and
            client focus, leveraging extensive knowledge in the share market to
            become a powerful entity.
          </p>
          <button className="btn1">Discover More </button>
        </div>
      </div>

      {/* ----------------------------mission vision----------------------------------- */}
      <div className="row w-75 text-center  mx-auto  mission_vision p_top">
        {/* <h2 className="">Providing you A World of Financial Planning & Company Accounting Services</h2> */}

        <div className="col-12 col-md-6 pt-5">
          <div className="mb-5">
            <h3 className="about_txt2 ">Our Mission</h3>
            <h3 className="line mx-auto"></h3>
          </div>
          <div className="pic_overlay  ">
            <img
              className=" image2 "
              src="https://finacia.radiantthemes.com/wp-content/uploads/2018/09/about-us-version-one-expert-three.png"
              alt=""/>
            <div className="pic_hover"></div>
          </div>

          <div className="  mx-auto mt-5">
            <h5 className="">One-to-One Service</h5>
            <p className="about_pera">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              commodo libero finibus eleifend nibh.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 pt-5">
          <div className="mb-5">
            <h3 className="about_txt2 ">Our Vision</h3>
            <h3 className="line  mx-auto"></h3>
          </div>
          <div className="pic_overlay ">
            <img
              className="  image2 "
              src="https://finacia.radiantthemes.com/wp-content/uploads/2018/09/about-us-version-one-expert-two.png"
              alt=""/>
            <div className="pic_hover"></div>
          </div>

          <div className=" mx-auto mt-5">
            <h5 className="">Business Analytic Graph</h5>
            <p className="about_pera">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              commodo libero finibus eleifend nibh.
            </p>
          </div>
        </div>
      </div>

      {/* -----------------------why choose arham section----neww----------------------------- */}

      {/* -----------------------why choose arham section--------------------------------- */}

      <div className=" text-center why_choose_arham   text-center">
        <div className="">
          <h2 className="about_txt2">Why Choose Arham? </h2>
          <h3 className="line mx-auto "></h3>
        </div>
        <p className=" about_pera pt-4">
          ALWAYS FIRST WITH INNOVATIVE TRADINGTECHNOLOGY, ANALYTICS,EDUCATIONAND
          CUSTOMERSERVICE SINCE 2010
        </p>

        <div className="d-flex flex-wrap ">
          {/* -------------------------------- */}
          <div className="about-item row col-lg-4 col-sm-6 text-start cover  item1">
            <div className="col-2 ">
              <span className="about_icons">
                <BsCashCoin />
              </span>
            </div>
            <div className="col-10 col-md-10 pt-2 ps-5 ">
              <h6>No HiddenCost</h6>
              <p className="about_pera">
                Our APIs come with absolutely no hidden cost.
              </p>
            </div>
          </div>
          {/* -------------------------------- */}
          <div className="about-item row col-lg-4 col-sm-6   text-start  cover">
            <div className="col-2 ">
              <span className="about_icons">
                <GiReceiveMoney />
              </span>
            </div>
            <div className="col-10 col-md-10 pt-2 ps-5">
              <h6>Own Strategies</h6>
              <p className="about_pera">
                Helpful for traders looking for programming their own strategies{" "}
              </p>
            </div>
          </div>
          {/* -------------------------------------- */}
          <div className="about-item row col-lg-4 col-sm-6   text-start cover">
            <div className="col-2 ">
              <span className="about_icons">
                <SiAmazonapigateway />
              </span>
            </div>
            <div className="col-10 col-md-10 pt-2 ps-5">
              <h6>Flexible APIs</h6>
              <p className="about_pera">
                Compatible with multiple languages suited best to your comfort
              </p>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="about-item row col-lg-4 col-sm-6   text-start  cover">
            <div className="col-2 ">
              <span className="about_icons">
                <GiExecutionerHood />
              </span>
            </div>
            <div className="col-10 col-md-10 pt-2 ps-5">
              <h6>Instant Execution</h6>
              <p className="about_pera">
                Now get your orders executed with few lines of codes
              </p>
            </div>
          </div>
          {/* -------------------------------------------------- */}
          <div className="about-item row col-lg-4 col-sm-6   text-start  cover">
            <div className="col-2 ">
              <span className="about_icons">
                <SiPowerbi />
              </span>
            </div>
            <div className="col-10 col-md-10 pt-2 ps-5">
              <h6>Powerful Trading Platforms</h6>
              <p className="about_pera">
                Our customizable trading account and trade from your desktop.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
          <div className="about-item row col-lg-4 col-sm-6   text-start cover ">
            <div className="col-2 ">
              <span className="about_icons">
                <FaStairs />
              </span>
            </div>
            <div className="col-10 col-md-10 pt-2 ps-5">
              <h6>Fast Trade execution</h6>
              <p className="about_pera">
                Fastest trade execution across all segments
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------- */}
        </div>
      </div>

      {/* ---------------------------misssion vision ---------------------------- */}
      {/* <div className="misssion_vision mt-5 pt-5 ">
          <h1 className="about_txt2 text-center pb-2 ">Mision Vision</h1>
          <div className="row">
            <div className="col-12 col-md-5 pt-5">
              <img src={vt1} height="auto" width="100%"  alt="" />
            </div>
            <div className="col-12 col-md-6 pt-5 mission_pera">
              <h4 className=" text-center pt-5">Our Vision</h4>
              <p className="px-2 about_pera">
                is to create and continue developing our dynamic and easy-to-use
                application for various platforms, such as mobile, desktop, and
                other devices across various platforms and OS systems such as
                iOS, Android, Windows, Exe and API. This would ensure that users
                across different regions, technological platforms, and devices
                would find using Arham Share’s online application and platform
                incredibly easy to use and enjoy its benefits without issues
                pertaining to operational smoothness, digital accessibility, and
                responsiveness that so many users across India have begun doing.
              </p>
            </div>
          </div>
        </div> */}

      {/* -------------------------meet our team ----------------------------- */}
      <div className=" container-fluid meet_our_team ">
        <div>
          <h1 className="about_txt2 text-center ">Meet Our Team</h1>
          <h3 className="line mx-auto"></h3>
        </div>
        <div className="row pt-5 text-center padding_side">
          <div className="col-12 col-sm-6 col-lg-4   meet_team_hover">
            <div className="container_img mx-auto">
              <img
                src={img1}
                height="auto"
                width="100%"
                className="our_team_img pb-5 image  "
                alt="" />
              <div className="overlay ">
                <h4 className="text-4  h-txt-1">MR.NARESH MEHTA</h4>
                <h6 className="h-txt-2">Founder and Promoter</h6>
              </div>
            </div>
            <p className="about_pera ">
              Arham's anchor, with over three decades of experience in the
              Indian Securities Market, advocates for a financially prudent and
              accessible India, characterized by integrity and honesty.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-4   meet_team_hover">
            <div className="container_img mx-auto">
              <img
                src={img2}
                height="auto"
                width="100%"
                className="our_team_img pb-5 image "
                alt=""
              />
              <div className="overlay">
                <h4 className="text-4  h-txt-1">MR. PRIYANK MEHTA</h4>
                <h6 className="h-txt-2">Promoter and Director</h6>
              </div>
            </div>
            <p className="about_pera  ">
              The promoter, with over 10 years of experience, specializes in
              security market operations and capital market compliance, leading
              the team in best practices and risk management.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-4   rounded-5 meet_team_hover">
            <div className="container_img mx-auto rounded-5">
              <img
                src={img3}
                height="auto"
                width="100%"
                className="our_team_img pb-5 image "
                alt=""/>
              <div className="overlay">
                <h4 className="text-4  h-txt-1">MR. RUSHITMEHTA</h4>
                <h6 className="h-txt-2">Co-founder and Director</h6>
              </div>
            </div>
            <p className="about_pera ">
              A young co-founder at Arham Share, with expertise in security,
              wealth management, and personal finance, manages corporate
              communications, brand management, and business development for
              CCG, HNI, and FII.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
