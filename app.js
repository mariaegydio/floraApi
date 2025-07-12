const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

let planta = {
    nome: 'Orquídea',
    status: 'Saudável',
    ultimaRegagem: new Date(),
    ultimoSol: new Date(),
    historico: []
};

function atualizarStatus() {
    const agora = new Date();
    const horasDesdeUltimaRegagem = (agora - new Date(planta.ultimaRegagem)) / (1000 * 60 *60);
    const horasDesdeUltimoSol = (agora - new Date(planta.ultimoSol)) / (1000 * 60 * 60);

    if (horasDesdeUltimaRegagem > 72 || horasDesdeUltimoSol > 72) {
        planta.status = 'Morta';
    } else if (horasDesdeUltimaRegagem > 48 || horasDesdeUltimoSol > 48) {
        planta.status = 'Murcha';
    } else {
        planta.status = 'Saudável';
    }
    }

app.post('/planta', (req, res) => {
    const { nome } = req.body;
    planta = {
        nome: nome || 'Planta sem nome',
        status: 'Saudável',
        ultimaRegagem: new Date(),
        ultimoSol: new Date(),
        historico: []
     };
res.json({mensagem: `Você adotou a planta ${planta.nome}`});
    });

app.get('/planta', (req, res) => {
    atualizarStatus();

    const plantaFormatada = {
        ...planta,
        ultimaRegagem: planta.ultimaRegagem
            ? new Date(planta.ultimaRegagem).toLocaleString('pt-BR')
            : null,
        ultimoSol: planta.ultimoSol
            ? new Date(planta.ultimoSol).toLocaleString('pt-BR')
            : null
    };

    res.json(plantaFormatada);
});


app.post('/regar', (req, res) => {
    planta.ultimaRegagem = new Date();
    planta.historico.push(`Regada em ${new Date().toLocaleString()}`);
    atualizarStatus();
    res.json({ mensagem: `Planta ${planta.nome} regada com sucesso!` });
});

app.post('/sol', (req, res) => {
    planta.ultimoSol = new Date();
    planta.historico.push(`Exposta ao sol em ${new Date().toLocaleString()}`);
    atualizarStatus();
    res.json({ mensagem: `Planta ${planta.nome} exposta ao sol com sucesso!` });
});

app.get('/historico', (req, res) => {
    res.json(planta.historico);
});

app.delete('/planta', (req, res) => {
    if (!planta.nome) {
        return res.status(404).json({ mensagem: 'Nenhuma planta para deletar.' });
    }

    const nomePlanta = planta.nome;
    planta = {
        nome: '',
        status: '',
        ultimaRegagem: null,
        ultimoSol: null,
        historico: []
    };

    res.json({ mensagem: `Planta ${nomePlanta} deletada com sucesso!` });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});