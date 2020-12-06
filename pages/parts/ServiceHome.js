import React from 'react'

function ServiceHome() {
    return (
        <section className="w-full">
            <div className="container mx-auto py-16 px-20">
                <div className="grid grid-cols-3">
                    <div className="box-grid-service w-full flex flex-col justify-center px-16">
                        <h3 className="text-2xl tracking-widest font-sans font-semibold text-gray-500 mb-4 uppercase">our service</h3>
                        <h2 className="text-5xl font-sans font-bold text-indigo-800">What<br />We<br />Do</h2>
                    </div>
                    <div className="box-grid-service w-full flex justify-center items-center bg-gray-100">
                        <div className="w-1/2 text-center">
                            <img src="/images/thumbnail.png" alt="thumbnail" className="w-3/4 mx-auto" />
                            <div className="flex items-center mb-3">
                                <span className="text-white text-xs bg-cyan-400 w-7 h-6 flex items-center justify-center" style={{ borderRadius: "50%" }}>01</span>
                                <hr className="bg-indigo-800 w-full h-1 ml-4" />
                            </div>
                            <span className="text-3xl font-sans text-indigo-800">Application</span>
                        </div>
                    </div>
                    <div className="box-grid-service w-full flex justify-center items-center bg-gray-100">
                        <div className="w-1/2 text-center">
                            <img src="/images/thumbnail.png" alt="thumbnail" className="w-3/4 mx-auto" />
                            <div className="flex items-center mb-3">
                                <span className="text-white text-xs bg-cyan-400 w-7 h-6 flex items-center justify-center" style={{ borderRadius: "50%" }}>02</span>
                                <hr className="bg-indigo-800 w-full h-1 ml-4" />
                            </div>
                            <span className="text-3xl font-sans text-indigo-800">Website Design</span>
                        </div>
                    </div>
                    <div className="box-grid-service w-full flex justify-center items-center bg-gray-100">
                        <div className="w-1/2 text-center">
                            <img src="/images/thumbnail.png" alt="thumbnail" className="w-3/4 mx-auto" />
                            <div className="flex items-center mb-3">
                                <span className="text-white text-xs bg-cyan-400 w-7 h-6 flex items-center justify-center" style={{ borderRadius: "50%" }}>03</span>
                                <hr className="bg-indigo-800 w-full h-1 ml-4" />
                            </div>
                            <span className="text-3xl font-sans text-indigo-800">Digital Branding</span>
                        </div>
                    </div>
                    <div className="box-grid-service w-full flex justify-center items-center bg-gray-100">
                        <div className="w-1/2 text-center">
                            <img src="/images/thumbnail.png" alt="thumbnail" className="w-3/4 mx-auto" />
                            <div className="flex items-center mb-3">
                                <span className="text-white text-xs bg-cyan-400 w-7 h-6 flex items-center justify-center" style={{ borderRadius: "50%" }}>04</span>
                                <hr className="bg-indigo-800 w-full h-1 ml-4" />
                            </div>
                            <span className="text-3xl font-sans text-indigo-800">Digital Marketing</span>
                        </div>
                    </div>
                    <div className="box-grid-service w-full flex justify-center items-center bg-gray-100">
                        <div className="w-1/2 text-center">
                            <img src="/images/thumbnail.png" alt="thumbnail" className="w-3/4 mx-auto" />
                            <div className="flex items-center mb-3">
                                <span className="text-white text-xs bg-cyan-400 w-7 h-6 flex items-center justify-center" style={{ borderRadius: "50%" }}>05</span>
                                <hr className="bg-indigo-800 w-full h-1 ml-4" />
                            </div>
                            <span className="text-3xl font-sans text-indigo-800">IT System Audit</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceHome
