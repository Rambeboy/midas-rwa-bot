const _0x3dd11f=_0x2382;(function(_0x26082c,_0x576e95){const _0x90eceb=_0x2382,_0x3ff35d=_0x26082c();while(!![]){try{const _0x436a9c=parseInt(_0x90eceb(0x138))/0x1*(parseInt(_0x90eceb(0x13c))/0x2)+parseInt(_0x90eceb(0x159))/0x3*(-parseInt(_0x90eceb(0x166))/0x4)+parseInt(_0x90eceb(0x12a))/0x5+-parseInt(_0x90eceb(0x144))/0x6*(-parseInt(_0x90eceb(0x161))/0x7)+parseInt(_0x90eceb(0x139))/0x8+parseInt(_0x90eceb(0x171))/0x9+-parseInt(_0x90eceb(0x130))/0xa;if(_0x436a9c===_0x576e95)break;else _0x3ff35d['push'](_0x3ff35d['shift']());}catch(_0x193c0d){_0x3ff35d['push'](_0x3ff35d['shift']());}}}(_0x53ac,0x22197));function _0x2382(_0x4bfc05,_0x43ed18){const _0x53aca7=_0x53ac();return _0x2382=function(_0x238257,_0x509115){_0x238257=_0x238257-0x11f;let _0x37453a=_0x53aca7[_0x238257];return _0x37453a;},_0x2382(_0x4bfc05,_0x43ed18);}import _0x4a5b86 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import _0x60335b from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';function _0x53ac(){const _0x148389=['filter','indexOf','warn','RequestWebView','getTelegramQuery','resetAccounts','Please\x20Enter\x20Telegram\x20Query\x20:\x20','Session\x20','Invalid\x20input,\x20Please\x20try\x20again','useSession','497133BTQOnF','length','\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again','queryModificaiton','queryCreation','bot','invoke','stringify','agent','query-','session','log','text','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','Your\x20Account\x20List\x20:\x0a\x20\x0a','peer','530850mLJrmw','Your\x20Query\x20Account\x20List\x20:\x0a\x20\x0a','\x0a\x20\x0aPlease\x20Select\x20Query\x20Account\x20for\x20modification:','sessionCreation','accountName','\x0a\x20\x0aPlease\x20Enter\x20New\x20Query\x20','5488130hNajuR','getEntity','includes','accounts/','disconnect','sessions-','https://midas-tg-app.netlify.app/','accounts','1IznBMI','1751752lkrAAy','\x20-\x20Webview\x20Connected','delay','238482FcJiuR','createDir','url','serverAddress','messages','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Account\x20Name\x20:','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','\x0a\x20\x0a1.\x20Create\x20Account\x20\x0a2.\x20Reset\x20Account\x20\x0a3.\x20Start\x20Bot\x0a4.\x20Query\x20modification\x0a\x20\x0aInput\x20your\x20choice\x20:','174bJoclD','Query\x20','TELEGRAM_APP_ID','\x20|\x20FloodWait\x20','message','\x20-\x20Created','resolvePeer','\x0a\x20\x0aYou\x20already\x20have\x20Account,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Account\x20:','proxy','android','query','onBoarding','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','exit','Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first','Welcome\x20to\x20Bot\x20\x0aBy\x20:\x20Nofan\x20Rambe\x0a\x20\x0aLet\x27s\x20Getting\x20Started.\x0a\x0aYour\x20Session\x20List:\x0a','getSession','<empty>\x0a','TELEGRAM_APP_HASH','storeSession','accountType','3zcCRvd','save','/query.txt','saveQueryFile','\x20|\x20Sleep\x20','seconds','readQueryFile','error','66059pIcoYP','You\x20don\x27t\x20have\x20any\x20Accounts,\x20please\x20create\x20first','info','client','init','339224tmRlXs'];_0x53ac=function(){return _0x148389;};return _0x53ac();}import{HttpsProxyAgent}from'https-proxy-agent';export class Telegram{[_0x3dd11f(0x157)];constructor(){const _0x4dc100=_0x3dd11f;this[_0x4dc100(0x12e)]='accounts',this[_0x4dc100(0x13e)]=_0x4dc100(0x136),this['bot']='@MidasRWA_bot';}async[_0x3dd11f(0x165)](){const _0x2d5548=_0x3dd11f;try{await this[_0x2d5548(0x14f)]();}catch(_0x1a2319){console[_0x2d5548(0x125)](_0x1a2319),_0x60335b['error'](''+JSON[_0x2d5548(0x121)](_0x1a2319));throw _0x1a2319;}}async[_0x3dd11f(0x14f)](){const _0xb38348=_0x3dd11f;try{let _0x270ef5=_0xb38348(0x153);const _0x45c358=Helper['getSession'](_0xb38348(0x137));if(_0x45c358['length']==0x0)_0x270ef5+='<empty>';else for(const _0x3cd407 of _0x45c358){_0x270ef5+='-\x20'+_0x3cd407+'\x0a';}_0x270ef5+=_0xb38348(0x127),_0x270ef5+=_0xb38348(0x143);const _0x4f56e6=await _0x4a5b86['text'](_0x270ef5);if(_0x4f56e6==0x1)await this[_0xb38348(0x158)]();else{if(_0x4f56e6==0x2)Helper[_0xb38348(0x16c)](),await Helper['delay'](0xbb8),await this[_0xb38348(0x14f)]();else{if(_0x4f56e6==0x3)Helper[_0xb38348(0x154)](this[_0xb38348(0x12e)])?.['length']==0x0&&(console[_0xb38348(0x163)](_0xb38348(0x162)),await this[_0xb38348(0x14f)]());else _0x4f56e6==0x4?await this[_0xb38348(0x174)]():(console['error']('Invalid\x20input,\x20Please\x20try\x20again'),await this[_0xb38348(0x14f)]());}}}catch(_0x2c1ab7){throw _0x2c1ab7;}}async[_0x3dd11f(0x174)](){const _0x3b4fd5=_0x3dd11f;try{const _0x52e369=Helper['getSession'](_0x3b4fd5(0x137)),_0x8d82b3=_0x52e369[_0x3b4fd5(0x167)](_0xb4fc5f=>_0xb4fc5f[_0x3b4fd5(0x132)](_0x3b4fd5(0x14e)));let _0x1ca551=_0x3b4fd5(0x12b);for(const _0x127fe7 of _0x8d82b3){_0x1ca551+=_0x52e369[_0x3b4fd5(0x168)](_0x127fe7)+0x1+'.\x20'+_0x127fe7+'\x0a';}_0x8d82b3[_0x3b4fd5(0x172)]==0x0?(console[_0x3b4fd5(0x125)]('You\x20dont\x20have\x20any\x20Query\x20Account.'),await this[_0x3b4fd5(0x14f)]()):_0x1ca551+=_0x3b4fd5(0x12c);const _0xb9bb07=await _0x4a5b86[_0x3b4fd5(0x126)](_0x1ca551);if(_0x8d82b3[_0xb9bb07-0x1]!=undefined){const _0xc96024=_0x8d82b3[_0xb9bb07-0x1];this[_0x3b4fd5(0x12e)]=_0x3b4fd5(0x133)+_0xc96024;const _0x297804='Old\x20Query\x20:\x20'+Helper[_0x3b4fd5(0x15f)](this[_0x3b4fd5(0x12e)]+_0x3b4fd5(0x15b))+_0x3b4fd5(0x12f),_0x2a6a9d=await _0x4a5b86[_0x3b4fd5(0x126)](_0x297804);await Helper[_0x3b4fd5(0x15c)](this['accountName'],_0x2a6a9d),await Helper[_0x3b4fd5(0x13b)](0xbb8),await this[_0x3b4fd5(0x14f)]();}else console[_0x3b4fd5(0x160)](_0x3b4fd5(0x16f)),await this[_0x3b4fd5(0x174)]();}catch(_0xd18dc5){throw _0xd18dc5;}}async[_0x3dd11f(0x12d)](){const _0x35ef37=_0x3dd11f;try{if(Config[_0x35ef37(0x146)]==undefined||Config[_0x35ef37(0x156)]==undefined)throw new Error(_0x35ef37(0x152));const _0x20cbd5=Helper['getSession'](_0x35ef37(0x137));let _0x42d2c5=_0x35ef37(0x128);for(const _0x409625 of _0x20cbd5){_0x42d2c5+=_0x20cbd5[_0x35ef37(0x168)](_0x409625)+0x1+'.\x20'+_0x409625+'\x0a';}_0x20cbd5[_0x35ef37(0x172)]==0x0?_0x42d2c5+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:':_0x42d2c5+='\x0a\x20\x0aYou\x20already\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:';const _0x61229f=await _0x4a5b86[_0x35ef37(0x126)](_0x42d2c5);this[_0x35ef37(0x12e)]=Helper[_0x35ef37(0x13d)](_0x35ef37(0x135)+_0x61229f),await this[_0x35ef37(0x170)](this[_0x35ef37(0x12e)]),await this[_0x35ef37(0x134)](),_0x60335b[_0x35ef37(0x163)](_0x35ef37(0x16e)+this[_0x35ef37(0x12e)]+'\x20-\x20Created'),console[_0x35ef37(0x125)](_0x35ef37(0x16e)+_0x61229f+_0x35ef37(0x173)),this[_0x35ef37(0x157)][_0x35ef37(0x15a)](),await Helper[_0x35ef37(0x13b)](0xbb8),process[_0x35ef37(0x151)]();}catch(_0x48ac3b){throw _0x48ac3b;}}async[_0x3dd11f(0x175)](){const _0x398399=_0x3dd11f;try{const _0x4fce0b=Helper[_0x398399(0x154)](_0x398399(0x137));let _0x250af4='Your\x20Account\x20List\x20:\x0a\x20\x0a';for(const _0x3e575c of _0x4fce0b){_0x250af4+=_0x4fce0b[_0x398399(0x168)](_0x3e575c)+0x1+'.\x20'+_0x3e575c+'\x0a';}_0x4fce0b[_0x398399(0x172)]==0x0?_0x250af4+=_0x398399(0x141):_0x250af4+=_0x398399(0x14b);const _0x4649f2=await _0x4a5b86[_0x398399(0x126)](_0x250af4);this[_0x398399(0x12e)]=Helper['createDir'](_0x398399(0x123)+_0x4649f2);const _0xd28954=await _0x4a5b86[_0x398399(0x126)](_0x398399(0x16d));await Helper[_0x398399(0x15c)](this[_0x398399(0x12e)],_0xd28954),_0x60335b[_0x398399(0x163)](_0x398399(0x145)+this['accountName']+_0x398399(0x149)),console['log'](_0x398399(0x145)+_0x4649f2+'\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again'),await Helper[_0x398399(0x13b)](0xbb8),process[_0x398399(0x151)]();}catch(_0x33e778){throw _0x33e778;}}async['accountType'](){const _0x2911bd=_0x3dd11f;try{const _0x2abb63=Helper[_0x2911bd(0x154)](_0x2911bd(0x137));let _0x233e43=_0x2911bd(0x128);if(_0x2abb63[_0x2911bd(0x172)]>0x0)for(const _0x37a7d0 of _0x2abb63){_0x233e43+=_0x2abb63[_0x2911bd(0x168)](_0x37a7d0)+0x1+'.\x20'+_0x37a7d0+'\x0a';}else _0x233e43+=_0x2911bd(0x155);_0x233e43+='\x0a\x20\x0aAvailable\x20Account\x20Type:\x20\x0a1.\x20Session\x20\x0a2.\x20Query\x0a\x20\x0aPlease\x20Entery\x20Your\x20Choice\x20:\x20';const _0x3751d9=await _0x4a5b86[_0x2911bd(0x126)](_0x233e43);if(_0x3751d9==0x1)await this[_0x2911bd(0x12d)]();else _0x3751d9==0x2?await this[_0x2911bd(0x175)]():(console[_0x2911bd(0x125)]('Invalid\x20Input'),await this[_0x2911bd(0x158)]());}catch(_0x24c8c7){throw _0x24c8c7;}}async[_0x3dd11f(0x170)](_0x2116bc,_0x3b5fc9){const _0x17f0e6=_0x3dd11f;try{this['proxy']=_0x3b5fc9;const _0x597506={'connectionRetries':0x5};this['proxy']&&(_0x597506[_0x17f0e6(0x122)]=new HttpsProxyAgent(this[_0x17f0e6(0x14c)])),this['storeSession']=new StoreSession(_0x2116bc),this[_0x17f0e6(0x164)]=new TelegramClient(this[_0x17f0e6(0x157)],Config[_0x17f0e6(0x146)],Config['TELEGRAM_APP_HASH'],_0x597506),this[_0x17f0e6(0x157)][_0x17f0e6(0x15a)](),await this[_0x17f0e6(0x164)]['start']({'phoneNumber':async()=>await _0x4a5b86[_0x17f0e6(0x126)](_0x17f0e6(0x150)),'password':async()=>await _0x4a5b86[_0x17f0e6(0x126)]('Enter\x20your\x20Telegram\x20Password?'),'phoneCode':async()=>await _0x4a5b86['text'](_0x17f0e6(0x142)),'onError':_0x3345b7=>{const _0x3652c4=_0x17f0e6;console[_0x3652c4(0x125)](_0x3345b7[_0x3652c4(0x148)]);}}),console[_0x17f0e6(0x125)]();}catch(_0x1a2a22){throw _0x1a2a22;}}async[_0x3dd11f(0x14a)](){const _0x21936a=_0x3dd11f;try{_0x60335b['info'](_0x21936a(0x16e)+this[_0x21936a(0x124)]+'\x20-\x20Resolving\x20Peer');while(this[_0x21936a(0x129)]==undefined){try{this[_0x21936a(0x129)]=await this[_0x21936a(0x164)][_0x21936a(0x131)](this[_0x21936a(0x11f)]);break;}catch(_0xb1165e){if(_0xb1165e instanceof FloodWaitError){const _0x4b9885=_0xb1165e[_0x21936a(0x15e)];_0x60335b[_0x21936a(0x169)](this[_0x21936a(0x164)]['session']['serverAddress']+_0x21936a(0x147)+_0xb1165e),_0x60335b[_0x21936a(0x163)](this['client'][_0x21936a(0x124)][_0x21936a(0x13f)]+_0x21936a(0x15d)+_0x4b9885+'s'),await Helper[_0x21936a(0x13b)]((_0x4b9885+0x3)*0x3e8);}else throw _0xb1165e;}}}catch(_0x528cc2){throw _0x528cc2;}}async['disconnect'](){const _0x541ec0=_0x3dd11f;await this[_0x541ec0(0x164)]['disconnect'](),await this[_0x541ec0(0x164)]['destroy'](),this[_0x541ec0(0x129)]=undefined,this[_0x541ec0(0x12e)]=undefined;}async['initWebView'](){const _0x5d11df=_0x3dd11f;try{const _0x2d9419=await this[_0x5d11df(0x164)][_0x5d11df(0x120)](new Api[(_0x5d11df(0x140))][(_0x5d11df(0x16a))]({'peer':this[_0x5d11df(0x129)],'bot':this[_0x5d11df(0x129)],'fromBotMenu':!![],'url':this[_0x5d11df(0x13e)],'platform':_0x5d11df(0x14d)}));_0x60335b[_0x5d11df(0x163)](_0x5d11df(0x16e)+this[_0x5d11df(0x124)]+_0x5d11df(0x13a));const _0x1edaac=_0x2d9419[_0x5d11df(0x13e)];return Helper[_0x5d11df(0x16b)](_0x1edaac,0x3);}catch(_0x2527b8){throw _0x2527b8;}}}