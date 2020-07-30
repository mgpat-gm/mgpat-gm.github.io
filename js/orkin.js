
     /* For modifiable select boxes:
      * This code is Copyright (c) 1996 Nick Heinle and Athenia Associates, 
      * all rights reserved. In order to receive the right to license this 
      * code for use on your site the original code must be copied from the
      * Web site webreference.com/javascript/. License is granted to user to 
      * reuse this code on their own Web site if and only if this entire copyright
      * notice is included. Code written by Nick Heinle of webreference.com.
      */

     /* This Diablo Price Calculator was created by James Pollard.
      * Code for the modification of HTML Select objects was brought over
      * from the site named above and credited appropriately.  Data on the
      * price and availability were obtained from the work of IronBeard and Bostic.
      * Copying, distributing, or other uses of this code can only be done with the
      * permission of James Pollard and the other contributors.  The author can be
      * contacted at jnpollard@earthlink.net for further details.
      */

     prefixopt = new Array;                 prefixvalueopt = new Array;                          prefixcostopt = new Array;
     prefixopt[ 0] = "None";                prefixvalueopt[ 0] = "none";                         prefixcostopt[ 0] = "0/0/0";
     prefixopt[ 1] = "Flaming";             prefixvalueopt[ 1] = "1-10";                         prefixcostopt[ 1] = "5000/5000/2";
     prefixopt[ 2] = "Lightning(melee w.)"; prefixvalueopt[ 2] = "2-20";                         prefixcostopt[ 2] = "10000/10000/2";
     prefixopt[ 3] = "Angel's";             prefixvalueopt[ 3] = "+1 level";                     prefixcostopt[ 3] = "25000/25000/2";
     prefixopt[ 4] = "Arch-Angel's";        prefixvalueopt[ 4] = "+2 levels";                    prefixcostopt[ 4] = "50000/50000/3";
     prefixopt[ 5] = "Plentiful";           prefixvalueopt[ 5] = "x2 charges";                   prefixcostopt[ 5] = "2000/2000/2";
     prefixopt[ 6] = "Bountiful";           prefixvalueopt[ 6] = "x3 charges";                   prefixcostopt[ 6] = "3000/3000/3";
     prefixopt[ 7] = "Hyena's(c)";          prefixvalueopt[ 7] = "-11{ mana}...25";              prefixcostopt[ 7] = "100/1000/-2";
     prefixopt[ 8] = "Frog's(c)";           prefixvalueopt[ 8] = "-1{ mana}...10";               prefixcostopt[ 8] = "0/0/-2";
     prefixopt[ 9] = "Spider's";            prefixvalueopt[ 9] = "+10{ mana}...15";              prefixcostopt[ 9] = "500/1000/2";
     prefixopt[10] = "Raven's";             prefixvalueopt[10] = "+16{ mana}...20";              prefixcostopt[10] = "1100/2000/3";
     prefixopt[11] = "Snake's";             prefixvalueopt[11] = "+21{ mana}...30";              prefixcostopt[11] = "2100/4000/5";
     prefixopt[12] = "Serpent's";           prefixvalueopt[12] = "+30{ mana}...40";              prefixcostopt[12] = "4100/6000/7";
     prefixopt[13] = "Drake's";             prefixvalueopt[13] = "+41{ mana}...50";              prefixcostopt[13] = "6100/10000/9";
     prefixopt[14] = "Dragon's";            prefixvalueopt[14] = "+51{ mana}...60";              prefixcostopt[14] = "10100/15000/11";
     prefixopt[15] = "Wyrm's";              prefixvalueopt[15] = "+61{ mana}...80";              prefixcostopt[15] = "15100/19000/12";
     prefixopt[16] = "Hydra's";             prefixvalueopt[16] = "+81{ mana}...100";             prefixcostopt[16] = "19100/30000/13";
     prefixopt[17] = "Red";                 prefixvalueopt[17] = "+10{% resist fire}...20";      prefixcostopt[17] = "500/1500/2";
     prefixopt[18] = "White";               prefixvalueopt[18] = "+10{% resist lightning}...20"; prefixcostopt[18] = "500/1500/2";
     prefixopt[19] = "Blue";                prefixvalueopt[19] = "+10{% resist magic}...20";     prefixcostopt[19] = "500/1500/2";
     prefixopt[20] = "Crimson";             prefixvalueopt[20] = "+21{% resist fire}...40";      prefixcostopt[20] = "2100/4000/2";
     prefixopt[21] = "Pearl";               prefixvalueopt[21] = "+21{% resist lightning}...30"; prefixcostopt[21] = "2100/3000/2";
     prefixopt[22] = "Azure";               prefixvalueopt[22] = "+21{% resist magic}...30";     prefixcostopt[22] = "2100/3000/2";
     prefixopt[23] = "Ivory";               prefixvalueopt[23] = "+31{% resist lightning}...40"; prefixcostopt[23] = "3100/4000/2";
     prefixopt[24] = "Lapis";               prefixvalueopt[24] = "+31{% resist magic}...40";     prefixcostopt[24] = "3100/4000/2";
     prefixopt[25] = "Garnet";              prefixvalueopt[25] = "+41{% resist fire}...50";      prefixcostopt[25] = "8200/12000/3";
     prefixopt[26] = "Crystal";             prefixvalueopt[26] = "+41{% resist lightning}...50"; prefixcostopt[26] = "8200/12000/3";
     prefixopt[27] = "Cobalt";              prefixvalueopt[27] = "+41{% resist magic}...50";     prefixcostopt[27] = "8200/12000/3";
     prefixopt[28] = "Ruby";                prefixvalueopt[28] = "+51{% resist fire}...60";      prefixcostopt[28] = "17100/20000/5";
     prefixopt[29] = "Diamond";             prefixvalueopt[29] = "+51{% resist lightning}...60"; prefixcostopt[29] = "17100/20000/5";
     prefixopt[30] = "Sapphire";            prefixvalueopt[30] = "+51{% resist magic}...60";     prefixcostopt[30] = "17100/20000/5";
     prefixopt[31] = "Topaz";               prefixvalueopt[31] = "+10{% resist all}...15";       prefixcostopt[31] = "2000/5000/3";
     prefixopt[32] = "Amber";               prefixvalueopt[32] = "+16{% resist all}...20";       prefixcostopt[32] = "7400/10000/3";
     prefixopt[33] = "Jade";                prefixvalueopt[33] = "+21{% resist all}...30";       prefixcostopt[33] = "11000/15000/3";
     prefixopt[34] = "Obsidian";            prefixvalueopt[34] = "+31{% resist all}...40";       prefixcostopt[34] = "24000/40000/4";
     prefixopt[35] = "Emerald";             prefixvalueopt[35] = "+41{% resist all}...50";       prefixcostopt[35] = "61000/75000/7";
     prefixopt[36] = "Vulnerable(c)";       prefixvalueopt[36] = "-51{% AC}...100";              prefixcostopt[36] = "0/0/-3";
     prefixopt[37] = "Rusted(c)";           prefixvalueopt[37] = "-25{% AC}...50";               prefixcostopt[37] = "0/0/-2";
     prefixopt[38] = "Fine";                prefixvalueopt[38] = "+20{% AC}...30";               prefixcostopt[38] = "20/100/2";
     prefixopt[39] = "Strong";              prefixvalueopt[39] = "+31{% AC}...40";               prefixcostopt[39] = "120/200/3";
     prefixopt[40] = "Grand";               prefixvalueopt[40] = "+41{% AC}...55";               prefixcostopt[40] = "220/300/5";
     prefixopt[41] = "Valiant";             prefixvalueopt[41] = "+56{% AC}...70";               prefixcostopt[41] = "320/400/7";
     prefixopt[42] = "Glorious";            prefixvalueopt[42] = "+71{% AC}...90";               prefixcostopt[42] = "420/600/9";
     prefixopt[43] = "Blessed";             prefixvalueopt[43] = "+91{% AC}...110";              prefixcostopt[43] = "620/800/11";
     prefixopt[44] = "Saintly";             prefixvalueopt[44] = "+111{% AC}...130";             prefixcostopt[44] = "820/1200/13";
     prefixopt[45] = "Awesome";             prefixvalueopt[45] = "+131{% AC}...150";             prefixcostopt[45] = "1220/2000/15";
     prefixopt[46] = "Holy";                prefixvalueopt[46] = "+151{% AC}...170";             prefixcostopt[46] = "5200/6000/17";
     prefixopt[47] = "Godly";               prefixvalueopt[47] = "+171{% AC}...200";             prefixcostopt[47] = "6200/7000/20";
     prefixopt[48] = "Tin(c)";              prefixvalueopt[48] = "-6{% to hit}...10";            prefixcostopt[48] = "0/0/-3";
     prefixopt[49] = "Brass(c)";            prefixvalueopt[49] = "-1{% to hit}...5";             prefixcostopt[49] = "0/0/-2";
     prefixopt[50] = "Bronze";              prefixvalueopt[50] = "+1{% to hit}...5";             prefixcostopt[50] = "100/500/2";
     prefixopt[51] = "Iron";                prefixvalueopt[51] = "+6{% to hit}...10";            prefixcostopt[51] = "600/1000/3";
     prefixopt[52] = "Steel";               prefixvalueopt[52] = "+11{% to hit}...15";           prefixcostopt[52] = "1100/1500/5";
     prefixopt[53] = "Silver";              prefixvalueopt[53] = "+16{% to hit}...20";           prefixcostopt[53] = "1600/2000/7";
     prefixopt[54] = "Gold";                prefixvalueopt[54] = "+21{% to hit}...30";           prefixcostopt[54] = "2100/3000/9";
     prefixopt[55] = "Platinum";            prefixvalueopt[55] = "+31{% to hit}...40";           prefixcostopt[55] = "3100/4000/11";
     prefixopt[56] = "Mithril";             prefixvalueopt[56] = "+41{% to hit}...60";           prefixcostopt[56] = "4100/6000/13";
     prefixopt[57] = "Meteoric";            prefixvalueopt[57] = "+61{% to hit}...80";           prefixcostopt[57] = "6100/10000/15";
     prefixopt[58] = "Weird";               prefixvalueopt[58] = "+81{% to hit}...100";          prefixcostopt[58] = "10100/14000/17";
     prefixopt[59] = "Strange";             prefixvalueopt[59] = "+101{% to hit}...150";         prefixcostopt[59] = "14100/20000/20";
     prefixopt[60] = "Useless(c)";          prefixvalueopt[60] = "-100% damage";                 prefixcostopt[60] = "0/0/-8";
     prefixopt[61] = "Bent(c)";             prefixvalueopt[61] = "-50{% damage}...75";           prefixcostopt[61] = "0/0/-4";
     prefixopt[62] = "Weak(c)";             prefixvalueopt[62] = "-25{% damage}...45";           prefixcostopt[62] = "0/0/-3";
     prefixopt[63] = "Jagged";              prefixvalueopt[63] = "+20{% damage}...35";           prefixcostopt[63] = "250/450/3";
     prefixopt[64] = "Deadly";              prefixvalueopt[64] = "+36{% damage}...50";           prefixcostopt[64] = "500/700/4";
     prefixopt[65] = "Heavy";               prefixvalueopt[65] = "+51{% damage}...65";           prefixcostopt[65] = "750/950/5";
     prefixopt[66] = "Vicious";             prefixvalueopt[66] = "+66{% damage}...80";           prefixcostopt[66] = "1000/1450/8";
     prefixopt[67] = "Brutal";              prefixvalueopt[67] = "+81{% damage}...95";           prefixcostopt[67] = "1500/1950/10";
     prefixopt[68] = "Massive";             prefixvalueopt[68] = "+96{% damage}...110";          prefixcostopt[68] = "2000/2450/13";
     prefixopt[69] = "Savage";              prefixvalueopt[69] = "+111{% damage}...125";         prefixcostopt[69] = "2500/3000/15";
     prefixopt[70] = "Ruthless";            prefixvalueopt[70] = "+126{% damage}...150";         prefixcostopt[70] = "10100/15000/17";
     prefixopt[71] = "Merciless";           prefixvalueopt[71] = "+151{% damage}...175";         prefixcostopt[71] = "15100/20000/20";
     prefixopt[72] = "Clumsy(c)";           prefixvalueopt[72] = "-50{% damage}...75";           prefixcostopt[72] = "0/0/-7";
     prefixopt[73] = "Dull(c)";             prefixvalueopt[73] = "-25{% damage}...45";           prefixcostopt[73] = "0/0/-5";
     prefixopt[74] = "Sharp";               prefixvalueopt[74] = "+20{% damage}...35";           prefixcostopt[74] = "350/950/5";
     prefixopt[75] = "Fine";                prefixvalueopt[75] = "+36{% damage}...50";           prefixcostopt[75] = "1100/1700/7";
     prefixopt[76] = "Warrior's";           prefixvalueopt[76] = "+51{% damage}...65";           prefixcostopt[76] = "1850/2450/13";
     prefixopt[77] = "Soldier's";           prefixvalueopt[77] = "+66{% damage}...80";           prefixcostopt[77] = "2600/3950/17";
     prefixopt[78] = "Lord's";              prefixvalueopt[78] = "+81{% damage}...95";           prefixcostopt[78] = "4100/5950/21";
     prefixopt[79] = "Knight's";            prefixvalueopt[79] = "+96{% damage}...110";          prefixcostopt[79] = "6100/8450/26";
     prefixopt[80] = "Master's";            prefixvalueopt[80] = "+111{% damage}...125";         prefixcostopt[80] = "8600/13000/30";
     prefixopt[81] = "Champion's";          prefixvalueopt[81] = "+126{% damage}...150";         prefixcostopt[81] = "15200/24000/33";
     prefixopt[82] = "King's";              prefixvalueopt[82] = "+151{% damage}...175";         prefixcostopt[82] = "24100/35000/38";
     var prefix_trueLength = prefixopt.length;    var prefixvalue_trueLength = 50;            var prefixcost_trueLength = 50;
     var prefix_maxLength = prefixopt.length;    var prefixvalue_maxLength = 50;                var prefixcost_maxLength = 0;


     itemopt = new Array;               itemvalueopt = new Array;
     itemopt[ 0] = "Select this first"; itemvalueopt[ 0] = "0";
     itemopt[ 1] = "Dagger";            itemvalueopt[ 1] = "60";
     itemopt[ 2] = "Short Sword";       itemvalueopt[ 2] = "120";
     itemopt[ 3] = "Sabre";             itemvalueopt[ 3] = "170";
     itemopt[ 4] = "Scimitar";          itemvalueopt[ 4] = "200";
     itemopt[ 5] = "Falchion";          itemvalueopt[ 5] = "250";
     itemopt[ 6] = "Blade";             itemvalueopt[ 6] = "280";
     itemopt[ 7] = "Long Sword";        itemvalueopt[ 7] = "350";
     itemopt[ 8] = "Claymore";          itemvalueopt[ 8] = "450";
     itemopt[ 9] = "Broad Sword";       itemvalueopt[ 9] = "750";
     itemopt[10] = "Bastard Sword";     itemvalueopt[10] = "1000";
     itemopt[11] = "Two-handed Sword";  itemvalueopt[11] = "1800";
     itemopt[12] = "Great Sword";       itemvalueopt[12] = "3000";
     itemopt[13] = "Club";              itemvalueopt[13] = "20";
     itemopt[14] = "Mace";              itemvalueopt[14] = "200";
     itemopt[15] = "Spiked Club";       itemvalueopt[15] = "225";
     itemopt[16] = "Morning Star";      itemvalueopt[16] = "300";
     itemopt[17] = "Flail";             itemvalueopt[17] = "500";
     itemopt[18] = "War Hammer";        itemvalueopt[18] = "600";
     itemopt[19] = "Maul";              itemvalueopt[19] = "900";
     itemopt[20] = "Small Axe";         itemvalueopt[20] = "150";
     itemopt[21] = "Axe";               itemvalueopt[21] = "450";
     itemopt[22] = "Large Axe";         itemvalueopt[22] = "750";
     itemopt[23] = "Broad Axe";         itemvalueopt[23] = "1000";
     itemopt[24] = "Battle Axe";        itemvalueopt[24] = "1500";
     itemopt[25] = "Great Axe";         itemvalueopt[25] = "2500";
     itemopt[26] = "Short Bow";         itemvalueopt[26] = "100";
     itemopt[27] = "Long Bow";          itemvalueopt[27] = "250";
     itemopt[28] = "Hunter's Bow";      itemvalueopt[28] = "350";
     itemopt[29] = "Composite Bow";     itemvalueopt[29] = "600";
     itemopt[30] = "Short Battle Bow";  itemvalueopt[30] = "750";
     itemopt[31] = "Long Battle Bow";   itemvalueopt[31] = "1000";
     itemopt[32] = "Short War Bow";     itemvalueopt[32] = "1500";
     itemopt[33] = "Long War Bow";      itemvalueopt[33] = "2000";
     itemopt[34] = "Short Staff";       itemvalueopt[34] = "30";
     itemopt[35] = "Long Staff";        itemvalueopt[35] = "100";
     itemopt[36] = "Composite Staff";   itemvalueopt[36] = "500";
     itemopt[37] = "Quarter Staff";     itemvalueopt[37] = "1000";
     itemopt[38] = "War Staff";         itemvalueopt[38] = "1500";
     itemopt[39] = "Buckler";           itemvalueopt[39] = "30";
     itemopt[40] = "Small Shield";      itemvalueopt[40] = "90";
     itemopt[41] = "Large Shield";      itemvalueopt[41] = "200";
     itemopt[42] = "Kite Shield";       itemvalueopt[42] = "400";
     itemopt[43] = "Tower Shield";      itemvalueopt[43] = "850";
     itemopt[44] = "Gothic Shield";     itemvalueopt[44] = "2300";
     itemopt[45] = "Rags";              itemvalueopt[45] = "5";
     itemopt[46] = "Cape";              itemvalueopt[46] = "10";
     itemopt[47] = "Cloak";             itemvalueopt[47] = "40";
     itemopt[48] = "Robe";              itemvalueopt[48] = "75";
     itemopt[49] = "Quilted";           itemvalueopt[49] = "200";
     itemopt[50] = "Leather";           itemvalueopt[50] = "300";
     itemopt[51] = "Hard Leather";      itemvalueopt[51] = "450";
     itemopt[52] = "Studded Leather";   itemvalueopt[52] = "700";
     itemopt[53] = "Ring Mail";         itemvalueopt[53] = "900";
     itemopt[54] = "Chain Mail";        itemvalueopt[54] = "1250";
     itemopt[55] = "Scale Mail";        itemvalueopt[55] = "2300";
     itemopt[56] = "Splint Mail";       itemvalueopt[56] = "3250";
     itemopt[57] = "Breast Plate";      itemvalueopt[57] = "2800";
     itemopt[58] = "Plate Mail";        itemvalueopt[58] = "4600";
     itemopt[59] = "Field Plate";       itemvalueopt[59] = "5800";
     itemopt[60] = "Full Plate";        itemvalueopt[60] = "6500";
     itemopt[61] = "Gothic Plate";      itemvalueopt[61] = "8000";
     itemopt[62] = "Cap";               itemvalueopt[62] = "15";
     itemopt[63] = "Skull Cap";         itemvalueopt[63] = "25";
     itemopt[64] = "Helm";              itemvalueopt[64] = "40";
     itemopt[65] = "Full Helm";         itemvalueopt[65] = "90";
     itemopt[66] = "Crown";             itemvalueopt[66] = "200";
     itemopt[67] = "Great Helm";        itemvalueopt[67] = "400";
     itemopt[68] = "Ring";              itemvalueopt[68] = "1000";
     itemopt[69] = "Amulet";            itemvalueopt[69] = "1200";
     var item_trueLength = itemopt.length;    itemvalue_trueLength = itemopt.length;
     var item_maxLength = itemopt.length;    itemvalue_maxLength = itemopt.length;

     suffixopt = new Array;             suffixvalueopt = new Array;                      suffixcostopt = new Array;
     suffixopt[ 0] = "None";            suffixvalueopt[ 0] = "none";                     suffixcostopt[ 0] = "0/0/0";
     suffixopt[ 1] = "Readiness";       suffixvalueopt[ 1] = "fast attack";              suffixcostopt[ 1] = "2000/2000/2";
     suffixopt[ 2] = "Swiftness";       suffixvalueopt[ 2] = "fast attack";              suffixcostopt[ 2] = "4000/4000/4";
     suffixopt[ 3] = "Speed";           suffixvalueopt[ 3] = "faster attack";            suffixcostopt[ 3] = "8000/8000/8";
     suffixopt[ 4] = "Haste";           suffixvalueopt[ 4] = "fastest attack";           suffixcostopt[ 4] = "16000/16000/16";
     suffixopt[ 5] = "Balance";         suffixvalueopt[ 5] = "fast recovery";            suffixcostopt[ 5] = "2000/2000/2";
     suffixopt[ 6] = "Stability";       suffixvalueopt[ 6] = "faster recovery";          suffixcostopt[ 6] = "4000/4000/4";
     suffixopt[ 7] = "Harmony";         suffixvalueopt[ 7] = "fastest recovery";         suffixcostopt[ 7] = "8000/8000/8";
     suffixopt[ 8] = "Many";            suffixvalueopt[ 8] = "x2 durability";            suffixcostopt[ 8] = "750/750/2";
     suffixopt[ 9] = "Plenty";          suffixvalueopt[ 9] = "x3 durability";            suffixcostopt[ 9] = "1500/1500/3";
     suffixopt[10] = "Thorns";          suffixvalueopt[10] = "1-3 damage";               suffixcostopt[10] = "500/500/2";
     suffixopt[11] = "Corruption(c)";   suffixvalueopt[11] = "-100% mana";               suffixcostopt[11] = "-1000/-1000/2";
     suffixopt[12] = "Dark(c)";         suffixvalueopt[12] = "-40% light radius";        suffixcostopt[12] = "0/0/-3";
     suffixopt[13] = "Night(c)";        suffixvalueopt[13] = "-20% light radius";        suffixcostopt[13] = "0/0/-2";
     suffixopt[14] = "Light";           suffixvalueopt[14] = "+20% light radius";        suffixcostopt[14] = "750/750/2";
     suffixopt[15] = "Radiance";        suffixvalueopt[15] = "+40% light radius";        suffixcostopt[15] = "1500/1500/3";
     suffixopt[16] = "Leech";           suffixvalueopt[16] = "3% hit points";            suffixcostopt[16] = "7500/7500/3";
     suffixopt[17] = "Bat";             suffixvalueopt[17] = "3% mana";                  suffixcostopt[17] = "7500/7500/3";
     suffixopt[18] = "Blood";           suffixvalueopt[18] = "5% hit points";            suffixcostopt[18] = "15000/15000/3";
     suffixopt[19] = "Vampires";        suffixvalueopt[19] = "5% mana";                  suffixcostopt[19] = "15000/15000/3";
     suffixopt[20] = "Piercing";        suffixvalueopt[20] = "1-8 from AC";              suffixcostopt[20] = "1000/1000/3";
     suffixopt[21] = "Puncturing";      suffixvalueopt[21] = "4-12 from AC";             suffixcostopt[21] = "2000/2000/6";
     suffixopt[22] = "Bashing";         suffixvalueopt[22] = "8-24 from AC";             suffixcostopt[22] = "4000/4000/12";
     suffixopt[23] = "Shock";           suffixvalueopt[23] = "+1-6 damage";              suffixcostopt[23] = "6000/6000/2";
     suffixopt[24] = "Lightning";       suffixvalueopt[24] = "+1-10 damage";             suffixcostopt[24] = "8000/8000/4";
     suffixopt[25] = "Thunder";         suffixvalueopt[25] = "+1-20 damage";             suffixcostopt[25] = "12000/12000/6";
     suffixopt[26] = "Flame";           suffixvalueopt[26] = "+1-3 damage";              suffixcostopt[26] = "2000/2000/2";
     suffixopt[27] = "Fire";            suffixvalueopt[27] = "+1-6 damage";              suffixcostopt[27] = "4000/4000/4";
     suffixopt[28] = "Burning";         suffixvalueopt[28] = "+1-16 damage";             suffixcostopt[28] = "6000/6000/6";
     suffixopt[29] = "Bear";            suffixvalueopt[29] = "knockback";                suffixcostopt[29] = "750/750/2";
     suffixopt[30] = "Thieves";         suffixvalueopt[30] = "-50% trap damage";         suffixcostopt[30] = "1500/1500/2";
     suffixopt[31] = "Blocking";        suffixvalueopt[31] = "fast block";               suffixcostopt[31] = "4000/4000/4";
     suffixopt[32] = "Fragility(c)";    suffixvalueopt[32] = "durability = 1";           suffixcostopt[32] = "0/0/-4";
     suffixopt[33] = "Brittleness(c)";  suffixvalueopt[33] = "-26{% durability}...75";    suffixcostopt[33] = "0/0/-2";
     suffixopt[34] = "Sturdiness";      suffixvalueopt[34] = "+26{% durability}...50";   suffixcostopt[34] = "100/100/2";
     suffixopt[35] = "Craftmanship";    suffixvalueopt[35] = "+52{% durability}...100";  suffixcostopt[35] = "200/200/2";
     suffixopt[36] = "Structure";       suffixvalueopt[36] = "+101{% durability}...200"; suffixcostopt[36] = "300/300/2";
     suffixopt[37] = "Ages";            suffixvalueopt[37] = "indestructible";           suffixcostopt[37] = "600/600/5";
     suffixopt[38] = "Pain(c)";         suffixvalueopt[38] = "+2 damage";                suffixcostopt[38] = "0/0/-4";
     suffixopt[39] = "Tears(c)";        suffixvalueopt[39] = "+1 damage";                suffixcostopt[39] = "0/0/-2";
     suffixopt[40] = "Health";          suffixvalueopt[40] = "-1 damage";                suffixcostopt[40] = "200/200/2";
     suffixopt[41] = "Protection";      suffixvalueopt[41] = "-2 damage";                suffixcostopt[41] = "400/400/4";
     suffixopt[42] = "Absorption";      suffixvalueopt[42] = "-3 damage";                suffixcostopt[42] = "1001/1001/10";
     suffixopt[43] = "Deflection";      suffixvalueopt[43] = "-4 damage";                suffixcostopt[43] = "2500/2500/15";
     suffixopt[44] = "Osmosis";         suffixvalueopt[44] = "-5 damage/-6 damage";      suffixcostopt[44] = "7500/10000/20";
     suffixopt[45] = "Frailty(c)";      suffixvalueopt[45] = "-6{ strength}...10";       suffixcostopt[45] = "0/0/-3";
     suffixopt[46] = "Weakness(c)";     suffixvalueopt[46] = "-1{ strength}...5";        suffixcostopt[46] = "0/0/-2";
     suffixopt[47] = "Strength";        suffixvalueopt[47] = "+1{ strength}...5";        suffixcostopt[47] = "200/1000/2";
     suffixopt[48] = "Might";           suffixvalueopt[48] = "+6{ strength}...10";       suffixcostopt[48] = "1200/2000/3";
     suffixopt[49] = "Power";           suffixvalueopt[49] = "+11{ strength}...15";      suffixcostopt[49] = "2200/3000/4";
     suffixopt[50] = "Giants";          suffixvalueopt[50] = "+16{ strength}...20";      suffixcostopt[50] = "3200/5000/7";
     suffixopt[51] = "Titans";          suffixvalueopt[51] = "+21{ strength}...30";      suffixcostopt[51] = "5200/10000/10";
     suffixopt[52] = "Paralysis(c)";    suffixvalueopt[52] = "-6{ dexterity}...10";      suffixcostopt[52] = "0/0/-3";
     suffixopt[53] = "Atrophy(c)";      suffixvalueopt[53] = "-1{ dexterity}...5";       suffixcostopt[53] = "0/0/-2";
     suffixopt[54] = "Dexterity";       suffixvalueopt[54] = "+1{ dexterity}...5";       suffixcostopt[54] = "200/1000/2";
     suffixopt[55] = "Skill";           suffixvalueopt[55] = "+6{ dexterity}...10";      suffixcostopt[55] = "1200/2000/3";
     suffixopt[56] = "Accuracy";        suffixvalueopt[56] = "+11{ dexterity}...15";     suffixcostopt[56] = "2200/3000/4";
     suffixopt[57] = "Precision";       suffixvalueopt[57] = "+16{ dexterity}...20";     suffixcostopt[57] = "3200/5000/7";
     suffixopt[58] = "Perfection";      suffixvalueopt[58] = "+21{ dexterity}...30";     suffixcostopt[58] = "5200/10000/10";
     suffixopt[59] = "Fool(c)";         suffixvalueopt[59] = "-6{ magic}...10";          suffixcostopt[59] = "0/0/-3";
     suffixopt[60] = "Dyslexia(c)";     suffixvalueopt[60] = "-1{ magic}...5";           suffixcostopt[60] = "0/0/-2";
     suffixopt[61] = "Magic";           suffixvalueopt[61] = "+1{ magic}...5";           suffixcostopt[61] = "200/1000/2";
     suffixopt[62] = "Mind";            suffixvalueopt[62] = "+6{ magic}...10";          suffixcostopt[62] = "1200/2000/3";
     suffixopt[63] = "Brilliance";      suffixvalueopt[63] = "+11{ magic}...15";         suffixcostopt[63] = "2200/3000/4";
     suffixopt[64] = "Sorcery";         suffixvalueopt[64] = "+16{ magic}...20";         suffixcostopt[64] = "3200/5000/7";
     suffixopt[65] = "Wizardry";        suffixvalueopt[65] = "+21{ magic}...30";         suffixcostopt[65] = "5200/10000/10";
     suffixopt[66] = "Illness(c)";      suffixvalueopt[66] = "-6{ vitality}...10";       suffixcostopt[66] = "0/0/-3";
     suffixopt[67] = "Disease(c)";      suffixvalueopt[67] = "-1{ vitality}...5";        suffixcostopt[67] = "0/0/-2";
     suffixopt[68] = "Vitality";        suffixvalueopt[68] = "+1{ vitality}...5";        suffixcostopt[68] = "200/1000/2";
     suffixopt[69] = "Zest";            suffixvalueopt[69] = "+6{ vitality}...10";       suffixcostopt[69] = "1200/2000/3";
     suffixopt[70] = "Vim";             suffixvalueopt[70] = "+11{ vitality}...15";      suffixcostopt[70] = "2200/3000/4";
     suffixopt[71] = "Vigor";           suffixvalueopt[71] = "+16{ vitality}...20";      suffixcostopt[71] = "3200/5000/7";
     suffixopt[72] = "Life";            suffixvalueopt[72] = "+21{ vitality}...30";      suffixcostopt[72] = "5200/10000/10";
     suffixopt[73] = "Trouble(c)";      suffixvalueopt[73] = "-6{ to all}...10";         suffixcostopt[73] = "0/0/-10";
     suffixopt[74] = "Pit(c)";          suffixvalueopt[74] = "-1{ to all}...5";          suffixcostopt[74] = "0/0/-5";
     suffixopt[75] = "Sky";             suffixvalueopt[75] = "+1{ to all}...3";          suffixcostopt[75] = "800/4000/5";
     suffixopt[76] = "Moon";            suffixvalueopt[76] = "+4{ to all}...7";          suffixcostopt[76] = "4800/8000/10";
     suffixopt[77] = "Stars";           suffixvalueopt[77] = "+8{ to all}...11";         suffixcostopt[77] = "8800/12000/15";
     suffixopt[78] = "Heavens";         suffixvalueopt[78] = "+12{ to all}...15";        suffixcostopt[78] = "12800/20000/20";
     suffixopt[79] = "Zodiac";          suffixvalueopt[79] = "+16{ to all}...20";        suffixcostopt[79] = "20800/40000/30";
     suffixopt[80] = "Vulture(c)";      suffixvalueopt[80] = "-11{ hit points}...25";    suffixcostopt[80] = "0/0/-4";
     suffixopt[81] = "Jackal(c)";       suffixvalueopt[81] = "-1{ hit points}...10";     suffixcostopt[81] = "0/0/-2";
     suffixopt[82] = "Fox";             suffixvalueopt[82] = "+10{ hit points}...15";    suffixcostopt[82] = "100/1000/2";
     suffixopt[83] = "Jaguar";          suffixvalueopt[83] = "+16{ hit points}...20";    suffixcostopt[83] = "1100/2000/3";
     suffixopt[84] = "Eagle";           suffixvalueopt[84] = "+21{ hit points}...30";    suffixcostopt[84] = "2100/4000/5";
     suffixopt[85] = "Wolf";            suffixvalueopt[85] = "+31{ hit points}...40";    suffixcostopt[85] = "4100/6000/7";
     suffixopt[86] = "Tiger";           suffixvalueopt[86] = "+41{ hit points}...50";    suffixcostopt[86] = "6100/10000/9";
     suffixopt[87] = "Lion";            suffixvalueopt[87] = "+51{ hit points}...60";    suffixcostopt[87] = "10100/15000/11";
     suffixopt[88] = "Mammoth";         suffixvalueopt[88] = "+61{ hit points}...80";    suffixcostopt[88] = "15100/19000/12";
     suffixopt[89] = "Whale";           suffixvalueopt[89] = "+81{ hit points}...100";   suffixcostopt[89] = "19100/30000/13";
     suffixopt[90] = "Quality";         suffixvalueopt[90] = "+1 damage/+2 damage";      suffixcostopt[90] = "100/200/2";
     suffixopt[91] = "Maiming";         suffixvalueopt[91] = "+3{ damage}...5";          suffixcostopt[91] = "1300/1500/3";
     suffixopt[92] = "Slaying";         suffixvalueopt[92] = "+6{ damage}...8";          suffixcostopt[92] = "2600/3000/5";
     suffixopt[93] = "Gore";            suffixvalueopt[93] = "+9{ damage}...12";         suffixcostopt[93] = "4100/5000/8";
     suffixopt[94] = "Carnage";         suffixvalueopt[94] = "+13{ damage}...16";        suffixcostopt[94] = "5100/10000/10";
     suffixopt[95] = "Slaughter";       suffixvalueopt[95] = "+17{ damage}...20";        suffixcostopt[95] = "10100/15000/13";
     suffixopt[96] = "Apocalypse";      suffixvalueopt[96]="8{ charges}...12";           suffixcostopt[96] = "400";
     suffixopt[97] = "Blood Star";      suffixvalueopt[97]="20{ charges}...60";          suffixcostopt[97] = "360";
     suffixopt[98] = "Bone Spirit";     suffixvalueopt[98]="20{ charges}...60";          suffixcostopt[98] = "160";
     suffixopt[99] = "Chain Lightning"; suffixvalueopt[99]="20{ charges}...60";          suffixcostopt[99] = "150";
     suffixopt[100]= "Charged Bolt";    suffixvalueopt[100]="40{ charges}...80";         suffixcostopt[100] = "10";
     suffixopt[101]= "Elemental";       suffixvalueopt[101]="20{ charges}...60";         suffixcostopt[101] = "140";
     suffixopt[102]= "Fireball";        suffixvalueopt[102]="40{ charges}...80";         suffixcostopt[102] = "60";
     suffixopt[103]= "Firebolt";        suffixvalueopt[103]="40{ charges}...80";         suffixcostopt[103] = "10";
     suffixopt[104]= "Fire Wall";       suffixvalueopt[104]="8{ charges}...16";          suffixcostopt[104] = "80";
     suffixopt[105]= "Flame Wave";      suffixvalueopt[105]="20{ charges}...40";         suffixcostopt[105] = "130";
     suffixopt[106]= "Flash";           suffixvalueopt[106]="20{ charges}...40";         suffixcostopt[106] = "100";
     suffixopt[107]= "Golem";           suffixvalueopt[107]="16{ charges}...32";         suffixcostopt[107] = "220";
     suffixopt[108]= "Guardian";        suffixvalueopt[108]="16{ charges}...32";         suffixcostopt[108] = "190";
     suffixopt[109]= "Healing";         suffixvalueopt[109]="20{ charges}...40";         suffixcostopt[109] = "10";
     suffixopt[110]= "Heal Other";      suffixvalueopt[110]="20{ charges}...40";         suffixcostopt[110] = "10";
     suffixopt[111]= "Holy Bolt";       suffixvalueopt[111]="40{ charges}...80";         suffixcostopt[111] = "10";
     suffixopt[112]= "Inferno";         suffixvalueopt[112]="20{ charges}...40";         suffixcostopt[112] = "20";
     suffixopt[113]= "Lightning";       suffixvalueopt[113]="20{ charges}...60";         suffixcostopt[113] = "30";
     suffixopt[114]= "Mana Shield";     suffixvalueopt[114]="4{ charges}...10";          suffixcostopt[114] = "240";
     suffixopt[115]= "Nova";            suffixvalueopt[115]="16{ charges}...32";         suffixcostopt[115] = "260";
     suffixopt[116]= "Phasing";         suffixvalueopt[116]="40{ charges}...80";         suffixcostopt[116] = "40";
     suffixopt[117]= "Ressurect";       suffixvalueopt[117]="4{ charges}...10";          suffixcostopt[117] = "50";
     suffixopt[118]= "Stone Curse";     suffixvalueopt[118]="8{ charges}...16";          suffixcostopt[118] = "160";
     suffixopt[119]= "Telekenesis";     suffixvalueopt[119]="20{ charges}...40";         suffixcostopt[119] = "40";
     suffixopt[120]= "Teleport";        suffixvalueopt[120]="16{ charges}...32";         suffixcostopt[120] = "250";
     suffixopt[121]= "Town Portal";     suffixvalueopt[121]="8{ charges}...16";          suffixcostopt[121] = "40";
     var suffix_trueLength = suffixopt.length;    var suffixvalue_trueLength = 100;    suffixcost_trueLength = 20;
     var suffix_maxLength = suffixopt.length;    var suffixvalue_maxLength = 100;    suffixcost_maxLength = 0;

