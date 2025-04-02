import { pool } from "../pool.js"

const getUsers = (callback) => {
    pool.query("SELECT * FROM users", (err, results) =>{
        if(err){
            console.log(err)
            return
        }
        callback(results)
    })
}

export default getUsers