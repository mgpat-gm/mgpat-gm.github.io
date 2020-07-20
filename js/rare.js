/*
This Diablo item rarity calculator was created by John Ellertson aka the_Langolier.
Copying, hosting, or other uses of this code may be done freely so long as it remains
unchanged and credit is given to the original author.  The style rules above, however,
may be changed for aesthetic purpsoses only.  The information used by this
calculator was obtained in Jarulf's Guide to Diablo and Hellfire including items,
affixes, monsters, and all the information in Chapter 3.8.  To report any errors or
bugs, send me a Private Message using the forum software.

Special thanks to Jarulf for his guide and his insight into monster generation routines.
This calculator would not have been possible otherwise.
*/

///////////////////////////////////////////
//BEGIN PREFIX/BASE ITEM/SUFFIX DEFINITIONS
///////////////////////////////////////////

//base item declarations
function Item(name,ilvl,iClass)
{
	this.name = name;
	this.ilvl = ilvl;
	this.iClass = iClass;
}
baseEQ = new Array(72);
baseEQ[0]=new Item("Cap",1,"Helm");				baseEQ[1]=new Item("Skull Cap",4,"Helm");			baseEQ[2]=new Item("Helm",8,"Helm");
baseEQ[3]=new Item("Full Helm",12,"Helm");			baseEQ[4]=new Item("Crown",16,"Helm");				baseEQ[5]=new Item("Great Helm",20,"Helm");
baseEQ[6]=new Item("Rags",1,"Light Armor");			baseEQ[7]=new Item("Cape",1,"Light Armor");			baseEQ[8]=new Item("Cloak",2,"Light Armor");
baseEQ[9]=new Item("Robe",3,"Light Armor");			baseEQ[10]=new Item("Quilted Armor",4,"Light Armor");		baseEQ[11]=new Item("Leather Armor",6,"Light Armor");
baseEQ[12]=new Item("Hard Leather Armor",7,"Light Armor");	baseEQ[13]=new Item("Studded Leather Armor",9,"Light Armor");	baseEQ[14]=new Item("Ring Mail",11,"Medium Armor");
baseEQ[15]=new Item("Chain Mail",13,"Medium Armor");		baseEQ[16]=new Item("Scale Mail",15,"Medium Armor");		baseEQ[17]=new Item("Splint Mail",17,"Medium Armor");
baseEQ[18]=new Item("Breast Plate",16,"Heavy Armor");		baseEQ[19]=new Item("Plate Mail",19,"Heavy Armor");		baseEQ[20]=new Item("Field Plate",21,"Heavy Armor");
baseEQ[21]=new Item("Gothic Plate",23,"Heavy Armor");		baseEQ[22]=new Item("Full Plate Mail",25,"Heavy Armor");	baseEQ[23]=new Item("Buckler",1,"Shield");
baseEQ[24]=new Item("Small Shield",5,"Shield");			baseEQ[25]=new Item("Large Shield",9,"Shield");			baseEQ[26]=new Item("Kite Shield",14,"Shield");
baseEQ[27]=new Item("Gothic Shield",23,"Shield");		baseEQ[28]=new Item("Tower Shield",20,"Shield");		baseEQ[29]=new Item("Dagger",1,"Sword.1");
baseEQ[30]=new Item("Short Sword",1,"Sword.1");			baseEQ[31]=new Item("Sabre",1,"Sword.1");			baseEQ[32]=new Item("Scimitar",4,"Sword.1");
baseEQ[33]=new Item("Blade",4,"Sword.1");			baseEQ[34]=new Item("Falchion",2,"Sword.1");			baseEQ[35]=new Item("Long Sword",6,"Sword.1");
baseEQ[36]=new Item("Claymore",5,"Sword.1");			baseEQ[37]=new Item("Broad Sword",8,"Sword.1");			baseEQ[38]=new Item("Bastard Sword",10,"Sword.1");
baseEQ[39]=new Item("Two-Handed Sword",14,"Sword.2");		baseEQ[40]=new Item("Great Sword",17,"Sword.2");		baseEQ[41]=new Item("Small Axe",2,"Axe");
baseEQ[42]=new Item("Axe",4,"Axe");				baseEQ[43]=new Item("Large Axe",6,"Axe");			baseEQ[44]=new Item("Broad Axe",8,"Axe");
baseEQ[45]=new Item("Battle Axe",10,"Axe");			baseEQ[46]=new Item("Great Axe",12,"Axe");			baseEQ[47]=new Item("Club",1,"Club.1");
baseEQ[48]=new Item("Spiked Club",4,"Club.1");			baseEQ[49]=new Item("Mace",2,"Club.1");				baseEQ[50]=new Item("Morning Star",3,"Club.1");
baseEQ[51]=new Item("Flail",7,"Club.1");			baseEQ[52]=new Item("War Hammer",5,"Club.1");			baseEQ[53]=new Item("Maul",10,"Club.2");
baseEQ[54]=new Item("Short Bow",1,"Bow");			baseEQ[55]=new Item("Long Bow",5,"Bow");			baseEQ[56]=new Item("Hunter's Bow",3,"Bow");
baseEQ[57]=new Item("Composite Bow",7,"Bow");			baseEQ[58]=new Item("Short Battle Bow",9,"Bow");		baseEQ[59]=new Item("Long Battle Bow",11,"Bow");
baseEQ[60]=new Item("Short War Bow",15,"Bow");			baseEQ[61]=new Item("Long War Bow",19,"Bow");			baseEQ[62]=new Item("Short Staff",1,"Staff");
baseEQ[63]=new Item("Long Staff",4,"Staff");			baseEQ[64]=new Item("Composite Staff",6,"Staff");		baseEQ[65]=new Item("Quarter Staff",9,"Staff");
baseEQ[66]=new Item("War Staff",12,"Staff");			baseEQ[67]=new Item("Ring",5,"Jewelry");			baseEQ[68]=new Item("Ring",10,"Jewelry");
baseEQ[69]=new Item("Ring",15,"Jewelry");			baseEQ[70]=new Item("Amulet",8,"Jewelry");			baseEQ[71]=new Item("Amulet",16,"Jewelry");

otherBase = new Array(34);
otherBase[0]=new Item("Book of",2,"Book");		otherBase[1]=new Item("Book of",8,"Book");			otherBase[2]=new Item("Book of",14,"Book");
otherBase[3]=new Item("Book of",20,"Book");		otherBase[4]=new Item("of Full Healing",1,"Potion");		otherBase[5]=new Item("of Full Mana",1,"Potion");
otherBase[6]=new Item("of Healing",1,"Potion");		otherBase[7]=new Item("of Mana",1,"Potion");			otherBase[8]=new Item("of Full Rejuvenation",7,"Potion");
otherBase[9]=new Item("of Rejuvination",3,"Potion");	otherBase[10]=new Item("of Strength",15,"Elixer");		otherBase[11]=new Item("of Magic",15,"Elixer");
otherBase[12]=new Item("of Dexterity",15,"Elixer");	otherBase[13]=new Item("of Vitality",20,"Elixer");		otherBase[14]=new Item("of Healing",1,"Scroll");
otherBase[15]=new Item("of Identify",1,"Scroll");	otherBase[16]=new Item("of Inferno",1,"Scroll");		otherBase[17]=new Item("of Resurect",1,"Scroll");
otherBase[18]=new Item("of Lightning",4,"Scroll");	otherBase[19]=new Item("of Fire Wall",4,"Scroll");		otherBase[20]=new Item("of Town Portal",4,"Scroll");
otherBase[21]=new Item("of Flash",6,"Scroll");		otherBase[22]=new Item("of Stone Curse",6,"Scroll");		otherBase[23]=new Item("of Phasing",6,"Scroll");
otherBase[24]=new Item("of Fireball",8,"Scroll");	otherBase[25]=new Item("of Infravision",8,"Scroll");		otherBase[26]=new Item("of Mana Shield",8,"Scroll");
otherBase[27]=new Item("of Golem",10,"Scroll");		otherBase[28]=new Item("of Chain Lightning",10,"Scroll");	otherBase[29]=new Item("of Flame Wave",10,"Scroll");
otherBase[30]=new Item("of Guardian",12,"Scroll");	otherBase[31]=new Item("of Nova",14,"Scroll");			otherBase[32]=new Item("of Teleport",14,"Scroll");
otherBase[33]=new Item("of Apocalypse",22,"Scroll");

//prefix declarations
function Affix(name,qlvl,spawn,cursed,dChance)
{
	this.name = name;
	this.qlvl = qlvl;
	this.spawn = spawn;
	this.cursed = cursed;
	this.dChance = dChance;
}
prefix = new Array(83);
prefix[0]= new Affix("Hyena's",4,"---T-J",true,false);		prefix[1]= new Affix("Frog's",1,"---T-J",true,false);			prefix[2]= new Affix("Spider's",1,"---T-J",false,false);
prefix[3]= new Affix("Raven's",5,"---T-J",false,false);		prefix[4]= new Affix("Snake's",9,"---T-J",false,false);			prefix[5]= new Affix("Serpent's",15,"---T-J",false,false);
prefix[6]= new Affix("Drake's",21,"---T-J",false,false);	prefix[7]= new Affix("Dragon's",27,"---T-J",false,false);		prefix[8]= new Affix("Vulnerable",3,"AS----",true,true);
prefix[9]= new Affix("Rusted",1,"AS----",true,true);		prefix[10]= new Affix("Fine",1,"AS----",false,true);			prefix[11]= new Affix("Strong",3,"AS----",false,true);
prefix[12]= new Affix("Grand",6,"AS----",false,true);		prefix[13]= new Affix("Valiant",10,"AS----",false,true);		prefix[14]= new Affix("Glorious",14,"AS----",false,true);
prefix[15]= new Affix("Blessed",19,"AS----",false,true);	prefix[16]= new Affix("Saintly",24,"AS----",false,true);		prefix[17]= new Affix("Awesome",28,"AS----",false,true);
prefix[18]= new Affix("Holy",35,"AS----",false,true);		prefix[19]= new Affix("Godly",60,"AS----",false,true);			prefix[20]= new Affix("Tin",3,"--W-BJ",true,true);
prefix[21]= new Affix("Brass",1,"--W-BJ",true,true);		prefix[22]= new Affix("Bronze",1,"--W-BJ",false,true);			prefix[23]= new Affix("Iron",4,"--W-BJ",false,true);
prefix[24]= new Affix("Steel",6,"--W-BJ",false,true);		prefix[25]= new Affix("Silver",9,"--W-BJ",false,true);			prefix[26]= new Affix("Gold",12,"--W-BJ",false,true);
prefix[27]= new Affix("Platinum",16,"--W-B-",false,true);	prefix[28]= new Affix("Mithril",20,"--W-B-",false,true);		prefix[29]= new Affix("Meteoric",23,"--W-B-",false,true);
prefix[30]= new Affix("Weird",35,"--W-B-",false,true);		prefix[31]= new Affix("Strange",60,"--W-B-",false,true);		prefix[32]= new Affix("Clumsy",5,"--WTB-",true,true);
prefix[33]= new Affix("Dull",1,"--WTB-",true,true);		prefix[34]= new Affix("Sharp",1,"--WTB-",true,true);			prefix[35]= new Affix("Fine",6,"--WTB-",false,true);
prefix[36]= new Affix("Warrior's",10,"--WTB-",false,true);	prefix[37]= new Affix("Soldier's",15,"--WT--",false,true);		prefix[38]= new Affix("Lord's",19,"--WT--",false,true);
prefix[39]= new Affix("Knight's",23,"--WT--",false,true);	prefix[40]= new Affix("Master's",28,"--WT--",false,true);		prefix[41]= new Affix("Champion's",40,"--WT--",false,true);
prefix[42]= new Affix("King's",28,"--WT--",false,true);		prefix[43]= new Affix("Useless",5,"--W-B-",true,true);			prefix[44]= new Affix("Bent",3,"--W-B-",true,true);
prefix[45]= new Affix("Weak",1,"--W-B-",true,true);		prefix[46]= new Affix("Jagged",4,"--W-B-",false,true);			prefix[47]= new Affix("Deadly",6,"--W-B-",false,true);
prefix[48]= new Affix("Heavy",9,"--W-B-",false,true);		prefix[49]= new Affix("Vicious",12,"--W-B-",false,true);		prefix[50]= new Affix("Brutal",16,"--W-B-",false,true);
prefix[51]= new Affix("Massive",20,"--W-B-",false,true);	prefix[52]= new Affix("Savage",23,"--W-B-",false,true);			prefix[53]= new Affix("Ruthless",35,"--W-B-",false,true);
prefix[54]= new Affix("Merciless",60,"--W-B-",false,true);	prefix[55]= new Affix("White",4,"ASWTBJ",false,false);			prefix[56]= new Affix("Pearl",10,"ASWTBJ",false,false);
prefix[57]= new Affix("Ivory",16,"ASWTBJ",false,false);		prefix[58]= new Affix("Crystal",20,"ASWTBJ",false,false);		prefix[59]= new Affix("Diamond",26,"ASWTBJ",false,false);
prefix[60]= new Affix("Red",4,"ASWTBJ",false,false);		prefix[61]= new Affix("Crimson (+21-30%)",10,"ASWTBJ",false,false);	prefix[62]= new Affix("Crimson (+31-40%)",16,"ASWTBJ",false,false);
prefix[63]= new Affix("Garnet",20,"ASWTBJ",false,false);	prefix[64]= new Affix("Ruby",26,"ASWTBJ",false,false);			prefix[65]= new Affix("Blue",4,"ASWTBJ",false,false);
prefix[66]= new Affix("Azure",10,"ASWTBJ",false,false);		prefix[67]= new Affix("Lapis",16,"ASWTBJ",false,false);			prefix[68]= new Affix("Cobalt",20,"ASWTBJ",false,false);
prefix[69]= new Affix("Sapphire",26,"ASWTBJ",false,false);	prefix[70]= new Affix("Topaz",8,"ASWTBJ",false,false);			prefix[71]= new Affix("Amber",12,"ASWTBJ",false,false);
prefix[72]= new Affix("Jade",18,"ASWTBJ",false,false);		prefix[73]= new Affix("Obsidian",24,"ASWTBJ",false,false);		prefix[74]= new Affix("Emerald",31,"-SWTB-",false,false);
prefix[75]= new Affix("Angel's",15,"---T--",false,false);	prefix[76]= new Affix("Arch-Angel's",25,"---T--",false,false);		prefix[77]= new Affix("Plentiful",4,"---T--",false,false);
prefix[78]= new Affix("Bountiful",9,"---T--",false,false);	prefix[79]= new Affix("Flaming",7,"--WT--",false,false);		prefix[80]= new Affix("Lightning",18,"--WT--",false,false);
prefix[81]= new Affix("None",0,"------",false,false);		prefix[82]= new Affix("Any",0,"------",false,false);

