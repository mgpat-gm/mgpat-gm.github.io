function encounterMonsters() {

// This needs a full set of player stats.

var output = "";

var pIndex = document.combat.player.selectedIndex;
var wIndex = document.combat.weapon.selectedIndex;
var mIndex = document.combat.extra.selectedIndex;
var diffIndex = document.combat.difficulty.selectedIndex;
var dlvlIndex = document.combat.dlvl.selectedIndex;

var playerLevel = document.combat.clvl.selectedIndex + 1;
var weaponBonusTohit = playerArray[pIndex].p_bwtohit;
var bowBonusTohit = playerArray[pIndex].p_bbtohit;
var magicBonusTohit = playerArray[pIndex].p_bmtohit;
var blockingBonus = playerArray[pIndex].p_bblock;

var monsterArmor = monsterArray[mIndex].m_armor + difficultyArray[diffIndex].d_armor;
var monsterLevel = monsterArray[mIndex].m_mlvl + difficultyArray[diffIndex].d_mlvl;
var monsterTohit = monsterArray[mIndex].m_tohit + difficultyArray[diffIndex].d_tohit;
var monsterExperience = monsterArray[mIndex].m_experience * difficultyArray[diffIndex].d_experience1 + difficultyArray[diffIndex].d_experience2;

var dlvlAutohit = dlvlArray[dlvlIndex].dlvl_autohit;
var weaponMode = weaponArray[wIndex].w_mode;
var tohitVal = internal.ia_tohit;
var armorVal = internal.ia_armor;
var finalTohit = 0;
var finalArmor = 0;
var blockingChance = 0;


// Decide what weapon was chosen
switch( weaponMode) {

  case "Melee" :
    finalTohit = tohitVal + playerLevel + weaponBonusTohit - monsterArmor;
    break;

  case "Bow" :
    finalTohit = tohitVal + internal.ia_dexterity/2 + playerLevel + bowBonusTohit - monsterArmor;
    break;

  case "Spell" :
    finalTohit = 50 + internal.ia_magic + magicBonusTohit - monsterLevel - monsterLevel;
    break;

  default :
    alert("This should never see the light of day.");
    break;
  }


// Check for attack mode
// if "Weapon" or "Arrow", then list AC
// if "Spell", then list resistances

// Assume Weapon for now, add others later

finalArmor = 30 + monsterTohit + monsterLevel + monsterLevel - playerLevel - playerLevel - armorVal;

if( finalArmor < dlvlAutohit)
  finalArmor = dlvlAutohit;


// Blocking for players

// Need to check to see if blocking can actually occur

blockingChance = internal.ia_dexterity - monsterLevel - monsterLevel + playerLevel + playerLevel + blockingBonus;



// Output for the Encounter


output += "Your final To-Hit%        = ";
output += finalTohit;
output += ".\n";

output += "The monster's To-Hit%     = ";
output += finalArmor;
output += ".\n";

output += "Your chance for blocking  = ";
output += blockingChance;
output += ".\n";


document.combat.results2.value = output;
}



function calcExp( baseExp, mLevel, pLevel) {

var mExp = 0;

// Checking for valid player level
if( (pLevel - mLevel) < 10)
  mExp = Math.floor( baseExp * (1.0 + (mLevel - pLevel)/10));

// Max for SP games experience is monster's base experience
if( (internal.ia_game == "SP Diablo") || (internal.ia_game == "SP Hellfire") )
  if( mExp > baseExp)
    mExp = baseExp;

// Max for MP games depends on clvl
if( (internal.ia_game == "MP Diablo") || (internal.ia_game == "MP Hellfire") ) {

  if( pLevel == 1)
    if( mExp > 100)
      mExp = 100;

  if( pLevel == 2)
    if( mExp > 231)
      mExp = 231;

  if( pLevel == 3)
    if( mExp > 402)
      mExp = 402;

  if( pLevel == 4)
    if( mExp > 624)
      mExp = 624;

  if( pLevel == 5)
    if( mExp > 912)
      mExp = 912;

  if( pLevel > 5)
    if( mExp > (200 * pLevel))
      mExp = 200 * pLevel;
  }

return mExp;
}




