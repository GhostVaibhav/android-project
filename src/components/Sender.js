import React from 'react'

export default function Sender(props) {
    return (
        <div className='flex justify-center items-center w-1/2 h-screen bg-indigo-600'>
            <div className="w-full input-text m-4">
                <div className='text-white flex flex-col container'>
                    <div className='font-semibold text-5xl m-6'>
                        Sender
                    </div>
                    <div className='public-key text-xl font-semibold'>
                        Public key of receiver
                    </div>
                    <div className='mx-16 public-key-data border border-white rounded-lg'>
                        {props.publicKey.substring(0, 250)}
                    </div>
                    <div className='m-2'>
                        Message: <input className='border rounded-md p-1 outline-none message text-black'></input>
                    </div>
                    <button onClick={props.generate} className='w-full p-2 mt-2 bg-black rounded'>Send Message</button>
                    <button onClick={props.random} className='w-full p-2 mt-2 bg-black rounded'>Random Keys</button>
                    <div className='cipher-text-output hidden mx-2 my-4 p-2 rounded-md border border-gray-800'>
                        Cipher Text: <div className='cipherText'></div>
                    </div>
                    <div className='flex keys m-2'></div>
                </div>
            </div>
        </div>
    )
}
