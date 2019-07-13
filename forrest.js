const express = require('express');
const dyson = require('dyson');
const path = require('path');
var bodyParser = require('body-parser');

const options = {
  configDir: path.join(__dirname, 'mock'),
  quiet: false
};

const port = 8080;

const app = express();
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(bodyParser.json({ type: 'application/csp-report' }));
const configs = dyson.getConfigurations(options);

dyson.registerServices(app, options, configs);

console.log(options);

app.listen(port);

const colors = require('colors');

const forrest =
'                                                                                                                                      ``       ``  `  \n' +
'                                                                                                                                       `    `` `````  \n' +
'                                                                                                                                     ```````````````` \n' +
'                      ```                                                                                                   ``````````````````````````\n' +
'                      ```                  `  ````````          `.--.-:-`          ````                                    ```````````````````````````\n' +
'  ``                 `````                 ```````````        `:/oo+++++//::--...``````                                    ```````````````````````````\n' +
' ```````            ````````              `  ``````````..-:://+osssssssssosoooo+++:`````                                ```````````````````````.```.``\n' +
'       ```````````````````````````` ``   ```````````-///://ossso+ooossssssyyysssssso/.``````    ````````````````````````````````........`.............\n' +
'```````````````````````````````````````````````````/+++ossyso/:/yyso/++ooossyyyyyssss+/-``````````````````````````````````...........--..--.--........\n' +
'``````````````````````````.```````````..`.........++o+oo+/--././y++o/-:/------:/oyyyysoo/```````````````````.``..................`....................\n' +
'...``.`````....................................../os+/+-.-/+:+:/+:-//-+:/++++/o:/syyhysos+..................................```````...``..............\n' +
'..............................----.......--...---ooo::+::::/:/o+os+/:..-:+/+/+o-/yhhhhssoo+-..........................................................\n' +
'-------.---------------.-.-------------------..-.+so-+////-:/:/+oooo+///+ooo+syo:yhhhdysooo+-------.---------.--.....-.-..............................\n' +
'----------::-:--:::-------------------------------oo:+/:///++syhhhhyo:osyssooo+++yhhhdyyssso----------.---.---....-...................................\n' +
'----------::::::::::----------------:-------------:o+ossyyyyyyhhhhs++//yhyhyyhhhhdhhddhhyyys-..................................`.......`....`...`..```\n' +
'----.----------------.-.-.-..-------------.------.-+oyyyyyyhhhhdddhysssyyyhhhhhhddddmmhhhyys-..............---.......-.........-.................-...-\n' +
'........-........--..-.........-.......-..........-+oosyyyyyysyyhhyhhhhhhyyhhhddddmmmmmhyyys-........`............``..``..`..`........................\n' +
'---:-------------------------------------.........++oooooo+++++o+oooooossyyyhhhhhhddddddhyss-.`.``.............`......````````.......`.....```.......-\n' +
'::::--:::--://::-:-::::://:://:/://::-::::--:--.-:////:///++++++++++++++o+o+oossyyyhhhhyhyss:---.--.-..................`..`.``........``.....``.`..`..\n' +
'//::::::/::::///::::::::::-::::::/::::-::-.----::/+osyyhhdddddddhhhyysoooo++++++++++ooosyyys/:---...........................`..................-/-....\n' +
'////////////://///:/::::/::://::/::::::::-/+ooo+shNNhdNNNNNNmNmNNmmmmmmNmmddhhyyysssyhddyo++:---:----::-::----------------------.--...........:hhd:.o:\n' +
'////:/::/://::/:///:///::::/::/::::::::-.---.-./hmNm:ymNNNNNmdhddhdddmNNNNNNNmdhyhyhNMMNmmdy+:.....-----:------:------:-----......----------:-o/:so-s:\n' +
':::-:/:/:::-:/-::://:::::::/-://///::/:---..-:+mmNNm.oydmmmmddhyyshhdddmmdddhhhyssssdNMMMNNmdhs+/--....----:---:::-::-:----..------:::-::-:-::shyy:.++\n' +
':/:::/:///////+:::///////:///:/:-/:::-:-:-:/+smNNNNh`-ohdNmddhyoosyhhhdmmmmhhhyso++oymMMMMMMMNmhs+:-.......-----:--:--:-::-.-::/::/:----:-..-./oy-.-::\n' +
'/+:://:////://:///+/:/::/://://////::-/:/ohyhmNNNNNs`..-ohhhyso+syyyysyhhhhss+++///+sdMMMMMMMMNmmho+:--........--.-:-::.--:--::::-......-...-:oo/./-:o\n' +
':::++://:+///+/////:/+o::/+//:-:::-:-:o+shddmmmmNMMs````-:+o/--ossssssooso+//:////+oodNMMMMMMMMNmmhys++:-.............````.--...........```--+yo--o/:+\n' +
'/::/:-:/+++-://++-:oo/++++//:/+-:/-:/ssydmNmmmNNNMMd```.-:-.``:oossoo+///////::://+osmMMMMMMMMMNNmmdyss+:----.............`..:.---.````````::+h+.:s://\n' +
'//:---:--..```..--.-.-....-.` ```.-//osydmmNNNNNNMMN`...---.``:/++ooo+////+//::://+osNMMMMMMMMMMNNmmhysoo+/----.-::..```..```.``````..````.:-:d+-+y/:/\n' +
'o////://+/:::::/++////+//+-+..:/::/++oyyddmNNNNNMMMN-....--..:////++oo+/+//://////osyNMMNNMMMMMMMNNmddyssoo/::::......-..-...-.````-/-.```-/.:ds:+h++y\n' +
'/+/:.:-----:--:-.//:..+--/-::-///+++oshhdNNNNNMMMMMd/-..--/-+ooyyydhys+//////++++osydNMMNMMMMMMMMNNNmmdhysso//::--....`````.``...```````` `/:/mNy/ysod\n' +
'o+.::....:-.---:-:/-:.`./:::-:://oooshdmmNNNMMMMMMNo::-.-:---:+ysssso/:://///+s+ooyhdNMMMMMMMMMMMMMNmdmdhhysso+/---.```.````.`...`````     `.oNNMm+ooh\n' +
'/-:/./:-//-/+-:/--:--.:/+/-::-::/o++shmmmNNMMMMMMN+:/::.-:oydhshyyhddhso///+++yssshdmNNNMMMMMMMMMMMMNmmmmdhyysoo+::--```````.`````      ```` -NNMNs/+h\n' +
'///+:--///......`.`---:/:-...-::/++++ydmNNMMMMMMm/:/:+/:+hdhyyhyyhddmmmdhs+/oyyyyyhmmNmNNNMMMMMMMMMMMNmmddhhyysys/:-:.``````````   ``````    :NNNNm+hN\n' +
':::--..--:::/.`...:::::::--++///::///ydmNNMMMMMmo/+:/++oshddddmdddddddddmdy+ohdddhddmNNNNNNMMMMMMMMMMMNNmmdhyyysso/:+..````    ```````       sNNmNNNNM\n' +
'/:+/::--:::--.-::/ooo+/:o++:--.-:://oshmNNMMMNNs+o//++sy+hh++/://+++osssymNdymmmmmdmhmNNNNNNNNMMMMMMMMNNNmddhyyso/+/+-.``  ``````````       `hNNmmNNNM\n' +
'-/o+://://+++oosss+/+//++/+:-...://+oydmNMMMmNh++++oosdsoyh++osyyhhyysssydmNmmmNNNmdmhdmNNNNNNMMMMMMMMMNNNmddhysso+//-:..`````````` `````````+dmhdmdNN\n' +
'o/://+///:/+::+o/+:::+++o:--.-://///ohNMMMMmNmy+/++syhdsoyhysyy+hyhoyyyhdmmmNNNmmNNNmmmmNNNNNNMMMMMMMMMMNNNmdhhysoo++/:-.````````````````````.+s-:/+od\n' +
'----/o++//++:..-/++-/+-........-::+ssdNNNMNNmh+/+osyyyhosyhhyssoyhdydhdmmmNmmNNNmmNmNNmNNNNNNNNMMMMMNMMMMMNNmmdddysooo++/-.````````````````........--+\n' +
'....--../+:-.../o+/--:-.``.-.```-:+hdNNmNNmd/:++ossooosssshdssyyhhddmmmNmmmNNmmmmmNNNNNNNNNNNNMMMMMNNNNNMMMMMNNmmhysss++++:-```````````````````````...\n' +
'//---..-+/+sss////+/----.``--.`.-:mmmhmNMMd/--/o+++/+sssssysyhshddmmNNmmmNmmmNNmmmmmNNNNNMNNNNMMNNNNNNNmNNMMMMMMNddhyys++//:-.```.````````````````````\n' +
'yy+-.``....---`.`````....--.---::/mNd+hNNd::-:-://:osyssyssyhdsdmdmmmmmmmmNNmmNNNmddmNNNNNMMMMNNNNNNNNNNNmNMMMMMMNdddhhso++/::-./-````````````````````\n' +
'--..-.````..```` ````..----..-/::/mNmyymy-------::+osyyssyhhdmsymmmmmddmmNNNNNNNNNmmmdmmmNNMMMNNNNNNNNNmmmmmNMMNMMNmdddhyso+oo/:::.```````````````````\n' +
'--::/-..`.::...```..--:/--:-:/:--:hNmyho..://-::::+ooshyyhhhdmyhdmNNmmmmdmmNNNNNNNNNNmddmmmNNNNNmNNNNNNmmmmmmNNNMMMNmmmmmdy+/o+//o-....```````````````\n' +
'...``.:+.`--..`.````.``..//-.-:---oy+//:/:/+::/://sosydhhhhhdddmdmNNNNmmdmmNNNNMNNMNNmmmdddmmmmmmmNdmmmmmmmmmmmNNNNNNmmmmNdyo+++:/:......`````````````\n' +
'://-..--..`....```..`.:..----::-..-:-:/++o/++oo/+syhdhddddhdmmNmmNNMNNNmdmmNNmmNNNNNNNmmmmddNNNNNmmmmmmmmmmmmmmmmmmmmdddddmdyyso//:---.```````````````\n' +
'--....--.....--.::////-...-++:.--::-:oo+s+-yyso+ooyhhhddmdhdmMMmmNNNMmNdmmmmmmdNNNMMNNmNmNNmmNMMNNNNNmmmNmNNNNNNmmmmddhyyyyyyyhhyss-..````````````````\n' +
'.``:/-....-:----:-----...-/--:////:+yo+yo+/dmoosysyhhhddmdddNMNmNNNNNNNdmNmNNNdNNNNMMMNNNNNNNNNNNNNNNNNmNNNNNNNmmddddddhyyysssyyyyh/..````````````````\n' +
'---:/-::-::.--:--....``-::///so///shy/hys/hNmyo+hdhhhdddmdhdNNNNmmNNNNNmmmmNMNmNNNNMMMMNNMNNNNMMNNNNNNNNNNNNNmmmmdddddddhhhsssyhhhdh/..```````````````\n' +
'..---::::-...`...```.-+++oo+oo//+yhhoody++mMmhysymhhhhhhddydmmNNmmNNNdmNNNNNNNNdMMMMMMNMMNMMMNNNNNNNNNNNNNNNmmmmNmdddddhhhdhssyhdddhdy/-.`````````````\n' +
'....-.....`````````:osy+ss++o+/shshh+ddy/hmMdhhssyyssshdhhhmmmNNmmmmmhmmMMNNMNNdNNMMMMMMMMMMMNNNNNNNNNNNNmmNmmmmmmmdddhhhhddyyyhhhdhydh/+:.```````````\n' +
'`````````.`````..`.ddossyo/+o/ymhshysmdoyNhMmhdysoooshdddddmdNNNNdhdmdmNmNNNNNNNNNNMMMMMMMMMMNNNNNNNNNNNNNNmmmmmmNmdhdddhhddhyhhdmddysy/::/-``````````\n' +
'```````.`````....:oNNosyo+++/hmdyshyddy+NmyNNddhyyssyyhddmmNmNNNNdmmmmddNmmmNNNNNNNMMMMNMMMMNNMNMNNMMNNNNNNmmmmmmNNNmdhdhhdddhhdddmdhyooy:.-:-.```````\n' +
'```````````.--..:ysNMso++oo+ymmdhsyhddoyMmyNNddhyhhysddddmdmmNNNNNmNNNmNNmmmNNNNMNNNNMMMMMMMMNNNNNNMMMNNNmNNmmmmmNNmmMmhddddddmNmmmdhhyo+o+:.----.````\n' +
'-/.`````..---..:sdomMyssoooshmddhsyddy+mMmymNmmdhhdhyydmdNdmmmmNNNNmNNNNNNNmNNNMNNNMNMMMMMMNNNNNNNNNMMMNmmmmmmmdmNNmmNNddddddmmNmmNmddhys+/:````.`````\n' +
'yo-```.+s-:..-:+hhmhMdysyoosddddyshdh+sMNmsdNmmddddhhyymNmmdmmmNNmmmNNNMNNNNMNNMMNNMNNMMMMMNNNNNNNNNNMNmmmmmNNmddmmdmMMmddmddmmmmmNmddhhhhs/:.````````\n' +
'`-/:-/sdo-.:oysoyhMhNmyo+++shmmdsyhhs+dMNmyhNmdhhysydyymNNNmmmNNmmNNNMMNNNNNMMNNMMMMMNmNMMNmmNNNNNNNNNNmmdmdmmmmmmmmmMMmdmddmNNmmmNmdddNNNNd//:.``````\n' +
'/oooohmd::oyhdysymNddNyo/s/ohmmdhyhyssmMNmyymmdhhhyhNdhdNMNMNNNNNNNMNNNNNNNNMMNNNMMMMNNNNNmmmmmmNNNNMMNmmmmmmNNmmmmdmMMmmdddmmmmmmmmddmNNNNNo/+h-`````\n';


console.log(forrest.bgYellow.black);

console.log(`Dyson listening at port ${port}`);

