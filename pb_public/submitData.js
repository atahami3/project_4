const USERNAME = 'atahami3@csu.fullerton.edu'
const PASSWORD = '123cpsc-349'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
)



function App () {

  console.log(stuff)

    const data = {
        "data": "ABC1234",
        "enabled": true
    };

    const record = await pb.collection('diary').create(data);


  return (
    <div className='App'>
      <h1>Hello, {authData.admin.email}</h1>




    </div>
  )
}