// --------------------------------
// More constants

var autoHit = 5;
var autoMiss = 95;


// --------------------------------
// Player Attributes

// p_type == type of player's character class
// p_strength == Diablo Max Strength Attribute
// p_hfstrength == Hellfire Max Strength Attribute
// p_magic == Diablo Max Magic Attribute
// p_hfmagic == Hellfire Max Magic Attribute
// p_dexterity == Diablo Max Dexterity Attribute
// p_hfdexterity == Hellfire Max Dexterity Attribute
// p_vitality == Diablo Max Vitality Attribute
// p_hfvitality == Hellfire Max Vitality Attribute
// p_armor == Max AC rating
// p_hfarmor == Max Hellfire AC rating
// p_tohit == Max To-Hit%
// p_damage == Max Damage
// p_bwtohit == Bonus to Melee (Weapon) To-Hit%
// p_bbtohit == Bonus to Bow To-Hit%
// p_bmtohit == Bonus to Magic To-Hit%
// p_bblock == Bonus to Blocking
// p_blocking == Number of frames in blocking anim
// p_recovery == Number of frames in recovery anim

function player_attributes(p_type, p_strength, p_hfstrength, p_magic, p_hfmagic, p_dexterity, p_hfdexterity, p_vitality, p_hfvitality, p_armor, p_hfarmor, p_tohit, p_damage, p_bwtohit, p_bbtohit, p_bmtohit, p_bblock, p_blocking, p_recovery) {

this.p_type = p_type;
this.p_strength = p_strength;
this.p_hfstrength = p_hfstrength;
this.p_magic = p_magic;
this.p_hfmagic = p_hfmagic;
this.p_dexterity = p_dexterity;
this.p_hfdexterity = p_hfdexterity;
this.p_vitality = p_vitality;
this.p_hfvitality = p_hfvitality;
this.p_armor = p_armor;
this.p_hfarmor = p_hfarmor;
this.p_tohit = p_tohit;
this.p_damage = p_damage;
this.p_bwtohit = p_bwtohit;
this.p_bbtohit = p_bbtohit;
this.p_bmtohit = p_bmtohit;
this.p_bblock = p_bblock;
this.p_blocking = p_blocking;
this.p_recovery = p_recovery;
}

var playerArray = new Array(

new player_attributes("Warrior", 425, 485, 225, 285, 225, 285, 265, 325, 349, 401, 392, 0, 20, 10, 0, 30, 2, 6),
new player_attributes("Rogue", 230, 290, 245, 305, 415, 475, 245, 305, 385, 425, 487, 0, 0, 20, 0, 20, 4, 7),
new player_attributes("Sorceror", 220, 280, 425, 485, 250, 310, 245, 305, 350, 390, 405, 0, 0, 0, 20, 10, 6, 8),
new player_attributes("Monk", 0, 385, 0, 315, 0, 375, 0, 305, 0, 419, 437, 0, 0, 0, 0, 25, 3, 6),
new player_attributes("Bard", 0, 370, 0, 360, 0, 360, 0, 340, 0, 413, 565, 0, 0, 10, 10, 25, 4, 7),
new player_attributes("Barbarian", 0, 490, 0, 235, 0, 280, 0, 375, 0, 370, 390, 0, 0, 0, 0, 30, 2, 6)
);


// --------------------------------
// Weapon Attributes

// w_type == Name of the Weapon Type
// w_mode == Mode of attack (melee, arrow, spell)
// w_warrior == Weapon speed in frames
// w_rogue == ditto
// w_sorceror == ditto
// w_monk == ditto
// w_bard == ditto
// w_barbarian == ditto

function weapon_attributes(w_type, w_mode, w_warrior, w_rogue, w_sorceror, w_monk, w_bard, w_barbarian) {

this.w_type = w_type;
this.w_mode = w_mode;
this.w_warrior = w_warrior;
this.w_rogue = w_rogue;
this.w_sorceror = w_sorceror;
this.w_monk = w_monk;
this.w_bard = w_bard;
this.w_barbarian = w_barbarian;
}

