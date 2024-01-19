import { useEffect, useState } from "react"

export const HookUseEffect = () => {
    const [contador, setContador] = useState(1)
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await response.json()
        return data
    }

    // SE VA EJECUTAR SOLO UNA VEZ
    useEffect(() => {
        getProducts().then(res => setProduct(res))
    }, [])

    console.log("SOY EL ESTADO", product)
    //QUE CAMBIE CADA VEZ QUE CUMPLA UNA CONDICION
    useEffect(() => {
        console.log("USEFECT CODICION")
    }, [contador])

    //CUANDO EL USEEFFECXT SE LANZA INFINITAS VECEZ
    useEffect(() => {
        console.log("USEFECT INFINITO")
    })

    const onContador = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            UuseEffect
            <p>Products</p>
            {
                product.map((product)=>(
                    <div>
                        {product.title}
                        <img src={product.images[0]} alt="" width={300} height={300} />
                    </div>
                ))
            }

            <button onClick={onContador}>{contador}</button>
            <button onClick={getProducts}>Probando</button>
        </div>
    )
}