//suffix declarations
suffix = new Array(97);
suffix[0]= new Affix("Frailty",3,"ASW-BJ",true,false);		suffix[1]= new Affix("Weakness",1,"ASW-BJ",true,false);		suffix[2]= new Affix("Strength",1,"ASW-BJ",false,false);
suffix[3]= new Affix("Might",5,"ASW-BJ",false,false);		suffix[4]= new Affix("Power",11,"ASW-BJ",false,false);		suffix[5]= new Affix("Giants",17,"A-W-BJ",false,false);
suffix[6]= new Affix("Titans",23,"--W--J",false,false);		suffix[7]= new Affix("the Fool",3,"ASWTBJ",true,false);		suffix[8]= new Affix("Dyslexia",1,"ASWTBJ",true,false);
suffix[9]= new Affix("Magic",1,"ASWTBJ",false,false);		suffix[10]= new Affix("the Mind",5,"ASWTBJ",false,false);	suffix[11]= new Affix("Brilliance",11,"ASWTBJ",false,false);
suffix[12]= new Affix("Sorcery",17,"A-WTBJ",false,false);	suffix[13]= new Affix("Wizardry",23,"--T-J",false,false);	suffix[14]= new Affix("Paralysis",3,"ASW-BJ",true,false);
suffix[15]= new Affix("Atrophy",1,"ASW-BJ",true,false);		suffix[16]= new Affix("Dexterity",1,"ASW-BJ",false,false);	suffix[17]= new Affix("Skill",5,"ASW-BJ",false,false);
suffix[18]= new Affix("Accuracy",11,"ASW-BJ",false,false);	suffix[19]= new Affix("Precision",17,"A-W-BJ",false,false);	suffix[20]= new Affix("Perfection",23,"----BJ",false,false);
suffix[21]= new Affix("Illness",3,"ASW-BJ",true,false);		suffix[22]= new Affix("Disease",1,"ASW-BJ",true,false);		suffix[23]= new Affix("Vitality",1,"ASW-BJ",false,false);
suffix[24]= new Affix("Zest",5,"ASW-BJ",false,false);		suffix[25]= new Affix("Vim",11,"ASW-BJ",false,false);		suffix[26]= new Affix("Vigor",17,"A-W-BJ",false,false);
suffix[27]= new Affix("Life",23,"-----J",false,false);		suffix[28]= new Affix("Trouble",12,"ASW-BJ",true,false);	suffix[29]= new Affix("the Pit",5,"ASW-BJ",true,false);
suffix[30]= new Affix("the Sky",5,"ASW-BJ",false,false);	suffix[31]= new Affix("the Moon",11,"ASW-BJ",false,false);	suffix[32]= new Affix("the Stars",17,"A-W-BJ",false,false);
suffix[33]= new Affix("the Heavens",25,"--W-BJ",false,false);	suffix[34]= new Affix("the Zodiac",30,"-----J",false,false);	suffix[35]= new Affix("the Vulture",4,"AS---J",true,false);
suffix[36]= new Affix("the Jackal",1,"AS---J",true,false);	suffix[37]= new Affix("the Fox",1,"AS---J",false,false);	suffix[38]= new Affix("the Jaguar",5,"AS---J",false,false);
suffix[39]= new Affix("the Eagle",9,"AS---J",false,false);	suffix[40]= new Affix("the Wolf",15,"AS---J",false,false);	suffix[41]= new Affix("the Tiger",21,"AS---J",false,false);
suffix[42]= new Affix("the Lion",27,"A----J",false,false);	suffix[43]= new Affix("the Mammoth",35,"A-----",false,false);	suffix[44]= new Affix("the Whale",60,"A-----",false,false);
suffix[45]= new Affix("Quality",2,"--W-B-",false,false);	suffix[46]= new Affix("Maiming",7,"--W-B-",false,false);	suffix[47]= new Affix("Slaying",15,"--W---",false,false);
suffix[48]= new Affix("Gore",25,"--W---",false,false);		suffix[49]= new Affix("Carnage",35,"--W---",false,false);	suffix[50]= new Affix("Slaughter",60,"--W---",false,false);
suffix[51]= new Affix("Pain",4,"AS---J",true,false);		suffix[52]= new Affix("Tears",2,"AS---J",true,false);		suffix[53]= new Affix("Health",2,"AS---J",false,false);
suffix[54]= new Affix("Protection",6,"AS----",false,false);	suffix[55]= new Affix("Absorption",12,"AS----",false,false);	suffix[56]= new Affix("Deflection",20,"A-----",false,false);
suffix[57]= new Affix("Osmosis",50,"A-----",false,false);	suffix[58]= new Affix("Flame",1,"----B-",false,false);		suffix[59]= new Affix("Fire",11,"----B-",false,false);
suffix[60]= new Affix("Burning",35,"----B-",false,false);	suffix[61]= new Affix("Shock",13,"----B-",false,false);		suffix[62]= new Affix("Lightning",21,"----B-",false,false);
suffix[63]= new Affix("Thunder",60,"----B-",false,false);	suffix[64]= new Affix("the Leech",8,"--W---",false,false);	suffix[65]= new Affix("Blood",19,"--W---",false,false);
suffix[66]= new Affix("the Bat",8,"--W---",false,false);	suffix[67]= new Affix("Vampires",19,"--W---",false,false);	suffix[68]= new Affix("Piercing",1,"--W-B-",false,false);
suffix[69]= new Affix("Puncturing",9,"--W-B-",false,false);	suffix[70]= new Affix("Bashing",17,"--W---",false,false);	suffix[71]= new Affix("the Dark",6,"A-W--J",true,false);
suffix[72]= new Affix("the Night",3,"A-W--J",true,false);	suffix[73]= new Affix("Light",4,"A-W--J",false,false);		suffix[74]= new Affix("Radiance",8,"A-W--J",false,false);
suffix[75]= new Affix("Readiness",1,"--WTB-",false,false);	suffix[76]= new Affix("Swiftness",10,"--WTB-",false,false);	suffix[77]= new Affix("Speed",19,"--WT--",false,false);
suffix[78]= new Affix("Haste",27,"--WT--",false,false);		suffix[79]= new Affix("Balance",1,"A----J",false,false);	suffix[80]= new Affix("Stability",10,"A----J",false,false);
suffix[81]= new Affix("Harmony",20,"A----J",false,false);	suffix[82]= new Affix("Fragility",3,"ASW---",true,false);	suffix[83]= new Affix("Brittleness",1,"ASW---",true,false);
suffix[84]= new Affix("Sturdiness",1,"ASW---",false,false);	suffix[85]= new Affix("Craftsmanship",6,"ASW---",false,false);	suffix[86]= new Affix("Structure",12,"ASW---",false,false);
suffix[87]= new Affix("Many",3,"----B-",false,false);		suffix[88]= new Affix("Plenty",7,"----B-",false,false);		suffix[89]= new Affix("the Ages",25,"ASW---",false,false);
suffix[90]= new Affix("Corruption",5,"ASW---",true,false);	suffix[91]= new Affix("the Bear",5,"--WTB-",false,false);	suffix[92]= new Affix("Blocking",5,"-S----",false,false);
suffix[93]= new Affix("Thieves",11,"AS---J",false,false);	suffix[94]= new Affix("Thorns",1,"AS----",false,false);		suffix[95]= new Affix("None",0,"------",false,false);
suffix[96]= new Affix("Any",0,"------",false,false);

//spell declarations
function Spell(name,qlvl,spawnStaff)
{
	this.name = name;
	this.qlvl = qlvl;
	this.spawnStaff = spawnStaff;
}
spell = new Array(28);
spell[0] = new Spell("Apocalypse",15,true);		spell[1] = new Spell("Blood Star",13,true);	spell[2] = new Spell("Bone Spirit",7,true);
spell[3] = new Spell("Chain Lightning",7,true);		spell[4] = new Spell("Charged Bolt",1,true);	spell[5] = new Spell("Elemental",6,true);
spell[6] = new Spell("Fireball",7,true);		spell[7] = new Spell("Firebolt",1,true);	spell[8] = new Spell("Fire Wall",2,true);
spell[9] = new Spell("Flame Wave",8,true);		spell[10] = new Spell("Flash",4,true);		spell[11] = new Spell("Golem",9,true);
spell[12] = new Spell("Guardian",8,true);		spell[13] = new Spell("Healing",1,true);	spell[14] = new Spell("Heal Other",1,true);
spell[15] = new Spell("Holy Bolt",1,true);		spell[16] = new Spell("Identify",null,false);	spell[17] = new Spell("Inferno",1,true);
spell[18] = new Spell("Infravision",null,false);	spell[19] = new Spell("Lightning",3,true);	spell[20] = new Spell("Mana Shield",5,true);
spell[21] = new Spell("Nova",10,true);			spell[22] = new Spell("Phasing",6,true);	spell[23] = new Spell("Resurrect",5,true);
spell[24] = new Spell("Stone Curse",5,true);		spell[25] = new Spell("Telekinesis",2,true);	spell[26] = new Spell("Teleport",12,true);
spell[27] = new Spell("Town Portal",3,true);

//invalid affix combinations
invalidCombo = new Array(48);
invalidCombo[0]="Angel's";	invalidCombo[24]="Trouble";
invalidCombo[1]="Arch-Angel's";	invalidCombo[25]="Trouble";
invalidCombo[2]="Blessed";	invalidCombo[26]="Trouble";
invalidCombo[3]="Frog's";	invalidCombo[27]="Vitality";
invalidCombo[4]="Glorious";	invalidCombo[28]="Trouble";
invalidCombo[5]="Gold";		invalidCombo[29]="Pit";
invalidCombo[6]="Gold";		invalidCombo[30]="the Vulture";
invalidCombo[7]="Gold";		invalidCombo[31]="Corruption";
invalidCombo[8]="Gold";		invalidCombo[32]="Pain";
invalidCombo[9]="Gold";		invalidCombo[33]="the Dark";
invalidCombo[10]="Gold";	invalidCombo[34]="the Bear";
invalidCombo[11]="Mithril";	invalidCombo[35]="Trouble";
invalidCombo[12]="Platinum";	invalidCombo[36]="Trouble";
invalidCombo[13]="Saintly";	invalidCombo[37]="Trouble";
invalidCombo[14]="Silver";	invalidCombo[38]="the Pit";
invalidCombo[15]="Silver";	invalidCombo[39]="the Vulture";
invalidCombo[16]="Silver";	invalidCombo[40]="corruption";
invalidCombo[17]="Silver";	invalidCombo[41]="Pain";
invalidCombo[18]="Silver";	invalidCombo[42]="the Dark";
invalidCombo[19]="Silver";	invalidCombo[43]="the Bear";
invalidCombo[20]="Spider's";	invalidCombo[44]="Vitality";
invalidCombo[21]="Vicious";	invalidCombo[45]="Vim";
invalidCombo[22]="Vicious";	invalidCombo[46]="Vigor";
invalidCombo[23]="Vicious";	invalidCombo[47]="Radiance";

////////////////////////////
//BEGIN MONSTER DECLARATIONS
////////////////////////////

//normal monsters
function Monster(name,mlvl)
{
	this.name = name;
	this.mlvl = mlvl;
}
monster = new Array(83);
monster[0] = new Monster("Zobmie",1);			monster[1] = new Monster("Ghoul",2);			monster[2] = new Monster("Rotting Carcass",4);		monster[3] = new Monster("Black Death",6);
monster[4] = new Monster("Fallen One",1);		monster[5] = new Monster("Carver",3);			monster[6] = new Monster("Devil Kin",5);		monster[7] = new Monster("Dark One",7);
monster[8] = new Monster("Skeleton",1);			monster[9] = new Monster("Corpse Axe",2);		monster[10] = new Monster("Burning Dead",4);		monster[11] = new Monster("Horror",6);
monster[12] = new Monster("Skeleton Archer",3);		monster[13] = new Monster("Corpse Bow",5);		monster[14] = new Monster("Burning Dead Archer",7);	monster[15] = new Monster("Horror Archer",9);
monster[16] = new Monster("Skeleton Captain",2);	monster[17] = new Monster("Corpse Captain",4);		monster[18] = new Monster("Burning Dead Captain",6);	monster[19] = new Monster("Horror Captain",8);
monster[20] = new Monster("Scavenger",2);		monster[21] = new Monster("Plague Eater",4);		monster[22] = new Monster("Shadow Beast",6);		monster[23] = new Monster("Bone Gasher",8);
monster[24] = new Monster("Fiend",3);			monster[25] = new Monster("Blink",7);			monster[26] = new Monster("Gloom",9);			monster[27] = new Monster("Familiar",13);
monster[28] = new Monster("Hidden",5);			monster[29] = new Monster("Stalker",9);			monster[30] = new Monster("Unseen",11);			monster[31] = new Monster("Illusion Weaver",13);
monster[32] = new Monster("Flesh Clan",8);		monster[33] = new Monster("Stone Clan",10);		monster[34] = new Monster("Fire Clan",12);		monster[35] = new Monster("Night Clan",14);
monster[36] = new Monster("Flesh Clan Archer",8);	monster[37] = new Monster("Stone Clan Archer",10);	monster[38] = new Monster("Fire Clan Archer",12);	monster[39] = new Monster("Night Clan Archer",14);
monster[40] = new Monster("Overlord",10);		monster[41] = new Monster("Mud Man",14);		monster[42] = new Monster("Toad Demon",16);		monster[43] = new Monster("Flayed One",20);
monster[44] = new Monster("Winged-Demon",9);		monster[45] = new Monster("Gargoyle",13);		monster[46] = new Monster("Blood Claw",19);		monster[47] = new Monster("Death Wing",23);
monster[48] = new Monster("Magma Demon",13);		monster[49] = new Monster("Blood Stone",14);		monster[50] = new Monster("Hell Stone",16);		monster[51] = new Monster("Lava Lord",18);
monster[52] = new Monster("Horned Demon",13);		monster[53] = new Monster("Mud Runner",15);		monster[54] = new Monster("Frost Charger",17);		monster[55] = new Monster("Obsidian Lord",19);
monster[56] = new Monster("Acid Beast",11);		monster[57] = new Monster("Poison Spitter",15);		monster[58] = new Monster("Pit Beast",21);		monster[59] = new Monster("Lava Maw",25);
monster[60] = new Monster("Red Storm",18);		monster[61] = new Monster("Storm Rider",20);		monster[62] = new Monster("Storm Lord",22);		monster[63] = new Monster("Maelstorm",24);
monster[64] = new Monster("Slayer",20);			monster[65] = new Monster("Guardian",22);		monster[66] = new Monster("Vortex Lord",24);		monster[67] = new Monster("Balrog",26);
monster[68] = new Monster("Cave Viper",21);		monster[69] = new Monster("Fire Drake",23);		monster[70] = new Monster("Gold Viper",25);		monster[71] = new Monster("Azure Drake",27);
monster[72] = new Monster("Succubus",24);		monster[73] = new Monster("Snow Witch",26);		monster[74] = new Monster("Hell Spawn",28);		monster[75] = new Monster("Soul Burner",30);
monster[76] = new Monster("Black Knight",24);		monster[77] = new Monster("Doom Guard",26);		monster[78] = new Monster("Steel Lord",28);		monster[79] = new Monster("Blood Knight",30);
monster[80] = new Monster("Counselor",25);		monster[81] = new Monster("Magistrate",27);		monster[82] = new Monster("Cabalist",29);		monster[83] = new Monster("Advocate",30);