var weaponArray = new Array(
new weapon_attributes("Bare", "Melee", 9, 10, 12, 7, 10, 9),
new weapon_attributes("Axe", "Melee", 10, 13, 16, 14, 13, 8),
new weapon_attributes("Bow", "Arrow", 11, 7, 16, 14, 11, 11),
new weapon_attributes("Club", "Melee", 9, 10, 12, 12, 10, 8),
new weapon_attributes("Shield", "Melee", 9, 10, 9, 9, 10, 9),
new weapon_attributes("Staff", "Melee", 11, 11, 12, 8, 11, 11),
new weapon_attributes("Sword", "Melee", 9, 10, 12, 12, 10, 9)
);



// --------------------------------
// Game Attributes

// g_type == Name of the Game

function game_attributes(g_type) {
this.g_type = g_type;
}

var gameArray = new Array(
new game_attributes("MP Diablo"),
new game_attributes("SP Diablo"),
new game_attributes("MP Hellfire"),
new game_attributes("SP Hellfire")
);


// --------------------------------
// Difficulty Attributes

// d_type == Level of the Difficulty
// d_mlvl == Adjustment for Monster Level
// d_hitpoints1 == Hit Point Multiplier to normal Difficulty
// d_hitpoints2 == Hit Point Adder after hp Multiplication
// d_hfhitpoints == Extra for (SP) Hellfire NM or Hell
// d_armor == Adjustment for Monster Armor
// d_tohit == Adjustment for Monster To-Hit%
// d_damage1 == Damage Multiplier to Normal Difficulty
// d_damage2 == Damage Adder after Damage Multiplication
// d_experience1 == Experience Multiplier to Normal Difficulty
// d_experience2 == Exp Adder after Experience Multiplication

function difficulty_attributes(d_type, d_mlvl, d_hitpoints1, d_hitpoints2, d_hfhitpoints, d_armor, d_tohit, d_damage1, d_damage2, d_experience1, d_experience2) {

this.d_type = d_type;
this.d_mlvl = d_mlvl;
this.d_hitpoints1 = d_hitpoints1;
this.d_hitpoints2 = d_hitpoints2;
this.d_hfhitpoints = d_hfhitpoints;
this.d_armor = d_armor;
this.d_tohit = d_tohit;
this.d_damage1 = d_damage1;
this.d_damage2 = d_damage2;
this.d_experience1 = d_experience1;
this.d_experience2 = d_experience2;
}

var difficultyArray = new Array(

new difficulty_attributes("Normal", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0),
new difficulty_attributes("Nightmare", 15, 3, 1, 49, 50, 85, 2, 4, 2, 2000),
new difficulty_attributes("Hell", 30, 4, 3, 97, 80, 120, 4, 6, 4, 4000)
);


// --------------------------------
// Dlvl Attributes

// dlvl_type == Name of the Desired Game Object
// dlvl_section == Section of the game (4 levels)
// dlvl_game == Game where this dlvl can happen
// dlvl_number == Value of the dlvl for calculations
// dlvl_autohit == Value of the monster's autohit on the dlvl

function dlvl_attributes( dlvl_type, dlvl_section, dlvl_game, dlvl_number, dlvl_autohit) {
this.dlvl_type = dlvl_type;
this.dlvl_section = dlvl_section;
this.dlvl_game = dlvl_game;
this.dlvl_number = dlvl_number;
this.dlvl_autohit = dlvl_autohit;
}

var dlvlArray = new Array(
new dlvl_attributes("1", "Church", "Diablo", 1, 15),
new dlvl_attributes("2", "Church", "Diablo", 2, 15),
new dlvl_attributes("3", "Church", "Diablo", 3, 15),
new dlvl_attributes("4", "Church", "Diablo", 4, 15),
new dlvl_attributes("5", "Catacombs", "Diablo", 5, 15),
new dlvl_attributes("6", "Catacombs", "Diablo", 6, 15),
new dlvl_attributes("7", "Catacombs", "Diablo", 7, 15),
new dlvl_attributes("8", "Catacombs", "Diablo", 8, 15),
new dlvl_attributes("9", "Caves", "Diablo", 9, 15),
new dlvl_attributes("10", "Caves", "Diablo",10, 15),
new dlvl_attributes("11", "Caves", "Diablo", 11, 15),
new dlvl_attributes("12", "Caves", "Diablo", 12, 15),
new dlvl_attributes("13", "Hell", "Diablo", 13, 15),
new dlvl_attributes("14", "Hell", "Diablo", 14, 20),
new dlvl_attributes("15", "Hell", "Diablo", 15, 25),
new dlvl_attributes("16", "Hell", "Diablo", 16, 30),
new dlvl_attributes("Hive 1", "Hive", "Hellfire", 9, 15),
new dlvl_attributes("Hive 2", "Hive", "Hellfire", 10, 15),
new dlvl_attributes("Hive 3", "Hive", "Hellfire", 11, 15),
new dlvl_attributes("Hive 4", "Hive", "Hellfire", 12, 15),
new dlvl_attributes("Crypt 1", "Crypt", "Hellfire", 14, 20),
new dlvl_attributes("Crypt 2", "Crypt", "Hellfire", 15, 25),
new dlvl_attributes("Crypt 3", "Crypt", "Hellfire", 16, 30),
new dlvl_attributes("Crypt 4", "Crypt", "Hellfire", 17, 30)
);


// --------------------------------
// Option Attributes

// s_type == Name of the Desired Game Object

function special_attributes( s_type) {
this.s_type = s_type;
}

var specialArray = new Array(
new special_attributes("Plain Monsters"),
new special_attributes("Boss Monsters"),
new special_attributes("Special Monsters"),
new special_attributes("Player vs Player"),
new special_attributes("Golem vs Monster"),
new special_attributes("Trap Encounters"),
new special_attributes("Item Drops"),
new special_attributes("Assorted Stats")
);



// --------------------------------
// Monster Group Attributes

// mg_type == Set of 4 monsters
// mg_class == One of Undead, Animal or Demon
// mg_game == Diablo or Hellfire
// mg_attack == One of "Weapon", "Arrow" or "Magic"
// mg_attack2 == Second attack, as above or "None"
// mg_attack2tohit == 2nd attack To-Hit modifier (L. Demons)
// mg_attack2damage == 2nd attack Damage modifier (M. Demons)
// mg_attack3 == Third attack, as above or "None"
// mg_speed == Walking speed in frames
// mg_recovery == Hit-recovery time in frames
// mg_swing == Swinging time for attacks in frames

function monstergroup_attributes( mg_type, mg_class, mg_game, mg_attack, mg_attack2, mg_attack2tohit, mg_attack2damage, mg_attack3, mg_speed, mg_recovery, mg_swing) {

this.mg_type = mg_type;
this.mg_class = mg_class;
this.mg_game = mg_game;
this.mg_attack = mg_attack;
this.mg_attack2 = mg_attack2;
this.mg_attack2tohit = mg_attack2tohit;
this.mg_attack2damage = mg_attack2damage;
this.mg_attack3 = mg_attack3;
this.mg_speed = mg_speed;
this.mg_recovery = mg_recovery;
this.mg_swing = mg_swing;
}


function changeGame() {

if( (internal.ia_game == "MP Diablo") || (internal.ia_game == "SP Diablo") ) {
  document.combat.results.value = "The selected option requires a change to Hellfire!\nEnabling the Single Player Hellfire settings.\n";
  internal.ia_game = "SP Hellfire";
  internalflags.game_flag = true;
  document.combat.game.selectedIndex = 3;
  }
}