/////////////////////////////
//
/////////////////////////////
     function changeprefix()
     {
//find prefix in master list
       index = document.SelectMenu.Prefi.selectedIndex;
       prefix = document.SelectMenu.Prefi.options[index].text;
       for (i = 0; i < prefix_maxLength; i++) {
         if (prefix == prefixopt[i]) {
           index = i;
         }
       }

//clear existing entries
       for (i = prefixvalue_trueLength; i > 0; i--) 
       { document.SelectMenu.PrefiValue.options[i] = null; }

       start = prefixvalueopt[index];
       if (start.indexOf("...") == -1) {
         if (start.indexOf("/") == -1) {
//single item for value
           document.SelectMenu.PrefiValue.options[0] = new Option(start);
           prefixvalue_trueLength = 1;
         }
         else {
//multiple items separated like this item1/item2/item3
           values = new Array;
           i = start.indexOf("/",0);
           n = 0;
           while (i > -1) {
             document.SelectMenu.PrefiValue.options[n] = new Option(start.substring(0,i));
             start = start.substring(i+1,start.length);
             n++;
             i++;
             i = start.indexOf("/",i);
           }
           document.SelectMenu.PrefiValue.options[n] = new Option(start.substring(0,start.length));
           n++;
           prefixvalue_trueLength = n;
         }
       }
       else {
//range of items separated by "..."
         end = start.substring(start.indexOf("...")+3,start.length);
         start = start.substring(0,start.indexOf("..."));
         sign = start.substring(0,1);
         start = start.substring(1,start.length);
         description = "";
         if (start.indexOf("{") != -1) {
           description = start.substring(start.indexOf("{")+1,start.indexOf("}"));
           start = start.substring(0,start.indexOf("{"));
         }
         startInt = parseInt(start);
         endInt = parseInt(end);
         n = 0;
         for (i = startInt; i <= endInt; i++) {
           document.SelectMenu.PrefiValue.options[n] = new Option(sign+i+description);
           n++;
         }
         prefixvalue_trueLength = n;
       }
       document.SelectMenu.PrefiValue.options[0].selected = true;
       changeprefixvalue();
     }

