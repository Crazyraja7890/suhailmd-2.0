const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "SUHAIL_09_53_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFK1d3OUdPMVJQSWFyeUlydmdwL1dNTnBsamhlWEVWbkZFS3lNdU5oZ1JrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk3MTU1NjE5NDg1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjlEMzEzN0VDQUUwOTI4NDVEM0YyMDg1ODc4OTRENkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNzM4MDI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5DRzFsdkdqUXBPaGNZMS1rMGE2YmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzk0ZmRlYzktMzE3Mi00Nzg1LWExODctZDc5MjU1YzZjMGJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDI1MCxcbiAgICAgIDIzNyxcbiAgICAgIDE0OSxcbiAgICAgIDEwMyxcbiAgICAgIDE5NSxcbiAgICAgIDIxNCxcbiAgICAgIDIzNixcbiAgICAgIDI0NyxcbiAgICAgIDIyOCxcbiAgICAgIDIyOCxcbiAgICAgIDMzLFxuICAgICAgMTgsXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDE4MCxcbiAgICAgIDMzLFxuICAgICAgMTgyLFxuICAgICAgMjMsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDcsXG4gICAgICAyMTMsXG4gICAgICA1MixcbiAgICAgIDEzNCxcbiAgICAgIDIyOSxcbiAgICAgIDIwOSxcbiAgICAgIDE0MyxcbiAgICAgIDEzMSxcbiAgICAgIDgsXG4gICAgICAyLFxuICAgICAgNTUsXG4gICAgICAyMTksXG4gICAgICAxMTIsXG4gICAgICAyMzMsXG4gICAgICAyNDgsXG4gICAgICAyMyxcbiAgICAgIDM0LFxuICAgICAgMTg3LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTGpxSlVFRUovODJyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNaMFhUaGZwZUNJMzV2ZlVhSFFRTDY4dUtEZWYxOG1xbVFKOTNyVmVsQW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieUwvUnlvYWowVVVtL1ppaVVsd0lML0ZOWHFkWEk2Tll1VVFId2RKcmMycFJLdG01c211VjhVQy9LWWM5dHR3dnZzZC9LbGdYVnkyYTFBUjl3UGxaREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUkxWa0VVK2d1dGxKWEVraGlBWkNPTHdobmZaZ2xTZlV2NTB4M1BONi9uaU9tRDJqN0FTODRKRzlHUzJqN0NxdnVjaHFYd25KS0xXTGpWc2V1VU5BaUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NzE1NTYxOTQ4NTQ6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCI8J2QrSfwnZCsIPCdkIrwnZCo8J2QrvCdkKzwnZCh8J2QovCdkKRcIixcbiAgICBcImxpZFwiOiBcIjEzMzQ1MDE3MDkwMjM3Ojk1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTcxNTU2MTk0ODU0Ojk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzczODAyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpyQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnErLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOTFsd3pYaHpOcUFGYnZFTXZRcDhxbVpYUDdRTCtqUkFGMU9Wdzg1SzN6RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTE4NDUwMDQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzNjM0OTI3NzM5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnE1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNEJSYjRCb3AwU1pNVks5SlhDcEdSc1pzb3FhNDdHZHRGZ3FTYjJ0R1BsMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTE4NDUwMDQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKcTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDR2U2N283UGp3RzFRQnl1M2draUI3Z0RWOXNGK2pMbUROOUVjZXBoVUpJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTg0NTAwNDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2MzA2MTAyODdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKcTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZdDhqbUErUlNZSUNPSW52Y1VqUnBzMWZ1NEFreDhmRGg2UDNIQkZWczE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTg0NTAwNDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpxOC5qc29uIjogIntcImtleURhdGFcIjpcImZHSVN5cUFsc0lwemE2WmdDUW5zLzBYMGIvSUlSaVgrYXpIL2Z0a1JYODQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExODQ1MDA0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzYzMjQ3MTk3MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpxOS5qc29uIjogIntcImtleURhdGFcIjpcIldWbWxBY1Z3R0V6TTBpdk01Z1NYbEN4SS9YN2VKYlJkOFRyVytkbUtDNzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExODQ1MDA0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnFfXy5qc29uIjogIntcImtleURhdGFcIjpcIjg4TVU1VGRiTzl4S3Y4MXhURzUxMXV5R1kxY0JVcm1BN25QL01TYkVNLzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExODQ1MDA0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnJBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajlNNzc2ampVVmJ4Qy9xTS9ydndjL3ZmNDc0NWcraUxOaG90RkwxYlJvUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTE4NDUwMDQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzNjQ2OTkyMDMzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnJCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTXpmeUUwb2RSdFVTYlc0N1dyeGxlNUk4UFFkV0E2d0JiSW0rK0cvQzkrMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTE4NDUwMDQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKckMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1UTNIM0RjMElzb3NXS3UyNzJOTCtRSVN5ZWV4R3JNVjBmL3R3R1QzZldNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTg0NTAwNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2NzU2NzI5MzlcIn0iCn0=";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
