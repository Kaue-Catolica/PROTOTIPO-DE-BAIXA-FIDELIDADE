const exercises = [
    {
        title: "Olá, Mundo!",
        description: "Escreva um programa em C que imprima 'Olá, Mundo!' no console.",
        initialCode: '#include <stdio.h>\n\nint main() {\n    // Seu código aqui\n    return 0;\n}',
        solution: '#include <stdio.h>\n\nint main() {\n    printf("Olá, Mundo!");\n    return 0;\n}'
    },
    {
        title: "Soma de dois números",
        description: "Escreva um programa em C que soma dois números inteiros e imprime o resultado.",
        initialCode: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = 3;\n    // Seu código aqui\n    return 0;\n}',
        solution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = 3;\n    printf("A soma de %d e %d é %d", a, b, a + b);\n    return 0;\n}'
    }
];

const exerciseSelect = document.getElementById('exercise-select');
const exerciseTitle = document.getElementById('exercise-title');
const exerciseDescription = document.getElementById('exercise-description');
const codeInput = document.getElementById('code-input');
const runCodeButton = document.getElementById('run-code');
const codeOutput = document.getElementById('code-output');

function loadExercise(index) {
    const exercise = exercises[index];
    exerciseTitle.textContent = exercise.title;
    exerciseDescription.textContent = exercise.description;
    codeInput.value = exercise.initialCode;
}

exerciseSelect.addEventListener('change', (e) => {
    loadExercise(parseInt(e.target.value));
});

runCodeButton.addEventListener('click', async () => {
    const code = codeInput.value;
    runCodeButton.disabled = true;
    runCodeButton.textContent = 'Executando...';

    try {
        const response = await fetch('http://localhost:3001/compile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        });

        const data = await response.json();

        if (response.ok) {
            codeOutput.textContent = data.output;
        } else {
            codeOutput.textContent = `Erro: ${data.error}\n${data.details || ''}`;
        }
    } catch (error) {
        codeOutput.textContent = `Erro ao conectar com o servidor: ${error.message}`;
    } finally {
        runCodeButton.disabled = false;
        runCodeButton.textContent = 'Executar Código';
    }
});

// Carregar o primeiro exercício ao iniciar
loadExercise(0);