import React from 'react'

export default function Sender(props) {
    return (
        <div className='flex justify-center m-0 p-0 items-center h-screen w-screen bg-indigo-600'>
            <div className="w-full text-white input-text m-4">
                <div className='font-semibold text-5xl m-6'>
                    Sender
                </div>
                <div className='public-key text-xl font-semibold'>
                    Public key of receiver
                </div>
                <textarea className='flex resize-none items-center mx-16 p-2 public-key-data w-11/12 outline-none overflow-auto h-44 border text-black border-white rounded-lg' />
                <div className='m-2'>
                    Message: <input className='border rounded-md p-1 text-black outline-none message'></input>
                </div>
                <button onClick={props.encrypt} className='m-2 p-2 mt-2 bg-black rounded'>Send Message</button>
                <div className='overflow-auto cipher-text-output hidden mx-2 my-4 p-2 rounded-md border border-gray-800'>
                    Cipher Text: <div className='cipherText'></div>
                </div>
            </div>
        </div>
    )
}
