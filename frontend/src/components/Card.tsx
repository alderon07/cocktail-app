export default function Card({ drink }: {drink: any}) {
    console.log(drink)
    // takes out keys with null values from drink
    Object.keys(drink).forEach?.(key => {
        if (drink[key] === null) {
            delete drink[key];
        }
    });
    // figure out how to put ingredients
    console.log(drink)

    return (
    <div key={drink.idDrink} className="container shadow-md rounded-md bg-red-300 px-4 py-10">
        {/* image */}
        <div className="flex flex-row">
            <span>
                <img src="" alt=""/>
            </span>
            <span className="text-xl font-bold">{drink.strDrink}</span>
        </div>
        
        {/* recipe and ingredients */}
        <div className="flex flex-col">
            <div className="flex flex-col text-md pt-2 pb-2">
                <span>Recipe</span>
                <span className="text-sm">{drink.strInstructions}</span>
            </div>
            <div>
                <span className="text-md">Ingredients</span>

                <span></span>
            </div>
        </div>
    </div>
  );
}


