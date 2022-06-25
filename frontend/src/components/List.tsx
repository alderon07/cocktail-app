import Card from "./Card"

export default function List( { drinks }: {drinks: any} ) {
    return(
        <div className="flex flex-col md:grid grid-cols-3 gap-2 lg:grid-cols-5">
            {   
                drinks ?
                drinks.map?.((drink: any) => {
                   return (<Card drink={drink} />)
                }) : <h1 className="font-bold text-xl">No Match</h1>
            }
        </div>
    )
}