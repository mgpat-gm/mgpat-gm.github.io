// --------------------------------
// Monster Attributes

// m_type == Monster Name
// m_class == Monster Class
// m_dlvllow == first occurance
// m_dlvlhigh == last occurance
// m_mlvl == Monster Level
// m_hitpointslow == minimum monster hp
// m_hitpointshigh == maximum monster hp
// m_armor == Monster Armor
// m_tohit == Monster To-Hit%
// m_damagelow == Low End of Monster Damage
// m_damagehigh == High End of Monster Damage
// m_resm1 == Resistance to Magic on Normal and Nightmare
// m_resf1 == Resistance to Fire on Normal and Nightmare
// m_resl1 == Resistance to Lightning on Normal and Nightmare
// m_resm2 == Resistance to Magic on Hell
// m_resf2 == Resistance to Fire on Hell
// m_resl2 == Resistance to Lightning on Hell
// m_experience == Monster Experience Value

function monster_attributes(m_type, m_class, m_dlvllow, m_dlvlhigh, m_mlvl, m_hitpointslow, m_hitpointshigh, m_armor, m_tohit, m_damagelow, m_damagehigh, m_resm1, m_resf1, m_resl1, m_resm2, m_resf2, m_resl2, m_experience) {

this.m_type = m_type;
this.m_class = m_class;
this.m_dlvllow = m_dlvllow;
this.m_dlvlhigh = m_dlvlhigh;
this.m_mlvl = m_mlvl;
this.m_hitpointslow = m_hitpointslow;
this.m_hitpointshigh = m_hitpointshigh;
this.m_armor = m_armor;
this.m_tohit = m_tohit;
this.m_damagelow = m_damagelow;
this.m_damagehigh = m_damagehigh;
this.m_resm1 = m_resm1;
this.m_resf1 = m_resf1;
this.m_resl1 = m_resl1;
this.m_resm2 = m_resm2;
this.m_resf2 = m_resf2;
this.m_resl2 = m_resl2;
this.m_experience = m_experience;
}

