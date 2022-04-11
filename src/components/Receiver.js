import React from 'react'

export default function Receiver(props) {
    return (
        <div className='flex justify-center items-center w-1/2 h-screen'>
            <div className="w-full input-text m-4">
                <div className='flex flex-col container'>
                    <div className='font-semibold text-5xl m-6'>
                        Receiver
                    </div>
                    <div className='private-key text-xl font-semibold'>
                        Private key of receiver
                    </div>
                    <div className='mx-16 private-key-data border border-black rounded-lg'>
                        {props.privateKey.substring(0, 250)}
                    </div>
                    <div className='message-received hidden mt-2 text-xl font-semibold'>
                        Message received: <div className='message-rec'></div>
                    </div>
                    <div className='cipher-text-output-rec hidden my-4 p-2 rounded-md border border-gray-800'>
                        Cipher Text: <div className='cipherText-rec'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