//unique monsters
function uMonster(name,mlvl,ilvl,type,dlvl,prob)
{
	this.name = name;
	this.mlvl = mlvl;
	this.ilvl = ilvl;
	this.type = type;
	this.dlvl = dlvl;
	this.prob = prob;
}
uniqueMonster = new Array(69);
uniqueMonster[0] = new uMonster("Rotfeast the Hungry",1,4,"Zombie",2,0.18);			uniqueMonster[1] = new uMonster("Soulpus",1,4,"Zombie",2,0.18);			
uniqueMonster[2] = new uMonster("Rotcarnage",2,6,"Ghoul",3,0.13);				uniqueMonster[3] = new uMonster("Goretongue",4,6,"Rotting Carcass",3,0.13);
uniqueMonster[4] = new uMonster("Pukerat the Unclean",1,4,"Fallen One",2,0.20);			uniqueMonster[5] = new uMonster("Bongo",5,6,"Devil Kin",3,0.15);
uniqueMonster[6] = new uMonster("Bladeskin the Slasher",1,4,"Fallen One",2,0.20);		uniqueMonster[7] = new uMonster("Gutshank the Quick",3,6,"Carver",3,0.14);		
uniqueMonster[8] = new uMonster("Shadowcrow",7,10,"Dark One",5,0.26);				uniqueMonster[9] = new uMonster("Boneripper",1,4,"Skeleton",2,0.20);
uniqueMonster[10] = new uMonster("Bonehead Keenaxe",2,4,"Corpse Axe",2,0.20);			uniqueMonster[11] = new uMonster("Madeye the Dead",4,8,"Burning Dead",4,0.26);
uniqueMonster[12] = new uMonster("Deadeye",3,4,"Skeleton Archer",2,0.20);			uniqueMonster[13] = new uMonster("Skullfire",5,6,"Corpse Bow",3,0.24);
uniqueMonster[14] = new uMonster("Blackash the Burning",7,8,"Burning Dead Archer",4,0.26);	uniqueMonster[15] = new uMonster("Brokenhead Bangshield",6,6,"Corpse Captain",3,0.24);
uniqueMonster[16] = new uMonster("Shadowdrinker",10,10,"Horror Captain",5,0.25);		uniqueMonster[17] = new uMonster("Shadowbite",2,4,"Scavenger",2,0.28);
uniqueMonster[18] = new uMonster("El Chupacabras",4,6,"Plague Eater",3,0.20);			uniqueMonster[19] = new uMonster("Pulsecrawler",6,8,"Shadow Beast",4,0.31);
uniqueMonster[20] = new uMonster("Spine Eater",8,8,"Bone Gasher",4,0.31);			uniqueMonster[21] = new uMonster("Moonbender",7,8,"Blink",4,0.34);
uniqueMonster[22] = new uMonster("Wrathraven",7,10,"Blink",5,0.36);				uniqueMonster[23] = new uMonster("Foulwing",9,10,"Gloom",5,0.36);
uniqueMonster[24] = new uMonster("Warpskull",5,6,"Hidden",3,0.11);				uniqueMonster[25] = new uMonster("Deathshade Fleshmaul",10,12,"Stone Clan",6,0.22);
uniqueMonster[26] = new uMonster("Bloodgutter",12,12,"Fire Clan",6,0.22);			uniqueMonster[27] = new uMonster("Blighthorn Steelmace",14,14,"Night Clan",7,0.20);
uniqueMonster[28] = new uMonster("Bloodskin Darkbow",8,10,"Flesh Clan Archer",5,0.20);		uniqueMonster[29] = new uMonster("Blightfire",12,14,"Fire Clan Archer",7,0.20);
uniqueMonster[30] = new uMonster("Gorestone",14,14,"Night Clan Archer",7,0.20);			uniqueMonster[31] = new uMonster("Bilefroth the Pit Master",10,12,"Overlord",6,0.22);
uniqueMonster[32] = new uMonster("Barn Sludge",14,16,"Mud Man",8,0.18);				uniqueMonster[33] = new uMonster("Oozedrool",16,18,"Toad Demon",9,0.16);
uniqueMonster[34] = new uMonster("Nightwing the Cold",13,14,"Gargoyle",7,0.15);			uniqueMonster[35] = new uMonster("Goldblight of the Flame",19,20,"Blood Claw",10,0.13);
uniqueMonster[36] = new uMonster("Viletouch",23,24,"Death Wing",12,0.13);			uniqueMonster[37] = new uMonster("Firewound the Grim",13,16,"Magma Demon",8,0.14);
uniqueMonster[38] = new uMonster("Breakspine",15,18,"Mud Runner",9,0.13);			uniqueMonster[39] = new uMonster("Blackstorm",19,20,"Obsidian Lord",10,0.13);
uniqueMonster[40] = new uMonster("Bluehorn",17,22,"Frost Charger",11,0.14);			uniqueMonster[41] = new uMonster("Deathspit",11,12,"Acid Beast",6,0.28);
uniqueMonster[42] = new uMonster("Chaoshowler",15,16,"Poison Spitter",8,0.33);			uniqueMonster[43] = new uMonster("Plaguewrath",15,20,"Poison Spitter",10,0.31);
uniqueMonster[44] = new uMonster("Brokenstorm",18,18,"Red Storm",9,0.13);			uniqueMonster[45] = new uMonster("The Flayer",20,20,"Storm Rider",10,0.13);
uniqueMonster[46] = new uMonster("Doomcloud",24,26,"Maelstorm",13,0.11);			uniqueMonster[47] = new uMonster("Windspawn",24,24,"Vortex Lord",12,0.09);
uniqueMonster[48] = new uMonster("Gorefeast",24,26,"Vortex Lord",13,0.09);			uniqueMonster[49] = new uMonster("Blackskull",26,26,"Balrog",13,0.09);
uniqueMonster[50] = new uMonster("Fangspeir",21,22,"Cave Viper",11,0.19);			uniqueMonster[51] = new uMonster("Viperflame",23,24,"Fire Drake",12,0.18);
uniqueMonster[52] = new uMonster("Fangskin",25,28,"Gold Viper",14,0.21);			uniqueMonster[53] = new uMonster("Witchfire the Unholy",24,24,"Succubus",12,0.23);
uniqueMonster[54] = new uMonster("Witchmoon",26,26,"Snow Witch",13,0.23);			uniqueMonster[55] = new uMonster("Stareye the Witch",28,28,"Hell Spawn",14,0.22);
uniqueMonster[56] = new uMonster("Bloodlust",28,30,"Hell Spawn",15,1.00);			uniqueMonster[57] = new uMonster("Blackjade",28,33,"Hell Spawn",15,1);
uniqueMonster[58] = new uMonster("Red Vex",28,33,"Hellspawn",15,1.00);				uniqueMonster[59] = new uMonster("Lionskull the Bent",24,24,"Black Knight",12,0.09);
uniqueMonster[60] = new uMonster("Rustweaver",26,26,"Doom Guard",13,0.10);			uniqueMonster[61] = new uMonster("Graywar the Slayer",26,28,"Doom Guard",14,0.10);
uniqueMonster[62] = new uMonster("Steelskull the Hunter",28,28,"Steel Lord",14,0.10);		uniqueMonster[63] = new uMonster("Sir Gorash",30,32,"Blood Knight",16,1);
uniqueMonster[64] = new uMonster("Dreadjudge",27,28,"Magistrate",14,0.10);			uniqueMonster[65] = new uMonster("The Vizier",29,30,"Cabalist",15,0.17);
uniqueMonster[66] = new uMonster("Arch-Bishop Lazarus",30,35,"Advocate",15,1.00);		uniqueMonster[67] = new uMonster("the Butcher",1,6,"special",2,1.00);
uniqueMonster[68] = new uMonster("Skeleton King",9,14,"special",3,1.00);

///////////////////////////////
//BEGIN TABLE DISPLAY FUNCTIONS
///////////////////////////////

//update prefix/base item/suffix
function updateSelectMenu()
{
	var iClass = document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text;
	var prefixIndex=2;
	var suffixIndex=2;
	var previousP = ((document.SelectItem.Prefix.selectedIndex >= 0)? document.SelectItem.Prefix.options[document.SelectItem.Prefix.selectedIndex].text: 0);
	var previousS = ((document.SelectItem.Suffix.selectedIndex >= 0)? document.SelectItem.Suffix.options[document.SelectItem.Suffix.selectedIndex].text: 0);

	//clear current entries
	//document.SelectItem.Class.options[9]=null;
	for (i=(document.SelectItem.Prefix.options.length)-1; i>=0; i--)
	{
		document.SelectItem.Prefix.options[i]=null;
	}
	for (i=(document.SelectItem.Base.options.length)-1; i>=0; i--)
	{
		document.SelectItem.Base.options[i]=null;
	}	
	for (i=(document.SelectItem.Suffix.options.length)-1; i>=0; i--)
	{
		document.SelectItem.Suffix.options[i]=null;
	}
	if (iClass != "Select this first")
	{
		document.SelectItem.Prefix.disabled = false;
		document.SelectItem.Base.disabled = false;
		document.SelectItem.Suffix.disabled = false;
	}
	else
	{
		document.SelectItem.Prefix.disabled = true;
		document.SelectItem.Base.disabled = true;
		document.SelectItem.Suffix.disabled = true;
	}
	if (iClass == "Helm")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("A") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("Any","Helm",true);
		for (i=0; i<=5; i++)
		{
			document.SelectItem.Base.options[i+1] = new Option(baseEQ[i].name,baseEQ[i].name);
		}

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("A") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClass == "Armor")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("A") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("Light Armor","Light Armor",true);
		document.SelectItem.Base.options[1] = new Option("Medium Armor","Medium Armor");
		document.SelectItem.Base.options[2] = new Option("Heavy Armor","Heavy Armor");
		for (i=6; i<=22; i++)
		{
			document.SelectItem.Base.options[i-3] = new Option(baseEQ[i].name,baseEQ[i].name);
		}

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("A") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClass == "Shield")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("S") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("Any","Shield",true);
		for (i=23; i<=28; i++)
		{
			document.SelectItem.Base.options[i-22] = new Option(baseEQ[i].name,baseEQ[i].name);
		}

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("S") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClass == "Sword")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("W") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("One-Handed","Sword.1",true);
		document.SelectItem.Base.options[1] = new Option("Two-Handed","Sword.2");
		for (i=29; i<=40; i++)
		{
			document.SelectItem.Base.options[i-27] = new Option(baseEQ[i].name,baseEQ[i].name);
		}

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("W") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClass == "Axe")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("W") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("Any","Axe",true);
		for (i=41; i<=46; i++)
		{
			document.SelectItem.Base.options[i-40] = new Option(baseEQ[i].name,baseEQ[i].name);
		}

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("W") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClass == "Club")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("W") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("One-Handed","Club.1",true);
		for (i=47; i<=53; i++)
		{
			document.SelectItem.Base.options[i-46] = new Option(baseEQ[i].name,baseEQ[i].name);
		}

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("W") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClass == "Bow")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("B") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("Any","Bow",true);
		for (i=54; i<=61; i++)
		{
			document.SelectItem.Base.options[i-53] = new Option(baseEQ[i].name,baseEQ[i].name);
		}

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("B") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
	}
	else if (iClass == "Staff")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("T") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("Any","Staff",true);
		for (i=62; i<=66; i++)
		{
			document.SelectItem.Base.options[i-61] = new Option(baseEQ[i].name,baseEQ[i].name);
		}

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("T") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
		for (i=0; i<spell.length; i++)
		{
			if (spell[i].spawnStaff)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option(spell[i].name,i);
			}
		}
	}
	else if (iClass == "Jewelry")
	{
		//prefix
		document.SelectItem.Prefix.options[0] = new Option("None",81,true);
		document.SelectItem.Prefix.options[1] = new Option("Any",82);
		for (i=0; i<prefix.length; i++)
		{
			if (prefix[i].spawn.indexOf("J") > -1)
			{
				document.SelectItem.Prefix.options[prefixIndex++] = new Option((prefix[i].cursed) ? prefix[i].name + " (c)": prefix[i].name,i);
				if (previousP == document.SelectItem.Prefix.options[prefixIndex-1].text)
				{
					document.SelectItem.Prefix.options[prefixIndex-1].selected = true;
				}
			}
		}

		//base item
		document.SelectItem.Base.options[0] = new Option("Any","Jewelry",true);
		document.SelectItem.Base.options[1] = new Option("Ring","Ring");
		document.SelectItem.Base.options[2] = new Option("Amulet","Amulet");

		//suffix
		document.SelectItem.Suffix.options[0] = new Option("None",95,true);
		document.SelectItem.Suffix.options[1] = new Option("Any",96);
		for (i=0; i<suffix.length; i++)
		{
			if (suffix[i].spawn.indexOf("J") > -1)
			{
				document.SelectItem.Suffix.options[suffixIndex++] = new Option((suffix[i].cursed) ? suffix[i].name + " (c)": suffix[i].name,i);
				if (previousS == document.SelectItem.Suffix.options[suffixIndex-1].text)
				{
					document.SelectItem.Suffix.options[suffixIndex-1].selected = true;
				}
			}
		}
	}
	validate();
}

//verify valid item
function validate()
{
	var node = document.createTextNode("");
	document.getElementById("Valid").appendChild(node);

	//is item
	if (document.SelectItem.Class.selectedIndex == 0)
	{
		document.SelectItem.Calculate.disabled = true;
		return;
	}

	updatePrefix();
	updateSuffix();
	
	var prefixS = prefix[document.SelectItem.Prefix.options[document.SelectItem.Prefix.selectedIndex].value];
	var suffixS = suffix[document.SelectItem.Suffix.options[document.SelectItem.Suffix.selectedIndex].value];
	var indexP=0;
	var indexS=0;

	//rules for a staff	
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff")
	{
		if (prefixS.name == "None" && suffixS.name == "None")
		{
			document.SelectItem.Calculate.disabled = true;
			return;
		}
		else if ((prefixS.name == "Plentiful" || prefixS.name == "Bountiful") && document.SelectItem.Suffix.selectedIndex < 14)
		{
			document.SelectItem.Calculate.disabled = true;
			return;
		}
		else if (prefixS.name !="Any" && prefixS.name !="None" && document.SelectItem.Suffix.selectedIndex >= 2 && document.SelectItem.Suffix.selectedIndex < 14)
		{

			var qlvlMin = ((prefixS.qlvl < suffixS.qlvl) ? prefixS.qlvl: suffixS.qlvl);
			var qlvlMax = ((prefixS.qlvl >= suffixS.qlvl) ? prefixS.qlvl: suffixS.qlvl);

			if (qlvlMin < Math.floor(qlvlMax/2) || qlvlMax > 34)
			{
				document.SelectItem.Calculate.disabled = true;
				return;
			}		
		}
		else
		{
			document.getElementById("Valid").firstChild.nodeValue = "";
			document.SelectItem.Calculate.disabled = false;
			return;
		}
	}

	//rules for jewelry
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Jewelry")
	{
		if (prefixS.name == "None" && suffixS.name == "None")
		{
			document.SelectItem.Calculate.disabled = true;
			return;
		}
	}

	//rules for a prefix
	if (prefixS.qlvl > 34)
	{
		document.getElementById("Valid").firstChild.nodeValue = "This item is NOT a valid drop";
		document.SelectItem.Calculate.disabled = true;
		return;
	}

	//rules for a suffix
	if (suffixS.qlvl > 34)
	{
		document.getElementById("Valid").firstChild.nodeValue = "This item is NOT a valid drop";
		document.SelectItem.Calculate.disabled = true;
		return;
	}

	//rules for both prefix and suffix
	else if (prefixS.name != "Any" && prefixS.name !="None" && suffixS.name != "Any" && suffixS.name !="None")
	{
		var qlvlMin = ((prefixS.qlvl < suffixS.qlvl) ? prefixS.qlvl: suffixS.qlvl);
		var qlvlMax = ((prefixS.qlvl >= suffixS.qlvl) ? prefixS.qlvl: suffixS.qlvl);

		if (qlvlMin < Math.floor(qlvlMax/2) || qlvlMax > 34)
		{
			document.SelectItem.Calculate.disabled = true;
			return;
		}

		//check invalid affix combinations
		for (i=0; i<24; i++)
		{
			if (prefixS.name == invalidCombo[i] && suffixS.name == invalidCombo[i+24])
			{
				document.SelectItem.Calculate.disabled = true;
				return;
			}
		}
	}
	if ((prefixS.name == "None" || prefixS.name == "Any") && (suffixS.name == "None" || suffixS.name == "Any"))
	{
		document.getElementById("Valid").firstChild.nodeValue = "Please choose a magical item";
		document.SelectItem.Calculate.disabled = true;
		return;
	}
	document.getElementById("Valid").firstChild.nodeValue = "";
	document.SelectItem.Calculate.disabled = false;
	return;
}

//update based on Prefix
function updatePrefix()
{
	var i; var j;
	prefixS = prefix[document.SelectItem.Prefix.options[document.SelectItem.Prefix.selectedIndex].value];

	//grey out invalid suffixs
	if (prefixS.name == "None" || prefixS.name == "Any")
	{
		document.SelectItem.Suffix.options[0].style.color = "#4C4C4C";
		document.SelectItem.Suffix.options[1].style.color = "#4C4C4C";
		for (i=2; i<=document.SelectItem.Suffix.options.length-1; i++)
		{
			document.SelectItem.Suffix.options[i].style.color = "#A0A5C8";
		}
	}
	else
	{
		//rules for a staff	
		if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff")
		{
			if (prefixS.name == "Plentiful" || prefixS.name == "Bountiful")
			{
				for (i=0; i<14; i++)
				{
					document.SelectItem.Suffix.options[i].style.color = "#4C4C4C";
				}
				for (i=14; i<=document.SelectItem.Suffix.options.length-1; i++)
				{
					document.SelectItem.Suffix.options[i].style.color = "#A0A5C8";
				}
			}
			else
			{
				document.SelectItem.Suffix.options[0].style.color = "#A0A5C8";
				document.SelectItem.Suffix.options[1].style.color = "#A0A5C8";
				for (i=2; i<14; i++)
				{
					var qlvlMin = ((prefixS.qlvl < suffix[document.SelectItem.Suffix.options[i].value].qlvl) ? prefixS.qlvl: suffix[document.SelectItem.Suffix.options[i].value].qlvl);
					var qlvlMax = ((prefixS.qlvl >= suffix[document.SelectItem.Suffix.options[i].value].qlvl) ? prefixS.qlvl: suffix[document.SelectItem.Suffix.options[i].value].qlvl);
					if (qlvlMax > 50)
					{
						qlvlMax=50;
					}
					if (qlvlMin < Math.floor(qlvlMax/2))
					{
						document.SelectItem.Suffix.options[i].style.color = "#4C4C4C";
					}
					else
					{
						document.SelectItem.Suffix.options[i].style.color = "#A0A5C8";
					}
				}
				for (i=14; i<=document.SelectItem.Suffix.options.length-1; i++)
				{
					document.SelectItem.Suffix.options[i].style.color = "#A0A5C8";
				}
			}
		}
		else //rules for a prefix and suffix
		{
			document.SelectItem.Suffix.options[0].style.color = "#A0A5C8";
			document.SelectItem.Suffix.options[1].style.color = "#A0A5C8";
			for (i=2; i<=document.SelectItem.Suffix.options.length-1; i++)
			{
				var qlvlMin = ((prefixS.qlvl < suffix[document.SelectItem.Suffix.options[i].value].qlvl) ? prefixS.qlvl: suffix[document.SelectItem.Suffix.options[i].value].qlvl);
				var qlvlMax = ((prefixS.qlvl >= suffix[document.SelectItem.Suffix.options[i].value].qlvl) ? prefixS.qlvl: suffix[document.SelectItem.Suffix.options[i].value].qlvl);
				if (qlvlMax > 50)
				{
					qlvlMax=50;
				}
				if (qlvlMin < Math.floor(qlvlMax/2))
				{
					document.SelectItem.Suffix.options[i].style.color = "#4C4C4C";
				}
				else
				{
					document.SelectItem.Suffix.options[i].style.color = "#A0A5C8";
				}

				//check invalid affix combinations
				for (j=0; j<24; j++)
				{
					if (prefixS.name == invalidCombo[j] && suffix[document.SelectItem.Suffix.options[i].value].name == invalidCombo[j+24])
					{
						document.SelectItem.Suffix.options[i].style.color = "#4C4C4C";
					}
				}
			}
		}
	}
}

