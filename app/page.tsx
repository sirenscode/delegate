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
    const phoneNumber = `254707589396`;
    const number = document.getElementById("phone")!.value;
    const message = `Hello this is my Mpesa no:${number} and i confirm i have voted Mozart and i want to receive my token`;
    const whatsUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    window.document.location=whatsUrl;
  }
  

  return (
    <main className="w-full flex flex-col items-center justify-center gap-[20px] overflow-x-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center gap-[20px]">
        <div className="w-full bg-[#151515] p-3 fixed top-[0]">
          <p className="font-semibold">Platform By the SIRENS</p>
        </div>
        <div className="mt-[80px]">
          <Image src={"/images/profile.jpg"} alt="profile" width={150} height={200} className="rounded-[2000px]"/>
        </div>
      
        <h1 className="text-3xl font-semibold text-center ">Vote Mozart for Delegate FOST 1.2✅</h1>
        <p className="text-[1.2em] w-1/2 text-center max-[500px]:w-3/4 text-[1em]">By voting Mozart, express kindness and love.And in solidarity comrades shall forever live.It is Mozart because he returns a hand.</p>
        
        <div className="w-full items-center flex flex-col rounded-lg">
            {url && (
              <img src={url} alt="Screenshot" className="rounded-lg w-1/2" style={{imageOrientation: 'from-image'}}/>
            )}
          </div>

        <div className="flex flex-row justify-center items-center gap-[0px] mb-[50px]">
          <div className=" flex flex-col items-center w-[150px]">
            <input type="file"  id="capture" accept="image/*" capture="environment" onChange={handleChange} style={{visibility:"hidden"}}/>
            <button className="border-[#234464] p-2 rounded-lg  border-[1px] w-[auto]  hover:bg-[#234464] max-[500px]:text-[.7em]" onClick={getCapture}>Take picture</button>            
          </div>
          <div className=" flex flex-col items-center w-[150px]">
            <input type="file" id="image" accept="image/*" onChange={handleChange} style={{visibility:'hidden'}}/>
            <button className="bg-[#234464] p-2 border-[#234464] border-[1px] rounded-lg hover:bg-[transparent] max-[500px]:text-[.7em]" onClick={getImage}>Select Image</button>
          </div>
        </div>
        <div className="w-full flex gap-[20px] flex-col items-center mb-[50px] p-3">
          <div className="w-full h-[1px] bg-[#234464]"></div>
          <p className="text-[#999999] w-1/2 max-[500px]:w-3/4">Please Input your Mpesa number to receive a token of appreciation for voting Mozart then attach the photo you selected as an indication for supporting Mozart.🤗</p>
          <input type="tel" id="phone" className="border-[#234464] border-[1px] bg-[transparent] rounded-lg p-2"/>
          <button className="w-[100px] p-1 bg-[#234464] border-[#234464] border-[1px] rounded-lg hover:bg-[transparent]" onClick={submit}>Submit</button>
        </div>
        <p className="w-full text-center text-[#999] font-semibold max-[500px]:text-[12px]">MOZART 2024 Copyright © All Rights are Reserved</p>
      </div>
      
          
          
    </main>
  )
};


export default App;