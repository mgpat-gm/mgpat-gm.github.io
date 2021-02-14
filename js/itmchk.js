//== ÄêµÁ´Ø·¸ =============================================

//-- ÇÛÎóºîÀ® ---------------------------------------------

function MakeArray( n ){
 this.length=n;
}

//-- Prefix/Suffix Data Object ºîÀ®------------------------

function MakePremium( name , effect , level , equip , multi , addmin , addmax , min , step ){
 this.name =	name;
 this.effect =	effect;
 this.level =	level;
 this.equip =	equip;
 this.multi =	multi;
 this.addmin =	addmin;
 this.addmax =	addmax;
 this.min = min;
 this.step = step;
}

//-- Base Item Data Object ºîÀ® ---------------------------

function MakeBasee( name , kind , level , price , effect ){
 this.name =	name;
 this.kind =	kind;
 this.level =	level;
 this.price =	price;
 this.effect =	effect;
}

//-- Unique Item Data Object ºîÀ® -------------------------

function MakeUniq( basee , minlvl , maxlvl , effect ){
 this.basee =	basee;
 this.minlvl =	minlvl;
 this.maxlvl =  maxlvl;
 this.effect =	effect;
}

//-- ÁõÈ÷²ÄÇ½ Data Object ºîÀ® ----------------------------

function GetEquip( param ){
 if( (param>>5)&1 ){
  this.weapon =	true;
  this.weapon_str = "W";
 }else{
  this.weapon =	false;
  this.weapon_str = "-";
 }
 if( (param>>4)&1 ){
  this.bow =	true;
  this.bow_str = "B";
 }else{
  this.bow =	false;
  this.bow_str = "-";
 }
 if( (param>>3)&1 ){
  this.staff =	true;
  this.staff_str = "T";
 }else{
  this.staff =	false;
  this.staff_str = "-";
 }
 if( (param>>2)&1 ){
  this.armor =	true;
  this.armor_str = "A";
 }else{
  this.armor =	false;
  this.armor_str = "-";
 }
 if( (param>>1)&1 ){
  this.shield =	true;
  this.shield_str = "S";
 }else{
  this.shield =	false;
  this.shield_str = "-";
 }
 if( param&1 ){
  this.amulet =	true;
  this.amulet_str = "J";
 }else{
  this.amulet =	false;
  this.amulet_str = "-";
 }
 this.parm = param;
 this.str = "Types: " + this.weapon_str + this.bow_str + this.staff_str + this.armor_str + this.shield_str + this.amulet_str;
}

//-- ÁõÈ÷¥¿¥¤¥× Data Object ºîÀ® --------------------------

function GetKind( parm1 , parm2 ){
  this.parm = parm1;
  this.name = parm2;
}


//== Main Action ==========================================

//-- reset ------------------------------------------------
function Init( theForm ){
 theForm.prefixx.length = premax+1;
 theForm.suffixx.length = sufmax+1;
 theForm.basee.length = basmaxx+1;

 theForm.prefixx.selectedIndex = 0;
 theForm.suffixx.selectedIndex = 0;
 theForm.basee.selectedIndex = 0;

 for( i = 0 ; i <= premax ; i++ ){
  prelst[i] = i;
  theForm.prefixx.options[i].text  = prefixx[i].name;
 }
 for( i = 0 ; i <= sufmax ; i++ ){
  suflst[i] = i;
  theForm.suffixx.options[i].text  = suffixx[i].name;
 }
 for( i = 0 ; i <= basmaxx ; i++ ){
  baslst[i] = i;
  theForm.basee.options[i].text  = basee[i].name;
 }
}

//-- ¾ÜºÙPrice¥â¡¼¥ÉÊÑ¹¹»þ¤Î½èÍý ---------------------------

function ChgMode( theForm ){
 Display( theForm , baslst[theForm.basee.selectedIndex] , prelst[theForm.prefixx.selectedIndex] , suflst[theForm.suffixx.selectedIndex] );
}

//-- Base ÊÑ¹¹»þ¤Î½èÍý ------------------------------------

function ChgBasee( theForm ){
 var selbasee	= baslst[theForm.basee.selectedIndex];
 var selpref	= prelst[theForm.prefixx.selectedIndex];
 var selsuff	= suflst[theForm.suffixx.selectedIndex];

 var bastype	= basee[selbasee].kind.parm;

 var baslvl	= basee[selbasee].level;
 var prelvl	= prefixx[selpref].level;
 var suflvl	= suffixx[selsuff].level;

 var preparm	= prefixx[selpref].equip.parm;
 var sufparm	= suffixx[selsuff].equip.parm;

 for( i = 1 , j = 1 ; i <= premax ; i++ ){
  if( sufparm&prefixx[i].equip.parm || (suflvl == 0) ){
   if( ((prefixx[i].equip.parm>>bastype)&1) || (baslvl == 0) ){
    if( (suflvl==0)||((prefixx[i].level*2+1>=suflvl)&&(suflvl*2+1>=prefixx[i].level))||((prefixx[i].level>=25)&&(suflvl>=25))||(selsuff>95) ){
	if( (selsuff == 24) || (selsuff == 26) || (selsuff == 27) || ((selsuff >= 31) && (selsuff <= 34)) || (selsuff == 75) ){
	 if( (i == 22) || (i == 23) || (i == 49) ){
	  continue;
	 }
	}else{
	 if( (selsuff == 29) || (selsuff == 30) || (selsuff == 36) || (selsuff == 58) || (selsuff == 72) || (selsuff == 93) || (selsuff == 94) ){
	  if( ((i >= 72) && (i <= 74)) || ((i >= 36) && (i <= 39)) || (i == 80) || (i == 81) ){
	   continue;
	  }
	 }
	}
	prelst[j] = i;
	j++;
    }
   }
  }
 }
 theForm.prefixx.length = j;

 for( i = 1 , j = 1 ; i <= sufmax ; i++ ){
  if( preparm&suffixx[i].equip.parm || (prelvl == 0) ){
   if( ((suffixx[i].equip.parm>>bastype)&1) || (baslvl == 0) ){
    if( (prelvl==0)||((suffixx[i].level*2+1>=prelvl)&&(prelvl*2+1>=suffixx[i].level))||((suffixx[i].level>=25)&&(prelvl>=25))||((bastype%3 ==0)&&(i>95)) ){
	if( (selpref == 22) || (selpref == 23) || (selpref == 49) ){
	 if( (i == 24) || (i == 26) || (i == 27) || ((i >= 31) && (i <= 34)) || (i == 75) ){
	  continue;
	 }
	}else{
	 if( ((selpref >= 72) && (selpref <= 74)) || ((selpref >= 36) && (selpref <= 39)) || (selpref == 80) || (selpref == 81) ){
	  if( (i == 29) || (i == 30) || (i == 36) || (i == 58) || (i == 72) || (i == 93) || (i == 94) ){
	   continue;
	  }
	 }
	}
	suflst[j] = i;
	j++;
    }
   }
  }
 }
 theForm.suffixx.length = j;

 i = 1;
 theForm.prefixx.selectedIndex = 0;
 while( (theForm.prefixx.selectedIndex == 0) && (i < theForm.prefixx.length) ){
  if( prelst[i] == selpref ){
   theForm.prefixx.selectedIndex = i;
  }
  i++;
 }

 i = 1;
 theForm.suffixx.selectedIndex = 0;
 while( (theForm.suffixx.selectedIndex == 0) && (i < theForm.suffixx.length) ){
  if( suflst[i] == selsuff ){
   theForm.suffixx.selectedIndex = i;
  }
  i++;
 }


 for( i = 1 ; i < theForm.prefixx.length ; i++ ){
  theForm.prefixx.options[i].text  = prefixx[prelst[i]].name;
 }

 for( i = 1 ; i < theForm.suffixx.length ; i++ ){
  theForm.suffixx.options[i].text  = suffixx[suflst[i]].name;
 }

 selbasee	= baslst[theForm.basee.selectedIndex];
 selpref	= prelst[theForm.prefixx.selectedIndex];
 selsuff	= suflst[theForm.suffixx.selectedIndex];

 Display( theForm , selbasee , selpref , selsuff );
}

//-- Prefix ÊÑ¹¹»þ¤Î½èÍý ----------------------------------
function ChgPrefix( theForm ){
 var selbasee	= baslst[theForm.basee.selectedIndex];
 var selpref	= prelst[theForm.prefixx.selectedIndex];
 var selsuff	= suflst[theForm.suffixx.selectedIndex];

 var bastype	= basee[selbasee].kind.parm;

 var baslvl	= basee[selbasee].level;
 var prelvl	= prefixx[selpref].level;
 var suflvl	= suffixx[selsuff].level;

 var preparm	= prefixx[selpref].equip.parm;
 var sufparm	= suffixx[selsuff].equip.parm;

 for( i = 1 , j = 1 ; i <= basmaxx ; i++ ){
  if( ((sufparm>>basee[i].kind.parm)&1) || (suflvl == 0) ){
   if( ((preparm>>basee[i].kind.parm)&1) || (prelvl == 0) ){
    baslst[j] = i;
    j++;
   }
  }
 }
 theForm.basee.length = j;

 for( i = 1 , j = 1 ; i <= sufmax ; i++ ){
  if( preparm&suffixx[i].equip.parm || (prelvl == 0) ){
   if( ((suffixx[i].equip.parm>>bastype)&1) || (baslvl == 0) ){
    if( (prelvl==0)||((suffixx[i].level*2+1>=prelvl)&&(prelvl*2+1>=suffixx[i].level))||((suffixx[i].level>=25)&&(prelvl>=25))||((bastype%3==0)&&(i>95)) ){
	if( (selpref == 22) || (selpref == 23) || (selpref == 49) ){
	 if( (i == 24) || (i == 26) || (i == 27) || ((i >= 31) && (i <= 34)) || (i == 75) ){
	  continue;
	 }
	}else{
	 if( ((selpref >= 72) && (selpref <= 74)) || ((selpref >= 36) && (selpref <= 39)) || (selpref == 80) || (selpref == 81) ){
	  if( (i == 29) || (i == 30) || (i == 36) || (i == 58) || (i == 72) || (i == 93) || (i == 94) ){
	   continue;
	  }
	 }
	}
	suflst[j] = i;
	j++;
    }
   }
  }
 }
 theForm.suffixx.length = j;


 i = 1;
 theForm.basee.selectedIndex = 0;
 while( (theForm.basee.selectedIndex == 0) && (i < theForm.basee.length) ){
  if( baslst[i] == selbasee ){
   theForm.basee.selectedIndex = i;
  }
  i++;
 }

 i = 1;
 theForm.suffixx.selectedIndex = 0;
 while( (theForm.suffixx.selectedIndex == 0) && (i < theForm.suffixx.length) ){
  if( suflst[i] == selsuff ){
   theForm.suffixx.selectedIndex = i;
  }
  i++;
 }


 for( i = 1 ; i < theForm.basee.length ; i++ ){
  theForm.basee.options[i].text  = basee[baslst[i]].name;
 }

 for( i = 1 ; i < theForm.suffixx.length ; i++ ){
  theForm.suffixx.options[i].text  = suffixx[suflst[i]].name;
 }

 selbasee	= baslst[theForm.basee.selectedIndex];
 selpref	= prelst[theForm.prefixx.selectedIndex];
 selsuff	= suflst[theForm.suffixx.selectedIndex];

 Display( theForm , selbasee , selpref , selsuff );
}

//-- Suffix ÊÑ¹¹»þ¤Î½èÍý ----------------------------------
function ChgSuffix( theForm ){
 var selbasee	= baslst[theForm.basee.selectedIndex];
 var selpref	= prelst[theForm.prefixx.selectedIndex];
 var selsuff	= suflst[theForm.suffixx.selectedIndex];

 var bastype	= basee[selbasee].kind.parm;

 var baslvl	= basee[selbasee].level;
 var prelvl	= prefixx[selpref].level;
 var suflvl	= suffixx[selsuff].level;

 var preparm	= prefixx[selpref].equip.parm;
 var sufparm	= suffixx[selsuff].equip.parm;

 for( i = 1 , j = 1 ; i <= basmaxx ; i++ ){
  if( ((preparm>>basee[i].kind.parm)&1) || (prelvl == 0) ){
   if( ((sufparm>>basee[i].kind.parm)&1) || (suflvl == 0) ){
    baslst[j] = i;
    j++;
   }
  }
 }
 theForm.basee.length = j;

 for( i = 1 , j = 1 ; i <= premax ; i++ ){
  if( sufparm&prefixx[i].equip.parm || (suflvl == 0) ){
   if( ((prefixx[i].equip.parm>>bastype)&1) || (baslvl == 0) ){
    if( (suflvl==0)||((prefixx[i].level*2+1>=suflvl)&&(suflvl*2+1>=prefixx[i].level))||((prefixx[i].level>=25)&&(suflvl>=25))||(selsuff>95) ){
	if( (selsuff == 24) || (selsuff == 26) || (selsuff == 27) || ((selsuff >= 31) && (selsuff <= 34)) || (selsuff == 75) ){
	 if( (i == 22) || (i == 23) || (i == 49) ){
	  continue;
	 }
	}else{
	 if( (selsuff == 29) || (selsuff == 30) || (selsuff == 36) || (selsuff == 58) || (selsuff == 72) || (selsuff == 93) || (selsuff == 94) ){
	  if( ((i >= 72) && (i <= 74)) || ((i >= 36) && (i <= 39)) || (i == 80) || (i == 81) ){
	   continue;
	  }
	 }
	}
	prelst[j] = i;
	j++;
    }
   }
  }
 }
 theForm.prefixx.length = j;


 i = 1;
 theForm.basee.selectedIndex = 0;
 while( (theForm.basee.selectedIndex == 0) && (i < theForm.basee.length) ){
  if( baslst[i] == selbasee ){
   theForm.basee.selectedIndex = i;
  }
  i++;
 }

 i = 1;
 theForm.prefixx.selectedIndex = 0;
 while( (theForm.prefixx.selectedIndex == 0) && (i < theForm.prefixx.length) ){
  if( prelst[i] == selpref ){
   theForm.prefixx.selectedIndex = i;
  }
  i++;
 }


 for( i = 1 ; i < theForm.basee.length ; i++ ){
  theForm.basee.options[i].text  = basee[baslst[i]].name;
 }

 for( i = 1 ; i < theForm.prefixx.length ; i++ ){
  theForm.prefixx.options[i].text  = prefixx[prelst[i]].name;
 }

 selbasee	= baslst[theForm.basee.selectedIndex];
 selpref	= prelst[theForm.prefixx.selectedIndex];
 selsuff	= suflst[theForm.suffixx.selectedIndex];

 Display( theForm , selbasee , selpref , selsuff );
}


