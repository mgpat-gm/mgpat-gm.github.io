function MakeArray(n){
 this.length=n;
}

 var nxtExp	= new MakeArray(51);

 nxtExp[0]= 0		,nxtExp[10]= 83419	,nxtExp[20]=1366227	,nxtExp[30]=20066092	,nxtExp[40]=210720231;
 nxtExp[1]=2000		,nxtExp[11]=108879	,nxtExp[21]=1814568	,nxtExp[31]=25774405	,nxtExp[41]=261657253;
 nxtExp[2]=4620		,nxtExp[12]=141086	,nxtExp[22]=2401895	,nxtExp[32]=32994399	,nxtExp[42]=323800420;
 nxtExp[3]=8040		,nxtExp[13]=181683	,nxtExp[23]=3168651	,nxtExp[33]=42095202	,nxtExp[43]=399335440;
 nxtExp[4]=12489	,nxtExp[14]=231075	,nxtExp[24]=4166200	,nxtExp[34]=53525811	,nxtExp[44]=490808349;
 nxtExp[5]=18258	,nxtExp[15]=313658	,nxtExp[25]=5459523	,nxtExp[35]=67831218	,nxtExp[45]=601170414;
 nxtExp[6]=25712	,nxtExp[16]=424067	,nxtExp[26]=7130496	,nxtExp[36]=85670061	,nxtExp[46]=733825617;
 nxtExp[7]=35309	,nxtExp[17]=571190	,nxtExp[27]=9281874	,nxtExp[37]=107834823	,nxtExp[47]=892680222;
 nxtExp[8]=47622	,nxtExp[18]=766569	,nxtExp[28]=12042092	,nxtExp[38]=135274799	,nxtExp[48]=1082908612;
 nxtExp[9]=63364	,nxtExp[19]=1025154	,nxtExp[29]=15571031	,nxtExp[39]=169122009	,nxtExp[49]=1310707109;
 nxtExp[50]=1583495809;

