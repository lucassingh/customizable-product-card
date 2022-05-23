import React, { createContext, CSSProperties } from 'react';
import useProducts from '../hooks/useProducts';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues }: Props) => {

    const {increaseByOne, counter, maxCount, isMaxCountReached, reset} = useProducts({
        onChange, 
        product,
        value,
        initialValues
    });

    return (

        <Provider value={{
                increaseByOne, 
                counter, 
                product,
                maxCount
            }}>
            <div 
                className={ `${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseByOne,
                    reset,
                })}
            </div>
        </Provider>
    )
}

ProductCard.image = ProductImage;
ProductCard.title = ProductTitle;
ProductCard.buttons = ProductButtons;