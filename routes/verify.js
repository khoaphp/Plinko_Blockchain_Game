var _0x69766c=_0x2c53;function _0x334c(){var _0x1678f1=['Cool\x20down\x20man,\x20please.','input','207477tZrhoR','urlRPC','2696176NiMxhJ','trim','Database\x20error.','273ybKzBD','../models/User','blockToken','User\x20info\x20is\x20error','findByIdAndUpdate','receiverAddress','Contract','getTransactionReceipt','balance','430488GmyjMs','withdrawToken','owner','1090KcNsLr','idPlayer','Wrong\x20parameters.','function','changeBlockCurrencies','jsonwebtoken','minAmountBNB','account','string','Transaction\x20is\x20already\x20processed','5549046ZVSlfV','substring','log','bcryptjs','nonpayable','5QeiEzk','newOwnerAddress','payable','findOne','save\x20new\x20hash','utils','toLowerCase','Transaction\x20hash\x20check\x20in\x20database\x20error','updateMinAmount','contract\x20IERC20','web3','uint256','recover','body','now','save','Deposit\x20is\x20failed','ether','/verifyHash','tokenAdddress','newAmount','from','hash','token','1687774OrxUsK','rand','bool','232544RQehgV','status','then','contract_Deposit','_id','length','../models/Bet','52203mHcZZM','address','json','view','Wrong\x20parameters','changeOwner','cookieAff','constructor','username','depositBalanceBNB','event','eth','/newDeposit_FCL','amountToken','Store\x20hash\x20error!','blockBNB','../models/DepositTransaction','updateMinAmountBNB','post','Transaction\x20check\x20error,\x20please\x20contact\x20supporter.','save\x20new\x20hash,\x20old\x20account'];_0x334c=function(){return _0x1678f1;};return _0x334c();}(function(_0x2c8476,_0x3d24b6){var _0x6b2177=_0x2c53,_0x4f9b2d=_0x2c8476();while(!![]){try{var _0x11b62f=-parseInt(_0x6b2177(0xd7))/0x1+parseInt(_0x6b2177(0xcd))/0x2+parseInt(_0x6b2177(0xa3))/0x3+-parseInt(_0x6b2177(0x97))/0x4+-parseInt(_0x6b2177(0xb5))/0x5*(parseInt(_0x6b2177(0xb0))/0x6)+-parseInt(_0x6b2177(0x9a))/0x7*(parseInt(_0x6b2177(0xd0))/0x8)+-parseInt(_0x6b2177(0x95))/0x9*(-parseInt(_0x6b2177(0xa6))/0xa);if(_0x11b62f===_0x3d24b6)break;else _0x4f9b2d['push'](_0x4f9b2d['shift']());}catch(_0x2838c0){_0x4f9b2d['push'](_0x4f9b2d['shift']());}}}(_0x334c,0xaea9c));function _0x2c53(_0x35a8ca,_0x162fa6){var _0x334c6c=_0x334c();return _0x2c53=function(_0x2c53bb,_0x5b11bf){_0x2c53bb=_0x2c53bb-0x84;var _0x55a760=_0x334c6c[_0x2c53bb];return _0x55a760;},_0x2c53(_0x35a8ca,_0x162fa6);}var User=require(_0x69766c(0x9b)),Hash=require('../models/Hash'),DepositTransaction=require(_0x69766c(0x8e)),Bet=require(_0x69766c(0xd6)),bcrypt=require(_0x69766c(0xb3)),jwt=require(_0x69766c(0xab)),privateKey='*(&1Khf89g798d7gAHSJDHla';module['exports']=function(_0x1cb98c,_0x2a9453,_0x5cea3c){var _0x12e585=_0x69766c,_0x5bed25=_0x2a9453[_0x12e585(0x96)];const _0x52b803=require(_0x12e585(0xbf)),_0x898fa3=new _0x52b803(_0x5bed25);var _0x2a06f8=_0x2a9453[_0x12e585(0xd3)],_0xc5933e=[{'inputs':[{'internalType':'address','name':_0x12e585(0xc8),'type':_0x12e585(0xd8)}],'stateMutability':_0x12e585(0xb4),'type':_0x12e585(0x85)},{'anonymous':![],'inputs':[{'indexed':![],'internalType':_0x12e585(0xae),'name':_0x12e585(0xa7),'type':'string'},{'indexed':![],'internalType':_0x12e585(0xc0),'name':_0x12e585(0x8b),'type':_0x12e585(0xc0)},{'indexed':![],'internalType':_0x12e585(0xc0),'name':'timeDeposit','type':_0x12e585(0xc0)},{'indexed':![],'internalType':'uint256','name':'typeCurrency','type':_0x12e585(0xc0)}],'name':'new_deposit','type':_0x12e585(0x88)},{'inputs':[],'name':_0x12e585(0x8d),'outputs':[{'internalType':_0x12e585(0xcf),'name':'','type':'bool'}],'stateMutability':_0x12e585(0xda),'type':_0x12e585(0xa9)},{'inputs':[],'name':_0x12e585(0x9c),'outputs':[{'internalType':'bool','name':'','type':_0x12e585(0xcf)}],'stateMutability':_0x12e585(0xda),'type':_0x12e585(0xa9)},{'inputs':[{'internalType':'bool','name':'tokenStatus','type':_0x12e585(0xcf)},{'internalType':_0x12e585(0xcf),'name':'bnbStatus','type':_0x12e585(0xcf)}],'name':_0x12e585(0xaa),'outputs':[],'stateMutability':_0x12e585(0xb4),'type':_0x12e585(0xa9)},{'inputs':[{'internalType':_0x12e585(0xd8),'name':_0x12e585(0xb6),'type':_0x12e585(0xd8)}],'name':_0x12e585(0xdc),'outputs':[],'stateMutability':'nonpayable','type':_0x12e585(0xa9)},{'inputs':[{'internalType':'address','name':'newTokenAddress','type':'address'}],'name':'changeTokenAddress','outputs':[],'stateMutability':_0x12e585(0xb4),'type':_0x12e585(0xa9)},{'inputs':[{'internalType':_0x12e585(0xae),'name':_0x12e585(0xa7),'type':_0x12e585(0xae)},{'internalType':_0x12e585(0xc0),'name':_0x12e585(0x8b),'type':_0x12e585(0xc0)}],'name':'depositBalance','outputs':[],'stateMutability':_0x12e585(0xb4),'type':'function'},{'inputs':[{'internalType':_0x12e585(0xae),'name':_0x12e585(0xa7),'type':_0x12e585(0xae)}],'name':_0x12e585(0x87),'outputs':[],'stateMutability':_0x12e585(0xb7),'type':_0x12e585(0xa9)},{'inputs':[],'name':'minAmount','outputs':[{'internalType':_0x12e585(0xc0),'name':'','type':_0x12e585(0xc0)}],'stateMutability':'view','type':_0x12e585(0xa9)},{'inputs':[],'name':_0x12e585(0xac),'outputs':[{'internalType':'uint256','name':'','type':_0x12e585(0xc0)}],'stateMutability':_0x12e585(0xda),'type':_0x12e585(0xa9)},{'inputs':[],'name':_0x12e585(0xa5),'outputs':[{'internalType':_0x12e585(0xd8),'name':'','type':_0x12e585(0xd8)}],'stateMutability':'view','type':_0x12e585(0xa9)},{'inputs':[],'name':_0x12e585(0xcc),'outputs':[{'internalType':_0x12e585(0xbe),'name':'','type':_0x12e585(0xd8)}],'stateMutability':_0x12e585(0xda),'type':_0x12e585(0xa9)},{'inputs':[{'internalType':_0x12e585(0xc0),'name':_0x12e585(0xc9),'type':_0x12e585(0xc0)}],'name':_0x12e585(0xbd),'outputs':[],'stateMutability':'nonpayable','type':_0x12e585(0xa9)},{'inputs':[{'internalType':'uint256','name':_0x12e585(0xc9),'type':'uint256'}],'name':_0x12e585(0x8f),'outputs':[],'stateMutability':_0x12e585(0xb4),'type':_0x12e585(0xa9)},{'inputs':[{'internalType':_0x12e585(0xd8),'name':_0x12e585(0x9f),'type':_0x12e585(0xd8)}],'name':'withdrawBNB','outputs':[],'stateMutability':_0x12e585(0xb4),'type':_0x12e585(0xa9)},{'inputs':[{'internalType':_0x12e585(0xd8),'name':'receiverAddress','type':'address'}],'name':_0x12e585(0xa4),'outputs':[],'stateMutability':_0x12e585(0xb4),'type':_0x12e585(0xa9)}];const _0x2d618c=new _0x898fa3['eth'][(_0x12e585(0xa0))](_0xc5933e,_0x2a06f8);_0x1cb98c[_0x12e585(0x90)](_0x12e585(0xc7),function(_0x570944,_0x538aaa){var _0x2a5d4b=_0x12e585;if(!_0x570944['body'][_0x2a5d4b(0xcb)]||!_0x570944[_0x2a5d4b(0xc2)][_0x2a5d4b(0xce)])_0x538aaa[_0x2a5d4b(0xd9)]({'result':0x0,'message':'Lack\x20of\x20parameters.'});else{var _0x3d75a0=_0x570944[_0x2a5d4b(0xc2)][_0x2a5d4b(0xcb)]['trim'](),_0x3f5892=_0x570944['body']['rand'][_0x2a5d4b(0x98)]();if(_0x3d75a0['length']==0x0||_0x3f5892[_0x2a5d4b(0xd5)]==0x0)_0x538aaa[_0x2a5d4b(0xd9)]({'result':0x0,'message':_0x2a5d4b(0xa8)});else{let _0x3582b3=_0x898fa3[_0x2a5d4b(0x89)]['accounts'][_0x2a5d4b(0xc1)](_0x3f5892,_0x3d75a0)['toLowerCase']();Hash[_0x2a5d4b(0xb8)]({'hash':_0x3d75a0,'rand':_0x3f5892,'status':!![]},function(_0x39d196,_0x619ae7){var _0x20fe96=_0x2a5d4b;_0x39d196?_0x538aaa['json']({'result':0x0,'message':_0x20fe96(0x99)}):_0x619ae7==null?User[_0x20fe96(0xb8)]({'account':_0x3582b3},function(_0x78fc9e,_0x589d7b){var _0x1898e6=_0x20fe96;if(_0x78fc9e)_0x538aaa['json']({'result':0x0,'message':_0x1898e6(0x9d)});else{if(_0x589d7b==null){var _0x11b459=null;_0x570944['body'][_0x1898e6(0x84)]!=undefined&&_0x570944[_0x1898e6(0xc2)][_0x1898e6(0x84)][_0x1898e6(0x98)]()[_0x1898e6(0xd5)]>0x0&&(_0x11b459=_0x570944[_0x1898e6(0xc2)]['cookieAff'][_0x1898e6(0x98)]());var _0x574082=new User({'account':_0x3582b3,'parentId':_0x11b459,'point_current':0x0,'point_deposit':0x0,'point_withdraw':0x0,'point_send':0x0,'point_receive':0x0,'point_bet':0x0,'point_win':0x0,'point_lose':0x0,'dateCreated':Date[_0x1898e6(0xc3)](),'socketId':null,'status':0x1});_0x574082[_0x1898e6(0xc4)](function(_0x4b51d3){var _0x33b770=_0x1898e6;if(_0x4b51d3)_0x538aaa[_0x33b770(0xd9)]({'result':0x0,'message':'User\x20saved\x20error!'});else{var _0x4aed87=new Hash({'account':_0x574082[_0x33b770(0xad)],'hash':_0x3d75a0,'rand':_0x3f5892,'dateCreated':Date[_0x33b770(0xc3)](),'status':!![]});_0x4aed87[_0x33b770(0xc4)](function(_0x23b1c0){var _0x3e9831=_0x33b770;_0x23b1c0?_0x538aaa[_0x3e9831(0xd9)]({'result':0x0,'message':_0x3e9831(0x8c)}):(console['log'](_0x3e9831(0xb9)),_0x538aaa['json']({'result':0x1,'_id':_0x574082[_0x3e9831(0xd4)],'account':_0x574082[_0x3e9831(0xad)],'username':_0x574082['username'],'balance':_0x574082['balance']}));});}});}else{var _0x64ab7d=new Hash({'account':_0x589d7b['account'],'hash':_0x3d75a0,'rand':_0x3f5892,'dateCreated':Date['now'](),'status':!![]});_0x64ab7d[_0x1898e6(0xc4)](function(_0x4d6d83){var _0x5b0f81=_0x1898e6;_0x4d6d83?_0x538aaa[_0x5b0f81(0xd9)]({'result':0x0,'message':'Store\x20hash\x20error!'}):(console[_0x5b0f81(0xb2)](_0x5b0f81(0x92)),_0x538aaa[_0x5b0f81(0xd9)]({'result':0x1,'_id':_0x589d7b[_0x5b0f81(0xd4)],'account':_0x589d7b[_0x5b0f81(0xad)],'username':_0x589d7b[_0x5b0f81(0x86)],'balance':_0x589d7b[_0x5b0f81(0xa2)]}));});}}}):(console[_0x20fe96(0xb2)]('old\x20hash'),User['findOne']({'account':_0x619ae7[_0x20fe96(0xad)]},function(_0x3203b7,_0x1aeb62){var _0x4659ad=_0x20fe96;_0x3203b7||_0x1aeb62==null?_0x538aaa[_0x4659ad(0xd9)]({'result':0x0,'message':'User\x20info\x20is\x20error'}):_0x538aaa['json']({'result':0x1,'_id':_0x1aeb62['_id'],'account':_0x1aeb62[_0x4659ad(0xad)],'username':_0x1aeb62[_0x4659ad(0x86)],'balance':_0x1aeb62[_0x4659ad(0xa2)]});}));});}}}),_0x1cb98c['post'](_0x12e585(0x8a),function(_0x56b26e,_0x5a18c0){var _0x401571=_0x12e585;!_0x56b26e[_0x401571(0xc2)]['hash']?_0x5a18c0[_0x401571(0xd9)]({'result':0x0,'message':_0x401571(0xdb)}):_0x116499(_0x56b26e[_0x401571(0xc2)][_0x401571(0xcb)],_0x5a18c0);});function _0x116499(_0x32c9f0,_0x1b2521){var _0x4e5a0b=_0x12e585;_0x32c9f0=_0x32c9f0[_0x4e5a0b(0xbb)](),DepositTransaction['findOne']({'transactionHash':_0x32c9f0},function(_0xa98169,_0x569fc9){var _0x2e5178=_0x4e5a0b;if(_0xa98169)_0x1b2521['json']({'result':0x0,'message':_0x2e5178(0xbc)});else _0x569fc9!=null?_0x1b2521[_0x2e5178(0xd9)]({'result':0x0,'message':_0x2e5178(0xaf)}):setTimeout(()=>{var _0x5df0f6=_0x2e5178;_0x898fa3[_0x5df0f6(0x89)][_0x5df0f6(0xa1)](_0x32c9f0)[_0x5df0f6(0xd2)](_0x1ff42b=>{var _0xd1935=_0x5df0f6;console[_0xd1935(0xb2)](_0x1ff42b);if(_0x1ff42b!=null){if(_0x1ff42b['to'][_0xd1935(0xbb)]()==_0x2a06f8[_0xd1935(0xbb)]()){if(_0x1ff42b[_0xd1935(0xd1)]==!![])_0x898fa3[_0xd1935(0x89)]['getTransaction'](_0x32c9f0)[_0xd1935(0xd2)](_0x29d7e9=>{var _0x4dd432=_0xd1935,_0x5815c9=_0x898fa3[_0x4dd432(0x89)]['abi']['decodeParameters']([{'internalType':_0x4dd432(0xae),'name':_0x4dd432(0xa7),'type':_0x4dd432(0xae)},{'internalType':'uint256','name':'amountToken','type':_0x4dd432(0xc0)}],'0x'+_0x29d7e9[_0x4dd432(0x94)][_0x4dd432(0xb1)](0xa)),_0x469ad0=_0x5815c9[_0x4dd432(0xa7)],_0x2ff967=_0x898fa3[_0x4dd432(0xba)]['fromWei'](_0x5815c9[_0x4dd432(0x8b)],_0x4dd432(0xc6));User[_0x4dd432(0x9e)](_0x469ad0,{'$inc':{'point_current':_0x2ff967,'point_deposit':_0x2ff967}},function(_0x550520,_0xfb1ff4){var _0x11bc91=_0x4dd432,_0x278624=new DepositTransaction({'transactionHash':_0x32c9f0,'transactionResult':!![],'idUser':_0x469ad0,'tokenAmount':_0x2ff967,'from':_0x29d7e9[_0x11bc91(0xca)],'dateDeposit':Date[_0x11bc91(0xc3)]()});_0x550520?_0x278624['pointAdded']=![]:_0x278624['pointAdded']=!![],_0x278624[_0x11bc91(0xc4)](function(_0xd45b45){var _0x4ff94a=_0x11bc91;_0x1b2521[_0x4ff94a(0xd9)]({'result':0x1,'message':'Deposit\x20is\x20successfully'});});});});else{if(_0x1ff42b[_0xd1935(0xd1)]==![]){var _0x1ddf60=new DepositTransaction({'transactionHash':_0x32c9f0,'transactionResult':![],'idUser':null,'tokenAmount':0x0,'dateDeposit':Date['now']()});_0x1ddf60['save'](function(_0x117a99){var _0x6af49d=_0xd1935;_0x1b2521[_0x6af49d(0xd9)]({'result':0x0,'message':_0x6af49d(0xc5)});});}else{var _0x1ddf60=new DepositTransaction({'transactionHash':_0x32c9f0,'transactionResult':![],'typeToken':0x1});_0x1ddf60[_0xd1935(0xc4)](function(_0x371f27){var _0x3c1549=_0xd1935;_0x1b2521[_0x3c1549(0xd9)]({'result':0x0,'message':_0x3c1549(0xc5)});});}}}else _0x1b2521[_0xd1935(0xd9)]({'result':0x0,'message':_0xd1935(0x93)});}else _0x1b2521['json']({'result':0x0,'message':_0xd1935(0x91)});});},0xf*0x3e8);});}};