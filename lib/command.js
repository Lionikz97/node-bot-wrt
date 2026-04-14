/*
    create rick qsyaerick
    github github.com/ahmadqsyaa
    telegram t.me/rickk1kch
    beri sedikit rezekinya kepada saya hehe 
    => 083173888147 (dana, gopay, shopeepay)
*/
import execute from '../lib/execute.js'
/*
button keyboard
*/
const keymenu = [
  ['/menu'],
  ['/infobot','/uuidgen', '/cpustat','/modpes'],
  ['/ping', '/uptime','/time','/clear'],
  ['/setnamebot', '/command','/cmd','/stopbot'],
  ['/process','/kill', '/cekbug','/sub'],
  ['/restartbot','/speedtest','/firewall','/mmsmss'],
  ['/ocproxy','/ocrules','/octrafic','/openclash'],
  ['/passwall','/button','/mmsms','/mmsmsd',],
  ['/adb','/vnstat','/vnstati','/dhcpl'],
  ['/opkgup','/opkglist','/opkgin','/help'],
  ['/upfile','/dlfile','/service','/myip'],
  ['/getsms','/getcount','/infomodem','/sendsms'],
  ['/deletesms','/rebootmodem','/proc','/ifconfig'],
  ['/reboot','/opkgupg','/update','/base64'],
  ['/curl','/wget','/git','/3ginfo'],
  ['/startup', '/crontab', '/adguard', '/synctime'],
  ['/pingall', '/mihomo', '/miproxy', '/readlog'],
  ['/clearlog', '/neproxy', '/nerules', '/netrafic'],
  ['/neko', '/traceroute', '/nslookup', '/dnslookup', ],
  ['/yacd', '/setband', '/droidnet', '/droidsms'],
  ['/system', '/infonokia', '/nikki', '/niproxy']
];


