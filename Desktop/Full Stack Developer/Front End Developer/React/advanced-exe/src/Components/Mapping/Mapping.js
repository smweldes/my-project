import React from 'react';
import {datas} from '../data';
import Product from '../Product'

function Mapping(props) {
    const productComponents = datas.map(item => <Product product={item}/>)
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default Mapping