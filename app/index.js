(function(_0x265ed1,_0x50fabe){const _0x539c06=_0x3f41,_0x6083f5=_0x265ed1();while(!![]){try{const _0xfe9095=-parseInt(_0x539c06(0x74))/0x1*(-parseInt(_0x539c06(0xb7))/0x2)+parseInt(_0x539c06(0x7e))/0x3*(parseInt(_0x539c06(0xb6))/0x4)+parseInt(_0x539c06(0x8f))/0x5*(parseInt(_0x539c06(0x93))/0x6)+parseInt(_0x539c06(0x96))/0x7+parseInt(_0x539c06(0xb3))/0x8+parseInt(_0x539c06(0x73))/0x9*(parseInt(_0x539c06(0x9d))/0xa)+-parseInt(_0x539c06(0xaf))/0xb;if(_0xfe9095===_0x50fabe)break;else _0x6083f5['push'](_0x6083f5['shift']());}catch(_0x48938d){_0x6083f5['push'](_0x6083f5['shift']());}}}(_0x673a,0x7715c));import{Config}from'./config/config.js';import{proxyList}from'./config/proxy_list.js';import{Core}from'./src/core/core.js';import{Telegram}from'./src/core/telegram.js';import{Helper}from'./src/utils/helper.js';import _0x2bf69e from'./src/utils/logger.js';import _0xbbd9f0 from'./src/utils/twist.js';function _0x3f41(_0x193a51,_0x3f0d7b){const _0x673a3b=_0x673a();return _0x3f41=function(_0x3f41c8,_0x4f45aa){_0x3f41c8=_0x3f41c8-0x73;let _0x16e78f=_0x673a3b[_0x3f41c8];return _0x16e78f;},_0x3f41(_0x193a51,_0x3f0d7b);}function _0x673a(){const _0x2143c6=['\x20Processing\x20Complete,\x20Continue\x20Using\x20next\x20account\x20in\x2010\x20Second','\x20Proxy','log','START_WAIT_CLAIM','824090vXnohD','Account\x20','map','accounts','getMe','completeTask','getSession','login','accounts/','user','push','includes','readQueryFile','WAITING','mechanic','query','stringify','init','32193348YYOzzi','disconnect','getTask','task','6496720pJMLKm','Error\x20:\x20','MODE','71516BMhTmx','8TaEclm','You\x20have\x20','9ywwihR','154507NbwEiK','firstName','getUser','claimTask','queryToJSON','message','length','last_name','initWebView',',\x20Retrying\x20after\x2010\x20Second','159oFKmWH','client','indexOf','state','->\x20New\x20Iteration','MIDAS\x20RWA\x20BOT','resolvePeer','Author\x20:\x20Nofan\x20Rambe','catch','then','info','startTap','all','BOT\x20STARTED','CLAIMABLE','delay','error','5DsCToQ','getStreak','clearInfo','\x20Processing\x20Complete,\x20Restarting\x20in\x204\x20Hours','5151882FpnRhG','BOT\x20STOPPED','clear','669753lKLOvV','Error\x20During\x20executing\x20bot','Welcome\x20&\x20Enjoy\x20Sir!'];_0x673a=function(){return _0x2143c6;};return _0x673a();}async function operation(_0x5c3c10,_0x2e5af5,_0x4247ef,_0x3b450e){const _0x3777ad=_0x3f41;try{const _0x5bc636=new Core(_0x5c3c10,_0x2e5af5,_0x4247ef,_0x3b450e);await _0x5bc636[_0x3777ad(0xa4)](!![]),await _0x5bc636[_0x3777ad(0x76)](!![]),await _0x5bc636[_0x3777ad(0x90)]();while(_0x5bc636[_0x3777ad(0xa6)]['tickets']!=0x0){await _0x5bc636[_0x3777ad(0x89)]();}await _0x5bc636[_0x3777ad(0xb1)](!![]);for(const _0x29de16 of _0x5bc636[_0x3777ad(0xb2)]){if(_0x29de16[_0x3777ad(0x81)]==_0x3777ad(0x8c))await _0x5bc636[_0x3777ad(0x77)](_0x29de16);else _0x29de16['state']==_0x3777ad(0xaa)&&(_0x29de16[_0x3777ad(0xab)]==_0x3777ad(0x9c)&&await _0x5bc636[_0x3777ad(0xa2)](_0x29de16));}const _0x5d10fe=Config[_0x3777ad(0xb5)]??0x2;_0x5d10fe==0x2?(await Helper['delay'](0xdbba00,_0x5c3c10,'Account\x20'+_0x5c3c10['id']+_0x3777ad(0x92),_0x5bc636),await operation(_0x5c3c10,_0x2e5af5,_0x4247ef,_0x3b450e)):(await Helper[_0x3777ad(0x8d)](0x2710,_0x5c3c10,_0x3777ad(0x9e)+_0x5c3c10['id']+_0x3777ad(0x99),_0x5bc636),await _0xbbd9f0[_0x3777ad(0x95)](_0x5c3c10));}catch(_0x4d9ebe){await Helper[_0x3777ad(0x8d)](0x2710,_0x5c3c10,_0x3777ad(0xb4)+_0x4d9ebe[_0x3777ad(0x79)]+_0x3777ad(0x7d)),await operation(_0x5c3c10,_0x2e5af5,_0x4247ef,_0x3b450e);}}let init=![];async function startBot(){return new Promise(async(_0x9f54a9,_0x27e195)=>{const _0x3256bf=_0x3f41;try{_0x2bf69e[_0x3256bf(0x88)](_0x3256bf(0x8b));const _0xc8840e=await new Telegram();init==![]&&(await _0xc8840e[_0x3256bf(0xae)](),init=!![]);const _0x1d88f7=Helper[_0x3256bf(0xa3)](_0x3256bf(0xa0)),_0x28a70a=[];proxyList['length']>0x0&&(_0x1d88f7[_0x3256bf(0x7a)]!=proxyList[_0x3256bf(0x7a)]&&_0x27e195(_0x3256bf(0xb8)+_0x1d88f7[_0x3256bf(0x7a)]+'\x20Session\x20but\x20you\x20provide\x20'+proxyList[_0x3256bf(0x7a)]+_0x3256bf(0x9a)));for(const _0x5db408 of _0x1d88f7){const _0xdba17b=_0x1d88f7[_0x3256bf(0x80)](_0x5db408),_0x99eea8=proxyList[_0x3256bf(0x7a)]>0x0?proxyList[_0xdba17b]:undefined;if(!_0x5db408[_0x3256bf(0xa8)](_0x3256bf(0xac))){await _0xc8840e['useSession']('accounts/'+_0x5db408,_0x99eea8),_0xc8840e['session']=_0x5db408;const _0x5572f1=await _0xc8840e[_0x3256bf(0x7f)][_0x3256bf(0xa1)](),_0x541ca7=await _0xc8840e[_0x3256bf(0x84)]()[_0x3256bf(0x87)](async()=>{const _0x1a5eb5=_0x3256bf;return await _0xc8840e[_0x1a5eb5(0x7c)]();})[_0x3256bf(0x86)](_0x1cb488=>{throw _0x1cb488;}),_0x3a1460=Helper[_0x3256bf(0x78)](_0x541ca7);await _0xc8840e[_0x3256bf(0xb0)](),_0x28a70a[_0x3256bf(0xa7)]([_0x5572f1,_0x541ca7,_0x3a1460,_0x99eea8]);}else{const _0x2ec5e7=Helper[_0x3256bf(0xa9)](_0x3256bf(0xa5)+_0x5db408+'/query.txt'),_0x312776=Helper[_0x3256bf(0x78)](_0x2ec5e7),_0x3796c0=_0x312776['user'];_0x3796c0[_0x3256bf(0x75)]=_0x3796c0['first_name'],_0x3796c0['lastName']=_0x3796c0[_0x3256bf(0x7b)],_0x28a70a[_0x3256bf(0xa7)]([_0x3796c0,_0x2ec5e7,_0x312776,_0x99eea8]);}}const _0x5cf735=Config[_0x3256bf(0xb5)]??0x2;if(_0x5cf735==0x2){const _0x3bbe58=_0x28a70a[_0x3256bf(0x9f)](async _0x2fb385=>{await operation(_0x2fb385[0x0],_0x2fb385[0x1],_0x2fb385[0x2],_0x2fb385[0x3]);});await Promise[_0x3256bf(0x8a)](_0x3bbe58);}else while(!![]){for(const _0x112f01 of _0x28a70a){await operation(_0x112f01[0x0],_0x112f01[0x1],_0x112f01[0x2],_0x112f01[0x3]);}await Helper[_0x3256bf(0x8d)](0xdbba00,undefined,'All\x20Account\x20Processing\x20Complete'),await _0xbbd9f0[_0x3256bf(0x91)](),conosole[_0x3256bf(0x9b)](),conosole[_0x3256bf(0x9b)](),conosole['log'](_0x3256bf(0x82));}_0x9f54a9();}catch(_0x5e5cc5){_0x2bf69e['info'](_0x3256bf(0x94)),_0x2bf69e[_0x3256bf(0x8e)](JSON[_0x3256bf(0xad)](_0x5e5cc5)),_0x27e195(_0x5e5cc5);}});}((async()=>{const _0x5c32bd=_0x3f41;try{_0x2bf69e[_0x5c32bd(0x95)](),_0x2bf69e[_0x5c32bd(0x88)](''),_0x2bf69e[_0x5c32bd(0x88)]('Application\x20Started'),console[_0x5c32bd(0x9b)](''),console[_0x5c32bd(0x9b)](_0x5c32bd(0x83)),console[_0x5c32bd(0x9b)](_0x5c32bd(0x85)),console[_0x5c32bd(0x9b)](_0x5c32bd(0x98)),console['log'](''),await startBot();}catch(_0x455681){await _0xbbd9f0['clear'](),await _0xbbd9f0[_0x5c32bd(0x91)](),console[_0x5c32bd(0x9b)](_0x5c32bd(0x97),_0x455681),await startBot();}})());