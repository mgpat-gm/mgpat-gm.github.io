/*
This Diablo item price calculator was created by Eso aka the_Langolier.
Copying, hosting, or other uses of this code may be done freely so long as it remains
unchanged and credit is given to the original author.  The style rules above, however,
may be changed for aesthetic purpsoses only.  The information used by this calculator 
was obtained in Jarulf's Guide to Diablo and Hellfire including items and all the 
information in Chapter 3.6.  To report any errors or bugs, send me a Private Message 
using the forum software.
*/

///////////////////////////////////////////
//BEGIN PREFIX/BASE ITEM/SUFFIX DEFINITIONS
///////////////////////////////////////////

//base item declarations
function Itm(nam,ilvvl,iClas,price)
{
	this.nam = nam;
	this.ilvvl = ilvvl;
	this.iClas = iClas;
	this.price = price;
}
bseEQ = new Array(69);
bseEQ[0]=new Itm("Cap",1,"Helm",15);
bseEQ[1]=new Itm("Skull Cap",4,"Helm",25);
bseEQ[2]=new Itm("Helm",8,"Helm",40);
bseEQ[3]=new Itm("Full Helm",12,"Helm",90);
bseEQ[4]=new Itm("Crown",16,"Helm",200);
bseEQ[5]=new Itm("Great Helm",20,"Helm",400);
bseEQ[6]=new Itm("Rags",1,"Light Armor",5);
bseEQ[7]=new Itm("Cape",1,"Light Armor",10);
bseEQ[8]=new Itm("Cloak",2,"Light Armor",40);
bseEQ[9]=new Itm("Robe",3,"Light Armor",75);
bseEQ[10]=new Itm("Quilted Armor",4,"Light Armor",200);
bseEQ[11]=new Itm("Leather Armor",6,"Light Armor",300);
bseEQ[12]=new Itm("Hard Leather Armor",7,"Light Armor",450);
bseEQ[13]=new Itm("Studded Leather Armor",9,"Light Armor",700);
bseEQ[14]=new Itm("Ring Mail",11,"Medium Armor",900);
bseEQ[15]=new Itm("Chain Mail",13,"Medium Armor",1250);
bseEQ[16]=new Itm("Scale Mail",15,"Medium Armor",2300);
bseEQ[17]=new Itm("Splint Mail",17,"Medium Armor",3250);
bseEQ[18]=new Itm("Breast Plate",16,"Heavy Armor",2800);
bseEQ[19]=new Itm("Plate Mail",19,"Heavy Armor",4600);
bseEQ[20]=new Itm("Field Plate",21,"Heavy Armor",5800);
bseEQ[21]=new Itm("Gothic Plate",23,"Heavy Armor",8000);
bseEQ[22]=new Itm("Full Plate Mail",25,"Heavy Armor",6500);
bseEQ[23]=new Itm("Buckler",1,"Shield",30);
bseEQ[24]=new Itm("Small Shield",5,"Shield",90);
bseEQ[25]=new Itm("Large Shield",9,"Shield",200);
bseEQ[26]=new Itm("Kite Shield",14,"Shield",400);
bseEQ[27]=new Itm("Gothic Shield",23,"Shield",2300);
bseEQ[28]=new Itm("Tower Shield",20,"Shield",850);
bseEQ[29]=new Itm("Dagger",1,"Sword",60);
bseEQ[30]=new Itm("Short Sword",1,"Sword",120);
bseEQ[31]=new Itm("Sabre",1,"Sword",170);
bseEQ[32]=new Itm("Scimitar",4,"Sword",200);
bseEQ[33]=new Itm("Blade",4,"Sword",280);
bseEQ[34]=new Itm("Falchion",2,"Sword",250);
bseEQ[35]=new Itm("Long Sword",6,"Sword",350);
bseEQ[36]=new Itm("Claymore",5,"Sword",450);
bseEQ[37]=new Itm("Broad Sword",8,"Sword",750);
bseEQ[38]=new Itm("Bastard Sword",10,"Sword",1000);
bseEQ[39]=new Itm("Two-Handed Sword",14,"Sword",1800);
bseEQ[40]=new Itm("Great Sword",17,"Sword",3000);
bseEQ[41]=new Itm("Small Axe",2,"Axe",150);
bseEQ[42]=new Itm("Axe",4,"Axe",450);
bseEQ[43]=new Itm("Large Axe",6,"Axe",750);
bseEQ[44]=new Itm("Broad Axe",8,"Axe",1000);
bseEQ[45]=new Itm("Battle Axe",10,"Axe",1500);
bseEQ[46]=new Itm("Great Axe",12,"Axe",2500);
bseEQ[47]=new Itm("Club",1,"Club",20);
bseEQ[48]=new Itm("Spiked Club",4,"Club",225);
bseEQ[49]=new Itm("Mace",2,"Club",200);
bseEQ[50]=new Itm("Morning Star",3,"Club",300);
bseEQ[51]=new Itm("Flail",7,"Club",500);
bseEQ[52]=new Itm("War Hammer",5,"Club",600);
bseEQ[53]=new Itm("Maul",10,"Club",900);
bseEQ[54]=new Itm("Short Bow",1,"Bow",100);
bseEQ[55]=new Itm("Long Bow",5,"Bow",250);
bseEQ[56]=new Itm("Hunter's Bow",3,"Bow",350);
bseEQ[57]=new Itm("Composite Bow",7,"Bow",600);
bseEQ[58]=new Itm("Short Battle Bow",9,"Bow",750);
bseEQ[59]=new Itm("Long Battle Bow",11,"Bow",1000);
bseEQ[60]=new Itm("Short War Bow",15,"Bow",1500);
bseEQ[61]=new Itm("Long War Bow",19,"Bow",2000);
bseEQ[62]=new Itm("Short Staff",1,"Staff",30);
bseEQ[63]=new Itm("Long Staff",4,"Staff",100);
bseEQ[64]=new Itm("Composite Staff",6,"Staff",500);
bseEQ[65]=new Itm("Quarter Staff",9,"Staff",1000);
bseEQ[66]=new Itm("War Staff",12,"Staff",1500);
bseEQ[67]=new Itm("Ring",5,"Jewelry",1000);
bseEQ[68]=new Itm("Amulet",16,"Jewelry",1200);

//unique item declarations
unique = new Array(75);
unique[0]= new Itm("Aguinara's Hatchet",0,"Small Axe",24800);
unique[1]= new Itm("Baranar's Star",0,"Morning Star",6850);
unique[2]= new Itm("Black Razor",0,"Dagger",2000);
unique[3]= new Itm("Blackoak Shield",0,"Small Shield",5725);
unique[4]= new Itm("Bloodslayer",0,"Broad Axe",2500);
unique[5]= new Itm("Bow of the Dead",0,"Composite Bow",2500);
unique[6]= new Itm("Civerb's Cudgel",0,"Mace",2000);
unique[7]= new Itm("Constricting Ring",0,"Ring",62000);
unique[8]= new Itm("Deadly Hunter",0,"Composite Bow",8750);
unique[9]= new Itm("Demonspike Coat",0,"Full Plate Mail",251175);
unique[10]= new Itm("Doombringer",0,"Bastard Sword",18250);
unique[11]= new Itm("Dragon's Breach",0,"Kite Shield",19200);
unique[12]= new Itm("Dreamflange",0,"Mace",26450);
unique[13]= new Itm("Eaglehorn",0,"Long Battle Bow",42500);
unique[14]= new Itm("Flamedart",0,"Hunter's Bow",14250);
unique[15]= new Itm("Fleshstinger",0,"Longbow",16500);
unique[16]= new Itm("Fool's Crest",0,"Helm",10150);
unique[17]= new Itm("Gibbous Moon",0,"Broadsword",6660);
unique[18]= new Itm("Gleamsong",0,"Short Staff",6520);
unique[19]= new Itm("Gnarled Root",0,"Club",9820);
unique[20]= new Itm("Gotterdamerung",0,"Great Helm",54900);
unique[21]= new Itm("Gryphons Claw",0,"Falchion",1000);
unique[22]= new Itm("Hammer of Jholm",0,"Maul",8700);
unique[23]= new Itm("Hellslayer",0,"Battle Axe",26200);
unique[24]= new Itm("Helm of Sprits",0,"Helm",7525);
unique[25]= new Itm("Holy Defender",0,"Large Shield",13800);
unique[26]= new Itm("Ice Shank",0,"Long Sword",5250);
unique[27]= new Itm("Immolator",0,"Long Staff",3900);
unique[28]= new Itm("Inferno",0,"Long Sword",34600);
unique[29]= new Itm("Leather of Aut",0,"Leather Armor",10550);
unique[30]= new Itm("Lightsabre",0,"Sabre",19150);
unique[31]= new Itm("Messerschmidt's Reaver",0,"Great Axe",58000);
unique[32]= new Itm("Mindcry",0,"Quarter Staff",41500);
unique[33]= new Itm("Naj's Light Plate",0,"Plate Mail",78700);
unique[34]= new Itm("Naj's Puzzler",0,"Long Staff",34000);
unique[35]= new Itm("Nightscape",0,"Cape",11600);
unique[36]= new Itm("Overlord's Helm",0,"Helm",12500);
unique[37]= new Itm("Ring of Engagement",0,"Ring",12476);
unique[38]= new Itm("Ring of Regha",0,"Ring",4175);
unique[39]= new Itm("Rod of Onan",0,"War Staff",44167);
unique[40]= new Itm("Royal Circlet",0,"Crown",24875);
unique[41]= new Itm("Scavenger Carapace",0,"Breastplate",14000);
unique[42]= new Itm("Schaefer's Hammer",0,"War Hammer",56125);
unique[43]= new Itm("Shadowhawk",0,"Broadsword",13750);
unique[44]= new Itm("Sharp Beak",0,"Large Axe",2850);
unique[45]= new Itm("Sparking Mail",0,"Chain Mail",15750);
unique[46]= new Itm("Split Skull Shield",0,"Buckler",2025);
unique[47]= new Itm("Staff of Shadows",0,"Long Staff",1250);
unique[48]= new Itm("Stonecleaver",0,"Broad Axe",23900);
unique[49]= new Itm("Storm Spire",0,"War Staff",22500);
unique[50]= new Itm("Stormshield",0,"Gothic Shield",49000);
unique[51]= new Itm("The Blackoak Bow",0,"Longbow",2500);
unique[52]= new Itm("The Bleeder",0,"Ring",8500);
unique[53]= new Itm("The Bonesaw",0,"Claymore",4400);
unique[54]= new Itm("The Celestial Axe",0,"Battle Axe",14100);
unique[55]= new Itm("The Celestial Bow",0,"Long Bow",1200);
unique[56]= new Itm("The Celestial Star",0,"Flail",7810);
unique[57]= new Itm("The Cranium Basher",0,"Maul",36500);
unique[58]= new Itm("The Defender",0,"Sabre",2000);
unique[59]= new Itm("The Executioner's Blade",0,"Falchion",7080);
unique[60]= new Itm("The Falcon's Talon",0,"Scimitar",7867);
unique[61]= new Itm("The Gladiator's Bane",0,"Studded Leather Armor",3450);
unique[62]= new Itm("The Grandfather",0,"Great Sword",119800);
unique[63]= new Itm("The Grizzly",0,"Two-Handed Sword",50000);
unique[64]= new Itm("The Needler",0,"Short Bow",8900);
unique[65]= new Itm("The Protector",0,"Short Staff",17240);
unique[66]= new Itm("The Rainbow Cloak",0,"Cloak",4900);
unique[67]= new Itm("The Rift Bow",0,"Short Bow",1800);
unique[68]= new Itm("Thinking Cap",0,"Skullcap",2020);
unique[69]= new Itm("Thundercall",0,"Composite Staff",22250);
unique[70]= new Itm("Torn Flesh of Souls",0,"Rags",4825);
unique[71]= new Itm("Wicked Axe",0,"Large Axe",31150);
unique[72]= new Itm("Windforce",0,"Long War Bow",37750);
unique[73]= new Itm("Wisdom's Wrap",0,"Robe",6200);
unique[74]= new Itm("Wizardspike",0,"Dagger",12920);



//prefix declarations
function Affx(nam,qlvvl,value,spawnn,cursd,B,range,M)
{
	this.nam = nam;
	this.qlvvl = qlvvl;
	this.value = value;
	this.spawnn = spawnn;
	this.cursd = cursd;
	this.B = B;
	this.range = range;
	this.M = M;
}
prefx = new Array(81);
prefx[0]= new Affx("Hyena's",4,"11-25, mana","---T-J",true,100,900,-2);
prefx[1]= new Affx("Frog's",1,"10-1 mana","---T-J",true,0,0,-2);
prefx[2]= new Affx("Spider's",1,"10-15, mana","---T-J",false,500,500,2);
prefx[3]= new Affx("Raven's",5,"15-20, mana","---T-J",false,1100,900,3);
prefx[4]= new Affx("Snake's",9,"21-30, mana","---T-J",false,2100,1900,5);
prefx[5]= new Affx("Serpent's",15,"30-40, mana","---T-J",false,4100,1900,7);
prefx[6]= new Affx("Drake's",21,"41-50, mana","---T-J",false,6100,3900,9);
prefx[7]= new Affx("Dragon's",27,"51-60, mana","---T-J",false,10100,4900,11);
prefx[8]= new Affx("Vulnerable",3,"-100-51,% AC","AS----",true,0,0,-3);
prefx[9]= new Affx("Rusted",1,"-50-25,% AC","AS----",true,0,0,-2);
prefx[10]= new Affx("Fine",1,"20-30,% AC","AS----",false,20,80,2);
prefx[11]= new Affx("Strong",3,"31-40,% AC","AS----",false,1200,80,3);
prefx[12]= new Affx("Grand",6,"41-55,% AC","AS----",false,220,80,5);
prefx[13]= new Affx("Valiant",10,"56-70,% AC","AS----",false,320,80,7);
prefx[14]= new Affx("Glorious",14,"71-90,% AC","AS----",false,420,180,9);
prefx[15]= new Affx("Blessed",19,"91-110,% AC","AS----",false,620,180,11);
prefx[16]= new Affx("Saintly",24,"111-130,% AC","AS----",false,820,380,13);
prefx[17]= new Affx("Awesome",28,"131-150,% AC","AS----",false,1220,780,15);
prefx[18]= new Affx("Holy",35,"151-170,% AC","AS----",false,5200,800,17);
prefx[19]= new Affx("Godly",60,"171-200,% AC","AS----",false,6200,800,20);
prefx[20]= new Affx("Tin",3,"-10-6% to-hit","--W-BJ",true,0,0,-3);
prefx[21]= new Affx("Brass",1,"-5-1% to-hit","--W-BJ",true,0,0,-2);
prefx[22]= new Affx("Bronze",1,"1-5,% to-hit","--W-BJ",false,100,400,2);
prefx[23]= new Affx("Iron",4,"6-10,% to-hit","--W-BJ",false,600,400,3);
prefx[24]= new Affx("Steel",6,"11-15,% to-hit","--W-BJ",false,1100,400,5);
prefx[25]= new Affx("Silver",9,"16-20,% to-hit","--W-BJ",false,1600,400,7);
prefx[26]= new Affx("Gold",12,"21-30,% to-hit","--W-BJ",false,2100,900,9);
prefx[27]= new Affx("Platinum",16,"31-40,% to-hit","--W-B-",false,3100,900,11);
prefx[28]= new Affx("Mithril",20,"41-60,% to-hit","--W-B-",false,4100,1900,13);
prefx[29]= new Affx("Meteoric",23,"61-80,% to-hit","--W-B-",false,6100,3900,15);
prefx[30]= new Affx("Weird",35,"81-100,% to-hit","--W-B-",false,10100,3900,17);
prefx[31]= new Affx("Strange",60,"101-150,% to-hit","--W-B-",false,14100,5900,20);
prefx[32]= new Affx("Clumsy",5,"-75-50% damage","--WTB-",true,0,0,-7);
prefx[33]= new Affx("Dull",1,"-45-25% damage","--WTB-",true,0,0,-5);
prefx[34]= new Affx("Sharp",1,"20-35,% damage","--WTB-",true,350,600,5);
prefx[35]= new Affx("Fine",6,"36-50,% damage","--WTB-",false,1100,600,7);
prefx[36]= new Affx("Warrior's",10,"51-65,% damage","--WTB-",false,1850,600,13);
prefx[37]= new Affx("Soldier's",15,"66-80,% damage","--WT--",false,2600,1350,17);
prefx[38]= new Affx("Lord's",19,"81-95,% damage","--WT--",false,4100,1850,21);
prefx[39]= new Affx("Knight's",23,"96-110,% damage","--WT--",false,6100,2350,26);
prefx[40]= new Affx("Master's",28,"111-125,% damage","--WT--",false,8600,4400,30);
prefx[41]= new Affx("Champion's",40,"126-150,% damage","--WT--",false,15200,8800,33);
prefx[42]= new Affx("King's",28,"151-175,% damage","--WT--",false,24100,10900,38);
prefx[43]= new Affx("Useless",5,"-100-100%,damage","--W-B-",true,0,0,-8);
prefx[44]= new Affx("Bent",3,"-75-50% damage","--W-B-",true,0,0,-4);
prefx[45]= new Affx("Weak",1,"-45-25% damage","--W-B-",true,0,0,-3);
prefx[46]= new Affx("Jagged",4,"20-35,% damage","--W-B-",false,250,200,3);
prefx[47]= new Affx("Deadly",6,"36-50,% damage","--W-B-",false,500,200,4);
prefx[48]= new Affx("Heavy",9,"51-65,% damage","--W-B-",false,750,200,5);
prefx[49]= new Affx("Vicious",12,"66-80,% damage","--W-B-",false,1000,450,8);
prefx[50]= new Affx("Brutal",16,"81-95,% damage","--W-B-",false,1500,450,10);
prefx[51]= new Affx("Massive",20,"96-110,% damage","--W-B-",false,2000,450,13);
prefx[52]= new Affx("Savage",23,"111-125,% damage","--W-B-",false,2500,500,15);
prefx[53]= new Affx("Ruthless",35,"126-150,% damage","--W-B-",false,10100,4900,17);
prefx[54]= new Affx("Merciless",60,"151-175,% damage","--W-B-",false,15000,5000,20);
prefx[55]= new Affx("White",4,"10-20,% resist magic","ASWTBJ",false,500,1000,2);
prefx[56]= new Affx("Pearl",10,"21-30,% resist magic","ASWTBJ",false,2100,900,2);
prefx[57]= new Affx("Ivory",16,"31-40,% resist magic","ASWTBJ",false,3100,900,2);
prefx[58]= new Affx("Crystal",20,"41-50,% resist magic","ASWTBJ",false,8200,3800,3);
prefx[59]= new Affx("Diamond",26,"51-60,% resist magic","ASWTBJ",false,17100,2900,5);
prefx[60]= new Affx("Red",4,"10-20,% resist fire","ASWTBJ",false,500,1000,2);
prefx[61]= new Affx("Crimson (+21-30%)",10,"21-30,% resist fire","ASWTBJ",false,2100,900,2);
prefx[62]= new Affx("Crimson (+31-40%)",16,"31-40,% resist fire","ASWTBJ",false,3100,900,2);
prefx[63]= new Affx("Garnet",20,"41-50,% resist fire","ASWTBJ",false,8200,3800,3);
prefx[64]= new Affx("Ruby",26,"51-60,% resist fire","ASWTBJ",false,17100,2900,5);
prefx[65]= new Affx("Blue",4,"10-20,% resist lightning","ASWTBJ",false,500,1000,2);
prefx[66]= new Affx("Azure",10,"21-30,% resist lightning","ASWTBJ",false,2100,900,2);
prefx[67]= new Affx("Lapis",16,"31-40,% resist lightning","ASWTBJ",false,3100,900,2);
prefx[68]= new Affx("Cobalt",20,"41-50,% resist lightning","ASWTBJ",false,8200,3800,3);
prefx[69]= new Affx("Sapphire",26,"51-60,% resist lightning","ASWTBJ",false,17100,2900,5);
prefx[70]= new Affx("Topaz",8,"10-15,% resist all","ASWTBJ",false,2000,3000,3);
prefx[71]= new Affx("Amber",12,"16-20,% resist all","ASWTBJ",false,7400,2600,3);
prefx[72]= new Affx("Jade",18,"21-30,% resist all","ASWTBJ",false,11000,4000,3);
prefx[73]= new Affx("Obsidian",24,"31-40,% resist all","ASWTBJ",false,24000,16000,4);
prefx[74]= new Affx("Emerald",31,"41-50,% resist all","-SWTB-",false,61000,14000,7);
prefx[75]= new Affx("Angel's",15,"+1 spel levels","---T--",false,25000,0,2);
prefx[76]= new Affx("Arch-Angel's",25,"+2 spel levels","---T--",false,50000,0,3);
prefx[77]= new Affx("Plentiful",4,"x2 charges","---T--",false,2000,0,2);
prefx[78]= new Affx("Bountiful",9,"x3 charges","---T--",false,3000,0,3);
prefx[79]= new Affx("Flaming",7,"+1-10 fire damage","--WT--",false,5000,0,2);
prefx[80]= new Affx("Lightning",18,"+2-20 lightning damage","--WT--",false,10000,0,2);

