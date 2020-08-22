//== 定義関係 =============================================

//-- 配列作成 ---------------------------------------------

function MakeArray(n){
 this.length=n;
}

//-- Base Item Data Object 作成 ---------------------------

function MakeBase(name , min , max ,rate,add){
 this.name =	name;
 this.min =	min;
 this.max =	max;
 this.rate =	rate;
 this.add = 	add;
}



function ChgBase(theForm){
 var selbase = theForm.base.selectedIndex;
 var dammin;
 var dammax;
 var rate;
 var add;

 dammin = base[selbase].min;
 dammax = base[selbase].max;
 rate   = base[selbase].rate;
 add    = base[selbase].add;

 theForm.basemin.value = dammin;
 theForm.basemax.value = dammax;

 if( (selbase > 42)||( selbase == 0) ){
  theForm.damrate.value = rate;
  theForm.damadd.value  = add;
 }
}


function ChkDam(theForm){
 var dammin = theForm.basemin.value*1;
 var dammax = theForm.basemax.value*1;
 var rate = 1 +theForm.damrate.value *0.01;
 var add = theForm.damadd.value*1;

 var damdsp = "";
 var i,k,l;


 damdsp = damdsp + "Damage Distribution\n";

 for( i = dammin , l = 0 ; i <= dammax ; i++ ){
  k = Math.floor( i * rate ) + add;
  l = l + k;
  if( i == dammin ){
   damdsp = damdsp + "    " +k;
   theForm.min.value = k;
  }else{
   damdsp = damdsp + "," +k;
   if( i == dammax ){
    theForm.max.value = k;
   }
  }
 }

 damdsp = damdsp + "\n\nAverage Damage\n";

 l = l /(dammax - dammin +1);
 l = l.toString();
 if( l.charAt(0) == "." ){
  l = "0" + l;
 }
 damdsp = damdsp + "    " +l;

 if( dammax < dammin ){
  damdsp = "Error : Damage Min > Damage Max";
 }

 if( dammin < 0 ){
  damdsp = "Error : Damage Min < 0";
 }

 theForm.display.value = damdsp;
}



function AcCalc(theForm){
 var myAc = theForm.base.value*1;
 var myAcRate = 1 + theForm.acrate.value*0.01;

 theForm.ac.value = Math.floor(myAc * myAcRate);
}
//== define array =======================================
var basmax = 98;
var base   = new MakeArray(basmax+1);


//== WEAPON DATA ==========================================

