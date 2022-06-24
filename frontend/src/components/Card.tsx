export default function Card({ drink }: {drink: any}) {
    
    // takes out keys with null values from drink
    Object.keys(drink).forEach?.(key => {
        if (drink[key] === null) {
            delete drink[key];
        }
    });

    // get ingredients
    const ingredients = Object.entries(drink).filter?.((n)=>{
        return n[0].includes(`Ingredient`)
    }).map?.(n => n[1])

    // get measurements
    const measurements = Object.entries(drink).filter?.((n) => {
        return n[0].includes('Measure')
    }).map?.(n => n[1])

    console.log(ingredients)
    console.log(measurements)
    console.log(drink)

    return (
    <div key={parseInt(drink.idDrink)} className="container shadow-lg rounded-md bg-slate-200 px-4 py-4">
        {/* thumbnail */}
        <div className="flex flex-col space-x-2 space-y-1">
            <span className="rounded-lg overflow-hidden">
                <img className="md:w-full" src={drink.strDrinkThumb} alt="Picture of drink"/>
            </span>
            <span className="text-xl font-bold self-center">{drink.strDrink}</span>
        </div>
        
        {/* recipe and ingredients */}
        <div className="flex flex-col">
            <div className="flex flex-col text-md pt-2 pb-2">
                <span>Recipe:</span>
                <span className="text-sm">{drink.strInstructions}</span>
            </div>
            <div className="grid grid-cols-2">
                {/* render ingredients */}
                <span>
                    <span className="text-md">Ingredients</span>
                    <ul className="list-decimal px-4">
                        {
                            ingredients.length > 0 &&
                            ingredients.map?.((ingredient: any, i: number) => {
                                return (
                                    <li className="text-sm self-center">
                                        <span>
                                            {ingredient}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </span>
                {/* render measurements */}
                <span>
                    <span className="text-md">Measurements</span>

                    <ul className="list-decimal px-4">
                        {
                            measurements.length > 0 &&
                            measurements.map?.((measurement: any, i: number) => {
                                return (
                                    <li className="text-sm self-center">
                                        <span>
                                            {measurement}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </span>
            </div>
        </div>
    </div>
  );
}


