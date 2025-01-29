"use client"
import React, { useState } from "react";

const Username = ({ params }) => {

  

  return (
    <>

      <div className="cover w-full h-[325]] relative">

        <img className='object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1730678400&token-hash=AcvAVf7vmSGx4pf49nRRBMUYRnDjWDSx2BGTxvUbw-U%3D" alt="" />

        <div className="profile absolute top-80 right-[45%] border-2 border-white rounded-full">
          <img className='w-32 h-32 rounded-full' src="https://images.unsplash.com/photo-1729017256081-0271b3fcc08e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='info my-24 flex flex-col gap-2 justify-center items-center'>

          <div className='font-bold text-lg'>
            @{params.username}
          </div>

          <div className='text-neutral-400'>
            I work for universe
          </div>

          <div className='text-neutral-400'>
            90 members . 39 posts . $15,600/release
          </div>

        </div>

      </div>

      <div className='flex gap-5 m-24'>

        <div className='supporters w-1/2 bg-gray-900 rounded-xl p-10'>

          <h2 className='font-bold text-lg'>Supporters</h2>
          <ul className='my-5 mx-2'>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
            <li className='my-2'>Shovit Shrestha donated $400k with a message "nice"</li>
          </ul>

        </div>

        <div className="flex flex-col gap-5 payment w-1/2 bg-gray-900 rounded-xl p-10">
          <h2 className='text-center text-xl font-bold text-neutral-200'>Make payment</h2>

          <div className="name">
            <input className='text-neutral-700 font-thin text-xl w-full bg-neutral-300 rounded-xl p-3' type="text" placeholder='Your Name' />
          </div>

          <div className="message">
            <input className='text-neutral-700 w-full font-thin text-xl bg-neutral-300 rounded-xl p-3' type="text" placeholder='Your Message' />
          </div>

          <div className="Make a payment">
            <input className='text-black w-full font-thin text-xl bg-neutral-300 rounded-xl p-4' type="number" value={amt} onChange={(e) => setAmt(e.target.value)} placeholder='Enter Amount' />

            <div className="fixedPay text-teal-400 font-light flex gap-7 py-3 justify-center">

              <button className='bg-slate-700 p-2 rounded-xl w-16'>
                $5
              </button>
              <button className='bg-slate-700 p-2 rounded-xl w-16'>
                $10
              </button>
              <button className='bg-slate-700 p-2 rounded-xl w-16'>
                $20
              </button>
              <button className='bg-slate-700 p-2 rounded-xl w-16'>
                $40
              </button>
              <button className='bg-slate-700 p-2 rounded-xl w-16'>
                $80
              </button>
              <button className='bg-slate-700 p-2 rounded-xl w-16'>
                $100
              </button>

            </div>


            <button type="button" className="w-full text-gray-500 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-extralight rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2" onClick={initiatePayment}>Pay</button>

          </div>

        </div>

      </div>

    </>
  )
}

export default Username
