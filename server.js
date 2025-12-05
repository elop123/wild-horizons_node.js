import http from 'node:http'
import { getDataFromDB } from './db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'

const PORT = 8000

const server = http.createServer(async (req, res)=>{
const destinations = await getDataFromDB()


if(req.url === '/api' && req.method === 'GET'){
sendJSONResponse(res,200, destinations)
}else if(req.url.startsWith('/api/continent') && req.method === 'GET')
    {
    const continent = req.url.split('/').pop()
    //console.log(continent)
    const filteredData =destinations.filter((destination)=>{
    return destination.continent.toLowerCase() === continent.toLowerCase()
        })
    sendJSONResponse(res,200, filteredData)
    } else{
    res.setHeader('Content-Type', 'application/json')
    sendJSONResponse(res,404, (
        {error: "not found", 
        message: "The requested route does not exist"
    }))
        
}
})

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))