function checkForm( theField) {

// If any HF-only feature was added, set to SP HF
// If HF was deselected, reset HF features to MP D
switch( theField) {

  case "player" :
    if( internalflags.player_flag)
      if( (internal.ia_player == "Monk") || (internal.ia_player == "Bard") || (internal.ia_player == "Barbarian") )
      changeGame();
    break;

  case "weapon" :
    if( internalflags.weapon_flag)
      if( false)
// add HF spells here, do nothing for now
        changeGame();
    break;

  case "dlvl" :
    if( internalflags.dlvl_flag)
      if( document.combat.dlvl.selectedIndex > 15)
        changeGame();
    break;

  case "extra" :
// The "Extra" array will depend on the "Special" array
// This will be slightly harder ...
// Could check for monster class ...
    if( internalflags.extra_flag)
      if( false)
        changeGame();
    break;

// This one goes the other way, HF -> D
  case "game" :
// Player selection
    if( (internal.ia_player == "Monk") || (internal.ia_player == "Bard") || (internal.ia_player == "Barbarian") ) {
      internal.ia_player = "Warrior";
      internalflags.player_flag = true;
      document.combat.player.selectedIndex = 0;
      }
    parseStrength();
    parseMagic();
    parseDexterity();
    parseVitality();
    parseArmor();
    parseTohit();
    parseDamageLow();
    parseDamageHigh();
    parseResMagic();
    parseResFire();
    parseResLightning();

// Weapon selection (HF spell)
    if( internalflags.weapon_flag)
      var mydummy = "0";

// Dlvl selection - take out Hive and Crypt
    if( internalflags.dlvl_flag)
      if( document.combat.dlvl.selectedIndex > 15) {
        document.combat.dlvl.selectedIndex = 0;
        internal.ia_dlvl = dlvlArray[document.combat.dlvl.selectedIndex].dlvl_type;
        }

// Reset the "Extra" array to default
// Can't currently do so :*(

    break;

  default :
    break;
  }
}

function helpPlayer() {
alert("This will provide a rundown on the various player options.\nDoes nothing right now.\n");
}

//// GhastMaster ////
function bothatonce() {
    encounterMonsters();
    overviewSpecial();
}

function encounterSpecial() {

// Need to test the "Special" array
// and decide what info to report on
switch( internal.ia_special) {

  case "Plain Monsters" :
    encounterMonsters();
    break;

  case "Boss Monsters" :
alert("Not implemented yet, but will be soon.");
    break;

  case "Special Monsters" :
alert("A small list with good interest, I'm working on it.");
    break;

  case "Player vs Player" :
alert("Special effort will be made for the Highlander Tournament.\nPlease have a little patience.");
    break;

  case "Golem vs Monster" :
alert("This will only work once spells are added as weapons.");
    break;

  case "Trap Encounters" :
alert("Basically only done for interest, most traps can be ignored anyway.");
    break;

  case "Item Drops" :
alert("This is to answer the DSF questions regarding item generation.\nBest used in conjunction with an item price generator.");
    break;

  case "Assorted Stats" :
alert("I'll work on these sometime during D2.");
    break;

  default :
alert("This should never see the light of day.");
    break;
  }
}


