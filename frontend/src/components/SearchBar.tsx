
type Props = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    handleSubmit: React.MouseEventHandler<HTMLButtonElement>
}

export default function SearchBar({ handleChange, handleSubmit } : Props){

    // console.log(drink)



    return(
        <div className="flex flex-row space-x-2">
            <input onChange={handleChange} className="p-2 w-full rounded-lg outline-none border-2 bg-slate-100" type="search" placeholder="Search Drink" />
            <button onClick={handleSubmit} className="border-2 border-blue-500 bg-blue-500 rounded-lg px-2 text-white">
                Search
            </button>
        </div>
    )
}