/*
command
*/
const commands = [
    { command: 'service', description: 'service app start, stop dll' },
    { command: 'menu', description: 'show command bot' },
    { command: 'ping', description: 'ping google or ping a specified <host>'},
    { command: 'uptime', description: "view the bot's uptime" },
    { command: 'time', description: 'get the time from OpenWrt' },
    { command: 'clear', description: 'clear RAM cache' },
    { command: 'setnamebot', description: "set the bot's name" },
    { command: 'command', description: 'enable or disable the command menu' },
    { command: 'cmd', description: 'run a command as terminal' },
    { command: 'stopbot', description: 'stop the bot' },
    { command: 'process', description: 'view running application processes' },
    
    { command: 'kill', description: 'stop a running application process ' },
    { command: 'cekbug', description: 'ping to a domain to one of the interfaces' },
    { command: 'sub', description: 'system information' },
    { command: 'restartbot', description: 'restart the bot' },
    { command: 'speedtest', description: 'perform a public speedtest' },
    { command: 'firewall', description: 'view all firewall rules' },
    { command: 'mmsmss', description: 'send SMS with Modem Manager' },
    { command: 'ocproxy', description: 'view all OpenClash proxies' },
    { command: 'ocrules', description: 'view all OpenClash rules' },
    { command: 'octrafic', description: 'view OpenClash traffic' },
    
    { command: 'openclash', description: 'OpenClash menu' },
    { command: 'passwall', description: 'Passwall menu' },
    { command: 'button', description: 'enable or disable keyboard buttons' },
    { command: 'mmsms', description: 'Modem Manager menu' },
    { command: 'mmsmsd', description: 'delete SMS with Modem Manager' },
    { command: 'adb', description: 'ADB menu' },
    { command: 'vnstat', description: 'display vnstat information for the specified interface' },
    { command: 'vnstati', description: 'generate network monitoring images' },
    { command: 'dhcpl', description: 'view DHCP lease list' },
    { command: 'opkgup', description: 'update OpenWrt packages' },
    
    { command: 'opkglist', description: 'view installed packages' },
    { command: 'opkgin', description: 'install OpenWrt packages' },
    { command: 'help', description: 'display help information' },
    { command: 'upfile', description: 'upload a file, photo, video to OpenWrt with the specified document type' },
    { command: 'dlfile', description: 'send a file, photo, video from OpenWrt to the bot' },
    { command: 'getsms', description: 'SMS menu (only for Huawei modems)' },
    { command: 'getcount', description: 'view SMS inbox count (only for Huawei modems)' },
    { command: 'infomodem', description: 'view modem information (only for Huawei modems)' },
    { command: 'sendsms', description: 'send SMS (only for Huawei modems)' },
    { command: 'deletesms', description: 'delete SMS menu (only for Huawei modems)' },
    
    { command: 'system', description: 'system information' },
    { command: 'proc', description: 'CPU information' },
    { command: 'ifconfig', description: 'network information' },
    { command: 'reboot', description: 'reboot menu' },
    { command: 'opkgupg', description: 'upgrade OpenWrt packages' },
    { command: 'update', description: 'cek updates bot' },
    { command: 'base64', description: 'base64 decode and encode' },
    { command: 'curl', description: 'download a file from the web' },
    { command: 'wget', description: 'download a file from the web' },
    { command: 'git', description: 'git <command> / git clone' },
    
    { command: '3ginfo', description: '3ginfo-lite menu modem 4g'},
    { command: 'myip', description: 'my ip information'},
    { command: 'cpustat', description: 'status cpu and temperature'},
    { command: 'uuidgen', description: 'generate uuid'},
    { command: 'modpes', description: 'airplane mode restart'},
    { command: 'crontab', description: 'crontab menu'},
    { command: 'startup', description: 'startup menu'},
    { command: 'adguard', description: 'adguardhome status'},
    { command: 'synctime', description: 'sync time from web'},
    { command: 'pingall', description: 'pingall to host'},
    
    { command: 'mihomo', description: 'service mihomo'},
    { command: 'miproxy', description: 'check proxy mihomo'},
    { command: 'readlog', description: 'read log error 10 line'},
    { command: 'clearlog', description: 'clear all log error'},
    { command: 'neproxy', description: 'view all proxy neko clash'},
    { command: 'nerules', description: 'view all rules neko clash'},
    { command: 'netrafic', description: 'view all traffic neko clash'},
    { command: 'neko', description: 'service neko clash'},
    { command: 'traceroute', description: 'hows the path packets take to a destination.'},
    { command: 'nslookup', description: 'queries DNS for domain information (IP addresses, etc.). '},
    
    { command: 'dnslookup', description: 'similar to nslookup; resolves domain names to IP addresses. '},
    { command: 'yacd', description: 'yacd dashboard change proxies from button'},
    { command: 'setband', description: 'change band modem huawei'},
    { command: 'droidnet', description: 'menu droidnet / droidmodem'},
    { command: 'droidsms', description: 'send sms for android modem'},
    { command: 'infobot', description: 'info detail bot, project, dan dependencies'},
    { command: 'rebootmodem', description: 'reboot modem for huawei'},
    { command: 'infonokia', description: 'info detail modem nokia'},
    { command: 'nihomo', description: 'service nikki'},
    { command: 'niproxy', description: 'check proxy nikki'},
];
const listcomnd = commands.map(command => command.command);
/* */
//ping domain

const domains = [' google.com', ' github.com',' facebook.com', ' whatsapp.com', ' cloudflare.com', ' x.com', ' 1.1.1.1', ' 8.8.8.8', ' 9.9.9.9', ' tiktok.com', ' telegram.com', ];
 
