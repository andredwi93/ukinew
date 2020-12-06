import React from 'react'

function ProductsHome() {
    return (
        <section className="w-full">
            <div className="container w-3/4 mx-auto text-center py-16">
                <h2 className="font-sans font-semibold text-7xl text-indigo-800 uppercase">
                    our<br />product
                </h2>
                <div className="flex justify-center mt-16">
                    <div className="w-40 h-40 overflow-hidden mx-5">
                        <img src="/images/logo-ultimatepay.jpg" className="w-full" />
                    </div>
                    <div className="w-40 h-40 overflow-hidden mx-5">
                        <img src="/images/logo-ultimeal.jpg" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsHome
