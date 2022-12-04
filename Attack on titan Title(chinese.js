var scriptName = "SkidSenceGetTitle";//Js名字
var scriptVersion = 1145.14;//Js版本
var scriptAuthor = "CC";//Js作者

var Random = Java.type('java.util.Random');
var Display = Java.type('org.lwjgl.opengl.Display')

var Debug = new Debug();
var client;

function Debug() {
	var HM,H,M,S;//新建变量
	var random = new Random();
    var a = random.nextInt(13); //随机数
	//var a = Random //新建变量
    this.getName = function() {
        return "SkidSenceTitle";
    };//功能名字

    this.getDescription = function() {
        return "Opening it to change your title";
    };//热点注释

    this.getCategory = function() {
        return "Misc";
    };//功能位置
    this.onEnable = function() {
		HM = 0;//tick
		H = 0;//小时
		M = 0;//分钟
		S = 0;//秒
    }//打开事件
    this.onUpdate = function() {
		HM += 1;//tick+1
        if (HM == 20){//如果等于20tick则+1 20tick=1秒
			S = S + 1;
			HM = 0;
		}
        if (S == 60){
		    M = M + 1;
			S = 0;
		}
        if (M == 60){
            H = H + 1;
			M = 0;
		}			
		switch (a){
			case 1:
                Display.setTitle("SKIDSence 什么都无法舍弃的人，什么都无法改变"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;
            case 2:
                Display.setTitle("SKIDSence 战斗吧！战斗吧！输了就得死，但赢了就能活下去！"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;
            case 3:
                Display.setTitle("SKIDSence 艾伦，有你在的地方，我无所不能"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 4:
                Display.setTitle("SKIDSence 这个世界，怎么突然就变成地狱了呢 不，那只是我们的错觉罢了，这个世界本来一直就是地狱"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 5:
                Display.setTitle("SKIDSence 失去一个人最快的方法就是靠的太近"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 6:
                Display.setTitle("SKIDSence 大概人们不找个东西沉醉就活不下去吧，大家，都是某些事物的奴隶"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 7:
                Display.setTitle("SKIDSence 我们将在这里死去！将意义传递给下一位生者！这就是，对抗这个残酷世界的唯一办法！"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 8:
                Display.setTitle("SKIDSence 士兵们，愤怒吧！士兵们，咆哮吧！士兵们，战斗吧！"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 9:
                Display.setTitle("SKIDSence 艾伦，我再也不会放弃了，否则连思念你都做不到了"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 10:
                Display.setTitle("SKIDSence 也许艾伦会说，那只是虚伪的和平罢了，但是我喜欢那段平常的日子"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 11:
                Display.setTitle("SKIDSence 我一直以来都不明白，为什么不管做了多么明智合理的选择，在结果出来之前，谁都无法知道它的对错"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;	
            case 12:
                Display.setTitle("SKIDSence 自己来选择，不会后悔的道路"+ ' 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;					
            default:
                Display.setTitle('SKIDSence 我测你们码 buySKIDSence at cnmnmsl.net 你已经游玩了: '+ H  +'时'  +M +'分'+S+'秒');
                break;
        }
	}//打开中事件
    this.onDisable = function () {	
	}//关闭事件
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(Debug);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}