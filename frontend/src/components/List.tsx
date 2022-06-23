import Card from "./Card"

export default function List( { drinks }: {drinks: any} ) {
    const data = drinks
    console.log(data)
    return(
        <div className="flex flex-col md:grid grid-cols-3 gap-2">
            {
                data.map?.((drink: any) => {
                   return (<Card drink={drink} />)
                })
            }
        </div>
    )
}