function calcall(theForm){
 var myClass	= theForm.myclass.selectedIndex;
 var myLv	= theForm.mylevel.value*1;

 var myExpNow	= theForm.myexp.value*1;

 var myStrBase	= theForm.mystrbase.value*1;
 var myMagBase	= theForm.mymagbase.value*1;
 var myDexBase	= theForm.mydexbase.value*1;
 var myVitBase	= theForm.myvitbase.value*1;

 var helmAc	= theForm.helmac.value*1;
 var helmRate	= 1 + theForm.helmrate.value * 0.01;
 var helmStr	= theForm.helmstr.value*1;
 var helmMag	= theForm.helmmag.value*1;
 var helmDex	= theForm.helmdex.value*1;
 var helmVit	= theForm.helmvit.value*1;
 var helmMana	= theForm.helmmana.value*1;
 var helmLife	= theForm.helmlife.value*1;
 var helmResMag	= theForm.helmresmag.value*1;
 var helmResFire= theForm.helmresfire.value*1;
 var helmResLight= theForm.helmreslight.value*1;

 var armorAc	= theForm.armorac.value*1;
 var armorRate	= 1 + theForm.armorrate.value * 0.01;
 var armorStr	= theForm.armorstr.value*1;
 var armorMag	= theForm.armormag.value*1;
 var armorDex	= theForm.armordex.value*1;
 var armorVit	= theForm.armorvit.value*1;
 var armorMana	= theForm.armormana.value*1;
 var armorLife	= theForm.armorlife.value*1;
 var armorResMag= theForm.armorresmag.value*1;
 var armorResFire= theForm.armorresfire.value*1;
 var armorResLight= theForm.armorreslight.value*1;

 var shieldAc	= theForm.shieldac.value*1;
 var shieldRate	= 1 + theForm.shieldrate.value * 0.01;
 var shieldStr	= theForm.shieldstr.value*1;
 var shieldMag	= theForm.shieldmag.value*1;
 var shieldDex	= theForm.shielddex.value*1;
 var shieldVit	= theForm.shieldvit.value*1;
 var shieldMana	= theForm.shieldmana.value*1;
 var shieldLife	= theForm.shieldlife.value*1;
 var shieldResMag= theForm.shieldresmag.value*1;
 var shieldResFire= theForm.shieldresfire.value*1;
 var shieldResLight= theForm.shieldreslight.value*1;

 var weaponDamMin= theForm.weapondammin.value*1;
 var weaponDamMax= theForm.weapondammax.value*1;
 var weaponRate	= 1 + theForm.weaponrate.value * 0.01;
 var weaponAdd	= theForm.weaponadd.value*1;
 var weaponToHit= theForm.weapontohit.value*1;
 var weaponStr	= theForm.weaponstr.value*1;
 var weaponMag	= theForm.weaponmag.value*1;
 var weaponDex	= theForm.weapondex.value*1;
 var weaponVit	= theForm.weaponvit.value*1;
 var weaponMana	= theForm.weaponmana.value*1;
 var weaponLife	= theForm.weaponlife.value*1;
 var weaponAc	= theForm.weaponac.value*1;
 var weaponResMag= theForm.weaponresmag.value*1;
 var weaponResFire= theForm.weaponresfire.value*1;
 var weaponResLight= theForm.weaponreslight.value*1;

 var amuletStr	= theForm.amuletstr.value*1;
 var amuletMag	= theForm.amuletmag.value*1;
 var amuletDex	= theForm.amuletdex.value*1;
 var amuletVit	= theForm.amuletvit.value*1;
 var amuletToHit= theForm.amulettohit.value*1;
 var amuletMana	= theForm.amuletmana.value*1;
 var amuletLife	= theForm.amuletlife.value*1;
 var amuletResMag= theForm.amuletresmag.value*1;
 var amuletResFire= theForm.amuletresfire.value*1;
 var amuletResLight= theForm.amuletreslight.value*1;

 var ring1Str	= theForm.ring1str.value*1;
 var ring1Mag	= theForm.ring1mag.value*1;
 var ring1Dex	= theForm.ring1dex.value*1;
 var ring1Vit	= theForm.ring1vit.value*1;
 var ring1ToHit= theForm.ring1tohit.value*1;
 var ring1Mana	= theForm.ring1mana.value*1;
 var ring1Life	= theForm.ring1life.value*1;
 var ring1Ac	= theForm.ring1ac.value*1;
 var ring1ResMag= theForm.ring1resmag.value*1;
 var ring1ResFire= theForm.ring1resfire.value*1;
 var ring1ResLight= theForm.ring1reslight.value*1;

 var ring2Str	= theForm.ring2str.value*1;
 var ring2Mag	= theForm.ring2mag.value*1;
 var ring2Dex	= theForm.ring2dex.value*1;
 var ring2Vit	= theForm.ring2vit.value*1;
 var ring2ToHit= theForm.ring2tohit.value*1;
 var ring2Mana	= theForm.ring2mana.value*1;
 var ring2Life	= theForm.ring2life.value*1;
 var ring2Ac	= theForm.ring2ac.value*1;
 var ring2ResMag= theForm.ring2resmag.value*1;
 var ring2ResFire= theForm.ring2resfire.value*1;
 var ring2ResLight= theForm.ring2reslight.value*1;

 var myStrEqp	= helmStr + armorStr + shieldStr + weaponStr + amuletStr + ring1Str + ring2Str;
 var myMagEqp	= helmMag + armorMag + shieldMag + weaponMag + amuletMag + ring1Mag + ring2Mag;
 var myDexEqp	= helmDex + armorDex + shieldDex + weaponDex + amuletDex + ring1Dex + ring2Dex;
 var myVitEqp	= helmVit + armorVit + shieldVit + weaponVit + amuletVit + ring1Vit + ring2Vit;

 var myStrNow	= myStrBase + myStrEqp;
 var myMagNow	= myMagBase + myMagEqp;
 var myDexNow	= myDexBase + myDexEqp;
 var myVitNow	= myVitBase + myVitEqp;


 var myAcEqp	= Math.floor(helmAc * helmRate) + Math.floor(armorAc * armorRate) + Math.floor(shieldAc * shieldRate) + weaponAc + ring1Ac + ring2Ac;
 var myToHitEqp	= weaponToHit + amuletToHit + ring1ToHit + ring2ToHit;
 var myDamMinEqp;
 var myDamMaxEqp;

 var myManaEqp	= helmMana + armorMana + shieldMana + weaponMana + amuletMana + ring1Mana + ring2Mana;
 var myLifeEqp	= helmLife + armorLife + shieldLife + weaponLife + amuletLife + ring1Life + ring2Life;

 var myWepType	= theForm.weapontype.selectedIndex;

 var enMagLv	= theForm.enmagiclevel.value*1;
 var enPhsLv	= theForm.enphisicallevel.value*1;
 var enAc	= theForm.enac.value*1;

 var myLifeBase,myLifeNow;
 var myManaBase,myManaNow;

 var myLv2;

 //-- Weapon Damage Check ----------------

 if( myWepType == 0 ){		//-- Bare Knuckle --
  myDamMinEqp= 1;
  myDamMaxEqp= 1;
 }else if( myWepType == 6 ){	//-- Shield --------
  myDamMinEqp= 1;
  myDamMaxEqp= 3;
 }else{
  myDamMinEqp= Math.floor(weaponDamMin * weaponRate + weaponAdd);
  myDamMaxEqp= Math.floor(weaponDamMax * weaponRate + weaponAdd);
 }

 //-- Level 50 Check ---------------------

 if(myLv == 50){
  myLv2 = myLv-2;
 }else{
  myLv2 = myLv-1;
 }

 //-- Class Depend Part ------------------

 if(myClass == 0){
  theForm.myclass2.value	= "Warrior";

  theForm.lifebase.value	= myVitBase *2 + myLv2*2 +20;
  theForm.lifenow.value		= myVitEqp *2 + myVitBase *2 + myLv2*2 +20 +myLifeEqp;
  theForm.manabase.value	= myMagBase + myLv2;
  theForm.mananow.value		= myMagEqp + myMagBase + myLv2 +myManaEqp;

  if(myWepType != 2){
   theForm.dammin.value		= (Math.floor(myStrNow * myLv * 0.01) +myDamMinEqp) +"-" +(Math.floor(myStrNow * myLv * 0.01) +myDamMaxEqp);
   theForm.atkhit.value		= myLv + Math.floor(myDexNow * 0.5) +50 - enAc +20 +myToHitEqp;
  }else{
   theForm.dammin.value		= (Math.floor(myStrNow * myLv * 0.005) +myDamMinEqp) +"-" +(Math.floor(myStrNow * myLv * 0.005) +myDamMaxEqp);
   theForm.atkhit.value		= myLv + myDexNow +50 - enAc +10 +myToHitEqp;
  }

   theForm.maghit.value		= (25 - enMagLv)*2 +myMagNow;

 }else{
  if(myClass == 1){
   theForm.myclass2.value	= "Rogue";

   theForm.lifebase.value	= myVitBase + myLv2*2 +25;
   theForm.lifenow.value	= Math.floor(myVitEqp *1.5) + myVitBase + myLv2*2 +25 +myLifeEqp;
   theForm.manabase.value	= myMagBase + myLv2*2 +7;
   theForm.mananow.value	= Math.floor(myMagEqp *1.5) + myMagBase + myLv2*2 +7 +myManaEqp;

   theForm.dammin.value		= (Math.floor((myStrNow + myDexNow) * myLv * 0.005) +myDamMinEqp) +"-" +(Math.floor((myStrNow + myDexNow) * myLv * 0.005) +myDamMaxEqp);

   if(myWepType != 2){
    theForm.atkhit.value	= myLv + Math.floor(myDexNow * 0.5) +50 - enAc +myToHitEqp;
   }else{
    theForm.atkhit.value	= myLv + myDexNow +50 - enAc +20 +myToHitEqp;
   }

   theForm.maghit.value		= (25 - enMagLv)*2 +myMagNow;


  }else{
   theForm.myclass2.value	= "Sorcerer";

   theForm.lifebase.value	= myVitBase + myLv2 +10;
   theForm.lifenow.value	= myVitEqp + myVitBase + myLv2 +10 +myLifeEqp;
   theForm.manabase.value	= myMagBase *2 + myLv2*2;
   theForm.mananow.value	= myMagEqp *2 + myMagBase *2 + myLv2*2 +myManaEqp;

   if(myWepType != 2){
    theForm.dammin.value	= (Math.floor(myStrNow * myLv * 0.01) +myDamMinEqp) +"-" +( Math.floor(myStrNow * myLv * 0.01) +myDamMaxEqp);
    theForm.atkhit.value	= myLv + Math.floor(myDexNow * 0.5) +50 - enAc +myToHitEqp;
   }else{
    theForm.dammin.value	= (Math.floor(myStrNow * myLv * 0.005) +myDamMinEqp) +"-" +(Math.floor(myStrNow * myLv * 0.005) +myDamMaxEqp);
    theForm.atkhit.value	= myLv + myDexNow +50 - enAc +myToHitEqp;
   }
   theForm.maghit.value		= (25 - enMagLv)*2 +myMagNow +20;
  }
 }

 //-- Exp --------------------------------

 theForm.exp.value		= myExpNow;

 if ( myExpNow >= nxtExp[myLv] ){
  theForm.tonextlv.value	= "None";
  if ( myLv == 50 ){
   theForm.nextexp.value	= "None";
  }else{
   theForm.nextexp.value	= nxtExp[myLv];
  }
 }else{
  theForm.nextexp.value		= nxtExp[myLv];
  theForm.tonextlv.value	= nxtExp[myLv]-myExpNow;
 }


 //-- Copy Data --------------------------

 theForm.strnow.value		= myStrNow;
 theForm.magnow.value		= myMagNow;
 theForm.dexnow.value		= myDexNow;
 theForm.vitnow.value		= myVitNow;

 theForm.resmag.value		= helmResMag + armorResMag + shieldResMag + weaponResMag + amuletResMag + ring1ResMag + ring2ResMag;
 theForm.resfire.value		= helmResFire + armorResFire + shieldResFire + weaponResFire + amuletResFire + ring1ResFire + ring2ResFire;
 theForm.reslight.value		= helmResLight + armorResLight + shieldResLight + weaponResLight + amuletResLight + ring1ResLight + ring2ResLight;

 theForm.charname.value		= theForm.mycharname.value;
 theForm.level.value		= theForm.mylevel.value;

 theForm.enphslevel2.value	= theForm.enphisicallevel.value;
 theForm.enmaglevel2.value	= theForm.enmagiclevel.value;
 theForm.enac2.value		= theForm.enac.value;

 theForm.strbase.value		= myStrBase;
 theForm.magbase.value		= myMagBase;
 theForm.dexbase.value		= myDexBase;
 theForm.vitbase.value		= myVitBase;

 theForm.strnow.value		= myStrBase +myStrEqp;
 theForm.magnow.value		= myMagBase +myMagEqp;
 theForm.dexnow.value		= myDexBase +myDexEqp;
 theForm.vitnow.value		= myVitBase +myVitEqp;


 //-- Common Part Calc -------------------

 theForm.tohit.value		= Math.floor(myDexNow * 0.5) +50 +myToHitEqp;
 theForm.ac.value		= Math.floor(myDexNow * 0.2) +myAcEqp;

 theForm.block.value		= (myLv - enPhsLv) *2 + myDexNow;


 //-- Limit Check ------------------------

 if (theForm.block.value < 0){
  theForm.block.value = 0 +"%";
 }else{
  if (theForm.block.value > 100){
   theForm.block.value = 100 +"%";
  }else{
   theForm.block.value = theForm.block.value +"%";
  }
 }

 if (theForm.atkhit.value < 5){
  theForm.atkhit.value = 5 +"%";
 }else{
  if (theForm.atkhit.value > 95){
   theForm.atkhit.value = 95 +"%";
  }else{
   theForm.atkhit.value = theForm.atkhit.value +"%";
  }
 }


 if (theForm.maghit.value < 5){
  theForm.maghit.value = 5 +"%";
 }else{
  if (theForm.maghit.value > 95){
   theForm.maghit.value = 95 +"%";
  }else{
   theForm.maghit.value = theForm.maghit.value +"%";
  }
 }

 if (theForm.resmag.value >= 75){
  theForm.resmag.value = "MAX";
 }else{
  theForm.resmag.value = theForm.resmag.value +"%";
 }
 if (theForm.resfire.value >= 75){
  theForm.resfire.value = "MAX";
 }else{
  theForm.resfire.value = theForm.resfire.value +"%";
 }
 if (theForm.reslight.value >= 75){
  theForm.reslight.value = "MAX";
 }else{
  theForm.reslight.value = theForm.reslight.value +"%";
 }



}