//change based on suffix
function updateSuffix()
{
	var i; var j;
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.options.selectedIndex >= 13 && document.SelectItem.Suffix.options.selectedIndex > 1)
	{
		var suffixS = spell[document.SelectItem.Suffix.options[document.SelectItem.Suffix.selectedIndex].value];
	}
	else
	{
		var suffixS = suffix[document.SelectItem.Suffix.options[document.SelectItem.Suffix.selectedIndex].value];
	}

	//gray out invalid prefixs
	if (suffixS.name == "None" || suffixS.name == "Any")
	{
		document.SelectItem.Prefix.options[0].style.color = "#4C4C4C";
		document.SelectItem.Prefix.options[1].style.color = "#4C4C4C";
		for (i=2; i<=document.SelectItem.Prefix.options.length-1; i++)
		{
			if (prefix[document.SelectItem.Prefix.options[i].value].name == "Bountiful" || prefix[document.SelectItem.Prefix.options[i].value].name == "Plentiful")
			{
				document.SelectItem.Prefix.options[i].style.color = "#4C4C4C";
			}
			else
			{
				document.SelectItem.Prefix.options[i].style.color = "#A0A5C8";
			}
		}
	}
	else
	{
		//rules for a staff	
		if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff")
		{
			if (document.SelectItem.Suffix.options.selectedIndex >= 14)
			{
				for (i=0; i<=document.SelectItem.Prefix.options.length-1; i++)
				{
					document.SelectItem.Prefix.options[i].style.color = "#A0A5C8";
				}
			}
			else
			{
				document.SelectItem.Prefix.options[0].style.color = "#A0A5C8";
				document.SelectItem.Prefix.options[1].style.color = "#A0A5C8";
				for (i=2; i<=document.SelectItem.Prefix.options.length-1; i++)
				{
					var qlvlMin = ((suffixS.qlvl < prefix[document.SelectItem.Prefix.options[i].value].qlvl) ? suffixS.qlvl: prefix[document.SelectItem.Prefix.options[i].value].qlvl);
					var qlvlMax = ((suffixS.qlvl >= prefix[document.SelectItem.Prefix.options[i].value].qlvl) ? suffixS.qlvl: prefix[document.SelectItem.Prefix.options[i].value].qlvl);
					if (qlvlMax > 50)
					{
						qlvlMax=50;
					}
					if (qlvlMin < Math.floor(qlvlMax/2) || prefix[document.SelectItem.Prefix.options[i].value].name == "Bountiful" || prefix[document.SelectItem.Prefix.options[i].value].name == "Plentiful")
					{
						document.SelectItem.Prefix.options[i].style.color = "#4C4C4C";
					}
					else
					{
						document.SelectItem.Prefix.options[i].style.color = "#A0A5C8";
					}
				}
			}
		}
		else //rules for a prefix and suffix
		{
			document.SelectItem.Prefix.options[0].style.color = "#A0A5C8";
			document.SelectItem.Prefix.options[1].style.color = "#A0A5C8";
			for (i=2; i<=document.SelectItem.Prefix.options.length-1; i++)
			{
				var qlvlMin = ((suffixS.qlvl < prefix[document.SelectItem.Prefix.options[i].value].qlvl) ? suffixS.qlvl: prefix[document.SelectItem.Prefix.options[i].value].qlvl);
				var qlvlMax = ((suffixS.qlvl >= prefix[document.SelectItem.Prefix.options[i].value].qlvl) ? suffixS.qlvl: prefix[document.SelectItem.Prefix.options[i].value].qlvl);
				if (qlvlMax > 50)
				{
					qlvlMax=50;
				}
				if (qlvlMin < Math.floor(qlvlMax/2) || prefix[document.SelectItem.Prefix.options[i].value].name == "Bountiful" || prefix[document.SelectItem.Prefix.options[i].value].name == "Plentiful")
				{
					document.SelectItem.Prefix.options[i].style.color = "#4C4C4C";
				}
				else
				{
					document.SelectItem.Prefix.options[i].style.color = "#A0A5C8";
				}

				//check invalid affix combinations
				for (j=0; j<24; j++)
				{
					if (suffixS.name == invalidCombo[j] && suffix[document.SelectItem.Suffix.options[i].value].name == invalidCombo[j+24])
					{
						document.SelectItem.Suffix.options[i].style.color = "#4C4C4C";
					}
				}
			}
		}
	}
}

///////////////////////
//BEGIN DRIVER FUNCTION
///////////////////////

//global vars
var selectedPrefix;
var selectedSuffix;
var selectedBase;
var validPrefix = new Array();
var validSuffix = new Array();
var noPrefix = true;
var noSuffix = true;
var multiBase = false;

var normalMonsterRarityNORM = new Array(30);
var normalMonsterRarityNIGHT = new Array(30);
var normalMonsterRarityHELL = new Array(30);
var uniqueMonsterRarityNORM = new Array(69);
var uniqueMonsterRarityNIGHT = new Array(69);
var uniqueMonsterRarityHELL = new Array(69);
var barrelRarity = new Array(16);
var chestRarity = new Array(16);
var decapBodyRarity = new Array(16);
var sarcophagusRarity = new Array(16);
var armorRackRarity = new Array(16);
var weaponRackRarity = new Array(16);

