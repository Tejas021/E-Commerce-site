import React from 'react'

const CartProduct = () => {
    return (
        <div className='row border border-danger my-2 '>
            <div className="col-md-5 p-0">
                <img src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg" className='w-100' alt="product"></img>
            </div>
            <div className='col-md-4 p-3'>
                <h4>Title</h4>
                <p>Description</p>
                <p>size</p>

            </div>
            <div className='col-md-3 text-center p-3'>
                <div className='row mx-auto'>
                <button className='btn btn-outline-light col-md-4 col-4'>-</button>
            <div className='col-md-4 text-center col-4'>1</div>
            <button className='btn btn-outline-light col-md-4 col-4'>+</button>
                </div>
                <h2 className='mt-3'>$256</h2>
            </div>
            
        </div>
    )
}

export default CartProduct
