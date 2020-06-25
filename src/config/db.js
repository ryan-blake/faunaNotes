const faunadb = require('faunadb')

// your secret hash
const secret = process.env.FAUNADB_SECRET_KEY_NOTES
const q = faunadb.query
const client = new faunadb.Client({ secret })
// client.query(q.CreateCollection({ name: 'notes' }))
// .then((ret) => console.log(ret))

// client.query(
//   q.CreateIndex({
//     name: 'notes',
//     source: q.Collection('notes'),
//   })
// )
// .then((ret) => console.log(ret))


export { client , q }