function main()
{
	var tempRarity = 1.00;
	var dungeonRarityNORM = new Array(16);
	var dungeonRarityNIGHT = new Array(16);
	var dungeonRarityHELL = new Array(16);
	var rarityNORM;
	var rarityNIGHT;
	var rarityHELL;

	var diffBonus=0;
	selectedBase = document.SelectItem.Base.options[document.SelectItem.Base.selectedIndex].text;
	selectedPrefix = prefix[document.SelectItem.Prefix.options[document.SelectItem.Prefix.selectedIndex].value];
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.options.selectedIndex >= 14 && document.SelectItem.Suffix.options.selectedIndex > 1)
	{
		selectedSuffix = spell[document.SelectItem.Suffix.options[document.SelectItem.Suffix.selectedIndex].value];
	}
	else
	{
		selectedSuffix = suffix[document.SelectItem.Suffix.options[document.SelectItem.Suffix.selectedIndex].value];
	}

	window.status = "Calculating...";
	//re-initialize globals for each new item
	multiBase = false;
	noPrefix = true;
	noSuffix = true;
	for (i=0; i<validPrefix.length; i++)
	{
		validPrefix[i] = null;
	}
	validPrefix.length=0;
	for (i=0; i<validSuffix.length; i++)
	{
		validSuffix[i] = null;
	}
	validSuffix.length=0;

	//determine selected affixs
	if (selectedBase == "Any" || selectedBase == "Light Armor" || selectedBase == "Medium Armor" || selectedBase == "Heavy Armor" || selectedBase == "One-Handed" || selectedBase == "Two-Handed")
	{
		multiBase=true;
		selectedBase = document.SelectItem.Base.options[document.SelectItem.Base.selectedIndex].value;
	}
	else
	{
		multiBase=false;
	}
	if (selectedPrefix.name != "None" && selectedPrefix.name != "Any")
	{
		noPrefix = false;
	}
	if (selectedPrefix.name == "Any")
	{
		noPrefix = false;
	}
	if (selectedSuffix.name != "None" && selectedSuffix.name != "Any")
	{
		noSuffix = false;
	}
	if (selectedSuffix.name == "Any")
	{
		noSuffix = false;
	}

	//generate valid prefix list
	var iClass = document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text;
	if (!noPrefix)
	{
		var prefixIndex=0;
		if (iClass == "Helm")
		{
			for (i=0; i<prefix.length; i++)
			{
				if (prefix[i].spawn.indexOf("A") > -1)
				{
					validPrefix[prefixIndex++] = prefix[i];
				}
			}
		}
		if (iClass == "Armor")
		{
			for (i=0; i<prefix.length; i++)
			{
				if (prefix[i].spawn.indexOf("A") > -1)
				{
					validPrefix[prefixIndex++] = prefix[i];
				}
			}
		}
		if (iClass == "Shield")
		{
			for (i=0; i<prefix.length; i++)
			{
				if (prefix[i].spawn.indexOf("S") > -1)
				{
					validPrefix[prefixIndex++] = prefix[i];
				}
			}
		}
		if (iClass == "Sword")
		{
			for (i=0; i<prefix.length; i++)
			{
				if (prefix[i].spawn.indexOf("W") > -1)
				{
					validPrefix[prefixIndex++] = prefix[i];
				}
			}
		}
		if (iClass == "Axe")
		{
			for (i=0; i<prefix.length; i++)
			{
				if (prefix[i].spawn.indexOf("W") > -1)
				{
					validPrefix[prefixIndex++] = prefix[i];
				}
			}
		}
		if (iClass == "Club")
		{
			for (i=0; i<prefix.length; i++)
			{
				if (prefix[i].spawn.indexOf("W") > -1)
				{
					validPrefix[prefixIndex++] = prefix[i];
				}
			}
		}
		if (iClass == "Bow")
		{
			for (i=0; i<prefix.length; i++)
			{
				if (prefix[i].spawn.indexOf("B") > -1)
				{
					validPrefix[prefixIndex++] = prefix[i];
				}
			}
		}
		if (iClass == "Staff")
		{
			if (document.SelectItem.Suffix.selectedIndex >= 14)
			{
				for (i=0; i<prefix.length; i++)
				{
					if (prefix[i].spawn.indexOf("S") > -1)
					{
						validPrefix[prefixIndex++] = prefix[i];
					}
				}
			}
			else
			{
				for (i=0; i<prefix.length; i++)
				{
					if (prefix[i].spawn.indexOf("S") > -1 && prefix[i].name != "Plentiful" && prefix[i].name != "Bountiful")
					{
						validPrefix[prefixIndex++] = prefix[i];
					}
				}
			}
		}
		if (iClass == "Jewelry")
		{
			for (i=0; i<prefix.length; i++)
			{
				if (prefix[i].spawn.indexOf("J") > -1)
				{
					validPrefix[prefixIndex++] = prefix[i];
				}
			}
		}
	}

	//generate valid suffix list
	if (!noSuffix)
	{
		var suffixIndex=0;
		if (iClass == "Helm")
		{
			for (i=0; i<suffix.length; i++)
			{
				if (suffix[i].spawn.indexOf("A") > -1)
				{
					if (!noPrefix && selectedPrefix.name == "Blessed" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Glorious" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Saintly" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else
					{
						validSuffix[suffixIndex++] = suffix[i];
					}
				}
			}
		}
		if (iClass == "Armor")
		{
			for (i=0; i<suffix.length; i++)
			{
				if (suffix[i].spawn.indexOf("A") > -1)
				{
					if (!noPrefix && selectedPrefix.name == "Blessed" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Glorious" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Saintly" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else
					{
						validSuffix[suffixIndex++] = suffix[i];
					}
				}
			}
		}
		if (iClass == "Shield")
		{
			for (i=0; i<suffix.length; i++)
			{
				if (suffix[i].spawn.indexOf("S") > -1)
				{
					if (!noPrefix && selectedPrefix.name == "Blessed" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Glorious" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Saintly" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else
					{
						validSuffix[suffixIndex++] = suffix[i];
					}
				}
			}
		}
		if (iClass == "Sword")
		{
			for (i=0; i<suffix.length; i++)
			{
				if (suffix[i].spawn.indexOf("W") > -1)
				{
					if (!noPrefix && selectedPrefix.name == "Gold" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Silver" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Mithril" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Platinum" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Vicious" && !noSuffix && (suffix[i].name == "Vim" || suffix[i].name == "Vigor" || suffix[i].name == "Radiance"))
					{ /*suffix is invalid*/ }
					else
					{
						validSuffix[suffixIndex++] = suffix[i];
					}
				}
			}
		}
		if (iClass == "Axe")
		{
			for (i=0; i<suffix.length; i++)
			{
				if (suffix[i].spawn.indexOf("W") > -1)
				{
					if (!noPrefix && selectedPrefix.name == "Gold" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Silver" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Mithril" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Platinum" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Vicious" && !noSuffix && (suffix[i].name == "Vim" || suffix[i].name == "Vigor" || suffix[i].name == "Radiance"))
					{ /*suffix is invalid*/ }
					else
					{
						validSuffix[suffixIndex++] = suffix[i];
					}
				}
			}
		}
		if (iClass == "Club")
		{
			for (i=0; i<suffix.length; i++)
			{
				if (suffix[i].spawn.indexOf("W") > -1)
				{
					if (!noPrefix && selectedPrefix.name == "Gold" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Silver" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Mithril" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Platinum" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Vicious" && !noSuffix && (suffix[i].name == "Vim" || suffix[i].name == "Vigor" || suffix[i].name == "Radiance"))
					{ /*suffix is invalid*/ }
					else
					{
						validSuffix[suffixIndex++] = suffix[i];
					}
				}
			}
		}
		if (iClass == "Bow")
		{
			for (i=0; i<suffix.length; i++)
			{
				if (suffix[i].spawn.indexOf("B") > -1)
				{
					if (!noPrefix && selectedPrefix.name == "Gold" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Silver" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Mithril" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Platinum" && !noSuffix && suffix[i].name == "Trouble")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Vicious" && !noSuffix && (suffix[i].name == "Vim" || suffix[i].name == "Vigor" || suffix[i].name == "Radiance"))
					{ /*suffix is invalid*/ }
					else
					{
						validSuffix[suffixIndex++] = suffix[i];
					}
				}
			}
		}
		if (iClass == "Staff")
		{
			if (document.SelectItem.Suffix.selectedIndex >= 14)
			{
				for (i=0; i<spell.length; i++)
				{
					if (spell[i].spawnStaff)
					{
						validSuffix[suffixIndex++] = spell[i];
					}
				}
			}
			else
			{
				for (i=0; i<suffix.length; i++)
				{
					if (suffix[i].spawn.indexOf("S") > -1)
					{
						if (!noPrefix && selectedPrefix.name == "Angel's" && !noSuffix && suffix[i].name == "Trouble")
						{ /*suffix is invalid*/ }
						else if (!noPrefix && selectedPrefix.name == "Arch-Angel's" && !noSuffix && suffix[i].name == "Trouble")
						{ /*suffix is invalid*/ }
						else if (!noPrefix && selectedPrefix.name == "Frog's" && !noSuffix && suffix[i].name == "Vitality")
						{ /*suffix is invalid*/ }
						else if (!noPrefix && selectedPrefix.name == "Spider's" && !noSuffix && suffix[i].name == "Vitality")
						{ /*suffix is invalid*/ }
						else
						{
							validSuffix[suffixIndex++] = suffix[i];
						}
					}
				}
			}
		}
		if (iClass == "Jewelry")
		{
			for (i=0; i<suffix.length; i++)
			{
				if (suffix[i].spawn.indexOf("J") > -1)
				{
					if (!noPrefix && selectedPrefix.name == "Gold" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Silver" && !noSuffix && (suffix[i].name == "the Pit" || suffix[i].name == "the Vulture" || suffix[i].name == "Corruption" || suffix[i].name == "Pain" || suffix[i].name == "the Dark" || suffix[i].name == "the Bear"))
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Frog's" && !noSuffix && suffix[i].name == "Vitality")
					{ /*suffix is invalid*/ }
					else if (!noPrefix && selectedPrefix.name == "Spider's" && !noSuffix && suffix[i].name == "Vitality")
					{ /*suffix is invalid*/ }
					else
					{
						validSuffix[suffixIndex++] = suffix[i];
					}
				}
			}
		}
	}

	//populate rarity arrays
	for (i=0; i<30; i++)
	{
		normalMonsterRarityHELL[i] = NormalMonster(i+1,30);
		if (i+1 >= 10)
		{
			normalMonsterRarityNIGHT[i] = normalMonsterRarityHELL[i];
		}
		else
		{
			normalMonsterRarityNIGHT[i] = NormalMonster(i+1,15);
		}
		if (i+1 >= 25)
		{
			normalMonsterRarityNORM[i] = normalMonsterRarityHELL[i];
		}
		else
		{
			normalMonsterRarityNORM[i] = NormalMonster(i+1,0);
		}
	}
	for (i=0; i<69; i++)
	{
		uniqueMonsterRarityHELL[i] = UniqueMonster(i,30);
		if (uniqueMonster[i].ilvl >= 10)
		{
			uniqueMonsterRarityNIGHT[i] = uniqueMonsterRarityHELL[i];
		}
		else
		{
			uniqueMonsterRarityNIGHT[i] = UniqueMonster(i,15);
		}
		if (uniqueMonster[i].ilvl >= 25)
		{
			uniqueMonsterRarityNORM[i] = uniqueMonsterRarityHELL[i];
		}
		else
		{
			uniqueMonsterRarityNORM[i] = UniqueMonster(i,0);
		}
	}
	for (i=0; i<=15; i++)
	{
		var tempDrarity = DungeonSource(i+1);

		barrelRarity[i] = tempDrarity * 0.80 * 0.033;
		chestRarity[i] = tempDrarity * 0.875 * 0.25;
		if (i < 4)
		{
			sarcophagusRarity[i] = tempDrarity * 0.075;
			decapBodyRarity[i] = 0;
			armorRackRarity[i] = 0;
			weaponRackRarity[i] = 0;
		}
		else
		{
			decapBodyRarity[i] = tempDrarity * 0.25;
			armorRackRarity[i] = ArmorRack(i+1);
			weaponRackRarity[i] = WeaponRack(i+1);
			sarcophagusRarity[i] = 0;
		}
	}
	

	//calculate rarity
	for (i=0; i<=15; i++)
	{
		tempRarity = 1.00;
		if (i+1 == 1)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[1-1],113) * Math.pow(1-normalMonsterRarityNORM[2-1],57);
		}
		if (i+1 == 2)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[1-1],34) * Math.pow(1-normalMonsterRarityNORM[2-1],37) * Math.pow(1-normalMonsterRarityNORM[3-1],26) * Math.pow(1-normalMonsterRarityNORM[4-1],37) * Math.pow(1-normalMonsterRarityNORM[5-1],33);
		}
		if (i+1 == 3)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[2-1],33) * Math.pow(1-normalMonsterRarityNORM[3-1],21) * Math.pow(1-normalMonsterRarityNORM[4-1],44) * Math.pow(1-normalMonsterRarityNORM[5-1],21) * Math.pow(1-normalMonsterRarityNORM[6-1],33) * Math.pow(1-normalMonsterRarityNORM[7-1],10);
		}
		if (i+1 == 4)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[4-1],33) * Math.pow(1-normalMonsterRarityNORM[5-1],33) * Math.pow(1-normalMonsterRarityNORM[6-1],33) * Math.pow(1-normalMonsterRarityNORM[7-1],24) * Math.pow(1-normalMonsterRarityNORM[8-1],33) * Math.pow(1-normalMonsterRarityNORM[9-1],8);
		}
		if (i+1 == 5)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[5-1],8) * Math.pow(1-normalMonsterRarityNORM[6-1],38.5) * Math.pow(1-normalMonsterRarityNORM[7-1],27) * Math.pow(1-normalMonsterRarityNORM[8-1],36) * Math.pow(1-normalMonsterRarityNORM[9-1],25) * Math.pow(1-normalMonsterRarityNORM[10-1],24);
		}
		if (i+1 == 6)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[8-1],48) * Math.pow(1-normalMonsterRarityNORM[9-1],31) * Math.pow(1-normalMonsterRarityNORM[10-1],28) * Math.pow(1-normalMonsterRarityNORM[11-1],21) * Math.pow(1-normalMonsterRarityNORM[12-1],19);
		}
		if (i+1 == 7)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[9-1],20) * Math.pow(1-normalMonsterRarityNORM[10-1],29.5) * Math.pow(1-normalMonsterRarityNORM[11-1],29) * Math.pow(1-normalMonsterRarityNORM[12-1],19.5) * Math.pow(1-normalMonsterRarityNORM[13-1],19.5) * Math.pow(1-normalMonsterRarityNORM[14-1],29.5);
		}
		if (i+1 == 8)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[11-1],27.25) * Math.pow(1-normalMonsterRarityNORM[12-1],18.75) * Math.pow(1-normalMonsterRarityNORM[13-1],38.5) * Math.pow(1-normalMonsterRarityNORM[14-1],38) * Math.pow(1-normalMonsterRarityNORM[15-1],27.5) * Math.pow(1-normalMonsterRarityNORM[16-1],9.5);
		}
		if (i+1 == 9)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[13-1],40) * Math.pow(1-normalMonsterRarityNORM[14-1],40) * Math.pow(1-normalMonsterRarityNORM[15-1],44) * Math.pow(1-normalMonsterRarityNORM[16-1],20) * Math.pow(1-normalMonsterRarityNORM[17-1],10.25) * Math.pow(1-normalMonsterRarityNORM[18-1],20.25) * Math.pow(1-normalMonsterRarityNORM[19-1],10);
		}
		if (i+1 == 10)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[13-1],12) * Math.pow(1-normalMonsterRarityNORM[14-1],10.5) * Math.pow(1-normalMonsterRarityNORM[15-1],29.5) * Math.pow(1-normalMonsterRarityNORM[16-1],22) * Math.pow(1-normalMonsterRarityNORM[17-1],10.5) * Math.pow(1-normalMonsterRarityNORM[18-1],20.5) * Math.pow(1-normalMonsterRarityNORM[19-1],20.75) * Math.pow(1-normalMonsterRarityNORM[20-1],30) * Math.pow(1-normalMonsterRarityNORM[21-1],19) * Math.pow(1-normalMonsterRarityNORM[23-1],10.5);
		}
		if (i+1 == 11)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[16-1],12.5) * Math.pow(1-normalMonsterRarityNORM[17-1],12.5) * Math.pow(1-normalMonsterRarityNORM[18-1],25) * Math.pow(1-normalMonsterRarityNORM[19-1],25) * Math.pow(1-normalMonsterRarityNORM[20-1],50) * Math.pow(1-normalMonsterRarityNORM[21-1],37.5) * Math.pow(1-normalMonsterRarityNORM[22-1],20.5);
		}
		if (i+1 == 12)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[19-1],10) * Math.pow(1-normalMonsterRarityNORM[20-1],34.75) * Math.pow(1-normalMonsterRarityNORM[21-1],33.75) * Math.pow(1-normalMonsterRarityNORM[22-1],19) * Math.pow(1-normalMonsterRarityNORM[23-1],25.25) * Math.pow(1-normalMonsterRarityNORM[24-1],43) * Math.pow(1-normalMonsterRarityNORM[25-1],18.75);
		}
		if (i+1 ==13)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[21-1],17) * Math.pow(1-normalMonsterRarityNORM[22-1],16) * Math.pow(1-normalMonsterRarityNORM[23-1],17) * Math.pow(1-normalMonsterRarityNORM[24-1],41) * Math.pow(1-normalMonsterRarityNORM[25-1],45) * Math.pow(1-normalMonsterRarityNORM[26-1],33) * Math.pow(1-normalMonsterRarityNORM[28-1],8) * Math.pow(1-normalMonsterRarityNORM[30-1],8);
		}
		if (i+1 == 14)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[23-1],17.5) * Math.pow(1-normalMonsterRarityNORM[24-1],42.25) * Math.pow(1-normalMonsterRarityNORM[25-1],46.25) * Math.pow(1-normalMonsterRarityNORM[26-1],35.25) * Math.pow(1-normalMonsterRarityNORM[27-1],8.75) * Math.pow(1-normalMonsterRarityNORM[28-1],26.25) * Math.pow(1-normalMonsterRarityNORM[30-1],8.75);
		}
		if (i+1 == 15)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[26-1],56.1) * Math.pow(1-normalMonsterRarityNORM[27-1],41.2) * Math.pow(1-normalMonsterRarityNORM[28-1],41.2) * Math.pow(1-normalMonsterRarityNORM[29-1],15) * Math.pow(1-normalMonsterRarityNORM[30-1],26.2);
		}
		if (i+1 == 16)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNORM[30-1],185) * (1-normalMonsterRarityNORM[24-1]);
		}
		for (j=0; j<69; j++)
		{
			if (uniqueMonster[j].dlvl == i+1 && uniqueMonsterRarityNORM[j] != 0)
			{
				tempRarity = tempRarity * (1 - (uniqueMonsterRarityNORM[j]*uniqueMonster[j].prob));
			}
		}
		tempRarity = tempRarity * Math.pow(1-barrelRarity[i],30);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i]/2,7);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i],4);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i]*3/2,2.5);
		tempRarity = tempRarity * Math.pow(1-decapBodyRarity[i],3.5);
		tempRarity = tempRarity * Math.pow(1-sarcophagusRarity[i],14.5);
		tempRarity = tempRarity * (1-armorRackRarity[i]/11);
		tempRarity = tempRarity * (1-weaponRackRarity[i]/11);
		dungeonRarityNORM[i] = 1 - tempRarity;
	}
	tempRarity = 1.00;
	for (i=0; i<16; i++)
	{
		tempRarity = tempRarity * (1 - dungeonRarityNORM[i]);
	}
	rarityNORM = 1 - tempRarity;
	rarityNORM = parseFloat(SigFig(rarityNORM));

	//nightmare
	for (i=0; i<=15; i++)
	{
		tempRarity = 1.00;
		if (i+1 == 1)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[1-1],113) * Math.pow(1-normalMonsterRarityNIGHT[2-1],57);
		}
		if (i+1 == 2)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[1-1],34) * Math.pow(1-normalMonsterRarityNIGHT[2-1],37) * Math.pow(1-normalMonsterRarityNIGHT[3-1],26) * Math.pow(1-normalMonsterRarityNIGHT[4-1],37) * Math.pow(1-normalMonsterRarityNIGHT[5-1],33);
		}
		if (i+1 == 3)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[2-1],33) * Math.pow(1-normalMonsterRarityNIGHT[3-1],21) * Math.pow(1-normalMonsterRarityNIGHT[4-1],44) * Math.pow(1-normalMonsterRarityNIGHT[5-1],21) * Math.pow(1-normalMonsterRarityNIGHT[6-1],33) * Math.pow(1-normalMonsterRarityNIGHT[7-1],10);
		}
		if (i+1 == 4)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[4-1],33) * Math.pow(1-normalMonsterRarityNIGHT[5-1],33) * Math.pow(1-normalMonsterRarityNIGHT[6-1],33) * Math.pow(1-normalMonsterRarityNIGHT[7-1],24) * Math.pow(1-normalMonsterRarityNIGHT[8-1],33) * Math.pow(1-normalMonsterRarityNIGHT[9-1],8);
		}
		if (i+1 == 5)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[5-1],8) * Math.pow(1-normalMonsterRarityNIGHT[6-1],38.5) * Math.pow(1-normalMonsterRarityNIGHT[7-1],27) * Math.pow(1-normalMonsterRarityNIGHT[8-1],36) * Math.pow(1-normalMonsterRarityNIGHT[9-1],25) * Math.pow(1-normalMonsterRarityNIGHT[10-1],24);
		}
		if (i+1 == 6)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[8-1],48) * Math.pow(1-normalMonsterRarityNIGHT[9-1],31) * Math.pow(1-normalMonsterRarityNIGHT[10-1],28) * Math.pow(1-normalMonsterRarityNIGHT[11-1],21) * Math.pow(1-normalMonsterRarityNIGHT[12-1],19);
		}
		if (i+1 == 7)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[9-1],20) * Math.pow(1-normalMonsterRarityNIGHT[10-1],29.5) * Math.pow(1-normalMonsterRarityNIGHT[11-1],29) * Math.pow(1-normalMonsterRarityNIGHT[12-1],19.5) * Math.pow(1-normalMonsterRarityNIGHT[13-1],19.5) * Math.pow(1-normalMonsterRarityNIGHT[14-1],29.5);
		}
		if (i+1 == 8)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[11-1],27.25) * Math.pow(1-normalMonsterRarityNIGHT[12-1],18.75) * Math.pow(1-normalMonsterRarityNIGHT[13-1],38.5) * Math.pow(1-normalMonsterRarityNIGHT[14-1],38) * Math.pow(1-normalMonsterRarityNIGHT[15-1],27.5) * Math.pow(1-normalMonsterRarityNIGHT[16-1],9.5);
		}
		if (i+1 == 9)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[13-1],40) * Math.pow(1-normalMonsterRarityNIGHT[14-1],40) * Math.pow(1-normalMonsterRarityNIGHT[15-1],44) * Math.pow(1-normalMonsterRarityNIGHT[16-1],20) * Math.pow(1-normalMonsterRarityNIGHT[17-1],10.25) * Math.pow(1-normalMonsterRarityNIGHT[18-1],20.25) * Math.pow(1-normalMonsterRarityNIGHT[19-1],10);
		}
		if (i+1 == 10)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[13-1],12) * Math.pow(1-normalMonsterRarityNIGHT[14-1],10.5) * Math.pow(1-normalMonsterRarityNIGHT[15-1],29.5) * Math.pow(1-normalMonsterRarityNIGHT[16-1],22) * Math.pow(1-normalMonsterRarityNIGHT[17-1],10.5) * Math.pow(1-normalMonsterRarityNIGHT[18-1],20.5) * Math.pow(1-normalMonsterRarityNIGHT[19-1],20.75) * Math.pow(1-normalMonsterRarityNIGHT[20-1],30) * Math.pow(1-normalMonsterRarityNIGHT[21-1],19) * Math.pow(1-normalMonsterRarityNIGHT[23-1],10.5);
		}
		if (i+1 == 11)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[16-1],12.5) * Math.pow(1-normalMonsterRarityNIGHT[17-1],12.5) * Math.pow(1-normalMonsterRarityNIGHT[18-1],25) * Math.pow(1-normalMonsterRarityNIGHT[19-1],25) * Math.pow(1-normalMonsterRarityNIGHT[20-1],50) * Math.pow(1-normalMonsterRarityNIGHT[21-1],37.5) * Math.pow(1-normalMonsterRarityNIGHT[22-1],20.5);
		}
		if (i+1 == 12)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[19-1],10) * Math.pow(1-normalMonsterRarityNIGHT[20-1],34.75) * Math.pow(1-normalMonsterRarityNIGHT[21-1],33.75) * Math.pow(1-normalMonsterRarityNIGHT[22-1],19) * Math.pow(1-normalMonsterRarityNIGHT[23-1],25.25) * Math.pow(1-normalMonsterRarityNIGHT[24-1],43) * Math.pow(1-normalMonsterRarityNIGHT[25-1],18.75);
		}
		if (i+1 ==13)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[21-1],17) * Math.pow(1-normalMonsterRarityNIGHT[22-1],16) * Math.pow(1-normalMonsterRarityNIGHT[23-1],17) * Math.pow(1-normalMonsterRarityNIGHT[24-1],41) * Math.pow(1-normalMonsterRarityNIGHT[25-1],45) * Math.pow(1-normalMonsterRarityNIGHT[26-1],33) * Math.pow(1-normalMonsterRarityNIGHT[28-1],8) * Math.pow(1-normalMonsterRarityNIGHT[30-1],8);
		}
		if (i+1 == 14)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[23-1],17.5) * Math.pow(1-normalMonsterRarityNIGHT[24-1],42.25) * Math.pow(1-normalMonsterRarityNIGHT[25-1],46.25) * Math.pow(1-normalMonsterRarityNIGHT[26-1],35.25) * Math.pow(1-normalMonsterRarityNIGHT[27-1],8.75) * Math.pow(1-normalMonsterRarityNIGHT[28-1],26.25) * Math.pow(1-normalMonsterRarityNIGHT[30-1],8.75);
		}
		if (i+1 == 15)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[26-1],56.1) * Math.pow(1-normalMonsterRarityNIGHT[27-1],41.2) * Math.pow(1-normalMonsterRarityNIGHT[28-1],41.2) * Math.pow(1-normalMonsterRarityNIGHT[29-1],15) * Math.pow(1-normalMonsterRarityNIGHT[30-1],26.2);
		}
		if (i+1 == 16)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityNIGHT[30-1],185) * (1-normalMonsterRarityNIGHT[24-1]);
		}
		for (j=0; j<69; j++)
		{
			if (uniqueMonster[j].dlvl == i+1 && uniqueMonsterRarityNIGHT[j] != 0)
			{
				tempRarity = tempRarity * (1 - (uniqueMonsterRarityNIGHT[j]*uniqueMonster[j].prob));
			}
		}
		tempRarity = tempRarity * Math.pow(1-barrelRarity[i],30);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i]/2,7);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i],4);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i]*3/2,2.5);
		tempRarity = tempRarity * Math.pow(1-decapBodyRarity[i],3.5);
		tempRarity = tempRarity * Math.pow(1-sarcophagusRarity[i],14.5);
		tempRarity = tempRarity * (1-armorRackRarity[i]/11);
		tempRarity = tempRarity * (1-weaponRackRarity[i]/11);
		dungeonRarityNIGHT[i] = 1 - tempRarity;
	}
	tempRarity = 1.00;
	for (i=0; i<16; i++)
	{
		tempRarity = tempRarity * (1 - dungeonRarityNIGHT[i]);
	}
	rarityNIGHT = 1 - tempRarity;
	rarityNIGHT = parseFloat(SigFig(rarityNIGHT));

	//hell
	for (i=0; i<=15; i++)
	{
		tempRarity = 1.00;
		if (i+1 == 1)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[1-1],113) * Math.pow(1-normalMonsterRarityHELL[2-1],57);
		}
		if (i+1 == 2)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[1-1],34) * Math.pow(1-normalMonsterRarityHELL[2-1],37) * Math.pow(1-normalMonsterRarityHELL[3-1],26) * Math.pow(1-normalMonsterRarityHELL[4-1],37) * Math.pow(1-normalMonsterRarityHELL[5-1],33);
		}
		if (i+1 == 3)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[2-1],33) * Math.pow(1-normalMonsterRarityHELL[3-1],21) * Math.pow(1-normalMonsterRarityHELL[4-1],44) * Math.pow(1-normalMonsterRarityHELL[5-1],21) * Math.pow(1-normalMonsterRarityHELL[6-1],33) * Math.pow(1-normalMonsterRarityHELL[7-1],10);
		}
		if (i+1 == 4)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[4-1],33) * Math.pow(1-normalMonsterRarityHELL[5-1],33) * Math.pow(1-normalMonsterRarityHELL[6-1],33) * Math.pow(1-normalMonsterRarityHELL[7-1],24) * Math.pow(1-normalMonsterRarityHELL[8-1],33) * Math.pow(1-normalMonsterRarityHELL[9-1],8);
		}
		if (i+1 == 5)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[5-1],8) * Math.pow(1-normalMonsterRarityHELL[6-1],38.5) * Math.pow(1-normalMonsterRarityHELL[7-1],27) * Math.pow(1-normalMonsterRarityHELL[8-1],36) * Math.pow(1-normalMonsterRarityHELL[9-1],25) * Math.pow(1-normalMonsterRarityHELL[10-1],24);
		}
		if (i+1 == 6)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[8-1],48) * Math.pow(1-normalMonsterRarityHELL[9-1],31) * Math.pow(1-normalMonsterRarityHELL[10-1],28) * Math.pow(1-normalMonsterRarityHELL[11-1],21) * Math.pow(1-normalMonsterRarityHELL[12-1],19);
		}
		if (i+1 == 7)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[9-1],20) * Math.pow(1-normalMonsterRarityHELL[10-1],29.5) * Math.pow(1-normalMonsterRarityHELL[11-1],29) * Math.pow(1-normalMonsterRarityHELL[12-1],19.5) * Math.pow(1-normalMonsterRarityHELL[13-1],19.5) * Math.pow(1-normalMonsterRarityHELL[14-1],29.5);
		}
		if (i+1 == 8)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[11-1],27.25) * Math.pow(1-normalMonsterRarityHELL[12-1],18.75) * Math.pow(1-normalMonsterRarityHELL[13-1],38.5) * Math.pow(1-normalMonsterRarityHELL[14-1],38) * Math.pow(1-normalMonsterRarityHELL[15-1],27.5) * Math.pow(1-normalMonsterRarityHELL[16-1],9.5);
		}
		if (i+1 == 9)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[13-1],40) * Math.pow(1-normalMonsterRarityHELL[14-1],40) * Math.pow(1-normalMonsterRarityHELL[15-1],44) * Math.pow(1-normalMonsterRarityHELL[16-1],20) * Math.pow(1-normalMonsterRarityHELL[17-1],10.25) * Math.pow(1-normalMonsterRarityHELL[18-1],20.25) * Math.pow(1-normalMonsterRarityHELL[19-1],10);
		}
		if (i+1 == 10)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[13-1],12) * Math.pow(1-normalMonsterRarityHELL[14-1],10.5) * Math.pow(1-normalMonsterRarityHELL[15-1],29.5) * Math.pow(1-normalMonsterRarityHELL[16-1],22) * Math.pow(1-normalMonsterRarityHELL[17-1],10.5) * Math.pow(1-normalMonsterRarityHELL[18-1],20.5) * Math.pow(1-normalMonsterRarityHELL[19-1],20.75) * Math.pow(1-normalMonsterRarityHELL[20-1],30) * Math.pow(1-normalMonsterRarityHELL[21-1],19) * Math.pow(1-normalMonsterRarityHELL[23-1],10.5);
		}
		if (i+1 == 11)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[16-1],12.5) * Math.pow(1-normalMonsterRarityHELL[17-1],12.5) * Math.pow(1-normalMonsterRarityHELL[18-1],25) * Math.pow(1-normalMonsterRarityHELL[19-1],25) * Math.pow(1-normalMonsterRarityHELL[20-1],50) * Math.pow(1-normalMonsterRarityHELL[21-1],37.5) * Math.pow(1-normalMonsterRarityHELL[22-1],20.5);
		}
		if (i+1 == 12)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[19-1],10) * Math.pow(1-normalMonsterRarityHELL[20-1],34.75) * Math.pow(1-normalMonsterRarityHELL[21-1],33.75) * Math.pow(1-normalMonsterRarityHELL[22-1],19) * Math.pow(1-normalMonsterRarityHELL[23-1],25.25) * Math.pow(1-normalMonsterRarityHELL[24-1],43) * Math.pow(1-normalMonsterRarityHELL[25-1],18.75);
		}
		if (i+1 ==13)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[21-1],17) * Math.pow(1-normalMonsterRarityHELL[22-1],16) * Math.pow(1-normalMonsterRarityHELL[23-1],17) * Math.pow(1-normalMonsterRarityHELL[24-1],41) * Math.pow(1-normalMonsterRarityHELL[25-1],45) * Math.pow(1-normalMonsterRarityHELL[26-1],33) * Math.pow(1-normalMonsterRarityHELL[28-1],8) * Math.pow(1-normalMonsterRarityHELL[30-1],8);
		}
		if (i+1 == 14)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[23-1],17.5) * Math.pow(1-normalMonsterRarityHELL[24-1],42.25) * Math.pow(1-normalMonsterRarityHELL[25-1],46.25) * Math.pow(1-normalMonsterRarityHELL[26-1],35.25) * Math.pow(1-normalMonsterRarityHELL[27-1],8.75) * Math.pow(1-normalMonsterRarityHELL[28-1],26.25) * Math.pow(1-normalMonsterRarityHELL[30-1],8.75);
		}
		if (i+1 == 15)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[26-1],56.1) * Math.pow(1-normalMonsterRarityHELL[27-1],41.2) * Math.pow(1-normalMonsterRarityHELL[28-1],41.2) * Math.pow(1-normalMonsterRarityHELL[29-1],15) * Math.pow(1-normalMonsterRarityHELL[30-1],26.2);
		}
		if (i+1 == 16)
		{
			tempRarity = tempRarity * Math.pow(1-normalMonsterRarityHELL[30-1],185) * (1-normalMonsterRarityHELL[24-1]);
		}
		for (j=0; j<69; j++)
		{
			if (uniqueMonster[j].dlvl == i+1 && uniqueMonsterRarityHELL[j] != 0)
			{
				tempRarity = tempRarity * (1 - (uniqueMonsterRarityHELL[j]*uniqueMonster[j].prob));
			}
		}
		tempRarity = tempRarity * Math.pow(1-barrelRarity[i],30);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i]/2,7);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i],4);
		tempRarity = tempRarity * Math.pow(1-chestRarity[i]*3/2,2.5);
		tempRarity = tempRarity * Math.pow(1-decapBodyRarity[i],3.5);
		tempRarity = tempRarity * Math.pow(1-sarcophagusRarity[i],14.5);
		tempRarity = tempRarity * (1-armorRackRarity[i]/11);
		tempRarity = tempRarity * (1-weaponRackRarity[i]/11);
		dungeonRarityHELL[i] = 1 - tempRarity;
	}
	tempRarity = 1.00;
	for (i=0; i<16; i++)
	{
		tempRarity = tempRarity * (1 - dungeonRarityHELL[i]);
	}
	rarityHELL = 1 - tempRarity;
	rarityHELL = parseFloat(SigFig(rarityHELL));

	//determine maximum probabilities
	var maxVal1=0;
	var maxVal2=0;
	var maxVal3=0;
	var val1Source="";
	var val2Source="";
	var val3Source="";
	var maxDlvlVal=0;
	var iteration=0;
	do
	{
	maxVal1=0;
	maxVal2=0;
	maxVal3=0;
	val1Source="";
	val2Source="";
	val3Source="";
	for (i=0; i<30; i++)
	{
		if (normalMonsterRarityNORM[i] > maxVal1)
		{
			maxVal1 = normalMonsterRarityNORM[i];
			val1Source="normalMonster";
		}
		if (normalMonsterRarityNIGHT[i] > maxVal1)
		{
			maxVal1 = normalMonsterRarityNIGHT[i];
			val1Source="normalMonster";
		}
		if (normalMonsterRarityHELL[i] > maxVal1)
		{
			maxVal1 = normalMonsterRarityHELL[i];
			val1Source="normalMonster";
		}
	}
	for (i=0; i<16; i++)
	{
		if (weaponRackRarity[i] > maxVal1)
		{
			maxVal1 = weaponRackRarity[i];
			val1Source="weaponRack";
		}
		if (armorRackRarity[i] > maxVal1)
		{
			maxVal1 = armorRackRarity[i];
			val1Source="armorRack";
		}
		if (decapBodyRarity[i] > maxVal1)
		{
			maxVal1 = decapBodyRarity[i];
			val1Source="decapBody";
		}
		if (chestRarity[i]*3/2 > maxVal1)
		{
			maxVal1 = chestRarity[i]*3/2;
			val1Source="chest";
		}
	}
	for (i=0; i<69; i++)
	{
		if (uniqueMonsterRarityNORM[i] > maxVal1)
		{
			maxVal1 = uniqueMonsterRarityNORM[i];
			val1Source="uniqueMonster";
		}
		if (uniqueMonsterRarityNIGHT[i] > maxVal1)
		{
			maxVal1 = uniqueMonsterRarityNIGHT[i];
			val1Source="uniqueMonster";
		}
		if (uniqueMonsterRarityHELL[i] > maxVal1)
		{
			maxVal1 = uniqueMonsterRarityHELL[i];
			val1Source="uniqueMonster";
		}
	}
	for (i=0; i<30; i++)
	{
		if (normalMonsterRarityNORM[i] > maxVal2 && normalMonsterRarityNORM[i] != maxVal1)
		{
			maxVal2 = normalMonsterRarityNORM[i];
			val2Source="normalMonster";
		}
		if (normalMonsterRarityNIGHT[i] > maxVal2 && normalMonsterRarityNIGHT[i] != maxVal1)
		{
			maxVal2 = normalMonsterRarityNIGHT[i];
			val2Source="normalMonster";
		}
		if (normalMonsterRarityHELL[i] > maxVal2 && normalMonsterRarityHELL[i] != maxVal1)
		{
			maxVal2 = normalMonsterRarityHELL[i];
			val2Source="normalMonster";
		}
	}
	if (val1Source != "weaponRack" && val1Source != "armorRack" && val1Source != "decapBody" && val1Source != "chest")
	{
		for (i=0; i<16; i++)
		{
			if (weaponRackRarity[i] > maxVal2 && weaponRackRarity[i] != maxVal1)
			{
				maxVal2 = weaponRackRarity[i];
				val2Source="weaponRack";
			}
			if (armorRackRarity[i] > maxVal2 && armorRackRarity[i] != maxVal1)
			{
				maxVal2 = armorRackRarity[i];
				val2Source="armorRack";
			}
			if (decapBodyRarity[i] > maxVal2 && decapBodyRarity[i] != maxVal1)
			{
				maxVal2 = decapBodyRarity[i];
				val2Source="decapBody";
			}
			if (chestRarity[i]*3/2 > maxVal2 && chestRarity[i]*3/2 != maxVal1)
			{
				maxVal2 = chestRarity[i]*3/2;
				val2Source="chest";
			}
		}
	}
	if (val1Source != "uniqueMonster" || iteration > 0)
	{
		for (i=0; i<69; i++)
		{
			if (uniqueMonsterRarityNORM[i] > maxVal2 && uniqueMonsterRarityNORM[i] != maxVal1)
			{
				maxVal2 = uniqueMonsterRarityNORM[i];
				val2Source="uniqueMonster";
			}
			if (uniqueMonsterRarityNIGHT[i] > maxVal2 && uniqueMonsterRarityNIGHT[i] != maxVal1)
			{
				maxVal2 = uniqueMonsterRarityNIGHT[i];
				val2Source="uniqueMonster";
			}
			if (uniqueMonsterRarityHELL[i] > maxVal2 && uniqueMonsterRarityHELL[i] != maxVal1)
			{
				maxVal2 = uniqueMonsterRarityHELL[i];
				val2Source="uniqueMonster";
			}
		}
	}
	for (i=0; i<30; i++)
	{
		if (normalMonsterRarityNORM[i] > maxVal3 && normalMonsterRarityNORM[i] != maxVal1 && normalMonsterRarityNORM[i] != maxVal2)
		{
			maxVal3 = normalMonsterRarityNORM[i];
			val3Source="normalMonster";
		}
		if (normalMonsterRarityNIGHT[i] > maxVal3 && normalMonsterRarityNIGHT[i] != maxVal1 && normalMonsterRarityNIGHT[i] != maxVal2)
		{
			maxVal3 = normalMonsterRarityNIGHT[i];
			val3Source="normalMonster";
		}
		if (normalMonsterRarityHELL[i] > maxVal3 && normalMonsterRarityHELL[i] != maxVal1 && normalMonsterRarityHELL[i] != maxVal2)
		{
			maxVal3 = normalMonsterRarityHELL[i];
			val3Source="normalMonster";
		}
	}
	if ((val1Source != "weaponRack" && val1Source != "armorRack" && val1Source != "decapBody" && val1Source != "chest") && (val2Source != "weaponRack" && val2Source != "armorRack" && val2Source != "decapBody" && val2Source != "chest"))
	{
		for (i=0; i<16; i++)
		{
			if (weaponRackRarity[i] > maxVal3 && weaponRackRarity[i] != maxVal1 && weaponRackRarity[i] != maxVal2)
			{
				maxVal3 = weaponRackRarity[i];
				val3Source="weaponRack";
			}
			if (armorRackRarity[i] > maxVal3 && armorRackRarity[i] != maxVal1 && armorRackRarity[i] != maxVal2)
			{
				maxVal3 = armorRackRarity[i];
				val3Source="armorRack";
			}
			if (decapBodyRarity[i] > maxVal3 && decapBodyRarity[i] != maxVal1 && decapBodyRarity[i] != maxVal2)
			{
				maxVal3 = decapBodyRarity[i];
				val3Source="decapBody";
			}
			if (chestRarity[i]*3/2 > maxVal3 && chestRarity[i]*3/2 != maxVal1 && chestRarity[i]*3/2 != maxVal2)
			{
				maxVal3 = chestRarity[i]*3/2;
				val3Source="chest";
			}
		}
	}
	if ((val1Source != "uniqueMonster" && val2Source != "uniqueMonster") || iteration > 0)
	{
		for (i=0; i<69; i++)
		{
			if (uniqueMonsterRarityNORM[i] > maxVal3 && uniqueMonsterRarityNORM[i] != maxVal1 && uniqueMonsterRarityNORM[i] != maxVal2)
			{
				maxVal3 = uniqueMonsterRarityNORM[i];
				val3Source="uniqueMonster";
			}
			if (uniqueMonsterRarityNIGHT[i] > maxVal3 && uniqueMonsterRarityNIGHT[i] != maxVal1 && uniqueMonsterRarityNIGHT[i] != maxVal2)
			{
				maxVal3 = uniqueMonsterRarityNIGHT[i];
				val3Source="uniqueMonster";
			}
			if (uniqueMonsterRarityHELL[i] > maxVal3 && uniqueMonsterRarityHELL[i] != maxVal1 && uniqueMonsterRarityHELL[i] != maxVal2)
			{
				maxVal3 = uniqueMonsterRarityHELL[i];
				val3Source="uniqueMonster";
			}
		}
	}
	iteration++;
	}
	while (maxVal3 == 0 && iteration < 2);
	for (i=0; i<16; i++)
	{
		if (dungeonRarityNORM[i] > maxDlvlVal)
		{
			maxDlvlVal = dungeonRarityNORM[i];
		}
		if (dungeonRarityNIGHT[i] > maxDlvlVal)
		{
			maxDlvlVal = dungeonRarityNIGHT[i];
		}
		if (dungeonRarityHELL[i] > maxDlvlVal)
		{
			maxDlvlVal = dungeonRarityHELL[i];
		}
	}

	//output results
	var outputString = new String();
	window.status = "";
	outputString = (!noPrefix ? (selectedPrefix.name == "Any" ? "Prefixed ": selectedPrefix.name+" "): "")+(selectedBase.indexOf(".") > -1 ? selectedBase.substring(0,selectedBase.indexOf(".")): selectedBase)+(!noSuffix ? (selectedSuffix.name == "Any" ? " of the Suffix": " of "+selectedSuffix.name): "")+":\n\n";
	outputString += "Rarity: "+SigFig(rarityNORM*100)+"%";
	outputString += "     "+ ((rarityNORM == 0) ? "": "1 in "+SigFigGAMES(1/rarityNORM)+" games") +"\n";
	outputString += "Rarity: "+SigFig(rarityNIGHT*100)+"%";
	outputString += " (N) "+ ((rarityNIGHT == 0) ? "": "1 in "+SigFigGAMES(1/rarityNIGHT)+" games") +"\n";
	outputString += "Rarity: "+SigFig(rarityHELL*100)+"%";
	outputString += " (H) "+ ((rarityHELL == 0) ? "": "1 in "+SigFigGAMES(1/rarityHELL)+" games") +"\n\n";
	outputString += "Best drop probability:\n\n";
	outputString += "   "+(SigFig(maxDlvlVal*100)+"").substring(0,9);
	while (outputString.charAt(outputString.length-1) == "0" && maxDlvlVal != 0)
	{
		outputString = outputString.substring(0,outputString.length-1);
	}
	outputString +="% ";
	while (outputString.length-outputString.lastIndexOf("\n") < 15)
	{
		outputString += " ";
	}
	for (i=0; i<16; i++)
	{
		if (dungeonRarityNORM[i] == maxDlvlVal)
		{
			outputString += "dlvl "+(i+1)+" (n";
		}
		if (dungeonRarityNIGHT[i] == maxDlvlVal)
		{
			if (dungeonRarityNIGHT[i] == dungeonRarityNORM[i])
			{
				outputString += "/N";
			}
			else
			{
				outputString += "dlvl "+(i+1)+" (N";
			}
		}
		if (dungeonRarityHELL[i] == maxDlvlVal)
		{
			if (dungeonRarityHELL[i] == dungeonRarityNORM[i] || dungeonRarityHELL[i] == dungeonRarityNIGHT[i])
			{
				outputString += "/H";
			}
			else
			{
				outputString += "dlvl "+(i+1)+" (H";
			}
			maxDlvlVal = dungeonRarityHELL[i];
		}
	}
	outputString += ")";
	if (maxVal1 != 0)
	{
		outputString += "\n1) " + DisplayProb(maxVal1,val1Source);
	}
	if (maxVal2 != 0)
	{
		outputString += "\n2) " + DisplayProb(maxVal2,val2Source);
	}
	if (maxVal3 != 0)
	{
		outputString += "\n3) " + DisplayProb(maxVal3,val3Source);
	}
	document.SelectItem.Results.value = outputString;
}

