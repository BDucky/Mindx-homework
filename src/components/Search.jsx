import "../assets/less/search.less"

export default function Search({ placeholder, onSearching }) {

    // const onChange = (((e) => {
    //     onSearching(e.target.value)
    // }, 300))

    const handleSearchProduct = (e) => {
        onSearching(e.target.value)
    }

    return (
        <div className="search-control">
            <input type="text" onChange={handleSearchProduct} placeholder={placeholder} />
        </div>
    )
}