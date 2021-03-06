import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    title?:string,
    className?: string
    style?: CSSProperties,
    activeClass?: string
}

export const ProductTitle = ({title, className, style} : Props) => { //defino una interfaz para title que sea string
    
    const {product} = useContext(ProductContext);

    return (
        <span 
            className={`${styles.productDescription} ${className}` }
            style={style}
        >
            {title ? title : product.title}
        </span>
    )
}
