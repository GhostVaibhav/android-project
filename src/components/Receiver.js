import React from 'react'

export default function Receiver(props) {
    return (
        <div className='flex justify-center m-0 p-0 items-center h-screen w-screen bg-indigo-300'>
            <div className="w-full input-text m-4">
                <div className='flex flex-col container'>
                    <div className='font-semibold text-5xl m-6'>
                        Receiver
                    </div>
                    <div className='pub-key-con text-xl font-semibold'>
                        Public key of receiver
                    </div>
                    <div className='mx-16 max-h-44 select-all overflow-auto pub-key-rec border border-black rounded-lg'>
                        {props.publicKey}
                    </div>
                    <div className='mt-2 text-xl font-semibold'>
                        Enter cipher text: <input className='border rounded-md p-1 text-black outline-none textCipher-rec'></input>
                    </div>
                    <button onClick={props.decrypt} className='m-2 p-2 mt-2 bg-white rounded'>Decrypt</button>
                    <div className='cipher-text-output-rec hidden my-4 p-2 rounded-md border border-gray-800'>
                        Message: <div className='cipherText-rec'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