//suffix declarations
suffx = new Array(95);
suffx[0]= new Affx("Frailty",3,"-10-6 strength","ASW-BJ",true,0,0,-3);
suffx[1]= new Affx("Weakness",1,"-5-1 strength","ASW-BJ",true,0,0,-2);
suffx[2]= new Affx("Strength",1,"1-5, strength","ASW-BJ",false,200,800,2);
suffx[3]= new Affx("Might",5,"6-10, strength","ASW-BJ",false,1200,800,3);
suffx[4]= new Affx("Power",11,"11-15, strength","ASW-BJ",false,2200,800,4);
suffx[5]= new Affx("Giants",17,"16-20, strength","A-W-BJ",false,3200,1800,7);
suffx[6]= new Affx("Titans",23,"21-30, strength","--W--J",false,5200,4800,10);
suffx[7]= new Affx("the Fool",3,"-10-6 magic","ASWTBJ",true,0,0,-3);
suffx[8]= new Affx("Dyslexia",1,"-5-1 magic","ASWTBJ",true,0,0,-2);
suffx[9]= new Affx("Magic",1,"1-5, magic","ASWTBJ",false,200,800,2);
suffx[10]= new Affx("the Mind",5,"6-10, magic","ASWTBJ",false,1200,800,3);
suffx[11]= new Affx("Brilliance",11,"11-15, magic","ASWTBJ",false,2200,800,4);
suffx[12]= new Affx("Sorcery",17,"16-20, magic","A-WTBJ",false,3200,1800,7);
suffx[13]= new Affx("Wizardry",23,"21-30, magic","---T-J",false,5200,4800,10);
suffx[14]= new Affx("Paralysis",3,"-10-6 dexterity","ASW-BJ",true,0,0,-3);
suffx[15]= new Affx("Atrophy",1,"-5-1 dexterity","ASW-BJ",true,0,0,-2);
suffx[16]= new Affx("Dexterity",1,"1-5, dexterity","ASW-BJ",false,200,800,2);
suffx[17]= new Affx("Skill",5,"6-10, dexterity","ASW-BJ",false,1200,800,3);
suffx[18]= new Affx("Accuracy",11,"11-15, dexterity","ASW-BJ",false,2200,800,4);
suffx[19]= new Affx("Precision",17,"16-20, dexterity","A-W-BJ",false,3200,1800,7);
suffx[20]= new Affx("Perfection",23,"21-30, dexterity","-----J",false,5200,4800,10);
suffx[21]= new Affx("Illness",3,"-10-6 vitality","ASW-BJ",true,0,0,-3);
suffx[22]= new Affx("Disease",1,"-5-1 vitality","ASW-BJ",true,0,0,-2);
suffx[23]= new Affx("Vitality",1,"1-5, vitality","ASW-BJ",false,200,800,2);
suffx[24]= new Affx("Zest",5,"6-10, vitality","ASW-BJ",false,1200,800,3);
suffx[25]= new Affx("Vim",11,"11-15, vitality","ASW-BJ",false,2200,800,4);
suffx[26]= new Affx("Vigor",17,"16-20, vitality","A-W-BJ",false,3200,1800,7);
suffx[27]= new Affx("Life",23,"21-30, vitality","-----J",false,5200,4800,10);
suffx[28]= new Affx("Trouble",12,"-10-6 all attributes","ASW-BJ",true,0,0,-10);
suffx[29]= new Affx("the Pit",5,"-5-1 all attributes","ASW-BJ",true,0,0,-5);
suffx[30]= new Affx("the Sky",5,"1-3, all attributes","ASW-BJ",false,800,3200,5);
suffx[31]= new Affx("the Moon",11,"4-7, all attributes","ASW-BJ",false,4800,3200,10);
suffx[32]= new Affx("the Stars",17,"8-11, all attributes","A-W-BJ",false,8800,3200,15);
suffx[33]= new Affx("the Heavens",25,"12-15, all attributes","--W-BJ",false,12800,7200,20);
suffx[34]= new Affx("the Zodiac",30,"16-20, all attributes","-----J",false,20800,19200,30);
suffx[35]= new Affx("the Vulture",4,"-25-11 life","AS---J",true,0,0,-4);
suffx[36]= new Affx("the Jackal",1,"-10-1 life","AS---J",true,0,0,-2);
suffx[37]= new Affx("the Fox",1,"10-15, life","AS---J",false,100,900,2);
suffx[38]= new Affx("the Jaguar",5,"16-20, life","AS---J",false,1100,900,3);
suffx[39]= new Affx("the Eagle",9,"21-30, life","AS---J",false,2100,1900,5);
suffx[40]= new Affx("the Wolf",15,"31-40, life","AS---J",false,4100,1900,7);
suffx[41]= new Affx("the Tiger",21,"41-50, life","AS---J",false,6100,3900,9);
suffx[42]= new Affx("the Lion",27,"51-60, life","A----J",false,10100,4900,11);
suffx[43]= new Affx("the Mammoth",35,"61-80, life","A-----",false,15100,3900,12);
suffx[44]= new Affx("the Whale",60,"81-100, life","A-----",false,19100,10900,13);
suffx[45]= new Affx("Quality",2,"1-2, damage","--W-B-",false,100,100,2);
suffx[46]= new Affx("Maiming",7,"3-5, damage","--W-B-",false,1300,200,3);
suffx[47]= new Affx("Slaying",15,"6-8, damage","--W---",false,2600,400,5);
suffx[48]= new Affx("Gore",25,"9-12, damage","--W---",false,4100,900,8);
suffx[49]= new Affx("Carnage",35,"13-16, damage","--W---",false,5100,4900,10);
suffx[50]= new Affx("Slaughter",60,"17-20, damage","--W---",false,10100,4900,13);
suffx[51]= new Affx("Pain",4,"+4-2 dfe","AS---J",true,0,0,-4);
suffx[52]= new Affx("Tears",2,"+1 dfe","AS---J",true,0,0,-2);
suffx[53]= new Affx("Health",2,"-1 dfe","AS---J",false,200,0,2);
suffx[54]= new Affx("Protection",6,"-2 dfe","AS----",false,400,0,4);
suffx[55]= new Affx("Absorption",12,"-3 dfe","AS----",false,1001,0,10);
suffx[56]= new Affx("Deflection",20,"-4 dfe","A-----",false,2500,0,15);
suffx[57]= new Affx("Osmosis",50,"5-6, dfe","A-----",false,7500,2500,20);
suffx[58]= new Affx("Flame",1,"+1-3 fire damage","----B-",false,2000,0,2);
suffx[59]= new Affx("Fire",11,"+1-6 fire damage","----B-",false,4000,0,4);
suffx[60]= new Affx("Burning",35,"+1-16 fire damage","----B-",false,6000,0,6);
suffx[61]= new Affx("Shock",13,"+1-6 lightning damage","----B-",false,6000,0,2);
suffx[62]= new Affx("Lightning",21,"+1-10 lightning damage","----B-",false,8000,0,4);
suffx[63]= new Affx("Thunder",60,"+1-20 lightning damage","----B-",false,12000,0,6);
suffx[64]= new Affx("the Leech",8,"+3% life steal","--W---",false,7500,0,3);
suffx[65]= new Affx("Blood",19,"+5% life steal","--W---",false,15000,0,3);
suffx[66]= new Affx("the Bat",8,"+3% mana steal","--W---",false,7500,0,3);
suffx[67]= new Affx("Vampires",19,"+5% mana steal","--W---",false,15000,0,3);
suffx[68]= new Affx("Piercing",1,"pierce armor (2-6 AC)","--W-B-",false,1000,0,3);
suffx[69]= new Affx("Puncturing",9,"pierce armor (4-12 AC)","--W-B-",false,2000,0,6);
suffx[70]= new Affx("Bashing",17,"pierce armor (8-24 AC)","--W---",false,4000,0,12);
suffx[71]= new Affx("the Dark",6,"-40% light radius","A-W--J",true,0,0,-3);
suffx[72]= new Affx("the Night",3,"-20% light radius","A-W--J",true,0,0,-2);
suffx[73]= new Affx("Light",4,"+20% light radius","A-W--J",false,750,0,2);
suffx[74]= new Affx("Radiance",8,"+40% light radius","A-W--J",false,1500,0,3);
suffx[75]= new Affx("Readiness",1,"quick attack","--WTB-",false,2000,0,2);
suffx[76]= new Affx("Swiftness",10,"fast attack","--WTB-",false,4000,0,4);
suffx[77]= new Affx("Speed",19,"fastest attack","--WT--",false,8000,0,8);
suffx[78]= new Affx("Haste",27,"fastest attack","--WT--",false,16000,0,16);
suffx[79]= new Affx("Balance",1,"fast hit recovery","A----J",false,2000,0,2);
suffx[80]= new Affx("Stability",10,"faster hit recovery","A----J",false,4000,0,4);
suffx[81]= new Affx("Harmony",20,"fastest hit recovery","A----J",false,8000,0,8);
suffx[82]= new Affx("Fragility",3,"durability = 1","ASW---",true,0,0,-4);
suffx[83]= new Affx("Brittleness",1,"-75-26% durability","ASW---",true,0,0,-2);
suffx[84]= new Affx("Sturdiness",1,"-26-75% durability","ASW---",false,100,0,2);
suffx[85]= new Affx("Craftsmanship",6,"51-100% durability","ASW---",false,200,0,2);
suffx[86]= new Affx("Structure",12,"101-200% durability","ASW---",false,300,0,2);
suffx[87]= new Affx("Many",3,"100% durability","----B-",false,750,0,2);
suffx[88]= new Affx("Plenty",7,"200% durability","----B-",false,1500,0,3);
suffx[89]= new Affx("the Ages",25,"indestructible","ASW---",false,600,0,5);
suffx[90]= new Affx("Corruption",5,"removes all mana","ASW---",true,-1000,0,2);
suffx[91]= new Affx("the Bear",5,"knocks target back","--WTB-",false,750,0,2);
suffx[92]= new Affx("Blocking",5,"fast block","-S----",false,4000,0,4);
suffx[93]= new Affx("Thieves",11,"absorb half trap damage","AS---J",false,1500,0,2);
suffx[94]= new Affx("Thorns",1,"attacker takes 1-3 damage","AS----",false,500,0,2);

