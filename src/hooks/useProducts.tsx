import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductsArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProducts = ({onChange, product, value = 0, initialValues}: useProductsArgs ) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const isControlled = useRef(!!onChange); // si no existe onChange

    const increaseByOne = (value: number) => {

        if(isControlled.current) {
            return onChange!({count: value, product});
        }

        let newValue = Math.max(counter + value, 0)

        if(initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        onChange && onChange({count: newValue, product}); //onChange puede ser nulo y si tiene valor que qjecute onChange
    }

    const reset = () => {
        setCounter(initialValues?.count || 0);
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);
    },[value])

    useEffect(() => {
        isMounted.current = true;
    },[])

    return {
        counter, 
        increaseByOne,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}

export default useProducts;