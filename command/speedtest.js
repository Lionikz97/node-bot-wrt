import execute from '../lib/execute.js'

export const cmds = ["speedtest"];
export const exec = async (bot, msg, chatId, messageId) => {
    function formas(bytes) {
        const mbps = bytes / 125000;
        return mbps.toFixed(2) + ' mbps';
    }

    async function runSpeedtest(serverId = null) {
        try {
            let cmd = "speedtest --accept-license --f json";
            if (serverId) {
                cmd += ` --server-id ${serverId}`;
            }

            let stdout = await execute(cmd);
            const json = stdout.match(/\{[\s\S]*\}/)[0];
            let data = JSON.parse(json);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async function getRandomServerId() {
        try {
            let stdout = await execute("speedtest --servers --f json");
            const json = stdout.match(/\{[\s\S]*\}/)[0];
            let data = JSON.parse(json);

            if (data.servers && data.servers.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.servers.length);
                return `${data.servers[randomIndex].id} ${data.servers[randomIndex].name} ${data.servers[randomIndex].location}`;
            } else {
                await bot.reply("No server available")
                throw new Error("No server available");
            }
        } catch (error) {
            throw error;
        }
    }

    try {
        let data = await runSpeedtest();

        if (data.type == "result") {
            const waktu = new Date(data.timestamp).toLocaleString('id-ID', {
                timeZone: 'Asia/Kuala_Lumpur',
                hour12: false
            });

            let result = `
⚡ SPEEDTEST RESULT ⚡

🕒 Timestamp  : ${waktu}
🏓 Ping       : ${data.ping.latency} ms
⬇️ Download  : ${formas(data.download.bandwidth)}
⬆️ Upload    : ${formas(data.upload.bandwidth)}
🏢 ISP        : ${data.isp}
🌐 IP         : ${data.interface.externalIp}
🖥️ Server    : ${data.server.host}
📍 Name      : ${data.server.name}
📌 Location  : ${data.server.location}
🔗 Result    : ${data.result.url}
`;

            await bot.reply("success");
            await bot.sendPhoto(chatId, data.result.url, {
                caption: result,
                parse_mode: "html",
            });
        } else {
            throw new Error(data.message || "Speedtest failed");
        }
    } catch (error) {
        await bot.reply("first try failed, tried using a random server id ... waiting")

        try {
            let serverId = await getRandomServerId();
            bot.reply(`server id found 😃, is retrying using server id ${serverId}`)

            let data = await runSpeedtest(serverId);

            if (data.type == "result") {
                const waktu = new Date(data.timestamp).toLocaleString('id-ID', {
                    timeZone: 'Asia/Kuala_Lumpur',
                    hour12: false
                });

                let result = `
⚡ SPEEDTEST RESULT (Retry) ⚡

🕒 Timestamp  : ${waktu}
🏓 Ping       : ${data.ping.latency} ms
⬇️ Download  : ${formas(data.download.bandwidth)}
⬆️ Upload    : ${formas(data.upload.bandwidth)}
🏢 ISP        : ${data.isp}
🌐 IP         : ${data.interface.externalIp}
🖥️ Server    : ${data.server.host}
📍 Name      : ${data.server.name}
📌 Location  : ${data.server.location}
🔗 Result    : ${data.result.url}
`;

                console.log(result);
                await bot.reply("success (retry)");
                await bot.sendPhoto(chatId, data.result.url, {
                    caption: result,
                    parse_mode: "html",
                });
            } else {
                throw new Error(data.message || "Speedtest gagal (retry)");
            }
        } catch (retryError) {
            
            await bot.reply(`<blockquote>${retryError.message || retryError}\nUnfortunately sir, two attempts have still failed as well ☺️. I'm sorry!!!</blockquote>`);
        }
    }
};
