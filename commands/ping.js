// 🔰 CASTLE-BOT PREMIUM PING COMMAND 🔰
// Author: Mr. MANOJ
// Channel: https://whatsapp.com/channel/0029Vb6YUWsHrDZfhWaRuj15

const os = require('os');
const settings = require('../settings.js');

// ⏱️ Format uptime in a readable way
function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

// ⚙️ Main Ping Command
async function pingCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: '🏓 Checking connection...' }, { quoted: message });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);

        const uptimeFormatted = formatTime(process.uptime());
        const usedMemory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const totalMemory = (os.totalmem() / 1024 / 1024).toFixed(2);

        const botInfo = `
┏━━━〔 ⚡ *CASTLE-BOT STATUS* ⚡ 〕━━━┓
┃ 🚀 *Ping:* ${ping} ms
┃ ⏱️ *Uptime:* ${uptimeFormatted}
┃ 🧠 *RAM Used:* ${usedMemory} / ${totalMemory} MB
┃ 🔖 *Version:* v${settings.version}
┃ 👑 *Owner:* ${settings.ownerName || 'Mr. MANOJ'}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`.trim();

        // 🪄 Send message with “View Channel” button
        await sock.sendMessage(chatId, {
            text: botInfo,
            contextInfo: {
                externalAdReply: {
                    title: "⚡ CASTLE-BOT ONLINE ⚡",
                    body: "Tap below to join our official WhatsApp Channel 👇",
                    mediaType: 1,
                    thumbnailUrl: "https://i.imgur.com/vX5d7Wq.jpg", // optional bot logo or banner
                    sourceUrl: "https://whatsapp.com/channel/0029Vb6YUWsHrDZfhWaRuj15", // your channel link
                    showAdAttribution: true
                }
            }
        }, { quoted: message });

    } catch (error) {
        console.error('❌ Error in ping command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to get bot status.' });
    }
}

module.exports = pingCommand;
