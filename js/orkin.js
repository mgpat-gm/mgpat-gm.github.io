
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

     prefiopt = new Array;                 prefivalueopt = new Array;                          preficostopt = new Array;
     prefiopt[ 0] = "None";                prefivalueopt[ 0] = "none";                         preficostopt[ 0] = "0/0/0";
     prefiopt[ 1] = "Flaming";             prefivalueopt[ 1] = "1-10";                         preficostopt[ 1] = "5000/5000/2";
     prefiopt[ 2] = "Lightning(melee w.)"; prefivalueopt[ 2] = "2-20";                         preficostopt[ 2] = "10000/10000/2";
     prefiopt[ 3] = "Angel's";             prefivalueopt[ 3] = "+1 level";                     preficostopt[ 3] = "25000/25000/2";
     prefiopt[ 4] = "Arch-Angel's";        prefivalueopt[ 4] = "+2 levels";                    preficostopt[ 4] = "50000/50000/3";
     prefiopt[ 5] = "Plentiful";           prefivalueopt[ 5] = "x2 charges";                   preficostopt[ 5] = "2000/2000/2";
     prefiopt[ 6] = "Bountiful";           prefivalueopt[ 6] = "x3 charges";                   preficostopt[ 6] = "3000/3000/3";
     prefiopt[ 7] = "Hyena's(c)";          prefivalueopt[ 7] = "-11{ mana}...25";              preficostopt[ 7] = "100/1000/-2";
     prefiopt[ 8] = "Frog's(c)";           prefivalueopt[ 8] = "-1{ mana}...10";               preficostopt[ 8] = "0/0/-2";
     prefiopt[ 9] = "Spider's";            prefivalueopt[ 9] = "+10{ mana}...15";              preficostopt[ 9] = "500/1000/2";
     prefiopt[10] = "Raven's";             prefivalueopt[10] = "+16{ mana}...20";              preficostopt[10] = "1100/2000/3";
     prefiopt[11] = "Snake's";             prefivalueopt[11] = "+21{ mana}...30";              preficostopt[11] = "2100/4000/5";
     prefiopt[12] = "Serpent's";           prefivalueopt[12] = "+30{ mana}...40";              preficostopt[12] = "4100/6000/7";
     prefiopt[13] = "Drake's";             prefivalueopt[13] = "+41{ mana}...50";              preficostopt[13] = "6100/10000/9";
     prefiopt[14] = "Dragon's";            prefivalueopt[14] = "+51{ mana}...60";              preficostopt[14] = "10100/15000/11";
     prefiopt[15] = "Wyrm's";              prefivalueopt[15] = "+61{ mana}...80";              preficostopt[15] = "15100/19000/12";
     prefiopt[16] = "Hydra's";             prefivalueopt[16] = "+81{ mana}...100";             preficostopt[16] = "19100/30000/13";
     prefiopt[17] = "Red";                 prefivalueopt[17] = "+10{% resist fire}...20";      preficostopt[17] = "500/1500/2";
     prefiopt[18] = "White";               prefivalueopt[18] = "+10{% resist lightning}...20"; preficostopt[18] = "500/1500/2";
     prefiopt[19] = "Blue";                prefivalueopt[19] = "+10{% resist magic}...20";     preficostopt[19] = "500/1500/2";
     prefiopt[20] = "Crimson";             prefivalueopt[20] = "+21{% resist fire}...40";      preficostopt[20] = "2100/4000/2";
     prefiopt[21] = "Pearl";               prefivalueopt[21] = "+21{% resist lightning}...30"; preficostopt[21] = "2100/3000/2";
     prefiopt[22] = "Azure";               prefivalueopt[22] = "+21{% resist magic}...30";     preficostopt[22] = "2100/3000/2";
     prefiopt[23] = "Ivory";               prefivalueopt[23] = "+31{% resist lightning}...40"; preficostopt[23] = "3100/4000/2";
     prefiopt[24] = "Lapis";               prefivalueopt[24] = "+31{% resist magic}...40";     preficostopt[24] = "3100/4000/2";
     prefiopt[25] = "Garnet";              prefivalueopt[25] = "+41{% resist fire}...50";      preficostopt[25] = "8200/12000/3";
     prefiopt[26] = "Crystal";             prefivalueopt[26] = "+41{% resist lightning}...50"; preficostopt[26] = "8200/12000/3";
     prefiopt[27] = "Cobalt";              prefivalueopt[27] = "+41{% resist magic}...50";     preficostopt[27] = "8200/12000/3";
     prefiopt[28] = "Ruby";                prefivalueopt[28] = "+51{% resist fire}...60";      preficostopt[28] = "17100/20000/5";
     prefiopt[29] = "Diamond";             prefivalueopt[29] = "+51{% resist lightning}...60"; preficostopt[29] = "17100/20000/5";
     prefiopt[30] = "Sapphire";            prefivalueopt[30] = "+51{% resist magic}...60";     preficostopt[30] = "17100/20000/5";
     prefiopt[31] = "Topaz";               prefivalueopt[31] = "+10{% resist all}...15";       preficostopt[31] = "2000/5000/3";
     prefiopt[32] = "Amber";               prefivalueopt[32] = "+16{% resist all}...20";       preficostopt[32] = "7400/10000/3";
     prefiopt[33] = "Jade";                prefivalueopt[33] = "+21{% resist all}...30";       preficostopt[33] = "11000/15000/3";
     prefiopt[34] = "Obsidian";            prefivalueopt[34] = "+31{% resist all}...40";       preficostopt[34] = "24000/40000/4";
     prefiopt[35] = "Emerald";             prefivalueopt[35] = "+41{% resist all}...50";       preficostopt[35] = "61000/75000/7";
     prefiopt[36] = "Vulnerable(c)";       prefivalueopt[36] = "-51{% AC}...100";              preficostopt[36] = "0/0/-3";
     prefiopt[37] = "Rusted(c)";           prefivalueopt[37] = "-25{% AC}...50";               preficostopt[37] = "0/0/-2";
     prefiopt[38] = "Fine";                prefivalueopt[38] = "+20{% AC}...30";               preficostopt[38] = "20/100/2";
     prefiopt[39] = "Strong";              prefivalueopt[39] = "+31{% AC}...40";               preficostopt[39] = "120/200/3";
     prefiopt[40] = "Grand";               prefivalueopt[40] = "+41{% AC}...55";               preficostopt[40] = "220/300/5";
     prefiopt[41] = "Valiant";             prefivalueopt[41] = "+56{% AC}...70";               preficostopt[41] = "320/400/7";
     prefiopt[42] = "Glorious";            prefivalueopt[42] = "+71{% AC}...90";               preficostopt[42] = "420/600/9";
     prefiopt[43] = "Blessed";             prefivalueopt[43] = "+91{% AC}...110";              preficostopt[43] = "620/800/11";
     prefiopt[44] = "Saintly";             prefivalueopt[44] = "+111{% AC}...130";             preficostopt[44] = "820/1200/13";
     prefiopt[45] = "Awesome";             prefivalueopt[45] = "+131{% AC}...150";             preficostopt[45] = "1220/2000/15";
     prefiopt[46] = "Holy";                prefivalueopt[46] = "+151{% AC}...170";             preficostopt[46] = "5200/6000/17";
     prefiopt[47] = "Godly";               prefivalueopt[47] = "+171{% AC}...200";             preficostopt[47] = "6200/7000/20";
     prefiopt[48] = "Tin(c)";              prefivalueopt[48] = "-6{% to hit}...10";            preficostopt[48] = "0/0/-3";
     prefiopt[49] = "Brass(c)";            prefivalueopt[49] = "-1{% to hit}...5";             preficostopt[49] = "0/0/-2";
     prefiopt[50] = "Bronze";              prefivalueopt[50] = "+1{% to hit}...5";             preficostopt[50] = "100/500/2";
     prefiopt[51] = "Iron";                prefivalueopt[51] = "+6{% to hit}...10";            preficostopt[51] = "600/1000/3";
     prefiopt[52] = "Steel";               prefivalueopt[52] = "+11{% to hit}...15";           preficostopt[52] = "1100/1500/5";
     prefiopt[53] = "Silver";              prefivalueopt[53] = "+16{% to hit}...20";           preficostopt[53] = "1600/2000/7";
     prefiopt[54] = "Gold";                prefivalueopt[54] = "+21{% to hit}...30";           preficostopt[54] = "2100/3000/9";
     prefiopt[55] = "Platinum";            prefivalueopt[55] = "+31{% to hit}...40";           preficostopt[55] = "3100/4000/11";
     prefiopt[56] = "Mithril";             prefivalueopt[56] = "+41{% to hit}...60";           preficostopt[56] = "4100/6000/13";
     prefiopt[57] = "Meteoric";            prefivalueopt[57] = "+61{% to hit}...80";           preficostopt[57] = "6100/10000/15";
     prefiopt[58] = "Weird";               prefivalueopt[58] = "+81{% to hit}...100";          preficostopt[58] = "10100/14000/17";
     prefiopt[59] = "Strange";             prefivalueopt[59] = "+101{% to hit}...150";         preficostopt[59] = "14100/20000/20";
     prefiopt[60] = "Useless(c)";          prefivalueopt[60] = "-100% damage";                 preficostopt[60] = "0/0/-8";
     prefiopt[61] = "Bent(c)";             prefivalueopt[61] = "-50{% damage}...75";           preficostopt[61] = "0/0/-4";
     prefiopt[62] = "Weak(c)";             prefivalueopt[62] = "-25{% damage}...45";           preficostopt[62] = "0/0/-3";
     prefiopt[63] = "Jagged";              prefivalueopt[63] = "+20{% damage}...35";           preficostopt[63] = "250/450/3";
     prefiopt[64] = "Deadly";              prefivalueopt[64] = "+36{% damage}...50";           preficostopt[64] = "500/700/4";
     prefiopt[65] = "Heavy";               prefivalueopt[65] = "+51{% damage}...65";           preficostopt[65] = "750/950/5";
     prefiopt[66] = "Vicious";             prefivalueopt[66] = "+66{% damage}...80";           preficostopt[66] = "1000/1450/8";
     prefiopt[67] = "Brutal";              prefivalueopt[67] = "+81{% damage}...95";           preficostopt[67] = "1500/1950/10";
     prefiopt[68] = "Massive";             prefivalueopt[68] = "+96{% damage}...110";          preficostopt[68] = "2000/2450/13";
     prefiopt[69] = "Savage";              prefivalueopt[69] = "+111{% damage}...125";         preficostopt[69] = "2500/3000/15";
     prefiopt[70] = "Ruthless";            prefivalueopt[70] = "+126{% damage}...150";         preficostopt[70] = "10100/15000/17";
     prefiopt[71] = "Merciless";           prefivalueopt[71] = "+151{% damage}...175";         preficostopt[71] = "15100/20000/20";
     prefiopt[72] = "Clumsy(c)";           prefivalueopt[72] = "-50{% damage}...75";           preficostopt[72] = "0/0/-7";
     prefiopt[73] = "Dull(c)";             prefivalueopt[73] = "-25{% damage}...45";           preficostopt[73] = "0/0/-5";
     prefiopt[74] = "Sharp";               prefivalueopt[74] = "+20{% damage}...35";           preficostopt[74] = "350/950/5";
     prefiopt[75] = "Fine";                prefivalueopt[75] = "+36{% damage}...50";           preficostopt[75] = "1100/1700/7";
     prefiopt[76] = "Warrior's";           prefivalueopt[76] = "+51{% damage}...65";           preficostopt[76] = "1850/2450/13";
     prefiopt[77] = "Soldier's";           prefivalueopt[77] = "+66{% damage}...80";           preficostopt[77] = "2600/3950/17";
     prefiopt[78] = "Lord's";              prefivalueopt[78] = "+81{% damage}...95";           preficostopt[78] = "4100/5950/21";
     prefiopt[79] = "Knight's";            prefivalueopt[79] = "+96{% damage}...110";          preficostopt[79] = "6100/8450/26";
     prefiopt[80] = "Master's";            prefivalueopt[80] = "+111{% damage}...125";         preficostopt[80] = "8600/13000/30";
     prefiopt[81] = "Champion's";          prefivalueopt[81] = "+126{% damage}...150";         preficostopt[81] = "15200/24000/33";
     prefiopt[82] = "King's";              prefivalueopt[82] = "+151{% damage}...175";         preficostopt[82] = "24100/35000/38";
     var prefi_trueLength = prefiopt.length;    var prefivalue_trueLength = 50;            var preficost_trueLength = 50;
     var prefi_maxLength = prefiopt.length;    var prefivalue_maxLength = 50;                var preficost_maxLength = 0;


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

     suffiopt = new Array;             suffivalueopt = new Array;                      sufficostopt = new Array;
     suffiopt[ 0] = "None";            suffivalueopt[ 0] = "none";                     sufficostopt[ 0] = "0/0/0";
     suffiopt[ 1] = "Readiness";       suffivalueopt[ 1] = "fast attack";              sufficostopt[ 1] = "2000/2000/2";
     suffiopt[ 2] = "Swiftness";       suffivalueopt[ 2] = "fast attack";              sufficostopt[ 2] = "4000/4000/4";
     suffiopt[ 3] = "Speed";           suffivalueopt[ 3] = "faster attack";            sufficostopt[ 3] = "8000/8000/8";
     suffiopt[ 4] = "Haste";           suffivalueopt[ 4] = "fastest attack";           sufficostopt[ 4] = "16000/16000/16";
     suffiopt[ 5] = "Balance";         suffivalueopt[ 5] = "fast recovery";            sufficostopt[ 5] = "2000/2000/2";
     suffiopt[ 6] = "Stability";       suffivalueopt[ 6] = "faster recovery";          sufficostopt[ 6] = "4000/4000/4";
     suffiopt[ 7] = "Harmony";         suffivalueopt[ 7] = "fastest recovery";         sufficostopt[ 7] = "8000/8000/8";
     suffiopt[ 8] = "Many";            suffivalueopt[ 8] = "x2 durability";            sufficostopt[ 8] = "750/750/2";
     suffiopt[ 9] = "Plenty";          suffivalueopt[ 9] = "x3 durability";            sufficostopt[ 9] = "1500/1500/3";
     suffiopt[10] = "Thorns";          suffivalueopt[10] = "1-3 damage";               sufficostopt[10] = "500/500/2";
     suffiopt[11] = "Corruption(c)";   suffivalueopt[11] = "-100% mana";               sufficostopt[11] = "-1000/-1000/2";
     suffiopt[12] = "Dark(c)";         suffivalueopt[12] = "-40% light radius";        sufficostopt[12] = "0/0/-3";
     suffiopt[13] = "Night(c)";        suffivalueopt[13] = "-20% light radius";        sufficostopt[13] = "0/0/-2";
     suffiopt[14] = "Light";           suffivalueopt[14] = "+20% light radius";        sufficostopt[14] = "750/750/2";
     suffiopt[15] = "Radiance";        suffivalueopt[15] = "+40% light radius";        sufficostopt[15] = "1500/1500/3";
     suffiopt[16] = "Leech";           suffivalueopt[16] = "3% hit points";            sufficostopt[16] = "7500/7500/3";
     suffiopt[17] = "Bat";             suffivalueopt[17] = "3% mana";                  sufficostopt[17] = "7500/7500/3";
     suffiopt[18] = "Blood";           suffivalueopt[18] = "5% hit points";            sufficostopt[18] = "15000/15000/3";
     suffiopt[19] = "Vampires";        suffivalueopt[19] = "5% mana";                  sufficostopt[19] = "15000/15000/3";
     suffiopt[20] = "Piercing";        suffivalueopt[20] = "1-8 from AC";              sufficostopt[20] = "1000/1000/3";
     suffiopt[21] = "Puncturing";      suffivalueopt[21] = "4-12 from AC";             sufficostopt[21] = "2000/2000/6";
     suffiopt[22] = "Bashing";         suffivalueopt[22] = "8-24 from AC";             sufficostopt[22] = "4000/4000/12";
     suffiopt[23] = "Shock";           suffivalueopt[23] = "+1-6 damage";              sufficostopt[23] = "6000/6000/2";
     suffiopt[24] = "Lightning";       suffivalueopt[24] = "+1-10 damage";             sufficostopt[24] = "8000/8000/4";
     suffiopt[25] = "Thunder";         suffivalueopt[25] = "+1-20 damage";             sufficostopt[25] = "12000/12000/6";
     suffiopt[26] = "Flame";           suffivalueopt[26] = "+1-3 damage";              sufficostopt[26] = "2000/2000/2";
     suffiopt[27] = "Fire";            suffivalueopt[27] = "+1-6 damage";              sufficostopt[27] = "4000/4000/4";
     suffiopt[28] = "Burning";         suffivalueopt[28] = "+1-16 damage";             sufficostopt[28] = "6000/6000/6";
     suffiopt[29] = "Bear";            suffivalueopt[29] = "knockback";                sufficostopt[29] = "750/750/2";
     suffiopt[30] = "Thieves";         suffivalueopt[30] = "-50% trap damage";         sufficostopt[30] = "1500/1500/2";
     suffiopt[31] = "Blocking";        suffivalueopt[31] = "fast block";               sufficostopt[31] = "4000/4000/4";
     suffiopt[32] = "Fragility(c)";    suffivalueopt[32] = "durability = 1";           sufficostopt[32] = "0/0/-4";
     suffiopt[33] = "Brittleness(c)";  suffivalueopt[33] = "-26{% durability}...75";    sufficostopt[33] = "0/0/-2";
     suffiopt[34] = "Sturdiness";      suffivalueopt[34] = "+26{% durability}...50";   sufficostopt[34] = "100/100/2";
     suffiopt[35] = "Craftmanship";    suffivalueopt[35] = "+52{% durability}...100";  sufficostopt[35] = "200/200/2";
     suffiopt[36] = "Structure";       suffivalueopt[36] = "+101{% durability}...200"; sufficostopt[36] = "300/300/2";
     suffiopt[37] = "Ages";            suffivalueopt[37] = "indestructible";           sufficostopt[37] = "600/600/5";
     suffiopt[38] = "Pain(c)";         suffivalueopt[38] = "+2 damage";                sufficostopt[38] = "0/0/-4";
     suffiopt[39] = "Tears(c)";        suffivalueopt[39] = "+1 damage";                sufficostopt[39] = "0/0/-2";
     suffiopt[40] = "Health";          suffivalueopt[40] = "-1 damage";                sufficostopt[40] = "200/200/2";
     suffiopt[41] = "Protection";      suffivalueopt[41] = "-2 damage";                sufficostopt[41] = "400/400/4";
     suffiopt[42] = "Absorption";      suffivalueopt[42] = "-3 damage";                sufficostopt[42] = "1001/1001/10";
     suffiopt[43] = "Deflection";      suffivalueopt[43] = "-4 damage";                sufficostopt[43] = "2500/2500/15";
     suffiopt[44] = "Osmosis";         suffivalueopt[44] = "-5 damage/-6 damage";      sufficostopt[44] = "7500/10000/20";
     suffiopt[45] = "Frailty(c)";      suffivalueopt[45] = "-6{ strength}...10";       sufficostopt[45] = "0/0/-3";
     suffiopt[46] = "Weakness(c)";     suffivalueopt[46] = "-1{ strength}...5";        sufficostopt[46] = "0/0/-2";
     suffiopt[47] = "Strength";        suffivalueopt[47] = "+1{ strength}...5";        sufficostopt[47] = "200/1000/2";
     suffiopt[48] = "Might";           suffivalueopt[48] = "+6{ strength}...10";       sufficostopt[48] = "1200/2000/3";
     suffiopt[49] = "Power";           suffivalueopt[49] = "+11{ strength}...15";      sufficostopt[49] = "2200/3000/4";
     suffiopt[50] = "Giants";          suffivalueopt[50] = "+16{ strength}...20";      sufficostopt[50] = "3200/5000/7";
     suffiopt[51] = "Titans";          suffivalueopt[51] = "+21{ strength}...30";      sufficostopt[51] = "5200/10000/10";
     suffiopt[52] = "Paralysis(c)";    suffivalueopt[52] = "-6{ dexterity}...10";      sufficostopt[52] = "0/0/-3";
     suffiopt[53] = "Atrophy(c)";      suffivalueopt[53] = "-1{ dexterity}...5";       sufficostopt[53] = "0/0/-2";
     suffiopt[54] = "Dexterity";       suffivalueopt[54] = "+1{ dexterity}...5";       sufficostopt[54] = "200/1000/2";
     suffiopt[55] = "Skill";           suffivalueopt[55] = "+6{ dexterity}...10";      sufficostopt[55] = "1200/2000/3";
     suffiopt[56] = "Accuracy";        suffivalueopt[56] = "+11{ dexterity}...15";     sufficostopt[56] = "2200/3000/4";
     suffiopt[57] = "Precision";       suffivalueopt[57] = "+16{ dexterity}...20";     sufficostopt[57] = "3200/5000/7";
     suffiopt[58] = "Perfection";      suffivalueopt[58] = "+21{ dexterity}...30";     sufficostopt[58] = "5200/10000/10";
     suffiopt[59] = "Fool(c)";         suffivalueopt[59] = "-6{ magic}...10";          sufficostopt[59] = "0/0/-3";
     suffiopt[60] = "Dyslexia(c)";     suffivalueopt[60] = "-1{ magic}...5";           sufficostopt[60] = "0/0/-2";
     suffiopt[61] = "Magic";           suffivalueopt[61] = "+1{ magic}...5";           sufficostopt[61] = "200/1000/2";
     suffiopt[62] = "Mind";            suffivalueopt[62] = "+6{ magic}...10";          sufficostopt[62] = "1200/2000/3";
     suffiopt[63] = "Brilliance";      suffivalueopt[63] = "+11{ magic}...15";         sufficostopt[63] = "2200/3000/4";
     suffiopt[64] = "Sorcery";         suffivalueopt[64] = "+16{ magic}...20";         sufficostopt[64] = "3200/5000/7";
     suffiopt[65] = "Wizardry";        suffivalueopt[65] = "+21{ magic}...30";         sufficostopt[65] = "5200/10000/10";
     suffiopt[66] = "Illness(c)";      suffivalueopt[66] = "-6{ vitality}...10";       sufficostopt[66] = "0/0/-3";
     suffiopt[67] = "Disease(c)";      suffivalueopt[67] = "-1{ vitality}...5";        sufficostopt[67] = "0/0/-2";
     suffiopt[68] = "Vitality";        suffivalueopt[68] = "+1{ vitality}...5";        sufficostopt[68] = "200/1000/2";
     suffiopt[69] = "Zest";            suffivalueopt[69] = "+6{ vitality}...10";       sufficostopt[69] = "1200/2000/3";
     suffiopt[70] = "Vim";             suffivalueopt[70] = "+11{ vitality}...15";      sufficostopt[70] = "2200/3000/4";
     suffiopt[71] = "Vigor";           suffivalueopt[71] = "+16{ vitality}...20";      sufficostopt[71] = "3200/5000/7";
     suffiopt[72] = "Life";            suffivalueopt[72] = "+21{ vitality}...30";      sufficostopt[72] = "5200/10000/10";
     suffiopt[73] = "Trouble(c)";      suffivalueopt[73] = "-6{ to all}...10";         sufficostopt[73] = "0/0/-10";
     suffiopt[74] = "Pit(c)";          suffivalueopt[74] = "-1{ to all}...5";          sufficostopt[74] = "0/0/-5";
     suffiopt[75] = "Sky";             suffivalueopt[75] = "+1{ to all}...3";          sufficostopt[75] = "800/4000/5";
     suffiopt[76] = "Moon";            suffivalueopt[76] = "+4{ to all}...7";          sufficostopt[76] = "4800/8000/10";
     suffiopt[77] = "Stars";           suffivalueopt[77] = "+8{ to all}...11";         sufficostopt[77] = "8800/12000/15";
     suffiopt[78] = "Heavens";         suffivalueopt[78] = "+12{ to all}...15";        sufficostopt[78] = "12800/20000/20";
     suffiopt[79] = "Zodiac";          suffivalueopt[79] = "+16{ to all}...20";        sufficostopt[79] = "20800/40000/30";
     suffiopt[80] = "Vulture(c)";      suffivalueopt[80] = "-11{ hit points}...25";    sufficostopt[80] = "0/0/-4";
     suffiopt[81] = "Jackal(c)";       suffivalueopt[81] = "-1{ hit points}...10";     sufficostopt[81] = "0/0/-2";
     suffiopt[82] = "Fox";             suffivalueopt[82] = "+10{ hit points}...15";    sufficostopt[82] = "100/1000/2";
     suffiopt[83] = "Jaguar";          suffivalueopt[83] = "+16{ hit points}...20";    sufficostopt[83] = "1100/2000/3";
     suffiopt[84] = "Eagle";           suffivalueopt[84] = "+21{ hit points}...30";    sufficostopt[84] = "2100/4000/5";
     suffiopt[85] = "Wolf";            suffivalueopt[85] = "+31{ hit points}...40";    sufficostopt[85] = "4100/6000/7";
     suffiopt[86] = "Tiger";           suffivalueopt[86] = "+41{ hit points}...50";    sufficostopt[86] = "6100/10000/9";
     suffiopt[87] = "Lion";            suffivalueopt[87] = "+51{ hit points}...60";    sufficostopt[87] = "10100/15000/11";
     suffiopt[88] = "Mammoth";         suffivalueopt[88] = "+61{ hit points}...80";    sufficostopt[88] = "15100/19000/12";
     suffiopt[89] = "Whale";           suffivalueopt[89] = "+81{ hit points}...100";   sufficostopt[89] = "19100/30000/13";
     suffiopt[90] = "Quality";         suffivalueopt[90] = "+1 damage/+2 damage";      sufficostopt[90] = "100/200/2";
     suffiopt[91] = "Maiming";         suffivalueopt[91] = "+3{ damage}...5";          sufficostopt[91] = "1300/1500/3";
     suffiopt[92] = "Slaying";         suffivalueopt[92] = "+6{ damage}...8";          sufficostopt[92] = "2600/3000/5";
     suffiopt[93] = "Gore";            suffivalueopt[93] = "+9{ damage}...12";         sufficostopt[93] = "4100/5000/8";
     suffiopt[94] = "Carnage";         suffivalueopt[94] = "+13{ damage}...16";        sufficostopt[94] = "5100/10000/10";
     suffiopt[95] = "Slaughter";       suffivalueopt[95] = "+17{ damage}...20";        sufficostopt[95] = "10100/15000/13";
     suffiopt[96] = "Apocalypse";      suffivalueopt[96]="8{ charges}...12";           sufficostopt[96] = "400";
     suffiopt[97] = "Blood Star";      suffivalueopt[97]="20{ charges}...60";          sufficostopt[97] = "360";
     suffiopt[98] = "Bone Spirit";     suffivalueopt[98]="20{ charges}...60";          sufficostopt[98] = "160";
     suffiopt[99] = "Chain Lightning"; suffivalueopt[99]="20{ charges}...60";          sufficostopt[99] = "150";
     suffiopt[100]= "Charged Bolt";    suffivalueopt[100]="40{ charges}...80";         sufficostopt[100] = "10";
     suffiopt[101]= "Elemental";       suffivalueopt[101]="20{ charges}...60";         sufficostopt[101] = "140";
     suffiopt[102]= "Fireball";        suffivalueopt[102]="40{ charges}...80";         sufficostopt[102] = "60";
     suffiopt[103]= "Firebolt";        suffivalueopt[103]="40{ charges}...80";         sufficostopt[103] = "10";
     suffiopt[104]= "Fire Wall";       suffivalueopt[104]="8{ charges}...16";          sufficostopt[104] = "80";
     suffiopt[105]= "Flame Wave";      suffivalueopt[105]="20{ charges}...40";         sufficostopt[105] = "130";
     suffiopt[106]= "Flash";           suffivalueopt[106]="20{ charges}...40";         sufficostopt[106] = "100";
     suffiopt[107]= "Golem";           suffivalueopt[107]="16{ charges}...32";         sufficostopt[107] = "220";
     suffiopt[108]= "Guardian";        suffivalueopt[108]="16{ charges}...32";         sufficostopt[108] = "190";
     suffiopt[109]= "Healing";         suffivalueopt[109]="20{ charges}...40";         sufficostopt[109] = "10";
     suffiopt[110]= "Heal Other";      suffivalueopt[110]="20{ charges}...40";         sufficostopt[110] = "10";
     suffiopt[111]= "Holy Bolt";       suffivalueopt[111]="40{ charges}...80";         sufficostopt[111] = "10";
     suffiopt[112]= "Inferno";         suffivalueopt[112]="20{ charges}...40";         sufficostopt[112] = "20";
     suffiopt[113]= "Lightning";       suffivalueopt[113]="20{ charges}...60";         sufficostopt[113] = "30";
     suffiopt[114]= "Mana Shield";     suffivalueopt[114]="4{ charges}...10";          sufficostopt[114] = "240";
     suffiopt[115]= "Nova";            suffivalueopt[115]="16{ charges}...32";         sufficostopt[115] = "260";
     suffiopt[116]= "Phasing";         suffivalueopt[116]="40{ charges}...80";         sufficostopt[116] = "40";
     suffiopt[117]= "Ressurect";       suffivalueopt[117]="4{ charges}...10";          sufficostopt[117] = "50";
     suffiopt[118]= "Stone Curse";     suffivalueopt[118]="8{ charges}...16";          sufficostopt[118] = "160";
     suffiopt[119]= "Telekenesis";     suffivalueopt[119]="20{ charges}...40";         sufficostopt[119] = "40";
     suffiopt[120]= "Teleport";        suffivalueopt[120]="16{ charges}...32";         sufficostopt[120] = "250";
     suffiopt[121]= "Town Portal";     suffivalueopt[121]="8{ charges}...16";          sufficostopt[121] = "40";
     var suffi_trueLength = suffiopt.length;    var suffivalue_trueLength = 100;    sufficost_trueLength = 20;
     var suffi_maxLength = suffiopt.length;    var suffivalue_maxLength = 100;    sufficost_maxLength = 0;

