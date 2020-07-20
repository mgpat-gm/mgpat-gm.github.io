function update()
{
	calcMax();
	calcEnemy();
}

function calcMax()
{
	var CS=0;
	var clvl = parseInt(document.SelectStats.Clvl.options[document.SelectStats.Clvl.selectedIndex].value);
	var diff = parseInt(document.SelectStats.Diff.options[document.SelectStats.Diff.selectedIndex].value);
	var cClass = document.SelectStats.cClass.options[document.SelectStats.cClass.selectedIndex].text;
	var dex = parseInt(document.SelectStats.cClass.options[document.SelectStats.cClass.selectedIndex].value);
	var attack = document.SelectStats.Attack.options[document.SelectStats.Attack.selectedIndex].value;
	var bonus;
	if (cClass == "Warrior")
	{
		if (attack == "melee")
		{
			bonus=20;
		}
		else if (attack == "arrow")
		{
			bonus=10;
		}
		else
		{
			bonus=0;
		}
	}
	else if (cClass == "Rogue")
	{
		if (attack == "arrow")
		{
			bonus=20;
		}
		else
		{
			bonus=0;
		}
	}
	else if (cClass == "Sorcerer")
	{
		bonus=0;
	}
	var percent = parseInt(document.SelectStats.Percent.options[document.SelectStats.Percent.selectedIndex].value);
	var TD = document.getElementById("MaxCS").getElementsByTagName("td");

	CS = Math.floor(percent+(85+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[6].firstChild.nodeValue = (CS < 0? 0: CS) + "%";
	CS = Math.floor(percent+(85+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[7].firstChild.nodeValue = (CS < 0? 0: CS) + "%";
	CS = Math.floor(percent+(85+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[8].firstChild.nodeValue = (CS < 0? 0: CS) + "%";
	CS = Math.floor(percent+(85+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[9].firstChild.nodeValue = (CS < 0? 0: CS) + "%";
}

function calcEnemy()
{
	var CS=0;
	var clvl = parseInt(document.SelectStats.Clvl.options[document.SelectStats.Clvl.selectedIndex].value);
	var diff = parseInt(document.SelectStats.Diff.options[document.SelectStats.Diff.selectedIndex].value);
	var cClass = document.SelectStats.cClass.options[document.SelectStats.cClass.selectedIndex].text;
	var dex = parseInt(document.SelectStats.cClass.options[document.SelectStats.cClass.selectedIndex].value);
	var attack = document.SelectStats.Attack.options[document.SelectStats.Attack.selectedIndex].value;
	var bonus;
	if (cClass == "Warrior")
	{
		if (attack == "melee")
		{
			bonus=20;
		}
		else if (attack == "arrow")
		{
			bonus=10;
		}
		else
		{
			bonus=0;
		}
	}
	else if (cClass == "Rogue")
	{
		if (attack == "arrow")
		{
			bonus=20;
		}
		else
		{
			bonus=0;
		}
	}
	else if (cClass == "Sorcerer")
	{
		bonus=0;
	}
	var percent = parseInt(document.SelectStats.Percent.options[document.SelectStats.Percent.selectedIndex].value);
	var TD = document.getElementById("EnemyCS").getElementsByTagName("td");

	//lava maws
	CS = Math.floor(percent+(35+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[6].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(35+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[7].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(35+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[8].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(35+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[9].firstChild.nodeValue = (CS < 0? 0: CS);

	//storm lord
	CS = Math.floor(percent+(35+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[11].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(35+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[12].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(35+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[13].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(35+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[14].firstChild.nodeValue = (CS < 0? 0: CS);

	//maelstorm
	CS = Math.floor(percent+(40+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[16].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(40+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[17].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(40+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[18].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(40+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[19].firstChild.nodeValue = (CS < 0? 0: CS);

	//guardian
	CS = Math.floor(percent+(65+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[21].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[22].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[23].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[24].firstChild.nodeValue = (CS < 0? 0: CS);

	//vortex lord
	CS = Math.floor(percent+(70+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[26].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(70+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[27].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(70+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[28].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(70+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[29].firstChild.nodeValue = (CS < 0? 0: CS);

	//balrog
	CS = Math.floor(percent+(75+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[31].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[32].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[33].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[34].firstChild.nodeValue = (CS < 0? 0: CS);

	//cave viper
	CS = Math.floor(percent+(60+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[36].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(60+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[37].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(60+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[38].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(60+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[39].firstChild.nodeValue = (CS < 0? 0: CS);

	//fire drake
	CS = Math.floor(percent+(65+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[41].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[42].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[43].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[44].firstChild.nodeValue = (CS < 0? 0: CS);

	//gold viper
	CS = Math.floor(percent+(70+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[46].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(70+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[47].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(70+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[48].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(70+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[49].firstChild.nodeValue = (CS < 0? 0: CS);

	//azure drake
	CS = Math.floor(percent+(75+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[51].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[52].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[53].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[54].firstChild.nodeValue = (CS < 0? 0: CS);

	//succubus
	CS = Math.floor(percent+(60+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[56].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(60+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[57].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(60+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[58].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(60+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[59].firstChild.nodeValue = (CS < 0? 0: CS);

	//snow witch
	CS = Math.floor(percent+(65+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[61].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[62].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[63].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(65+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[64].firstChild.nodeValue = (CS < 0? 0: CS);

	//hell spawn
	CS = Math.floor(percent+(75+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[66].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[67].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[68].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[69].firstChild.nodeValue = (CS < 0? 0: CS);

	//soul burner
	CS = Math.floor(percent+(85+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[71].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(85+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[72].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(85+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[73].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(85+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[74].firstChild.nodeValue = (CS < 0? 0: CS);

	//black knight
	CS = Math.floor(percent+(75+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[76].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[77].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[78].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[79].firstChild.nodeValue = (CS < 0? 0: CS);

	//doom guard
	CS = Math.floor(percent+(75+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[81].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[82].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[83].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(75+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[84].firstChild.nodeValue = (CS < 0? 0: CS);

	//steel lord
	CS = Math.floor(percent+(80+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[86].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(80+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[87].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(80+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[88].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(80+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[89].firstChild.nodeValue = (CS < 0? 0: CS);

	//blood knight
	CS = Math.floor(percent+(85+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[91].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(85+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[92].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(85+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[93].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(85+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[94].firstChild.nodeValue = (CS < 0? 0: CS);

	//counselor
	CS = Math.floor(percent+(0+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[96].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[97].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[98].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[99].firstChild.nodeValue = (CS < 0? 0: CS);

	//magistrate
	CS = Math.floor(percent+(0+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[101].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[102].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[103].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[104].firstChild.nodeValue = (CS < 0? 0: CS);

	//cabalist
	CS = Math.floor(percent+(0+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[106].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[107].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[108].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[109].firstChild.nodeValue = (CS < 0? 0: CS);

	//advocate
	CS = Math.floor(percent+(0+diff)-30-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[111].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-40-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[112].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-50-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[113].firstChild.nodeValue = (CS < 0? 0: CS);
	CS = Math.floor(percent+(0+diff)-clvl-bonus+(attack == "arrow"? 25-dex/2: 0));
	TD[114].firstChild.nodeValue = (CS < 0? 0: CS);

	//averages
	var ave1=0, ave2=0, ave3=0, ave4=0;
	for (i=6; i<=111; i=i+5)
	{
		ave1 += parseInt(TD[i].firstChild.nodeValue);
		ave2 += parseInt(TD[i+1].firstChild.nodeValue);
		ave3 += parseInt(TD[i+2].firstChild.nodeValue);
		ave4 += parseInt(TD[i+3].firstChild.nodeValue);
	}
	TD[121].firstChild.nodeValue = Math.floor(ave1/22) + "%";
	TD[122].firstChild.nodeValue = Math.floor(ave2/22) + "%";
	TD[123].firstChild.nodeValue = Math.floor(ave3/22) + "%";
	TD[124].firstChild.nodeValue = Math.floor(ave4/22) + "%";
}