function myexpset(theForm){
 var myLv	= theForm.mylevel.value*1;
 if( myLv > 0 ){
  theForm.myexp.value		= nxtExp[myLv-1];
 }
}

function attrimaxset(theForm){
 var myClass	= theForm.myclass.selectedIndex;

 theForm.mylevel.value		= 50;
 theForm.myexp.value		= 1583495809;
 if (myClass == 0){
  theForm.mystrbase.value	= 250;
  theForm.mymagbase.value	= 50;
  theForm.mydexbase.value	= 60;
  theForm.myvitbase.value	= 100;
 }else{
  if (myClass == 1){
   theForm.mystrbase.value	= 55;
   theForm.mymagbase.value	= 70;
   theForm.mydexbase.value	= 250;
   theForm.myvitbase.value	= 80;
  }else{
   theForm.mystrbase.value	= 45;
   theForm.mymagbase.value	= 250;
   theForm.mydexbase.value	= 85;
   theForm.myvitbase.value	= 80;
  }
 }
}

function attriinitset(theForm){
 var myClass	= theForm.myclass.selectedIndex;

 theForm.mylevel.value		= 1;
 theForm.myexp.value		= 0;
 if (myClass == 0){
  theForm.mystrbase.value	= 30;
  theForm.mymagbase.value	= 10;
  theForm.mydexbase.value	= 20;
  theForm.myvitbase.value	= 25;
 }else{
  if (myClass == 1){
   theForm.mystrbase.value	= 20;
   theForm.mymagbase.value	= 15;
   theForm.mydexbase.value	= 30;
   theForm.myvitbase.value	= 20;
  }else{
   theForm.mystrbase.value	= 15;
   theForm.mymagbase.value	= 35;
   theForm.mydexbase.value	= 15;
   theForm.myvitbase.value	= 20;
  }
 }
}

