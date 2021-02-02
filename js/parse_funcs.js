function parsePlayer() {

var index = document.combat.player.selectedIndex;

internal.ia_player = playerArray[index].p_type;
internalflags.player_flag = true;

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

checkForm( "player");
}

function parseClvl() {

var index = document.combat.clvl.selectedIndex;

internal.ia_clvl = document.combat.clvl[index].value;
internalflags.clvl_flag = true;
}

function parseWeapon() {

var index = document.combat.weapon.selectedIndex;

internal.ia_weapon = weaponArray[index].w_type;
internalflags.weapon_flag = true;

checkForm( "weapon");
}

function parseSlvl() {

var index = document.combat.slvl.selectedIndex;

internal.ia_slvl = document.combat.slvl[index].value;
internalflags.slvl_flag = true;
}

function parseStrength() {

// Check for default - exit
if( document.combat.str_fld.value == "")
  return;

var strVal = parseInt( document.combat.str_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.player.selectedIndex;
var maxStr = 0;


// Bad entry - exit
if( isNaN(strVal)) {
  if( internalflags.strength_flag)
    alert("Not a Valid Strength Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Strength Number!\nPlease retry.");
  document.combat.str_fld.value = internal.ia_strength;
  return;
  }

// Negative entry - set to zero
if( strVal < 0)
  strVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxStr = playerArray[player_index].p_hfstrength;
else
  maxStr = playerArray[player_index].p_strength;

// Check for excessive entry
if( strVal > maxStr)
  strVal = maxStr;

document.combat.str_fld.value = strVal;
internal.ia_strength = strVal;
internalflags.strength_flag = true;
}

function parseMagic() {

// Check for default - exit
if( document.combat.mag_fld.value == "")
  return;

var magVal = parseInt( document.combat.mag_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.player.selectedIndex;
var maxMag = 0;

// Bad entry - exit
if( isNaN(magVal)) {
  if( internalflags.magic_flag)
    alert("Not a Valid Magic Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Magic Number!\nPlease retry.");
  document.combat.mag_fld.value = internal.ia_magic;
  return;
  }

// Negative entry - set to zero
if( magVal < 0)
  magVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxMag = playerArray[player_index].p_hfmagic;
else
  maxMag = playerArray[player_index].p_magic;

// Check for excessive entry
if( magVal > maxMag)
  magVal = maxMag;

document.combat.mag_fld.value = magVal;
internal.ia_magic = magVal;
internalflags.magic_flag = true;
}

function parseDexterity() {

// Check for default - exit
if( document.combat.dex_fld.value == "")
  return;

var dexVal = parseInt( document.combat.dex_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.player.selectedIndex;
var maxDex = 0;

// Bad entry - exit
if( isNaN(dexVal)) {
  if( internalflags.dexterity_flag)
    alert("Not a Valid Dexterity Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Dexterity Number!\nPlease retry.");
  document.combat.dex_fld.value = internal.ia_dexterity;
  return;
  }

// Negative entry - set to zero
if( dexVal < 0)
  dexVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxDex = playerArray[player_index].p_hfdexterity;
else
  maxDex = playerArray[player_index].p_dexterity;

// Check for excessive entry
if( dexVal > maxDex)
  dexVal = maxDex;

document.combat.dex_fld.value = dexVal;
internal.ia_dexterity = dexVal;
internalflags.dexterity_flag = true;
}

function parseVitality() {

// Check for default - exit
if( document.combat.vit_fld.value == "")
  return;

var vitVal = parseInt( document.combat.vit_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.player.selectedIndex;
var maxVit = 0;

// Bad entry - exit
if( isNaN(vitVal)) {
  if( internalflags.vitality_flag)
    alert("Not a Valid Vitality Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Vitality Number!\nPlease retry.");
  document.combat.vit_fld.value = internal.ia_vitality;
  return;
  }

// Negative entry - set to zero
if( vitVal < 0)
  vitVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxVit = playerArray[player_index].p_hfvitality;
else
  maxVit = playerArray[player_index].p_vitality;

// Check for excessive entry
if( vitVal > maxVit)
  vitVal = maxVit;

document.combat.vit_fld.value = vitVal;
internal.ia_vitality = vitVal;
internalflags.vitality_flag = true;
}

function parseArmor() {

// Check for default - exit
if( document.combat.armor_fld.value == "")
  return;

var armorVal = parseInt( document.combat.armor_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.player.selectedIndex;
var maxArmor = 0;

// Bad entry - exit
if( isNaN(armorVal)) {
  if( internalflags.armor_flag)
    alert("Not a Valid Armor Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Armor Number!\nPlease retry.");
  document.combat.armor_fld.value = internal.ia_armor;
  return;
  }

// Negative entry - set to zero
if( armorVal < 0)
  armorVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxArmor = playerArray[player_index].p_hfarmor;
else
  maxArmor = playerArray[player_index].p_armor;

// Check for excessive entry
if( armorVal > maxArmor)
  armorVal = maxArmor;

document.combat.armor_fld.value = armorVal;
internal.ia_armor = armorVal;
internalflags.armor_flag = true;
}

function parseTohit() {

// Check for default - exit
if( document.combat.tohit_fld.value == "")
  return;

var tohitVal = parseInt( document.combat.tohit_fld.value);
var maxTohit = playerArray[document.combat.player.selectedIndex].p_tohit;

// Bad entry - exit
if( isNaN(tohitVal)) {
  if( internalflags.tohit_flag)
    alert("Not a Valid To-Hit% Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid To-Hit% Number!\nPlease retry.");
  document.combat.tohit_fld.value = internal.ia_tohit;
  return;
  }

// Negative entry - set to zero
if( tohitVal < 0)
  tohitVal = 0;

// Check for excessive entry
if( tohitVal > maxTohit)
  tohitVal = maxTohit;

document.combat.tohit_fld.value = tohitVal;
internal.ia_tohit = tohitVal;
internalflags.tohit_flag = true;
}

function parseDamageLow() {

// Check for default - exit
if( document.combat.damlow_fld.value == "")
  return;

var damVal = parseInt( document.combat.damlow_fld.value);

// Bad entry - exit
if( isNaN(damVal)) {
  if( internalflags.damlow_flag)
    alert("Not a Valid Low Damage Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Low Damage Number!\nPlease retry.");
  document.combat.damlow_fld.value = internal.ia_damlow;
  return;
  }

// Negative entry - set to zero
if( damVal < 0)
  damVal = 0;

// Check for excessive entry
if( damVal > maxDamage)
  damVal = maxDamage;

// Low damage cannot exceed high damage
if( internalflags.damhigh_flag)
  if( damVal > internal.ia_damhigh)
    damVal = internal.ia_damhigh;

document.combat.damlow_fld.value = damVal;
internal.ia_damlow = damVal;
internalflags.damlow_flag = true;
}

function parseDamageHigh() {

// Check for default - exit
if( document.combat.damhigh_fld.value == "")
  return;

var damVal = parseInt( document.combat.damhigh_fld.value);

// Bad entry - exit
if( isNaN(damVal)) {
  if( internalflags.damhigh_flag)
    alert("Not a Valid High Damage Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid High Damage Number!\nPlease retry.");
  document.combat.damhigh_fld.value = internal.ia_damhigh;
  return;
  }

// Negative entry - set to zero
if( damVal < 0)
  damVal = 0;

// Check for excessive entry
if( damVal > maxDamage)
  damVal = maxDamage;

// High damage cannot be less than low damage
if( internalflags.damlow_flag)
  if( damVal < internal.ia_damlow)
    damVal = internal.ia_damlow;

document.combat.damhigh_fld.value = damVal;
internal.ia_damhigh = damVal;
internalflags.damhigh_flag = true;
}

function parseResMagic() {

// Check for default - exit
if( document.combat.resmagic_fld.value == "")
  return;

var resVal = parseInt( document.combat.resmagic_fld.value);

// Bad entry - exit
if( isNaN(resVal)) {
  if( internalflags.resmagic_flag)
    alert("Not a Valid Magic Resistance Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Magic Resistance Number!\nPlease retry.");
  document.combat.resmagic_fld.value = internal.ia_resmagic;
  return;
  }

// Negative entry - set to zero
if( resVal < 0)
  resVal = 0;

// Check for excessive entry
if( resVal > maxResistance)
  resVal = maxResistance;

document.combat.resmagic_fld.value = resVal;
internal.ia_resmagic = resVal;
internalflags.resmagic_flag = true;
}

function parseResFire() {

// Check for default - exit
if( document.combat.resfire_fld.value == "")
  return;

var resVal = parseInt( document.combat.resfire_fld.value);

// Bad entry - exit
if( isNaN(resVal)) {
  if( internalflags.resfire_flag)
    alert("Not a Valid Fire Resistance Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Fire Resistance Number!\nPlease retry.");
  document.combat.resfire_fld.value = internal.ia_resfire;
  return;
  }

// Negative entry - set to zero
if( resVal < 0)
  resVal = 0;

// Check for excessive entry
if( resVal > maxResistance)
  resVal = maxResistance;

document.combat.resfire_fld.value = resVal;
internal.ia_resfire = resVal;
internalflags.resfire_flag = true;
}

function parseResLightning() {

// Check for default - exit
if( document.combat.reslightning_fld.value == "")
  return;

var resVal = parseInt( document.combat.reslightning_fld.value);

// Bad entry - exit
if( isNaN(resVal)) {
  if( internalflags.reslightning_flag)
    alert("Not a Valid Lightning Resistance Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Lightning Resistance Number!\nPlease retry.");
  document.combat.reslightning_fld.value = internal.ia_reslightning;
  return;
  }

// Negative entry - set to zero
if( resVal < 0)
  resVal = 0;

// Check for excessive entry
if( resVal > maxResistance)
  resVal = maxResistance;

document.combat.reslightning_fld.value = resVal;
internal.ia_reslightning = resVal;
internalflags.reslightning_flag = true;
}

function parseGame() {

var index = document.combat.game.selectedIndex;
var prevEntry = internal.ia_game;

internal.ia_game = gameArray[index].g_type;
internalflags.game_flag = true;

// Check for deselecting Hellfire -> Diablo
if( (prevEntry == "MP Hellfire") || (prevEntry == "SP Hellfire") )
  if( (internal.ia_game == "MP Diablo") || (internal.ia_game == "SP Diablo") )
    checkForm( "game");
}

function parseDifficulty() {

var index = document.combat.difficulty.selectedIndex;

internal.ia_difficulty = difficultyArray[index].d_type;
internalflags.difficulty_flag = true;
}

function parseDlvl() {

var index = document.combat.dlvl.selectedIndex;

internal.ia_dlvl = dlvlArray[index].dlvl_type;
internalflags.dlvl_flag = true;

checkForm( "dlvl");
}

function helpGame() {
alert("This will provide a rundown on the various game options.\nDoes nothing right now.\n");
}

function parseSpecial() {

var index = document.combat.special.selectedIndex;

// if the right array is already set in the "extra" field,
// then just reset the action flags.

// if the "extra" array needs to be rebuild,
// then delete the existing array first,
// then rebuild the required array in the appropriate switch

// Query the "special" value
switch( specialArray[index].s_type) {

// Rebuild the "extra" dropbox with monsters
  case "Plain Monsters" :
alert("Default option.\nAlready implemented.\nCarry on.\n");
    index = document.combat.extra.selectedIndex;
    break;

// Extra => boss monsters
// Rebuilt this with the "bossmonsterArray[]"
  case "Boss Monsters" :
alert("Selectable option.\nNot yet implemented.\nCarry on.\n");
    break;

// Extras => special monsters
// Rebuild this with the "specialmonsterArray[]"
  case "Special Monsters" :
alert("Selectable option.\nCould be a while before this is implemented.\nCarry on.\n");
    break;

// Rebuild this with the "playerArray[]",
// then invoke the other fields
  case "Player vs Player" :
alert("You must be joking if you think this works.\nI have way too much to implement before I can get around to this section.\nCarry on.\n");
    break;

// Query the player's stats 
  case "Golem vs Monster" :
alert("You must be joking if you think this works.\nGonna take a long long time.\nCarry on.\n");
    internalflags.extra_flag = true;
    break;

// Just need dlvl + player stats
  case "Trap Encounters" :
alert("Selectable option.\nCould be a while before this is implemented.\nCarry on.\n");
    break;

// Need monster stats
  case "Item Drops" :
alert("Sorry, but this is wishful thinking.\nIt will be one of the last features to be put into this form.\nCarry on.\n");
    break;

// to be decided later on
  case "Assorted Stats" :
alert("I had an idea once what to put in here.\nIt will come back to me if Jarulf updates his guide again and I see a table with obscure data...\nCarry on.\n");
    break;

  default :
    break;
  }  

internal.ia_special = specialArray[index].s_type;
internalflags.special_flag = true;

checkForm( "special");
}

function parseExtra() {
// This func needs to select from diff. arrays
// depending on the selection from the "Special Array" dropbox
// As for now, I'll just set the flag.

var index = document.combat.extra.selectedIndex;

// Query the "special" value
switch( internal.ia_special) {

  case "Plain Monsters" :
    internal.ia_extra = monsterArray[index].m_type;
    internalflags.extra_flag = true;
    break;

  case "Boss Monsters" :
    index = document.combat.extra.selectedIndex;
//    internal.ia_extra = bossmonsterArray[index].m_type;
    internalflags.extra_flag = true;
    break;

  case "Special Monsters" :
    index = document.combat.extra.selectedIndex;
//    internal.ia_extra = specialmonsterArray[index].m_type;
    internalflags.extra_flag = true;
    break;

  case "Player vs Player" :
    internalflags.extra_flag = true;
    break;

  case "Golem vs Monster" :
    internal.ia_extra = monsterArray[index].m_type;
    internalflags.extra_flag = true;
    break;

  case "Trap Encounters" :
    break;

  case "Item Drops" :
    index = document.combat.extra.selectedIndex;
    internal.ia_extra = monsterArray[index].m_type;
    internalflags.extra_flag = true;
    break;

  case "Assorted Stats" :
    break;

  default :
    break;
  }  

internalflags.extra_flag = true;

checkForm( "extra");
}

function parseDuelClvl() {

var index = document.combat.duelclvl.selectedIndex;

internal.ia_duelclvl = document.combat.duelclvl[index].value;
internalflags.duelcvl_flag = true;
}

function helpSpecial() {
alert("Another specific help box.\n");
}

function parseDuelStrength() {

var strVal = parseInt( document.combat.duelstr_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.extra.selectedIndex;
var maxStr = 0;

// Bad entry - exit
if( isNaN(strVal)) {
  if( internalflags.duelstrength_flag)
    alert("Not a Valid Strength Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Strength Number!\nPlease retry.");
  document.combat.duelstr_fld.value = internal.ia_duelstrength;
  return;
  }

// Negative entry - set to zero
if( strVal < 0)
  strVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxStr = playerArray[player_index].p_hfstrength;
else
  maxStr = playerArray[player_index].p_strength;

// Check for excessive entry
if( strVal > maxStr)
  strVal = maxStr;

document.combat.duelstr_fld.value = strVal;
internal.ia_duelstrength = strVal;
internalflags.duelstrength_flag = true;
}

function parseDuelMagic() {

var magVal = parseInt( document.combat.duelmag_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.extra.selectedIndex;
var maxMag = 0;

// Bad entry - exit
if( isNaN(magVal)) {
  if( internalflags.duelmagic_flag)
    alert("Not a Valid Magic Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Magic Number!\nPlease retry.");
  document.combat.duelmag_fld.value = internal.ia_duelmagic;
  return;
  }

// Negative entry - set to zero
if( magVal < 0)
  magVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxMag = playerArray[player_index].p_hfmagic;
else
  maxMag = playerArray[player_index].p_magic;

// Check for excessive entry
if( magVal > maxMag)
  magVal = maxMag;

document.combat.duelmag_fld.value = magVal;
internal.ia_duelmagic = magVal;
internalflags.duelmagic_flag = true;
}

function parseDuelDexterity() {

var dexVal = parseInt( document.combat.dueldex_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.extra.selectedIndex;
var maxDex = 0;

// Bad entry - exit
if( isNaN(dexVal)) {
  if( internalflags.dueldex_flag)
    alert("Not a Valid Dexterity Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Dexterity Number!\nPlease retry.");
  document.combat.dueldex_fld.value = internal.ia_dueldexterity;
  return;
  }

// Negative entry - set to zero
if( dexVal < 0)
  dexVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxDex = playerArray[player_index].p_hfdexterity;
else
  maxDex = playerArray[player_index].p_dexterity;

// Check for excessive entry
if( dexVal > maxDex)
  dexVal = maxDex;

document.combat.dueldex_fld.value = dexVal;
internal.ia_dueldexterity = dexVal;
internalflags.dueldexterity_flag = true;
}

function parseDuelArmor() {

var armorVal = parseInt( document.combat.duelarmor_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.extra.selectedIndex;
var maxArmor = 0;

// Bad entry - exit
if( isNaN(armorVal)) {
  if( internalflags.duelarmor_flag)
    alert("Not a Valid Armor Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Armor Number!\nPlease retry.");
  document.combat.duelarmor_fld.value = internal.ia_duelarmor;
  return;
  }

// Negative entry - set to zero
if( armorVal < 0)
  armorVal = 0;

// Check for HF max
if( (internal.ia_game == "MP Hellfire") || (internal.ia_game == "SP Hellfire"))
  maxArmor = playerArray[player_index].p_hfarmor;
else
  maxDex = playerArray[player_index].p_armor;

// Check for excessive entry
if( armorVal > maxArmor)
  armorrVal = maxArmor;

document.combat.duelarmor_fld.value = armorVal;
internal.ia_duelarmor = armorVal;
internalflags.duelarmor_flag = true;
}

function parseDuelTohit() {

var tohitVal = parseInt( document.combat.dueltohit_fld.value);
var game_index = document.combat.game.selectedIndex;
var player_index = document.combat.player.selectedIndex;
var maxTohit = 0;

// Bad entry - exit
if( isNaN(tohitVal)) {
  if( internalflags.dueltohit_flag)
    alert("Not a Valid To-Hit% Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid To-Hit% Number!\nPlease retry.");
  document.combat.dueltohit_fld.value = internal.ia_dueltohit;
  return;
  }

// Negative entry - set to zero
if( tohitVal < 0)
  tohitVal = 0;

// Check for excessive entry
if( tohitVal > maxTohit)
  tohitVal = maxTohit;

document.combat.dueltohit_fld.value = strVal;
internal.ia_dueltohit = tohitVal;
internalflags.dueltohit_flag = true;
}

function parseResDuel() {

var resVal = parseInt( document.combat.duelres_fld.value);

// Bad entry - exit
if( isNaN(resVal)) {
  if( internalflags.duelresistance_flag)
    alert("Not a Valid Resistance Number!\nUsing previous number instead.\n");
  else
    alert("Not a Valid Resistance Number!\nPlease retry.");
  document.combat.duelres_fld.value = internal.ia_duelresistance;
  return;
  }

// Negative entry - set to zero
if( resVal < 0)
  resVal = 0;

// Check for excessive entry
if( resVal > maxResistance)
  resVal = maxResistance;

document.combat.duelres_fld.value = resVal;
internal.ia_duelresistance = resVal;
internalflags.duelresistance_flag = true;
}
