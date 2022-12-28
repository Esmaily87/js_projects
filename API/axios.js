/*import axios from "axios";

axios.get("https://api.github.com/users/esmaily87")
    .then(res => {
        console.log(res.data);
    });*/

    import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;