function overviewMonsters() {

var output = "";

var pIndex = document.combat.player.selectedIndex;
var mIndex = document.combat.extra.selectedIndex;
var diffIndex = document.combat.difficulty.selectedIndex;
var dlvlIndex = document.combat.dlvl.selectedIndex;

var meleeTohit = 0;
var bowTohit = 0;
var spellTohit = 0;
var blockingDexterity = 0;
var experience = 0;

var playerLevel = document.combat.clvl.selectedIndex + 1;
var weaponBonusTohit = playerArray[pIndex].p_bwtohit;
var bowBonusTohit = playerArray[pIndex].p_bbtohit;
var magicBonusTohit = playerArray[pIndex].p_bmtohit;
var blockingBonus = playerArray[pIndex].p_bblock;

var monsterArmor = monsterArray[mIndex].m_armor + difficultyArray[diffIndex].d_armor;
var monsterLevel = monsterArray[mIndex].m_mlvl + difficultyArray[diffIndex].d_mlvl;
var monsterTohit = monsterArray[mIndex].m_tohit + difficultyArray[diffIndex].d_tohit;
var monsterExperience = monsterArray[mIndex].m_experience * difficultyArray[diffIndex].d_experience1 + difficultyArray[diffIndex].d_experience2;

var dlvlAutohit = dlvlArray[dlvlIndex].dlvl_autohit;


output += "You have chosen a Clvl ";
output += internal.ia_clvl;
output += " ";
output += internal.ia_player;
output += " in ";
output += internal.ia_game;
output += " on ";
output += internal.ia_difficulty;
output += " difficulty.\n";

output += "You are up against a ";
output += internal.ia_extra;
output += ".\n\n";


// Melee To-Hit%

meleeTohit = autoHit - playerLevel - weaponBonusTohit + monsterArmor;

output += "Your effective melee To-Hit% range is ";
output += meleeTohit;
output += " to ";
output += meleeTohit + 90;
output += ".\n";


// Bow To-Hit%

bowTohit = autoHit - playerLevel - bowBonusTohit + monsterArmor;

output += "Your effective bow   To-Hit% range is ";
output += bowTohit;
output += " to ";
output += bowTohit + 90;
output += ".\n";


// Spell To-Hit%

spellTohit = autoHit - 50 - magicBonusTohit + monsterLevel + monsterLevel;

output += "Your effective spell To-Hit% range is ";
output += spellTohit;
output += " to ";
output += spellTohit + 90;
output += ".\n\n";


// AC

// monster melee To-Hit%
// future -> need to check for dlvls monsters appear on
meleeTohit = 30 + monsterTohit + monsterLevel + monsterLevel - playerLevel - playerLevel;

output += "Your effective Armor Class rating range is ";
output += meleeTohit - 100;
output += " to ";
output += meleeTohit - dlvlAutohit;
output += ".\n";


// Blocking

// Take out this line when blocking bonus bug is fixed
blockingBonus = 0;
blockingDexterity = monsterLevel + monsterLevel - playerLevel - playerLevel - blockingBonus;

output += "Your effective Blocking Dexterity range is ";
output += blockingDexterity;
output += " to ";
output += blockingDexterity + 100;
output += ".\n";


// Stunning Damage

output += "You will need a minimum of ";
output += monsterLevel + 3;
output += " damage to stun this monster.\n";


// Experience

experience = calcExp( monsterExperience, monsterLevel, playerLevel);

output += "You can earn ";
output += experience;
output += " experience points from this monster.\n";

document.combat.results.value = output;
}


function overviewSpecial() {

// Need to test the "Special" array
// and decide what info to report on
switch( internal.ia_special) {

  case "Plain Monsters" :
    overviewMonsters();
    break;

  case "Boss Monsters" :
alert("Not implemented yet, but will be soon.");
    break;

  case "Special Monsters" :
alert("A small list with good interest, I'm working on it.");
    break;

  case "Player vs Player" :
alert("Special effort will be made for the Highlander Tournament.\nPlease have a little patience.");
    break;

  case "Golem vs Monster" :
alert("This will only work once spells are added as weapons.");
    break;

  case "Trap Encounters" :
alert("Basically only done for interest, most traps can be ignored anyway.");
    break;

  case "Item Drops" :
alert("This is to answer the DSF questions regarding item generation.\nBest used in conjunction with an item price generator.");
    break;

  case "Assorted Stats" :
alert("I'll work on these sometime during D2.");
    break;

  default :
alert("This should never see the light of day.");
    break;
  }
}




