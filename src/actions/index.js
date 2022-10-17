export async function getAllUsers() {
    let payload = [];
    let loading = true;
    await fetch(`https://gorest.co.in/public/v2/users`)
        .then((resp) => {
            return resp?.json();
        })
        .then((data) => {
            loading = false;
            payload = {data : data , isLoading : loading , error : null}
        })
        .catch((error) => {
            payload = { data: null, isLoading: false , error : error };
        })

    return {
        type: 'listUsers',
        payload
    }
}