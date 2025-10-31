const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═════════════════════════════════════════════════╗
*🕵 ${settings.botName || 'Castle-Bot'}*  
   Version: *${settings.version || '3.0.0'}*
   by ${settings.botOwner || '𝓜𝓻. 𝓜𝓐𝓝𝓞𝓙'}
   WC : ${global.ytch}
╚══════════════════════════════════════════════════╝

*Available Commands:*

╔═════════════════════════════╗
🌈 *General Command Center* 🌈
╠═════════════════════════════╣
║ ➤ .help or .menu      📜
║ ➤ .ping               🏓
║ ➤ .alive              ✅
║ ➤ .tts <text>         🗣️
║ ➤ .owner              👑
║ ➤ .joke               😂
║ ➤ .quote              💬
║ ➤ .fact               🧠
║ ➤ .weather <city>     ☀️
║ ➤ .news               📰
║ ➤ .attp <text>        🎨
║ ➤ .lyrics <song_title>🎵
║ ➤ .8ball <question>   🔮
║ ➤ .groupinfo          👥
║ ➤ .staff or .admins   🛡️
║ ➤ .vv                 🚀
║ ➤ .trt <text> <lang>  🌐
║ ➤ .ss <link>          📸
║ ➤ .jid                🆔
║ ➤ .url                🔗
╚═════════════════════════════╝

╔═════════════════════════════╗
🔥 *Admin Command Center* 🔥
╠═════════════════════════════╣
║ ➤ .ban @user          🚫
║ ➤ .promote @user      🔝
║ ➤ .demote @user       🔽
║ ➤ .mute <minutes>     🔇
║ ➤ .unmute             🔈
║ ➤ .delete or .del     🗑️
║ ➤ .kick @user         👞
║ ➤ .warnings @user     ⚠️
║ ➤ .warn @user         📢
║ ➤ .antilink           🔗
║ ➤ .antibadword        🤬
║ ➤ .clear              🧹
║ ➤ .tag <message>      🏷️
║ ➤ .tagall             👥
║ ➤ .tagnotadmin        🚷
║ ➤ .hidetag <message>  👻
║ ➤ .chatbot            🤖
║ ➤ .resetlink          🔄
║ ➤ .antitag <on/off>   🛑
║ ➤ .welcome <on/off>   👋
║ ➤ .goodbye <on/off>   😢
║ ➤ .setgdesc <desc>    📝
║ ➤ .setgname <name>    🏷️
║ ➤ .setgpp (reply img) 🖼️
╚═════════════════════════════╝

╔═════════════════════════════╗
👑 *Owner Command Hub* 👑
╠═════════════════════════════╣
║ ➤ .mode <public/private>     🔄
║ ➤ .clearsession              🗑️
║ ➤ .antidelete                🛡️
║ ➤ .cleartmp                  🧹
║ ➤ .update                    📡
║ ➤ .settings                  ⚙️
║ ➤ .setpp <reply to image>    🖼️
║ ➤ .autoreact <on/off>        😄
║ ➤ .autostatus <on/off>       📱
║ ➤ .autostatus react <on/off> 🔔
║ ➤ .autotyping <on/off>       ⌨️
║ ➤ .autoread <on/off>         👀
║ ➤ .anticall <on/off>         📞
║ ➤ .pmblocker <on/off/status> 🚫
║ ➤ .pmblocker setmsg <text>   💬
║ ➤ .setmention <reply to msg> 🏷️
║ ➤ .mention <on/off>          🔊
╚═════════════════════════════╝

╔═════════════════════════════╗
🖌️ *Image & Sticker Studio* 🖌️
╠═════════════════════════════╣
║ ➤ .blur <image>             🌫️
║ ➤ .simage <reply to sticker> 🖼️
║ ➤ .sticker <reply to image>  📌
║ ➤ .removebg                 🧼
║ ➤ .remini                   ✨
║ ➤ .crop <reply to image>    ✂️
║ ➤ .tgsticker <Link>         🔗
║ ➤ .meme                     😆
║ ➤ .take <packname>          📦
║ ➤ .emojimix <emj1>+<emj2>   😺
║ ➤ .igs <insta link>         📸
║ ➤ .igsc <insta link>        📹
╚═════════════════════════════╝  

╔═════════════════════════════╗
🍱 *Pies Command Gallery* 🍱
╠═════════════════════════════╣
║ ➤ .pies <country>     🌏
║ ➤ .china              🇨🇳
║ ➤ .indonesia          🇮🇩
║ ➤ .japan              🇯🇵
║ ➤ .korea              🇰🇷
║ ➤ .hijab              🧕
╚═════════════════════════════╝