/////////////////////////////
//
/////////////////////////////
     function changesuffix()
     {
//find suffix in master list
       index = document.SelectMenu.Suffi.selectedIndex;
       suffix = document.SelectMenu.Suffi.options[index].text;
       for (i = 0; i < suffix_maxLength; i++) {
         if (suffix == suffixopt[i]) {
           index = i;
         }
       }

       for (i = suffixvalue_trueLength; i > 0; i--) 
       { document.SelectMenu.SuffiValue.options[i] = null; }

       start = suffixvalueopt[index];
       if (start.indexOf("...") == -1) {
         if (start.indexOf("/") == -1) {
//single item for value
           document.SelectMenu.SuffiValue.options[0] = new Option(start);
           suffixvalue_trueLength = 1;
         }
         else {
//multiple items separated like this item1/item2/item3
           values = new Array;
           i = start.indexOf("/",0);
           n = 0;
           while (i > -1) {
             document.SelectMenu.SuffiValue.options[n] = new Option(start.substring(0,i));
             start = start.substring(i+1,start.length);
             n++;
             i++;
             i = start.indexOf("/",i);
           }
           document.SelectMenu.SuffiValue.options[n] = new Option(start.substring(0,start.length));
           n++;
           suffixvalue_trueLength = n;
         }
       }
       else {
//range of items separated by "..."
         end = start.substring(start.indexOf("...")+3,start.length);
         start = start.substring(0,start.indexOf("..."));
         sign = start.substring(0,1);
         if ((sign == "+") || (sign == "-")) {
           start = start.substring(1,start.length);
         }
         else {
           sign = "";
         }
         description = "";
         if (start.indexOf("{") != -1) {
           description = start.substring(start.indexOf("{")+1,start.indexOf("}"));
           start = start.substring(0,start.indexOf("{"));
         }
         startInt = parseInt(start);
         endInt = parseInt(end);
         n = 0;
         for (i = startInt; i <= endInt; i++) {
           document.SelectMenu.SuffiValue.options[n] = new Option(sign+i+description);
           n++;
         }
         suffixvalue_trueLength = n;
       }
       document.SelectMenu.SuffiValue.options[0].selected = true;
       changesuffixvalue();
     }