//-- Data É½¼¨ ---------------------------------------------
function Display( theForm , SelBasee , SelPref , SelSuff ){
 var dspbase;
 var dsppref;
 var dspsuff;

 var dsp2pref;
 var dsp2suff;
 var dsp2base;
 var dsp3;

 var baseefc;
 var prefefc;
 var suffefc;
 var totalefc;

 var pricemin;
 var pricemax;

 var slvlmin;
 var slvlmax;
 var slvldsp;

 var clvl_min;
 var clvl_max;
 var clvl_dsp;

 var grisdsp = "";
 var wirtdsp = "";
 var adradsp = "";
 var normdsp = "";
 var maredsp = "";
 var helldsp = "";

 var premulti	= prefixx[SelPref].multi;
 var preaddmin	= prefixx[SelPref].addmin;
 var preaddmax	= prefixx[SelPref].addmax;
 var prerange 	= preaddmax - preaddmin;
 var premin	= prefixx[SelPref].min;
 var prestep	= prefixx[SelPref].step;

 var sufmulti	= suffixx[SelSuff].multi;
 var sufaddmin	= suffixx[SelSuff].addmin;
 var sufaddmax	= suffixx[SelSuff].addmax;
 var sufrange 	= sufaddmax - sufaddmin;
 var sufmin	= suffixx[SelSuff].min;
 var sufstep	= suffixx[SelSuff].step;

 var prelvl	= prefixx[SelPref].level;
 var suflvl	= suffixx[SelSuff].level;
 var baslvl	= basee[SelBasee].level;

 var minusitem	= false;

 var mbaslvl;
 var hbaslvl;

 var psmulti	= premulti + sufmulti;
 var multi_sign = 1;

 if( psmulti == 0 ){
  psmulti = 1;
 }else{
  if( psmulti < 0 ){
   multi_sign = -1;
   psmulti = multi_sign/psmulti;
  }
 }

 //-- Source Level --------------
 if( prelvl > suflvl ){
  slvlmin = prelvl;
  if( suflvl > 0 ){
   slvlmax = suflvl *2 +1;
  }else{
   slvlmax = prelvl *2 +1;
  }
 }else{
  slvlmin = suflvl;
  if( prelvl > 0 ){
   slvlmax = prelvl *2 +1;
  }else{
   if( suflvl > 0 ){
    slvlmax = suflvl *2 +1;
   }else{
    slvlmax = suflvl;
   }
  }
 }

 if( (SelSuff > 95)||(slvlmax >= 50) ){
  slvlmax = 60;
 }

 if( SelBasee > 69 ){
  slvlmin = uniq[SelBasee-70].minlvl;
  slvlmax = uniq[SelBasee-70].maxlvl;
 }

 if( (slvlmin == slvlmax)||(slvlmin == 0) ){
  slvldsp = slvlmin;
 }else{
  slvldsp = slvlmin + " - " + slvlmax;
 }

 //-- Prefix Data ---------------
 if( SelPref == 0 ){
  dsppref = "";
  dsp2pref = "";
  prefefc = "";
 }else{
  if( SelBasee == 0 ){
   dsppref = "";
   prefefc = "";
  }else{
   dsppref = prefixx[SelPref].name +" ";
   prefefc = "    " + prefixx[SelPref].effect;
  }
  dsp2pref = prefixx[SelPref].name + "\n    " +prefixx[SelPref].effect + "    " + prefixx[SelPref].equip.str + "\n    qlvl: " + prefixx[SelPref].level;
  dsp2pref += "    Multiplier: " + premulti +"    Base-Max: " + preaddmin +" - " + preaddmax + "\n\n";
 }

 //-- Suffix Data ---------------
 if( SelSuff == 0 ){
  dspsuff = "";
  dsp2suff = "";
  suffefc = "";
 }else{
  if( SelBasee == 0 ){
   dspsuff = "";
   suffefc = "";
  }else{
   dspsuff = " of " + suffixx[SelSuff].name;
   suffefc = "    " + suffixx[SelSuff].effect;
  }
  dsp2suff = suffixx[SelSuff].name + "\n    " + suffixx[SelSuff].effect +"    " + suffixx[SelSuff].equip.str + "\n    qlvl: " + suffixx[SelSuff].level;
  dsp2suff += "    Multiplier: " + sufmulti + "    Base-Max: " + sufaddmin + " - " + sufaddmax + "\n\n";
 }

 //-- Item Data -----------------
 if( SelBasee == 0 ){
  dspbase = "";
  dsp2base = "";
  baseefc = "";
  totalefc = "";
  pricemin = basee[SelBasee].price;
  pricemax = basee[SelBasee].price;
 }else{
  if( SelPref + SelSuff == 0 ){
   totalefc = "\n";
   dsp2base = "";
   pricemin = basee[SelBasee].price;
   pricemax = basee[SelBasee].price;
   if( SelBasee > 69 ){
    dspbase = basee[SelBasee].name + " (" + uniq[SelBasee-70].basee + ")";
    dspbase += "\n    " + basee[SelBasee].effect + "\n    G/A Price:  " + basee[SelBasee].price +"    Source Level:  " + slvldsp + "    Base qlvl:  " + baslvl;
    baseefc = "\n\n    " + uniq[SelBasee-70].effect +"\n";
   }else{
    dspbase = basee[SelBasee].name + "\n    " +basee[SelBasee].effect + "\n    G/A Price:  " +basee[SelBasee].price + "    qlvl:  " + basee[SelBasee].level;
    baseefc = "";
   }
  }else{
   tmpbase = dsppref + basee[SelBasee].name + dspsuff;
   if( tmpbase.length > 16 ){
    dspbase = basee[SelBasee].kind.name;
   }else{
    dspbase = basee[SelBasee].name;
   }
   baseefc = "\n    " + basee[SelBasee].effect + "\n";
   if( SelSuff > 95 ){
    pricemin = multi_sign * Math.floor( (basee[SelBasee].price + sufaddmin) * psmulti ) + preaddmin;
    pricemax = multi_sign * Math.floor( (basee[SelBasee].price + sufaddmax) * psmulti ) + preaddmax;
   }else{
    pricemin = multi_sign * Math.floor( basee[SelBasee].price * psmulti ) + preaddmin + sufaddmin;
    pricemax = multi_sign * Math.floor( basee[SelBasee].price * psmulti ) + preaddmax + sufaddmax;
   }
   dsp2base = basee[SelBasee].name + "\n    qlvl: " + basee[SelBasee].level + "    " + basee[SelBasee].effect + "    G/A Price:  " +basee[SelBasee].price;
   totalefc = "\n\n    G/A Price: " + pricemin + " - " + pricemax + "    Source Level: " + slvldsp + "    Base qlvl:  " + basee[SelBasee].level + "\n";
  }
 }


 //-- Minus Item Check ------
 if( (premulti < 0)||(sufmulti < 0)||(SelSuff == 94)||(SelPref == 57) ){
  minusitem = true;
 }


 //-- Griswold ----------
 if( (SelBasee < 63)&&(SelBasee > 0)&&(slvlmin <= 30)&&(pricemin <= 140000)&&(minusitem == false) ){
  if( SelPref + SelSuff == 0 ){
    clvl_min = baslvl;
   if( baslvl > 16 ){
    clvl_max = -1;
   }else{
    if( clvl_min <= 6 ){
     clvl_min = 1;
    }else{
     clvl_min = (clvl_min-2)*2;
    }
    clvl_max = 50;
   }
  }else{
   clvl_min = slvlmin;
   clvl_max = slvlmax;

   if( clvl_min < baslvl ){
    clvl_min = baslvl;
   }
   if( clvl_max > baslvl *4 +3 ){
    clvl_max = baslvl *4 +3;
   }
   if( clvl_max < clvl_min ){
    clvl_max = -1;
   }

   clvl_min = clvl_min -2;
   clvl_max = clvl_max +1;

   if( clvl_min < 1 ){
    clvl_min = 1;
   }
   if( clvl_max > 30 ){
    clvl_max = 50;
   }
  }

  if( clvl_min <= clvl_max ){
   if( clvl_min < clvl_max ){
    clvl_dsp = clvl_min + " - " + clvl_max;
   }else{
    clvl_dsp = clvl_max;
   }
   grisdsp = "\n    Griswold     Char Level: " + clvl_dsp;
  }
 }

 //-- Wirt --------------
 if( (SelBasee < 63)&&(SelBasee > 0)&&(SelPref + SelSuff > 0)&&(pricemin <= 90000)&&(minusitem == false) ){
  clvl_min = Math.ceil(slvlmin *0.5);
  clvl_max = Math.floor(slvlmax *0.5);

  if( clvl_min < baslvl ){
   clvl_min = baslvl;
  }

  if( clvl_max >= 30 ){
   clvl_max = 50;
  }

  if( clvl_min <= clvl_max ){
   if( clvl_min < clvl_max ){
    clvl_dsp = clvl_min + " - " + clvl_max;
   }else{
    clvl_dsp = clvl_max;
   }
   wirtdsp = "\n    Wirt         Char Level: " + clvl_dsp;
  }
 }

 //-- Adria -------------
 if( (SelBasee > 62)&&(SelBasee < 68)&&(SelPref + SelSuff > 0)&&(slvlmin <= 32)&&(pricemin <= 140000)&&(minusitem == false) ){
  if( slvlmin > 4 ){
   clvl_min = slvlmin -4;
  }else{
   clvl_min = 1;
  }

  if( slvlmax < 12 ){
   clvl_max = 0;
  }else{
   clvl_max = slvlmax -4;
  }

  if( (SelSuff > 95)&&(suflvl > baslvl) ){
   baslvl = suflvl;
  }

  if( clvl_min +4 < baslvl *2 ){
   clvl_min = baslvl *2 -4;
  }

  if( clvl_min < 9 ){
   clvl_min = 1;
  }

  if( clvl_max > 28 ){
   clvl_max = 50;
  }

  if( clvl_min <= clvl_max ){
   if( clvl_min < clvl_max ){
    clvl_dsp = clvl_min + " - " + clvl_max;
   }else{
    clvl_dsp = clvl_max;
   }
   adradsp = "\n    Adria        Char Level: " + clvl_dsp;
  }
 }

 //-- Dungeon -----------
 if( (SelBasee > 0)&&(slvlmin <= 34) ){
  if( baslvl < 16 ){
   mbaslvl = 1;
  }else{
   mbaslvl = baslvl -15;
  }
  hbaslvl = 1;

  //-- Normal ------
  if( (SelPref + SelSuff == 0)&&(SelBasee < 70) ){
   clvl_min = baslvl;
   clvl_max = 34;
  }else{
   clvl_min = slvlmin;
   clvl_max = slvlmax;
   if( clvl_min < baslvl ){
    clvl_min = baslvl;
   }
   if( clvl_max > 34 ){
    clvl_max = 34;
   }
  }

  if( clvl_min <= clvl_max ){
   if( clvl_min < clvl_max ){
    clvl_dsp = clvl_min + " - " + clvl_max;
   }else{
    clvl_dsp = clvl_max;
   }
   normdsp = "\n    Normal     Source Level: " + clvl_dsp;
  }


  //-- Nightmare ---
  if( (SelPref + SelSuff == 0)&&(SelBasee < 70) ){
   clvl_min = mbaslvl;
   clvl_max = 34;
  }else{
   clvl_min = slvlmin;
   clvl_max = slvlmax;
   if( clvl_min < mbaslvl ){
    clvl_min = mbaslvl;
   }
   if( clvl_max > 34 ){
    clvl_max = 34;
   }
  }

  if( clvl_min <= clvl_max ){
   if( clvl_min < clvl_max ){
    clvl_dsp = clvl_min + " - " + clvl_max;
   }else{
    clvl_dsp = clvl_max;
   }
   maredsp = "\n    Nightmare  Source Level: " + clvl_dsp;
  }

  //-- Hell --------
  if( (SelPref + SelSuff == 0)&&(SelBasee < 70) ){
   clvl_min = hbaslvl;
   clvl_max = 34;
  }else{
   clvl_min = slvlmin;
   clvl_max = slvlmax;
   if( clvl_min < hbaslvl ){
    clvl_min = hbaslvl;
   }
   if( clvl_max > 34 ){
    clvl_max = 34;
   }
  }

  if( clvl_min <= clvl_max ){
   if( clvl_min < clvl_max ){
    clvl_dsp = clvl_min + " - " + clvl_max;
   }else{
    clvl_dsp = clvl_max;
   }
   helldsp = "\n    Hell       Source Level: " + clvl_dsp;
  }
 }



 if( SelBasee > 69 ){
  theForm.display1.value	= dsppref + dspbase + dspsuff + baseefc;
 }else{
  theForm.display1.value	= dsppref + dspbase + dspsuff + baseefc + prefefc + suffefc + totalefc;
 }
 theForm.display1.value  += grisdsp + wirtdsp + adradsp + normdsp + maredsp + helldsp;
 theForm.display2.value = dsp2pref + dsp2suff + dsp2base;
 dsp3 = "";

 if( SelSuff == 64 ){
  sufmin = -sufmin;
  nstep = -1;
 }else{
  nstep = 1;
 }

 if( SelBasee && (theForm.calcprice.selectedIndex == 1) && (SelPref + SelSuff) ){ 

   if( prerange == 0 ){
	if( sufmin > 0 ){
		sufsign = "+";
	}else{
		sufsign = "";
	}

	if( sufrange ){
		if( SelSuff <= 95 ){
			psmulti = 1;
		}

		dsp3 = dsp3 + suffixx[SelSuff].name;
		for( j = 0 , n = sufmin ; j <= sufstep ; j++ , n += nstep ){
			if( j%5 == 0 ){
				dsp3 += "\n";
			}
			price = pricemin + multi_sign * Math.floor( sufrange * (Math.floor( j*100/sufstep )/100) * psmulti );
			dsp3 += "   " + sufsign + n + " : " + price;
		}
	}

   }else{

	if( premin > 0 ){
		presign = "+";
	}else{
		presign = "";
	}

	if( sufrange ){
		if( sufmin > 0 ){
			sufsign = "+";
		}else{
			sufsign = "";
		}

		if( SelSuff <= 95 ){
			psmulti = 1;
		}

		priceminbase = pricemin;
		for( i = 0 , m = premin ; i <= prestep ; i++ , m++ ){
			dsp3 += prefixx[SelPref].name + "   " + presign + m +"     ";
			pricemin = priceminbase + Math.floor( prerange * (Math.floor( i*100/prestep )/100) );
			dsp3 += suffixx[SelSuff].name;
			for( j = 0 , n = sufmin ; j <= sufstep ; j++ , n += nstep ){
				if( j%5 == 0 ){
					dsp3 += "\n";
				}
				price = pricemin + multi_sign * Math.floor( sufrange * (Math.floor( j*100/sufstep )/100) * psmulti );
				dsp3 += "   " + sufsign + n + " : " + price;
			}
			dsp3 += "\n\n";
		}

	}else{
		dsp3 += prefixx[SelPref].name;
		for( i = 0 , m = premin ; i <= prestep ; i++ , m++ ){
			if( i%5 == 0 ){
				dsp3 += "\n";
			}
			price = pricemin + Math.floor( prerange * (Math.floor( i*100/prestep )/100) );
			dsp3 += "   " + presign + m + " : " + price;
		}
	}

   }

 }

 theForm.display3.value = dsp3;


}


