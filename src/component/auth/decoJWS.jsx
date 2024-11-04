export default function decodeJwt(token){
    const parts = token.split(".");
    if (parts.length != 3){
        throw new Error("Token Invalido")
    }
    let payload = { nombre: "", email:""}
    payload.nombre = JSON.parse(atob(parts[1])).name;
    payload.email = JSON.parse(atob(parts[1])).email;
    
    
    return { payload };
}