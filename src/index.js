document.addEventListener('DOMContentLoaded', () => {
    let CACHE = []

    function UpdateConsole() {
        u('#console').html('');
        CACHE.forEach(I => {
            u('#console').append(`<li>${I}</li>`);
        });

        const consoleElement = u('.chat-output').first();
        consoleElement.scrollTop = consoleElement.scrollHeight;
    }

    u('.send-button').on('click', () => {
        let a = u('#userInput').first()
        const datos = `user: ${a.value}`;
        if (a.value.length < 3) {
            return;
        }
        a.value = ""
        CACHE.push(datos);
        console.log(CACHE);

        UpdateConsole();
    });

    UpdateConsole();
});
