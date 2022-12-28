import axios from "axios";

axios.get("https://api.github.com/users/esmaily87")
    .then(res => {
        console.log(res.data);
    });