base[0]  = new MakeBase("------- Custom -------",0,0,0,0);
base[1]  = new MakeBase("Dagger"                ,1,4,0,0);
base[2]  = new MakeBase("Short Sword"           ,2,6,0,0);
base[3]  = new MakeBase("Sabre"                 ,1,8,0,0);
base[4]  = new MakeBase("Falchion"              ,4,8,0,0);
base[5]  = new MakeBase("Scimitar"              ,3,7,0,0);
base[6]  = new MakeBase("Blade"                 ,3,8,0,0);
base[7]  = new MakeBase("Claymore"              ,1,12,0,0);
base[8]  = new MakeBase("Long Sword"            ,2,10,0,0);
base[9]  = new MakeBase("Broad Sword"           ,4,12,0,0);
base[10]  = new MakeBase("Bastard Sword"        ,6,15,0,0);
base[11]  = new MakeBase("Two-Handed Sword"     ,8,16,0,0);
base[12]  = new MakeBase("Great Sword"          ,10,20,0,0);
base[13]  = new MakeBase("------- Axes -------" ,0,0,0,0);
base[14]  = new MakeBase("Small Axe"            ,2,10,0,0);
base[15]  = new MakeBase("Axe"                  ,4,12,0,0);
base[16]  = new MakeBase("Large Axe"            ,6,16,0,0);
base[17]  = new MakeBase("Broad Axe"            ,8,20,0,0);
base[18]  = new MakeBase("Battle Axe"           ,10,25,0,0);
base[19]  = new MakeBase("Great Axe"            ,12,30,0,0);
base[20]  = new MakeBase("------- Clubs -------",0,0,0,0);
base[21]  = new MakeBase("Mace"                 ,1,8,0,0);
base[22]  = new MakeBase("Morning Star"         ,1,10,0,0);
base[23]  = new MakeBase("War Hammer"           ,5,9,0,0);
base[24]  = new MakeBase("Club"                 ,1,6,0,0);
base[25]  = new MakeBase("Spiked Club"          ,3,6,0,0);
base[26]  = new MakeBase("Flail"                ,2,12,0,0);
base[27]  = new MakeBase("Maul"                 ,6,20,0,0);
base[28]  = new MakeBase("------- Bows -------" ,0,0,0,0);
base[29]  = new MakeBase("Short Bow"            ,1,4,0,0);
base[30]  = new MakeBase("Hunter's Bow"         ,2,5,0,0);
base[31]  = new MakeBase("Long Bow"             ,1,6,0,0);
base[32]  = new MakeBase("Composite Bow"        ,3,6,0,0);
base[33]  = new MakeBase("Short Battle Bow"     ,3,7,0,0);
base[34]  = new MakeBase("Long Battle Bow"      ,1,10,0,0);
base[35]  = new MakeBase("Short War Bow"        ,4,8,0,0);
base[36]  = new MakeBase("Long War Bow"         ,1,14,0,0);
base[37]  = new MakeBase("------ Staffs ------" ,0,0,0,0);
base[38]  = new MakeBase("Short Staff"          ,2,4,0,0);
base[39]  = new MakeBase("Long Staff"           ,4,8,0,0);
base[40]  = new MakeBase("Composite Staff"      ,5,10,0,0);
base[41]  = new MakeBase("Quarter Staff"        ,6,12,0,0);
base[42]  = new MakeBase("War Staff"            ,8,16,0,0);
base[43]  = new MakeBase("~~~~~ UNIQUES ~~~~~~" ,0,0,0,0);
base[44]  = new MakeBase("The Rift Bow"		,1,4,0,2);
base[45]  = new MakeBase("The Needler"		,1,3,0,0);
base[46]  = new MakeBase("The Celestial Bow"	,1,6,0,2);
base[47]  = new MakeBase("Deadly Hunter"	,3,6,0,0);
base[48]  = new MakeBase("The Blackoak Bow"	,1,6,50,0);
base[49]  = new MakeBase("Bow of the Dead"	,3,6,0,0);
base[50]  = new MakeBase("Flamedart"		,2,5,0,0);
base[51]  = new MakeBase("Fleshstinger"		,1,6,80,0);
base[52]  = new MakeBase("Windforce"		,1,14,200,0);
base[53]  = new MakeBase("Eaglehorn"		,1,10,100,0);
base[54]  = new MakeBase("------ Swords ------" ,0,0,0,0);
base[55]  = new MakeBase("The Defender"		,1,8,0,0);
base[56]  = new MakeBase("Gryphons Claw"	,4,8,100,0);
base[57]  = new MakeBase("Black Razor"		,1,4,150,0);
base[58]  = new MakeBase("Gibbous Moon"		,4,12,25,0);
base[59]  = new MakeBase("Ice Shank"		,2,10,0,0);
base[60]  = new MakeBase("The Executioner's Blade",4,8,150,0);
base[61]  = new MakeBase("The Bonesaw"		,1,12,0,10);
base[62]  = new MakeBase("Shadowhawk"		,4,12,0,0);
base[63]  = new MakeBase("Wizardspike"		,1,4,0,0);
base[64]  = new MakeBase("Lightsabre"		,1,8,0,0);
base[65]  = new MakeBase("The Falcon's Talon"	,3,7,-33,0);
base[66]  = new MakeBase("Inferno"		,2,10,0,0);
base[67]  = new MakeBase("Doombringer"		,6,15,250,0);
base[68]  = new MakeBase("The Grizzly"		,8,16,200,0);
base[69]  = new MakeBase("The Grandfather"	,10,20,70,0);
base[70]  = new MakeBase("------- Axes -------" ,0,0,0,0);
base[71]  = new MakeBase("Sharp Beak"		,6,16,0,0);
base[72]  = new MakeBase("Bloodslayer"		,8,20,100,0);
base[73]  = new MakeBase("The Celestial Axe"	,10,25,0,0);
base[74]  = new MakeBase("Wicked Axe"		,6,16,0,0);
base[75]  = new MakeBase("Stonecleaver"		,8,20,50,0);
base[76]  = new MakeBase("Aguinara's Hatchet"	,2,10,0,0);
base[77]  = new MakeBase("Hellslayer"		,10,25,100,0);
base[78]  = new MakeBase("Messerschmidt's Reaver",12,30,200,15);
base[79]  = new MakeBase("------- Clubs -------",0,0,0,0);
base[80]  = new MakeBase("Hammer of Jholm"	,6,20,10,0);
base[81]  = new MakeBase("Civerb's Cudgel"	,1,8,0,0);
base[82]  = new MakeBase("The Celestial Star"	,2,12,0,10);
base[83]  = new MakeBase("Baranar's Star"	,1,10,80,0);
base[84]  = new MakeBase("Gnarled Root"		,1,6,300,0);
base[85]  = new MakeBase("Gnarled Root"		,3,6,300,0);
base[86]  = new MakeBase("The Cranium Basher"	,6,20,0,20);
base[87]  = new MakeBase("Schaefer's Hammer"	,5,9,-100,0);
base[88]  = new MakeBase("Dreamflange"		,1,8,0,0);
base[89]  = new MakeBase("------ Staffs ------" ,0,0,0,0);
base[90]  = new MakeBase("Staff of Shadows"	,4,8,60,0);
base[91]  = new MakeBase("Immolator"		,4,8,0,0);
base[92]  = new MakeBase("Storm Spire"		,8,16,0,0);
base[93]  = new MakeBase("Gleamsong"		,2,4,0,0);
base[94]  = new MakeBase("Thundercall"		,5,10,0,0);
base[95]  = new MakeBase("The Protector"	,2,4,0,0);
base[96]  = new MakeBase("Naj's Puzzler"	,4,8,0,0);
base[97]  = new MakeBase("Mindcry"		,6,12,0,0);
base[98]  = new MakeBase("Rod of Onan"		,8,16,100,0);
