const airtableApiKey = "keyxKLyGsda5BZMRt"
const airtableDatabaseUrl = "https://api.airtable.com/v0/appTjfojcjMMkHRxO/Images"
const authenticatedUrl = airtableDatabaseUrl + "?api_key" + airtableApiKey
const fetchpromise = fetch(authenticatedUrl)
console.log(authenticatedUrl)
promise.then((response) => {
    return response.json()
})
jsonpromise.then((data) => { 
    console.log(data)
})