function DisplayProb(value,source)
{
	var outputString = new String();
	var i;
	var j;
	outputString = (value*100+"").substring(0,9)+"% ";
	if (source=="normalMonster")
	{
		outputString += "Normal enemies (mlvl ";
		for (i=0; i<30; i++)
		{
			if (normalMonsterRarityNORM[i] == value || normalMonsterRarityNIGHT[i] == value || normalMonsterRarityHELL[i] == value)
			{
				outputString += (i+1)+",";
			}
		}
		outputString += " ";
		for (i=0; i<30; i++)
		{
			if (normalMonsterRarityNORM[i] == value)
			{
				outputString += "n/";
				break;
			}
		}
		for (i=0; i<30; i++)
		{
			if (normalMonsterRarityNIGHT[i] == value)
			{
				outputString += "N/";
				break;
			}
		}
		for (i=0; i<30; i++)
		{
			if (normalMonsterRarityHELL[i] == value)
			{
				outputString += "H/";
				break;
			}
		}
		outputString = outputString.substring(0,outputString.length-1);
		outputString += "):";
		for (i=0; i<30; i++)
		{
			if (normalMonsterRarityNORM[i] == value || normalMonsterRarityNIGHT[i] == value || normalMonsterRarityHELL[i] == value)
			{
				for (j=0; j<monster.length; j++)
				{
					if (monster[j].mlvl == i+1)
					{
						outputString += "\n                " + monster[j].name;
					}
				}
			}
		}
	}
	else if (source=="weaponRack")
	{
		outputString += "Weapon rack (dlvl ";
		for (i=0; i<16; i++)
		{
			if (weaponRackRarity[i] == value)
			{
				outputString += (i+1)+",";
			}
		}
		outputString = outputString.substring(0,outputString.length-1);
		outputString += ")";
	}
	else if (source=="armorRack")
	{
		outputString += "Armor rack (dlvl ";
		for (i=0; i<16; i++)
		{
			if (armorRackRarity[i] == value)
			{
				outputString += (i+1)+",";
			}
		}
		outputString = outputString.substring(0,outputString.length-1);
		outputString += ")";
	}
	else if (source=="decapBody")
	{
		outputString += "Decapitated body (dlvl ";
		for (i=0; i<16; i++)
		{
			if (decapBodyRarity[i] == value)
			{
				outputString += (i+1)+",";
			}
		}
		outputString = outputString.substring(0,outputString.length-1);
		outputString += ")";
	}
	else if (source=="chest")
	{
		outputString += "Large chest (dlvl ";
		for (i=0; i<16; i++)
		{
			if (chestRarity[i]*3/2 == value)
			{
				outputString += (i+1)+",";
			}
		}
		outputString = outputString.substring(0,outputString.length-1);
		outputString += ")";
	}
	else if (source=="uniqueMonster")
	{
		outputString += "Unique enemies:";
		for (i=0; i<69; i++)
		{
			if (uniqueMonsterRarityNORM[i] == value || uniqueMonsterRarityNIGHT[i] == value || uniqueMonsterRarityHELL[i] == value)
			{
				
				outputString += "\n                " + uniqueMonster[i].name +" ("+ uniqueMonster[i].type +", ";
			}
			if (uniqueMonsterRarityNORM[i] == value)
			{
				outputString += "n/";
			}
			if (uniqueMonsterRarityNIGHT[i] == value)
			{
				outputString += "N/";
			}
			if (uniqueMonsterRarityHELL[i] == value)
			{
				outputString += "H/";
			}
			if (uniqueMonsterRarityNORM[i] == value || uniqueMonsterRarityNIGHT[i] == value || uniqueMonsterRarityHELL[i] == value)
			{
				outputString = outputString.substring(0,outputString.length-1);
				outputString +=")";
			}
		}
	}
	return outputString;
}

