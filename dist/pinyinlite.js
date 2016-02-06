(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.pinyinlite = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./src/pinyin.js');

},{"./src/pinyin.js":3}],2:[function(require,module,exports){
module.exports = {"n":24159,"dict":[["ling","〇令伶倰凌刢另呤囹坽夌姈婈孁岭岺崚嶺彾掕昤朎柃棂棱櫺欞泠淩澪瀮灵炩燯爧狑玲琌瓴皊砱祾秢稜竛笭紷綾绫羚翎聆舲苓菱蓤蔆蕶蘦蛉衑袊裬詅跉軨輘酃醽鈴錂铃閝阾陵零霊霗霛霝靇靈領领駖魿鯪鲮鴒鸰鹷麢齡齢龄龗"],["yi","一乁乂义乙亄亦亿仡以仪伇伊伿佁佚佾侇依俋倚偯儀億儗兿冝刈劓劮勚勩匜医叆吚呓呭呹咦咿唈嗌噫囈圛圯坄垼埶埸墿壹夁夷奕妷姨媐嫕嫛嬄嬑嬟孴宐宜宧寱寲尾屹峄峓崺嶧嶬嶷已巸帟帠幆庡廙异弈弋弌弬彛彜彝彞彵役忆忔怈怡怿恞悒悘悥意憶懌懿戺扅扆扡抑拸挹掜揖搤撎攺敡敼斁旑旖易昳晹暆曀曎杙杝枍枻柂栘栧栺桋棭椅椬椸榏槸樴檍檥檹欥欭歖歝殔殪殹毅毉沂沶泆洢洩浂浥浳渏湙溢漪潩澺瀷炈焬焲熈熙熠熤熪熼燚燡燱狋狏猗獈玴珆瑿瓵異疑疫痍痬瘗瘞瘱癔益眙睪瞖矣礒礙祎禕秇移稦穓竩笖箷簃絏縊繄繶繹绎缢羛羠義羿翊翌翳翼耛耴肄肊胰膉臆舣艗艤艺艾芅苅苡苢荑萓萟蓺薏藙藝蘙虉蚁蛇蛜蛡蛦蛾蜴螔螘螠蟻衣衤衪衵袆袘袣裔裛裿褘褹襗襼觺訑訲詍詒詣誃誼謻譩譯議譺讉讛议译诒诣谊豙豛豷貖貤貽賹贀贻跇跠軼輗輢轙轶辥迆迤迱迻逘逸遗遺邑郼酏醫醳醷釔釴釶鈘鈠鉇鉯銕銥錡鎰鏔鐿钇铱锜镒镱阣阤陭隿霬靉靾頉頤頥顊顗颐食飴饐饴驛驿骮鮧鮨鯣鳦鴺鶂鶃鷁鷊鷖鷧鷾鸃鹝鹢鹥黓黟黳齮齸"],["ding","丁亇仃叮啶奵定嵿帄忊掟椗濎玎町疔盯矴碇碠磸耵腚艼萣薡虰蝊訂订酊釘鋌錠鐤钉铤锭靪頂顁顶飣饤鼎鼑"],["zheng","丁争佂埥埩塣姃媜峥崝崢嶒帧幀征徎徰徴徵怔愸憕抍拯挣掙掟揁撜政整晸正氶炡烝爭狰猙症癥眐睁睜筝箏篜糽聇脀蒸証諍證证诤踭郑鄭鉦錚钲铮鬇鮏鯖鲭鴊"],["yu","丂与予于亐伃伛余俁俞俣俼偊傴僪儥兪匬叞吁吳唹喁喅喐喩喻噊噳圄圉圫域堉堣堬墺妤妪娛娯娱媀媮嫗嬩宇寓寙尉屿峪峿崳嵎嵛嶎嶼庽庾彧御忬悆悇惐愈愉愚慾懙戫扜扵挧揄敔斔斞於旟昱杅栯桙棛棜棫楀楡楰榆櫲欎欝欤欲歈歟歶毓汙汚浴淢淤淯渔渝湡滪漁澞澦灪灹焴煜煨熨燏燠燰爩牏狱狳獄玉玗玙琙琟瑀瑜璵畬畭瘀瘉瘐癒盂盓睮矞砡硢硲礇礜祤禦禹禺秗稢稶穀穥穻窬窳竽箊篽籅籞籲粥紆緎繘纡罭羭羽翑聿育腴臾舁舆與艅艈芋芌茟茰菀萭萮萸蒮蓣蓹蔚蕍蕷薁藇蘌蘛虞虶蜟蜮蝓蝺螸蟈衧袬裕褕覦觎誉語諛諭謣譽语谀谕谷豫貐貗踰軉輍輿轝込迂迃逳逾遇遹邘郁郚鄅酑醧釪鈺銉鋊鋙錥鍝鐍鐭钰铻閼閾阈陓隃隅隩雓雨雩霱預頨顒预颙飫餘饇饫馀馭騟驈驭骬髃鬰鬱鬻魊魚魣鮽鰅鱊鱮鱼鳿鴥鴧鴪鵒鷠鷸鸆鸒鹆鹬麌齬齵龉龥"],["kao","丂尻嵪拷攷栲槀洘烤焅犒稾考薧銬铐靠髛鮳鯌鲓"],["qi","七乞亓亝企俟倛傶僛其凄剘启呇呮咠唘唭啓啔啟嘁噐器圻埼夡奇契妻娸婍屺岂岐岓崎嵜庈弃忔忯悽愒愭慼慽憇憩懠戚扢捿掑摖攲敧斉斊旂旗晵暣朞期杞柒栔栖桤桼梩棄棊棋棨棲榿槭檱櫀欫欹欺歧气氣汔汽沏泣洓淇淒湆湇漆濝炁焏猉玂玘琦琪璂甈畦疧盀盵矵砌碁碕碛碶磜磧磩礘祁祇祈祺禥稘稽竒粸紪綥綦綨綮綺緀緝纃绮缉罊耆肐肵脐臍舙艩芑芞芪荎荠萁萋萕葺蕲薺藄蘄蚑蚔蚚蛴蜝蜞螇蟿蠐袳裿褀觭訖諆諬讫豈起趞跂踑踖踦蹊躤躩軙軝迄迉邔郪鄿釮錡鏚鐖锜闙霋頎颀騎騏騹骐骑鬐鬾鬿魌魕鮨鯕鰭鲯鳍鵸鶀鶈麒麡鼜齊齐"],["shang","丄上伤傷商坰垧埫塲墒尙尚恦愓慯扄晌殇殤汤湯滳漡熵禓緔绱蔏螪蠰裳觞觴謪賞贘赏鑜鞝鬺"],["xia","丅下侠俠傄匣厦叚吓呷唬嚇埉夏夓峡峽廈徦懗捾搳敮昰暇柙欱浹炠烚煆狎狭狹珨瑕疜睱瞎硖硤碬磍祫笚筪縖罅翈舝舺芐蕸虾蝦螛諕謑谺赮轄辖遐郃鍜鎋鎼鏬陜陿霞颬騢魻鰕鶷黠"],["shi","丆世丗乨亊事什仕似佦使侍兘冟势勢匙十卋厔叓史呞呩咶啇嗜嘘噓噬囸埘塒士失奭始姼媞嬕实実室宩宲寔實尸屍屎峕峙崼嵵市师師式弑弒徥忕忯恀恃惿戺拭拾揓敆施时旹是昰時枾柹柿栻榯檡殖氏浉湜湤湿溡溮溼澤澨濕炻烒煶狧狮狶獅瑡痑眂眎眡睗矢石示礻祏秲竍笶筮箷簭籭絁繹舐舓莳葹蒒蒔蓍虱蚀蝕蝨螫褆褷襫襹視视觢試詩誓諟諡謚識识试诗谥豕貰贳跩軾轼辻适逝遈遞適遰遾邿酾醳釃释釋釶鈰鉂鉃鉇鉐鉽銴鍦铈食飠飭飾餙餝饣饰馶駛驶魳鮖鯴鰘鰣鰤鲥鲺鳲鳾鶳鸤鼫鼭齛"],["wan","万丸倇刓剜卍卐唍埦塆壪夗夘妧娩婉婠完宛岏帵弯彎忨惋惌抏挽捖捥晚晥晩晼梚椀槾汍涴湾潫澫灣烷玩琓琬畹皖盌睕瞣碗箢紈綩綰纨绾翫脕脘腕芄莞莬菀萬葂蔓薍蚖蜿蟃豌貦貫贃贎踠輐輓鄤鋄鋔鋺錽鍐鎫関闗關頑顽骩骪骫魭"],["mo","万冐冒劘劰嗼嘿嚤嚩圽塻墨妺嫫嫼嬤嬷寞尛帓帞怽懡戂抹摩摸摹撫擵攠无昩暯末枺模橅歾歿殁沒没沫漠瀎無爅狢獏瘼皌眜眽眿瞐瞙砞磨礳秣粖糢絈絔縸纆耱脈脉膜艒茉莈莫蓦藦蘑蛨蟔袹謨謩譕谟貃貈貉貊貘銆鏌镆陌靺饃饝馍驀髍魔魩麼麽默黙"],["zhang","丈仉仗仧傽墇嫜嶂帐帳幛幥张弡張彰慞扙掌暲杖樟涨涱漲漳獐璋痮瘬瘴瞕礃章粻胀脹蔁蟑賬账遧鄣長镸长障鞝餦騿鱆麞"],["san","三伞俕傘傪厁叁叄帴弎彡散椮橵毵毶毿氵潵犙糁糂糝糣糤繖鏒鏾閐饊馓鬖"],["ji","丌丮乁乩亟亼亽伋伎佶偈偮僟其兾冀几击刉刏剂剞剤劑勣卙即卽及叝叽吉咭哜唧喞嗘嘰嚌圾坖垍基堲塈塉墍墼奇妀妓姞姬姼嫉季寂寄尐屐岋岌峜嵆嵇嵴嶯己帺幾庴廭彐彑彶徛忌忣急悸惎愱憿懠懻戟戢技挤掎揤撃撠擊擠攲敧旡既旣暨暩曁期机极枅梞棘楖楫極槉槣樭機橶檕檝檵櫅櫭欹歵殛毄汥汲泲洎济淁済湒漃漈潗激濈濟瀱焏犄犱狤玑璂璣璾畟畸畿疾痵瘠癠皀皍瞉矶硛磯祭禝禨积稘稩稷稽穄穊積穖穧笄笈筓箕箿簊簎籍糭系紀紒級結給継緝縘績繫繼级纪给继绩缉罽羁羇羈耤耭肌脊脨膌臮艥艻芨芰苙茍茤荠萕葪蒺蓟蔇蕀蕺薊薺藉蘄蘎蘮蘻虀虮蝍螏蟣蟿蠀裚褀襀襋覉覊覬覿觊觙觭計訐記誋諅諔譏譤计讥记谻谿賫賷赍趌趞跡跻跽踑踖踦蹐蹟躋躤躸輯轚辑迹郆銈銡錤鍓鏶鐖鑇鑙际際隮集雞雦雧霁霵霽革鞊鞿韲颳飢饑饥騎驥骑骥髻鬾魝魢鮆鯚鯯鯽鰶鰿鱀鱭鱾鲚鲫鳮鵋鶏鶺鷄鷑鸄鸡鹡麂齊齌齎齏齐齑"],["nian","卄哖唸埝墊姩年廿念拈捻撚撵攆涊淰焾碾秊秥簐粘艌蔫跈蹨躎輦輾辇辗鮎鯰鲇鲶黏"],["bu","不佈勏卜卟吥咘哺埔埗埠堡婄尃峬巭布庯廍怖悑抪捕捗撲晡柨步歨歩獛瓿秿箁篰簿荹蔀补補誧踄輹轐逋部郶醭鈈鈽钚钸陠餔餢鳪鵏鸔"],["mian","丏俛偭免冕勉勔厸喕娩婂媔嬵愐杣棉檰櫋汅沔渑湎澠牑眄眠矈矊矏糆絻綿緜緡緬绵缅缗腼臱芇葂蝒蠠面靣靦鮸麪麫麵麺黽黾"],["gai","丐乢侅匃匄垓姟峐忋戤摡改晐杚概槩槪溉漑瓂畡盖祴絠絯芥荄葢蓋該该豥賅賌赅郂鈣鎅钙陔隑"],["chou","丑仇侴俦偢儔吜嚋嬦帱幬怞惆愁懤抽搊杻杽栦椆檮殠燽牰犨犫畤畴疇瘳皗盩眣瞅矁稠筹篘籌紬絒綢绸臭臰菗薵裯詶謅譸讎讐诪跾踌躊遚酧酬醔醜醻雔雠魗鮘鯈"],["zhuan","专传傳僎僝剸叀啭囀堟塼嫥孨專撰沌漙灷瑑瑼甎砖磗磚竱篆篹篿簨籑縳耑腞膞蒃蟤襈諯譔賺赚轉转鄟顓颛饌馔鱄"],["ju","且举伡侷俥俱倨倶僪具冣凥剧劇勮匊句咀啹圧埧埾壉姖娵婅婮寠局居屦屨岠岨崌巈巨弆忂怇怐怚惧愳懅懼抅拒拘拠挙挶捄据掬揟據擧昛枸柜桔梮椇椈椐榉榘橘檋櫸欅歫毩毱沮泃泦洰涺淗湨澽炬烥焗焣爠犋犑狊狙珇琚疽痀眗瞿矩砠秬窭窶筥簴粔粷罝耟聚聥腒臄舉艍苣苴莒菊菹萭葅蒟蒩蓻蘜虡蚷蜛螶袓裾襷詎諊讵豦貗趄趉趜跔跙距跼踘踞踽蹫躆躹車輂车遽邭邹郥郰郹鄒醵鉅鉏鋤鋦鋸鐻钜锔锯閰陱雎雛鞠鞫颶飓駏駒駶驧驹鮈鮔鴡鵙鵴鶋鶪鼰鼳齟龃"],["qie","且伽倢切匧厒嗛妾帹怯悏惬愜慊挈朅洯淁疌癿砌穕窃竊笡箧篋緁聺茄藒蛣詧趄踥郄鍥鐑锲魥鯜鰈"],["pi","丕仳伓伾僻劈匹吡否啤噼噽嚊嚭圮坏坯埤壀妚媲嫓屁岯崥嶏庀怶悂憵批披抷揊擗旇朇枇枈椑毗毘毞淠潎澼炋焷狉狓猈琵甓疈疋疲痞痺癖皮睤睥砒磇礔礕秛秠稫笓箆篺粃紕纰罢罴罷羆翍耚肶脴脾腗膍芘苉蚍蚽蚾蜱螕螷蠯裨諀譬豼豾貔辟邳郫釽鈈鈚鈲鈹鉟銔銢錃錍鎞铍闢阰陂陴隦霹駓髬魮魾鮍鲏鴄鷿鼙"],["qiu","丘丠仇俅厹叴唒囚坵媝崷巯巰恘扏捄搝朹梂楸橚櫹殏毬氿求汓泅浗渞湫湭煪牫犰玌球璆皳盚秋秌穐篍糗紌絿緧肍莍萩蓲蘒虬虯蚯蛷蝤蝵蟗蠤裘觓觩訄訅賕赇趥逎逑遒邱酋醔釓釚銶鞦鞧鮂鯄鰌鰍鰽鱃鳅鶖鹙鼽龜龝龟"],["bing","丙並仌仒併倂偋傡兵冰寎屏屛并幷庰怲抦掤摒昞昺柄栟栤梹棅槟檳氷炳琕疒病癛癝眪禀秉稟窉竝絣綆苪蛃誁邴鈵鉼陃靐鞞鞸餅餠饼鮩"],["ye","业也亱倻偞僷冶叶吔咽啘嘢噎嚈埜堨墷壄夜峫嶪嶫抴拽捓捙掖揶擖擛擨擪擫晔暍曄曅曗曳曵枒枼枽椰楪業歋殕殗洂液漜潱澲烨煠熀燁爗爷爺璍瓛痷皣瞱瞸礏耶腋葉蠮蠱謁谒邪邺鄓鄴野釾鋣鍱鎁鎑鐷铘靥靨頁页餣饁饐馌驜鵺鸈黦"],["cong","丛从匆叢囪囱婃孮従徖從忩怱悤悰慒暰枞棇楤樅樬樷欉淙漎漗潀潈潨灇焧熜燪爜琮瑽璁瞛碂篵緫繱聡聦聪聰苁茐葱蓯蔥藂蟌誴謥賨賩鏦騘驄骢"],["dong","东侗倲働冬冻凍动動勭咚垌埬墥夂姛娻嬞岽峒峝崠崬徚恫懂戙挏揰昸東栋棟氡氭洞涷湩烔狫硐笗箽絧胨胴腖苳菄董蕫蝀衕詷諌迵霘駧騆鮗鯟鶇鸫鼕"],["si","丝亖伺似佀佁価俟俬偲傂儩兕凘厕厠厮厶司咝嗣嘶噝四姒娰媤孠寺巳廝思恖愢撕斯杫枱柶梩楒榹死汜泀泗泤洍涘澌瀃燍牭磃祀禗禠禩私竢笥簛糸絲緦缌罒罳耜肂肆蕬蕼虒蛳蜤螄螔蟖蟴覗謕貄逘釲鈶鈻鉰銉銯鋖鍶鐁锶颸飔食飤飴飼饲駟騃騦驷鷉鷥鸶鼶"],["cheng","丞乗乘侱倀偁呈噌城埕堘塍塖娍宬峸庱徎悜惩憆憕懲成承挰掁摚撐撑晟朾枨柽棖棦椉槍橕橖橙檉檙氶泟洆浧浾溗澂澄瀓瀞爯牚珵珹琤瑲畻盛睈瞠碀秤称程稱穪窚竀筬絾緽罉脀脭荿虰蛏蟶裎誠诚赪赬逞郕酲鋮鎗鏳鏿鐣鐺铖铛阷靗頳饓騁騬骋鯎"],["diu","丟丢銩铥颩"],["liang","両两亮俍俩倆倞兩冫凉哴唡啢喨墚悢掚晾梁椋樑涼湸煷粮粱糧綡緉脼良莨蜋蜽裲諒谅踉輌輛輬辆辌量鍄靓靚駺魉魎"],["you","丣亴优佑侑偤優冘卣又友右呦哊唀嚘囿妋姷孧宥尢尤峟峳幼幽庮忧怞怣怮悠憂懮戭揂攸斿有柚栯梄梎楢槱櫌櫾汓沋油泑浟游湵滺瀀牖牗牰犹狖猶猷獶由甴疣痏祐禉秞糿繇纋羐羑羗耰聈肬脜脩苃莜莠莤莸蓧蕕蚘蚰蚴蜏蝣蝤褎訧誘诱貁輏輶迶逌逰遊邎邮郵鄾酉酭釉鈾銪銹铀铕駀魷鮋鱿鲉麀黝鼬"],["yan","严乵俨偃偐偣傿儼兖兗剡匽厃厌厣厭厳厴咽唁啱喦喭噞嚥嚴堰墕壛壧夵奄妍妟姲姸娫娮媕嫣嬊嬮嬿孍宴屵岩崄崦嵃嵒嵓嶖嶮巌巖巗巘巚延弇彥彦恹愝懕懨戭扊抁掞掩揅揜敥昖晏暥曕曮棪椻椼楌橪檐檿櫩殗殷沇沿洝淊淹渰渷湮溎滟演漹灎灔灧灩炎炏烟烻焉焑焰焱煙熖燄燕爓牪狿猒珚琂琰甗盐眼研砚硏硯硽碞礹筵篶簷綖縯罨羨胭腌臙艳艶艷芫莚菴菸萒葊葕蔅虤蜒蝘衍裺褗覎觃觾言訁訮詽諺讌讞讠谚谳豓豔贋贗赝躽遃郔郾鄢酀酓酽醃醶醼釅鉛铅閆閹閻閼闫阉阎阏阽隁隒雁靨顏顑顔顩颜餍饜騐騴驗驠验鬳魇魘鰋鳫鴈鴳鶠鷃鷰鹽麙麣黡黤黫黬黭黶鼴鼹齗齞齴龂龑"],["li","丽例俐俚俪傈儮儷凓刂刕利剓剺劙力励勵历厉厘厤厯厲叓吏呖哩唎唳喱嚟嚦囄囇坜塛壢娌娳婯嫠孋孷屴岦峛峲巁廲悡悧悷慄戾扐搮擽攊攦攭斄暦曆曞朸李杝枥栎栗栛栵梨梩梸棃棙樆檪櫔櫟櫪欐欚歴歷氂沥沴浬涖溧漓澧濿瀝灕爄爏犁犂犛犡狸猁珕理琍瑮璃瓅瓈瓑瓥疠疬痢癘癧皪盠盭睝矖砅砺砾磿礪礫礰礼禮禲离秝穲立竰笠筣篥篱籬粒粚粝粴糎糲綟縭纚缡罹脷艃苈苙茘荔荲莅莉菞蒚蒞蓠蔾藜藶蘺蚸蛎蛠蜊蜧蝷蟍蟸蠇蠡蠣蠫裏裡褵詈謧讈豊貍赲跞躒轢轣轹逦邌邐郦酈醨醴里釐鉝銐鋫鋰錅錑鎘鏫鑗锂隶隷隸離雳靂靋驪骊鬁鬲鬴鯉鯏鯬鱧鱱鱳鱺鲡鲤鳢鳨鴗鵹鷅鸝鹂麗麜黎黧"],["sang","丧喪嗓搡桑桒槡磉褬鎟顙颡"],["shu","丨书侸俆俞俶倏倐儵兪叔咰塾墅姝婌孎孰尌尗属屬庶庻忄忬怷恕悆戍抒捈捒掓摅攄数數暏暑曙書朮术束杸枢柕树梳樞樹橾殊殳毹毺氀沭淑漱潄潏潻澍濖瀭焂熟瑹璹疋疎疏癙秫稌竖竪籔糬紓絉綀纾署翛腧舒荗菽蒁蒣蔬薥薯藷虪蜀蠋蠴蠾術裋襡襩謶豎贖赎跾踈軗輸输述鄃鉥錰鏣陎隃鮛鱪鱰鵨鶐鸀黍鼠"],["jiu","丩久乆九乣倃僦勼匓匛匶厩咎啾奺就廄廏廐慦揂揪揫摎救旧朻柩柾桕樛欍殧氿汣湬灸牞玖畂疚稵穋究糺糾紤纠臼舅舊舏萛赳蹴酒镹阄韭韮鬏鬮鯦鳩鷲鸠鹫麔齨"],["ge","个仡佫佮個割匌各合吤呄咯哥哿嗝嗰嘅圪塥屹愅戈戓戨扢挌搁搿擱敋杚格槅櫊歌滆滒牫牱犵猲獦疙盖硌秴箇紇纥肐胳膈臈臵舸茖葛蓋虼蛒蛤袼裓觡詥諽謌輵轕鉻鎘鎶铬镉閣閤阁隔革鞈鞷韐韚頜颌騔骼鬲魺鮥鮯鰪鲄鴐鴚鴿鵅鸽"],["ya","丫亚亜亞伢俹劜厊压厌厓厭呀呾哑唖啞圔圠圧垭埡堊堐壓姶娅婭孲岈崕崖庌庘押拁挜掗揠枒桠椏椻氩氬浥涯漄烏牙犽猚猰玡琊瑘疋疨痖瘂睚砑稏穵窫笌聐芽蕥蚜衙襾訝讶軋輵轧迓釾錏鐚铔閘雅鴉鴨鵪鵶鶕鸦鸭齖齾"],["zhong","中仲伀众偅冢刣喠堹塚妐妕媑尰幒彸徸忠忪柊歱汷泈炂煄狆瘇盅眾祌种種穜筗籦終緟终肿腫舯茽蔠蚛蝩螤螽蟲衆衳衶衷諥踵蹱重鈆鈡銿鍾鐘钟锺鴤鼨"],["jie","丯介价借倢偈偼傑傢兯刦刧刼劫劼卪吤哜唶喈喼嗟嚌堦堺妎姐婕媎媘媫嫅孑家尐屆届岊岕崨嵑嵥嶻巀幯庎徣忦悈戒截拮捷接掲掶揭搩擑擮擳斺昅杰桀桔桝椄楐楬楶榤構檞櫭毑洁洯湝滐潔煯犗狤玠琾界畍疌疖疥痎癤皆睫砎碣礍秸稭竭節紒結絜繲结羯耤脻节芥莭菨蓵藉蚧蛣蛶蜐蝍蝔蠘蠞蠽街衱衸袓袺裓褯解觧訐詰誡誱謯讦诘诫趌跲踕迼鉣鍻阶階雃鞂鞊頡颉飷骱魝魪鮚鲒鶛"],["feng","丰仹俸偑僼冯凤凨凬凮唪埄堸夆奉妦寷封峯峰崶捀摓枫桻楓檒沣沨浲渢湗溄漨灃炐烽焨煈熢犎猦琒甮疯瘋盽砜碸篈綘縫缝肨舽艂莑葑蘴蜂蠭覂諷讽豊豐賵赗逢鄷酆鋒鎽鏠锋靊風飌风馮鳯鳳鴌麷"],["guan","丱倌关冠卝婠官悹悺惯慣懽掼摜棺樌毌泴涫淉潅灌爟琯璭瓘痯瘝癏盥矔矝礶祼窤筦管綸纶罆罐舘莞萖蒄覌観觀观貫贯躀輨遦錧鏆鑵関闗關雚館馆鰥鱞鱹鳏鳤鸛鹳"],["kuang","丱儣况劻匡匩卝哐圹壙夼岲忹恇懬懭抂旷昿曠框況洭爌狂狅眖眶矌矿砿硄礦穬筐筺絋絖纊纩誆誑诓诳貺贶軖軠軦軭邝邼鄺鉱鋛鑛鵟黋"],["chuan","串传傳僢剶喘圌堾巛川暷椽歂氚汌猭玔瑏穿篅膞舛舡舩船荈賗踳輲遄釧钏鶨"],["chan","丳产佔僝僤儃儳冁刬剗剷劖单啴單嘽嚵囅墠壥婵嬋孱崭嵼嶃嶄巉幝幨廛忏懴懺掺搀摌摲摻攙斺旵梴棎榐欃毚浐湹滻潹潺澶瀍瀺灛煘燀獑產産硟磛禅禪簅緾繟繵纏纒缠羼脠艬苂蒇蕆蝉螹蟬蟾袩裧襌襜襝覘觇誗諂譂讇讒讖谄谗躔辿鄽酁醦鉆鋋鋓鏟鑱铲镡镵閳闡阐韂顫颤饞馋骣"],["lin","临亃僯冧凛凜厸吝啉壣崊嶙廩廪恡悋惏懍懔拎撛斴晽暽林橉檁檩淋潾澟瀶焛燐獜琳璘甐疄痳癛癝瞵碄磷稟箖粦粼綝繗翷膦臨菻蔺藺賃赁蹸躏躙躪轔轥辚遴邻鄰鏻閵隣霖顲驎魿鱗鳞麐麟"],["zhuo","丵倬剢劅卓叕啄啅噣圴妰娺彴拙捉捔撯擆擢斀斫斮斱斲斵晫桌梲棁棳椓槕櫡汋浊浞涿濁濯灂灼炪烵焯犳狵琢琸着硺禚穛穱窡窧篧籗籱罬茁著蓔蝃蠗蠿諁諑謶诼酌鉵鋜鐯鐲镯鵫鷟"],["dian","丶佃傎典厧唸嚸坫垫墊壂奌奠婝婰嵮巅巓巔店惦扂掂攧敁敟椣槇槙橂橝殿淀滇澱点玷琔电甸痶瘨癜癫癲碘磹簟腍蒧蕇蜔詀踮蹎鈿钿阽電靛頕顚顛颠驔點齻"],["ba","丷仈八叐叭吧哵坝坺垻墢壩夿妭岜峇巴弝扒把拔捌朳柭欛灞炦爸犮玐疤癹矲笆粑紦罢罷羓耙胈芭茇菝蚆覇詙豝跁跋軷釛釟鈀钯霸靶颰魃鮁鮊鲃鲅鲌鼥"],["dan","丹亶亻伔但倓僤儋刐勯匰单単卩啖啗啿單嘾噉噡嚪妉媅帎弹彈惔惮愖憚憺抌担掸撢撣擔旦柦殚殫氮沊泹淡澸澹燀狚玬瓭甔疍疸瘅癉癚眈石砃禫窞箪簞紞繵耼耽聃聸胆腅膽萏蓞蛋蜑蟺衴襌襜覘觛訑誕譂诞賧贉赕躭郸鄲酖醈霮頕餤饏馾駳髧鴠黕黮黵"],["wei","为亹伟伪位偉偎偽僞儰卫危厃叞味唩唯喂喡喴囗围圍圩墛壝委威娓媁媙媦寪尉尾屗峗峞崣崴嵔嵬嶶巍帏帷幃廆徫微恑惟愄愇慰懀捤揋揻撝撱斖暐未桅梶椲椳楲沇沩洈洧浘涠渨渭湋溈溦潍潙潿濊濰濻瀢炜為烓煒煟煨熭燰爲犚犩猚猥猬玮琟瑋璏瓗畏痏痿癐癓硊硙碨磈磑維緭緯纬维罻胃腲膸艉芛苇苿荱菋萎葦葨葳蒍蓶蔚蔿薇薳藯蘶蜲蜼蝛蝟螱衛衞褽覣覹觹觽觿詴諉謂讆讏诿谓趡踒踓躗躛軎轊违逶違遗遺鄬醀錗鍏鍡鏏闈闱隇隈隗霨霺韋韑韙韡韦韪頠颹餧餵饖骩骪骫魏鮇鮠鮪鰃鰄鰖鲔鳂鳚"],["zhu","主伫佇住侏劚助劯嘱囑坾壴孎宔尌属屬嵀拄敱敳斸曯朮术朱杼枓柱柷株槠樦橥櫡櫧櫫欘殶泏注洙渚潴濐瀦灟炢炷烛煑煮燭爥猪珠疰瘃眝瞩矚砫硃祝祩秼窋竚竹竺笁笜筑筯箸築篫篴紵紸絑纻罜羜翥舳芧苎苧茱茿莇著蓫蕏薥藷藸蛀蛛蝫蠋蠩蠾袾褚註詝誅諸诛诸豬貯贮跓跦躅軴迬逐逫邾鉒銖鋳鑄钃铢铸陼霔飳馵駐駯騶驻鮢鯺鱁鴸鸀麆麈鼄"],["jing","丼井京亰仱俓倞傹儆儬兢净凈刭剄劤劲勁坓坕坙境妌婙婛婧宑巠幜弪弳径徑惊憬憼擏敬旌旍景晶暻曔桱梷橸殑汫汬泾浄涇淨濪瀞燝猄獍獷璄璟璥痉痙睛秔稉穽竞竟竧竫競竸粇粳精経經经聙肼胫脛腈茎荆荊莖菁葝蟼誩警踁迳逕鏡镜阱陉陘靓靖靘静靚靜頚頸颈驚鯨鲸鵛鶁麖麠鼱"],["pie","丿撆撇暼氕潎瞥苤覕鐅"],["fu","乀乁付伏伕佛俌俘俛俯偩偪傅冨冹凫刜副匐呋咈咐哹嘸坿垘垺報复夫妇妋姇娐婏婦媍孚孵富尃岪峊巿帗幅幞府弗弣彿復怤怫懯扶抚拂拊捊捬撫敷斧旉服枎枹柎柫栿桴棴椨椱榑氟汱沕泭洑浮涪滏澓炥烰焤父玞玸琈璷甫甶畉畐畗癁盙砆砩祓祔福禣秿稃稪竎符笰筟箁箙簠粰糐紨紱紼絥綍綒緮縛绂绋缚罘罦翇肤胕脯腐腑腹膚艀艴芙芣芾苻茀茯荂荴莩菔萯葍蓲蕧虙蚥蚨蚹蛗蜅蜉蝜蝠蝮衭袚袝袱複褔襆襥覄覆訃詂諨讣豧負費賦賻负赋赙赴趺跗踾軵輔輹輻辅辐邚邞郙郛鄜酜酻釜釡鈇鉘鉜鍑鍢阜附陚韍韛韨頫颫颰馥駙驸髴鬴鮄鮒鮲鰒鲋鳆鳧鳬鳺鴔鵩鶝麩麬麱麸黻黼"],["ai","乂伌僾凒叆呝哀哎唉啀嗌嗳嘊噯埃堨塧壒娭娾嫒嬡嵦愛懓懝挨捱敱敳昹暧曖欸毐溰溾濭焥爱瑷璦癌皑皚皧瞹矮砹硋硙碍磑礙絠艾蔼薆藹譪譺賹躷醷鎄鑀锿閡阨阸隑隘霭靄靉餲馤騃鴱"],["nai","乃佴倷哪奈奶妳嬭廼柰氖渿疓耏耐能艿萘螚褦迺釢錼鼐"],["tuo","乇仛佗侂侻咃唾坨堶妥媠嫷岮庹彵托扡拓拕拖挩捝撱杔柁柝棁椭楕槖橐橢毤毻汑沰沱沲涶牠狏砣砤碢箨籜紽脫脱舵莌萚蘀袉袥託詑讬跅跎踻軃迆迱酡鉈铊阤陀陁飥饦馱馲駄駝駞驒驝驮驼魄魠鮀鰖鱓鴕鵎鸵鼉鼍鼧"],["yao","么仸侥倄偠傜僥匋吆咬喓嗂垚堯夭妖姚婹媱宎尧尭岆峣崾嶢嶤幺徭徺恌愮抭揺搖摇摿撽暚曜曣杳枖柼楆榚榣殀殽溔滧烄烑熎燿爻狕猶猺獟玅珧瑤瑶疟瘧眑矅磘祅穾窅窈窑窔窯窰筄約繇纅约耀肴腰舀艞苭荛药葯葽蓔蕘薬藥蘨袎要覞訞詏謠謡讑谣趯踰軺轺遙遥邀鈅銚鎐鑰钥铫闄陶靿顤颻飖餆餚騕驁鰩鳐鴁鴢鷂鷕鹞鼼齩"],["ma","么傌吗嗎嘛妈媽嫲孖抹摩杩榪溤犘犸獁玛瑪痲痳睰码碼礣祃禡罵蔴蚂螞蟆蟇遤鎷閁馬駡驀马骂鬕鰢鷌麻麽"],["me","么嚜庅麼麽"],["hu","乊乎乕互俿冱冴匢匫呼和唬唿喖嗀嘑嘝嚛囫垀壶壷壺姱婟媩嫭嫮寣岵帍幠弖弧忽怘怙恗惚戏戯戱戲戶户戸戽扈抇护搰摢擭斛昈昒曶枑核楛楜槲槴歑汻沍沪泘洿浒淈淲淴湖滬滸滹濩瀫烀焀煳熩狐猢琥瑚瓠瓡瓳礐祜穫笏箎箶簄糊絗綔縎縠胡膴芐苸萀葫蔛蔰虍虎虖虝蝴螜衚觳觷許謼護许豰軤轷鄠醐錿鍙鍸雐雽韄頀頶餬鬍魱鰗鱯鳠鳸鴩鵠鶘鶦鶮鶻鸌鹄鹕鹘鹱"],["zhi","之侄倁値值偫傂儨制剬劕劧卮厔只吱呮咫址坁坧垁埴執墆墌夂妷姪娡嬂寘實峙崻巵帋帙帜幟庢庤廌彘徏徝徴徵志忮恉慹憄懥懫戠执扺扻抧拞挃指挚捗掷搘搱摨摭摯擲擳擿支斦旘旨晊智杝枝枳柣栀栉栺桎梔梽植椥楖榰樲樴櫍櫛止歭殖氏汁汥汦沚治泜洔洷淔淽滍滞滯漐潌潪瀄炙熫犆狾猘瓆瓡畤疐疷疻痔痣瘈直眰知砋礩祇祉祑祗祬禃禔禵秇秓秖秩秪秲秷稙稚稺穉窒筫紙紩絷絺綕緻縶織纸织置翐聀职職肢胑胝胵脂膣膱至致臷臸芖芝芷茋茝菭薙藢蘵蚔蛭蜘螲蟙衹衼袟袠製襧覟觗觝觯觶訨誌識识豑豒豸貭質贄质贽趾跖跱踬踯蹠蹢躑躓軄軹輊轵轾迣遲郅酯釞銍銴鋕鑕鑦铚锧阤阯陟隻雉馶馽駤騭騺驇骘鯯鳷鴙鴲鶨鷙鸷黹鼅"],["wu","乌五亡亾仵伆伍侮俉倵儛兀兦剭务務勿午吳吴吾呉呜唔啎嗚噁圬坞塢墲奦妩娒娪娬婺嫵寤屋屼岉峿嵍嵨巫幠庑廡弙忢忤怃恶悞悟悮惡憮戊扜扝扤捂揾摀敄於无旿晤杅杇杌梧橆歍武毋汙汚污沕洖洿浯渞溩潕烏焐無熃熓物牾玝珷珸瑦璑甒痦瞴矹碔祦禑窏窹箼粅膴舞芜芴茣莁蕪蘁蜈蝥螐蟱誈誣誤譕诬误趶躌迕逜邬郚鄔釫鋈鋘鋙鎢钨铻阢陚隖雺雾霚霧霿靰騖骛鯃鰞鴮鵐鵡鶩鷡鹀鹉鹜鼯鼿齀齬"],["zha","乍偧冊剳劄厏吒咋咤哳喋喥喳囃奓宱扎抯拃挓揸搩搾摣札柞柤查柵栅楂榨樝渣溠潳灹炸煠牐甴痄皶皻眨砟箑箚紥紮耫苲蚱蚻蜡觰詐譇譗诈踷蹅軋轧醡鍘铡閘闸霅鞢餷馇鮓鮺鲊鲝齄齇齰"],["fa","乏伐佱傠发垡姂廢彂撥栰橃汎沷法灋珐琺疺發瞂砝笩筏罚罰罸茷蕟藅貶酦醱鍅閥阀髪髮"],["le","乐了仂勒叻嘞忇扐楽樂氻泐牞玏砳竻簕肋艻阞韷鰳鳓"],["yue","乐刖哕哾噦妜嬳岄岳嶽彟彠恱悅悦戉抈捳曰曱月枂栎楽樂樾櫟汋瀹爚玥矆矱礿禴箹篗籆籥籰粤粵約约臒蘥蚎蚏說説说越趯跀跃躍躒軏鈅鉞鑰钥钺閱閲阅髺鸑鸙黦龠"],["yin","乑乚伒侌冘凐印吟吲唫喑噖噾嚚囙因圁圻垔垠垽堙堷夤姻婣婬寅尹峾崟崯嶾廕廴引愔慇慭憖憗懚斦朄栶梀檃檭檼櫽欭歅殥殷氤泿洇洕淫淾湚湮溵滛潯濥濦烎烟犾狺猌玪珢璌瘖瘾癊癮硍碒磤禋秵窨筃絪緸縯胤膶苂茚茵荫荶蒑蔩蔭蘟蚓螾蟫裀訔訚訡誾諲讔赺趛輑鄞酓酳釿鈏鈝銀銦铟银闉阥阴陰陻隂隐隠隱霒霠霪靛靷鞇音韾飮飲饮駰骃鮣鷣齗齦龂龈"],["pan","乑冸判叛坢媻幋扳拚搫攀柈槃沜泮洀湴溿潘瀊炍爿牉畔畨番盘盤盼眅眫碆磐磻縏胖膰般萠蒰螌蟠袢褩襻詊跘蹒蹣鋬鎜鑻鞶頖"],["ping","乒俜冯凭凴呯坪娉屏屛帡帲幈平慿憑枰檘泙洴涄淜焩玶瓶甁甹砯硑竮箳簈缾聠胓艵苹荓萍蓱蘋蚲蛢評评軿輧郱鉼頩馮鮃鲆鵧"],["pang","乓厐嗙夆嫎庞彷徬旁汸沗滂炐牓磅篣耪肨胖胮膀膖舽蒡螃覫趽逄鎊镑雱霶髈鰟鳑龎龐"],["qiao","乔侨俏偢僑僺劁勪喬嘺噭塙墝墧墽壳嫶峤峭嵪嶠巧帩幓幧悄愀憔招摮撬撽敲桥樵橇橋橾殻殼毃焳燆燋癄睄瞧硗硚碻磝磽礄礉窍竅箾繑繰缲翘翹荍荞菬蕉蕎藮蟜誚譙诮谯趫趬跷踍蹺蹻躈郻鄡鄥釥鍫鍬鐈鐰锹陗雀鞒鞘鞩鞽韒頝顦骹髚髜"],["guai","乖叏噲夬怪恠拐掴摑枴柺箉罫"],["sheng","乗乘偗剩剰勝升呏圣墭声娍嵊憴斘昇晟晠曻枡榺殅殸泩渑渻湦澠焺牲狌珄琞生甥盛省眚竔笙縄繩绳聖聲胜苼蕂譝貹賸鉎鍟阩陞陹鱦鵿鼪"],["zhe","乛厇哲啠喆嗻嚞埑夂嫬悊慹扸折招摺晢晣杔柘棏樜歽浙淛潪着矺砓磔禇籷粍者聑著蔗虴蛰蜇蟄蟅袩褶襵詟謫謺讁讋谪赭輒輙轍辄辙这這遮銸鍺锗驝鮿鷓鷙鹧"],["mie","乜吀咩哶孭幭懱搣櫗滅瀎灭烕眜篾蔑薎蠛衊覕鑖闑鱴鴓"],["nie","乜啮喦嗫嚙囁囐囓圼孼孽峊嵲嶭巕帇惗捏揑摰敜枿棿槷檗櫱涅湼痆篞籋糱糵聂聶臬臲菍蘖蠥讘踂踗踙蹑躡銸鋷錜鎳鑈鑷钀镊镍陧隉顳颞齧"],["xi","习係俙傒僖兮凞匸卌卥厀吚吸呬咥唏唽喜喺嘻噏嚱囍塈墍壐夕奚娭媳嬆嬉宩屃屓屖屣屭嵠嶍嶲巂巇希席廗徆徔徙徯忚忥忾怬怸恄恓息悉悕惁惜愾慀憘憙戏戯戱戲扱扸摡昔晞晰晳暿曦杫析枲栖桸椞椺榽槢樨橀檄欪欯欷歖歙氥汐洗浠淅溪滊漇漝潝潟澙烯焁焈焟焬煕熂熄熈熙熹熺熻燍燨爔牺犀犔犧狶獡玺琋璽瓕瘜皙盻睎瞦矖矽硒碏磎磶礂禊禧稀稧穸窸粞糦系細綌緆縘縰繋繥繫纚细绤羛羲習翕翖肸肹脇脋腊膝舃舄舾茜莃莔菥葈葸蒠蒵蓆蓰蔇蕮薂虩蜡蜤蜥蝷螅螇蟋蟢蠵衋袭裼襲西覀覡覤觋觹觽觿訢誒諰謑謵譆诶谿豀豨豯貕赥赩趇趘蹊蹝躧邜郄郋郗郤鄎酅醯釐釳釸鈒鈢鉨鉩銑錫鎴鏭鑴钑铣锡闟阋隙隟隰隵雟雭霫霼飁餏餙餼饩饻騱騽驨鬩鰼鱚鳛鵗鸂黖鼰鼳鼷"],["nang","乪儾嚢囊囔崀搑擃攮曩欜涳灢蠰饢馕鬞齉"],["mai","买佅劢勱卖唛嘜嘪埋脈脉荬蕒薶衇貍買賣迈邁霡霢霾鷶麥麦"],["luan","乱乿亂卵圝圞奱娈孌孪孿峦巒挛攣曫栾欒滦灓灤癴癵羉脔脟臠臡薍虊覶釠銮鑾鵉鸞鸾"],["ru","乳侞偄儒入吺嗕嚅如媷嬬孺帤挐擩曘桇汝洳渪溽濡燸獳筎縟繻缛肗臑茹蒘蓐蕠薷蠕袽褥襦辱邚鄏醹銣鑐铷顬颥鱬鴑鴽"],["xue","乴削吷噱坹壆学學岤峃嶨怴斈桖泧泬泶滈澩瀥燢狘疦疶瞲穴茓蒆薛血袕觷謔谑趐踅辥辪雤雪靴鞾韡鱈鳕鴬鷽鸴"],["na","乸內南吶呐哪嗱妠娜拏拿挐捺秅笝納纳肭蒘蒳衲袦訤詉誽豽貀軜那鈉鎿钠镎雫靹魶"],["gan","乹乾亁仠佄倝凎凲坩尲尴尶尷干幹忓感扞擀攼敢旰杆柑桿榦橄檊汵泔淦漧澉灨玕玵甘疳皯盰矸秆稈竿笴筸篢簳粓紺绀肝芉苷虷衦詌豃贑贛赣赶趕迀酐釬骭魐鰔鱤鳡鳱"],["qian","乹乾仟仱伣佥俔倩偂傔僉儙凵刋前千厱唊圱圲堑塹墘壍奷婜媊嬱孅孯岍岒嵌嵰廞忴悓悭愆慊慳扡扦扲拑拪挳掔掮揵搴摼撁攐攑攓朁杄棈椠榩槏槧橬檶櫏欠欦歉歬汘汧浅淺潛潜濳灊煔熑燫牵牽犍皘竏签箝箞篏篟簽籤綪縴繾纤缱羬肷脥膁臤艌芊芡茜茾荕荨葥葴蒨蔳蕁藖虔蚈蚙蜸褰諐謙譴谦谴谸軡輤迁遣遷釺鈆鈐鉆鉗鉛銭錎錢鍼鏲鐱鑓鑯钎钤钱钳铅阡雃靬韆顅騚騝騫骞鬜鬝鰜鰬鳒鳽鵮鶼鹐黔黚"],["gui","亀佹傀刽刿劊劌匦匭匱厬圭垝妫姽媯嫢嬀宄嶡嶲巂帰庋庪廆归恑摫撌攰攱敮昋晷朹柜桂桧椝椢槣槶槻槼檜櫃櫰櫷歸氿湀溎潙炅炔猤珪瑰璝瓌癐癸皈瞆瞡瞶硅硊祪禬窐竃筀簂簋繪胿膭茥蓕蛫螝蟡袿襘規规觤詭诡貴贵赽趹跪軌轨邽郌閨闺陒雟鞼騩鬶鬹鬼鮭鱖鱥鲑鳜鳺鴂鴃龜龟"],["jue","亅倔傕决刔劂勪匷厥叏吷啳噘噱嚼埆夬妜孒孓屩屫崛崫嶡嶥弡彏憠憰戄抉挗捔掘撅撧攫斍桷橛橜欔欮殌氒決泬潏灍焆熦爑爝爴爵獗玃玦玨珏瑴璚疦瘚矍矞矡砄絕絶繑繘绝脚腳臄芵蕝蕨虳蚗蟨蟩袦覐覚覺觉角觖觼訣譎诀谲貜赽趉趹蹶蹷躩逫鈌鐍鐝钁镢镼駃髉鱖鴂鴃鶌鷢龣"],["liao","了僇僚嘹嫽寥寮尞尥尦屪嵺嶚嶛廖廫憀憭撂撩敹料暸樛漻潦炓燎爎爒獠璙疗療瞭窷竂簝繚缭聊膋膫蓼藔蟉蟟蟧豂賿蹘蹽辽遼鄝釕鐐钌镣镽飂飉髎鷯鹩"],["er","二佴侕儿児兒刵咡唲嬭尒尓尔峏弍栭栮樲毦洏洱爾珥而耏耳聏胹荋薾衈袻誀貮貳贰趰輀轜迩邇鉺铒陑陾隭餌饵駬髵髶鮞鲕鴯鸸"],["chu","亍俶傗储儊儲処出刍初厨嘼埱处媰岀幮廚怵慉憷懨拀搐摢摴敊斶杵椘楚楮槒樗橱檚櫥欪歜滀滁濋炪犓珿琡璴畜矗础礎竌竐篨絀绌耝耡臅芻蒢蒭蓫蕏藸處蜍蠩褚觕触觸詘諔豖豠貙趎跦踀蹰躇躕鄐鉏鋤锄閦除雏雛鶵鸀黜齣齭齼"],["kui","亏傀刲匮匱卼喟喹嘳夔奎媿嬇尯岿巋巙悝愦愧憒戣揆晆暌楏楑樻櫆欳歸殨溃潰煃犪盔睽瞆瞶磈窥窺篑簣籄聧聩聭聵胿腃膭葵蒉蕢藈蘬蘷虁虧蝰謉跬蹞躨逵鄈鍨鍷鐀鑎闚隗頄頍頯顝餽饋馈馗騤骙魁"],["yun","云伝傊允勻匀员員喗囩夽奫妘媼孕恽惲愠愪慍抎昀晕暈枟榅橒殒殞氲氳沄涒涢溳澐煴煾熅熉熨狁玧畇眃磒秐筠筼篔紜緷緼縕縜纭缊耘耺腪芸荺蒀蒕蒷蕓蕰蕴薀藴蘊蜵蝹褞貟賱贇贠赟輼轀辒运運郓郧鄆鄖酝醖醞鈗鋆阭陨隕雲霣鞰韗韞韫韵韻頵餫馧馻齫齳"],["sui","亗倠哸嗺埣夊娞嬘尿岁嵗懳挼旞檖歲毸浽滖澻濉瀡煫熣燧璲瓍眭睟睢砕碎祟禭穂穗穟簑綏縗繀繐繸绥缞脺膸芕荽荾葰虽襚誶譢谇賥遀遂邃鏸鐆鐩陏隋随隧隨雖靃鞖韢髄髓"],["gen","亘亙哏揯搄根艮茛跟"],["geng","亙刯哽埂堩峺庚恆挭掶暅更梗椩浭焿畊絙絚綆緪縆绠羮羹耕耿莄菮賡赓邢郠頸颈骾鯁鲠鶊鹒"],["xie","些亵伳偕偞偰僁儶写冩劦勰协協卨卸叶嗋噧垥塮夑奊契娎媟孈寫屃屑屓屟屧屭峫嶰廨徢恊愶慀懈拹挟挾揳搚携撷擕擷攜斜旪暬枻械楔榍榭歇泄泻洩渫湝滊澥瀉瀣灺炧炨烲焎熁燮燲爕猲獬瑎碿祄禼糏紲絏絜絬綊緤緳繲纈绁缬缷翓胁脅脇脋膎薢薤藛蝎蝑蝢蟹蠍蠏血衺褉褻襭觟解諜諧謝讗谐谢躞躠邂邪鍱鐷鞋鞢鞵韰頁頡页颉鬹魼鮭鲑齂齘齛齥龤"],["zhai","亝侧债側債厏夈宅寨抧择捚摘擇斋斎榸檡瘵砦祭窄翟責责鉙骴齋"],["tou","亠偷偸哣埱头婾媮投綉緰褕透鋀鍮頭骰"],["wen","亠刎吻呅呚呡問塭妏彣忞忟抆揾搵文昷桽榅榲歾殟汶渂温溫炆珳瑥璺瘒瘟稳穏穩紊紋絻緼縕纹缊聞肳脕脗舋芠莬蕰蕴薀藴蘊蚉蚊螡蟁褞豱輼轀辒鎾閺閿闅闦问闻阌雯韞顐馼駇魰鰛鰮鳁鳼鴍鴖鼤"],["wang","亡亾仼兦妄尣尩尪尫彺往徃徍忘忹惘抂旺暀望朢枉棢汪瀇王琞盳網网罓罔罖莣菵蚟蛧蝄誷輞辋迋迬魍"],["kang","亢伉匟囥嫝嵻康忼慷扛抗摃槺漮炕犺砊穅粇糠躿邟鈧鏮钪閌闶鱇"],["da","亣剳匒呾咑哒嗒噠垯塔墶大妲怛憚打搭撘汏沓溚炟畗畣疸瘩眔笚笪答繨羍耷荅荙薘蟽褡詚跶躂达迏迖迚逹達鎉鎝鐽靼鞑韃龖龘"],["jiao","交佼侥僥僬儌剿劋勦叫呌嘂嘄嘐嘦噍噭嚼姣娇嫶嬌嬓孂峤峧嶕嶠嶣徼恔悎憍憿挍挢捁搅摷撟撹攪敎教敥敫敽敿斠晈暞曒校椒櫵浇湫湬滘漖潐澆灂灚烄焦焳煍燋燞狡獥珓璬皎皦皭矫矯礁穚窌窖笅筊簥糸糹絞繳纐纟绞缴胶脚腳膠膲臫艽芁茭茮蕉藠虠蛟蟜蟭覐覚覺觉角訆譑譥賋趫趭跤踋蹻較轇轎轿较郊酵醮釂鉸鐎铰餃饺驕骄骹鮫鱎鲛鵤鷦鷮鹪"],["hai","亥侅咍咳嗐嗨嘿嚡孩害氦海烸絯胲还還郂酼醢餀饚駭駴骇骸"],["heng","亨佷哼啈堼姮恆恒悙桁横橫涥烆珩胻脝蘅行衡鑅鴴鸻"],["mu","亩仫募呒呣嘸坶墓墲姆姥娒峔幕幙慔慕拇暮木朷楘模樢母毣毪氁沐炑牟牡牧牳狇畆畒畝畞畮目睦砪穆縸胟艒苜茻莯萺蚞踇鉧鉬钼雮霂鞪"],["ting","亭侱侹停厅厑厛听圢娗婷嵉庁庍庭廰廳廷忊挺桯梃楟榳汀涏渟濎烃烴烶珵珽町筳綎耓聤聴聼聽脡艇艼莛葶蜓蝏誔諪邒鋌铤閮霆鞓頲颋鼮"],["qin","亲侵儭勤厪吢吣唚嗪噙坅埁埐堇墐媇嫀寑寝寢寴嵚嶔嶜廑忴慬懃懄扲抋捦揿搇撳擒斳昑梫橬檎櫬欽沁溱澿濅瀙珡琴琹瘽矝禽秦笉綅耹芩芹菣菦菳藽蚙螓螼蠄衾覃親誛赺赾鈂鈊鈙鈫鋟钦锓雂靲顉顩駸骎鬵鮼鳹鵭"],["qing","亲倾傾儬凊剠勍卿啨圊埥夝寈庆庼廎情慶掅擎擏晴暒棾樈檠檾殑殸氢氫氰淸清渹漀濪甠碃磬箐綪綮罄苘莔葝蜻親請謦请軽輕轻郬鑋靑青靘頃顷鯖鲭鶄黥"],["bo","亳仢伯侼僠僰剝剥勃博卜哱啵噃嚗壆妭孛孹嶓帗帛彴愽懪拨挬掰搏撥播擘柏柭桲檗檘欂泊波浡淿渤湐溊潑煿牔犦犻狛猼玻瓝瓟癶發盋砵碆磻礡礴秡箔箥簙簸糪紴缽肑胉脖膊般舶艊苩茀菠萡葧蔔蔢薄蘗蚾袚袯袹襎襏襮詙譒豰趵跛踣蹳郣鈸鉑鉢鋍鎛鑮钵钹铂镈餑餺饽馎馛馞駁駮驋驳髆髉魄鮁鮊鱍鲌鵓鹁"],["lian","亷僆劆匲匳嗹噒堜奁奩媡嬚孌帘廉怜恋慩憐戀摙攣敛斂梿楝槤櫣歛殓殮浰涟湅溓漣潋澰濂濓瀲炼煉熑燫琏瑓璉磏稴簾籢籨練縺纞练羷翴联聨聫聮聯脸臁臉莲萰蓮蔹薕薟蘝蘞螊蠊裢裣褳襝覝謰譧蹥连連鄻醶錬鍊鎌鏈鐮链镰鬑鰊鰱鲢"],["duo","亸凙刴剁剟剫吋咄哆哚喥嚉嚲垛垜埵堕墮墯多夛夺奪奲媠嫷尮崜嶞度惰憜挅挆掇敓敚敠敪朵朶杕枤柁柂柮桗椯毲沰沱痥綞缍舵茤裰詑貀趓跢跥跺跿踱躱躲軃鄲鐸铎陊陏隓飿饳馱駄驮鬌鮵鵽"],["men","亹们們怋悗悶懑懣扪捫暪殙滿焖燜玧璊穈菛虋鍆钔門閅门闷"],["ren","人仁仞仭任刃刄壬妊姙屻忈忍忎扨朲杒栠栣梕棯涊牣祍秂秹稔紉紝絍纫纴肕腍芢荏荵菍葚衽袵訒認认讱軔轫釰鈓銋靭靱韌韧飪餁饪魜鵀"],["shen","什伔伸侁侺兟参參叄叅呻哂堔妽姺娠婶嫀嬸审宷審屾峷幓弞愼慎扟抌搷敒昚曋曑柛棯椹槮氠沈涁淰深渖渗滲瀋燊珅甚甡甧申瘆瘮眒眘瞋瞫矤矧砷神祳穼籶籸糁糝紳綝绅罙罧肾胂脤腎莘葚葠蓡蔘薓蜃蜄裑覾訠訷詵諗讅诜谂谉身邥鉮鋠頣駪魫鯅鯓鯵鰺鲹鵢"],["ze","仄侧側则則咋唶啧啫嘖夨嫧崱帻幘庂択择捑擇昃昗樍歵汄沢泎泽溭滜澤皟瞔矠礋稄笮箦簀耫舴萚蘀蠌襗諎謮責賾责赜迮飵鸅齚齰"],["jin","仅今伒侭僅僸儘兓凚劤劲勁卺厪唫噤嚍埐堇堻墐壗妗婜嫤嬧寖尽嶜巹巾廑惍慬搢斤斳晉晋枃榗槿歏殣津浕浸溍漌濅濜烬煡燼珒琎琻瑨瑾璡璶盡矜矝砛祲禁竻笒筋紟紧緊縉缙臸荕荩菫蓳藎衿襟覲觐觔謹谨賮贐赆近进進鄑金釒釿錦鏱钅锦靳饉馑馸鹶黅齽"],["pu","仆僕剝剥匍噗圃圑圤埔堡墣巬扑捗撲擈普暜暴曝朴柨樸檏氆浦溥潽濮瀑炇烳獛璞痡瞨穙纀脯舖荹莆菩葡蒱蒲蜅襆襥諩譜谱贌蹼酺鋪鏷鐠铺镤镨陠鯆"],["reng","仍扔礽芿辸陾"],["fo","仏仸佛坲"],["tao","仐匋叨咷啕夲套嫍幍弢慆掏搯桃梼槄檮洮涛涭淘滔濤焘燾瑫祹籌絛綢綯縚縧绦绹萄蜪裪討詜謟讨轁迯逃醄鋾錭陶鞀鞉鞱韜韬飸饀饕駣騊鼗"],["lun","仑伦侖倫嗧囵圇埨婨崘崙惀抡掄棆沦淪溣碖磮綸纶耣腀菕蜦論论踚輪轮錀陯鯩"],["cang","仓仺伧倉傖凔匨嵢沧滄濸獊篬舱艙苍蒼蔵藏螥鑶鶬鸧"],["zi","仔倳兹剚吇吱呰呲咨啙嗞姉姊姕姿子孖字孜孳孶崰嵫恣杍栥梓椔榟泚淄渍湽滋滓漬澬牸玆璾眥眦矷禌秄秭秶稵穧笫籽粢紎紫緇缁耔胏胔胾自芓茈茊茡茲荢菑葘薋虸觜訾訿諮谘貲資赀资赼趑趦輜輺辎鄑釨鈭錙鍿鎡锱镃頾頿髭鯔鰦鲻鶅鼒齍齜龇"],["zai","仔傤儎再哉在宰崽扗栽洅渽溨災灾烖甾睵縡菑賳載载酨"],["ta","他傝咜嗒嚃嚺塌塔墖她它崉拓挞搨撘撻榙榻橽毾沓涾溚溻漯澾濌牠狧獭獺祂禢荅褟誻譶趿踏蹋躢逹達遝遢鉈錔鎉鎑铊闒闥闧闼阘鞜鞳韃鮙鰨鳎"],["xian","仙仚伣伭佡俔僊僩僲僴先冼县咁咞咸哯唌啣嗛嘕垷壏奾姭姺娊娨娴娹婱嫌嫺嫻嬐孅宪尟尠屳岘峴崄嶮幰廯弦忺憪憲憸懢挦掀搟撊撏攇攕显晛暹杴槏橌櫶欦毨氙洗涀涎湺澖瀗灦烍燹狝猃献獫獮獻玁现珗現甉痫癇癎盷県睍瞯瞷硍礥祆禒秈稴筅箲籼粯糮絃絤綅綖綫線縣縿繊纎纖纤线缐羡羨羬胘脇脋腺膁臔臤臽舷苋苮莧莶蔹薟藓藖蘚蘝蘞蚬蚿蛝蜆衔衘褼襳見见誢誸諴譀譣豏賢贒贤赻跣跹蹮躚軐軒輱酰醎銑銛銜鋧錎錟鍁鍌鏾铣铦锨锬閑閒闲限险陷險霰韅韯韱顈顯餡馅馦鮮鱻鲜鶱鷳鷴鷼鹇鹹麙麲鼸"],["cha","仛侘偛刹剎叉喳嗏嚓垞奼姹察岎岔嵖差扠扱挿捈插揷搽摖杈查査梌楂槎檫汊猹碴秅紁肞臿艖芆茬茶荖衩褨訍詧詫诧蹅釵銟鍤鎈鑔锸镲靫餷馇"],["hong","仜厷叿吰呍哄唝嗊嚝垬妅娂宏宖屸巆弘彋愩揈撔晎汯泓洪浤浲渱渹潂澋澒灴烘焢玒玜硔硡竑竤篊粠紅紘紭綋红纮羾翃翝耾舼苰荭葒葓蕻薨虹訇訌讧谹谼谾輷轟轰鈜鉷銾鋐鍧閎閧闀闂闳霐霟鞃鬨魟鴻鸿黉黌"],["tong","仝佟侗偅僮冂劏勭同哃嗵囲垌峂峒峝庝彤恫恸慟憅捅晍曈朣桐桶樋橦氃浵潼炵烔熥燑爞犝狪獞痌痛眮瞳砼硧秱穜童筒筩粡絧統綂统膧茼蓪蚒衕詷赨通酮鉖鉵銅铜餇鮦鲖"],["han","仠佄傼函凾厈含咁哻唅喊嚂圅垾娢嫨寒屽崡嵅忓悍憨憾扞捍撖撼攼旱晗晘晥暵桿梒椷榦歛汉汗汵浛浫涆涵淊漢澏澣瀚焊焓熯猂琀甝皔睅筨罕翰肣莟菡蔊蘫虷蚶蛿蜬蜭螒譀谽豃邗邯酣釬銲鋎鋡閈闞闬阚雗韓韩頇頜頷顄顸颔馠馯駻鬫魽鳱鶾鼾"],["dai","代侢傣叇呆呔垈埭大岱帒带帯帶廗待怠懛戴曃柋歹殆汏瀻獃玳瑇甙箉簤紿緿绐艜蔕蚮蝳螮袋襶詒诒貸贷跢蹛軑軚軩轪迨逮霴靆駘骀鴏黛黱"],["chao","仦仯剿劋勦吵嘲巐巢巣弨怊抄摷晁朝樔欩漅潮炒焣焯煼牊眧窲粆綤綽繛绰罺耖觘訬謿超趠趫轈鄛鈔钞麨鼂鼌"],["chang","仧仩伥倀倘倡偿僘償兏厂厰唱嘗嚐场場塲娼嫦尝常廠徜怅悵惝敞昌昶晿暢棖氅淐焻猖玚琩瑒瑺瓺甞畅畼肠脹腸膓苌菖萇蟐裮裳誯鋹鋿錩鏛锠長镸长閶闛阊韔鬯鯧鱨鲳鲿鼚"],["sa","仨卅挲摋撒攃櫒泧洒潵灑脎萨蕯薩訯躠鈒鎝鏾钑隡靸鞈颯飒馺"],["fan","仮凡凢凣勫匥反噃墦奿婏嬎嬏嬔帆幡忛憣払攵旙旛杋柉梵棥楓樊橎氾汎泛渢滼瀪瀿烦煩燔犭犯犿璠畈畨番盕矾礬笲笵範籓籵緐繁繙羳翻膰舤舧舩范蕃薠藩蘩蠜襎訉販贩蹯軓軬轓返釩鐇钒颿飜飯飰饭鱕鷭"],["miao","仯喵妙媌嫹庙庿廟描杪淼渺玅眇瞄秒竗篎緢緲繆缈缪苗藐訬邈鈔钞鱙鶓鹋"],["yang","仰佒佯傟养劷勜卬咉坱垟央姎婸岟崵崸徉怏恙慃懩扬抰揚攁敭旸昜暘杨柍样楊楧様樣歍殃氜氧氱泱洋漾瀁炀炴烊煬玚珜瑒疡痒瘍癢眏眻礢禓秧紻羊羏羕胦蛘蝆詇諹軮輰鉠鍈鍚鐊钖锳阦阳陽雵霙霷鞅颺飏飬養駚鰑鴦鴹鸉鸯"],["wo","仴倭偓卧唩喔嚄堝婐婑媉幄我挝捰捼捾握撾斡枂楃沃涡涴涹渥渦濄濣焥猧瓁瞃硪窝窩肟腛臒臥艧莴萵蒦薶蜗蝸踒踠雘馧齷龌龏"],["jian","件侟俭俴倹偂健傔僣僭儉兼冿减剑剣剪剱劍劎劒劔囏囝坚堅堿墹奸姦姧寋尖帴幵建弿彅徤惤戋戔戩戬拣挸捡揀揃揵搛撿擶攕旔暕枧柬栫梘检検椷椾楗榗槛樫橏橺檢檻櫼歼殱殲毽洊浅涀涧淺渐減湔湕溅漸澗濺瀐瀳瀸瀽煎熞熸牋牮犍猏玪珔瑊瑐监監睑睷瞯瞷瞼硷碊碱磵礀礆礛笕笺筧简箋箭篯簡籛糋絸緘縑繝繭纎纖缄缣翦聻肩腱臶舰艦艰艱茧荐菅菺葌葏葥蒹蔪蕑蕳薦藆虃螹蠒袸裥襇襉襔襺見覵覸见詃諓諫謇謭譼譾谏谫豜豣賎賤贱趝趼跈践踐踺蹇轞醎釰釼鈃鉴銒鋄鋻錬錽鍊鍳鍵鎆鎫鏩鐗鐧鐱鑑鑒鑬鑯鑳钘锏键閒間间險靬鞬鞯韀韉餞餰饯馢騫骞鬋鰎鰔鰜鰹鲣鳒鳽鵳鶼鹣鹸鹹鹻鹼麉黚"],["jia","价伽佳假傢價加叚唊嗧嘉嘏圿埉夹夾婽嫁宊家岬幏徦忦恝戛戞扴抸拁挟挾擖斚斝架枷梜椵榎榢槚檟毠泇浃浹犌猰猳玾珈甲痂瘕稼笳筴糘耞胛脥腵茄荚莢葭蛱蛺袈袷裌豭貑賈贾跏跲迦郏郟鉀鉫鉿鋏鎵钾铗镓頬頰颊餄饸駕駱驾骆鴐鴶鵊麚"],["chuang","仺倉傸刅创刱剏剙創噇囪幢床怆愴摐朣橦漺牀牎牕疮瘡磢窓窗窻膧蔥闖闯"],["fen","份偾僨兝分吩坆坋坟墳奋奮妢岎帉幩弅忿愤憤昐朆朌枌梤棻棼橨氛汾濆瀵炃焚燌燓獖玢瞓砏秎竕粉粪糞紛纷羒羵翂肦膹芬葐蒶蕡蚠蚡衯訜豮豶轒酚鈖錀鐼隫雰頒颁餴饙馚馩魵鱝鲼鳻黂黺鼖鼢"],["di","仾低俤偙僀儥厎呧哋唙啇啲嘀嚁地坔坘坻埊埞堤墆墑墬奃娣媂嫡嵽嶳帝底廸弔弚弟弤彽怟慸扚抵拞掋提揥摕敌敵旳杕枤柢梊梑棣楴樀櫂氐泜浟涤渧滌滴焍牴狄玓珶甋疐的眱睇砥碮碲磾祶禘笛第篴籴糴締缔羝翟聜肑腣苐苖荻菂菧蒂蔋蔐蔕藋藡蝃螮袛覿觌觝詆諟諦诋谛豴赿趆踧踶蹏蹢軧迪递逓遞遰邸釱鉪鍉鏑镝阺隄靮鞮頔馰骶髢髰鬄魡鸐"],["fang","仿倣匚坊埅堏妨彷徬房放方旊昉昘枋淓牥瓬眆眪祊紡纺肪舫芳蚄訪访趽邡鈁钫防髣魴鲂鴋鶭"],["pei","伂佩呸培姵婄嶏帔怌抷斾旆昢毰沛浿淠犻珮肧胚茷衃裴裵賠赔轡辔配醅錇锫阫陪霈馷"],["diao","伄凋刁刟叼吊奝嬥屌弔弴彫扚掉汈淍琱瘹瞗矵碉窎窵竨絩罀蓧藋虭蛁訋誂調调貂趙軺釣鈟銚銱鋽錭鑃钓铞铫雕雿颩魡鮉鯛鲷鳥鳭鵃鵰鸟鸼鼦"],["dun","伅吨噸囤坉墩墪壿庉忳惇憞撉撴敦楯橔沌潡炖燉犜獤盹盾砘碷礅腞腯蜳趸踲蹲蹾躉逇遁遯鈍鐓鐜钝镦頓顿驐"],["xiu","休俢修咻嗅嚊宿岫峀庥朽樇溴滫潃烋烌珛琇璓秀糔綇綉繡绣羞脙脩臭臰臹茠蓨螑袖褎褏貅銝銹鎀鏅鏥鏽锈飍饈馐髤髹鱃鵂鸺齅"],["nu","伖伮傉努奴孥弩怒搙砮笯胬詉駑驽"],["tang","伖倘偒傏傥儻劏唐啺嘡坣堂塘嵣帑戃搪摥攩曭棠榶樘橖欓汤淌湯溏漟漡烫煻燙爣瑭矘磄禟篖簜糃糖糛羰耥膅膛蓎蕩薚蘯蝪螗螳赯趟踼蹚躺逿鄌醣鎕鎲鏜鐋鐺钂铴镋镗閶闛闣隚鞺餳餹饄饧鶶黨鼞"],["huo","伙佸俰剨劐吙和咟嚄嚯嚿夥奯姡惑或捇掝擭攉旤曤楇檴沎活湱漷濊濩瀖火灬焃獲癨眓矆矐礊祸禍秮秳穫耠耯腘膕臛艧获萿蒦藿蠖謋豁貨货趏邩鈥鍃鑊钬锪镬閄雘霍靃騞魊"],["hui","会佪僡儶匯卉叀咴哕喙嘒噅噕噦嚖囘回囬圚堕墮壞婎媈嬒孈寭屶屷幑廆廻廽彗彙彚徊徻徽恚恛恢恵悔惠慧憓懳拻挥揮撝晖晦暉暳會桧椲楎槥橞檅檓檜櫘殨毀毁毇汇沬泋洃洄浍湏溃滙潓潰澮瀈灰灳烜烠烣烩煇煒燬燴獩珲琿璤璯痐瘣睳瞺硘禈秽穢篲繢繪绘缋翙翚翬翽芔茴荟蔧蕙薈薉藱蘬蘳虺蚘蛔蛕蜖螝蟪袆褘襘詯詼誨諱譓譭譮譿讳诙诲豗賄贿輝辉迴逥銊鏸鐬闠阓隓隳靧鞼韢頮顪颒餯鮰鰴麾鼿齀"],["kuai","会侩儈凷哙圦块塊墤巜廥快擓旝會浍澮狯獪璯筷糩脍膾蒯蕢郐鄶駃鬠鱠鲙"],["zu","伜伹俎倅傶卆卒哫唨岨崒崪族爼珇砠祖租稡箤組綷组菹葅蒩詛謯诅足踤踿鉏錊鎐鎺鏃镞阻靻顇駔驵"],["cui","伜倅催凗啐啛墔崒崔嶉忰悴慛摧椊榱槯毳淬漼濢焠熣獕琗璀疩瘁皠磪竁粋粹紣綷縗繀缞翆翠脃脆脺膬膵臎萃衰襊趡鏙隹顇"],["che","伡伬俥偖勶呫唓坼奲尺屮彻徹扯掣揊撤撦澈烢烲焎爡瞮砗硨硩聅莗蛼詀謵車车迠頙"],["yai","伢厓堐岈崕崖庌拁枒涯漄牙猚玡琊瑘疨睚笌芽蚜衙釾齖"],["chen","伧傖儭嗔嚫塵墋夦宸尘忱愖抻捵揨敐晨曟栕桭棽榇樄櫬沉煁琛疢瘎瘨瞋硶碜磣秤称稱綝縝臣茞莀莐蔯薼螴衬襯訦諃諶謓讖谌谶賝贂趁趂趻踸軙辰迧郴醦鈂鍖闖陈陳霃鷐麎齓齔龀"],["xun","伨侚偱勋勛勲勳卂咰噀噚嚑坃埙塤壎壦奞姰孫寻尋峋巡巺巽廵徇循恂愻揗攳旬曛杊栒桪樳殉殾毥汛洵浔浚潯濬灥焄熏燂燅燖燻爋爓狥獯珣璕畃矄稄窨紃絢纁绚臐荀荤荨葷蕁蕈薫薰蘍蟫蟳襑訊訓訙詢训讯询賐迅迿逊遜郇鄩醺鑂顨馴駨驯鱏鱘鲟"],["xin","伩信俽噷囟妡嬜孞庍廞心忻惞憖新昕杺枔欣歆炘焮盺礥脪舋芯莘薪衅襑訢訫軐辛邤釁鈊鋅鐔鑫锌镡阠顖馨馫馸鬵"],["wa","佤凹劸咓哇唲啘嗗嗢姽娃娲媧屲帓徍挖搲攨洼溛漥瓦畖砙穵窊窐窪聉腽膃蛙袜襪譁邷靺韈韎韤鼃"],["bai","伯佰呗唄拜拝挀捭掰摆擺敗柏栢猈白百稗竡粨粺絔薭襬贁败韛"],["gu","估傦僱凅古呱咕唂唃啒嗀嗗嘏固堌夃姑嫴孤家尳崓崮怘愲扢抇故柧梏棝榖榾橭毂汩沽泒淈濲瀔焸牯牿痼皷皼盬瞽硲祻稒穀笟箍箛篐縎罛罟羖股臌苽菇菰蓇薣蛄蛊蛌蠱觚詁诂谷賈贾軱軲轂轱辜酤鈲鈷錮钴锢雇頋顧顾餶馉骨鮕鯝鲴鴣鵠鶻鸪鹄鹘鼓鼔"],["ni","伱伲你倪儗儞児兒匿呢坭埿堄妮妳婗嫟嬺孨孴尼屔屰怩惄愵懝抐抳拟掜擬旎昵晲暱柅棿檷氼沵泥淣溺濔灄狔猊痆眤睨禰秜籾縌聻胒腝腻膩臡苨薿蚭蛪蜺觬誽貎跜輗迡逆郳鈮鉨鑈铌隬霓馜鯢鲵麑齯"],["ban","伴办半坂坢埿姅岅怑扮扳拌搬攽斑斒昄朌板柈湴版班瓣瓪瘢癍秚籓粄絆绊肦舨般蝂螌褩覂跘辦辬鈑鉡钣闆阪靽頒颁魬鳻"],["xu","伵侐俆偦冔勖勗卹叙吁呴喣嘘嘼噓圩垿墟壻姁婿媭嬃幁序徐怴恤惐慉戌掝揟敍敘旭旴昫晇暊朂栩楈槒欨欰欻歔歘殈汿沀洫浒淢湑溆滀滸漵潊烅烼煦獝珝珬畜疞盢盨盱眗瞁瞲砉稰稸窢糈絮緒緖緰縃繻續绪续聓聟胥芧蒣蓄蓲蓿蕦藇藚虗虚虛蛡蝑裇訏許訹詡諝諿謣譃许诩谞賉鄦酗醑鉥銊鑐需須頊须顼驉鬚魆魖鱮"],["zhou","伷侜僽冑周呪咒咮啁喌噣嚋妯婤宙州帚徟昼晝晭椆洀洲淍炿烐珘甃疛皱皺盩睭矪碡箒籀籒籕粙粥紂縐繇纣绉翢肘胄舟荮菷葤薵詋詶諏謅譸诌诪賙赒軸輈輖轴辀週郮酎銂霌駎騆驟骤鯞鵃鸼"],["qu","伹佉佢刞劬匤匷区區厺去取呿坥娶屈岖岨岴嶇弆忂怚憈戌戵抾敺斪曲朐欋氍浀淭渠灈焌璖璩癯瞿磲祛竘竬筁籧粬紶組絇翑翵耝胊胠臞苣菃葋蕖蘧蚼蛆蛐蝺螶蟝蠷蠼衐衢袪覰覷覻觑詓詘誳诎趋趍趣趨跔跙躣躯軀軥郥鐻鑺閴闃阒阹駆駈驅驱髷魼鮈鰸鱋鴝鶌鸜鸲麮麯麴麹黢鼁鼩齲龋"],["ci","伺佌佽偨兹刺刾厠呰呲啙垐堲姕嬨嵳差庛廁慈朿枱柌栜栨次此泚濨玆玼珁瓷甆疵皉磁礠祠粢糍絘縒胔茈茦茨茲荠莿萕薋薺蛓螆蠀詞词賜赐趀跐辝辞辤辭鈶雌飺餈骴髊鮆鴜鶿鷀鹚齹"],["beng","伻傰嘣埄埲塴奟崩嵭挷揼泵琣琫甏甭痭祊絣綳繃绷菶蚌跰蹦迸逬錋鏰镚閍鞛"],["ga","伽呷咖嘎嘠噶夹夾尕尜尬旮玍胳軋轧釓錷钆魀"],["tian","佃倎兲唺塡填天娗婖寘屇忝恬悿捵掭搷晪殄沺淟添湉琠瑱璳甛甜田畋畠痶盷睓睼瞋碵磌窴緂胋腆舔舚菾覥觍賟酟鈿銛錟錪钿铦闐阗靔靝靦顚顛餂鷆鷏黇"],["bi","佊佖俾偪匕吡咇哔啚嗶坒堛壀壁夶奰妣妼娝婢嬖屄崥币幣幤庇庳廦弊弻弼彃彼必怭怶愊愎拂敝斃旇朼枈柀柲梐楅榌比毕毖毙毴沘泌湢滗滭潷濞煏熚狴獘獙珌璧畀畁畐畢疕疪痹痺皀皕碧禆秕秘稫笓笔筆筚箅箆篦篳粃粊紴綼縪繴罼翍聛肸胇腷臂舭苾荜荸萆萞蓖蓽蔽薜蘗蜌螕袐裨襅襞襣觱詖诐豍貏貱賁贔贲赑跸踾蹕躃躄辟逼避邲鄙鄨鄪鉍鎞鏎鐴铋閇閈閉閟闬闭陛鞁鞞鞸韠飶饆馝駜驆髀髲魓鮅鮩鰏鲾鴓鵖鶝鷝鷩鸊鼊鼻"],["zhao","佋兆召啁啅嘲垗妱巶找招旐昭曌朝枛棹櫂沼炤照燳爪爫狣瑵皽盄着瞾窼笊箌罩羄肁肇肈菬詔謿诏赵趙釗鉊鍣钊駋鮡鳭鼂鼌"],["shao","佋劭勺卲召哨娋少弰捎旓杓柖梢潲烧焼燒玿睄稍筲紹綤绍艄芍苕莦萔萷蕱蛸袑輎邵鞘韒韶颵髾鮹"],["zuo","佐作侳做凿咗唑嘬坐岝岞左座怍捽撮昨柞柮椊琢祚秨稓笮筰糳繓胙莋葃葄袏諎酢鈼鑿阝阼飵"],["ti","体俶倜偍剃剔厗啼嗁嚏嚔奃姼媂媞屉屜屟崹弚徥徲悌悐惕惖惿戻扌挮掦提揥擿替桋梯楴歒殢洟涕渧漽珶瑅瓋碮磃禔禵稊穉籊綈緹绨缇罤苐荑蕛薙虒蝭蟬衹裼褅褆詆諦謕趧趯踢蹄蹏躍躰軆迏迖逖逷遆醍銻鍗鐟锑題题騠骵體髢髰鬀鬄鮧鮷鯷鳀鴺鵜鶗鶙鷈鷉鷤鹈"],["zhan","佔偡占噡嫸展崭嵁嶃嶄嶘嶦怗惉战戰拃搌斩斬旃旜枬栈栴棧榐橏欃毡氈氊沾湛琖皽盏盞瞻碊站粘綻绽菚薝蘸虥虦蛅襢覱詀詹譧譫谵趈跕蹍輚輾轏辗邅醆閚霑顫颤颭飐飦餰饘驏驙魙鱣鳣鸇鹯點黵"],["he","何佫劾合吓呵咊和哬啝喝嗃嗬嚇垎壑姀寉峆惒愒抲挌敆曷柇核楁欱毼河涸渮湼澕焃煂熆熇燺爀犵狢癋皬盇盉盍盒碋礉禾秴篕籺紇纥翮翯荷菏萂螛蠚袔褐覈訶訸詥謞诃貈貉賀贺赫轄辖郃鉌鑉閡閤闔阂阖隺鞨頜颌餄餲饸魺鲄鶡鶮鶴鸖鹖鹤麧齃齕龁龢"],["she","佘厍厙奓奢射弽慑慴懾折抴拾挕捨揲摄摵攝檨欇歙涉涻渉滠灄猞畬畲磼社舌舍舎蔎虵蛇蛥蠂設设賒賖赊赦輋闍阇鞨韘騇麝"],["gou","佝傋冓勾句坸垢够夠姤媾岣彀抅搆撀构枸構沟溝煹狗玽笱篝簼緱缑耇耈耉芶苟茩蚼袧褠覯觏訽詬诟豿購购軥遘鈎鉤钩雊鞲韝"],["ning","佞侫倿儜凝咛嚀嬣宁寍寕寗寜寧拧擰柠橣檸泞澝濘狞獰甯矃聍聹苧薴鑏鬡鬤鸋"],["yong","佣俑傛傭勇勈咏喁嗈噰埇塎墉壅嫞嵱庸廱彮恿悀惥愑愹慂慵拥揘擁栐槦永泳涌湧滽澭灉牅用甬痈癕癰砽硧禜筩臃苚蒏蛹詠踊踴邕郺鄘醟銿鏞镛雍雝顒颙饔鯒鰫鱅鲬鳙鷛"],["ka","佧卡呿咔咖咯哢喀胩衉鉲"],["bao","佨保儤刨剝剥勹勽包堡堢報媬孢宀宝宲寚寳寶忁怉报抱暴曓曝枹瀑炮煲爆珤窇笣緥胞苞菢葆蕔薄藵虣蚫袌裦褒褓襃豹賲趵鉋鑤铇闁雹靌靤飹飽饱駂骲髱鮑鲍鳵鴇鸨齙龅"],["huai","佪划咶坏壞徊怀懐懷槐櫰淮瀤耲蘹蘾褢褱踝"],["lao","佬僗劳労勞咾哰唠嗠嘮姥嫪崂嶗恅憥憦捞撈朥栳橑橯浶涝潦澇烙牢狫珯痨癆硓磱窂簩粩絡络老耂耢耮荖落蛯蟧躼軂轑酪醪銠鐒铑铹顟髝鮱"],["e","佮俄偔僫匎卾厄吪呃呝咢咹哑哦唖啈啞噁噩囮垩垭埡堊堨堮妸妿姶娥娾娿婀屙屵岋峉峨峩崿廅恶悪惡愕戹扼搕搤搹擜敋枙椏櫮歞歺涐湂珴琧皒睋砈砐砨砵硆磀腭苊莪萼蕚蘁蚅蛾蝁覨訛詻誐諤譌讍讹谔豟軛軶轭迗遌遏遻鄂鈋鈪鋨鍔鑩锇锷閜閼阏阨阸阿頞頟額顎颚额餓餩饿騀魤魥鰐鰪鱷鳄鴳鵝鵞鶚鹅鹗齃齶齾"],["ei","佮俄偔僫匎卾厄吪呃呝咢咹哑哦唖啈啞噁噩囮垩垭埡堊堨堮妸妿姶娥娾娿婀屙屵岋峉峨峩崿廅恶悪惡愕戹扼搕搤搹擜敋枙椏櫮歞歺涐湂珴琧皒睋砈砐砨砵硆磀腭苊莪萼蕚蘁蚅蛾蝁覨訛詻誐諤譌讍讹谔豟軛軶轭迗遌遏遻鄂鈋鈪鋨鍔鑩锇锷閜閼阏阨阸阿頞頟額顎颚额餓餩饿騀魤魥鰐鰪鱷鳄鴳鵝鵞鶚鹅鹗齃齶齾"],["ming","佲冥凕名命姳嫇慏明暝朙榠洺溟猽眀眳瞑茗蓂螟覭詺鄍酩銘铭鳴鸣"],["hen","佷很恨拫狠痕詪鞎"],["quan","佺全券劝勧勸啳圈圏埢奍姾婘孉峑巏弮恮悛惓拳搼权棬権權汱泉洤湶灥烇牶牷犈犬狋瑔甽畎痊矔硂筌絟綣縓绻腃荃葲虇蜷蠸觠詮诠跧踡輇辁酄醛銓鐉铨闎韏顴颧駩騡鬈鰁鳈齤"],["tiao","佻儵咷嬥宨岧岹庣恌挑斢旫晀朓条條樤眺祒祧窕窱笤粜糶絩聎脁艞芀苕萔蓚蓧蓨蜩螩覜誂調调趒跳迢銚鋚鎥鞗頫髫鯈鰷鲦齠龆"],["xing","侀倖兴刑坙型垶塂姓娙婞嫈嬹巠幸形性悻惺擤星曐杏洐涬滎煋熒狌猩瑆皨省睲硎箵篂緈腥臖興荇荥莕蛵行觪觲謃邢醒鈃鉶鋞钘铏陉陘餳饧騂骍鮏鯹"],["kan","侃偘冚凵刊勘坎埳堪堿塪墈崁嵁惂戡栞槛檻欿歁看瞰矙砍磡竷莰衎輡輱轁轗闞阚顑龕龛"],["lai","來俫倈勑唻婡崃崍庲徕徠攋来梾棶櫴涞淶濑瀨瀬猍琜癞癩睐睞筙箂籁籟莱萊藾襰誺賚賴赉赖逨郲錸铼頼顂騋鯠鵣鶆麳"],["chi","侈侙俿傺剟勅勑匙卙卶叱叺吃呎呬哆哧啻喫嗤噄坘坻垑墀妛媸尺岻弛彨彲彳徲恜恥慗慸憏懘扡抶拸持捇摛摴攡敕斥杘柅樆欼歭殦池沶泜湁漦灻炽烾熾狋瓻痓痴痸瘈瘛癡眙眵瞝祇竾笞筂箈箎篪粚糦絺翄翅翤翨耛耻肔胣胵脪腟茌荎蚇蚩蚳蝭螭袲袳裭褫訵誀誃誺謘謻豉貾赤赿趍趐趩跅跮踟踶軧迟迡迣遅遟遫遲邌郗鉓鉹銐鍉雴飭饎饬馳騺驰魑鳷鴟鵄鵣鶒鷘鸱麶黐齒齝齿"],["kua","侉咵垮夸姱恗挎晇絓胯舿誇跨銙顝骻"],["guang","侊俇僙光咣垙姯广廣挄撗桄櫎洸灮炗炚炛烡犷獷珖硄胱臦臩茪趪輄迋逛銧黆"],["mi","侎冞冪劘咪哋嘧塓孊宓宻密尒尓峚幂幎幦弥弭彌戂摵擟攠敉榓樒檷櫁汨沕沵泌洣淧渳滵漞濔濗瀰灖熐爢爾猕獼瓕眫眯眽瞇瞴祕祢禰秘穈簚米粎糜糸縻羃羋脒芈葞蒾蓂蔝蔤藌蘼蜜覓覔覛觅詸謎謐谜谧迷醚醾醿釄銤鑖镾靡鸍麊麋麛鼏"],["an","侒俺儑厂厈咹唵啽垵垾埯堓婩媕安屽岸峖广庵廣按揞晻暗案桉氨洝犴痷盦盫碪罯胺腤荌菴萻葊蓭裺誝諳谙豻貋銨錌铵闇隌鞌鞍韽頇頞馣鮟鵪鶕鹌黯"],["lu","侓僇六剹勎勠卢卤嗠噜嚕嚧圥坴垆塶塷壚娽峍庐廘廬彔录戮挔捛掳摝撸擄擼攄攎枦栌椂樐樚橹櫓櫨氇氌泸淕淥渌滷漉潞澛瀂瀘炉熝爐獹玈琭璐璷瓐甪盝盧睩矑硉硵碌磠祿禄稑穋箓簏簬簵簶籙籚粶綠緑纑绿罏翏胪膔膚膟臚舮舻艣艪艫芦菉蓼蓾蔍蕗蘆虂虏虜螰蠦觮觻謢賂赂趢路踛蹗輅轆轤轳辂辘逯鄜醁鈩錄録錴鏀鏕鏴鐪鑥鑪镥陆陸露顱颅騄騼髗魯魲鯥鱳鱸鲁鲈鴼鵦鵱鷺鸕鸬鹭鹵鹿麓黸"],["mou","侔劺呣哞堥恈敄某桙洠牟眸瞴繆缪蛑蟱謀谋踎鉾鍪鞪鴾麰"],["gong","供兣公共功匑匔厷唝嗊塨宫宮工巩幊廾弓恭愩慐拱拲攻杛栱汞渱熕珙碽篢糼紅红羾肱蚣觥觵貢贑贛贡躬躳輁銾鞏髸魟龏龔龚"],["cun","侟刌吋墫存寸忖拵村洊澊皴竴籿膥踆蹲邨"],["lv","侣侶偻僂儢勴卛吕呂哷垏寠寽屡屢履嵂律慮慺捋旅曥梠榈櫖櫚氀氯滤濾焒爈率祣稆穞穭箻絽綠緑縷繂绿缕膂膐膢葎蔞藘虑褛褸軁郘鋁鑢铝閭闾馿驢驴鷜"],["zhen","侦侲偵圳塦姫嫃寊屒帪弫抮挋振揕搸敶斟旽昣朕朾枕枮栕栚桢桭椹楨榐榛槇樼殝沴浈湞溱潧澵獉珍珎瑧甄畛疹眕眞真眹砧碪祯禎禛稹竧箴籈紖紾絼縝縥纼缜聄胗臻葴蒖蓁薽蜄袗裖覙診誫謓诊貞賑贞赈趂軫轃轸辴迧遉酖酙針鉁鋴錱鍖鍼鎭鎮针镇阵陣陳震靕駗鬒鱵鴆鸩黮黰鼑"],["ce","侧側冊册厕厠墄廁恻惻憡拺敇测測畟笧策筞筴箣簎粣荝萗萴蓛齰"],["chai","侪儕喍囆差扠拆柴犲疀瘥祡茝虿蠆袃訍豺釵钗齜"],["nong","侬儂农哝噥弄挊挵檂欁浓濃燶癑禯秾穠脓膿莀蕽襛農辳醲齈"],["hou","侯候厚后吼吽呴喉垕堠帿後洉犼猴瘊睺矦篌糇翭翵腄葔詬豞逅郈鄇銗鍭餱骺鮜鯸鱟鲎鲘齁"],["jiong","侰僒冋冏囧坰埛宭扃昋泂浻澃炅炯烱煚煛熲燑燛窘絅綗臦臩蘏蘔褧迥逈銄顈颎駉駫鼏"],["dou","侸兜兠凟剅吺唗抖斗斣枓梪橷毭浢瀆痘瞗窦竇篼脰荳蔸蚪讀读豆逗郖都酘鈄鋀钭閗闘阧陡餖饾鬥鬦鬪鬬鬭"],["tui","侻俀僓墤娧尵忒推橔焞煺穨聉脮腿蓷藬蘈蛻蜕螁褪讉蹆蹪退隤頹頺頽颓駾騩骽魋"],["nan","侽南喃囡妠娚婻嫨戁抩揇攤暔枏枬柟楠湳煵男畘腩莮萳蝻諵赧难難"],["xiao","侾俲傚削効呺咲哓哮啸嗃嘋嘐嘨嘯嘵嚣嚻囂婋孝宯宵小崤庨彇恔憢揱撓撨效敩斅斆晓暁曉枭枵校梟橚櫹歊歒歗殽毊洨消涍淆漻潇澩瀟灱灲烋焇熇熽燆燺猇獟獢痚痟皛皢睄硝硣穘窙笑筱筿箫篠簘簫綃绡翛肖脩膮莦萧萷蕭薂藃虈虓蛸蟂蟏蟰蠨訤詨誟誵謏謞謼譊踃轇逍郩銷销霄颵驍骁髇髐魈鴞鴵鵁鷍鷕鸮"],["pian","便偏囨媥扁楄楩片犏猵璸甂篇緶缏翩胼腁覑諚諞谝貵賆跰蹁辯鍂駢騈騗騙骈骗骿鶣"],["bian","便匾卞变変弁徧忭惼扁抃揙昪汳汴煸牑猵獱玣疺砭碥稨窆笾箯籩糄編緶缏编臱艑苄萹藊蝙褊覍覵變豍貶贬辡辧辨辩辫辮辯边遍邉邊邲釆鍽閞鞕鞭頨鯾鯿鳊鴘"],["cu","促卆卒噈娕娖媨徂憱捽殂猝瘄瘯簇粗縬脨蔍蔖蔟觕誎趗趥趨踀踓踤踧蹙蹴蹵酢醋錯顣麁麄麆麤鼀"],["ku","俈刳哭喾嚳圐堀崫库庫扝捁搰朏枯桍楛焅狜瘔矻硞秙窋窟絝绔胐苦袴裤褲趶跍郀酷骷鮬齁"],["jun","俊儁军君呁均埈姰寯峻懏抣捃攈攟晙桾棞汮浚濬焌燇狻珺畯皲皸皹碅竣筠箘箟莙菌葰蔨蚐蜠袀覠軍郡鈞銁銞鋆鍕钧陖隽雋餕馂駿骏鮶鲪鵔鵕鵘麇麏麕龜龟"],["lang","俍勆哴唥啷埌塱嫏崀廊悢斏朖朗朤桹榔樃欴浪烺狼琅瑯硠稂筤脼艆莨蒗蓈蓢蜋螂誏躴郎郒郞鋃鎯锒閬阆駺"],["hun","俒倱圂堚婚婫忶惛惽慁掍揮昏昬梡梱棔殙浑涽混渾湣溷焄焝珲琿眃睧睯緄繉荤葷蔒觨諢诨轋閽阍顐餛餫馄魂鼲"],["ying","俓偀僌啨嘤噟嚶塋夃婴媖媵嫈嬰嬴孆孾嵤巆巊应廮影應摬撄攍攖旲映暎朠桯梬楹樱櫻櫿泂浧渶溁溋滎滢潁潆濙濚濴瀅瀛瀠瀯瀴灜焽煐熒營瑛瑩璎瓔甇甖瘿癭盁盈矨硬碤礯穎籝籯緓縈纓绬缨罂罃罌膡膺英茔荥荧莹莺萤营萦萾蓥藀蘡蝇蝧螢蠅蠳褮覮謍譍譻賏贏赢迎郢鍈鎣鐛鑍锳霙鞕韹韺頴颍颕颖鱦鶧鶯鷪鷹鸎鸚鹦鹰"],["su","俗傃僳卹嗉囌埣塐塑夙嫊宿愫愬憟梀棴榡樎樕橚櫯殐泝洬涑溯溸潚潥玊珟璛甦碿稣穌窣簌粛粟素縤縮缩肃肅膆苏莤蔌藗蘇蘓觫訴謖诉谡趚蹜速遡遬酥鋉餗驌骕鯂鱐鷫鹔"],["lia","俩倆"],["pai","俳呱哌徘拍排棑派渒湃牌犤猅箄簰簲蒎輫迫鎃"],["biao","俵儦墂婊幖彪摽杓标標檦淲滮瀌灬熛爂猋瘭磦穮脿膔膘臕蔈藨表裱褾諘謤贆錶鏢鑣镖镳颮颷飆飇飈飊飑飙飚驃驫骉骠髟鰾鳔麃"],["fei","俷剕匪厞吠啡墢奜妃婓婔屝废廢悱扉斐昲暃曊朏杮柹棐榧橃櫠沸淝渄濷狒猆疿痱癈笰篚紼緋绯翡肥肺胇胐腓芾菲萉蕜蕟蕡蜚蜰蟦裵裶襏誹诽費费鐨镄陫霏靅非靟飛飝飞餥馡騑騛髴鯡鲱鼣鼥"],["bei","俻倍偝偹備僃北卑呗唄垻备孛悖悲惫愂憊揹昁杮杯柸桮梖棑椑焙牬犕狈狽珼琲盃碑碚禙箄糒背臂苝萯蓓藣蛽被褙襬誖貝贝軰輩辈邶鄁鉳鋇鐴鐾钡陂鞁鞴韝骳鵯鹎"],["zong","倊倧偬傯堫宗嵏嵕嵸总惣惾捴揔搃摠昮朡枞棕椶樅潨熜熧燪猔猣疭瘲碂磫稯粽糉綜緃総緫緵縂縦縱總繌纵综翪腙艐葼蓗蓯蝬豵踨踪蹤錝鍐鍯鏓鑁騌騣骔鬃鬉鬷鯮鯼"],["dao","倒儔刀到叨噵壔导導岛島嶋嶌嶹帱幬忉悼捣捯搗擣朷檤氘焘燾瓙盗盜祷禂禱稲稻箌絩纛翢翿舠艔菿虭衜衟裯蹈軇道釖陦隝隯魛鱽"],["tan","倓傝僋叹啴嗿嘆嘽嘾坍坛坦埮墰墵壇壜婒弹彈忐怹惔憛憳憻探摊撢擹攤昙暺曇榃橝檀歎毯湠滩漢潬潭澹灘炭璮痑痰瘫癱碳緂繵罈罎舑舕菼藫袒襢覃談譚譠谈谭貚貪賧贪赕郯醈醓醰鉭錟鐔钽锬镡顃餤鷤"],["chui","倕吹圌垂埀捶搥桘棰椎槌炊磓箠腄菙錘鎚锤陲顀鬌龡"],["zhui","倕坠墜娷惴撱椎甀畷硾礈笍箠綴縋缀缒腏膇諈贅赘轛追醀醊錐錣鑆锥隊隹餟騅骓魋鵻"],["peng","倗剻匉嘭堋塜塳弸彭怦恲憉抨挷捧掽搒摓朋梈棚椖椪槰樥泙淎淜漨漰澎烹熢痭皏砰硑硼碰磞稝竼篣篷纄胓膨芃莑蓬蘕蟚蟛踫軯輣迸逬錋鑝閛韸韼駍騯髼鬅鬔鵬鹏"],["kong","倥埪孔崆恐悾控椌涳矼硿空箜羫躻錓鞚鵼"],["juan","倦劵勌勬卷呟圈圏埍埢奆奍姢娟巻帣弮悁惓慻捐捲朘桊棬涓淃焆狷獧瓹眷睊睠絭絹縳绢罥羂脧腃臇菤萒蔨蠲裐襈讂鄄鋑鋗錈鎸鐫锩镌隽雋鞙韏飬餋鵍鵑鹃"],["luo","倮儸儽剆啰囉峈捋捰摞攞攭曪椤欏欙泺洛洜漯濼烙爍犖猡玀珞瘰癳皪砢硌硦礫笿箩籮絡纙络罗羅脶腡臝茖荦萝落蓏蘿蛒蜗蝸螺蠃裸覶覼跞躒躶逻邏鉻鎯鏍鑼锣镙雒頱饠駱騾驘骆骡鮥鵅鸁"],["song","倯傱凇娀宋崧嵩嵷庺忪怂悚愡愯慫憁憽捒摗松枀柗梥棇楤檧淞漎濍硹竦耸聳菘蘴蜙訟誦讼诵送鎹頌颂餸駷鬆"],["leng","倰冷堎塄愣棱楞睖碐稜薐踜輘"],["ben","倴喯坌夯奔奙捹撪本桳楍泍渀炃燌犇獖畚笨翉苯蟦賁贲輽逩錛鐼锛"],["cai","倸偲啋埰婇寀彩才採揌材棌毝猜睬綵縩纔菜蔡裁財财跴踩采"],["sha","倽傻儍刹剎厦唦唼啑啥喢嗄帹廈挱挲摋杀杉桬榝樧歃殺沙濈煞猀痧砂硰箑粆紗繺纱翜翣莎菨萐蔱裟鎩铩閯閷霅霎魦鯊鯋鲨"],["ruan","偄媆愞朊檽燸瑌瓀碝礝緛耎腝蝡軟輭软阮"],["chun","偆僢唇堾媋惷旾春暙杶椿槆橁櫄浱淳湻滣漘犉瑃睶箺純纯脣芚莼萅萶蒓蓴蝽蠢賰踳輴醇醕錞陙鯙鰆鶉鶞鹑"],["ruo","偌叒婼弱楉渃焫爇箬篛若蒻鄀鰙鰯鶸"],["dang","偒儅党凼噹圵垱壋婸宕崵嵣当愓挡擋攩档檔欓氹潒澢灙燙珰璗璫瓽當盪瞊砀碭礑筜簜簹艡荡菪蕩蘯蟷裆襠譡讜谠趤逿鐺铛闣雼黨"],["huang","偟兤凰喤堭塃墴奛媓宺崲巟幌徨怳恍惶愰慌揘晃晄曂朚楻榥櫎汻洸湟滉潢炾煌熀熿獚瑝璜癀皇皝皩磺穔篁簧肓艎荒葟蝗蟥衁詤諻謊谎趪遑鍠鎤鐄锽隍韹餭騜鰉鱑鳇鷬黃黄"],["duan","偳剬塅媏断斷椴段毈煅瑖短碫端篅簖籪緞縀缎耑腶葮褍躖鍛鍴锻"],["ou","偶区區吘吽呕嘔塸怄慪敺櫙欧歐殴毆沤漚澫熰瓯甌筽耦腢膒蓲蕅藕藲謳讴醧鏂鴎鷗鸥齵"],["zan","偺儧儹兂咱喒噆囋寁拶揝撍攒攢昝暂暫桚濽灒瓉瓒瓚禶穳篸簪簮糌襸讃讚賛贊赞趱趲蹔鄼酂酇錾鏨鏩鐕鐟饡"],["za","偺匝咂咋咱喒噈囋囐帀扎拶杂桚沞沯砸磼紥紮臜臢襍迊鉔雑雜雥韴魳"],["lou","偻僂喽嘍塿娄婁屚嵝嶁廔慺搂摟楼樓溇漊漏熡甊瘘瘺瘻瞜窭窶篓簍耧耬膢艛蒌蔞蝼螻謱軁遱鏤镂陋露鞻髅髏"],["sou","傁凁叜叟嗖嗽嗾廀廋捜搜摉摗擞擻棷櫢欶溲獀瘶瞍籔艘蒐蓃薮藪螋鄋醙鎪鏉锼颼颾飕餿馊騪"],["yuan","傆元円冤剈原厡厵员員喛噮囦园圆圎園圓圜垣垸塬夗妧妴媛媴嫄嫚嬽寃弲怨悁惌愿掾援杬棩楥榞榬橼櫞沅涴淵渁渆渊渕湲源溒灁爰猨猿獂瑗盶眢禐笎箢緣縁缘羱肙芫苑茒葾蒝蒬薗薳蚖蜎蜵蝝蝯螈衏袁裫裷褑褤謜貟贠轅辕远逺遠邍邧鋺鎱院願駌騵魭鳶鴛鵷鶢鶰鸢鸳鹓黿鼋鼘鼝"],["rong","傇傛冗坈媶嫆嬫宂容峵嵘嵤嶸戎搈搑曧榕榮榵毧氄溶瀜烿熔爃狨瑢穁絨縙绒羢肜茙茸荣蓉蝾融螎蠑褣軵鎔镕駥髶"],["bang","傍垹埲塝崗帮幇幚幫徬挷捠搒梆棒棓榜浜濱牓玤硥磅稖紡綁縍绑膀艕蒡蚄蚌蛖蜯謗谤邦邫鎊镑鞤髈"],["hao","傐儫号呺哠嗥嘷噑嚆嚎壕好恏悎昊昦晧暠暤暭曍椃毜毫浩淏滈澔濠灏灝獆獋皓皜皞皡皥秏竓籇翯耗聕茠蒿薃薅薧藃號虠蚝蠔諕譹豪貉郝鄗鎬镐顥颢鰝"],["shan","傓僐儃删刪剡剼单善單嘇埏墠墡姍姗嬗山嶦幓扇挻掞掸掺搧摻撣擅攙敾晱杉柵栅椫樿檆櫼汕潬潸澘灗炶烻煔煽熌狦珊疝痁睒磰禅禪穇笘笧縿繕纔缮羴羶脠膳膻舢芟苫蔪蟮蟺衫襂襳覢訕謆譱讪贍赡赸跚軕邖鄯釤銏鐥钐閃閄闪陕陝顃顫饍騸骟鯅鱓鱔鱣鳝鳣"],["que","傕却卻埆塙墧崅悫愨慤搉敠榷毃炔燩獡瘸皵硞确碏確碻礐礭缺舃蒛蚗趞闋闕阕阙隺雀鵲鹊"],["suo","傞唆唢嗍嗦嗩娑嫅惢所挱挲摍暛桫梭溑犧献獻琐瑣璅睃簑簔索縮缩羧莎莏蓑褨趖鎈鎍鎖鎻鏁锁髿魦鮻"],["bin","傧儐宾彬摈擯斌椕槟檳殡殯汃滨濒濱濵瀕玢瑸璸繽缤膑臏虨訜豩豳賓賔贇赟邠鑌镔霦顮髌髕髩鬂鬓鬢"],["nuo","傩儺喏堧娜嶿愞懦懧挪掿搙搦搻梛榒橠毭稬穤糑糥糯耎諾诺蹃逽郍鍩锘"],["can","傪儏参參叅喰嘇嬠嬱孱嵾惨惭慘慙慚憯掺摲摻朁残殘湌澯灿燦爘璨粲薒蚕蝅蠶蠺謲蹔飡飱餐驂骖鯵鰺鲹黪黲"],["lei","傫儡儽勒厽嘞垒塁壘壨嫘擂攂樏檑櫐櫑欙泪洡涙淚灅瓃畾瘣癗矋磊磥礌礧礨祱禷类累絫縲纇纍纝缧罍羸耒肋腂蔂蕌蕾藟蘱蘲蘽虆蠝誄讄诔轠酹銇錑鐳鑘鑸镭雷靁頛頪類颣鱩鸓鼺"],["chong","傭充冲喠嘃埫宠寵崇崈徸忡憃憧揰摏樁沖浺涌漴爞珫痋祌种緟罿翀舂艟茺虫蝩蟲衝褈蹖蹱重銃铳隀"],["zao","傮凿唕唣喿噪慥早枣栆梍棗澡灶煰燥璅璪皁皂竈簉糟繰缲艁薻藻蚤謲譟趮蹧躁造遭醩鑿"],["cao","傮嘈屮嶆愺慅慒懆撡操曹曺槽漕糙艚艸艹草蓸螬褿鏪騲"],["shuang","傱双塽孀孇慡樉欆泷滝漺瀧爽礵縔艭鏯雙霜騻驦骦鷞鸘鹴"],["ao","傲凹厫嗷嗸嚣嚻囂坳垇墺奡奥奧媪媼嫯岙岰嶅嶴廒慠懊扷抝拗摮擙敖柪梎滶澳熝熬爊獒獓璈磝翱翶翺聱芺蔜蝹螯袄襖謷謸軪遨鏊鏖镺隞驁骜鰲鳌鴢鷔鼇"],["piao","僄剽勡嘌嫖彯徱慓旚朴殍漂犥瓢皫瞟票篻縹缥翲莩蔈薸螵謤醥闝顠飃飄飘驃驫骉骠髟魒"],["man","僈埋墁姏嫚屘幔悗慢慲摱曼槾樠満满滿漫澫澷熳獌睌瞒瞞矕縵缦蔄蔓蛮螨蟃蟎蠻謾谩鄤鏋鏝镘鞔顢颟饅馒鬗鬘鰻鳗"],["lan","僋儖兰厱嚂囒坔壈壏婪嬾孄孏岚嵐幱惏懒懢懶拦揽擥攔攬斓斕暕栏榄欄欖欗浨湅滥漤澜濫瀾灆灠灡烂煉燗燣燷爁爛爤爦璼瓓礷篮籃籣糷繿纜缆罱葻蓝藍蘫蘭褴襕襤襴襽覧覽览譋讕谰躝醂鑭钄镧闌阑韊顲"],["zun","僎僔噂墫尊嶟撙樽繜罇譐踆遵鐏鱒鳟鷷"],["teng","僜儯幐滕漛疼痋籐籘縢腾膯藤虅螣誊謄邆駦騰驣鰧鼟"],["deng","僜凳噔墱嬁嶝戥櫈澂澄灯燈璒登瞪磴竳等簦艠覴豋蹬邓鄧鐙镫隥"],["tie","僣呫帖怗惵聑萜蛈貼贴跕鉄銕鋨鐡鐵铁飻餮驖鴩"],["seng","僧鬙"],["zhuang","僮壮壯壵奘妆妝娤幢庄庒戅戆戇撞桩梉樁湷漴焋状狀獞粧糚莊装裝"],["min","僶冺刡勄呡垊姄岷崏忞怋悯愍慜憫抿捪敃敏敯旻旼暋民泯渂湏湣潣玟珉琘琝瑉痻皿盿砇碈笢簢緍緡缗罠苠蠠賯鈱錉鍲閔閩闵闽鰵鳘鴖黽黾"],["qia","價冾卡圶峠帢恰愘拤掐揢擖楬殎洽矻硈磍葜袷跒酠髂"],["sai","僿嗮嘥噻塞思愢揌毢毸簺腮賽赛顋鰓鳃"],["xuan","儇券吅咺喧塇夐妶媗嫙嬛宣弲怰悬愃愋懁懸揈揎旋昍昡晅暄暅暶梋楥楦檈泫渲漩澴炫烜煊煖狟獧玄玆玹琁琄瑄璇璿痃癣癬眩眴睻矎碹禤箮絃絢縣縼繏绚翧翾萱萲蓒蔙蕿藼蘐蜁蜎蝖蠉衒袨諠諼譞谖贙軒轋轩选選還鉉鋗鍹鏇鐶铉镟镮鞙颴駨駽"],["tai","儓冭台呔咍囼坮太夳奤嬯孡忕忲态態抬擡斄旲枱檯汰泰溙漦炱炲燤珆箈籉肽胎臺舦苔菭薹跆軚邰酞鈦钛颱駘骀鮐鲐"],["meng","儚冡勐夢夣嫇孟尨幪庬懜懞懵掹擝曚朦梦橗檬氋氓溕濛猛獴瓾甍甿盟瞢矇矒礞艋艨莔萌蒙蕄虻蜢蝱蠓鄳鄸錳锰雺霚霥霿靀顭饛鯍鯭鸏鹲黽鼆"],["qiong","儝卭嬛宆惸憌桏橩焪焭煢熍琁琼璚瓊瓗睘瞏穷穹窮竆笻筇舼茕藑藭蛩蛬赹跫邛銎"],["lie","儠冽列劣劽咧哷埒埓奊姴峢巁巤忚挒挘捩擸棙櫑毟洌浖烈烮煭燤爄爉犣猎猟獵睙綟聗脟茢蛚裂趔躐迾颲鬛鬣鮤鱲鴷"],["la","儠剌啦喇嚹垃拉揦揧搚摺擸攋旯柆楋櫴溂爉瓎瘌癞癩砬磖翋腊臈臘菈落藞蜡蝋蝲蠟辢辣邋鑞镴鞡鬎鯻鱲"],["long","儱咙哢嚨垄垅壟壠寵屸嶐巃巄弄徿拢攏昽曨朧栊梇槞櫳泷湰滝漋瀧爖珑瓏癃眬矓砻硦礱礲窿竉竜笼篭籠聋聾胧茏蕯蘢蠪蠬衖襱谾豅贚躘鏧鑨陇隆隴霳靇驡鸗龍龒龓龙"],["rang","儴勷嚷壌壤孃懹攘瀼爙獽瓤禳穣穰纕蘘蠰譲讓让躟鑲镶鬤"],["xiong","兄兇凶匂匈哅忷恟汹洶熊胷胸芎訩詾讻賯赨雄"],["dui","兊兌兑垖埻堆塠奪对對嵟怼憝憞懟搥敦杸濧濻瀢瀩痽碓磓祋綐薱譈譵錞鎚鐓鐜镦队陮隊頧鴭"],["ke","克兙兛兞兡刻剋勀勊匼可呵咳嗑坷堁壳娔客尅屙岢峇嵑嵙嶱恪悈愙揢搕敤柯棵榼樖歁殻殼毼氪渴溘炣牁犐珂疴痾瞌砢硞碦磆磕礊礚科稞窠窼緙缂翗胢苛萪薖蚵蝌袔課课趷軻轲醘鈳錁錒钶锞頦顆颏颗騍骒髁"],["tu","兎兔冖凃凸吐唋啚図图圖圗土圡堍堗塗宊屠峹嵞嶀庩廜徒怢悇捈捸揬摕梌汢涂涋湥潳瑹痜瘏禿秃稌突筡腯荼莵菟葖蒤趃跿迌途酴釷鈯鋵鍎钍馟駼鵌鵚鵵鶟鷋鷵鼵"],["nei","內内哪娞氝浽脮腇那錗餒餧馁鮾鯘"],["nen","內内媆嫩嫰恁氝腝那錗"],["liu","六刘劉嚠塯媹嬼嵧廇懰斿旈旒柳栁桞桺榴橊橮沠流浏溜澑瀏熘熮珋琉瑠瑬璢畄留畱疁瘤癅硫碌磂磟綹绺罶羀翏蒥蓅藰蟉裗蹓遛鋶鎏鎦鏐鐂锍镏镠陆陸雡霤飀飂飅飗餾馏駠駵騮驑骝鬸鰡鶹鷚鹠鹨麍"],["shou","兽収受售垨壽夀守寿手授收敊涭熟狩獸痩瘦綬绶膄艏醻鏉首"],["mao","冃冇冐冒卯堥夘媢峁嵍帽愗懋戼旄昴暓枆楙毛毣毷氂泖渵牦犛猫瑁皃眊瞀矛秏笷緢罞耄芼茂茅茆萺蓩蝐蝥蟊袤覒貌貓貿贸軞鄚鄮酕鉚鉾錨铆锚霿髦髳鶜"],["ran","冄冉呥嘫姌媣染柟橪然熯燃珃繎肰舑苒蚦蚺衻袇袡蹨髥髯"],["gang","冈冮刚剛堈堽岗岡崗戅戆戇扛掆杠棡槓港溝焵焹牨犅犺疘矼碙筻綱纲缸罁罓罡肛釭鋼鎠钢阬頏颃"],["gua","冎刮剐剮劀卦叧呱啩坬寡括挂掛栝歄焻煱瓜絓緺罣罫胍苽褂詿諣诖趏踻銛銽铦颳騧鴰鸹"],["kou","冦剾劶口叩宼寇彄怐扣抠摳敂滱眍瞉瞘窛竘筘簆芤蔲蔻釦鷇"],["mei","凂呅坆堳塺妹媄媒媚媺嬍寐嵄嵋徾抺挴攗昧枚栂梅楣楳槑櫗毎每氼沒没沬浼渼湄湈溦煝煤燘猸玫珻瑂痗眉眊眛睂睸矀祙禖篃糜美羙脄脢腜苺莓葿蘪蝞袂謎谜跊郿酶鋂鎂鎇镁镅霉韎鬽魅鶥鹛黣黴"],["zhun","准凖啍圫埻宒屯忳湻準稕窀純綧肫衠訰諄谆迍"],["cou","凑楱湊腠輳辏"],["du","凟剢剫匵厾嘟堵妒妬嬻帾度斁晵暏杜椟樚櫝殬殰毒渎渡瀆牍牘犊犢独獨琽瓄皾督睹秺竇笃篤肚芏荰蝳螙蠧蠹裻襡襩覩詫讀讟读豄賭贕赌都醏錖鍍鍺鑟锗镀闍阇陼靯韇韣韥頓顿騳髑黩黷"],["kai","凯凱剀剴勓喫嘅噄垲塏奒嵦开忾恺愒愷愾慨揩暟楷欬濭炌炏烗蒈衉輆鍇鎎鎧鐦铠锎锴開闓闿颽"],["hua","划劃化华吪哗嘩夻姡婳嫿嬅崋搳摦撶杹桦槬樺檴滑澅猾獪璍画畫畵磆粿繣舙花芲華蒍蕐蘤蘳螖觟話諙諣譁譮话豁輠釫鋘錵鏵铧驊骅魤鷨黊"],["bie","別别咇彆徶憋柲瘪癟苾莂虌蛂蟞襒蹩鱉鳖鼈龞"],["pao","刨匏咆嚗垉奅庖抛拋泡炮炰爮犥狍瓟疱皰砲礟礮穮窌脬萢藨袌袍謈跑軳鉋铇鞄颮麃麅麭"],["shua","刷唰耍誜选選"],["cuo","剉剒厝夎嵯嵳挫措搓撮棤澨瑳痤瘥睉矬磋縒脞莝莡蒫蓌蔖虘襊蹉躦逪遳鄼酂酇醝銼錯锉错髊鹺鹾齹"],["pou","剖吥咅哣垺娝婄抔捊掊棓犃箁裒襃郶頮"],["lue","剠圙寽掠擽略畧稤詻鋝鋢锊"],["lve","剠圙寽掠擽略畧稤詻鋝鋢锊"],["tuan","剬剸团団圕團塼墥嫥彖慱抟摶槫檲湍湪漙煓猯畽疃篿糰蓴褍褖貒鏄鱄鶉鷒鷻"],["zuan","劗揝攥欑篹籫繤纂纉纘缵賺赚躜躦鉆鑚鑽钻"],["keng","劥吭坈坑奟妔挳揁摼牼硁硜硻誙銵鍞鏗铿阬"],["gao","勂吿告夰峼搞暠杲槀槁槔槹橰檺櫜滜澔獔皋皐睪睾祮祰禞稁稾稿筶篙糕縞缟羔羙膏臯菒藁藳誥诰郜鋯鎬锆镐韟餻高髙鷎鷱鼛"],["weng","勜嗡塕奣嵡攚暡滃瓮甕瞈罋翁聬蓊蕹螉鎓鶲鹟齆"],["qiang","勥呛唴嗆嗴墏墙墻嫱嬙将將嶈廧強强彊戕戗戧抢搶摤摪斨枪椌槍樯檣溬漒炝熗牄牆猐獇玱琷瑲繈繦羌羗羟羥羫羻腔艢蔃蔷薔蘠蜣襁謒跄蹌蹡錆鎗鏘鏹锖锵镪鶬鸧"],["nao","匘呶垴堖夒婥嫐孬峱嶩巎怓恼惱憹挠撓淖猱獶獿瑙硇碙碯脑腦臑蛲蝚蟯詉譊鐃铙閙闹鬧"],["zang","匨塟奘弉欌牂羘脏臟臧葬蔵藏賍賘贓贜赃銺駔驡驵髒"],["kei","匼呵嗑坷屙嵙搕柯棵榼樖牁犐珂疴痾瞌砢磕礚科稞窠窼胢苛萪薖蚵蝌趷軻轲醘鈳錒钶頦顆颏颗髁"],["shuai","卛帅帥摔率甩縗缞蟀衰"],["ang","卬岇昂枊盎肮醃醠骯"],["mang","厖吂哤壾娏尨庬忙恾朚杗杧氓汒浝漭牤牻狵甿痝盲盳硥硭笀芒茫茻莽莾蘉蛖蟒蠎邙釯鋩铓駹龍龒"],["zui","厜咀嗺嘴噿嫢嶉嶊嶵晬最朘栬槜槯樶檇檌欈濢璻睟祽稡絊纗罪脧蕞蟕觜辠酔酨酻醉鋷錊"],["rou","厹媃宍揉柔楺渘煣瑈瓇禸粈糅肉腬葇蝚蹂輮鍒鞣騥髳鰇鶔"],["cen","参參岑嵾梣涔硶笒"],["die","叠咥啑喋垤堞峌崼嵽怢恎惵戜挕揲昳曡柣楪槢殜氎泆爹牃牒瓞疉疊眣碟絰绖耊耋胅臷艓苵蜨蝶螲褋褺詄諜谍趃跌跕跮踮蹀蹛迭鐡镻鞢鮙鰈鲽"],["rui","叡壡婑惢枘桵橤汭瑞甤睿緌繠芮苼蕊蕋蕤蘂蘃蚋蜹鈉銳鋭锐"],["po","叵哱嘙坡奤婆尀岥岶巿廹搫攴敀昢朴櫇泊泺泼洦淿湐潑濼烞猼珀皛皤破砶笸粕繁蒪蔢謈迫鄱酦醱釙鉕鏺钋钷陂頗颇馞駊髆魄"],["a","吖呵啊嗄腌錒锕阿"],["tun","吞呑啍噋囤坉屯庉忳旽暾朜氽涒焞畽膯臀臋芚蜳褪豘豚軘霕飩饨魨鲀黗"],["fou","否妚炰缶缹缻芣雬鴀"],["hang","吭夯妔巷斻杭沆笐筕絎绗航苀蚢行貥迒邟頏颃魧"],["shun","吮楯橓眴瞚瞤瞬舜蕣輴順顺鬊"],["ne","呐呢哪抐眲訥讷那"],["guo","呙咼啯嘓囯囶囻国圀國埚堝墎崞帼幗彉彍惈慖掴摑敋果椁楇槨涡淉渦漍濄猓瘑矌簂粿綶聒聝腂腘膕菓蔮虢蜾蝈蟈裹褁輠过過郭鈛鍋鐹锅餜馃馘"],["lo","咯"],["wai","咼喎外夭崴歪瀤竵顡"],["pin","品嚬姘娦嫔嬪拚拼榀汖牝玭琕矉砏礗穦聘薲蘋蠙貧贫頻顰频颦馪驞"],["ha","哈奤妎虾蛤蝦鉿铪"],["nou","哝噥嬬弄搙槈檽獳耨譳鎒鐞"],["yo","哟唷喲嚛育"],["o","哦噢嚄"],["shuo","哾妁搠数數朔槊欶洬烁燿爍獡矟硕碩箾蒴藥說説说鎙鑠铄"],["en","唔嗯奀峎恩摁煾蒽"],["huan","唤喚喛嚾圂圜堚奂奐孉宦寏寰峘嵈巜幻患愌懁懽换換擐攌桓梙槵欢欥歓歡汍洹浣涣渙漶潅澣澴烉焕煥犿狟獾环瑍環瓛痪瘓睆睔瞏瞣糫絙綄緩繯缓缳羦肒荁萈萑蒝藧讙豢豩豲貆貛輐轘还逭還郇酄鍰鐶锾镮闤阛雈雚驩鬟鯇鯶鰀鲩鴅鵍鸛鹮"],["ken","啃垦墾恳懇掯珢硍肎肯肻裉褃豤貇錹齦龈"],["hng","啈堼悙横橫"],["chuai","啜嘬揣搋欼膪踹"],["chuo","啜嚽娕娖婥婼惙戳擉歠涰磭綴綽繛绰缀腏趠踔輟辍辵逴酫鋜錣鏃鑡镞齪齱龊"],["pa","啪妑帊帕怕扒掱杷汃派潖爬琶皅筢耙舥苩葩袙趴跁鈀钯"],["se","啬嗇塞廧懎拺擌栜歮歰洓涩溹澀澁濇瀒琗瑟璱瘷穑穡穯粣繬色譅轖鉍銫鎍鏼铯闟雭飋"],["re","喏惹热熱若"],["pen","喯喷噴歕湓濆瓫盆葐衯"],["sun","喰孙孫损損搎栒榫槂狲猻笋筍箰簨荪蓀蕵薞鎨隼飧飱鶽"],["hei","嗨嘿潶黑黒"],["dia","嗲"],["de","嘚地底得徳德恴悳惪棏淂的脦鍀锝"],["dei","嘚得"],["zhuai","嘬拽捙睉跩轉转顡"],["kuo","噋廓彉彍懖扩拡括挄擴栝桰漷濶煀秳筈萿葀蛞适闊阔霩鞟鞹韕頢髺鬠"],["ceng","噌层層嶒曽曾橧竲蹭驓"],["ca","嚓拆擦攃礤礸"],["zen","囎怎譖譛谮"],["nin","囜恁您"],["kun","困坤堃堒壸壼婫尡崐崑悃捆昆晜梱涃潉焜熴猑琨瑻睏硱祵稇稛綑罤臗菎蜫裈裍裩褌豤貇醌錕锟閫閸阃頑餛騉髠髡髨鯤鲲鵾鶤鹍"],["qun","囷夋宭峮帬歏箘羣群裙裠輑逡麇麏麕"],["ri","囸日氜釰鈤馹驲"],["sao","埽嫂慅懆扫掃搔梢氉溞瘙矂縿繅繰缫缲臊螦鄵鐰颾騒騷骚髞鰠鱢鳋"],["zeng","増增憎曽曾橧熷璔甑矰磳綜縡繒综缯罾譄贈赠鄫鋥锃"],["zou","奏掫揍搊棷棸箃緅芻菆諏诹走赱辵辶邹郰鄒鄹陬騶驺鯫鲰黀齱齺"],["nv","女恧朒沑籹聏衂衄釹钕"],["niu","妞忸怓扭拗杻汼炄牛牜狃紐纽莥鈕钮靵"],["rao","娆嬈扰擾桡橈犪繞绕荛蕘蟯襓遶隢饒饶"],["niang","娘孃酿醸釀"],["shui","娷帨挩捝水氺涗涚睡祱稅税脽裞說説誰说谁閖"],["nue","婩疟瘧硸虐"],["nve","婩疟瘧硸虐"],["niao","嫋嬝嬲尦尿樢溺脲茑茮蔦袅裊褭鳥鸟"],["kuan","宽寛寬梡欵款歀窽窾鑧髋髖"],["cuan","巑撺攅攒攛攢櫕欑殩汆熶爨穳窜竄篡簒菆襸蹿躥鋑鑹镩"],["xiang","乡享亯佭像儴勨勷厢向响啌嚮姠嶑巷庠廂忀想晑曏栙橡欀洋湘潒珦瓖瓨相祥稥箱絴緗纕缃缿羏翔膷芗萫葙薌蘘蚃蟓蠁衖襄襐詳详象跭迒郷鄉鄊鄕銄銗鐌鑲镶閧闀闂降響項项飨餉饗饟饷香驤骧鬨鮝鯗鱌鱶鲞鴹麘"],["te","忑忒慝特犆脦蚮螣蟘貣貸鋱铽"],["tei","忒"],["gun","惃棍棞滚滾琯璭睔睴磙緄緷绲蓘蔉衮袞裷謴輥辊錕鮌鯀鲧"],["zei","戝蠈賊贼鰂鱡鲗"],["den","扥扽"],["zhua","抓挝摣撾檛爪簻膼髽"],["shuan","拴栓槫涮腨閂闩"],["rua","挼"],["shai","攦晒曬筛篩簁簛籭繺色諰酾釃"],["nuan","暖渜湪煖煗餪"],["sen","森椮槮篸襂"],["run","橍润潤閏閠闰"],["chua","欻歘"],["jiang","丬傋僵勥匞匠壃夅奖奨奬姜将將嵹弜弶強强彊摪摾杢桨槳橿櫤殭江洚浆滰漿犟獎畕畺疅疆礓糡糨絳繮绛缰翞耩膙茳葁蒋蔃蔣薑虹螀螿袶講謽讲豇酱醤醬降韁顜鱂鳉"],["suan","狻痠祘笇筭算蒜选選酸"],["neng","竜能"],["gei","給给"],["miu","繆缪謬谬"],["fiao","覅"],["shei","誰谁"],["zhei","这這"],["eng","鞥"],["nun","黁"]]};
},{}],3:[function(require,module,exports){
"use strict";

var pinyinMapping = null;
var dSize = 0, srcChar = null, dstPinyin = null, dstPosition = null;

var initDict = function () {
  var data = require('./dict.js'), item, chars;
  var i, imax, j, jmax;
  dSize = 0;
  srcChar = new Array(data.n);
  dstPinyin = new Array(data.n);
  pinyinMapping = new Array(data.dict.length);
  for (i = 0, imax = data.dict.length; i < imax; ++i) {
    item = data.dict[i];
    chars = item[1];
    pinyinMapping[i] = item[0];
    for (j = 0, jmax = chars.length; j < jmax; ++j) {
      // in this loop we fill two arrays:
      // srcChar = [汉,字,...]  (use char code)
      // dstPinyin = [han,zi,...]  (use pinyinMapping index)
      srcChar[dSize] = chars.charCodeAt(j);
      dstPinyin[dSize] = i;
      dSize++;
    }
  }
}

function quicksort(l, r) {
  var i = l, j = r;
  var tSrc = srcChar[i], tDst = dstPinyin[i];
  while (i < j) {
    while (srcChar[j] > tSrc && i < j) j--;
    if (i < j) {
      srcChar[i] = srcChar[j];
      dstPinyin[i] = dstPinyin[j];
      i++;
    }
    while (srcChar[i] < tSrc && i < j) i++;
    if (i < j) {
      srcChar[j] = srcChar[i];
      dstPinyin[j] = dstPinyin[i];
      j--;
    }
  }
  srcChar[i] = tSrc;
  dstPinyin[i] = tDst;
  i++; j--;
  if (i < r) quicksort(i, r);
  if (l < j) quicksort(l, j);
}

function binarySearch(charCode) {
  var midIdx, mid;
  var l = 0, r = dSize - 1;
  while (l <= r) {
    midIdx = (l + r) >> 1;
    mid = srcChar[midIdx];
    if (charCode < mid) {
      r = midIdx - 1;
    } else if (charCode > mid) {
      l = midIdx + 1;
    } else {
      return midIdx;
    }
  }
  return -1;
}

function mergeData() {
  // before:
  //   srcChar     = [a,b,b,b,c,d,d,d]
  //   dstPinyin   = [3,1,4,8,4,2,1,3]
  //
  // after:
  //   srcChar     = [a,b,c,d]
  //   dstPinyin   = [3,1,4,8,4,2,1,3] (not changed)
  //   dstPosition = [0,1,4,5]

  var lastChar = srcChar[0], lastIdx = 0;
  dstPosition = new Array(dSize);
  dstPosition[0] = 0;

  var i, imax;
  for (i = 1, imax = dSize; i < imax; ++i) {
    if (srcChar[i] !== lastChar) {
      lastIdx++;
      lastChar = srcChar[i];
      srcChar[lastIdx] = lastChar;
      dstPosition[lastIdx] = i;
    }
  }

  // add a boundary for convenience
  lastIdx++;
  srcChar[lastIdx] = 0xFFFFFFFF;
  dstPosition[lastIdx] = i;

  // reduce array size
  dSize = lastIdx + 1;
  srcChar.length = dSize;
  dstPosition.length = dSize;
}

var init = function () {
  // first we make a list of mapping relationship
  initDict();
  // then we sort them in order to use binary search later
  quicksort(0, dSize - 1);
  // finally, we merge heteronyms.
  mergeData();
}

var getPinyin = function (str, options) {
  if (typeof options === 'undefined') {
    options = {};
  }
  var result = new Array(str.length); // TODO: handle char code > 0xFFFF
  var i, imax, j, jmax, k;
  var charCode, idx, iret;
  for (i = 0, imax = str.length; i < imax; ++i) {
    charCode = str.charCodeAt(i);
    if (charCode < 128) {
      result[i] = [str.charAt(i)];
    } else {
      idx = binarySearch(charCode);
      if (idx !== -1) {
        // we have n(n=jmax-j) heteronyms
        j = dstPosition[idx];
        jmax = dstPosition[idx + 1];
        iret = new Array(jmax - j);
        for (k = 0; j < jmax; ++j, ++k) {
          iret[k] = pinyinMapping[dstPinyin[j]];
        }
        result[i] = iret;
      } else {
        if (options.keepUnrecognized) {
          result[i] = [str.charAt(i)];
        } else {
          result[i] = [];
        }
      }
    }
  }
  return result;
};

init();

module.exports = getPinyin;

},{"./dict.js":2}]},{},[1])(1)
});