//== define array =======================================
var premax = 83;
var sufmax = 121;
var basmaxx = 146;
var unqmax = 76;

var prefixx = new MakeArray(premax+1);
var suffixx = new MakeArray(sufmax+1);
var basee   = new MakeArray(basmaxx+1);
var uniq   = new MakeArray(unqmax+1);

var prelst = new MakeArray(premax+1);
var suflst = new MakeArray(sufmax+1);
var baslst = new MakeArray(basmaxx+1);


var i,j;


for(i = 0 ; i <= premax ; i++){
 prelst[i] = i;
}
for(i = 0 ; i <= sufmax ; i++){
 suflst[i] = i;
}
for(i = 0 ; i <= basmaxx ; i++){
 baslst[i] = i;
}


//== define premium effect ==============================
//-- PREFIX ---------
//			    "NAME",		"effect",	 		     Level,	equip_flag,	     multi,addmin,addmax,min,step);
prefixx[0] = new MakePremium("--- None ---",	" - ",					 0,	new GetEquip(0x00)	,0,    0,    0,	0,	0);

prefixx[1] = new MakePremium("White",		"Resist Magic: +10% - +20%",		 4,	new GetEquip(0x3F)	,2,  500, 1500,	10,	10);
prefixx[2] = new MakePremium("Pearl",		"Resist Magic: +21% - +30%",		10,	new GetEquip(0x3F)	,2, 2100, 3000,	21,	9);
prefixx[3] = new MakePremium("Ivory",		"Resist Magic: +31% - +40%",		16,	new GetEquip(0x3F)	,2, 3100, 4000,	31,	9);
prefixx[4] = new MakePremium("Crystal",		"Resist Magic: +41% - +50%",		20,	new GetEquip(0x3F)	,3, 8200,12000,	41,	9);
prefixx[5] = new MakePremium("Diamond",		"Resist Magic: +51% - +60%",		26,	new GetEquip(0x3F)	,5,17100,20000,	51,	9);

prefixx[6] = new MakePremium("Red",		"Resist Fire: +10% - +20%",		 4,	new GetEquip(0x3F)	,2,  500, 1500,	10,	10);
prefixx[7] = new MakePremium("Crimson",		"Resist Fire: +21% - +30%",		10,	new GetEquip(0x3F)	,2, 2100, 3000,	21,	9);
prefixx[8] = new MakePremium("Crimson",		"Resist Fire: +31% - +40%",		16,	new GetEquip(0x3F)	,2, 3100, 4000,	31,	9);
prefixx[9] = new MakePremium("Garnet",		"Resist Fire: +41% - +50%",		20,	new GetEquip(0x3F)	,3, 8200,12000,	41,	9);
prefixx[10] = new MakePremium("Ruby",		"Resist Fire: +51% - +60%",		26,	new GetEquip(0x3F)	,5,17100,20000,	51,	9);

prefixx[11] = new MakePremium("Blue",		"Resist Lightning: +10% - +20%",	 4,	new GetEquip(0x3F)	,2,  500, 1500,	10,	10);
prefixx[12] = new MakePremium("Azure",		"Resist Lightning: +21% - +30%",	10,	new GetEquip(0x3F)	,2, 2100, 3000,	21,	9);
prefixx[13] = new MakePremium("Lapis",		"Resist Lightning: +31% - +40%",	16,	new GetEquip(0x3F)	,2, 3100, 4000,	31,	9);
prefixx[14] = new MakePremium("Cobalt",		"Resist Lightning: +41% - +50%",	20,	new GetEquip(0x3F)	,3, 8200,12000,	41,	9);
prefixx[15] = new MakePremium("Sapphire",	"Resist Lightning: +51% - +60%",	26,	new GetEquip(0x3F)	,5,17100,20000,	51,	9);

prefixx[16] = new MakePremium("Topaz",		"Resist All: +10% - +15%",		 8,	new GetEquip(0x3F)	,3, 2000, 5000,	10,	5);
prefixx[17] = new MakePremium("Amber",		"Resist All: +16% - +20%",		12,	new GetEquip(0x3F)	,3, 7400,10000,	16,	4);
prefixx[18] = new MakePremium("Jade",		"Resist All: +21% - +30%",		18,	new GetEquip(0x3F)	,3,11000,15000,	21,	9);
prefixx[19] = new MakePremium("Obsidian",	"Resist All: +31% - +40%",		24,	new GetEquip(0x3F)	,4,24000,40000,	31,	9);
prefixx[20] = new MakePremium("Emerald",		"Resist All: +41% - +50%",		31,	new GetEquip(0x3A)	,7,61000,75000,	41,	9);

prefixx[21] = new MakePremium("Hyena's",		"Mana: -25 - -11",			 4,	new GetEquip(0x09)	,-2,  100, 1000, -25,	14);
prefixx[22] = new MakePremium("Frog's",		"Mana: -10 - -1",			 1,	new GetEquip(0x09)	,-2,    0,    0, -10,	9);
prefixx[23] = new MakePremium("Spider's",	"Mana: +10 - +15",			 1,	new GetEquip(0x09)	, 2,  500, 1000, 10,	5);
prefixx[24] = new MakePremium("Raven's",		"Mana: +16 - +20",			 5,	new GetEquip(0x09)	, 3, 1100, 2000, 16,	4);
prefixx[25] = new MakePremium("Snake's",		"Mana: +21 - +30",			 9,	new GetEquip(0x09)	, 5, 2100, 4000, 21,	9);
prefixx[26] = new MakePremium("Serpent's",	"Mana: +30 - +40",			15,	new GetEquip(0x09)	, 7, 4100, 6000, 30,	10);
prefixx[27] = new MakePremium("Drake's",		"Mana: +41 - +50",			21,	new GetEquip(0x09)	, 9, 6100,10000, 41,	9);
prefixx[28] = new MakePremium("Dragon's",	"Mana: +51 - +60",			27,	new GetEquip(0x09)	,11,10100,15000, 51,	9);
prefixx[29] = new MakePremium("Wyrm's",		"Mana: +61 - +80",			35,	new GetEquip(0x08)	,12,15100,19000, 61,	19);
prefixx[30] = new MakePremium("Hydra's",		"Mana: +81 - +100",			60,	new GetEquip(0x08)	,13,19100,30000, 81,	19);

prefixx[31] = new MakePremium("Tin",		"Chance to Hit: -10% - -6%",		 3,	new GetEquip(0x31)	,-3,    0,    0, -10,	4);
prefixx[32] = new MakePremium("Brass",		"Chance to Hit: -5% - -1%",		 1,	new GetEquip(0x31)	,-2,    0,    0, -5,	4);
prefixx[33] = new MakePremium("Bronze",		"Chance to Hit: +1% - +5%",		 1,	new GetEquip(0x31)	, 2,  100,  500, 1,	4);
prefixx[34] = new MakePremium("Iron",		"Chance to Hit: +6% - +10%",		 4,	new GetEquip(0x31)	, 3,  600, 1000, 6,	4);
prefixx[35] = new MakePremium("Steel",		"Chance to Hit: +11% - +15%",		 6,	new GetEquip(0x31)	, 5, 1100, 1500, 11,	4);
prefixx[36] = new MakePremium("Silver",		"Chance to Hit: +16% - +20%",		 9,	new GetEquip(0x31)	, 7, 1600, 2000, 16,	4);
prefixx[37] = new MakePremium("Gold",		"Chance to Hit: +21% - +30%",		12,	new GetEquip(0x31)	, 9, 2100, 3000, 21,	9);
prefixx[38] = new MakePremium("Platinum",	"Chance to Hit: +31% - +40%",		16,	new GetEquip(0x30)	,11, 3100, 4000, 31,	9);
prefixx[39] = new MakePremium("Mithril",		"Chance to Hit: +41% - +60%",		20,	new GetEquip(0x30)	,13, 4100, 6000, 41,	9);
prefixx[40] = new MakePremium("Meteoric",	"Chance to Hit: +61% - +80%",		23,	new GetEquip(0x30)	,15, 6100,10000, 61,	19);
prefixx[41] = new MakePremium("Weird",		"Chance to Hit: +81% - +100%",		35,	new GetEquip(0x30)	,17,10100,14000, 81,	19);
prefixx[42] = new MakePremium("Strange",		"Chance to Hit: +101% - +150%",		60,	new GetEquip(0x30)	,20,14100,20000, 101,	49);

prefixx[43] = new MakePremium("Useless",		"Damage: -100%",				 5,	new GetEquip(0x30)	,-8,    0,    0, -100,	0);
prefixx[44] = new MakePremium("Bent",		"Damage: -75% - -50%",		 3,	new GetEquip(0x30)	,-4,    0,    0, -75,	25);
prefixx[45] = new MakePremium("Weak",		"Damage: -45% - -25%",		 1,	new GetEquip(0x30)	,-3,    0,    0, -45,	20);
prefixx[46] = new MakePremium("Jagged",		"Damage: +20% - +35%",		 4,	new GetEquip(0x30)	, 3,  250,  450, 20,	15);
prefixx[47] = new MakePremium("Deadly",		"Damage: +36% - +50%",		 6,	new GetEquip(0x30)	, 4,  500,  700, 36,	14);
prefixx[48] = new MakePremium("Heavy",		"Damage: +51% - +65%",		 9,	new GetEquip(0x30)	, 5,  750,  950, 51,	14);
prefixx[49] = new MakePremium("Vicious",		"Damage: +66% - +80%",		12,	new GetEquip(0x30)	, 8, 1000, 1450, 66,	14);
prefixx[50] = new MakePremium("Brutal",		"Damage: +81% - +95%",		16,	new GetEquip(0x30)	,10, 1500, 1950, 81,	14);
prefixx[51] = new MakePremium("Massive",		"Damage: +96% - +110%",		20,	new GetEquip(0x30)	,13, 2000, 2450, 96,	14);
prefixx[52] = new MakePremium("Savage",		"Damage: +111% - +125%",		23,	new GetEquip(0x30)	,15, 2500, 3000, 111,	14);
prefixx[53] = new MakePremium("Ruthless",	"Damage: +126% - +150%",		35,	new GetEquip(0x30)	,17,10100,15000, 126,	24);
prefixx[54] = new MakePremium("Merciless",	"Damage: +151% - +175%",		60,	new GetEquip(0x30)	,20,15200,20000, 151,	24);