function reset_form() {

// reset the internal variables here
with( internal) {
  ia_player = "Warrior";
  ia_clvl = 1;
  ia_weapon = "Bare";
  ia_slvl = 0;
  ia_strength = 0;
  ia_magic = 0;
  ia_dexterity = 0;
  ia_vitality = 0;
  ia_armor = 0;
  ia_tohit = 0;
  ia_damlow = 0;
  ia_damhigh = 0;
  ia_resmagic = 0;
  ia_resfire = 0;
  ia_reslightning = 0;

  ia_game = "MP Diablo";
  ia_difficulty = "Normal";
  ia_dlvl = "1";
  ia_special = "Plain Monsters";
  ia_extra = "Zombie";
  ia_duelclvl = 1;
  ia_duelstrength = 0;
  ia_duelmagic = 0;
  ia_dueldexterity = 0;
  ia_duelarmor = 0;
  ia_dueltohit = 0;
  ia_duelresistance = 0;
  }

// reset the flags here
with( internalflags) {
  player_flag = false;
  clvl_flag = false;
  weapon_flag = false;
  slvl_flag = false;
  strength_flag = false;
  magic_flag = false;
  dexterity_flag = false;
  vitality_flag = false;
  armor_flag = false;
  tohit_flag = false;
  damlow_flag = false;
  damhigh_flag = false;
  resmagic_flag = false;
  resfire_flag = false;
  reslightning_flag = false;

  game_flag = false;
  difficulty_flag = false;
  dlvl_flag = false;
  special_flag = false;
  extra_flag = false;
  duelclvl_flag = false;
  duelstrength_flag = false;
  duelmagic_flag = false;
  dueldexterity_flag = false;
  duelarmor_flag = false;
  dueltohit_flag = false;
  duelresistance_flag = false;
  }

// reset the form fields
with( document.combat) {
  player.selectedIndex = 0;
  clvl.selectedIndex = 0;
  weapon.selectedIndex = 0;
  slvl.selectedIndex = 0;
  str_fld.value = "";
  mag_fld.value = "";
  dex_fld.value = "";
  vit_fld.value = "";
  armor_fld.value = "";
  tohit_fld.value = "";
  damlow_fld.value = "";
  damhigh_fld.value = "";
  resmagic_fld.value = "";
  resfire_fld.value = "";
  reslightning_fld.value = "";

  game.selectedIndex = 0;
  difficulty.selectedIndex = 0;
  dlvl.selectedIndex = 0;
  special.selectedIndex = 0;
  extra.selectedIndex = 0;
  duelclvl.selectedIndex = 0;
  duelstr_fld.value = "";
  duelmag_fld.value = "";
  dueldex_fld.value = "";
  duelarmor_fld.value = "";
  dueltohit_fld.value = "";
  duelres_fld.value = "";

  results.value = "";
  results2.value = "";
  }
}

function print_flags() {

var output = "";

with( internalflags) {
  output += player_flag + "\n";
  output += clvl_flag + "\n";
  output += weapon_flag + "\n";
  output += slvl_flag + "\n";
  output += strength_flag + "\n";
  output += magic_flag + "\n";
  output += dexterity_flag + "\n";
  output += vitality_flag + "\n";
  output += armor_flag + "\n";
  output += tohit_flag + "\n";
  output += damlow_flag + "\n";
  output += damhigh_flag + "\n";
  output += resmagic_flag + "\n";
  output += resfire_flag + "\n";
  output += reslightning_flag + "\n";
  output += game_flag + "\n";
  output += difficulty_flag + "\n";
  output += dlvl_flag + "\n";
  output += special_flag + "\n";
  output += extra_flag + "\n";
  output += duelclvl_flag + "\n";
  output += duelstrength_flag + "\n";
  output += duelmagic_flag + "\n";
  output += dueldexterity_flag + "\n";
  output += duelarmor_flag + "\n";
  output += dueltohit_flag + "\n";
  output += duelresistance_flag + "\n";
  }
document.combat.results.value = output;
document.combat.results2.value = output;
}

function print_internal () {

var output = "";

with( internal) {
  output += ia_player + "\n";
  output += ia_clvl + "\n";
  output += ia_weapon + "\n";
  output += ia_slvl + "\n";
  output += ia_strength + "\n";
  output += ia_magic + "\n";
  output += ia_dexterity + "\n";
  output += ia_vitality + "\n";
  output += ia_armor + "\n";
  output += ia_tohit + "\n";
  output += ia_damlow + "\n";
  output += ia_damhigh + "\n";
  output += ia_resmagic + "\n";
  output += ia_resfire + "\n";
  output += ia_reslightning + "\n";
  output += ia_game + "\n";
  output += ia_difficulty + "\n";
  output += ia_dlvl + "\n";
  output += ia_special + "\n";
  output += ia_extra + "\n";
  output += ia_duelclvl + "\n";
  output += ia_duelstrength + "\n";
  output += ia_duelmagic + "\n";
  output += ia_dueldexterity + "\n";
  output += ia_duelarmor + "\n";
  output += ia_dueltohit + "\n";
  output += ia_duelresistance + "\n";
  }
document.combat.results.value = output;
document.combat.results2.value = output;
}