/////////////////////////////
//
/////////////////////////////
     function changeprefi()
     {
//find prefi in master list
       index = document.SelectMenu.Prefi.selectedIndex;
       prefi = document.SelectMenu.Prefi.options[index].text;
       for (i = 0; i < prefi_maxLength; i++) {
         if (prefi == prefiopt[i]) {
           index = i;
         }
       }

//clear existing entries
       for (i = prefivalue_trueLength; i > 0; i--) 
       { document.SelectMenu.PrefiValue.options[i] = null; }

       start = prefivalueopt[index];
       if (start.indexOf("...") == -1) {
         if (start.indexOf("/") == -1) {
//single item for value
           document.SelectMenu.PrefiValue.options[0] = new Option(start);
           prefivalue_trueLength = 1;
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
           prefivalue_trueLength = n;
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
         prefivalue_trueLength = n;
       }
       document.SelectMenu.PrefiValue.options[0].selected = true;
       changeprefivalue();
     }

/////////////////////////////
//
/////////////////////////////
     function changesuffi()
     {
//find suffi in master list
       index = document.SelectMenu.Suffi.selectedIndex;
       suffi = document.SelectMenu.Suffi.options[index].text;
       for (i = 0; i < suffi_maxLength; i++) {
         if (suffi == suffiopt[i]) {
           index = i;
         }
       }

       for (i = suffivalue_trueLength; i > 0; i--) 
       { document.SelectMenu.SuffiValue.options[i] = null; }

       start = suffivalueopt[index];
       if (start.indexOf("...") == -1) {
         if (start.indexOf("/") == -1) {
//single item for value
           document.SelectMenu.SuffiValue.options[0] = new Option(start);
           suffivalue_trueLength = 1;
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
           suffivalue_trueLength = n;
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
         suffivalue_trueLength = n;
       }
       document.SelectMenu.SuffiValue.options[0].selected = true;
       changesuffivalue();
     }

/////////////////////////////
//
/////////////////////////////
     function changeprefivalue()
     {
       index = document.SelectMenu.Prefi.selectedIndex;
       prefi = document.SelectMenu.Prefi.options[index].text;
       for (i = 0; i < prefi_maxLength; i++) {
         if (prefi == prefiopt[i]) {
           prefiindex = i;
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
       cost = preficostopt[prefiindex];
       slashloc = cost.indexOf("/");
       bas = parseInt(cost.substring(0,slashloc));
       cost = cost.substring(slashloc+1,cost.length);
       slashloc = cost.indexOf("/");
       max  = parseInt(cost.substring(0,slashloc));
       mult = parseFloat(cost.substring(slashloc+1,cost.length));
       mult = mult * 100;
       mult = parseInt(mult);
       mult = parseFloat(mult);
       mult = mult/100;
//document.SelectMenu.PrefiDebug.value = bas + " " + max + " " + mult + " ";
       itemval = parseInt(itemvalueopt[itemindex]);

       if (prefivalue_trueLength == 1) {
         document.SelectMenu.PrefiCost.value = bas + mult * itemval;
       }
       else {
         document.SelectMenu.PrefiCost.value = bas + (steps/(prefivalue_trueLength- 1)) * (max - bas) + mult * itemval;
       }

       index = document.SelectMenu.Suffi.selectedIndex;
       if (index >= 0) {
//a suffi has been selected
         suffi = document.SelectMenu.Suffi.options[index].text;
         for (i = 0; i < suffi_maxLength; i++) {
           if (suffi == suffiopt[i]) {
             suffiindex = i;
           }
         }
         if (suffiindex > 95) {
//this is a spell staff so the suffi cost changes also
           changesuffivalue();
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
     function changesuffivalue()
     {
       index = document.SelectMenu.Suffi.selectedIndex;
       suffi = document.SelectMenu.Suffi.options[index].text;
       for (i = 0; i < suffi_maxLength; i++) {
         if (suffi == suffiopt[i]) {
           suffiindex = i;
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
       if (suffiindex < 96) {
         cost = sufficostopt[suffiindex];
         slashloc = cost.indexOf("/");
         bas = parseInt(cost.substring(0,slashloc));
         cost = cost.substring(slashloc+1,cost.length);
         slashloc = cost.indexOf("/");
         max  = parseInt(cost.substring(0,slashloc));
         mult = parseFloat(cost.substring(slashloc+1,cost.length));
         mult = mult * 100;
         mult = parseInt(mult);
         mult = parseFloat(mult);
         mult = mult/100;
//document.SelectMenu.SuffiDebug.value = bas + " " + max + " " + mult + " ";
         itemval = parseInt(itemvalueopt[itemindex]);

         if (suffivalue_trueLength == 1) {
           document.SelectMenu.SuffiCost.value = bas + mult * itemval;
         }
         else {
           document.SelectMenu.SuffiCost.value = bas + (steps/(suffivalue_trueLength- 1)) * (max - bas) + mult * itemval;
         }
       }
       else {
//this is a spell staff
         index = document.SelectMenu.Prefi.selectedIndex;
         prefi = document.SelectMenu.Prefi.options[index].text;
         for (i = 0; i < prefi_maxLength; i++) {
           if (prefi == prefiopt[i]) {
             prefiindex = i;
           }
         }
         cost = preficostopt[prefiindex];
         slashloc = cost.indexOf("/");
         bas = parseInt(cost.substring(0,slashloc));
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
         cost = sufficostopt[suffiindex];
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
//save old prefi and suffi
       index = document.SelectMenu.Prefi.selectedIndex;
       prefi = document.SelectMenu.Prefi.options[index].text;
       index = document.SelectMenu.Suffi.selectedIndex;
       suffi = document.SelectMenu.Suffi.options[index].text;

     menuNum = document.SelectMenu.Item.selectedIndex;
             if (menuNum == null) return;
       
             if (menuNum == 0)
             {
//no item type selected
               for (i = prefi_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               for (i = 0; i < prefi_maxLength; i++)
               { document.SelectMenu.Prefi.options[i] = new Option(prefiopt[i]); }

               for (i = suffi_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               for (i = 0; i < suffi_maxLength; i++)
               { document.SelectMenu.Suffi.options[i] = new Option(suffiopt[i]); }
             }               

             if ((menuNum >= 1) && (menuNum <= 25))
             {
//melee weapon selected
               for (i = prefi_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               for (i = 0; i <= 2; i++)
               { document.SelectMenu.Prefi.options[i] = new Option(prefiopt[i]); }
               for (i = 17; i <= 35; i++)
               { document.SelectMenu.Prefi.options[i-14] = new Option(prefiopt[i]); }
               for (i = 48; i <= 82; i++)
               { document.SelectMenu.Prefi.options[i-26] = new Option(prefiopt[i]); }

               for (i = suffi_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               for (i = 0; i <= 4; i++)
               { document.SelectMenu.Suffi.options[i] = new Option(suffiopt[i]); }
               for (i = 11; i <= 22; i++)
               { document.SelectMenu.Suffi.options[i-6] = new Option(suffiopt[i]); }
               document.SelectMenu.Suffi.options[17] = new Option(suffiopt[29]);
               for (i = 32; i <= 37; i++)
               { document.SelectMenu.Suffi.options[i-14] = new Option(suffiopt[i]); }
               for (i = 45; i <= 57; i++)
               { document.SelectMenu.Suffi.options[i-21] = new Option(suffiopt[i]); }
               for (i = 59; i <= 64; i++)
               { document.SelectMenu.Suffi.options[i-22] = new Option(suffiopt[i]); }
               for (i = 66; i <= 71; i++)
               { document.SelectMenu.Suffi.options[i-23] = new Option(suffiopt[i]); }
               for (i = 73; i <= 78; i++)
               { document.SelectMenu.Suffi.options[i-24] = new Option(suffiopt[i]); }
               for (i = 90; i <= 95; i++)
               { document.SelectMenu.Suffi.options[i-35] = new Option(suffiopt[i]); }
             }

             if ((menuNum >= 26) && (menuNum <= 33))
             {
//bow selected
               for (i = prefi_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               document.SelectMenu.Prefi.options[0] = new Option(prefiopt[0]);
               for (i = 17; i <= 35; i++)
               { document.SelectMenu.Prefi.options[i-16] = new Option(prefiopt[i]); }
               for (i = 48; i <= 76; i++)
               { document.SelectMenu.Prefi.options[i-28] = new Option(prefiopt[i]); }

               for (i = suffi_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               for (i = 0; i <= 2; i++)
               { document.SelectMenu.Suffi.options[i] = new Option(suffiopt[i]); }
               for (i = 8; i <= 9; i++)
               { document.SelectMenu.Suffi.options[i-5] = new Option(suffiopt[i]); }
               for (i = 20; i <= 21; i++)
               { document.SelectMenu.Suffi.options[i-15] = new Option(suffiopt[i]); }
               for (i = 23; i <= 29; i++)
               { document.SelectMenu.Suffi.options[i-16] = new Option(suffiopt[i]); }
               for (i = 45; i <= 50; i++)
               { document.SelectMenu.Suffi.options[i-31] = new Option(suffiopt[i]); }
               for (i = 52; i <= 64; i++)
               { document.SelectMenu.Suffi.options[i-32] = new Option(suffiopt[i]); }
               for (i = 66; i <= 71; i++)
               { document.SelectMenu.Suffi.options[i-33] = new Option(suffiopt[i]); }
               for (i = 73; i <= 78; i++)
               { document.SelectMenu.Suffi.options[i-34] = new Option(suffiopt[i]); }
               for (i = 90; i <= 91; i++)
               { document.SelectMenu.Suffi.options[i-45] = new Option(suffiopt[i]); }
             }

             if ((menuNum >= 34) && (menuNum <= 38))
             {
//staff selected
               for (i = prefi_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               for (i = 0; i <= 14; i++)
               { document.SelectMenu.Prefi.options[i] = new Option(prefiopt[i]); }
               for (i = 15; i <= 35; i++)
               { document.SelectMenu.Prefi.options[i-2] = new Option(prefiopt[i]); }
               for (i = 72; i <= 82; i++)
               { document.SelectMenu.Prefi.options[i-38] = new Option(prefiopt[i]); }

               for (i = suffi_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               for (i = 0; i <= 4; i++)
               { document.SelectMenu.Suffi.options[i] = new Option(suffiopt[i]); }
               document.SelectMenu.Suffi.options[5] = new Option(suffiopt[29]);
               for (i = 59; i <= 65; i++)
               { document.SelectMenu.Suffi.options[i-53] = new Option(suffiopt[i]); }
               for (i = 96; i <= 121; i++)
               { document.SelectMenu.Suffi.options[i-83] = new Option(suffiopt[i]); }
             }

             if ((menuNum >= 39) && (menuNum <= 44))
             {
//shield selected
               for (i = prefi_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               document.SelectMenu.Prefi.options[0] = new Option(prefiopt[0]);
               for (i = 17; i <= 47; i++)
               { document.SelectMenu.Prefi.options[i-16] = new Option(prefiopt[i]); }

               for (i = suffi_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               document.SelectMenu.Suffi.options[0] = new Option(suffiopt[0]);
               for (i = 10; i <= 11; i++)
               { document.SelectMenu.Suffi.options[i-9] = new Option(suffiopt[i]); }
               for (i = 30; i <= 42; i++)
               { document.SelectMenu.Suffi.options[i-27] = new Option(suffiopt[i]); }
               for (i = 45; i <= 49; i++)
               { document.SelectMenu.Suffi.options[i-29] = new Option(suffiopt[i]); }
               for (i = 52; i <= 56; i++)
               { document.SelectMenu.Suffi.options[i-31] = new Option(suffiopt[i]); }
               for (i = 59; i <= 63; i++)
               { document.SelectMenu.Suffi.options[i-33] = new Option(suffiopt[i]); }
               for (i = 66; i <= 70; i++)
               { document.SelectMenu.Suffi.options[i-35] = new Option(suffiopt[i]); }
               for (i = 73; i <= 76; i++)
               { document.SelectMenu.Suffi.options[i-37] = new Option(suffiopt[i]); }
               for (i = 80; i <= 86; i++)
               { document.SelectMenu.Suffi.options[i-40] = new Option(suffiopt[i]); }
             }

             if ((menuNum >= 45) && (menuNum <= 67))
             {
//armor or helm selected
               for (i = prefi_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               document.SelectMenu.Prefi.options[0] = new Option(prefiopt[0]);
               for (i = 17; i <= 34; i++)
               { document.SelectMenu.Prefi.options[i-16] = new Option(prefiopt[i]); }
               for (i = 36; i <= 47; i++)
               { document.SelectMenu.Prefi.options[i-17] = new Option(prefiopt[i]); }

               for (i = suffi_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               document.SelectMenu.Suffi.options[0] = new Option(suffiopt[0]);
               for (i = 5; i <= 7; i++)
               { document.SelectMenu.Suffi.options[i-4] = new Option(suffiopt[i]); }
               for (i = 10; i <= 15; i++)
               { document.SelectMenu.Suffi.options[i-6] = new Option(suffiopt[i]); }
               document.SelectMenu.Suffi.options[10] = new Option(suffiopt[30]);
               for (i = 32; i <= 50; i++)
               { document.SelectMenu.Suffi.options[i-21] = new Option(suffiopt[i]); }
               for (i = 52; i <= 57; i++)
               { document.SelectMenu.Suffi.options[i-22] = new Option(suffiopt[i]); }
               for (i = 59; i <= 64; i++)
               { document.SelectMenu.Suffi.options[i-23] = new Option(suffiopt[i]); }
               for (i = 66; i <= 71; i++)
               { document.SelectMenu.Suffi.options[i-24] = new Option(suffiopt[i]); }
               for (i = 73; i <= 77; i++)
               { document.SelectMenu.Suffi.options[i-25] = new Option(suffiopt[i]); }
               for (i = 80; i <= 89; i++)
               { document.SelectMenu.Suffi.options[i-27] = new Option(suffiopt[i]); }
             }

             if ((menuNum >= 68) && (menuNum <= 69))
             {
//ring or amulet selected
               for (i = prefi_trueLength; i > 0; i--) 
               { document.SelectMenu.Prefi.options[i] = null; }
               document.SelectMenu.Prefi.options[0] = new Option(prefiopt[0]);
               for (i = 7; i <= 14; i++)
               { document.SelectMenu.Prefi.options[i-6] = new Option(prefiopt[i]); }
               for (i = 17; i <= 34; i++)
               { document.SelectMenu.Prefi.options[i-8] = new Option(prefiopt[i]); }
               for (i = 48; i <= 54; i++)
               { document.SelectMenu.Prefi.options[i-21] = new Option(prefiopt[i]); }

               for (i = suffi_trueLength; i > 0; i--) 
               { document.SelectMenu.Suffi.options[i] = null; }
               document.SelectMenu.Suffi.options[0] = new Option(suffiopt[0]);
               for (i = 5; i <= 7; i++)
               { document.SelectMenu.Suffi.options[i-4] = new Option(suffiopt[i]); }
               for (i = 12; i <= 15; i++)
               { document.SelectMenu.Suffi.options[i-8] = new Option(suffiopt[i]); }
               document.SelectMenu.Suffi.options[8] = new Option(suffiopt[30]);
               for (i = 38; i <= 40; i++)
               { document.SelectMenu.Suffi.options[i-29] = new Option(suffiopt[i]); }
               for (i = 45; i <= 87; i++)
               { document.SelectMenu.Suffi.options[i-33] = new Option(suffiopt[i]); }
             }

         index = 0;
         for (i = 0; i < document.SelectMenu.Prefi.options.length; i++) {
           if (prefi == document.SelectMenu.Prefi.options[i].text) {
             index = i;
             document.SelectMenu.Prefi.options[i].selected = true;
           }
         }
         if (index == 0) {
           document.SelectMenu.Prefi.options[0].selected = true;
           changeprefi();
         }
         else {
           changeprefivalue();
         }

         index = 0;
         for (i = 0; i < document.SelectMenu.Suffi.options.length; i++) {
           if (suffi == document.SelectMenu.Suffi.options[i].text) {
             index = i;
             document.SelectMenu.Suffi.options[i].selected = true;
           }
         }
         if (index == 0) {
           document.SelectMenu.Suffi.options[0].selected = true;
           changesuffi();
         }
         else {
           changesuffivalue();
         }
     }