/*
menu command
*/
function formatwaktu() {
  const now = new Date();
  const days = ["Sun", "Mon", "Tues", "Wedn", "Thurs", "Frd", "Satur"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayName = days[now.getDay()];
  const day = String(now.getDate()).padStart(2, '0');
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${dayName}, ${day} ${month} ${year} — ${hours}:${minutes}:${seconds}`;
}

const getUptimeOs = async () => {
  const upOs = await execute("cat /proc/uptime | awk '{print $1}'");
  const raw = parseFloat(upOs);

  const days = Math.floor(raw / 86400); // 86400 detik = 1 hari
  const hours = Math.floor((raw % 86400) / 3600);
  const minutes = Math.floor((raw % 3600) / 60);
  const seconds = Math.floor(raw % 60);

  let res = "";
  if (days > 0) {
    res += `${days}d, `;
  }
  res += `${hours}h, ${minutes}m, ${seconds}s`;

  return res;
};

  
const today = new Date();
const currentHour = today.getHours();
const hours = String(today.getHours()).padStart(2, '0');
const minutes = String(today.getMinutes()).padStart(2, '0');
const seconds = String(today.getSeconds()).padStart(2, '0');
const time = `${hours}:${minutes}:${seconds}`;

let greeting;

if (hours >= 5 && hours < 12) {
  greeting = "Good Morning 🌅";
} else if (hours >= 12 && hours < 15) {
  greeting = "Good Afternoon ☀️";
} else if (hours >= 15 && hours < 18) {
  greeting = "Good Evening 🌄";
} else {
  greeting = "Good Night 🌃";
}

const listmenu = `
<blockquote>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${greeting} || ${formatwaktu()}

⏱️ Uptime: ${await getUptimeOs()}
🌐 WAN: ${await execute(`ifstatus wan | jsonfilter -e '@["ipv4-address"][0].address'`)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                         OPENWRT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /dhcpl      View DHCP lease list
» /cmd        Run a terminal command
» /clear      Clear RAM cache
» /firewal    View all firewall rules
» /proc       CPU information
» /reboot     Reboot system
» /system     System information
» /cpustat    CPU and temperature info
» /service    Manage services (start, stop, etc.)
» /ifconfig   Network information
» /time       Get time from OpenWrt
» /process    View running processes
» /kill       Stop a running process
» /opkgin     Install OpenWrt packages
» /opkgupg    Upgrade OpenWrt packages
» /opkglist   List installed packages
» /opkgup     Update package list
» /vnstat     Display vnStat interface info
» /vnstati    Generate vnStat traffic image
» /startup    Startup configuration menu
» /crontab    Crontab configuration menu
» /adguard    AdGuard status
» /synctime   Sync time from the web
» /pingall    Ping all hosts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
               DROIDMODEM / ANDROID 10
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /droidnet   Droidmodem menu
» /droidsms   Send SMS from Android modem
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        MODEM HUAWEI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /infomodem  View modem information
» /deletesms  Delete SMS
» /getsms     View SMS inbox
» /getcount   Check SMS inbox count
» /sendsms    Send SMS
» /rebootmodem Reboot modem
» /setband    Change 4G band
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      MODEM MANAGER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /mmsms      Modem Manager menu
» /mmsmsd     Delete SMS via Modem Manager
» /mmsmss     Send SMS via Modem Manager
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                      MODEM NOKIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /infonokia      Info modem nokia
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                              ADB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /adb        ADB menu
» /modpes     Toggle airplane mode
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        TOOL INJECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /openclash  OpenClash menu
» /passwall   Passwall menu
» /ocrules    View OpenClash rules
» /ocproxy    View OpenClash proxies
» /octrafic   View OpenClash traffic
» /mihomo     Mihomo menu
» /miproxy    Check Mihomo proxies
» /nihomo     Nikki menu
» /niproxy    Check Nikki proxies
» /neproxy    View NekoClash proxies
» /nerules    View NekoClash rules
» /netrafic   View NekoClash traffic
» /neko       NekoClash menu
» /yacd       Yacd dashboard (Meta)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                              BOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /infobot    info detail bot, project, dan dependencies
» /uptime     View bot uptime
» /restartbot Restart the bot
» /stopbot    Stop the bot
» /button     Enable/disable keyboard buttons
» /command    Enable/disable command menu
» /setnamebot Set bot name
» /update     Update bot
» /readlog    View bot error logs
» /clearlog   Clear bot error logs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                              TOOL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
» /curl       Download a file from the web
» /git        Git commands / clone repository
» /wget       Download a file from the web
» /ping       Ping Google or a custom host
» /cekbug     Ping a domain from a specific interface
» /sub        Convert vmess/vless etc. to proxy file
» /myip       View IP information
» /3ginfo     3ginfo-lite menu (4G modem info)
» /base64     Encode or decode base64
» /uuidgen    Generate UUID
» /speedtest  Perform a public speedtest
» /upfile     Upload file/photo/video to OpenWrt
» /dlfile     Send file/photo/video from OpenWrt
» /help       Show help information
» /traceroute Trace packet route to destination
» /nslookup   Resolve domain name to IP address
» /dnslookup  Query DNS records
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
github.com/ahmadqsyaa ⭐
Support me: 083173888147 (dana)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
</blockquote>
`;


export { keymenu, commands, listmenu, listcomnd, domains };