/////////////////////////////
//
/////////////////////////////
     function changeprefixvalue()
     {
       index = document.SelectMenu.Prefi.selectedIndex;
       prefix = document.SelectMenu.Prefi.options[index].text;
       for (i = 0; i < prefix_maxLength; i++) {
         if (prefix == prefixopt[i]) {
           prefixindex = i;
         }
       }

       index = document.SelectMenu.Item.selectedIndex;
       itemtype = document.SelectMenu.Item.options[index].text;
       for (i = 0; i < item_maxLength; i++) {
         if (itemtype == itemopt[i]) {
           itemindex = i;
         }
       }

       steps = document.SelectMenu.PrefiValue.selectedIndex;
       cost = prefixcostopt[prefixindex];
       slashloc = cost.indexOf("/");
       base = parseInt(cost.substring(0,slashloc));
       cost = cost.substring(slashloc+1,cost.length);
       slashloc = cost.indexOf("/");
       max  = parseInt(cost.substring(0,slashloc));
       mult = parseFloat(cost.substring(slashloc+1,cost.length));
       mult = mult * 100;
       mult = parseInt(mult);
       mult = parseFloat(mult);
       mult = mult/100;
//document.SelectMenu.PrefiDebug.value = base + " " + max + " " + mult + " ";
       itemval = parseInt(itemvalueopt[itemindex]);

       if (prefixvalue_trueLength == 1) {
         document.SelectMenu.PrefiCost.value = base + mult * itemval;
       }
       else {
         document.SelectMenu.PrefiCost.value = base + (steps/(prefixvalue_trueLength- 1)) * (max - base) + mult * itemval;
       }

       index = document.SelectMenu.Suffi.selectedIndex;
       if (index >= 0) {
//a suffix has been selected
         suffix = document.SelectMenu.Suffi.options[index].text;
         for (i = 0; i < suffix_maxLength; i++) {
           if (suffix == suffixopt[i]) {
             suffixindex = i;
           }
         }
         if (suffixindex > 95) {
//this is a spell staff so the suffix cost changes also
           changesuffixvalue();
         }
         else {
           changeprice();
         }
       }
       else {
         changeprice();
       }
     }