╔═════════════════════════════╗
🍱 *Pies Command Gallery* 🍱
╠═════════════════════════════╣
║ ➤ .pies <country>     🌏
║ ➤ .china              🇨🇳
║ ➤ .indonesia          🇮🇩
║ ➤ .japan              🇯🇵
║ ➤ .korea              🇰🇷
║ ➤ .hijab              🧕
╚═════════════════════════════╝

╔═════════════════════════════╗
🤖 *AI Command Lab* 🤖
╠═════════════════════════════╣
║ ➤ .gpt <question>     🧠
║ ➤ .gemini <question>  🌟
║ ➤ .imagine <prompt>   🎨
║ ➤ .flux <prompt>      ⚡️
║ ➤ .sora <prompt>      🎥
╚═════════════════════════════╝

╔═════════════════════════════╗
😄 *Fun Command Fiesta* 😄
╠═════════════════════════════╣
║ ➤ .compliment @user   🌹
║ ➤ .insult @user       😣
║ ➤ .flirt              😘
║ ➤ .shayari           🖋️
║ ➤ .goodnight          🌙
║ ➤ .roseday            🌹
║ ➤ .character @user    🎭
║ ➤ .wasted @user       🥴
║ ➤ .ship @user         💞
║ ➤ .simp @user         😍
║ ➤ .stupid @user [text]🤪
╚═════════════════════════════╝

╔═════════════════════════════╗
✍️ *Textmaker Workshop* ✍️
╠═════════════════════════════╣
║ ➤ .metallic <text>    🪙
║ ➤ .ice <text>         ❄️
║ ➤ .snow <text>        ☃️
║ ➤ .impressive <text>  🌟
║ ➤ .matrix <text>      💾
║ ➤ .light <text>       💡
║ ➤ .neon <text>        🌌
║ ➤ .devil <text>       😈
║ ➤ .purple <text>      💜
║ ➤ .thunder <text>     ⚡️
║ ➤ .leaves <text>      🍃
║ ➤ .1917 <text>        📜
║ ➤ .arena <text>       🏟️
║ ➤ .hacker <text>      🖥️
║ ➤ .sand <text>        🏜️
║ ➤ .blackpink <text>   🎤
║ ➤ .glitch <text>      📺
║ ➤ .fire <text>        🔥
╚═════════════════════════════╝

╔═════════════════════════════╗
📥 *Downloader Station* 📥
╠═════════════════════════════╣
║ ➤ .play <song_name>   🎵
║ ➤ .song <song_name>   🎶
║ ➤ .spotify <query>    🎧
║ ➤ .instagram <link>   📸
║ ➤ .facebook <link>    📹
║ ➤ .tiktok <link>      🎬
║ ➤ .video <song name>  📼
║ ➤ .ytmp4 <Link>       ▶️
╚═════════════════════════════╝

╔═════════════════════════════╗
🧩 *MISC Command Vault* 🧩
╠═════════════════════════════╣
║ ➤ .heart              💖
║ ➤ .horny              😈
║ ➤ .circle             🔵
║ ➤ .lgbt               🌈
║ ➤ .lolice             🚨
║ ➤ .its-so-stupid      🤦
║ ➤ .namecard           🪪
║ ➤ .oogway             🐢
║ ➤ .tweet              🐦
║ ➤ .ytcomment          💬
║ ➤ .comrade            ☭
║ ➤ .gay                🏳️‍🌈
║ ➤ .glass              🥂
║ ➤ .jail               🔒
║ ➤ .passed             ✅
║ ➤ .triggered          😣
╚═════════════════════════════╝

╔═════════════════════════════╗
🌸 *Anime Command Realm* 🌸
╠═════════════════════════════╣
║ ➤ .neko              😺
║ ➤ .waifu             👩
║ ➤ .loli              👧
║ ➤ .nom               🍽️
║ ➤ .poke              👈
║ ➤ .cry               😢
║ ➤ .kiss              💋
║ ➤ .pat               🤗
║ ➤ .hug               🥰
║ ➤ .wink              😘
║ ➤ .facepalm          🤦
╚═════════════════════════════╝

╔═════════════════════════════╗
🌸 *Anime Command Realm* 🌸
╠═════════════════════════════╣
║ ➤ .neko              😺
║ ➤ .waifu             👩
║ ➤ .loli              👧
║ ➤ .nom               🍽️
║ ➤ .poke              👈
║ ➤ .cry               😢
║ ➤ .kiss              💋
║ ➤ .pat               🤗
║ ➤ .hug               🥰
║ ➤ .wink              😘
║ ➤ .facepalm          🤦
╚═════════════════════════════╝

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419669505478@newsletter',
                        newsletterName: 'Castle-Bot',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419669505478@newsletter',
                        newsletterName: 'Castle-Bot',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
