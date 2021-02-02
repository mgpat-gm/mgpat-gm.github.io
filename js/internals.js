// --------------------------------
// These values should be Constants

var maxCharLevel = 50;
var maxDungeonLevel = 17;
var maxHiveLevel = 4;
var maxCryptLevel = 4;
var maxSpellLevel = 20;
var maxResistance = 75;
var maxDamage = 1500;
var autoHit = 5;
var autoMiss = 95;


function create_internalflags( player_flag, clvl_flag, weapon_flag, slvl_flag, strength_flag, magic_flag, dexterity_flag, vitality_flag, armor_flag, tohit_flag, damlow_flag, damhigh_flag, resmagic_flag, resfire_flag, reslightning_flag, game_flag, difficulty_flag, dlvl_flag, special_flag, extra_flag, duelclvl_flag, duelstrength_flag, duelmagic_flag, dueldexterity_flag, duelarmor_flag, dueltohit_flag, duelresistance_flag) {

this.player_flag = player_flag;
this.clvl_flag = clvl_flag;
this.weapon_flag = weapon_flag;
this.slvl_flag = slvl_flag;
this.strength_flag = strength_flag;
this.magic_flag = magic_flag;
this.dexterity_flag = dexterity_flag;
this.vitality_flag = vitality_flag;
this.armor_flag = armor_flag;
this.tohit_flag = tohit_flag;
this.damlow_flag = damlow_flag;
this.damhigh_flag = damhigh_flag;
this.resmagic_flag = resmagic_flag;
this.resfire_flag = resfire_flag;
this.reslightning_flag = reslightning_flag;

this.game_flag = game_flag;
this.difficulty_flag = difficulty_flag;
this.dlvl_flag = dlvl_flag;
this.special_flag = special_flag;
this.extra_flag = extra_flag;
this.duelclvl_flag = duelclvl_flag;
this.duelstrength_flag = duelstrength_flag;
this.duelmagic_flag = duelmagic_flag;
this.dueldexterity_flag = dueldexterity_flag;
this.duelarmor_flag = duelarmor_flag;
this.dueltohit_flag = dueltohit_flag;
this.duelresistance_flag = duelresistance_flag;
}

var internalflags = new create_internalflags( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);


function create_internal( ia_player, ia_clvl, ia_weapon, ia_slvl, ia_strength, ia_magic, ia_dexterity, ia_vitality, ia_armor, ia_tohit, ia_damlow, ia_damhigh, ia_resmagic, ia_resfire, ia_reslightning, ia_game, ia_difficulty, ia_dlvl, ia_special, ia_extra, ia_duelclvl, ia_duelstrength, ia_duelmagic, ia_dueldexterity, ia_duelarmor, ia_dueltohit, ia_duelresistance) {

this.ia_player = ia_player;
this.ia_clvl = ia_clvl;
this.ia_weapon = ia_weapon;
this.ia_slvl = ia_slvl;
this.ia_strength = ia_strength;
this.ia_magic = ia_magic;
this.ia_dexterity = ia_dexterity;
this.ia_vitality = ia_vitality;
this.ia_armor = ia_armor;
this.ia_tohit = ia_tohit;
this.ia_damlow = ia_damlow;
this.ia_damhigh = ia_damhigh;
this.ia_resmagic = ia_resmagic;
this.ia_resfire = ia_resfire;
this.ia_reslightning = ia_reslightning;

this.ia_game = ia_game;
this.ia_difficulty = ia_difficulty;
this.ia_dlvl = ia_dlvl;
this.ia_special = ia_special;
this.ia_extra = ia_extra;
this.ia_duelclvl = ia_duelclvl;
this.ia_duelstrength = ia_duelstrength;
this.ia_duelmagic = ia_duelmagic;
this.ia_dueldexterity = ia_dueldexterity;
this.ia_duelarmor = ia_duelarmor;
this.ia_dueltohit = ia_dueltohit;
this.ia_duelresistance = ia_duelresistance;
}

var internal = new create_internal( "Warrior", 1, "Bare", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "MP Diablo", "Normal", "1", "Plain Monsters", "Zombie", 1, 0, 0, 0, 0, 0, 0);



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
