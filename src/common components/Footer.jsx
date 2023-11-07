import React from "react";
import "../css/Footer.css";

import logo from "../images/Arham_Logo.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <footer className="w-100 py-4 flex-shrink-0 Footer">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="h1 Logo">< img src={logo} width='200px' /></h4>
              <p className=" my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <p className="small copyRight mb-0">&copy; Copyrights. All rights reserved. <a className="text-light text-decoration-none" href="#">Arham Share</a></p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4 className="text-white mb-3">Useful links</h4>
              <ul className="list-unstyled text-muted usefulLinks">
                <li><a href="#">RMS Policy</a></li>
                <li><a href="#">Investor Protection</a></li>
                <li><a href="#">CDSL e-voting</a></li>
                <li><a href="#">EKYC</a></li>
                <li><a href="#">NSDL e-voting</a></li>
                <li><a href="#">Investor Complaints</a></li>
                <li><a href="#">Scores</a></li>
                <li><a href="#">General Disclaimer</a></li>

              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4 className="text-white mb-3">Quick links</h4>
              <ul className="list-unstyled text-light quickLinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Get started</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Our Address</h4>
              <p className="small address">U-8, Jolly Plaza, Athwagate, Surat – 395001</p>
              <h4 className="text-white mb-3 mt-5">Contact Us</h4>
              <p className="small email"><a href=''>contact@arhamshare.com</a></p>
              <p className="small contact">0261 6794000</p>

            </div>
          </div>
        </div>
      </footer> */}

      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="footer-top-content-1">
              <div className="footer-title">ATTENTION INVESTORS</div>
              <p>
                "Prevent Unauthorised Transactions in your account --&gt; Update
                your mobile numbers/email IDs with your stock brokers. Receive
                information of your transactions directly from Exchange on your
                mobile/email at the end of the day .......... Issued in the
                interest of investors"
              </p>
              <p>
                "KYC is one time exercise while dealing in securities markets -
                once KYC is done through a SEBI registered intermediary (broker,
                DP, Mutual Fund etc.), you need not undergo the same process
                again when you approach another intermediary."
              </p>
              <p>
                "Prevent Unauthorized Transactions in your demat account --&gt;
                Update your Mobile Number with your Depository Participant.
                Receive alerts on your Registered Mobile for all debit and other
                important transactions in your demat account directly from CDSL
                on the same day......................issued in the interest of
                investors."
              </p>
              <p>
                "No need to issue cheques by investors while subscribing to IPO.
                Just write the bank account number and sign in the application
                form to authorise your bank to make payment in case of
                allotment. No worries for refund as the money remains in
                investor's account."
              </p>
              <p>
                "As required under circular # SEBI/MRD/SE/Cir-42/2003 dated
                November 19, 2003 issued by the Securities and Exchange Board of
                India; we hereby disclose that in addition to Client base
                Business, we are also doing Proprietary Trading"
              </p>
              <p>
                Client Registration Documents in Vernacular Languages Click here
                <span>
                  <Link to="">Click here</Link>
                </span>
              </p>
              <p>
                Commodity Client Registration Documents in Vernacular Languages
                Click here
                <span>
                  <Link to="">Click here</Link>
                </span>
              </p>
              <p>
                Commodity Client Registration Documents in Vernacular Languages
                Click here
                <span>
                  <Link to="">Click here</Link>
                </span>
              </p>
            </div>
            <div className="footer-top-content-2">
              <div className="footer-title">KEY MANAGERIAL PERSONNELS</div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Mobile No </th>
                    <th scope="col">Email ID </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mr. Naresh M. Mehta</td>
                    <td>CEO/MD</td>
                    <td>
                      <a href="">9825131224</a>{" "}
                    </td>
                    <td>
                      <a href="">yashnmehta1@gmail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Mr. Priyank A. Mehta</td>
                    <td>Whole Time Director</td>
                    <td>
                      <a href="">9879135124</a>{" "}
                    </td>
                    <td>
                      <a href="">mehta_priyank@ymail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td> Mr. Priyank A. Mehta</td>
                    <td>Compliance officer </td>
                    <td>
                      {" "}
                      <a href="">9879135124</a>
                    </td>
                    <td>
                      <a href="">mehta_priyank@ymail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Mr. Priyank A. Mehta </td>
                    <td>Designated Director-1 </td>
                    <td>
                      <a href="">9879135124</a>
                    </td>
                    <td>
                      <a href="">mehta_priyank@ymail.com</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="footer-top-content-3">
              <div className="footer-title">Bank Details</div>
              <p>
                “Investors are requested to note that Stock broker Arham Share
                Private Ltd. is permitted to receive/pay money from/to investor
                through designated bank accounts only named as client bank
                accounts. Stock broker Arham Share Private Ltd. is also required
                to disclose these client bank accounts to Stock Exchange. Hence,
                you are requested to use following client bank accounts only for
                the purpose of dealings in your trading account with us. The
                details of these client bank accounts are also displayed by
                Stock Exchanges on their website under “Know/ Locate your Stock
                Broker”d
              </p>
            </div>
            <div className="footer-top-content-4">
              <div className="footer-top-content-item row">
                <div className="col-lg-6">
                  <b>Arham Share Pvt. Ltd.- Client Bank Account List</b>
                  <table class="table">
                    <thead>
                      <tr>
                        <td scope="col">Sr</td>
                        <td scope="col">Bank Account No. </td>
                        <td scope="col">IFSC </td>
                        <td scope="col">Name of Bank</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>00670340001650</td>
                        <td>HDFC0000067</td>
                        <td>HDFC Bank Ltd.</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>00670340001633 </td>
                        <td>HDFC0000067</td>
                        <td>HDFC Bank Ltd.</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>00670340001640 </td>
                        <td>HDFC0000067</td>
                        <td>HDFC Bank Ltd.</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>00670340001736 </td>
                        <td>HDFC0000067</td>
                        <td>HDFC Bank Ltd.</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>HDFC0001249 </td>
                        <td>HDFC0000067</td>
                        <td>HDFC Bank Ltd.</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>57500000569441 </td>
                        <td>HDFC0001249 </td>
                        <td>HDFC Bank Ltd.</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>57500000569441 </td>
                        <td>ICIC0001388 </td>
                        <td>ICICI Bank Ltd.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-6">
                  <b>
                    Arham Commodity Brokers Pvt. Ltd.- Client Bank Account List
                  </b>
                  <table class="table">
                    <thead>
                      <tr>
                        <td scope="col">Sr</td>
                        <td scope="col">Bank Account No. </td>
                        <td scope="col">IFSC </td>
                        <td scope="col">Name of Bank</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>00670340003257 </td>
                        <td>HDFC0000067</td>
                        <td>HDFC Bank Ltd.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="footer-logo">
                  <img src="assets/image/Arham_Logo.jpg" alt="footer-logo" />
                </div>
                <p>
                  "Your trusted partner for customized financial solutions.
                  Arham Share Private Limited - Where technology meets finance
                  with excellence."
                </p>
              </div>
              <div className="col-lg-2">
                <div className="footer-link-title">useful links</div>
                <ul>
                  <li>
                    <Link to="">RMS Policy</Link>
                  </li>
                  <li>
                    <Link to="">Investor Complaints</Link>
                  </li>
                  <li>
                    <Link to="">Investor Grievance</Link>
                  </li>
                  <li>
                    <Link to="">Disclaimer</Link>
                  </li>
                  <li>
                    <Link to="">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="">Investor Protection</Link>
                  </li>
                  <li>
                    <Link to="">General Disclaimer</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div className="footer-link-title">useful links</div>
                <ul>
                  <li>
                    <Link to="">EKYC</Link>
                  </li>
                  <li>
                    <Link to="">Scores</Link>
                  </li>
                  <li>
                    <Link to="">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="">Feedback</Link>
                  </li>
                  <li>
                    <Link to="">CDSL e-voting</Link>
                  </li>
                  <li>
                    <Link to="">NSDL e-voting</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="footer-middle-item">
                  <div className="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="text">
                    <div className="text-title">REGISTERED OFFICE</div>
                    <div className="text-content">
                      15th Floor, Unit No. 1B,
                      <br />
                      GIFT One Building, Village Ratanpur,
                      <br />
                      Taluka Gandhinagar-382355
                    </div>
                  </div>
                </div>
                <div className="footer-middle-item">
                  <div className="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="text">
                    <div className="text-title">CORPORATE OFFICE</div>
                    <div className="text-content">
                      U-8, Jolly Plaza,
                      <br />
                      Athwagate,
                      <br />
                      Surat – 395001
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-middle-item">
                  <div className="icon">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div className="text">
                    <div className="text-title">CALL US</div>
                    <div className="text-content">
                      <a href="">0261 6794000</a>
                    </div>
                  </div>
                </div>
                <div className="footer-middle-item ">
                  <div className="icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div className="text">
                    <div className="text-title">E-MAIL</div>
                    <div className="text-content">
                      <a href="">contact@arhamshare.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-top">
            <div className="container">
              <div className="footer-top-title">
                NSE:INZ000175534, BSE: INZ000175534, MCX : INZ000085333,CDSL :
                IN-DP-CDSL-252-2016, MSME Registration Number:
                UDYAM-GJ-22-0011958
              </div>
              <div className="footer-bottom-title">
                <span>Details of Compliance Officer:</span>
                <span>
                  Name :Priyank Mehta | Email : mehta_priyank@ymail.com | Tel. :
                  0261-67940000
                </span>
                <span>
                  <a href="">SEBI &#8739;</a>
                </span>
                <span>
                  <a href="">NSE &#8739;</a>
                </span>
                <span>
                  <a href="">BSE &#8739;</a>
                </span>
                <span>
                  <a href="">NSDL &#8739;</a>
                </span>
                <span>
                  <a href="">CDSL &#8739;</a>
                </span>
                <span>
                  <a href="">MCX &#8739;</a>
                </span>
                <span>
                  <a href="">NCDEX &#8739;</a>
                </span>
                <span>
                  <a href="">RBI &#8739;</a>
                </span>
                <span>
                  <a href="">IRDA &#8739;</a>
                </span>
                <span>
                  <a href="">AMFI</a>
                </span>
              </div>
              <div className="social-link">
                <ul>
                  <li>
                    <a href="">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom-bottom">
            <div className="container">
              <div className="footer-bottom-item">
                <div className="footer-bottom-left">
                  Copyright © 2017 <a href="">Arham Share Pvt. Ltd.</a> All
                  Rights Reserved
                </div>
                <div className="footer-bottom-right">
                  Designed , Developed & Content Powered by
                  <span></span>
                  <span></span>
                  <span></span>
                  <a href="">Accord Fintech Pvt. Ltd.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