var monsterArray = new Array(

new monster_attributes("Zombie", "Zombie", 1, 2, 1, 4, 7, 5, 10, 2, 5, "I", "-", "-", "I", "-", "-", 54), 
new monster_attributes("Ghoul", "Zombie", 2, 3, 2, 7, 11, 10, 10, 3, 10, "I", "-", "-", "I", "-", "-", 58),
new monster_attributes("Rotting Carcass", "Zombie", 2, 4, 4, 15, 25, 15, 25, 5, 15, "I", "-", "-", "I", "R", "-", 136),
new monster_attributes("Black Death", "Zombie", 3, 5, 6, 25, 40, 20, 30, 6, 22, "I", "-", "-", "I", "-", "R", 240),

new monster_attributes("Fallen One (spear)", "FallenSpear", 1, 3, 1, 1, 4, 0, 15, 1, 3, "-", "-", "-", "-", "-", "-", 46),
new monster_attributes("Carver (spear)", "FallenSpear", 2, 3, 3, 4, 8, 5, 20, 2, 5, "-", "-", "-", "-", "-", "-", 80),
new monster_attributes("Devil Kin (spear)", "FallenSpear", 2, 4, 5, 12, 24, 10, 25, 3, 7, "-", "-", "-", "-", "R", "-", 155),
new monster_attributes("Dark One (spear)", "FallenSpear", 3, 5, 7, 20, 36, 15, 30, 4, 8, "-", "-", "-", "-", "-", "R", 255),

new monster_attributes("Fallen One (sword)", "FallenSword", 1, 3, 1, 2, 5, 10, 15, 1, 4, "-", "-", "-", "-", "-", "-", 52),
new monster_attributes("Carver (sword)", "FallenSword", 2, 3, 3, 5, 9, 15, 20, 2, 7, "-", "-", "-", "-", "-", "-", 90),
new monster_attributes("Devil Kin (sword)", "FallenSword", 2, 4, 5, 16, 24, 20, 25, 4, 10, "-", "-", "-", "-", "R", "-", 180),
new monster_attributes("Dark One (sword)", "FallenSword", 3, 5, 7, 24, 36, 25, 30, 4, 12, "-", "-", "-", "-", "-", "R", 280),

new monster_attributes("Skeleton", "Skeleton", 1, 2, 1, 2, 4, 0, 20, 1, 4, "I", "-", "-", "I", "-", "-", 64),
new monster_attributes("Corpse Axe", "Skeleton", 2, 3, 2, 4, 7, 0, 25, 3, 5, "I", "-", "-", "I", "-", "-", 68),
new monster_attributes("Burning Dead", "Skeleton", 2, 4, 4, 8, 12, 5, 30, 3, 7, "I", "R", "-", "I", "I", "-", 154),
new monster_attributes("Horror", "Skeleton", 3, 5, 6, 12, 20, 15, 35, 4, 9, "I", "-", "R", "I", "-", "R", 264),

new monster_attributes("Skeleton Archer", "SkeletonArcher", 2, 3, 3, 2, 4, 0, 15, 1, 2, "I", "-", "-", "I", "-", "-", 110),
new monster_attributes("Corpse Bow", "SkeletonArcher", 2, 4, 5, 8, 16, 0, 25, 1, 4, "I", "-", "-", "I", "-", "-", 210),
new monster_attributes("Burning Dead Archer", "SkeletonArcher", 3, 5, 7, 10, 24, 5, 30, 1, 6, "I", "R", "-", "I", "I", "-", 364),
new monster_attributes("Horror Archer", "SkeletonArcher", 4, 6, 9, 15, 45, 15, 35, 2, 9, "I", "-", "R", "I", "-", "R", 594),

new monster_attributes("Skeleton Captain", "SkeletonCaptain", 1, 3, 2, 3, 6, 10, 20, 2, 7, "I", "-", "-", "I", "-", "-", 90),
new monster_attributes("Corpse Captain", "SkeletonCaptain", 2, 4, 4, 12, 20, 5, 30, 3, 9, "I", "-", "-", "I", "-", "-", 200),
new monster_attributes("Burning Dead Captain", "SkeletonCaptain", 3, 5, 6, 16, 30, 15, 35, 4, 10, "I", "R", "-", "I", "I", "-", 393),
new monster_attributes("Horror Captain", "SkeletonCaptain", 4, 6, 8, 35, 50, 30, 40, 5, 14, "I", "-", "R", "I", "-", "R", 604),

new monster_attributes("Scavenger", "Scavenger", 1, 3, 2, 3, 6, 10, 20, 1, 5, "-", "-", "-", "-", "R", "-", 80),
new monster_attributes("Plague Eater", "Scavenger", 2, 4, 4, 12, 24, 20, 30, 1, 8, "-", "-", "-", "-", "-", "R", 188),
new monster_attributes("Shadow Beast", "Scavenger", 3, 5, 6, 24, 36, 25, 35, 3, 12, "-", "-", "-", "-", "R", "-", 375),
new monster_attributes("Bone Gasher", "Scavenger", 4, 6, 8, 28, 40, 30, 35, 5, 15, "R", "-", "-", "-", "-", "R", 552),

new monster_attributes("Fiend", "WingedFiend", 2, 3, 3, 3, 6, 0, 35, 1, 6, "-", "-", "-", "-", "-", "-", 102),
new monster_attributes("Blink", "WingedFiend", 3, 5, 7, 12, 28, 15, 45, 1, 8, "-", "-", "-", "-", "-", "-", 340),
new monster_attributes("Gloom", "WingedFiend", 4, 6, 9, 28, 36, 35, 70, 4, 12, "R", "-", "-", "R", "-", "-", 509),
new monster_attributes("Familiar", "WingedFiend", 6, 8, 13, 20, 35, 35, 50, 4, 16, "R", "-", "I", "R", "-", "I", 448),

new monster_attributes("Hidden", "Hidden", 2, 5, 5, 8, 24, 25, 35, 3, 6, "-", "-", "-", "-", "-", "-", 278),
new monster_attributes("Stalker", "Hidden", 5, 7, 9, 30, 45, 30, 40, 8, 16, "-", "-", "-", "-", "-", "-", 630),
new monster_attributes("Unseen", "Hidden", 6, 8, 11, 35, 50, 30, 45, 12, 20, "R", "-", "-", "I", "-", "-", 935),
new monster_attributes("Illusion Weaver", "Hidden", 8, 10, 13, 40, 60, 30, 60, 16, 24, "R", "R", "-", "I", "R", "-", 1500),

new monster_attributes("Flesh Clan", "GoatMan", 4, 6, 8, 30, 45, 40, 50, 4, 10, "-", "-", "-", "-", "-", "-", 460),
new monster_attributes("Stone Clan", "GoatMan", 5, 7, 10, 40, 55, 40, 60, 4, 12, "R", "-", "-", "I", "-", "-", 685),
new monster_attributes("Fire Clan", "GoatMan", 6, 8, 12, 50, 65, 45, 70, 8, 16, "-", "R", "-", "-", "I", "-", 906),
new monster_attributes("Night Clan", "GoatMan", 7, 9, 14, 55, 70, 50, 80, 10, 20, "R", "-", "-", "I", "-", "-", 1190),

new monster_attributes("Flesh Clan Archer", "GoatManArcher", 4, 6, 8, 20, 35, 35, 35, 1, 7, "-", "-", "-", "-", "-", "-", 448),
new monster_attributes("Stone Clan Archer", "GoatManArcher", 5, 7, 10, 30, 40, 35, 40, 2, 9, "R", "-", "-", "I", "-", "-", 645),
new monster_attributes("Fire Clan Archer", "GoatManArcher", 6, 8, 12, 40, 50, 35, 45, 3, 11, "-", "R", "-", "-", "I", "-", 882),
new monster_attributes("Night Clan Archer", "GoatManArcher", 7, 9, 14, 50, 65, 40, 50, 4, 13, "R", "-", "-", "I", "-", "-", 1092),

new monster_attributes("Overlord", "Overlord", 5, 7, 10, 60, 80, 55, 55, 6, 12, "-", "-", "-", "-", "R", "-", 635),
new monster_attributes("Mud Man", "Overlord", 7, 9, 14, 100, 125, 60, 60, 8, 16, "-", "-", "-", "-", "-", "I", 1165),
new monster_attributes("Toad Demon", "Overlord", 8, 10, 16, 135, 160, 65, 70, 8, 16, "I", "-", "-", "I", "-", "R", 1380),
new monster_attributes("Flayed One", "Overlord", 10, 12, 20, 160, 200, 70, 85, 10, 20, "R", "I", "-", "I", "I", "-", 2058),

new monster_attributes("Winged-Demon", "Gargoyle", 5, 7, 9, 45, 60, 45, 50, 10, 16, "I", "R", "-", "I", "I", "-", 662),
new monster_attributes("Gargoyle", "Gargoyle", 7, 9, 13, 60, 90, 45, 65, 10, 16, "I", "-", "R", "I", "-", "I", 1205),
new monster_attributes("Blood Claw", "Gargoyle", 9, 11, 19, 75, 125, 50, 80, 14, 22, "I", "I", "-", "I", "I", "R", 1873),
new monster_attributes("Death Wing", "Gargoyle", 10, 12, 23, 90, 150, 60, 95, 16, 28, "I", "-", "I", "I", "R", "I", 2278),

new monster_attributes("Magma Demon", "MagmaDemon", 8, 9, 13, 50, 70, 45, 45, 2, 10, "I", "R", "-", "I", "I", "-", 1076),
new monster_attributes("Blood Stone", "MagmaDemon", 8, 10, 14, 55, 75, 45, 50, 2, 12, "I", "I", "-", "I", "I", "-", 1309),
new monster_attributes("Hell Stone", "MagmaDemon", 9, 11, 16, 60, 80, 50, 60, 2, 20, "I", "I", "-", "I", "I", "-", 1680),
new monster_attributes("Lava Lord", "MagmaDemon", 9, 11, 18, 70, 85, 60, 75, 4, 24, "I", "I", "-", "I", "I", "-", 2124),

new monster_attributes("Horned Demon", "HornedDemon", 7, 9, 13, 40, 80, 40, 60, 2, 16, "-", "-", "-", "-", "R", "-", 1172),
new monster_attributes("Mud Runner", "HornedDemon", 8, 10, 15, 50, 90, 45, 70, 6, 18, "-", "-", "-", "-", "R", "-", 1404),
new monster_attributes("Frost Charger", "HornedDemon", 9, 11, 17, 60, 100, 50, 80, 8, 20, "I", "-", "R", "I", "-", "R", 1720),
new monster_attributes("Obsidian Lord", "HornedDemon", 10, 12, 19, 70, 110, 55, 90, 10, 22, "I", "-", "R", "I", "I", "I", 1809),

new monster_attributes("Acid Beast", "SpittingTerror", 6, 8, 11, 40, 66, 30, 40, 4, 12, "-", "-", "-", "I", "-", "-", 846),
new monster_attributes("Poison Spitter", "SpittingTerror", 8, 10, 15, 60, 85, 30, 45, 4, 16, "-", "-", "-", "I", "-", "-", 1248),
new monster_attributes("Pit Beast", "SpittingTerror", 8, 12, 21, 80, 110, 35, 55, 8, 18, "R", "-", "-", "I", "-", "R", 2060),
new monster_attributes("Lava Maw", "SpittingTerror", 12, 14, 25, 100, 150, 35, 65, 10, 20, "r", "I", "-", "I", "I", "-", 2940),

new monster_attributes("Red Storm", "LightningDemon", 9, 11, 18, 55, 110, 30, 80, 8, 18, "I", "-", "R", "I", "-", "I", 2160),
new monster_attributes("Storm Rider", "LightningDemon", 10, 12, 20, 60, 120, 30, 80, 8, 18, "R", "-", "I", "I", "-", "I", 2391),
new monster_attributes("Storm Lord", "LightningDemon", 11, 13, 22, 75, 135, 35, 85, 12, 24, "R", "-", "I", "I", "-", "I", 2775),
new monster_attributes("Maelstrom", "LightningDemon", 12, 14, 24, 90, 150, 40, 90, 12, 28, "R", "-", "I", "I", "-", "I", 3177),

new monster_attributes("Slayer", "Balrog", 10, 12, 20, 120, 140, 60, 100, 12, 20, "R", "I", "-", "R", "I", "-", 2300),
new monster_attributes("Guardian", "Balrog", 11, 13, 22, 140, 160, 65, 110, 14, 22, "R", "I", "-", "R", "I", "-", 2714),
new monster_attributes("Vortex Lord", "Balrog", 12, 14, 24, 160, 180, 70, 120, 18, 24, "R", "I", "-", "R", "I", "R", 3252),
new monster_attributes("Balrog", "Balrog", 13, 15, 26, 180, 200, 75, 130, 22, 30, "R", "I", "-", "R", "I", "R", 3643),

new monster_attributes("Cave Viper", "Viper", 11, 13, 21, 100, 150, 60, 90, 8, 20, "I", "-", "-", "I", "-", "-", 2725),
new monster_attributes("Fire Drake", "Viper", 12, 14, 23, 120, 170, 65, 105, 12, 24, "I", "R", "-", "I", "I", "-", 3139),
new monster_attributes("Gold Viper", "Viper", 13, 14, 25, 140, 180, 70, 120, 15, 26, "I", "-", "R", "I", "-", "R", 3484),
new monster_attributes("Azure Drake", "Viper", 15, 15, 27, 160, 200, 75, 130, 18, 30, "-", "R", "R", "I", "R", "I", 3791),

new monster_attributes("Succubus", "Succubus", 12, 14, 24, 120, 150, 60, 100, 1, 20, "R", "-", "-", "I", "R", "-", 3696),
new monster_attributes("Snow Witch", "Succubus", 13, 15, 26, 135, 175, 65, 110, 1, 24, "-", "-", "R", "I", "-", "R", 4084),
new monster_attributes("Hell Spawn", "Succubus", 14, 15, 28, 150, 200, 75, 115, 1, 30, "R", "-", "I", "I", "I", "R", 4480),
new monster_attributes("Soul Burner", "Succubus", 15, 15, 30, 140, 225, 85, 120, 1, 35, "R", "I", "R", "I", "I", "I", 4644),

new monster_attributes("Black Knight", "Knight", 12, 14, 24, 150, 150, 75, 110, 15, 20, "R", "-", "R", "R", "-", "I", 3360),
new monster_attributes("Doom Guard", "Knight", 13, 15, 26, 165, 165, 75, 130, 18, 25, "R", "R", "-", "R", "I", "-", 3650),
new monster_attributes("Steel Lord", "Knight", 14, 15, 28, 180, 180, 80, 120, 20, 30, "R", "I", "R", "I", "I", "R", 4252),
new monster_attributes("Blood Knight", "Knight", 13, 16, 30, 200, 200, 85, 130, 25, 35, "I", "R", "I", "I", "R", "I", 5130),

new monster_attributes("Counselor", "Mage", 13, 14, 25, 70, 70, 0, 90, 8, 20, "R", "R", "R", "R", "R", "R", 3876),
new monster_attributes("Magistrate", "Mage", 14, 15, 27, 85, 85, 0, 100, 10, 24, "R", "I", "R", "I", "I", "R", 4478),
new monster_attributes("Cabalist", "Mage", 15, 15, 29, 120, 120, 0, 110, 14, 30, "R", "R", "I", "I", "R", "I", 4929),
new monster_attributes("Advocate", "Mage", 16, 16, 30, 145, 145, 0, 120, 15, 25, "I", "R", "I", "I", "I", "I", 4968)

);
