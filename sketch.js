var cash1 = 0;
var multi = 1;
var rebirth = 1;
var ultrarebirth = 1;
var prestige = 0;
var Cash;
var money;
var Multi;
var multiplier;
var Rebirth;
var reb;
var Ultrarebirth;
var ureb;
var Prestige;
var pres;
function setup(){
  canvas = createCanvas(displayWidth-300,displayHeight-250);
database = firebase.database();
}
function draw() {
//Cash.getCash();
money=Cash.getCash();
multiplier=Multi.getMulti();
reb=Rebirth.getRebirth();
ureb=Ultrarebirth.getUltrarebirth();
pres=Prestige.getPrestige();
console.log(money);
console.log(multiplier);
console.log(reb);
console.log(ureb);
console.log(pres);
 background("white");
if(keyDown("RIGHT_ARROW")){
  cash1 = cash1+multi*2;
}
if(cash1>=50 && keyWentDown("z")){
  multi = multi+ultrarebirth*(rebirth*1+prestige*(.5));
  cash1 = 0;
}
if(cash1>=900 && keyWentDown("a")){
  cash1 = 0;
  multi = multi+ultrarebirth*(rebirth*4.5)+prestige*(.5);
}
if(cash1>=3600&&keyWentDown("q")){
  cash1=0;
  multi=multi+ultrarebirth*(rebirth*17)+prestige*(.5);
}
if(multi>=150&&keyWentDown("x")){
  //rebirthirth button
  rebirth = rebirth+ultrarebirth*(3)+prestige*(.5);
  cash1=0;
  multi=1;
}
if(multi>=2500&&keyWentDown("s")){
  cash1=0;
  multi=1;
  rebirth=rebirth+ultrarebirth*(8+prestige*(.5));
}
if(multi>=250000&&keyWentDown("w")){
  cash1=0;
  multi=1;
  rebirth=rebirth+ultrarebirth*(8+prestige*(.5));
}
if(rebirth>=90&&keyWentDown("c")){
  ultrarebirth=ultrarebirth+1+prestige*(3.5);
  cash1=0;
  multi=1;
  rebirth=3;
}
if(rebirth>=800&&keyWentDown("d")){
  ultrarebirth=ultrarebirth+3+prestige*(3.5);
  cash1=0;
  multi=1;
  rebirth=3;
}
if(rebirth>=90000&&keyWentDown("e")){
  ultrarebirth=ultrarebirth+30+prestige*(3.5);
  cash1=0;
  multi=1;
  rebirth=3;
}
if(ultrarebirth>=800&&keyWentDown("v")){
  ultrarebirth=2;
  rebirth=1;
  multi=40;
  cash1=1;
  prestige=1;
  prestige=prestige*(60+1);
}
text(cash1, 30, 30);
text(multi, 115,30);
text(rebirth,210,30);
text(ultrarebirth,305,30);
text(prestige,380,30);
  textSize(300);
drawSprites();
}