function enacmaxset(theForm){
 theForm.enphisicallevel.value	= 74;
 theForm.enmagiclevel.value	= 95;
 theForm.enac.value		= 165;
}

function allsethelm(theForm){
 theForm.helmstr.value		= theForm.helmall.value;
 theForm.helmmag.value		= theForm.helmall.value;
 theForm.helmdex.value		= theForm.helmall.value;
 theForm.helmvit.value		= theForm.helmall.value;
}

function allsetarmor(theForm){
 theForm.armorstr.value		= theForm.armorall.value;
 theForm.armormag.value		= theForm.armorall.value;
 theForm.armordex.value		= theForm.armorall.value;
 theForm.armorvit.value		= theForm.armorall.value;
}

function allsetshield(theForm){
 theForm.shieldstr.value	= theForm.shieldall.value;
 theForm.shieldmag.value	= theForm.shieldall.value;
 theForm.shielddex.value	= theForm.shieldall.value;
 theForm.shieldvit.value	= theForm.shieldall.value;
}

function allsetweapon(theForm){
 theForm.weaponstr.value	= theForm.weaponall.value;
 theForm.weaponmag.value	= theForm.weaponall.value;
 theForm.weapondex.value	= theForm.weaponall.value;
 theForm.weaponvit.value	= theForm.weaponall.value;
}