/////////////////////////////
//
/////////////////////////////
     function changesuffixvalue()
     {
       index = document.SelectMenu.Suffi.selectedIndex;
       suffix = document.SelectMenu.Suffi.options[index].text;
       for (i = 0; i < suffix_maxLength; i++) {
         if (suffix == suffixopt[i]) {
           suffixindex = i;
         }
       }

       index = document.SelectMenu.Item.selectedIndex;
       itemtype = document.SelectMenu.Item.options[index].text;
       for (i = 0; i < item_maxLength; i++) {
         if (itemtype == itemopt[i]) {
           itemindex = i;
         }
       }

       steps = document.SelectMenu.SuffiValue.selectedIndex;
       if (suffixindex < 96) {
         cost = suffixcostopt[suffixindex];
         slashloc = cost.indexOf("/");
         base = parseInt(cost.substring(0,slashloc));
         cost = cost.substring(slashloc+1,cost.length);
         slashloc = cost.indexOf("/");
         max  = parseInt(cost.substring(0,slashloc));
         mult = parseFloat(cost.substring(slashloc+1,cost.length));
         mult = mult * 100;
         mult = parseInt(mult);
         mult = parseFloat(mult);
         mult = mult/100;
//document.SelectMenu.SuffiDebug.value = base + " " + max + " " + mult + " ";
         itemval = parseInt(itemvalueopt[itemindex]);

         if (suffixvalue_trueLength == 1) {
           document.SelectMenu.SuffiCost.value = base + mult * itemval;
         }
         else {
           document.SelectMenu.SuffiCost.value = base + (steps/(suffixvalue_trueLength- 1)) * (max - base) + mult * itemval;
         }
       }
       else {
//this is a spell staff
         index = document.SelectMenu.Prefi.selectedIndex;
         prefix = document.SelectMenu.Prefi.options[index].text;
         for (i = 0; i < prefix_maxLength; i++) {
           if (prefix == prefixopt[i]) {
             prefixindex = i;
           }
         }
         cost = prefixcostopt[prefixindex];
         slashloc = cost.indexOf("/");
         base = parseInt(cost.substring(0,slashloc));
         cost = cost.substring(slashloc+1,cost.length);
         slashloc = cost.indexOf("/");
         max  = parseInt(cost.substring(0,slashloc));
         mult = parseFloat(cost.substring(slashloc+1,cost.length));

         if (mult <= 0) {
           mult = 1;
         }
         else {
           mult = mult * 100;
           mult = parseInt(mult);
           mult = parseFloat(mult);
           mult = mult/100;
         }

         charges = document.SelectMenu.SuffiValue.options[document.SelectMenu.SuffiValue.selectedIndex].text;
         charges = parseInt(charges);
         cost = suffixcostopt[suffixindex];
         document.SelectMenu.SuffiCost.value = cost * charges * mult;
//document.SelectMenu.SuffiDebug.value = "co=" + cost + " ch=" + charges + " m=" + mult + " ";
       }

       changeprice();
     }