//spell declarations
function Spel(nam,qlvvl,charges,spawnnStaff,P)
{
	this.nam = nam;
	this.qlvvl = qlvvl;
	this.charges = charges;
	this.spawnnStaff = spawnnStaff;
	this.P = P;
}
spel = new Array(28);
spel[0] = new Spel("Apocalypse",15,"8-12",true,400);
spel[1] = new Spel("Blood Star",13,"20-60",true,360);
spel[2] = new Spel("Bone Spirit",7,"20-60",true,160);
spel[3] = new Spel("Chain Lightning",7,"20-60",true,150);
spel[4] = new Spel("Charged Bolt",1,"40-80",true,10);
spel[5] = new Spel("Elemental",6,"20-60",true,140);
spel[6] = new Spel("Fireball",7,"40-80",true,60);
spel[7] = new Spel("Firebolt",1,"40-80",true,10);
spel[8] = new Spel("Fire Wall",2,"8-16",true,80);
spel[9] = new Spel("Flame Wave",8,"20-40",true,130);
spel[10] = new Spel("Flash",4,"20-40",true,100);
spel[11] = new Spel("Golem",9,"16-32",true,220);
spel[12] = new Spel("Guardian",8,"16-32",true,190);
spel[13] = new Spel("Healing",1,"20-40",true,10);
spel[14] = new Spel("Heal Other",1,"20-40",true,10);
spel[15] = new Spel("Holy Bolt",1,"40-80",true,10);
spel[16] = new Spel("Identify",null,null,false,null);
spel[17] = new Spel("Inferno",1,"20-40",true,20);
spel[18] = new Spel("Infravision",null,null,false,null);
spel[19] = new Spel("Lightning",3,"20-60",true,30);
spel[20] = new Spel("Mana Shield",5,"4-10",true,240);
spel[21] = new Spel("Nova",10,"16-32",true,260);
spel[22] = new Spel("Phasing",6,"40-80",true,40);
spel[23] = new Spel("Resurrect",5,"4-10",true,50);
spel[24] = new Spel("Stone Curse",5,"8-16",true,160);
spel[25] = new Spel("Telekinesis",2,"20-40",true,40);
spel[26] = new Spel("Teleport",12,"16-32",true,250);
spel[27] = new Spel("Town Portal",3,"8-12",true,40);

//invalid affix combinations
invalidComb = new Array(48);
invalidComb[0]="Angel's";	invalidComb[24]="Trouble";
invalidComb[1]="Arch-Angel's";	invalidComb[25]="Trouble";
invalidComb[2]="Blessed";	invalidComb[26]="Trouble";
invalidComb[3]="Frog's";	invalidComb[27]="Vitality";
invalidComb[4]="Glorious";	invalidComb[28]="Trouble";
invalidComb[5]="Gold";		invalidComb[29]="Pit";
invalidComb[6]="Gold";		invalidComb[30]="the Vulture";
invalidComb[7]="Gold";		invalidComb[31]="Corruption";
invalidComb[8]="Gold";		invalidComb[32]="Pain";
invalidComb[9]="Gold";		invalidComb[33]="the Dark";
invalidComb[10]="Gold";	invalidComb[34]="the Bear";
invalidComb[11]="Mithril";	invalidComb[35]="Trouble";
invalidComb[12]="Platinum";	invalidComb[36]="Trouble";
invalidComb[13]="Saintly";	invalidComb[37]="Trouble";
invalidComb[14]="Silver";	invalidComb[38]="the Pit";
invalidComb[15]="Silver";	invalidComb[39]="the Vulture";
invalidComb[16]="Silver";	invalidComb[40]="corruption";
invalidComb[17]="Silver";	invalidComb[41]="Pain";
invalidComb[18]="Silver";	invalidComb[42]="the Dark";
invalidComb[19]="Silver";	invalidComb[43]="the Bear";
invalidComb[20]="Spider's";	invalidComb[44]="Vitality";
invalidComb[21]="Vicious";	invalidComb[45]="Vim";
invalidComb[22]="Vicious";	invalidComb[46]="Vigor";
invalidComb[23]="Vicious";	invalidComb[47]="Radiance";

///////////////////////////////
//BEGIN TABLE DISPLAY FUNCTIONS
///////////////////////////////

