# customizable-product-card

Package npm for product card component

### Lucas Singh

### Instalation:

`npm install customizable-product-card`

#### Code Example implementation

This is the folder structure we set up for you:

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'customizable-product-card';

```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        // maxCount: 10
    }}
> 
    {
        ({reset, isMaxCountReached, count, maxCount, increaseByOne}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }                
</ProductCard>

```
