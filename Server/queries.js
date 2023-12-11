const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'test8',
password: 'admin',
port: 5432,
})
const getPost = (request, response) => {
pool.query('SELECT * FROM Post', (error, results) => {
if (error) {
throw error
}
response.status(200).json(results.rows)
})
}
const createPost = (request, response) => {
const { customercode, firstname,lastname } = request.body
pool.query('INSERT INTO Post (Post_id, User_id, post_img) VALUES ($1,$2,$3', [Post_id, User_id, post_img], (error,
results) => {
if (error) {
throw error
}
response.status(201).send('postadded')
})
}
module.exports = {
getPost,
createPost
}