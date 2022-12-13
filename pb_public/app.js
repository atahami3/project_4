const USERNAME = "atahami3@csu.fullerton.edu";
const PASSWORD = "123cpsc-349";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
);
async function onClicker() {
  console.log(stuff);
  const data = {
    "data": "ABC1234",
    "enabled": true
  };
  const record = await pb.collection("diary").create(data);
}
function App() {

  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement("h1", null, "Hello, ", authData.admin.email));
}
