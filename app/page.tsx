"use client"
import { event } from "jquery";
import { Epilogue } from "next/font/google";
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Image from "next/image";

interface Props{
  url: string;
}
const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user"
};

const App = () => {
  const [url, setUrl] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(event.target.files && event.target.files.length>0){
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl)
      setUrl(imageUrl);
    }
  }

  function getCapture(){
    document.getElementById("capture")!.click();
  }
  function getImage(){
    document.getElementById("image")!.click();
  }
  function submit(){
    const phoneNumber = `25418402229`;
    const number = (document.getElementById("phone") as HTMLInputElement)?.value ?? '';
    const message = `Hello this is my Mpesa no:${number} and i confirm i have voted Mozart and i want to receive my token`;
    const whatsUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(message)}`;
    window.document.location=whatsUrl;
  }
  

  return (
    <main className="w-full flex flex-col items-center justify-center gap-[20px] overflow-x-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center gap-[20px] z-[20]">
        <div className="w-full bg-[rgba(0,0,0,1)] p-3 fixed top-[0] flex flex-row">
          <p className="font-semibold">Platform by the SIRENS</p>
          <a href="https://wa.me/254707589396" className="ml-[auto]"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#FFF" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg></a>
        </div>
        <div className="mt-[80px]">
          <Image src={"/images/profile.jpg"} alt="profile" width={150} height={200} className="rounded-[2000px]"/>
        </div>
      
        <h1 className="text-[2em] font-semibold text-center font-['Anta']">Vote Mozart for Delegate <br></br>FOST 1.2✅</h1>
        <p className="text-[1.2em] w-1/2 text-center font-['Fredoka'] max-[500px]:w-3/4">By voting Mozart, express kindness and love.And in solidarity comrades shall forever live.It is Mozart because he returns a hand.</p>
        
        <div className="w-full items-center flex flex-col rounded-lg">
            {url && (
              <img src={url} alt="Screenshot" className="rounded-lg w-1/2" style={{imageOrientation: 'from-image'}}/>
            )}
          </div>

        <div className="flex flex-row justify-center items-center gap-[0px] mb-[50px]">
          <div className=" flex flex-col items-center w-[150px]">
            <input type="file"  id="capture" accept="image/*" capture="environment" onChange={handleChange} style={{visibility:"hidden"}}/>
            <button className="border-[#234464] p-2 rounded-lg  border-[2px] w-[auto] bg-[#234464]  hover:bg-[transparent] max-[500px]:text-[.7em]" onClick={getCapture}>Take picture</button>            
          </div>
          <div className=" flex flex-col items-center w-[150px]">
            <input type="file" id="image" accept="image/*" onChange={handleChange} style={{visibility:'hidden'}}/>
            <button className="bg-[#234464] p-2 border-[#234464] border-[2px] rounded-lg hover:bg-[transparent] max-[500px]:text-[.7em]" onClick={getImage}>Select Image</button>
          </div>
        </div>
        <div className="w-full flex gap-[20px] flex-col items-center mb-[50px] p-3">
          <div className="w-full h-[1px] bg-[#234464] shadow-lg shadow-[#234464]"></div>
          <p className="text-[#E1E1E1] w-1/2 max-[500px]:w-3/4">Please Input your Mpesa number to receive a token of appreciation for voting Mozart then attach the photo you selected as an indication for supporting Mozart.🤗</p>
          <input type="tel" id="phone" className="border-[#234464] border-[1px] bg-[transparent] rounded-lg p-2"/>
          <button className="w-[100px] p-1 bg-[#234464] border-[#234464] border-[1px] rounded-lg hover:bg-[transparent]" onClick={submit}>Submit</button>
        </div>
        <p className="w-full text-center text-[#999] font-semibold max-[500px]:text-[12px]">MOZART 2024 Copyright © All Rights are Reserved</p>
      </div>
      
          
          
    </main>
  )
};


export default App;