function allsetamulet(theForm){
 theForm.amuletstr.value	= theForm.amuletall.value;
 theForm.amuletmag.value	= theForm.amuletall.value;
 theForm.amuletdex.value	= theForm.amuletall.value;
 theForm.amuletvit.value	= theForm.amuletall.value;
}

function allsetring1(theForm){
 theForm.ring1str.value		= theForm.ring1all.value;
 theForm.ring1mag.value		= theForm.ring1all.value;
 theForm.ring1dex.value		= theForm.ring1all.value;
 theForm.ring1vit.value		= theForm.ring1all.value;
}

function allsetring2(theForm){
 theForm.ring2str.value		= theForm.ring2all.value;
 theForm.ring2mag.value		= theForm.ring2all.value;
 theForm.ring2dex.value		= theForm.ring2all.value;
 theForm.ring2vit.value		= theForm.ring2all.value;
}


function resallsethelm(theForm){
 theForm.helmresmag.value	= theForm.helmresall.value;
 theForm.helmresfire.value	= theForm.helmresall.value;
 theForm.helmreslight.value	= theForm.helmresall.value;
}

function resallsetarmor(theForm){
 theForm.armorresmag.value	= theForm.armorresall.value;
 theForm.armorresfire.value	= theForm.armorresall.value;
 theForm.armorreslight.value	= theForm.armorresall.value;
}

function resallsetshield(theForm){
 theForm.shieldresmag.value	= theForm.shieldresall.value;
 theForm.shieldresfire.value	= theForm.shieldresall.value;
 theForm.shieldreslight.value	= theForm.shieldresall.value;
}

function resallsetweapon(theForm){
 theForm.weaponresmag.value	= theForm.weaponresall.value;
 theForm.weaponresfire.value	= theForm.weaponresall.value;
 theForm.weaponreslight.value	= theForm.weaponresall.value;
}

function resallsetamulet(theForm){
 theForm.amuletresmag.value	= theForm.amuletresall.value;
 theForm.amuletresfire.value	= theForm.amuletresall.value;
 theForm.amuletreslight.value	= theForm.amuletresall.value;
}

function resallsetring1(theForm){
 theForm.ring1resmag.value	= theForm.ring1resall.value;
 theForm.ring1resfire.value	= theForm.ring1resall.value;
 theForm.ring1reslight.value	= theForm.ring1resall.value;
}

function resallsetring2(theForm){
 theForm.ring2resmag.value	= theForm.ring2resall.value;
 theForm.ring2resfire.value	= theForm.ring2resall.value;
 theForm.ring2reslight.value	= theForm.ring2resall.value;
}
