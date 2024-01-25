export default {
    // On créé une fonction qui va nous permettre de récupérer les articles sur l'API
    subscribeNewsletter: async (payload) => {
        const res = await fetch(`http://127.0.0.1:3000/newsletter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const message = await res.json();
        return message;
    }
}