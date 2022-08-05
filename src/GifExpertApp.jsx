import { useState } from "react"
import { GifGrid, AddCategory } from "./components";





export const GifExpertApp = () => {


    const [ categories, setCategories ] = useState([ '' ]);

    
    const onAddCategories = ( newCategory ) => {

        if( categories.includes( newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
    }


    return (
        <>

            <h1>GifExpertApp</h1>
            
            <AddCategory 
                // setCategories= { setCategories }
                onNewCategory= { value => onAddCategories(value) }
            />

            {
                categories.map( (categoria) => (
                    <GifGrid 
                        category={ categoria } 
                        key={ categoria }
                    />
                ))
            }

        </>
    )
}
