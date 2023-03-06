import express from "express";
import { Log } from "./logger.js";
const app = express();

import TelegramBot from "node-telegram-bot-api";
const token = '5925269914:AAGoQhZXDQt9WW347Sx---yTOBFrQrAWqxk';
const bot = new TelegramBot(token, { polling: true });
const port = 5000

bot.onText(/\/echo (.+)/, (msg, match) => {
     const chatId = msg.chat.id;
     const resp = match[1]; // the captured "whatever"
     bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
     Log(`message = ${JSON.stringify(msg)}`)
     const chatId = msg.chat.id;
     bot.sendMessage(chatId, 'Received your message');
});

app.listen(port, () => {
     console.log(`absensi bot running in port ${port}`)
})