function SigFig(toRound) //input and output float
{
	var decimal=0;
	var tempString = new String();
	var numString = new String("000000");
	if (toRound == 0)
	{
		return 0;
	}
	while (toRound<100)
	{
		toRound = toRound*10;
		decimal++;
	}
	toRound = Math.round(toRound);
	numString += toRound;
	numString = numString.substring(0,numString.length-decimal)+"."+numString.substring(numString.length-decimal,numString.length);
	if (parseFloat(numString) < 1)
	{
		return numString.substring(numString.indexOf(".")-1,numString.length);
	}
	else if (parseFloat(numString) < 10)
	{
		return numString.substring(numString.indexOf(".")-1,numString.length);
	}
	else if (parseFloat(numString) < 100)
	{
		return numString.substring(numString.indexOf(".")-2,numString.length);
	}
}

function SigFigGAMES(toRound) //input float output string
{
	var tempString = new String("");
	var i=0;
	var Places=0;
	if (toRound >= 10000)
	{
		Places=3;
	}
	else
	{
		Places=2;
	}
	var isDec=false;
	var myString = new String(Math.round(toRound));
	if (myString.indexOf(".") != -1)
	{
		isDec=true;
	}
	if (!isDec && myString.length > Places)
	{
		for (i=0; i<myString.length-Places; i++)
		{
			tempString += "0";
		}
		myString = myString.substring(0,Places)+tempString;
	}
	return myString;
}

////////////////////////
//BEGIN RARITY FUNCTIONS
////////////////////////

//normal monster rarity
function NormalMonster(mlvl,diffBonus)
{
	var rarity = 1.00;
	
	//chance for item to drop
	rarity = rarity * 0.107;
	
	//chance for selected base item
	var totalBase = 0;
	var desiredBase = 0;
	for (var i=0; i<baseEQ.length; i++)
	{
		if (baseEQ[i].ilvl <= mlvl+diffBonus)
		{
			if (baseEQ[i].iClass == "Bow") //bows have double chance of being picked
			{
				totalBase++;
			}
			totalBase++;
		}
	}
	for (i=0; i<otherBase.length; i++)
	{
		if (otherBase[i].ilvl <= mlvl+diffBonus)
		{
			totalBase++;
		}
	}
	if (multiBase)
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].iClass == selectedBase && baseEQ[i].ilvl <= mlvl+diffBonus)
			{
				if (baseEQ[i].iClass == "Bow")
				{
					desiredBase++;
				}
				desiredBase++;
			}
		}
	}
	else
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].name == selectedBase && baseEQ[i].ilvl <= mlvl+diffBonus)
			{
				if (baseEQ[i].iClass == "Bow")
				{
					desiredBase++;
				}
				desiredBase++;
			}
		}
	}
	rarity = rarity * (desiredBase/totalBase);
	
	//chance to be magical
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff")
	{
		if (document.SelectItem.Suffix.selectedIndex >= 14)
		{
			rarity = rarity * 0.75;
		}
		else
		{
			rarity = rarity * 0.25;
		}
	}
	else if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Jewelry")
	{
		rarity = rarity * 1.00;
	}
	else
	{
		rarity = rarity * (.11 +.0089 * (mlvl+1));
	}

	//chance to remain magical (not unique)
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		rarity = rarity * 1.00;
	}
	else if (selectedBase == "Jewelry" && desiredBase > 0)
	{
		var ringCount = 0;
		var jewelCount = 0;
		for (i=67; i<=71; i++)
		{
			if (baseEQ[i].ilvl <= mlvl+diffBonus)
			{
				jewelCount++;
				if (baseEQ[i].name == "Ring")
				{
					ringCount++;
				}
			}
		}
		rarity = rarity * (1.00 - 0.02 * (ringCount/jewelCount));
	}
	else if (selectedBase == "Amulet")
	{
		rarity = rarity * 1.00;
	}
	else
	{
		rarity = rarity * 0.98;
	}

	//chance for prefix/suffix/both
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		if (!noPrefix)
		{
			rarity = rarity * .10;
		}
		else
		{
			rarity = rarity * .90;
		}
	}
	else if (!noPrefix && noSuffix)
	{
		rarity = rarity * 0.208;
	}
	else if (noPrefix && !noSuffix)
	{
		rarity = rarity *0.625;
	}
	else if (!noPrefix && !noSuffix)
	{
		rarity = rarity * 0.167;
	}

	//chance for selected prefix
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14 && !noPrefix && selectedPrefix.name != "Any")
	{
		var totalPrefix = 0;
		var desiredPrefix = 0;
		for (i=0; i<validPrefix.length; i++)
		{
			if (validPrefix[i].qlvl <= mlvl)
			{
				if (validPrefix[i].cursed)
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2/3: 1/3);
				}
				else
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2: 1);
				}
			}
		}
		if (selectedPrefix.qlvl <= mlvl)
		{
			if (selectedPrefix.cursed)
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2/3: 1/3);
			}
			else
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredPrefix/totalPrefix);
	}
	else if (!noPrefix && selectedPrefix.name != "Any")
	{
		var totalPrefix = 0;
		var desiredPrefix = 0;
		for (i=0; i<validPrefix.length; i++)
		{
			if (Math.floor(mlvl/2) <= validPrefix[i].qlvl && validPrefix[i].qlvl <= mlvl)
			{
				if (validPrefix[i].cursed)
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2/3: 1/3);
				}
				else
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2: 1);
				}
			}
		}
		if (Math.floor(mlvl/2) <= selectedPrefix.qlvl && selectedPrefix.qlvl <= mlvl)
		{
			if (selectedPrefix.cursed)
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2/3: 1/3);
			}
			else
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredPrefix/totalPrefix);
	}
	if (selectedPrefix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	//chance for selected suffix
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		var totalSuffix = 0;
		var desiredSuffix = 0;
		for (i=0; i<validSuffix.length; i++)
		{
			if (validSuffix[i].qlvl <= Math.floor(mlvl/2) || validSuffix[i].qlvl == 1)
			{
				totalSuffix++;
			}
		}
		if (selectedSuffix.qlvl <= Math.floor(mlvl/2) || selectedSuffix.qlvl == 1)
		{
			desiredSuffix++;
		}
		rarity = rarity * (desiredSuffix/totalSuffix);
	}
	else if (!noSuffix && selectedSuffix.name != "Any")
	{
		var totalSuffix = 0;
		var desiredSuffix = 0;
		for (i=0; i<validSuffix.length; i++)
		{
			if (Math.floor(mlvl/2) <= validSuffix[i].qlvl && validSuffix[i].qlvl <= mlvl)
			{
				if (validSuffix[i].cursed)
				{
					totalSuffix += ((validSuffix[i].dChance) ? 2/3: 1/3);
				}
				else
				{
					totalSuffix += ((validSuffix[i].dChance) ? 2: 1);
				}
			}
		}
		if (Math.floor(mlvl/2) <= selectedSuffix.qlvl && selectedSuffix.qlvl <= mlvl)
		{
			if (selectedSuffix.cursed)
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 2/3: 1/3);
			}
			else
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredSuffix/totalSuffix);
	}
	if (selectedSuffix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	return rarity;
}

//unique monster rarity
function UniqueMonster(uniqueIndex,diffBonus)
{
	var rarity = 1.00;
	
	//chance for item to drop
	rarity = rarity * 1.00;
	
	//chance for selected base item
	var totalBase = 0;
	var desiredBase = 0;
	for (var i=0; i<baseEQ.length; i++)
	{
		if (baseEQ[i].ilvl <= uniqueMonster[uniqueIndex].ilvl+diffBonus)
		{
			totalBase++;
		}
	}
	for (i=0; i<otherBase.length; i++)
	{
		if (otherBase[i].ilvl <= uniqueMonster[uniqueIndex].ilvl+diffBonus && otherBase[i].iClass == "Book")
		{
			totalBase++;
		}
	}
	if (multiBase)
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].iClass == selectedBase && baseEQ[i].ilvl <= uniqueMonster[uniqueIndex].ilvl+diffBonus)
			{
				desiredBase++;
			}
		}
	}
	else
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].name == selectedBase && baseEQ[i].ilvl <= uniqueMonster[uniqueIndex].ilvl+diffBonus)
			{
				desiredBase++;
			}
		}
	}
	rarity = rarity * (desiredBase/totalBase);
	
	//chance to be magical
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		if (document.SelectItem.Suffix.selectedIndex >= 14)
		{
			rarity = rarity * 0.75;
		}
		else
		{
			rarity = rarity * 0.25;
		}
	}
	else
	{
		rarity = rarity * 1.00;
	}

	//chance to remain magical (not unique)
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		rarity = rarity * 1.00;
	}
	else if (selectedBase == "Jewelry" && desiredBase > 0)
	{
		var ringCount = 0;
		var jewelCount = 0;
		for (i=67; i<=71; i++)
		{
			if (baseEQ[i].ilvl <= uniqueMonster[uniqueIndex].ilvl+diffBonus)
			{
				jewelCount++;
				if (baseEQ[i].name == "Ring")
				{
					ringCount++;
				}
			}
		}
		rarity = rarity * (1.00 - 0.16 * (ringCount/jewelCount));
	}
	else if (selectedBase == "Amulet")
	{
		rarity = rarity * 1.00;
	}
	else
	{
		rarity = rarity * 0.84;
	}

	//chance for prefix/suffix/both
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		if (!noPrefix)
		{
			rarity = rarity * 1.00;
		}
		else
		{
			rarity = rarity * 0.00;
			return rarity;
		}
	}
	else if (!noPrefix && noSuffix)
	{
		rarity = rarity * 0.208;
	}
	else if (noPrefix && !noSuffix)
	{
		rarity = rarity *0.625;
	}
	else if (!noPrefix && !noSuffix)
	{
		rarity = rarity * 0.167;
	}

	//chance for selected prefix
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14 && !noPrefix && selectedPrefix.name != "Any")
	{
		var totalPrefix = 0;
		var desiredPrefix = 0;
		for (i=0; i<validPrefix.length; i++)
		{
			if (validPrefix[i].qlvl <= uniqueMonster[uniqueIndex].mlvl+4)
			{
				if (!validPrefix[i].cursed)
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2: 1);
				}
			}
		}
		if (selectedPrefix.qlvl <= uniqueMonster[uniqueIndex].mlvl+4)
		{
			if (!selectedPrefix.cursed)
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredPrefix/totalPrefix);
	}
	else if (!noPrefix && selectedPrefix.name != "Any")
	{
		var totalPrefix = 0;
		var desiredPrefix = 0;
		for (i=0; i<validPrefix.length; i++)
		{
			if (Math.floor((uniqueMonster[uniqueIndex].mlvl+4)/2) <= validPrefix[i].qlvl && validPrefix[i].qlvl <= uniqueMonster[uniqueIndex].mlvl+4)
			{
				if (!validPrefix[i].cursed)
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2: 1);
				}
			}
		}
		if (Math.floor((uniqueMonster[uniqueIndex].mlvl+4)/2) <= selectedPrefix.qlvl && selectedPrefix.qlvl <= uniqueMonster[uniqueIndex].mlvl+4)
		{
			if (!selectedPrefix.cursed)
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredPrefix/totalPrefix);
	}
	if (selectedPrefix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	//chance for selected suffix
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		var totalSuffix = 0;
		var desiredSuffix = 0;
		for (i=0; i<validSuffix.length; i++)
		{
			if (validSuffix[i].qlvl <= Math.floor((uniqueMonster[uniqueIndex].mlvl+4)/2) || validSuffix[i].qlvl == 1)
			{
				totalSuffix++;
			}
		}
		if (selectedSuffix.qlvl <= Math.floor((uniqueMonster[uniqueIndex].mlvl+4)/2) || selectedSuffix.qlvl == 1)
		{
			desiredSuffix++;
		}
		rarity = rarity * (desiredSuffix/totalSuffix);
	}
	else if (!noSuffix && selectedSuffix.name != "Any")
	{
		var totalSuffix = 0;
		var desiredSuffix = 0;
		for (i=0; i<validSuffix.length; i++)
		{
			if (Math.floor((uniqueMonster[uniqueIndex].mlvl+4)/2) <= validSuffix[i].qlvl && validSuffix[i].qlvl <= uniqueMonster[uniqueIndex].mlvl+4)
			{
				if (!validSuffix[i].cursed)
				{
					totalSuffix += ((validSuffix[i].dChance) ? 2: 1);
				}
			}
		}
		if (Math.floor((uniqueMonster[uniqueIndex].mlvl+4)/2) <= selectedSuffix.qlvl && selectedSuffix.qlvl <= uniqueMonster[uniqueIndex].mlvl+4)
		{
			if (!selectedSuffix.cursed)
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredSuffix/totalSuffix);
	}
	if (selectedSuffix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	return rarity;
}

