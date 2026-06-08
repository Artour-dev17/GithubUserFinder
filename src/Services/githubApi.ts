
export async function getUser(username: string){
    const response = await fetch(`https://api.github.com/users/${username}`);

    return response.json();
}