//change based on class
function updateClas()
{
	var i;
	var iClas = document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text;
	var prefxIndex=1;
	var suffxIndex=1;
	var previousP = ((document.SelectItm.Prefx.selectedIndex >= 0)? document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].text: 0);
	var previousS = ((document.SelectItm.Suffx.selectedIndex >= 0)? document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].text: 0);

	
	//clear current entries
	for (i=(document.SelectItm.Prefx.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Prefx.options[i]=null;
	}
	for (i=(document.SelectItm.Bse.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Bse.options[i]=null;
	}	
	for (i=(document.SelectItm.Suffx.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Suffx.options[i]=null;
	}

	if (iClas != "Select this first")
	{
		document.SelectItm.Prefx.disabled = false;
		document.SelectItm.Bse.disabled = false;
		document.SelectItm.Suffx.disabled = false;
	}
	else
	{
		for (i=(document.SelectItm.Pvalue.options.length)-1; i>=0; i--)
		{
			document.SelectItm.Pvalue.options[i]=null;
		}
		for (i=(document.SelectItm.Svalue.options.length)-1; i>=0; i--)
		{
			document.SelectItm.Svalue.options[i]=null;
		}
		document.SelectItm.Prefx.options[0] = new Option(" "," ",true);
		document.SelectItm.Prefx.options[1] = new Option("1234567890"," ");
		document.SelectItm.Prefx.disabled = true;
		document.SelectItm.Bse.options[0] = new Option(" "," ",true);
		document.SelectItm.Bse.options[1] = new Option("Select this first"," ");
		document.SelectItm.Bse.disabled = true;
		document.SelectItm.Suffx.options[0] = new Option(" "," ",true);
		document.SelectItm.Suffx.options[1] = new Option("1234567890"," ");
		document.SelectItm.Suffx.disabled = true;
		document.SelectItm.Pvalue.options[0] = new Option(" "," ",true);
		document.SelectItm.Pvalue.options[1] = new Option("12345"," ");
		document.SelectItm.Pvalue.disabled = true;
		document.SelectItm.Svalue.options[0] = new Option(" "," ",true);
		document.SelectItm.Svalue.options[1] = new Option("12345"," ");
		document.SelectItm.Svalue.disabled = true;
		return;
	}

	//new entries
	if (iClas == "Helm")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("A") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == document.SelectItm.Prefx.options[prefxIndex-1].text)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}
		}

		//base item
		for (i=0; i<=5; i++)
		{
			document.SelectItm.Bse.options[i] = new Option(bseEQ[i].nam,i);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("A") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClas == "Armor")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("A") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == document.SelectItm.Prefx.options[prefxIndex-1].text)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}

		}

		//base item
		for (i=6; i<=22; i++)
		{
			document.SelectItm.Bse.options[i-6] = new Option(bseEQ[i].nam,i);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("A") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClas == "Shield")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("S") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == prefx[i].nam)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}
		}

		//base item
		for (i=23; i<=28; i++)
		{
			document.SelectItm.Bse.options[i-23] = new Option(bseEQ[i].nam,i);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("S") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClas == "Sword")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("W") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == document.SelectItm.Prefx.options[prefxIndex-1].text)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}
		}

		//base item
		for (i=29; i<=40; i++)
		{
			document.SelectItm.Bse.options[i-29] = new Option(bseEQ[i].nam,i);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("W") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClas == "Axe")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("W") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == document.SelectItm.Prefx.options[prefxIndex-1].text)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}
		}

		//base item
		for (i=41; i<=46; i++)
		{
			document.SelectItm.Bse.options[i-41] = new Option(bseEQ[i].nam,i);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("W") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClas == "Club")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("W") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == document.SelectItm.Prefx.options[prefxIndex-1].text)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}
		}

		//base item
		for (i=47; i<=53; i++)
		{
			document.SelectItm.Bse.options[i-47] = new Option(bseEQ[i].nam,i);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("W") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClas == "Bow")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("B") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == document.SelectItm.Prefx.options[prefxIndex-1].text)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}
		}

		//base item
		for (i=54; i<=61; i++)
		{
			document.SelectItm.Bse.options[i-54] = new Option(bseEQ[i].nam,i);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("B") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClas == "Staff")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("T") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == document.SelectItm.Prefx.options[prefxIndex-1].text)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}
		}

		//base item
		for (i=62; i<=66; i++)
		{
			document.SelectItm.Bse.options[i-62] = new Option(bseEQ[i].nam,i);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("T") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
		for (i=0; i<spel.length; i++)
		{
			if (spel[i].spawnnStaff)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option(spel[i].nam,i);
			}
		}
	}
	else if (iClas == "Jewelry")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option("None","None",true);
		for (i=0; i<prefx.length; i++)
		{
			if (prefx[i].spawnn.indexOf("J") > -1)
			{
				document.SelectItm.Prefx.options[prefxIndex++] = new Option((prefx[i].cursd) ? prefx[i].nam + " (c)": prefx[i].nam,i);
				if (previousP == document.SelectItm.Prefx.options[prefxIndex-1].text)
				{
					document.SelectItm.Prefx.options[prefxIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItm.Bse.options[0] = new Option("Ring",67,true);
		document.SelectItm.Bse.options[1] = new Option("Amulet",68);

		//suffix
		document.SelectItm.Suffx.options[0] = new Option("None","None",true);
		for (i=0; i<suffx.length; i++)
		{
			if (suffx[i].spawnn.indexOf("J") > -1)
			{
				document.SelectItm.Suffx.options[suffxIndex++] = new Option((suffx[i].cursd) ? suffx[i].nam + " (c)": suffx[i].nam,i);
				if (previousS == document.SelectItm.Suffx.options[suffxIndex-1].text)
				{
					document.SelectItm.Suffx.options[suffxIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClas == "Unique")
	{
		//prefix
		document.SelectItm.Prefx.options[0] = new Option(" "," ",true);
		document.SelectItm.Prefx.options[1] = new Option("1234567890"," ");
		document.SelectItm.Prefx.disabled = true;

		//base item
		for (i=0; i<unique.length; i++)
		{
			document.SelectItm.Bse.options[i] = new Option(unique[i].nam,unique[i].nam);
		}

		//suffix
		document.SelectItm.Suffx.options[0] = new Option(" "," ",true);
		document.SelectItm.Suffx.options[1] = new Option("1234567890"," ");
		document.SelectItm.Suffx.disabled = true;

		//values
		for (i=(document.SelectItm.Pvalue.options.length)-1; i>=0; i--)
		{
			document.SelectItm.Pvalue.options[i]=null;
		}
		for (i=(document.SelectItm.Svalue.options.length)-1; i>=0; i--)
		{
			document.SelectItm.Svalue.options[i]=null;
		}
		document.SelectItm.Pvalue.options[0] = new Option(" "," ",true);
		document.SelectItm.Pvalue.options[1] = new Option("12345"," ");
		document.SelectItm.Pvalue.disabled = true;
		document.SelectItm.Svalue.options[0] = new Option(" "," ",true);
		document.SelectItm.Svalue.options[1] = new Option("12345"," ");
		document.SelectItm.Svalue.disabled = true;

		//source
		document.getElementById("Gris").style.color = "#4C4C4C";
		document.SelectItm.Source[0].disabled = true;
		document.getElementById("Wirt").style.color = "#4C4C4C";
		document.SelectItm.Source[1].disabled = true;
		document.getElementById("Sale").style.color = "#A0A5C8";
		document.SelectItm.Source[2].disabled = false;
		return;
	}

	//source
	if (iClas == "Staff")
	{
		document.getElementById("Gris").firstChild.nodeValue = "Adria";
	}
	else
	{
		document.getElementById("Gris").firstChild.nodeValue = "Griswold";
	}
	document.getElementById("Sale").style.color = "#A0A5C8";
	document.SelectItm.Source[2].disabled = false;
	updatePrefx();
	updateSuffx();
}

//change based on prefix
function updatePrefx()
{
	var i;	var j;
	var vRange;	var vBegin;
	var prefxS = ((document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].value=="None")? "None": prefx[document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].value]);
	var previousV = document.SelectItm.Pvalue.options[document.SelectItm.Pvalue.selectedIndex].text;

	//clear current entries
	for (i=(document.SelectItm.Pvalue.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Pvalue.options[i]=null;
	}
	if (document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].text == "None")
	{
		document.SelectItm.Pvalue.disabled = true;
		document.SelectItm.Pvalue.options[0] = new Option(" "," ",true);
		document.SelectItm.Pvalue.options[1] = new Option("12345"," ");
	}
	else
	{
		document.SelectItm.Pvalue.disabled = false;

		//create new entries
		if (prefxS.range == 0)
		{
			document.SelectItm.Pvalue.options[0] = new Option(prefxS.value,prefx.bse);
		}
		else
		{
			vBegin = parseInt(prefxS.value.substring(0,prefxS.value.indexOf("-")));
			vRange = parseInt(prefxS.value.substring(prefxS.value.indexOf("-")+1,prefxS.value.indexOf(","))) - parseInt(prefxS.value.substring(0,prefxS.value.indexOf("-")));
			for (i=0; i<=vRange; i++)
			{
				document.SelectItm.Pvalue.options[i] = new Option((prefxS.cursd? "-": "+")+(vBegin+i)+prefxS.value.substring(prefxS.value.indexOf(",")+1,prefxS.value.length),i);
				if (previousV == document.SelectItm.Pvalue.options[i].text)
				{
					document.SelectItm.Pvalue.options[i].selected = true;
				}
			}
		}
	}

	//grey out invalid suffixs
	if (prefxS == "None")
	{
		if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff" || document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Jewelry")
		{
			document.SelectItm.Suffx.options[0].style.color = "#4C4C4C";
			for (i=1; i<=document.SelectItm.Suffx.options.length-1; i++)
			{
				document.SelectItm.Suffx.options[i].style.color = "#A0A5C8";
			}
		}
		else
		{
			for (i=0; i<=document.SelectItm.Suffx.options.length-1; i++)
			{
				document.SelectItm.Suffx.options[i].style.color = "#A0A5C8";
			}
		}
	}
	else
	{
		//rules for a staff	
		if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff")
		{
			if (prefxS.nam == "Plentiful" || prefxS.nam == "Bountiful")
			{
				for (i=0; i<13; i++)
				{
					document.SelectItm.Suffx.options[i].style.color = "#4C4C4C";
				}
				for (i=13; i<=document.SelectItm.Suffx.options.length-1; i++)
				{
					document.SelectItm.Suffx.options[i].style.color = "#A0A5C8";
				}
			}
			else
			{
				document.SelectItm.Suffx.options[0].style.color = "#A0A5C8";
				for (i=1; i<13; i++)
				{
					var qlvvlMin = ((prefxS.qlvvl < suffx[document.SelectItm.Suffx.options[i].value].qlvvl) ? prefxS.qlvvl: suffx[document.SelectItm.Suffx.options[i].value].qlvvl);
					var qlvvlMax = ((prefxS.qlvvl >= suffx[document.SelectItm.Suffx.options[i].value].qlvvl) ? prefxS.qlvvl: suffx[document.SelectItm.Suffx.options[i].value].qlvvl);
					if (qlvvlMax > 50)
					{
						qlvvlMax=50;
					}
					if (qlvvlMin < Math.floor(qlvvlMax/2))
					{
						document.SelectItm.Suffx.options[i].style.color = "#4C4C4C";
					}
					else
					{
						document.SelectItm.Suffx.options[i].style.color = "#A0A5C8";
					}
				}
			}
		}
		else //rules for a prefix and suffix
		{
			document.SelectItm.Suffx.options[0].style.color = "#A0A5C8";
			for (i=1; i<=document.SelectItm.Suffx.options.length-1; i++)
			{
				var qlvvlMin = ((prefxS.qlvvl < suffx[document.SelectItm.Suffx.options[i].value].qlvvl) ? prefxS.qlvvl: suffx[document.SelectItm.Suffx.options[i].value].qlvvl);
				var qlvvlMax = ((prefxS.qlvvl >= suffx[document.SelectItm.Suffx.options[i].value].qlvvl) ? prefxS.qlvvl: suffx[document.SelectItm.Suffx.options[i].value].qlvvl);
				if (qlvvlMax > 50)
				{
					qlvvlMax=50;
				}
				if (qlvvlMin < Math.floor(qlvvlMax/2))
				{
					document.SelectItm.Suffx.options[i].style.color = "#4C4C4C";
				}
				else
				{
					document.SelectItm.Suffx.options[i].style.color = "#A0A5C8";
				}

				//check invalid affix combinations
				for (j=0; j<24; j++)
				{
					if (prefxS.nam == invalidComb[j] && suffx[document.SelectItm.Suffx.options[i].value].nam == invalidComb[j+24])
					{
						document.SelectItm.Suffx.options[i].style.color = "#4C4C4C";
					}
				}
			}
		}
	}
	var Pcolor = document.SelectItm.Prefx.options[document.SelectItm.Prefx.options.selectedIndex].style.color;
	for (i=0; i<document.SelectItm.Pvalue.options.length; i++)
	{
		document.SelectItm.Pvalue.options[i].style.color = Pcolor;
	}
	Pcolor = document.SelectItm.Suffx.options[document.SelectItm.Suffx.options.selectedIndex].style.color;
	for (i=0; i<document.SelectItm.Svalue.options.length; i++)
	{
		document.SelectItm.Svalue.options[i].style.color = Pcolor;
	}
	if (document.SelectItm.Prefx.options[document.SelectItm.Prefx.options.selectedIndex].style.color != document.SelectItm.Clas.options[0].style.color)
	{
		valid = false;
	}
	updateSource();
}

//change based on suffix
function updateSuffx()
{
	var i;	var j;
	var vRange;	var vBegin;
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff" && document.SelectItm.Suffx.options.selectedIndex >= 13 && document.SelectItm.Suffx.options.selectedIndex > 0)
	{
		var suffxS = spel[document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value];
	}
	else
	{
		var suffxS = ((document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value=="None")? "None": suffx[document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value]);
	}
	var previousV = document.SelectItm.Svalue.options[document.SelectItm.Svalue.selectedIndex].text;

	//clear current entries
	for (i=(document.SelectItm.Svalue.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Svalue.options[i]=null;
	}
	if (document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].text == "None")
	{
		document.SelectItm.Svalue.disabled = true;
		document.SelectItm.Svalue.options[0] = new Option(" "," ",true);
		document.SelectItm.Svalue.options[1] = new Option("12345"," ");
	}
	else
	{
		document.SelectItm.Svalue.disabled = false;

		//create new entries
		if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff" && document.SelectItm.Suffx.options.selectedIndex >= 13)
		{
			vBegin = parseInt(suffxS.charges.substring(0,suffxS.charges.indexOf("-")));
			vRange = parseInt(suffxS.charges.substring(suffxS.charges.indexOf("-")+1,suffxS.charges.length)) - parseInt(suffxS.charges.substring(0,suffxS.charges.indexOf("-")));
			for (i=0; i<=vRange; i++)
			{
				document.SelectItm.Svalue.options[i] = new Option("+"+(vBegin+i)+" charges",vBegin+i);
				if (previousV == document.SelectItm.Svalue.options[i].text)
				{
					document.SelectItm.Svalue.options[i].selected = true;
				}
			}
		}
		else
		{
			if (suffxS.range == 0)
			{
				document.SelectItm.Svalue.options[0] = new Option(suffxS.value,suffx.bse);
			}
			else
			{
				vBegin = parseInt(suffxS.value.substring(0,suffxS.value.indexOf("-")));
				vRange = parseInt(suffxS.value.substring(suffxS.value.indexOf("-")+1,suffxS.value.indexOf(","))) - parseInt(suffxS.value.substring(0,suffxS.value.indexOf("-")));
				for (i=0; i<=vRange; i++)
				{
					if (suffxS.nam == "Osmosis")
					{
						document.SelectItm.Svalue.options[i] = new Option("-"+(vBegin+i)+suffxS.value.substring(suffxS.value.indexOf(",")+1,suffxS.value.length),i);
						if (previousV == document.SelectItm.Svalue.options[i].text)
						{
							document.SelectItm.Svalue.options[i].selected = true;
						}
					}
					else
					{
						document.SelectItm.Svalue.options[i] = new Option((suffxS.cursd? "-": "+")+(vBegin+i)+suffxS.value.substring(suffxS.value.indexOf(",")+1,suffxS.value.length),i);
						if (previousV == document.SelectItm.Svalue.options[i].text)
						{
							document.SelectItm.Svalue.options[i].selected = true;
						}
					}
				}
			}
		}
	}

	//gray out invalid prefixs
	if (suffxS == "None")
	{
		if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff" || document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Jewelry")
		{
			document.SelectItm.Prefx.options[0].style.color = "#4C4C4C";
			for (i=1; i<=document.SelectItm.Prefx.options.length-1; i++)
			{
				if (prefx[document.SelectItm.Prefx.options[i].value].nam == "Bountiful" || prefx[document.SelectItm.Prefx.options[i].value].nam == "Plentiful")
				{
					document.SelectItm.Prefx.options[i].style.color = "#4C4C4C";
				}
				else
				{
					document.SelectItm.Prefx.options[i].style.color = "#A0A5C8";
				}
			}
		}
		else
		{
			for (i=0; i<=document.SelectItm.Prefx.options.length-1; i++)
			{
				document.SelectItm.Prefx.options[i].style.color = "#A0A5C8";
			}
		}
	}
	else
	{
		//rules for a staff	
		if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff")
		{
			if (document.SelectItm.Suffx.options.selectedIndex >= 13)
			{
				for (i=0; i<=document.SelectItm.Prefx.options.length-1; i++)
				{
					document.SelectItm.Prefx.options[i].style.color = "#A0A5C8";
				}
			}
			else
			{
				document.SelectItm.Prefx.options[0].style.color = "#A0A5C8";
				for (i=1; i<=document.SelectItm.Prefx.options.length-1; i++)
				{
					var qlvvlMin = ((suffxS.qlvvl < prefx[document.SelectItm.Prefx.options[i].value].qlvvl) ? suffxS.qlvvl: prefx[document.SelectItm.Prefx.options[i].value].qlvvl);
					var qlvvlMax = ((suffxS.qlvvl >= prefx[document.SelectItm.Prefx.options[i].value].qlvvl) ? suffxS.qlvvl: prefx[document.SelectItm.Prefx.options[i].value].qlvvl);
					if (qlvvlMax > 50)
					{
						qlvvlMax=50;
					}
					if (qlvvlMin < Math.floor(qlvvlMax/2) || prefx[document.SelectItm.Prefx.options[i].value].nam == "Bountiful" || prefx[document.SelectItm.Prefx.options[i].value].nam == "Plentiful")
					{
						document.SelectItm.Prefx.options[i].style.color = "#4C4C4C";
					}
					else
					{
						document.SelectItm.Prefx.options[i].style.color = "#A0A5C8";
					}
				}
			}
		}
		else //rules for a prefix and suffix
		{
			document.SelectItm.Prefx.options[0].style.color = "#A0A5C8";
			for (i=1; i<=document.SelectItm.Prefx.options.length-1; i++)
			{
				var qlvvlMin = ((suffxS.qlvvl < prefx[document.SelectItm.Prefx.options[i].value].qlvvl) ? suffxS.qlvvl: prefx[document.SelectItm.Prefx.options[i].value].qlvvl);
				var qlvvlMax = ((suffxS.qlvvl >= prefx[document.SelectItm.Prefx.options[i].value].qlvvl) ? suffxS.qlvvl: prefx[document.SelectItm.Prefx.options[i].value].qlvvl);
				if (qlvvlMax > 50)
				{
					qlvvlMax=50;
				}
				if (qlvvlMin < Math.floor(qlvvlMax/2) || prefx[document.SelectItm.Prefx.options[i].value].nam == "Bountiful" || prefx[document.SelectItm.Prefx.options[i].value].nam == "Plentiful")
				{
					document.SelectItm.Prefx.options[i].style.color = "#4C4C4C";
				}
				else
				{
					document.SelectItm.Prefx.options[i].style.color = "#A0A5C8";
				}

				//check invalid affix combinations
				for (j=0; j<24; j++)
				{
					if (suffxS.nam == invalidComb[j] && suffx[document.SelectItm.Suffx.options[i].value].nam == invalidComb[j+24])
					{
						document.SelectItm.Suffx.options[i].style.color = "#4C4C4C";
					}
				}
			}
		}
	}
	var Pcolor = document.SelectItm.Prefx.options[document.SelectItm.Prefx.options.selectedIndex].style.color;
	for (i=0; i<document.SelectItm.Pvalue.options.length; i++)
	{
		document.SelectItm.Pvalue.options[i].style.color = Pcolor;
	}
	Pcolor = document.SelectItm.Suffx.options[document.SelectItm.Suffx.options.selectedIndex].style.color;
	for (i=0; i<document.SelectItm.Svalue.options.length; i++)
	{
		document.SelectItm.Svalue.options[i].style.color = Pcolor;
	}
	if (document.SelectItm.Suffx.options[document.SelectItm.Suffx.options.selectedIndex].style.color != document.SelectItm.Clas.options[0].style.color)
	{
		valid = false;
	}
	updateSource();
}

//change based on bse item
function updateSource()
{
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text != "Unique")
	{
	var bseS = bseEQ[document.SelectItm.Bse.options[document.SelectItm.Bse.selectedIndex].value];
	var prefxS = ((document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].value=="None")? "None": prefx[document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].value]);
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff" && document.SelectItm.Suffx.options.selectedIndex >= 13 && document.SelectItm.Suffx.options.selectedIndex > 0)
	{
		var suffxS = spel[document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value];
	}
	else
	{
		var suffxS = ((document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value=="None")? "None": suffx[document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value]);
	}
	document.getElementById("Gris").style.color = "#A0A5C8";
	document.getElementById("Gris").style.fontStyle = "normal";
	document.getElementById("Wirt").style.color = "#A0A5C8";
	document.getElementById("Wirt").style.fontStyle = "normal";
	document.SelectItm.Source[0].disabled = false;
	document.SelectItm.Source[1].disabled = false;

	//rules for the prefix
	if (prefxS != "None" && document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text != "Staff")
	{
		if (prefxS.cursd)
		{
			document.getElementById("Gris").style.color = "#4C4C4C";
			document.getElementById("Gris").style.fontStyle = "italic";
			document.getElementById("Wirt").style.color = "#4C4C4C";
			document.getElementById("Wirt").style.fontStyle = "italic";
			document.SelectItm.Source[0].disabled = true;
			document.SelectItm.Source[1].disabled = true;
		}
		if (prefxS.qlvvl > 30)
		{
			document.getElementById("Gris").style.color = "#4C4C4C";
			document.getElementById("Gris").style.fontStyle = "italic";
			document.SelectItm.Source[0].disabled = true;
		}
		if (bseS.ilvvl < Math.floor(prefxS.qlvvl/4) || bseS.ilvvl > prefxS.qlvvl*2+1)
		{
			document.getElementById("Gris").style.color = "#4C4C4C";
			document.getElementById("Gris").style.fontStyle = "italic";
			document.SelectItm.Source[0].disabled = true;
		}
		if (bseS.ilvvl > prefxS.qlvvl)
		{
			document.getElementById("Wirt").style.color = "#4C4C4C";
			document.getElementById("Wirt").style.fontStyle = "italic";
			document.SelectItm.Source[1].disabled = true;
		}
	}

	//rules for base item alone
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff")
	{
		if (bseS.ilvvl > 16)
		{
			document.getElementById("Gris").style.color = "#4C4C4C";
			document.getElementById("Gris").style.fontStyle = "italic";
			document.SelectItm.Source[0].disabled = true;
		}
		document.getElementById("Wirt").style.color = "#4C4C4C";
		document.getElementById("Wirt").style.fontStyle = "italic";
		document.SelectItm.Source[1].disabled = true;
	}
	else if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Jewelry")
	{

		document.getElementById("Gris").style.color = "#4C4C4C";
		document.getElementById("Gris").style.fontStyle = "italic";
		document.getElementById("Wirt").style.color = "#4C4C4C";
		document.getElementById("Wirt").style.fontStyle = "italic";
		document.SelectItm.Source[0].disabled = true;
		document.SelectItm.Source[1].disabled = true;
	}

	//rules for the suffix
	if (suffxS != "None" && document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text != "Staff")
	{
		if (suffxS.cursd)
		{
			document.getElementById("Gris").style.color = "#4C4C4C";
			document.getElementById("Gris").style.fontStyle = "italic";
			document.getElementById("Wirt").style.color = "#4C4C4C";
			document.getElementById("Wirt").style.fontStyle = "italic";
			document.SelectItm.Source[0].disabled = true;
			document.SelectItm.Source[1].disabled = true;
		}
		if (suffxS.qlvvl > 30)
		{
			document.getElementById("Gris").style.color = "#4C4C4C";
			document.getElementById("Gris").style.fontStyle = "italic";
			document.SelectItm.Source[0].disabled = true;
		}
		if (bseS.ilvvl < Math.floor(suffxS.qlvvl/4) || bseS.ilvvl > suffxS.qlvvl*2+1)
		{
			document.getElementById("Gris").style.color = "#4C4C4C";
			document.getElementById("Gris").style.fontStyle = "italic";
			document.SelectItm.Source[0].disabled = true;
		}
		if (bseS.ilvvl > suffxS.qlvvl)
		{
			document.getElementById("Wirt").style.color = "#4C4C4C";
			document.getElementById("Wirt").style.fontStyle = "italic";
			document.SelectItm.Source[1].disabled = true;
		}
	}

	//rules if prefix and suffix are none
	if (prefxS == "None" && suffxS == "None")
	{
		document.getElementById("Wirt").style.color = "#4C4C4C";
		document.getElementById("Wirt").style.fontStyle = "italic";
		document.SelectItm.Source[1].disabled = true;
		if (bseS.ilvvl > 16)
		{
			document.getElementById("Gris").style.color = "#4C4C4C";
			document.getElementById("Gris").style.fontStyle = "italic";
			document.SelectItm.Source[0].disabled = true;
		}
	}
	}

	//change checked
	/*for (i=0; i<=2; i++)
	{
		if (document.SelectItem.Source[i].disabled)
		{
			document.SelectItem.Source[i].checked = false;
		}
	}

	if (document.SelectItem.Source[0].disabled && document.SelectItem.Source[0].checked)
	{
		document.SelectItem.Source[0].checked = false;
		document.SelectItem.Source[1].checked = true;
	}
	if (document.SelectItem.Source[1].disabled && document.SelectItem.Source[1].checked)
	{
		document.SelectItem.Source[1].checked = false;
		document.SelectItem.Source[2].checked = true;
	}*/
}