prefixx[55] = new MakePremium("Clumsy",		"Damage: -75% - -50%   to Hit: -10% - -6%", 5,new GetEquip(0x38)	,-7,    0,    0, -75,	25);
prefixx[56] = new MakePremium("Dull",		"Damage: -45% - -25%   to Hit: -5% - -1%", 1,new GetEquip(0x38)	,-5,    0,    0, -45,	20);
prefixx[57] = new MakePremium("Sharp",		"Damage: +20% - +35%   to Hit: +1% - +5%", 1,new GetEquip(0x38)	, 5,  350,  950, 20,	15);
prefixx[58] = new MakePremium("Fine",		"Damage: +36% - +50%   to Hit: +6% - +10%", 6,new GetEquip(0x38)	, 7, 1100, 1700, 36,	14);
prefixx[59] = new MakePremium("Warrior's",	"Damage: +51% - +65%   to Hit: +11% - +15%",10,new GetEquip(0x38)	,13, 1850, 2450, 51,	14);
prefixx[60] = new MakePremium("Soldier's",	"Damage: +66% - +80%   to Hit: +16% - +20%",15,new GetEquip(0x28)	,17, 2600, 3950, 66,	14);
prefixx[61] = new MakePremium("Lord's",		"Damage: +81% - +95%   to Hit: +21% - +30%",19,new GetEquip(0x28)	,21, 4100, 5950, 81,	14);
prefixx[62] = new MakePremium("Knight's",	"Damage: +96% - +110%   to Hit: +31% - +40%",23,new GetEquip(0x28)	,26, 6100, 8450, 96,	14);
prefixx[63] = new MakePremium("Master's",	"Damage: +111% - +125%   to Hit: +41% - +50%",28,new GetEquip(0x28)	,30, 8600,13000, 111,	14);
prefixx[64] = new MakePremium("Champion's",	"Damage: +126% - +150%   to Hit: +51% - +75%",40,new GetEquip(0x28)	,33,15200,24000, 126,	24);
prefixx[65] = new MakePremium("King's",		"Damage: +151% - +175%   to Hit: +76% - +100%",28,new GetEquip(0x28)	,38,24100,35000, 151,	24);

prefixx[66] = new MakePremium("Vulnerable",	"Armor Class: -100% - -51%",		 3,	new GetEquip(0x06)	,-3,    0,    0, -100,	49);
prefixx[67] = new MakePremium("Rusted",		"Armor Class: -50% - -25%",		 1,	new GetEquip(0x06)	,-2,    0,    0, -50,	25);
prefixx[68] = new MakePremium("Fine",		"Armor Class: +20% - +30%",		 1,	new GetEquip(0x06)	, 2,   20,  110, 20,	10);
prefixx[69] = new MakePremium("Strong",		"Armor Class: +31% - +40%",		 3,	new GetEquip(0x06)	, 3,  120,  200, 31,	9);
prefixx[70] = new MakePremium("Grand",		"Armor Class: +41% - +55%",		 6,	new GetEquip(0x06)	, 5,  220,  300, 41,	14);
prefixx[71] = new MakePremium("Valiant",		"Armor Class: +56% - +70%",		10,	new GetEquip(0x06)	, 7,  320,  400, 56,	14);
prefixx[72] = new MakePremium("Glorious",	"Armor Class: +71% - +90%",		14,	new GetEquip(0x06)	, 9,  420,  600, 71,	19);
prefixx[73] = new MakePremium("Blessed",		"Armor Class: +91% - +110%",		19,	new GetEquip(0x06)	,11,  620,  800, 91,	19);
prefixx[74] = new MakePremium("Saintly",		"Armor Class: +111% - +130%",		24,	new GetEquip(0x06)	,13,  820, 1200, 111,	19);
prefixx[75] = new MakePremium("Awesome",		"Armor Class: +131% - +150%",		28,	new GetEquip(0x06)	,15, 1220, 2000, 131,	19);
prefixx[76] = new MakePremium("Holy",		"Armor Class: +151% - +170%",		35,	new GetEquip(0x06)	,17, 5200, 6000, 151,	19);
prefixx[77] = new MakePremium("Godly",		"Armor Class: +171% - +200%",		60,	new GetEquip(0x06)	,20, 6200, 7000, 171,	29);

prefixx[78] = new MakePremium("Flaming",		"Fire Hit Damage: 1 - 10",			 7,	new GetEquip(0x28)	,2, 5000, 5000,	10,	0);
prefixx[79] = new MakePremium("Lightning",	"Lightning Hit Damage: 2 - 20",		18,	new GetEquip(0x28)	,2,10000,10000,	20,	0);

prefixx[80] = new MakePremium("Angel's",		"All Spell Level +1 ",			15,	new GetEquip(0x08)	,2,25000,25000,	1,	0);
prefixx[81] = new MakePremium("Arch-Angel's",	"All Spell Level +2 ",			25,	new GetEquip(0x08)	,3,50000,50000,	2,	0);

prefixx[82] = new MakePremium("Plentiful",	"Extra Magic Charges x2 ",		 4,	new GetEquip(0x08)	,2, 2000, 2000,	2,	0);
prefixx[83] = new MakePremium("Bountiful",	"Extra Magic Charges x3 ",		 9,	new GetEquip(0x08)	,3, 3000, 3000,	3,	0);


//-- SUFFIX ---------
//			    "NAME",		"effect",			      Level,	equip_flag,	     multi,addmin,addmax
suffixx[0] = new MakePremium("----- None -----",	" - ",					 0,	new GetEquip(0x00)	, 0,    0,    0, 0,	0);

suffixx[1] = new MakePremium("Frailty",		"Strength: -10 - -6",			 3,	new GetEquip(0x37)	,-3,    0,    0, -10,	4);
suffixx[2] = new MakePremium("Weakness",		"Strength: -5 - -1",			 1,	new GetEquip(0x37)	,-2,    0,    0, -5,	4);
suffixx[3] = new MakePremium("Strength",		"Strength: +1 - +5",			 1,	new GetEquip(0x37)	, 2,  200, 1000, 1,	4);
suffixx[4] = new MakePremium("Might",		"Strength: +6 - +10",			 5,	new GetEquip(0x37)	, 3, 1200, 2000, 6,	4);
suffixx[5] = new MakePremium("Power",		"Strength: +11 - +15",			11,	new GetEquip(0x37)	, 4, 2200, 3000, 11,	4);
suffixx[6] = new MakePremium("Giants",		"Strength: +16 - +20",			17,	new GetEquip(0x35)	, 7, 3200, 5000, 16,	4);
suffixx[7] = new MakePremium("Titans",		"Strength: +21 - +30",			23,	new GetEquip(0x21)	,10, 5200,10000, 21,	9);

suffixx[8] = new MakePremium("the Fool",		"Magic: -10 - -6",			 3,	new GetEquip(0x3F)	,-3,    0,    0, -10,	4);
suffixx[9] = new MakePremium("Dyslexia",		"Magic: -5 - -1",			 1,	new GetEquip(0x3F)	,-2,    0,    0, -5,	4);
suffixx[10] = new MakePremium("Magic",		"Magic: +1 - +5",			 1,	new GetEquip(0x3F)	, 2,  200, 1000, 1,	4);
suffixx[11] = new MakePremium("the Mind",	"Magic: +6 - +10",			 5,	new GetEquip(0x3F)	, 3, 1200, 2000, 6,	4);
suffixx[12] = new MakePremium("Brilliance",	"Magic: +11 - +15",			11,	new GetEquip(0x3F)	, 4, 2200, 3000, 11,	4);
suffixx[13] = new MakePremium("Sorcery",		"Magic: +16 - +20",			17,	new GetEquip(0x3D)	, 7, 3200, 5000, 16,	4);
suffixx[14] = new MakePremium("Wizardry",	"Magic: +21 - +30",			23,	new GetEquip(0x09)	,10, 5200,10000, 21,	9);

suffixx[15] = new MakePremium("Paralysis",	"Dexterity: -10 - -6",			 3,	new GetEquip(0x37)	,-3,    0,    0, -10,	4);
suffixx[16] = new MakePremium("Atrophy",		"Dexterity: -5 - -1",			 1,	new GetEquip(0x37)	,-2,    0,    0, -5,	4);
suffixx[17] = new MakePremium("Dexterity",	"Dexterity: +1 - +5",			 1,	new GetEquip(0x37)	, 2,  200, 1000, 1,	4);
suffixx[18] = new MakePremium("Skill",		"Dexterity: +6 - +10",			 5,	new GetEquip(0x37)	, 3, 1200, 2000, 6,	4);
suffixx[19] = new MakePremium("Accuracy",	"Dexterity: +11 - +15",			11,	new GetEquip(0x37)	, 4, 2200, 3000, 11,	4);
suffixx[20] = new MakePremium("Precision",	"Dexterity: +16 - +20",			17,	new GetEquip(0x35)	, 7, 3200, 5000, 16,	4);
suffixx[21] = new MakePremium("Perfection",	"Dexterity: +21 - +30",			23,	new GetEquip(0x11)	,10, 5200,10000, 21,	9);

suffixx[22] = new MakePremium("Illness",		"Vitality: -10 - -6",			 3,	new GetEquip(0x37)	,-3,    0,    0, -10,	4);
suffixx[23] = new MakePremium("Disease",		"Vitality: -5 - -1",			 1,	new GetEquip(0x37)	,-2,    0,    0, -5,	4);
suffixx[24] = new MakePremium("Vitality",	"Vitality: +1 - +5",			 1,	new GetEquip(0x37)	, 2,  200, 1000, 1,	4);
suffixx[25] = new MakePremium("Zest",		"Vitality: +6 - +10",			 5,	new GetEquip(0x37)	, 3, 1200, 2000, 6,	4);
suffixx[26] = new MakePremium("Vim",         "Vitality: +11 - +15",			11,	new GetEquip(0x37)	, 4, 2200, 3000, 11,	4);
suffixx[27] = new MakePremium("Vigor",		"Vitality: +16 - +20",			17,	new GetEquip(0x35)	, 7, 3200, 5000, 16,	4);
suffixx[28] = new MakePremium("Life",		"Vitality: +21 - +30",			23,	new GetEquip(0x01)	,10, 5200,10000, 21,	9);

suffixx[29] = new MakePremium("Trouble",		"All Attributes: -10 - -6",		12,	new GetEquip(0x37)	,-10,    0,    0, -10,	4);
suffixx[30] = new MakePremium("the Pit",		"All Attributes: -5 - -1",		 5,	new GetEquip(0x37)	, -5,    0,    0, -5,	4);
suffixx[31] = new MakePremium("the Sky",		"All Attributes: +1 - +3",		 5,	new GetEquip(0x37)	,  5,  800, 4000, 1,	2);
suffixx[32] = new MakePremium("the Moon",	"All Attributes: +4 - +7",		11,	new GetEquip(0x37)	, 10, 4800, 8000, 4,	3);
suffixx[33] = new MakePremium("the Stars",	"All Attributes: +8 - +11",		17,	new GetEquip(0x35)	, 15, 8800,12000, 8,	3);
suffixx[34] = new MakePremium("the Heavens",	"All Attributes: +12 - +15",		25,	new GetEquip(0x31)	, 20,12800,20000, 12,	3);
suffixx[35] = new MakePremium("the Zodiac",	"All Attributes: +16 - +20",		30,	new GetEquip(0x01)	, 30,20800,40000, 16,	4);

suffixx[36] = new MakePremium("the Vulture",	"Life: -25 - -11",			 4,	new GetEquip(0x07)	,-4,    0,    0, -25,	14);
suffixx[37] = new MakePremium("the Jackal",	"Life: -10 - -1",			 1,	new GetEquip(0x07)	,-2,    0,    0, -10,	9);
suffixx[38] = new MakePremium("the Fox",		"Life: +10 - +15",			 1,	new GetEquip(0x07)	, 2,  100, 1000, 10,	5);
suffixx[39] = new MakePremium("the Jaguar",	"Life: +16 - +20",			 5,	new GetEquip(0x07)	, 3, 1100, 2000, 16,	4);
suffixx[40] = new MakePremium("the Eagle",	"Life: +21 - +30",			 9,	new GetEquip(0x07)	, 5, 2100, 4000, 21,	9);
suffixx[41] = new MakePremium("the Wolf",	"Life: +30 - +40",			15,	new GetEquip(0x07)	, 7, 4100, 6000, 30,	10);
suffixx[42] = new MakePremium("the Tiger",	"Life: +41 - +50",			21,	new GetEquip(0x07)	, 9, 6100,10000, 41,	9);
suffixx[43] = new MakePremium("the Lion",	"Life: +51 - +60",			27,	new GetEquip(0x05)	,11,10100,15000, 51,	9);
suffixx[44] = new MakePremium("the Mammoth",	"Life: +61 - +80",			35,	new GetEquip(0x04)	,12,15100,19000, 61,	19);
suffixx[45] = new MakePremium("the Whale",	"Life: +81 - +100",			60,	new GetEquip(0x04)	,13,19100,30000, 81,	19);

