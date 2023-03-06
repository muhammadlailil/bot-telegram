import generateChartSaham from "./image-generator.js";
import { c1dUrl } from "./trade-link/c1d.js";
import { c1hUrl } from "./trade-link/c1h.js";
import { c2dUrl } from "./trade-link/c2d.js";
import { c2hUrl } from "./trade-link/c2h.js";
import fs from "fs"
import { allEmitenList } from "./available-emiten.js";

const availableCommand = ['/c1', '/c2']
export default function handleRequest(msg, bot) {
     try {
          let text = msg.text;
          text = text.split(' ')
          const command = text[0];
          if (availableCommand.includes(command)) {
               let emiten = text[1];
               if (emiten) {
                    emiten = emiten?.toUpperCase()
                    if (allEmitenList.includes(emiten)) {
                         let link = null
                         let format = text[2] || 'd'
                         switch (format) {
                              case 'h':
                                   link = getLinkHourly(command, emiten)
                                   break;
                              default:
                                   link = getLinkDaily(command, emiten)
                                   break;
                         }
                         if (link) {
                              const name = `${emiten}-${randomStr(19)}`
                              generateChartSaham(link, name)
                              const chatId = msg.chat.id;
                              let readStream = fs.createReadStream(`../cart-trade/${name}.jpg`);
                              bot.sendPhoto({
                                   chat_id: chatId,
                                   caption: 'This is test response',
                                   photo: readStream//replace your image url here
                              }).then(function (data) {
                                   console.log(data);
                              });
                         }
                    }
               }
          }
     } catch (err) {
          console.log(err)
     }
}


function getLinkDaily(command, emiten) {
     switch (command) {
          case '/c1':
               return c1dUrl(emiten)
          case '/c2':
               return c2dUrl(emiten)
          default:
               return null
     }
}
function getLinkHourly(command, emiten) {
     switch (command) {
          case '/c1':
               return c1hUrl(emiten)
          case '/c2':
               return c2hUrl(emiten)
          default:
               return null
     }
}

function randomStr(length) {
     let result = '';
     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     const charactersLength = characters.length;
     let counter = 0;
     while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
     }
     return result;
}