//reset web form
function reset()
{
	var i

	//clear current entries
	for (i=(document.SelectItm.Clas.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Clas.options[i]=null;
	}
	for (i=(document.SelectItm.Prefx.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Prefx.options[i]=null;
	}
	for (i=(document.SelectItm.Bse.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Bse.options[i]=null;
	}	
	for (i=(document.SelectItm.Suffx.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Suffx.options[i]=null;
	}
	for (i=(document.SelectItm.Pvalue.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Pvalue.options[i]=null;
	}
	for (i=(document.SelectItm.Svalue.options.length)-1; i>=0; i--)
	{
		document.SelectItm.Svalue.options[i]=null;
	}

	//create new entries
	document.SelectItm.Clas.options[0] = new Option("Select this first","invalid",true);
	document.SelectItm.Clas.options[1] = new Option("Helm","Helm");
	document.SelectItm.Clas.options[2] = new Option("Armor","Armor");
	document.SelectItm.Clas.options[3] = new Option("Shield","Shield");
	document.SelectItm.Clas.options[4] = new Option("Sword","Sword");
	document.SelectItm.Clas.options[5] = new Option("Axe","Axe");
	document.SelectItm.Clas.options[6] = new Option("Club","Club");
	document.SelectItm.Clas.options[7] = new Option("Bow","Bow");
	document.SelectItm.Clas.options[8] = new Option("Staff","Staff");
	document.SelectItm.Clas.options[9] = new Option("Jewelry","Jewelry");
	document.SelectItm.Clas.options[10] = new Option("Unique","Unique");

	document.SelectItm.Prefx.options[0] = new Option(" "," ",true);
	document.SelectItm.Prefx.options[1] = new Option("1234567890"," ");
	document.SelectItm.Prefx.disabled = true;
	document.SelectItm.Bse.options[0] = new Option(" "," ",true);
	document.SelectItm.Bse.options[1] = new Option("Select this first"," ");
	document.SelectItm.Bse.disabled = true;
	document.SelectItm.Suffx.options[0] = new Option(" "," ",true);
	document.SelectItm.Suffx.options[1] = new Option("1234567890"," ");
	document.SelectItm.Suffx.disabled = true;
	document.SelectItm.Pvalue.options[0] = new Option(" "," ",true);
	document.SelectItm.Pvalue.options[1] = new Option("12345"," ");
	document.SelectItm.Pvalue.disabled = true;
	document.SelectItm.Svalue.options[0] = new Option(" "," ",true);
	document.SelectItm.Svalue.options[1] = new Option("12345"," ");
	document.SelectItm.Svalue.disabled = true;

	document.getElementById("Gris").style.color = "#A0A5C8";
	document.SelectItm.Source[0].disabled = false;
	document.SelectItm.Source[0].checked = true;
	document.getElementById("Wirt").style.color = "#A0A5C8";
	document.SelectItm.Source[1].disabled = false;
	document.getElementById("Sale").style.color = "#A0A5C8";
	document.SelectItm.Source[2].disabled = false;
	document.getElementById("Gris").firstChild.nodeValue = "Griswold";
	document.getElementById("Price").firstChild.nodeValue = "0";
}

//////////////////////
//BEGIN PRICE FUNCTION
//////////////////////

//verify valid item
function validat()
{
	var prefxS = ((document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].value=="None")? "None": prefx[document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].value]);
	var bseS = bseEQ[document.SelectItm.Bse.options[document.SelectItm.Bse.selectedIndex].value];
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff" && document.SelectItm.Suffx.options.selectedIndex >= 13 && document.SelectItm.Suffx.options.selectedIndex > 0)
	{
		var suffxS = spel[document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value];
	}
	else
	{
		var suffxS = ((document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value=="None")? "None": suffx[document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value]);
	}

	//if item selected
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Select this first")
	{
		return false;
	}

	//rules for a unique
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Unique")
	{
		return true;
	}

	//rules for a staff	
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff")
	{
		if (prefxS == "None" && suffxS == "None")
		{
			return false;
		}
		if (prefxS != "None")
		{
			if ((prefxS.nam == "Plentiful" || prefxS.nam == "Bountiful") && document.SelectItm.Suffx.selectedIndex < 13)
			{
				return false;
			}
		}
		if (prefxS !="None" && document.SelectItm.Suffx.selectedIndex >= 1 && document.SelectItm.Suffx.selectedIndex < 13)
		{
			var qlvvlMin = ((prefxS.qlvvl < suffxS.qlvvl) ? prefxS.qlvvl: suffxS.qlvvl);
			var qlvvlMax = ((prefxS.qlvvl >= suffxS.qlvvl) ? prefxS.qlvvl: suffxS.qlvvl);
			if (qlvvlMin < Math.floor(qlvvlMax/2) || qlvvlMax > 34)
			{
				return false;
			}		
		}
	}

	//rules for jewelry
	else if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Jewelry")
	{
		if (prefxS == "None" && suffxS == "None")
		{
			return false;
		}
	}

	//rules for both prefx and suffx
	else if (prefxS != "None" && suffxS != "None")
	{
		var qlvvlMin = ((prefxS.qlvvl < suffxS.qlvvl) ? prefxS.qlvvl: suffxS.qlvvl);
		var qlvvlMax = ((prefxS.qlvvl >= suffxS.qlvvl) ? prefxS.qlvvl: suffxS.qlvvl);
		if (qlvvlMax >= 50)
		{
			qlvvlMax = 50;
		}

		if (qlvvlMin < Math.floor(qlvvlMax/2))
		{
			return false;
		}

		//check invalid affx combinations
		for (i=0; i<24; i++)
		{
			if (prefxS.nam == invalidComb[i] && suffxS.nam == invalidComb[i+24])
			{
				return false;
			}
		}
	}
	return true;
}

//calculate price
function calcPrice()
{
	//check for valid item
	if (!validat())
	{
		document.getElementById("Price").firstChild.nodeValue = "0";
		return;
	}

	var prefxS = ((document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].value=="None")? "None": prefx[document.SelectItm.Prefx.options[document.SelectItm.Prefx.selectedIndex].value]);
	var bseS = bseEQ[document.SelectItm.Bse.options[document.SelectItm.Bse.selectedIndex].value];
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff" && document.SelectItm.Suffx.options.selectedIndex >= 13 && document.SelectItm.Suffx.options.selectedIndex > 0)
	{
		var suffxS = spel[document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value];
	}
	else
	{
		var suffxS = ((document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value=="None")? "None": suffx[document.SelectItm.Suffx.options[document.SelectItm.Suffx.selectedIndex].value]);
	}

	//define variables
	var price;
	var Bp=0;
	var Bs=0;
	var Qp=0;
	var Qs=0;
	var I=0;
	var H=0;
	var P=0;
	var Mp=0;
	var Ms=0;

	//calculate price
	if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Unique")
	{
		price = unique[document.SelectItm.Bse.selectedIndex].price;
	}
	else if (document.SelectItm.Clas.options[document.SelectItm.Clas.selectedIndex].text == "Staff" && document.SelectItm.Suffx.options.selectedIndex >= 13)
	{
		I = bseS.price;
		H = parseInt(suffxS.charges.substring(0,suffxS.charges.indexOf("-"))) + document.SelectItm.Svalue.selectedIndex;
		P = suffxS.P;

		if (prefxS != "None")
		{
			Bp = prefxS.B;
			Mp = prefxS.M;
			if (prefxS.range != 0)
			{
				Qp = Math.floor(Math.floor(document.SelectItm.Pvalue.selectedIndex/(document.SelectItm.Pvalue.options.length-1)*100)/100*prefxS.range);
			}
			else
			{
				Qp = 0;
			}
		}
		if (Mp >= 0)
		{
			price = Bp + Qp + (I + H*P)*Mp;
		}
		else if (Mp < 0)
		{
			price = Bp + Qp + (I + H*P)/Mp;
		}
		
		if (price < 1)
		{
			price = 1;
		}
	}
	else
	{
		I = bseS.price;
		if (prefxS != "None")
		{
			Bp = prefxS.B;
			Mp = prefxS.M;
			if (prefxS.range != 0)
			{
				Qp = Math.floor(Math.floor(document.SelectItm.Pvalue.selectedIndex/(document.SelectItm.Pvalue.options.length-1)*100)/100*prefxS.range);
			}
			else
			{
				Qp = 0;
			}
		}
		if (suffxS != "None")
		{
			Bs = suffxS.B;
			Ms = suffxS.M;
			if (suffxS.range != 0)
			{
				Qs = Math.floor(Math.floor(document.SelectItm.Svalue.selectedIndex/(document.SelectItm.Svalue.options.length-1)*100)/100*suffxS.range);
			}
			else
			{
				Qs = 0;
			}
		}

		if (Mp+Ms == 0)
		{
			price = I;
		}
		else if (Mp+Ms > 0)
		{
			price = Bp + Bs + Qp + Qs + I*(Mp + Ms);
		}
		else if (Mp+Ms < 0)
		{
			price = Bp + Bs + Qp + Qs + I/(Mp + Ms);
		}

		if (price < 1)
		{
			price = 1;
		}
	}

	//modify for source
	for (i=0; i<=2; i++)
	{
		if (document.SelectItm.Source[i].checked == true && document.SelectItm.Source[i].disabled == true)
		{
			document.getElementById("Price").firstChild.nodeValue = "0";
			return;
		}
	}

	if (document.SelectItm.Source[0].checked == true)
	{
		if (price > 140000)
		{
			document.getElementById("Price").firstChild.nodeValue = "This item is too expensive to buy";
			return;
		}
		price = Math.floor(price);
	}
	else if (document.SelectItm.Source[1].checked == true)
	{
		if (price > 90000)
		{
			document.getElementById("Price").firstChild.nodeValue = "This item is too expensive to buy";
			return;
		}
		price = Math.floor(price*1.5);
	}
	else if (document.SelectItm.Source[2].checked == true)
	{
		price = Math.floor(price/4);
		if (price < 1)
		{
			price = 1;
		}
	}
	else
	{
		document.getElementById("Price").firstChild.nodeValue = "Please choose source";
		return;
	}
	document.getElementById("Price").firstChild.nodeValue = ""+price;
	return;
}
