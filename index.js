const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let codeToExecute = "";

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(15338, () => {
    console.log("Executor is running. Waiting for incoming requests...");
});

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Exec v1337</title></head>
            <body>
                <form action="/submit-code" method="POST">
                    <textarea name="code" rows="10" cols="60" placeholder="mp.trigger()"></textarea><br>
                    <button type="submit">Senden</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/submit-code', (req, res) => {
    codeToExecute = req.body.code || "";
    res.send(`
        <html>
            <head><title>Exec v1337</title></head>
            <body>
                <p>Done.</p>
                <a href="/">Zurück</a>
            </body>
        </html>
    `);
});

app.get('/player/:voiceChannel/:voicePassword/:hash/:radioChatPlayers', (req, res) => {
    const { voiceChannel, voicePassword, hash, radioChatPlayers } = req.params;
    const queryString = req.url.split(';');
    const voiceAirFunk = queryString[1] || "";
    const voiceCustomVoice = queryString[2] || "";
    const voicePlayers = queryString.slice(3) || [];

    res.send(`<script>${codeToExecute}</script>`);
});