/////////////////////////////
//
/////////////////////////////
     function changeprice()
     {
       if ((document.SelectMenu.Prefi.selectedIndex != 0) || (document.SelectMenu.Suffi.selectedIndex != 0)) {
         if (document.SelectMenu.Location[0].checked == true) {
//document.SelectMenu.SuffiDebug.value = "Gri";
           document.SelectMenu.TotalCost.value = parseInt(document.SelectMenu.PrefiCost.value) + parseInt(document.SelectMenu.SuffiCost.value) + "";
         }
         else if (document.SelectMenu.Location[1].checked == true) {
//document.SelectMenu.SuffiDebug.value = "Wir";
           document.SelectMenu.TotalCost.value = parseInt(1.5 * (parseInt(document.SelectMenu.PrefiCost.value) + parseInt(document.SelectMenu.SuffiCost.value))) + "";
         }
         else {
//document.SelectMenu.SuffiDebug.value = "Resale";
           document.SelectMenu.TotalCost.value = parseInt(0.25 * (parseInt(document.SelectMenu.PrefiCost.value) + parseInt(document.SelectMenu.SuffiCost.value))) + "";
         }

         if (document.SelectMenu.TotalCost.value < 1) {
           document.SelectMenu.TotalCost.value = 1;
         }
       }
       else {
         document.SelectMenu.TotalCost.value = itemval;
       }
     }

     function change()
     {
//save old prefix and suffix
       index = document.SelectMenu.Prefi.selectedIndex;
       prefix = document.SelectMenu.Prefi.options[index].text;
       index = document.SelectMenu.Suffi.selectedIndex;
       suffix = document.SelectMenu.Suffi.options[index].text;

     menuNum = document.SelectMenu.Item.selectedIndex;
             if (menuNum == null) return;
       
             if (menuNum == 0)
             {
//no item type selected
               for (i = prefix_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               for (i = 0; i < prefix_maxLength; i++)
               { document.SelectMenu.Prefi.options[i] = new Option(prefixopt[i]); }

               for (i = suffix_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               for (i = 0; i < suffix_maxLength; i++)
               { document.SelectMenu.Suffi.options[i] = new Option(suffixopt[i]); }
             }               

             if ((menuNum >= 1) && (menuNum <= 25))
             {
//melee weapon selected
               for (i = prefix_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               for (i = 0; i <= 2; i++)
               { document.SelectMenu.Prefi.options[i] = new Option(prefixopt[i]); }
               for (i = 17; i <= 35; i++)
               { document.SelectMenu.Prefi.options[i-14] = new Option(prefixopt[i]); }
               for (i = 48; i <= 82; i++)
               { document.SelectMenu.Prefi.options[i-26] = new Option(prefixopt[i]); }

               for (i = suffix_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               for (i = 0; i <= 4; i++)
               { document.SelectMenu.Suffi.options[i] = new Option(suffixopt[i]); }
               for (i = 11; i <= 22; i++)
               { document.SelectMenu.Suffi.options[i-6] = new Option(suffixopt[i]); }
               document.SelectMenu.Suffi.options[17] = new Option(suffixopt[29]);
               for (i = 32; i <= 37; i++)
               { document.SelectMenu.Suffi.options[i-14] = new Option(suffixopt[i]); }
               for (i = 45; i <= 57; i++)
               { document.SelectMenu.Suffi.options[i-21] = new Option(suffixopt[i]); }
               for (i = 59; i <= 64; i++)
               { document.SelectMenu.Suffi.options[i-22] = new Option(suffixopt[i]); }
               for (i = 66; i <= 71; i++)
               { document.SelectMenu.Suffi.options[i-23] = new Option(suffixopt[i]); }
               for (i = 73; i <= 78; i++)
               { document.SelectMenu.Suffi.options[i-24] = new Option(suffixopt[i]); }
               for (i = 90; i <= 95; i++)
               { document.SelectMenu.Suffi.options[i-35] = new Option(suffixopt[i]); }
             }

             if ((menuNum >= 26) && (menuNum <= 33))
             {
//bow selected
               for (i = prefix_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               document.SelectMenu.Prefi.options[0] = new Option(prefixopt[0]);
               for (i = 17; i <= 35; i++)
               { document.SelectMenu.Prefi.options[i-16] = new Option(prefixopt[i]); }
               for (i = 48; i <= 76; i++)
               { document.SelectMenu.Prefi.options[i-28] = new Option(prefixopt[i]); }

               for (i = suffix_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               for (i = 0; i <= 2; i++)
               { document.SelectMenu.Suffi.options[i] = new Option(suffixopt[i]); }
               for (i = 8; i <= 9; i++)
               { document.SelectMenu.Suffi.options[i-5] = new Option(suffixopt[i]); }
               for (i = 20; i <= 21; i++)
               { document.SelectMenu.Suffi.options[i-15] = new Option(suffixopt[i]); }
               for (i = 23; i <= 29; i++)
               { document.SelectMenu.Suffi.options[i-16] = new Option(suffixopt[i]); }
               for (i = 45; i <= 50; i++)
               { document.SelectMenu.Suffi.options[i-31] = new Option(suffixopt[i]); }
               for (i = 52; i <= 64; i++)
               { document.SelectMenu.Suffi.options[i-32] = new Option(suffixopt[i]); }
               for (i = 66; i <= 71; i++)
               { document.SelectMenu.Suffi.options[i-33] = new Option(suffixopt[i]); }
               for (i = 73; i <= 78; i++)
               { document.SelectMenu.Suffi.options[i-34] = new Option(suffixopt[i]); }
               for (i = 90; i <= 91; i++)
               { document.SelectMenu.Suffi.options[i-45] = new Option(suffixopt[i]); }
             }

             if ((menuNum >= 34) && (menuNum <= 38))
             {
//staff selected
               for (i = prefix_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               for (i = 0; i <= 14; i++)
               { document.SelectMenu.Prefi.options[i] = new Option(prefixopt[i]); }
               for (i = 17; i <= 35; i++)
               { document.SelectMenu.Prefi.options[i-2] = new Option(prefixopt[i]); }
               for (i = 72; i <= 82; i++)
               { document.SelectMenu.Prefi.options[i-38] = new Option(prefixopt[i]); }

               for (i = suffix_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               for (i = 0; i <= 4; i++)
               { document.SelectMenu.Suffi.options[i] = new Option(suffixopt[i]); }
               document.SelectMenu.Suffi.options[5] = new Option(suffixopt[29]);
               for (i = 59; i <= 65; i++)
               { document.SelectMenu.Suffi.options[i-53] = new Option(suffixopt[i]); }
               for (i = 96; i <= 121; i++)
               { document.SelectMenu.Suffi.options[i-83] = new Option(suffixopt[i]); }
             }

             if ((menuNum >= 39) && (menuNum <= 44))
             {
//shield selected
               for (i = prefix_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               document.SelectMenu.Prefi.options[0] = new Option(prefixopt[0]);
               for (i = 17; i <= 47; i++)
               { document.SelectMenu.Prefi.options[i-16] = new Option(prefixopt[i]); }

               for (i = suffix_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               document.SelectMenu.Suffi.options[0] = new Option(suffixopt[0]);
               for (i = 10; i <= 11; i++)
               { document.SelectMenu.Suffi.options[i-9] = new Option(suffixopt[i]); }
               for (i = 30; i <= 42; i++)
               { document.SelectMenu.Suffi.options[i-27] = new Option(suffixopt[i]); }
               for (i = 45; i <= 49; i++)
               { document.SelectMenu.Suffi.options[i-29] = new Option(suffixopt[i]); }
               for (i = 52; i <= 56; i++)
               { document.SelectMenu.Suffi.options[i-31] = new Option(suffixopt[i]); }
               for (i = 59; i <= 63; i++)
               { document.SelectMenu.Suffi.options[i-33] = new Option(suffixopt[i]); }
               for (i = 66; i <= 70; i++)
               { document.SelectMenu.Suffi.options[i-35] = new Option(suffixopt[i]); }
               for (i = 73; i <= 76; i++)
               { document.SelectMenu.Suffi.options[i-37] = new Option(suffixopt[i]); }
               for (i = 80; i <= 86; i++)
               { document.SelectMenu.Suffi.options[i-40] = new Option(suffixopt[i]); }
             }

             if ((menuNum >= 45) && (menuNum <= 67))
             {
//armor or helm selected
               for (i = prefix_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               document.SelectMenu.Prefi.options[0] = new Option(prefixopt[0]);
               for (i = 17; i <= 34; i++)
               { document.SelectMenu.Prefi.options[i-16] = new Option(prefixopt[i]); }
               for (i = 36; i <= 47; i++)
               { document.SelectMenu.Prefi.options[i-17] = new Option(prefixopt[i]); }

               for (i = suffix_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               document.SelectMenu.Suffi.options[0] = new Option(suffixopt[0]);
               for (i = 5; i <= 7; i++)
               { document.SelectMenu.Suffi.options[i-4] = new Option(suffixopt[i]); }
               for (i = 10; i <= 15; i++)
               { document.SelectMenu.Suffi.options[i-6] = new Option(suffixopt[i]); }
               document.SelectMenu.Suffi.options[10] = new Option(suffixopt[30]);
               for (i = 32; i <= 50; i++)
               { document.SelectMenu.Suffi.options[i-21] = new Option(suffixopt[i]); }
               for (i = 52; i <= 57; i++)
               { document.SelectMenu.Suffi.options[i-22] = new Option(suffixopt[i]); }
               for (i = 59; i <= 64; i++)
               { document.SelectMenu.Suffi.options[i-23] = new Option(suffixopt[i]); }
               for (i = 66; i <= 71; i++)
               { document.SelectMenu.Suffi.options[i-24] = new Option(suffixopt[i]); }
               for (i = 73; i <= 77; i++)
               { document.SelectMenu.Suffi.options[i-25] = new Option(suffixopt[i]); }
               for (i = 80; i <= 89; i++)
               { document.SelectMenu.Suffi.options[i-27] = new Option(suffixopt[i]); }
             }

             if ((menuNum >= 68) && (menuNum <= 69))
             {
//ring or amulet selected
               for (i = prefix_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               document.SelectMenu.Prefi.options[0] = new Option(prefixopt[0]);
               for (i = 7; i <= 14; i++)
               { document.SelectMenu.Prefi.options[i-6] = new Option(prefixopt[i]); }
               for (i = 17; i <= 34; i++)
               { document.SelectMenu.Prefi.options[i-8] = new Option(prefixopt[i]); }
               for (i = 48; i <= 54; i++)
               { document.SelectMenu.Prefi.options[i-21] = new Option(prefixopt[i]); }

               for (i = suffix_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               document.SelectMenu.Suffi.options[0] = new Option(suffixopt[0]);
               for (i = 5; i <= 7; i++)
               { document.SelectMenu.Suffi.options[i-4] = new Option(suffixopt[i]); }
               for (i = 12; i <= 15; i++)
               { document.SelectMenu.Suffi.options[i-8] = new Option(suffixopt[i]); }
               document.SelectMenu.Suffi.options[8] = new Option(suffixopt[30]);
               for (i = 38; i <= 40; i++)
               { document.SelectMenu.Suffi.options[i-29] = new Option(suffixopt[i]); }
               for (i = 45; i <= 87; i++)
               { document.SelectMenu.Suffi.options[i-33] = new Option(suffixopt[i]); }
             }

         index = 0;
         for (i = 0; i < document.SelectMenu.Prefi.options.length; i++) {
           if (prefix == document.SelectMenu.Prefi.options[i].text) {
             index = i;
             document.SelectMenu.Prefi.options[i].selected = true;
           }
         }
         if (index == 0) {
           document.SelectMenu.Prefi.options[0].selected = true;
           changeprefix();
         }
         else {
           changeprefixvalue();
         }

         index = 0;
         for (i = 0; i < document.SelectMenu.Suffi.options.length; i++) {
           if (suffix == document.SelectMenu.Suffi.options[i].text) {
             index = i;
             document.SelectMenu.Suffi.options[i].selected = true;
           }
         }
         if (index == 0) {
           document.SelectMenu.Suffi.options[0].selected = true;
           changesuffix();
         }
         else {
           changesuffixvalue();
         }
     }
