import React,{ useState } from 'react'

export default Getplaces = (input) => {
    var url = new URL("http://localhost:3000/account/search"),
        params = {input}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(res => {return res.json()})
    .then(places => {return places})
    .catch(err => {return err})

    //return result
}