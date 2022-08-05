import { useFetchGif } from "../hooks";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGif( category );
    
    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h1>Cargando... </h1>)
            }


            <div className="card-grid">
                {
                    images.map( (image) => (
                        < GifGridItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