//dungeon source rarity
function DungeonSource(dlvl)
{
	var rarity = 1.00;

	//no dungeon sources on dlvl 16
	if (dlvl == 16)
	{
		rarity = rarity * 0.00;
		return rarity;
	}
	
	//chance for item to drop (included in MAIN)
	rarity = rarity * 1.00;
	
	//chance for selected base item
	var totalBase = 0;
	var desiredBase = 0;
	for (var i=0; i<baseEQ.length; i++)
	{
		if (baseEQ[i].ilvl <= 2*dlvl)
		{
			totalBase++;
		}
	}
	for (i=0; i<otherBase.length; i++)
	{
		if (otherBase[i].ilvl <= 2*dlvl)
		{
			totalBase++;
		}
	}
	if (multiBase)
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].iClass == selectedBase && baseEQ[i].ilvl <=2*dlvl)
			{
				desiredBase++;
			}
		}
	}
	else
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].name == selectedBase && baseEQ[i].ilvl <= 2*dlvl)
			{
				desiredBase++;
			}
		}
	}
	rarity = rarity * (desiredBase/totalBase);
	
	//chance to be magical
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff")
	{
		if (document.SelectItem.Suffix.selectedIndex >= 14)
		{
			rarity = rarity * 0.75;
		}
		else
		{
			rarity = rarity * 0.25;
		}
	}
	else if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Jewelry")
	{
		rarity = rarity * 1.00;
	}
	else
	{
		rarity = rarity * (.11 +.0089 * (2*dlvl+1));
	}

	//chance to remain magical (not unique)
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		rarity = rarity * 1.00;
	}
	else if (selectedBase == "Jewelry" && desiredBase > 0)
	{
		var ringCount = 0;
		var jewelCount = 0;
		for (i=67; i<=71; i++)
		{
			if (baseEQ[i].ilvl <= 2*dlvl)
			{
				jewelCount++;
				if (baseEQ[i].name == "Ring")
				{
					ringCount++;
				}
			}
		}
		rarity = rarity * (1.00 - 0.02 * (ringCount/jewelCount));
	}
	else if (selectedBase == "Amulet")
	{
		rarity = rarity * 1.00;
	}
	else
	{
		rarity = rarity * 0.98;
	}

	//chance for prefix/suffix/both
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		if (!noPrefix)
		{
			rarity = rarity * .10;
		}
		else
		{
			rarity = rarity * .90;
		}
	}
	else if (!noPrefix && noSuffix)
	{
		rarity = rarity * 0.208;
	}
	else if (noPrefix && !noSuffix)
	{
		rarity = rarity *0.625;
	}
	else if (!noPrefix && !noSuffix)
	{
		rarity = rarity * 0.167;
	}

	//chance for selected prefix
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14 && !noPrefix && selectedPrefix.name != "Any")
	{
		var totalPrefix = 0;
		var desiredPrefix = 0;
		for (i=0; i<validPrefix.length; i++)
		{
			if (validPrefix[i].qlvl <= 2*dlvl)
			{
				if (validPrefix[i].cursed)
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2/3: 1/3);
				}
				else
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2: 1);
				}
			}
		}
		if (selectedPrefix.qlvl <= 2*dlvl)
		{
			if (selectedPrefix.cursed)
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2/3: 1/3);
			}
			else
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredPrefix/totalPrefix);
	}
	else if (!noPrefix && selectedPrefix.name != "Any")
	{
		var totalPrefix = 0;
		var desiredPrefix = 0;
		for (i=0; i<validPrefix.length; i++)
		{
			if (dlvl <= validPrefix[i].qlvl && validPrefix[i].qlvl <= 2*dlvl)
			{
				if (validPrefix[i].cursed)
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2/3: 1/3);
				}
				else
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2: 1);
				}
			}
		}
		if (dlvl <= selectedPrefix.qlvl && selectedPrefix.qlvl <= 2*dlvl)
		{
			if (selectedPrefix.cursed)
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2/3: 1/3);
			}
			else
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredPrefix/totalPrefix);
	}
	if (selectedPrefix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	//chance for selected suffix
	if (document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text == "Staff" && document.SelectItem.Suffix.selectedIndex >= 14)
	{
		var totalSuffix = 0;
		var desiredSuffix = 0;
		for (i=0; i<validSuffix.length; i++)
		{
			if (validSuffix[i].qlvl <= dlvl)
			{
				totalSuffix++;
			}
		}
		if (selectedSuffix.qlvl <= dlvl)
		{
			desiredSuffix++;
		}
		rarity = rarity * (desiredSuffix/totalSuffix);
	}
	else if (!noSuffix && selectedSuffix.name != "Any")
	{
		var totalSuffix = 0;
		var desiredSuffix = 0;
		for (i=0; i<validSuffix.length; i++)
		{
			if (dlvl <= validSuffix[i].qlvl && validSuffix[i].qlvl <= 2*dlvl)
			{
				if (validSuffix[i].cursed)
				{
					totalSuffix += ((validSuffix[i].dChance) ? 2/3: 1/3);
				}
				else
				{
					totalSuffix += ((validSuffix[i].dChance) ? 2: 1);
				}
			}
		}
		if (dlvl <= selectedSuffix.qlvl && selectedSuffix.qlvl <= 2*dlvl)
		{
			if (selectedSuffix.cursed)
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 2/3: 1/3);
			}
			else
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredSuffix/totalSuffix);
	}
	if (selectedSuffix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	return rarity;
}

//armor rack rarity
function ArmorRack(dlvl)
{
	var rarity = 1.00;
	var iClass = document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text;

	//armor racks do not exist in church
	if (dlvl <= 4 || dlvl == 16)
	{
		rarity = rarity * 0.00;
		return rarity;
	}
	
	//chance for item to drop
	if (iClass == "Armor")
	{
		rarity = rarity * 1.00;
		if (dlvl == 5)
		{
			iClass = "Light Armor";
		}
		else if (6 <= dlvl && dlvl < 10)
		{
			iClass = "Medium Armor";
		}
		else if (10 <= dlvl && dlvl < 16)
		{
			iClass = "Heavy Armor";
		}
	}
	else
	{
		rarity = rarity * 0.00;
		return rarity;
	}
	
	//chance for selected base item
	var totalBase = 0;
	var desiredBase = 0;
	for (var i=0; i<baseEQ.length; i++)
	{
		if (baseEQ[i].ilvl <= 2*dlvl && baseEQ[i].iClass == iClass)
		{
			totalBase++;
		}
	}
	if (multiBase)
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].iClass == selectedBase && baseEQ[i].ilvl <=2*dlvl && baseEQ[i].iClass == iClass)
			{
				desiredBase++;
			}
		}
	}
	else
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].name == selectedBase && baseEQ[i].ilvl <= 2*dlvl && baseEQ[i].iClass == iClass)
			{
				desiredBase++;
			}
		}
	}
	rarity = rarity * (desiredBase/totalBase);
	
	//chance to be magical
	if (dlvl == 5 || (13 <= dlvl && dlvl < 16))
	{
		rarity = rarity * 1.00;
	}
	else if (6 <= dlvl && dlvl < 10)
	{
		rarity = rarity * (.555 +.00445 * (2*dlvl+1));
	}
	else if (10 <= dlvl && dlvl < 13)
	{
		rarity = rarity * (.11 +.0089 * (2*dlvl+1));
	}

	//chance to remain magical (not unique)
	rarity = rarity * 0.98;

	//chance for prefix/suffix/both
	if (!noPrefix && noSuffix)
	{
		rarity = rarity * 0.208;
	}
	else if (noPrefix && !noSuffix)
	{
		rarity = rarity *0.625;
	}
	else if (!noPrefix && !noSuffix)
	{
		rarity = rarity * 0.167;
	}

	//chance for selected prefix
	if (!noPrefix && selectedPrefix.name != "Any")
	{
		var totalPrefix = 0;
		var desiredPrefix = 0;
		for (i=0; i<validPrefix.length; i++)
		{
			if (dlvl <= validPrefix[i].qlvl && validPrefix[i].qlvl <= 2*dlvl)
			{
				if (!validPrefix[i].cursed)
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2: 1);
				}
				else if (validPrefix[i].cursed && (6 <= dlvl && dlvl < 10))
				{
					totalPrefix += ((validPrefix[i].dChance) ? 1/3: 0.165);
				}
				else if (validPrefix[i].cursed && (10 <= dlvl && dlvl < 13))
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2/3: 1/3);
				}
			}
		}
		if (dlvl <= selectedPrefix.qlvl && selectedPrefix.qlvl <= 2*dlvl)
		{
			if (!selectedPrefix.cursed)
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2: 1);
			}
			else if (selectedPrefix.cursed && (6 <= dlvl && dlvl < 10))
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 1/3: 0.165);
			}
			else if (selectedPrefix.cursed && (10 <= dlvl && dlvl < 13))
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2/3: 1/3);
			}
		}
		rarity = rarity * (desiredPrefix/totalPrefix);
	}
	if (selectedPrefix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	//chance for selected suffix
	if (!noSuffix && selectedSuffix.name != "Any")
	{
		var totalSuffix = 0;
		var desiredSuffix = 0;
		for (i=0; i<validSuffix.length; i++)
		{
			if (dlvl <= validSuffix[i].qlvl && validSuffix[i].qlvl <= 2*dlvl)
			{
				if (!validSuffix[i].cursed)
				{
					totalSuffix += ((validSuffix[i].dChance) ? 2: 1);
				}
				else if (validSuffix[i].cursed && (6 <= dlvl && dlvl < 10))
				{
					totalSuffix += ((validSuffix[i].dChance) ? 1/3: 0.165);
				}
				else if (validSuffix[i].cursed && (10 <= dlvl && dlvl < 13))
				{
					totalSuffix += ((validSuffix[i].dChance) ? 2/3: 1/3);
				}
			}
		}
		if (dlvl <= selectedSuffix.qlvl && selectedSuffix.qlvl <= 2*dlvl)
		{
			if (!selectedSuffix.cursed)
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 2: 1);
			}
			else if (selectedSuffix.cursed && (6 <= dlvl && dlvl < 10))
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 1/3: 0.165);
			}
			else if (selectedSuffix.cursed && (10 <= dlvl && dlvl < 13))
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 2/3: 1/3);
			}
		}
		rarity = rarity * (desiredSuffix/totalSuffix);
	}
	if (selectedSuffix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	return rarity;
}

//weapon rack rarity
function WeaponRack(dlvl)
{
	var rarity = 1.00;
	var iClass = document.SelectItem.Class.options[document.SelectItem.Class.selectedIndex].text;

	//weapon racks do not exist in church
	if (dlvl <= 4 || dlvl == 16)
	{
		rarity = rarity * 0.00;
		return rarity;
	}
	
	//chance for item to drop
	if (iClass == "Axe" || iClass == "Bow" || iClass == "Club" || iClass == "Sword")
	{
		rarity = rarity * 0.25;
	}
	else
	{
		rarity = rarity * 0.00;
		return rarity;
	}
	
	//chance for selected base item
	var totalBase = 0;
	var desiredBase = 0;
	for (var i=0; i<baseEQ.length; i++)
	{
		if (baseEQ[i].ilvl <= 2*dlvl && (baseEQ[i].iClass == iClass || baseEQ[i].iClass == iClass+".1" || baseEQ[i].iClass == iClass+".2"))
		{
			totalBase++;
		}
	}
	if (multiBase)
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].iClass == selectedBase && baseEQ[i].ilvl <=2*dlvl)
			{
				desiredBase++;
			}
		}
	}
	else
	{
		for (i=0; i<baseEQ.length; i++)
		{
			if (baseEQ[i].name == selectedBase && baseEQ[i].ilvl <= 2*dlvl && (baseEQ[i].iClass == iClass || baseEQ[i].iClass == iClass+".1" || baseEQ[i].iClass == iClass+".2"))
			{
				desiredBase++;
			}
		}
	}
	rarity = rarity * (desiredBase/totalBase);
	
	//chance to be magical
	rarity = rarity * 1.00;

	//chance to remain magical (not unique)
	rarity = rarity * 0.98;

	//chance for prefix/suffix/both
	if (!noPrefix && noSuffix)
	{
		rarity = rarity * 0.208;
	}
	else if (noPrefix && !noSuffix)
	{
		rarity = rarity *0.625;
	}
	else if (!noPrefix && !noSuffix)
	{
		rarity = rarity * 0.167;
	}

	//chance for selected prefix
	if (!noPrefix && selectedPrefix.name != "Any")
	{
		var totalPrefix = 0;
		var desiredPrefix = 0;
		for (i=0; i<validPrefix.length; i++)
		{
			if (dlvl <= validPrefix[i].qlvl && validPrefix[i].qlvl <= 2*dlvl)
			{
				if (!validPrefix[i].cursed)
				{
					totalPrefix += ((validPrefix[i].dChance) ? 2: 1);
				}
			}
		}
		if (dlvl <= selectedPrefix.qlvl && selectedPrefix.qlvl <= 2*dlvl)
		{
			if (!selectedPrefix.cursed)
			{
				desiredPrefix += ((selectedPrefix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredPrefix/totalPrefix);
	}
	if (selectedPrefix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	//chance for selected suffix
	if (!noSuffix && selectedSuffix.name != "Any")
	{
		var totalSuffix = 0;
		var desiredSuffix = 0;
		for (i=0; i<validSuffix.length; i++)
		{
			if (dlvl <= validSuffix[i].qlvl && validSuffix[i].qlvl <= 2*dlvl)
			{
				if (!validSuffix[i].cursed)
				{
					totalSuffix += ((validSuffix[i].dChance) ? 2: 1);
				}
			}
		}
		if (dlvl <= selectedSuffix.qlvl && selectedSuffix.qlvl <= 2*dlvl)
		{
			if (!selectedSuffix.cursed)
			{
				desiredSuffix += ((selectedSuffix.dChance) ? 2: 1);
			}
		}
		rarity = rarity * (desiredSuffix/totalSuffix);
	}
	if (selectedSuffix.name == "Any")
	{
		rarity = rarity * 1.00;
	}

	return rarity;
}
