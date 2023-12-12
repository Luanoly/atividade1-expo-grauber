import axios from "axios";

export async function handleLogin() {
    return await axios.post("rota").then(res => res).catch(err => err)
}