document.addEventListener('DOMContentLoaded', () => {
    let intervalTime = sessionStorage.getItem('reload') || 1000;
    sessionStorage.setItem('reload', intervalTime);

    setInterval(() => {
        const time = new Date();
        const formatDate = (unit) => unit.toString().padStart(2, '0');
        const DIA = formatDate(time.getDate());
        const MES = formatDate(time.getMonth() + 1);
        const YEAR = time.getFullYear();
        const HORA = formatDate(time.getHours());
        const MINU = formatDate(time.getMinutes());
        const SEGU = formatDate(time.getSeconds());

        u('.time').text(`${DIA}/${MES}/${YEAR} - ${HORA}:${MINU}:${SEGU}`);
    }, 1000);

    const input = u('.user-input');
    const consolePanel = u('#console');

    const mantenerFoco = () => input.first().focus();
    input.on('blur', mantenerFoco);
    mantenerFoco();

    // Función generalizada para mostrar los outputs con intervalo
    const mostrarConIntervalo = (outputs) => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < outputs.length) {
                consolePanel.append(`<li>${outputs[i]}</li>`);
                i++;
            } else {
                clearInterval(interval);
            }
        }, intervalTime);
    };

    const Inspe = (command) => {
        const intervalTime = sessionStorage.getItem('reload') || 1000;

        // Comando 'help'
        if (command === 'help') {
            mostrarConIntervalo([
                ' - - - Console Commands - - - ',
                '- cd',
                '- os',
                '- dir',
                '- echo',
                '- off',
                '- cls',
                '- inf',
                ' - - - special command - - -',
                '- refresh/off (desactiva el refresh time)',
                '- refresh/xxx (establece el tiempo de refresh)',
                '- refresh/on (establece el tiempo de refresh en default)',
            ]);
        }
        // Comando 'os'
        else if (command === 'os') {
            mostrarConIntervalo([
                ' - - power by - - ',
                `os -> ${navigator.platform}`,
                `nucleos -> ${navigator.hardwareConcurrency}`,
                `ram -> ${navigator.deviceMemory} GB`,
            ]);
        }
        // Comando 'inf'
        else if (command === 'inf') {
            mostrarConIntervalo([
                ' - - build by - - ',
                '- html',
                '- css',
                '- js',
                '- umbrella js',
            ]);
        }
        // Comando 'cls' o 'clear' para limpiar la consola
        else if (command === 'cls' || command === 'clear') {
            u('ul li').remove();
        }
    };

    input.on('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = input.first().value.trim();
            if (command) {
                Inspe(command);
                input.first().value = '';
            }
            u('#console-panel').first().scrollTop = u('#console-panel').first().scrollHeight;
        }
    });
});
