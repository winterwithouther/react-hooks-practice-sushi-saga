import React from "react";

function MoreCash({addCash}) {
    function handleSubmit(event) {
        event.preventDefault()
        const addedCash = parseInt(event.target.addingCash.value);
        console.log(addedCash)
        addCash(addedCash)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="add cash" name="addingCash" required></input>
            <input type="submit" value="add"></input>
        </form>
    </>
}

export default MoreCash