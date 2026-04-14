import execute from '../lib/execute.js'
export const cmds = ["uptime"];
export const exec = async (bot, msg, chatId, messageId) => {
  const format = (uptime) => {
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60); 
    const seconds = Math.floor(uptime % 60);
    
    let result = '';
    if (days > 0) {
        result += `${days} days `;
    }
    if (hours > 0 || days > 0) {
        result += `${hours} hours `;
    }
    if (minutes > 0 || hours > 0 || days > 0) {
        result += `${minutes} minutes `;
    }
    result += `${seconds} seconds`;
    
    return result.trim(); 
  };

  const getUptime = async () => {
    return new Promise((resolve) => {
      process.send('uptime');
      let up;
      process.once('message', (message) => {
        up = parseInt(message, 10);
        resolve(up);
      });
    });
  };
  const getUptimeOs = async () => {
        const upOs = await execute("cat /proc/uptime | awk '{print $1}'")
        
        const raw = parseFloat(upOs);
        const hours = Math.floor(raw / 3600);
        const minutes = Math.floor((raw / 60) % 60);
        const seconds = raw % 60;
        const res = `Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
        return upOs
  }

    const mainbot = process.uptime();
    const indukbot = await getUptime();
    const os = await getUptimeOs();
    const result = `
🖥️ Uptime OS        : ${format(os)}
🤖 Uptime Bot       : ${format(mainbot)}
👨‍👦 Uptime Main Bot : ${format(indukbot)}
`;
    await bot.reply(result);
};