suffixx[46] = new MakePremium("Flame",		"Fire Arrow Damage: 1 - 3",		 1,	new GetEquip(0x10)	,2, 2000, 2000,	3,	0);
suffixx[47] = new MakePremium("Fire",		"Fire Arrow Damage: 1 - 6",		11,	new GetEquip(0x10)	,4, 4000, 4000,	6,	0);
suffixx[48] = new MakePremium("Burning",		"Fire Arrow Damage: 1 - 16",		35,	new GetEquip(0x10)	,6, 6000, 6000,	16,	0);

suffixx[49] = new MakePremium("Shock",		"Lightning Arrow Damage: 1 - 6",		13,	new GetEquip(0x10)	,2, 6000, 6000,	6,	0);
suffixx[50] = new MakePremium("Lightning",	"Lightning Arrow Damage: 1 - 10",		21,	new GetEquip(0x10)	,4, 8000, 8000,	10,	0);
suffixx[51] = new MakePremium("Thunder",		"Lightning Arrow Damage: 1 - 20",		60,	new GetEquip(0x10)	,6,12000,12000,	20,	0);

suffixx[52] = new MakePremium("Quality",		"Add to Damage: +1 - +2",		 2,	new GetEquip(0x30)	, 2,  100,  200, 1,	1);
suffixx[53] = new MakePremium("Maiming",		"Add to Damage: +3 - +5",		 7,	new GetEquip(0x30)	, 3, 1300, 1500, 3,	2);
suffixx[54] = new MakePremium("Slaying",		"Add to Damage: +6 - +8",		15,	new GetEquip(0x20)	, 5, 2600, 3000, 6,	2);
suffixx[55] = new MakePremium("Gore",		"Add to Damage: +9 - +12",		25,	new GetEquip(0x20)	, 8, 4100, 5000, 9,	3);
suffixx[56] = new MakePremium("Carnage",		"Add to Damage: +13 - +16",		35,	new GetEquip(0x20)	,10, 5100,10000, 13,	3);
suffixx[57] = new MakePremium("Slaughter",	"Add to Damage: +17 - +20",		60,	new GetEquip(0x20)	,13,10100,15000, 17,	3);

suffixx[58] = new MakePremium("Pain",		"Damage from Enemy :+4 - +2",		 4,	new GetEquip(0x07)	,-4,    0,    0, -4,	2);
suffixx[59] = new MakePremium("Tears",		"Damage from Enemy: +1",		 2,	new GetEquip(0x07)	,-2,    0,    0, -1,	0);
suffixx[60] = new MakePremium("Health",		"Damage from Enemy: -1",		 2,	new GetEquip(0x07)	, 2,  200,  200, 1,	0);
suffixx[61] = new MakePremium("Protection",	"Damage from Enemy: -2",		 6,	new GetEquip(0x06)	, 4,  400,  400, 2,	0);
suffixx[62] = new MakePremium("Absorption",	"Damage from Enemy: -3",		12,	new GetEquip(0x06)	,10, 1001, 1001, 3,	0);
suffixx[63] = new MakePremium("Deflection",	"Damage from Enemy: -4",		20,	new GetEquip(0x04)	,15, 2500, 2500, 4,	0);
suffixx[64] = new MakePremium("Osmosis",		"Damage from Enemy: -5 - -6",		50,	new GetEquip(0x04)	,20, 7500,10000, 5,	1);

suffixx[65] = new MakePremium("the Leech",	"Hit Steals  3 % Life",			 8,	new GetEquip(0x20)	,3, 7500, 7500,	3,	0);
suffixx[66] = new MakePremium("Blood",		"Hit Steals  5 % Life",			19,	new GetEquip(0x20)	,3,15000,15000,	5,	0);

suffixx[67] = new MakePremium("the Bat",		"Hit Steals  3 % Mana",			 8,	new GetEquip(0x20)	,3, 7500, 7500,	3,	0);
suffixx[68] = new MakePremium("Vampires",	"Hit Steals  5 % Mana",			19,	new GetEquip(0x20)	,3,15000,15000,	5,	0);

suffixx[69] = new MakePremium("Piercing",	"Damages Targets Armor: 2 - 6",		 1,	new GetEquip(0x30)	, 3, 1000, 1000, 2,	0);
suffixx[70] = new MakePremium("Puncturing",	"Damages Targets Armor: 4 - 12",		 9,	new GetEquip(0x30)	, 6, 2000, 2000, 4,	0);
suffixx[71] = new MakePremium("Bashing",		"Damages Targets Armor: 8 - 24",		17,	new GetEquip(0x20)	,12, 4000, 4000, 8,	0);

suffixx[72] = new MakePremium("the Dark",	"Light Radius: -40% ",			 6,	new GetEquip(0x25)	,-3,    0,    0, -40,	0);
suffixx[73] = new MakePremium("the Night",	"Light Radius: -20% ",			 3,	new GetEquip(0x25)	,-2,    0,    0, -20,	0);
suffixx[74] = new MakePremium("Light",		"Light Radius: +20% ",			 4,	new GetEquip(0x25)	, 2,  750,  750, 20,	0);
suffixx[75] = new MakePremium("Radiance",	"Light Radius: +40% ",			 8,	new GetEquip(0x25)	, 3, 1500, 1500, 40,	0);

suffixx[76] = new MakePremium("Fragility",	"Durability:  1",			 3,	new GetEquip(0x26)	,-4,    0,    0, 1,	0);
suffixx[77] = new MakePremium("Brittleness",	"Durability: -75% - -26%",		 1,	new GetEquip(0x26)	,-2,    0,    0, -75,	0);
suffixx[78] = new MakePremium("Sturdiness",	"Durability: +26% - +50%",		 1,	new GetEquip(0x26)	, 2,  100,  100, 26,	0);
suffixx[79] = new MakePremium("Craftsmanship",	"Durability: +51% - +100%",		 6,	new GetEquip(0x26)	, 2,  200,  200, 51,	0);
suffixx[80] = new MakePremium("Structure",	"Durability: +101% - +200%",		12,	new GetEquip(0x26)	, 2,  300,  300, 101,	0);
suffixx[81] = new MakePremium("the Ages",	"Indestructible",			25,	new GetEquip(0x26)	, 5,  600,  600, 255,	0);
suffixx[82] = new MakePremium("Many",		"Durability: +100%",			 3,	new GetEquip(0x10)	, 2,  750,  750, 100,	0);
suffixx[83] = new MakePremium("Plenty",		"Durability: +200%",			 7,	new GetEquip(0x10)	, 3, 1500, 1500, 200,	0);

suffixx[84] = new MakePremium("Readiness",	"Quick Attack",	 			 1,	new GetEquip(0x38)	, 2, 2000, 2000, 0,	0);
suffixx[85] = new MakePremium("Swiftness",	"Fast Attack",				10,	new GetEquip(0x38)	, 4, 4000, 4000, 0,	0);
suffixx[86] = new MakePremium("Speed",		"Faster Attack",			19,	new GetEquip(0x28)	, 8, 8000, 8000, 0,	0);
suffixx[87] = new MakePremium("Haste",		"Fastest Attack",			27,	new GetEquip(0x28)	,16,16000,16000, 0,	0);

suffixx[88] = new MakePremium("Balance",		"Fast Hit Recovery",			1,	new GetEquip(0x05)	,2, 2000, 2000,	0,	0);
suffixx[89] = new MakePremium("Stability",	"Faster Hit Recovery",			10,	new GetEquip(0x05)	,4, 4000, 4000,	0,	0);
suffixx[90] = new MakePremium("Harmony",		"Fastest Hit Recovery",			20,	new GetEquip(0x05)	,8, 8000, 8000,	0,	0);

suffixx[91] = new MakePremium("Blocking",	"Fast Block",				 5,	new GetEquip(0x02)	,4, 4000, 4000,	0,	0);

suffixx[92] = new MakePremium("Thieves",		"Absorbs Half of Trap Damage",		11,	new GetEquip(0x07)	,2, 1500, 1500,	0,	0);

suffixx[93] = new MakePremium("the Bear",	"Knocks Target Back",			 5,	new GetEquip(0x38)	,2,  750,  750,	0,	0);

suffixx[94] = new MakePremium("Corruption",	"User Loses All Mana",		 	 5,	new GetEquip(0x26)	,2,-1000,-1000,	0,	0);

suffixx[95] = new MakePremium("Thorns",		"Attacker Takes Damage: 1-3",		 1,	new GetEquip(0x06)	,2,  500,  500,	0,	0);


suffixx[96] = new MakePremium("Firebolt",	"Firebolt Charges: 40 - 80",		 1,	new GetEquip(0x08)	,0,  200,  400,	40,	40);
suffixx[97] = new MakePremium("Charged Bolt",	"Charged Bolt Charges: 40 - 80",	 1,	new GetEquip(0x08)	,0,  400,  800,	40,	40);
suffixx[98] = new MakePremium("Holy Bolt",	"Holy Bolt Charges: 40 - 80",		 1,	new GetEquip(0x08)	,0,  400,  800,	40,	40);
suffixx[99] = new MakePremium("Healing",		"Healing Charges: 20 - 40",		 1,	new GetEquip(0x08)	,0,  100,  200,	20,	20);
suffixx[100] = new MakePremium("Heal Other",	"Heal Other Charges: 20 - 40",		 1,	new GetEquip(0x08)	,0,  200,  400,	20,	20);
suffixx[101] = new MakePremium("Inferno",	"Inferno Charges: 20 - 40",		 2,	new GetEquip(0x08)	,0,  400,  800,	20,	20);
suffixx[102] = new MakePremium("Resurrect",	"Resurrect Charges:  4 - 10",		 5,	new GetEquip(0x08)	,0,  200,  500,	4,	6);
suffixx[103] = new MakePremium("Fire Wall",	"Fire Wall Charges:  8 - 16",		 2,	new GetEquip(0x08)	,0,  640,  960,	8,	8);
suffixx[104] = new MakePremium("Telekinesis",	"Telekinesis Charges: 20 - 40",		 2,	new GetEquip(0x08)	,0,  800, 1600,	20,	20);
suffixx[105] = new MakePremium("Lightning",	"Lightning Charges: 20 - 60",		 3,	new GetEquip(0x08)	,0,  600, 3600,	20,	40);
suffixx[106] = new MakePremium("Town Portal",	"Town Portal Charges:  8 - 12",		 3,	new GetEquip(0x08)	,0,  320,  480,	8,	4);
suffixx[107] = new MakePremium("Flash",		"Flash Charges: 20 - 40",		 4,	new GetEquip(0x08)	,0, 2000, 4000,	20,	20);
suffixx[108] = new MakePremium("Stone Curse",	"Stone Curse Charges:  8 - 16",		 5,	new GetEquip(0x08)	,0, 1280, 2560,	8,	8);
suffixx[109] = new MakePremium("Phasing",	"Phasing Charges: 40 - 80",		 6,	new GetEquip(0x08)	,0, 1600, 3200,	40,	40);
suffixx[110] = new MakePremium("Mana Shield",	"Mana Shield Charges:  4 - 10",		 5,	new GetEquip(0x08)	,0,  960, 2400,	4,	6);
suffixx[111] = new MakePremium("Elemental",	"Elemental Charges: 20 - 60",		 6,	new GetEquip(0x08)	,0, 2800, 8400,	20,	40);
suffixx[112] = new MakePremium("Fireball",	"Fireball Charges: 40 - 80",		 7,	new GetEquip(0x08)	,0, 2400, 4800,	40,	40);
suffixx[113] = new MakePremium("Flame Wave",	"Flame Wave Charges: 20 - 40",		 8,	new GetEquip(0x08)	,0, 2600, 5200,	20,	20);
suffixx[114] = new MakePremium("Chain Lightning","Chain Lightning Charges: 20 - 60",	 7,	new GetEquip(0x08)	,0, 3000, 6000,	20,	40);
suffixx[115] = new MakePremium("Guardian",	"Guardian Charges: 16 - 32",		 8,	new GetEquip(0x08)	,0, 3040, 6080,	16,	16);
suffixx[116] = new MakePremium("Golem",		"Golem Charges: 16 - 32",		 9,	new GetEquip(0x08)	,0, 3520, 7040,	16,	16);
suffixx[117] = new MakePremium("Teleport",	"Teleport Charges: 16 - 32",		12,	new GetEquip(0x08)	,0, 4000, 8000,	16,	16);
suffixx[118] = new MakePremium("Nova",		"Nova Charges: 16 - 32",		10,	new GetEquip(0x08)	,0, 4160, 8230,	16,	16);
suffixx[119] = new MakePremium("Bone Spirit",	"Bone Spirit Charges: 20 - 60",		 7,	new GetEquip(0x08)	,0, 3200, 9600,	20,	40);
suffixx[120] = new MakePremium("Blood Star",	"Blood Star Charges: 20 - 60",		13,	new GetEquip(0x08)	,0, 7200,21600,	20,	40);
suffixx[121] = new MakePremium("Apocalypse",	"Apocalypse Charges:  8 - 12",		15,	new GetEquip(0x08)	,0, 3200, 4800,	8,	4);


