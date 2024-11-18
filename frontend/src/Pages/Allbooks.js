import React from "react";
import "./Allbooks.css";

function Allbooks() {
  return (
    <div className="books-page">
      <div className="books">
        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU"
            alt=""
          ></img>
          <p className="bookcard-title">Wings Of Fire</p>
          <p className="bookcard-author">By Pranavdhar</p>
          <div className="bookcard-category">
            <p>Auto Biography</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
            alt=""
          ></img>
          <p className="bookcard-title">The Power Of Your Subconscious Mind</p>
          <p className="bookcard-author">By Joseph</p>
          <div className="bookcard-category">
            <p>Psychology</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFiDRQ7a-Oo-CnMmnbIMApP1Cq9B5bYx-UA&usqp=CAU"
            alt=""
          ></img>
          <p className="bookcard-title">Elon Musk</p>
          <p className="bookcard-author">By Elon</p>
          <div className="bookcard-category">
            <p>Auto Biography</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="/assets/images/tata.jpeg"
            alt=""
          ></img>
          <p className="bookcard-title">THE RATAN TATA WAY</p>
          <p className="bookcard-author">RATAN TATA</p>
          <div className="bookcard-category">
            <p>SELFHELP</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="/assets/images/yogi.jpeg"
            alt=""
          ></img>
          <p className="bookcard-title">THE MONK WHO BECAME CHIEF MINISTER</p>
          <p className="bookcard-author">ADATYANATH YOGI</p>
          <div className="bookcard-category">
            <p>SELFHELP</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="/assets/images/maths.jpeg"
            alt=""
          ></img>
          <p className="bookcard-title">THE ENGINEERING MATHEMATICS</p>
          <p className="bookcard-author">Dr. TAPAN KAR</p>
          <div className="bookcard-category">
            <p>REFERENCE</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        
      </div>
    </div>
  );
}

export default Allbooks;