//-- BASE ITEM ------
basee[0]   = new MakeBasee(" -------- None --------",new GetKind(6,""),		 0,   0,"");
basee[1]   = new MakeBasee("Cap"                  ,new GetKind(2,"Cap"),		 1,  15,"Armor Class: 1 - 3    DUR: 15");
basee[2]   = new MakeBasee("Skull Cap"            ,new GetKind(2,"Cap"),		 4,  25,"Armor Class: 2 - 4    DUR: 20");
basee[3]   = new MakeBasee("Helm"                 ,new GetKind(2,"Helm"),		 8,  40,"Armor Class: 4 - 6    DUR: 30    Required:  STR 25");
basee[4]   = new MakeBasee("Full Helm"            ,new GetKind(2,"Helm"),		12,  90,"Armor Class: 6 - 8    DUR: 35    Required:  STR 35");
basee[5]   = new MakeBasee("Crown"                ,new GetKind(2,"Crown"),	16, 200,"Armor Class: 8 - 12    DUR: 40");
basee[6]   = new MakeBasee("Great Helm"           ,new GetKind(2,"Helm"),		20, 400,"Armor Class: 10 - 15    DUR: 60    Required:  STR 50");
basee[7]   = new MakeBasee("Cape"                 ,new GetKind(2,"Cape"),		 1,  10,"Armor Class: 1 - 5    DUR: 12");
basee[8]   = new MakeBasee("Rags"                 ,new GetKind(2,"Rags"),		 1,   5,"Armor Class: 2 - 6    DUR:  6");
basee[9]   = new MakeBasee("Cloak"                ,new GetKind(2,"Cloak"),	 2,  40,"Armor Class: 3 - 7    DUR: 18");
basee[10]  = new MakeBasee("Robe"                 ,new GetKind(2,"Robe"),		 3,  75,"Armor Class: 4 - 7    DUR: 24");
basee[11]  = new MakeBasee("Quilted Armor"        ,new GetKind(2,"Armor"),	 4, 200,"Armor Class: 7 - 10    DUR: 30");
basee[12]  = new MakeBasee("Leather Armor"        ,new GetKind(2,"Armor"),	 6, 300,"Armor Class: 10 - 13    DUR: 35");
basee[13]  = new MakeBasee("Hard Leather Armor"   ,new GetKind(2,"Armor"),	 7, 450,"Armor Class: 11 - 14    DUR: 40");
basee[14]  = new MakeBasee("Studded Leather Armor",new GetKind(2,"Armor"),	 9, 700,"Armor Class: 15 - 17    DUR: 45    Required:  STR 20");
basee[15]  = new MakeBasee("Ring Mail"            ,new GetKind(2,"Mail"),		11, 900,"Armor Class: 17 - 20    DUR: 50    Required:  STR 25");
basee[16]  = new MakeBasee("Chain Mail"           ,new GetKind(2,"Mail"),		13,1250,"Armor Class: 18 - 22    DUR: 55    Required:  STR 30");
basee[17]  = new MakeBasee("Scale Mail"           ,new GetKind(2,"Mail"),		15,2300,"Armor Class: 23 - 28    DUR: 60    Required:  STR 35");
basee[18]  = new MakeBasee("Breast Plate"         ,new GetKind(2,"Plate"),	16,2800,"Armor Class: 20 - 24    DUR: 80    Required:  STR 40");
basee[19]  = new MakeBasee("Splint Mail"          ,new GetKind(2,"Mail"),		17,3250,"Armor Class: 30 - 35    DUR: 65    Required:  STR 40");
basee[20]  = new MakeBasee("Plate Mail"           ,new GetKind(2,"Plate"),	19,4600,"Armor Class: 42 - 50    DUR: 75    Required:  STR 60");
basee[21]  = new MakeBasee("Field Plate"          ,new GetKind(2,"Plate"),	21,5800,"Armor Class: 40 - 45    DUR: 80    Required:  STR 65");
basee[22]  = new MakeBasee("Gothic Plate"         ,new GetKind(2,"Plate"),	23,8000,"Armor Class: 50 - 60    DUR: 100   Required:  STR 80");
basee[23]  = new MakeBasee("Full Plate Mail"      ,new GetKind(2,"Plate"),	25,6500,"Armor Class: 60 - 75    DUR: 90    Required:  STR 90");
basee[24]  = new MakeBasee("Buckler"              ,new GetKind(1,"Shield"),	 1,  30,"Armor Class: 1 - 5    DUR: 16");
basee[25]  = new MakeBasee("Small Shield"         ,new GetKind(1,"Shield"),	 5,  90,"Armor Class: 3 - 8    DUR: 24    Required:  STR 25");
basee[26]  = new MakeBasee("Large Shield"         ,new GetKind(1,"Shield"),	 9, 200,"Armor Class: 5 - 10    DUR: 32    Required:  STR 40");
basee[27]  = new MakeBasee("Kite Shield"          ,new GetKind(1,"Shield"),	14, 400,"Armor Class: 8 - 15    DUR: 40    Required:  STR 50");
basee[28]  = new MakeBasee("Tower Shield"         ,new GetKind(1,"Shield"),	20, 850,"Armor Class: 12 - 20    DUR: 50    Required:  STR 60");
basee[29]  = new MakeBasee("Gothic Shield"        ,new GetKind(1,"Shield"),	23,2300,"Armor Class: 14 - 18    DUR: 60    Required:  STR 80");
basee[30]  = new MakeBasee("Dagger"               ,new GetKind(5,"Dagger"),	 1,  60,"Damage: 1 - 4    DUR:  16");
basee[31]  = new MakeBasee("Short Sword"          ,new GetKind(5,"Sword"),	 1, 120,"Damage: 2 - 6    DUR:  24    Required:  STR 18");
basee[32]  = new MakeBasee("Sabre"                ,new GetKind(5,"Sabre"),	 1, 170,"Damage: 1 - 8    DUR:  45    Required:  STR 17");
basee[33]  = new MakeBasee("Falchion"             ,new GetKind(5,"Sword"),	 2, 250,"Damage: 4 - 8    DUR:  20    Required:  STR 30");
basee[34]  = new MakeBasee("Scimitar"             ,new GetKind(5,"Sword"),	 4, 200,"Damage: 3 - 7    DUR:  28    Required:  STR 23  DEX 23");
basee[35]  = new MakeBasee("Blade"                ,new GetKind(5,"Blade"),	 4, 280,"Damage: 3 - 8    DUR:  30    Required:  STR 25  DEX 30");
basee[36]  = new MakeBasee("Claymore"             ,new GetKind(5,"Sword"),	 5, 450,"Damage: 1 - 12    DUR:  36    Required:  STR 35");
basee[37]  = new MakeBasee("Long Sword"           ,new GetKind(5,"Sword"),	 6, 350,"Damage: 2 - 10    DUR:  40    Required:  STR 30  DEX 30");
basee[38]  = new MakeBasee("Broad Sword"          ,new GetKind(5,"Sword"),	 8, 750,"Damage: 4 - 12    DUR:  50    Required:  STR 40");
basee[39]  = new MakeBasee("Bastard Sword"        ,new GetKind(5,"Sword"),	10,1000,"Damage: 6 - 15    DUR:  60    Required:  STR 50");
basee[40]  = new MakeBasee("Two-Handed Sword"     ,new GetKind(5,"Sword"),	14,1800,"Damage: 8 - 16    DUR:  75    Required:  STR 65");
basee[41]  = new MakeBasee("Great Sword"          ,new GetKind(5,"Sword"),	17,3000,"Damage: 10 - 20    DUR: 100    Required:  STR 75");
basee[42]  = new MakeBasee("Small Axe"            ,new GetKind(5,"Axe"),		 2, 150,"Damage: 2 - 10    DUR:  24");
basee[43]  = new MakeBasee("Axe"                  ,new GetKind(5,"Axe"),		 4, 450,"Damage: 4 - 12    DUR:  32    Required:  STR 22");
basee[44]  = new MakeBasee("Large Axe"            ,new GetKind(5,"Axe"),		 6, 750,"Damage: 6 - 16    DUR:  40    Required:  STR 30");
basee[45]  = new MakeBasee("Broad Axe"            ,new GetKind(5,"Axe"),		 8,1000,"Damage: 8 - 20    DUR:  50    Required:  STR 50");
basee[46]  = new MakeBasee("Battle Axe"           ,new GetKind(5,"Axe"),		10,1500,"Damage: 10 - 25    DUR:  60    Required:  STR 65");
basee[47]  = new MakeBasee("Great Axe"            ,new GetKind(5,"Axe"),		12,2500,"Damage: 12 - 30    DUR:  75    Required:  STR 80");
basee[48]  = new MakeBasee("Mace"                 ,new GetKind(5,"Mace"),		 2, 200,"Damage: 1 - 8    DUR:  32    Required:  STR 16");
basee[49]  = new MakeBasee("Morning Star"         ,new GetKind(5,"Mace"),		 3, 300,"Damage: 1 - 10    DUR:  40    Required:  STR 26");
basee[50]  = new MakeBasee("War Hammer"           ,new GetKind(5,"Hammer"),	 5, 600,"Damage: 5 - 9    DUR:  50    Required:  STR 40");
basee[51]  = new MakeBasee("Club"                 ,new GetKind(5,"Club"),		 1,  20,"Damage: 1 - 6    DUR:  20");
basee[52]  = new MakeBasee("Spiked Club"          ,new GetKind(5,"Club"),		 4, 225,"Damage: 3 - 6    DUR:  20    Required:  STR 18");
basee[53]  = new MakeBasee("Flail"                ,new GetKind(5,"Flail"),	 7, 500,"Damage: 2 - 12    DUR:  36    Required:  STR 30");
basee[54]  = new MakeBasee("Maul"                 ,new GetKind(5,"Maul"),		10, 900,"Damage: 6 - 20    DUR:  50    Required:  STR 55");
basee[55]  = new MakeBasee("Short Bow"            ,new GetKind(4,"Bow"),		 1, 100,"Damage: 1 - 4    DUR:  30");
basee[56]  = new MakeBasee("Hunter's Bow"         ,new GetKind(4,"Bow"),		 3, 350,"Damage: 2 - 5    DUR:  40    Required:  STR 20  DEX 35");
basee[57]  = new MakeBasee("Long Bow"             ,new GetKind(4,"Bow"),		 5, 250,"Damage: 1 - 6    DUR:  35    Required:  STR 25  DEX 30");
basee[58]  = new MakeBasee("Composite Bow"        ,new GetKind(4,"Bow"),		 7, 600,"Damage: 3 - 6    DUR:  45    Required:  STR 25  DEX 40");
basee[59]  = new MakeBasee("Short Battle Bow"     ,new GetKind(4,"Bow"),		 9, 750,"Damage: 3 - 7    DUR:  45    Required:  STR 30  DEX 50");
basee[60]  = new MakeBasee("Long Battle Bow"      ,new GetKind(4,"Bow"),		11,1000,"Damage: 1 - 10    DUR:  50    Required:  STR 30  DEX 60");
basee[61]  = new MakeBasee("Short War Bow"        ,new GetKind(4,"Bow"),		15,1500,"Damage: 4 - 8    DUR:  55    Required:  STR 35  DEX 70");
basee[62]  = new MakeBasee("Long War Bow"         ,new GetKind(4,"Bow"),		19,2000,"Damage: 1 - 14    DUR:  60    Required:  STR 45  DEX 80");
basee[63]  = new MakeBasee("Short Staff"          ,new GetKind(3,"Staff"),	 1,  30,"Damage: 2 - 4    DUR:  25");
basee[64]  = new MakeBasee("Long Staff"           ,new GetKind(3,"Staff"),	 4, 100,"Damage: 4 - 8    DUR:  35");
basee[65]  = new MakeBasee("Composite Staff"      ,new GetKind(3,"Staff"),	 6, 500,"Damage: 5 - 10    DUR:  45");
basee[66]  = new MakeBasee("Quarter Staff"        ,new GetKind(3,"Staff"),   9,1000,"Damage: 6 - 12    DUR:  55    Required:  STR 20");
basee[67]  = new MakeBasee("War Staff"            ,new GetKind(3,"Staff"),  12,1500,"Damage: 8 - 16    DUR:  75    Required:  STR 30");
basee[68]  = new MakeBasee("Ring"                 ,new GetKind(0,"Ring"),    5,1000,"Indestructible");
basee[69]  = new MakeBasee("Amulet"               ,new GetKind(0,"Amulet"),  8,1200,"Indestructible");
basee[70]  = new MakeBasee("Aguinara's Hatchet"   ,new GetKind(7,"Unique"),  2, 24800,"Damage: 2 - 10    DUR:  24");
basee[71]  = new MakeBasee("Baranar's Star"       ,new GetKind(7,"Unique"),  3,  6850,"Damage: 1 - 10    DUR:  60    Required:  STR 26");
basee[72]  = new MakeBasee("Black Razor"  ,new GetKind(7,"Unique"),  1,  2000,"Damage: 1 - 4    DUR:   5");
basee[73]  = new MakeBasee("Blackoak Shield" ,new GetKind(7,"Unique"),  5,  5725,"Armor Class: 18        DUR:  60    Required:  STR 25");
basee[74]  = new MakeBasee("Bloodslayer"  ,new GetKind(7,"Unique"),  8,  2500,"Damage: 8 - 20    DUR:  50    Required:  STR 50");
basee[75]  = new MakeBasee("Bow of the Dead" ,new GetKind(7,"Unique"),  7,  2500,"Damage: 3 - 6    DUR:  30    Required:  STR 25  DEX 40");
basee[76]  = new MakeBasee("Civerb's Cudgel" ,new GetKind(7,"Unique"),  2,  2000,"Damage: 1 - 8    DUR:  32    Required:  STR 16");
basee[77]  = new MakeBasee("Constricting Ring" ,new GetKind(7,"Unique"),  5, 62000,"Indestructible");
basee[78]  = new MakeBasee("Deadly Hunter" ,new GetKind(7,"Unique"),  7,  8750,"Damage: 3 - 6    DUR:  45    Required:  STR 25  DEX 40");
basee[79]  = new MakeBasee("Demonspike Coat" ,new GetKind(7,"Unique"), 25,251175,"Armor Class: 100        Indestructible    Required:  STR 90");
basee[80]  = new MakeBasee("Doombringer"  ,new GetKind(7,"Unique"), 10, 18250,"Damage: 6 - 15    DUR:  60    Required:  STR 50");
basee[81]  = new MakeBasee("Dragon's Breach" ,new GetKind(7,"Unique"), 14, 19200,"Armor Class: 20        Indestructible    Required:  STR 50");
basee[82]  = new MakeBasee("Dreamflange"  ,new GetKind(7,"Unique"),  2, 26450,"Damage: 1 - 8    DUR:  32    Required:  STR 16");
basee[83]  = new MakeBasee("Eaglehorn"  ,new GetKind(7,"Unique"), 11, 42500,"Damage: 1 -10    Indestructible    Required:  STR 30  DEX 60");
basee[84]  = new MakeBasee("Flamedart"  ,new GetKind(7,"Unique"),  3, 14250,"Damage: 2 - 5    DUR:  40    Required:  STR 20  DEX 35");
basee[85]  = new MakeBasee("Fleshstinger"  ,new GetKind(7,"Unique"),  5, 16500,"Damage: 1 - 6    DUR:  37    Required:  STR 25  DEX 30");
basee[86]  = new MakeBasee("Fool's Crest"  ,new GetKind(7,"Unique"),  8, 10150,"Armor Class: 4 - 6    DUR:  30    Required:  STR 25");
basee[87]  = new MakeBasee("Gibbous Moon"  ,new GetKind(7,"Unique"),  8,  6660,"Damage: 4 -12    DUR:  50    Required:  STR 40");
basee[88]  = new MakeBasee("Gleamsong"  ,new GetKind(7,"Unique"),  1,  6250,"Damage: 2 - 4    DUR:  25");
basee[89]  = new MakeBasee("Gnarled Root"  ,new GetKind(7,"Unique"),  1,  9820,"Damage: 1 - 6    DUR:  20");
basee[90]  = new MakeBasee("Gnarled Root"  ,new GetKind(7,"Unique"),  4,  9820,"Damage: 3 - 6    DUR:  20    Required:  STR 18");
basee[91]  = new MakeBasee("Gotterdamerung" ,new GetKind(7,"Unique"), 20, 54900,"Armor Class: 60        DUR:  60    Required:  STR 50");
basee[92]  = new MakeBasee("Gryphons Claw" ,new GetKind(7,"Unique"),  2,  1000,"Damage: 4 - 8    DUR:  20    Required:  STR 30");
basee[93]  = new MakeBasee("Hammer of Jholm" ,new GetKind(7,"Unique"), 10,  8700,"Damage: 6 - 20    Indestructible    Required:  STR 55");
basee[94]  = new MakeBasee("Hellslayer"  ,new GetKind(7,"Unique"), 10, 26200,"Damage: 10 - 25    DUR:  60    Required:  STR 65");
basee[95]  = new MakeBasee("Helm of Sprits" ,new GetKind(7,"Unique"),  8,  7525,"Armor Class: 4 - 6    DUR:  30    Required:  STR 25");
basee[96]  = new MakeBasee("Holy Defender" ,new GetKind(7,"Unique"),  9, 13800,"Armor Class: 15        DUR:  96    Required:  STR 40");
basee[97]  = new MakeBasee("Ice Shank"  ,new GetKind(7,"Unique"),  6,  5250,"Damage: 2 -10    DUR:  15    Required:  STR 30");
basee[98]  = new MakeBasee("Immolator"  ,new GetKind(7,"Unique"),  4,  3900,"Damage: 4 - 8    DUR:  35");
basee[99]  = new MakeBasee("Inferno"  ,new GetKind(7,"Unique"),  6, 34600,"Damage: 2 - 10    DUR:  40    Required:  STR 30");
basee[100] = new MakeBasee("Leather of Aut" ,new GetKind(7,"Unique"),  6, 10550,"Armor Class: 15        Indestructible");
basee[101] = new MakeBasee("Lightsabre"  ,new GetKind(7,"Unique"),  1, 19150,"Damage: 1 - 8    DUR:  45    Required:  STR 17");
basee[102] = new MakeBasee("Messerschmidt's Reaver",new GetKind(7,"Unique"), 12, 58000,"Damage: 12 - 30    DUR:  75    Required:  STR 80");
basee[103] = new MakeBasee("Mindcry"  ,new GetKind(7,"Unique"),  9, 41500,"Damage: 6 - 12    DUR:  55    Required:  STR 20");
basee[104] = new MakeBasee("Naj's Light Plate" ,new GetKind(7,"Unique"), 19, 78700,"Armor Class: 42 - 50    DUR:  75");
basee[105] = new MakeBasee("Naj's Puzzler" ,new GetKind(7,"Unique"),  4, 34000,"Damage: 4 - 8    DUR:  35");
basee[106] = new MakeBasee("Nightscape"  ,new GetKind(7,"Unique"),  1, 11600,"Armor Class: 15        DUR:  12");
basee[107] = new MakeBasee("Overlord's Helm" ,new GetKind(7,"Unique"),  8, 12500,"Armor Class: 4 - 6    DUR:  15    Required:  STR 25");
basee[108] = new MakeBasee("Ring of Engagement" ,new GetKind(7,"Unique"),  5, 12476,"Indestructible");
basee[109] = new MakeBasee("Ring of Regha" ,new GetKind(7,"Unique"),  5,  4175,"Indestructible");
basee[110] = new MakeBasee("Rod of Onan"  ,new GetKind(7,"Unique"), 12, 44167,"Damage: 8 - 16    DUR:  75    Required:  STR 30");
basee[111] = new MakeBasee("Royal Circlet" ,new GetKind(7,"Unique"), 16, 24875,"Armor Class: 40        DUR:  40");
basee[112] = new MakeBasee("Scavenger Carapace" ,new GetKind(7,"Unique"), 16, 14000,"Armor Class: -10 - -6    DUR:  80    Required:  STR 40");
basee[113] = new MakeBasee("Schaefer's Hammer" ,new GetKind(7,"Unique"),  5, 56125,"Damage: 5 - 9    DUR:  50    Required:  STR 40");
basee[114] = new MakeBasee("Shadowhawk"  ,new GetKind(7,"Unique"),  8, 13750,"Damage: 4 - 12    DUR:  50    Required:  STR 40");
basee[115] = new MakeBasee("Sharp Beak"  ,new GetKind(7,"Unique"),  6,  2850,"Damage: 6 - 16    DUR:  40    Required:  STR 30");
basee[116] = new MakeBasee("Sparking Mail" ,new GetKind(7,"Unique"), 13, 15750,"Armor Class: 30        DUR:  55    Required:  STR 30");
basee[117] = new MakeBasee("Split Skull Shield" ,new GetKind(7,"Unique"),  1,  2025,"Armor Class: 10        DUR:  15");
basee[118] = new MakeBasee("Staff of Shadows" ,new GetKind(7,"Unique"),  4,  1250,"Damage: 4 - 8    DUR:  35");
basee[119] = new MakeBasee("Stonecleaver"  ,new GetKind(7,"Unique"),  8, 23900,"Damage: 8 - 20    DUR:  50    Required:  STR 50");
basee[120] = new MakeBasee("Storm Spire"  ,new GetKind(7,"Unique"), 12, 22500,"Damage: 8 - 16    DUR:  75    Required:  STR 30");
basee[121] = new MakeBasee("Stormshield"  ,new GetKind(7,"Unique"), 20, 49000,"Armor Class: 40        Indestructible    Required:  STR 60");
basee[122] = new MakeBasee("Stormshield"  ,new GetKind(7,"Unique"), 23, 49000,"Armor Class: 40        Indestructible    Required:  STR 80");
basee[123] = new MakeBasee("The Blackoak Bow" ,new GetKind(7,"Unique"),  5,  2500,"Damage: 1 - 6    DUR:  35    Required:  STR 25  DEX 30");
basee[124] = new MakeBasee("The Bleeder"  ,new GetKind(7,"Unique"),  5,  8500,"Indestructible");
basee[125] = new MakeBasee("The Bonesaw"  ,new GetKind(7,"Unique"),  5,  4400,"Damage: 1 - 12    DUR:  36    Required:  STR 35");
basee[126] = new MakeBasee("The Celestial Axe" ,new GetKind(7,"Unique"), 10, 14100,"Damage: 10 - 25    DUR:  60");
basee[127] = new MakeBasee("The Celestial Bow" ,new GetKind(7,"Unique"),  5,  1200,"Damage: 1 - 6    DUR:  35    Required:  DEX 30");
basee[128] = new MakeBasee("The Celestial Star" ,new GetKind(7,"Unique"),  7,  7810,"Damage: 2 - 12    DUR:  36");
basee[129] = new MakeBasee("The Cranium Basher" ,new GetKind(7,"Unique"), 10, 36500,"Damage: 6 - 20    Indestructible    Required:  STR 55");
basee[130] = new MakeBasee("The Defender"  ,new GetKind(7,"Unique"),  1,  2000,"Damage: 1 - 8    DUR:  45    Required:  STR 17");
basee[131] = new MakeBasee("The Executioner's Blade",new GetKind(7,"Unique"),  2,  7080,"Damage: 4 - 8    DUR:  60    Required:  STR 30");
basee[132] = new MakeBasee("The Falcon's Talon" ,new GetKind(7,"Unique"),  4,  7867,"Damage: 3 - 7    DUR:  28    Required:  STR 23");
basee[133] = new MakeBasee("The Gladiator's Bane" ,new GetKind(7,"Unique"),  9,  3450,"Armor Class: 25        DUR: 135    Required:  STR 20");
basee[134] = new MakeBasee("The Grandfather" ,new GetKind(7,"Unique"), 17,119800,"Damage: 10 - 20    DUR: 100    Required:  STR 75");
basee[135] = new MakeBasee("The Grizzly"  ,new GetKind(7,"Unique"), 14, 50000,"Damage: 8 - 16    DUR: 150    Required:  STR 65");
basee[136] = new MakeBasee("The Needler"  ,new GetKind(7,"Unique"),  1,  8900,"Damage: 1 - 3    DUR:  30");
basee[137] = new MakeBasee("The Protector" ,new GetKind(7,"Unique"),  1, 17240,"Damage: 2 - 4    DUR:  25");
basee[138] = new MakeBasee("The Rainbow Cloak" ,new GetKind(7,"Unique"),  2,  4900,"Armor Class: 10        DUR:  27");
basee[139] = new MakeBasee("The Rift Bow"  ,new GetKind(7,"Unique"),  1,  1800,"Damage: 1 - 4    DUR:  30");
basee[140] = new MakeBasee("Thinking Cap"  ,new GetKind(7,"Unique"),  4,  2020,"Armor Class: 2 - 4    DUR:   1");
basee[141] = new MakeBasee("Thundercall"  ,new GetKind(7,"Unique"),  6, 22250,"Damage: 5 - 10    DUR:  45");
basee[142] = new MakeBasee("Torn Flesh of Souls" ,new GetKind(7,"Unique"),  1,  4825,"Armor Class: 8        Indestructible");
basee[143] = new MakeBasee("Wicked Axe"  ,new GetKind(7,"Unique"),  6, 31150,"Damage: 6 - 16    Indestructible    Required:  STR 30");
basee[144] = new MakeBasee("Windforce"  ,new GetKind(7,"Unique"), 19, 37750,"Damage: 1 -14    DUR:  60    Required:  STR 45  DEX 80");
basee[145] = new MakeBasee("Wisdom's Wrap" ,new GetKind(7,"Unique"),  3,  6200,"Armor Class: 15        DUR:  24");
basee[146] = new MakeBasee("Wizardspike"  ,new GetKind(7,"Unique"),  1, 12920,"Damage: 1 - 4    DUR:  16");




//-- UNIQUE ITEM DATA ------

uniq[0]  = new MakeUniq("Small Axe",12,60, "qlvl: 12   Spells Are Increased 1 Level   +10 to Magic   Resist Magic 75% MAX");
uniq[1]  = new MakeUniq("Morning Star",5,60, "qlvl: 5   Chance to Hit +12%   Damage: +80%   Quick Attack\n    +4 to Vitality   -4 to Dexterity   High Durability");
uniq[2]  = new MakeUniq("Dagger",1,10,  "qlvl: 1   Damage: +150%   +2 to Vitality   Alterd Durability");
uniq[3]  = new MakeUniq("Small Shield",4,60, "qlvl: 4   +10 to Dexterity   -10 to Vitality   Armor Class: 18\n    -10% Light Radius   High Durability");
uniq[4]  = new MakeUniq("Broad Axe",3,6, "qlvl: 3   Damage: +100%   +200% Damage vs. Demons   -5 to All Attributes\n    Spells Are Decreased 1 Level");
uniq[5]  = new MakeUniq("Composite Bow",5,60, "qlvl: 5   Chance to Hit +10%   +4 to Dexterity   -3 to Vitality\n    -20% Light Radius   Alterd Durability");
uniq[6]  = new MakeUniq("Mace",1,25,  "qlvl: 1   +200% Damage vs. Demons   -5 to Dexterity   -2 to Magic");
uniq[7]  = new MakeUniq("Ring",5,10,  "qlvl: 5   Resist All 75% MAX   Constantly Lose Hit Points");
uniq[8]  = new MakeUniq("Composite Bow",3,4, "qlvl: 3   +200% Damage vs. Demons   Chance to Hit +20%   -5 to Magic");
uniq[9]  = new MakeUniq("Full Plate Mail",25,60,"qlvl: 25   Armor Class: 100   -6 Damage from Enemy   +10 to Strength\n    Indestructible   Resist Fire +50%");
uniq[10] = new MakeUniq("Bastard Sword",19,60, "qlvl: 19   Chance to Hit +25%   Damage: +250%   -5 to All Attributes\n    Hit Points -25   -20% Light Radius");
uniq[11] = new MakeUniq("Kite Shield",2,60, "qlvl: 2   Resist Fire +25%   +5 to Strength   Armor Class: 20\n    -5 to Magic   Indestructible");
uniq[12] = new MakeUniq("Mace",26,60,  "qlvl: 26   +30 to Magic   Mana +50   Resist Magic +50%\n    +20% Light Radius   Spells Are Increased 1 Level");
uniq[13] = new MakeUniq("Long Battle Bow",26,60,"qlvl: 26   +20 to Dexterity   Chance to Hit +50%   Damage: +100%\n    Indestructible");
uniq[14] = new MakeUniq("Hunter's Bow",10,60, "qlvl: 10   Fire Arrows Damage: 1-6   Fire Hit Damage: 1-6   Chance to Hit +20%\n    Resist Fire +40%");
uniq[15] = new MakeUniq("Long Bow",13,60, "qlvl: 13   +15 to Dexterity   Chance to Hit +40%   Damage: +80%\n    High Durability");
uniq[16] = new MakeUniq("Helm",12,60,  "qlvl: 12   -4 to All Attributes   Hit Points +100   +1-6 Damage from Enemy\n    Attacker Takes 1-3 Damage");
uniq[17] = new MakeUniq("Broad Sword",2,7, "qlvl: 2   +2 to All Attributes   Damage: +25%   Mana +15\n    -30% Light Radius");
uniq[18] = new MakeUniq("Short Staff",8,15, "qlvl: 8   Mana +25   -3 to Strength   -3 to Vitality\n    Charges 76 Phasing");
uniq[19] = new MakeUniq("Club",9,60,  "qlvl: 9   Chance to Hit +20%   Damage: +300%   +10 to Dexterity\n    +5 to Magic   Resist All +10%   Armor Class: -10");
uniq[20] = new MakeUniq("Spiked Club",9,60, "qlvl: 9   Chance to Hit +20%   Damage: +300%   +10 to Dexterity\n    +5 to Magic   Resist All +10%   Armor Class: -10");
uniq[21] = new MakeUniq("Great Helm",21,60, "qlvl: 21   +20 to All Attributes   Armor Class: 60   -4 Damage from Enemy\n    All Resistance Equals 0   -40% Light Radius");
uniq[22] = new MakeUniq("Falchion",1,2,  "qlvl: 1   Damage: +100%   -2 to Magic   -5 to Dexterity");
uniq[23] = new MakeUniq("Maul",1,11,  "qlvl: 2   Damage: +4-10%   Indestructible   +3 to Strength\n    Chance to Hit +15%");
uniq[24] = new MakeUniq("Battle Axe",15,60, "qlvl: 15   +8 to Strength   +8 to Vitality   Damage: +100%\n    Hit Points +25   Mana -25");
uniq[25] = new MakeUniq("Helm",1,6,  "qlvl: 1   Hit Steals 5% Life");
uniq[26] = new MakeUniq("Large Shield",10,60, "qlvl: 10   Armor Class: 15   -2 Damage from Enemy   Resist Fire +20%\n    High Durability   Fast Block");
uniq[27] = new MakeUniq("Long Sword",3,16, "qlvl: 3   Resist Fire +40%   Alterd Durability   +5-10 to Strength");
uniq[28] = new MakeUniq("Long Staff",4,17, "qlvl: 4   Resist Fire +20%   Fire Hit Damage: 4 - 4   Mana +10\n    -5 to Vitality");
uniq[29] = new MakeUniq("Long Sword",17,60, "qlvl: 17   Fire Hit Damage: 2-12   +30% Light Radius   Mana +20\n    Resist Fire 75% MAX");
uniq[30] = new MakeUniq("Leather Armor",4,60, "qlvl: 4   Armor Class: 15   +5 to Strength   -5 to Magic\n    +5 to Dexterity   Indestructible");
uniq[31] = new MakeUniq("Sabre",13,60,  "qlvl: 13   +20% Light Radius   Lightning Hit Damage: 1-10   Chance to Hit +20%\n    Resist Lightning +50%");
uniq[32] = new MakeUniq("Great Axe",25,60, "qlvl: 25   Damage: +200%   Add 15 Points Damage   +5 to All Attributes\n    Hit Points -50   Fire Hit Damage: 2-12");
uniq[33] = new MakeUniq("Quarter Staff",20,60, "qlvl: 20   +15 to Magic   Charges 69 Guardian   Resist All +15%\n    Spells Are Increased 1 Level");
uniq[34] = new MakeUniq("Plate Mail",19,60, "qlvl: 19   No Strength Requirement   +5 to Magic   Mana +20\n    Resist All +20%   Spells Are Increased 1 Level");
uniq[35] = new MakeUniq("Long Staff",18,60, "qlvl: 18   +20 to Magic   +10 to Dexterity   Resist All +20%\n    Charges 57 Teleport   Hit Points -25");
uniq[36] = new MakeUniq("Cape",16,60,  "qlvl: 16   Faster Hit Recovery   -40% Light Radius   Armor Class: 15\n    +3 to Dexterity   Resist All +20%");
uniq[37] = new MakeUniq("Helm",7,11,  "qlvl: 7   +20 to Strength   +15 to Dexterity   +5 to Vitality\n    -20 to Magic   Alterd Durability");
uniq[38] = new MakeUniq("Ring",11,60,  "qlvl: 11   -1 - -2 Damage from Enemy   Attacker Takes 1 - 3 Damage   Armor Class: 5\n    Damages Target's Armor(4 - 12)");
uniq[39] = new MakeUniq("Ring",1,1,  "qlvl: 1   +10 to Magic   Resist Magic +10%   +10 Light Radius\n    -3 to Strength   -3 to Dexterity");
uniq[40] = new MakeUniq("War Staff",22,60, "qlvl: 22   Charges 50 Golem   Damage: +100%   +5 to All Attributes");
uniq[41] = new MakeUniq("Crown",27,60,  "qlvl: 27   +10 to All Attributes   Mana +40   Armor Class: 40\n    +10% Light Radius");
uniq[42] = new MakeUniq("Breast Plate",13,60, "qlvl: 13   -15 Damage from Enemy   Armor Class: -30   +5 to Dexterity\n    Resist Lightning +40%");
uniq[43] = new MakeUniq("War Hammer",16,60, "qlvl: 16   Damage: -100%   Lightning Hit Damage: 1 - 50   Hit Points +50\n    Chance to Hit +30%   Resist Lightning 75% Max   +10% Light Radius");
uniq[44] = new MakeUniq("Broad Sword",8,60, "qlvl: 8   -20% Light Radius   Hit Steals 5% Life   Chance to Hit +15%\n    Resist All +5%");
uniq[45] = new MakeUniq("Large Axe",2,4, "qlvl: 2   Hit Points +20   -10 to Magic   Mana -10");
uniq[46] = new MakeUniq("Chain Mail",9,60, "qlvl: 9   Armor Class: 30   Lightning Hit Damage: 1-10");
uniq[47] = new MakeUniq("Buckler",1,60,  "qlvl: 1   Armor Class: 10   Hit Points +10   +2 to Strength\n    -10% Light Radius   Alterd Durability");
uniq[48] = new MakeUniq("Long Staff",2,3, "qlvl: 2   -10 to Magic   Chance to Hit +10%   Damage: +60%\n    -20% Light Radius   Quick Attack");
uniq[49] = new MakeUniq("Broad Axe",7,60, "qlvl: 7   Hit Points +30   Chance to Hit +20%   Damage: +50%\n    Resist Lightning +40%");
uniq[50] = new MakeUniq("War Staff",8,21, "qlvl: 8   Resist Lightning +50%   Lightning Hit Damage: 2-8   +10 to Strength\n    -10 to Magic");
uniq[51] = new MakeUniq("Tower Shield",24,60, "qlvl: 24   Armor Class: 40   +4 Damage from Enemy   +10 to Strength\n    Indestructible   Fast Block");
uniq[52] = new MakeUniq("Gothic Shield",24,60, "qlvl: 24   Armor Class: 40   +4 Damage from Enemy   +10 to Strength\n    Indestructible   Fast Block");
uniq[53] = new MakeUniq("Long Bow",5,12, "qlvl: 5   +10 to Dexterity   -10 to Vitality   Damage: +50%\n    -10% Light Radius");
uniq[54] = new MakeUniq("Ring",2,4,  "qlvl: 2   Resist Magic +20%   Mana +30   Hit Points -10");
uniq[55] = new MakeUniq("Claymore",6,60, "qlvl: 6   Add 10 Points Damage   +10 to Strength   -5 to Magic\n    -5 to Dexterity   Hit Points +10   Mana -10");
uniq[56] = new MakeUniq("Battle Axe",4,14, "qlvl: 4   No Strength Requirement\n    Chance to Hit +15%   Hit Points +15   -15 to Strength");
uniq[57] = new MakeUniq("Long Bow",2,4,  "qlvl: 2   No Strength Requirement   Add 2 Points Damage   Armor Class: 5");
uniq[58] = new MakeUniq("Flail",2,60,  "qlvl: 2   No Strength Requirement\n    +20% Light Radius   Add 10 Points to Damage   Armor Class: -8");
uniq[59] = new MakeUniq("Maul",12,60,  "qlvl: 12   Add 20 Points Damage   +15 to Strength   Indestructible\n    Mana -150   Resist All +5%");
uniq[60] = new MakeUniq("Sabre",1,12,  "qlvl: 1   Armor Class: 5   +5 to Vitality   Chance to Hit -5%");
uniq[61] = new MakeUniq("Falchion",3,60, "qlvl: 3   Damage: +150%   Hit Points -10   -10% Light Radius\n    High Durability");
uniq[62] = new MakeUniq("Schimitar",15,60, "qlvl: 15   Fastest Attack   Chance to Hit +20%   Damage: -33%\n    +10 to Dexterity");
uniq[63] = new MakeUniq("Studded Leather Armor",6,60,"qlvl: 6   Armor Class: 25   -2 Damage from Enemy   High Durability\n    -3 to All Attributes");
uniq[64] = new MakeUniq("Great Sword",27,60, "qlvl: 27   One Handed Sword   +5 to All Attributes   Chance to Hit +20%\n    Damage: +70%   Hit Points +20");
uniq[65] = new MakeUniq("Two-Handed Sword",23,60,"qlvl: 23   +20 to Strength   -5 to Vitality   Damage: +200%\n    Knocks Target Back   High Durability");
uniq[66] = new MakeUniq("Short Bow",2,60, "qlvl: 2   Chance to Hit +50%   Unusual Item Damage   Fast Attack");
uniq[67] = new MakeUniq("Short Staff",16,60, "qlvl: 16   +5 to Vitality   -5 Damage from Enemy   Armor Class: 40\n    Charges 86 Healing   Attacker Takes 1-3 Damage");
uniq[68] = new MakeUniq("Cloak",2,60,  "qlvl: 2   Armor Class: 10   +1 to All Attributes   Resist All +10%\n    Hit Points +5   High Durability");
uniq[69] = new MakeUniq("Short Bow",1,1, "qlvl: 1   Fires Random Speed Arrows   Add 2 Points Damage   -3 to Dexterity");
uniq[70] = new MakeUniq("Skull Cap",6,60, "qlvl: 6   Mana +30   Spells Are Increased 2 Levels   Resist All +20%\n    Alterd Durability");
uniq[71] = new MakeUniq("Composite Staff",14,60,"qlvl: 14   Chance to Hit +35%   Lightning Hit Damage: 1-10   Charges 76 Lightning\n    Resist Lightning +30%   +20% Light Radius");
uniq[72] = new MakeUniq("Rags",2,60,  "qlvl: 2   Armor Class: 8   +10 to Vitality   -1 Damage from Enemy\n    Indestructible");
uniq[73] = new MakeUniq("Large Axe",5,60, "qlvl: 5   Chance to Hit +30%   +10 to Dexterity   -10 to Vitality\n    -1--6 Damage from Enemy   Indestructible");
uniq[74] = new MakeUniq("Long War Bow",17,60, "qlvl: 17   +5 to Strength   Damage: +200%   Knocks Target Back");
uniq[75] = new MakeUniq("Robe",5,60,  "qlvl: 5   +5 to Magic    Mana +10   Resist Lightning +25%\n    Armor Class: 15   -1 Damage from Enemy");
uniq[76] = new MakeUniq("Dagger",11,60,  "qlvl: 11   +15 to Magic   Mana +35   Chance to Hit +25%\n    Resist All +15%");
