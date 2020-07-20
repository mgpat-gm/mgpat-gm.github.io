function updat()
{
	calcMa();
	calcEnem();
}

function calcMa()
{
	var AC=0;
	var clvl = parseInt(document.SelectStat.Cclvl.options[document.SelectStat.Cclvl.selectedIndex].value);
	var diff = parseInt(document.SelectStat.Dif.options[document.SelectStat.Dif.selectedIndex].value);
	var bonus;
	if (diff == 0)
	{
		bonus = 0;
	}
	if (diff == 85)
	{
		bonus = 15;
	}
	if (diff == 120)
	{
		bonus = 30;
	}
	var percent = parseInt(document.SelectStat.Percen.options[document.SelectStat.Percen.selectedIndex].value);
	var TD = document.getElementById("MaxAC").getElementsByTagName("td");

	AC = (percent < 30? -30: -percent)+30+(130+diff)+2*((30+bonus)-30);
	TD[6].firstChild.nodeValue = AC;
	AC = (percent < 30? -30: -percent)+30+(130+diff)+2*((30+bonus)-40);
	TD[7].firstChild.nodeValue = AC;
	AC = (percent < 30? -30: -percent)+30+(130+diff)+2*((30+bonus)-50);
	TD[8].firstChild.nodeValue = AC;
	AC = (percent < 30? -30: -percent)+30+(130+diff)+2*((30+bonus)-clvl);
	TD[9].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((30+bonus)-30);
	TD[11].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((30+bonus)-40);
	TD[12].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((30+bonus)-50);
	TD[13].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((30+bonus)-clvl);
	TD[14].firstChild.nodeValue = AC;
}

function calcEnem()
{
	var AC=0;
	var clvl = parseInt(document.SelectStat.Cclvl.options[document.SelectStat.Cclvl.selectedIndex].value);
	var diff = parseInt(document.SelectStat.Dif.options[document.SelectStat.Dif.selectedIndex].value);
	var bonus;
	if (diff == 0)
	{
		bonus = 0;
	}
	if (diff == 85)
	{
		bonus = 15;
	}
	if (diff == 120)
	{
		bonus = 30;
	}
	var percent = parseInt(document.SelectStat.Percen.options[document.SelectStat.Percen.selectedIndex].value);
	var TD = document.getElementById("EnemyAC").getElementsByTagName("td");

	//lava maws
	AC = (percent < 15? -15: -percent)+30+(65+diff)+2*((25+bonus)-30);
	TD[6].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(65+diff)+2*((25+bonus)-40);
	TD[7].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(65+diff)+2*((25+bonus)-50);
	TD[8].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(65+diff)+2*((25+bonus)-clvl);
	TD[9].firstChild.nodeValue = AC;

	//storm lord
	AC = (percent < 15? -15: -percent)+30+(85+diff)+2*((22+bonus)-30);
	TD[11].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(85+diff)+2*((22+bonus)-40);
	TD[12].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(85+diff)+2*((22+bonus)-50);
	TD[13].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(85+diff)+2*((22+bonus)-clvl);
	TD[14].firstChild.nodeValue = AC;

	//maelstorm
	AC = (percent < 15? -15: -percent)+30+(90+diff)+2*((24+bonus)-30);
	TD[16].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(90+diff)+2*((24+bonus)-40);
	TD[17].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(90+diff)+2*((24+bonus)-50);
	TD[18].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(90+diff)+2*((24+bonus)-clvl);
	TD[19].firstChild.nodeValue = AC;

	//guardian
	AC = (percent < 15? -15: -percent)+30+(110+diff)+2*((22+bonus)-30);
	TD[21].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(110+diff)+2*((22+bonus)-40);
	TD[22].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(110+diff)+2*((22+bonus)-50);
	TD[23].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(110+diff)+2*((22+bonus)-clvl);
	TD[24].firstChild.nodeValue = AC;

	//vortex lord
	AC = (percent < 15? -15: -percent)+30+(120+diff)+2*((24+bonus)-30);
	TD[26].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(120+diff)+2*((24+bonus)-40);
	TD[27].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(120+diff)+2*((24+bonus)-50);
	TD[28].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(120+diff)+2*((24+bonus)-clvl);
	TD[29].firstChild.nodeValue = AC;

	//balrog
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((26+bonus)-30);
	TD[31].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((26+bonus)-40);
	TD[32].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((26+bonus)-50);
	TD[33].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((26+bonus)-clvl);
	TD[34].firstChild.nodeValue = AC;

	//cave viper
	AC = (percent < 15? -15: -percent)+30+(90+diff)+2*((21+bonus)-30);
	TD[36].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(90+diff)+2*((21+bonus)-40);
	TD[37].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(90+diff)+2*((21+bonus)-50);
	TD[38].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(90+diff)+2*((21+bonus)-clvl);
	TD[39].firstChild.nodeValue = AC;

	//fire drake
	AC = (percent < 15? -15: -percent)+30+(105+diff)+2*((23+bonus)-30);
	TD[41].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(105+diff)+2*((23+bonus)-40);
	TD[42].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(105+diff)+2*((23+bonus)-50);
	TD[43].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(105+diff)+2*((23+bonus)-clvl);
	TD[44].firstChild.nodeValue = AC;

	//gold viper
	AC = (percent < 15? -15: -percent)+30+(120+diff)+2*((25+bonus)-30);
	TD[46].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(120+diff)+2*((25+bonus)-40);
	TD[47].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(120+diff)+2*((25+bonus)-50);
	TD[48].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(120+diff)+2*((25+bonus)-clvl);
	TD[49].firstChild.nodeValue = AC;

	//azure drake
	AC = (percent < 25? -25: -percent)+30+(130+diff)+2*((27+bonus)-30);
	TD[51].firstChild.nodeValue = AC;
	AC = (percent < 25? -25: -percent)+30+(130+diff)+2*((27+bonus)-40);
	TD[52].firstChild.nodeValue = AC;
	AC = (percent < 25? -25: -percent)+30+(130+diff)+2*((27+bonus)-50);
	TD[53].firstChild.nodeValue = AC;
	AC = (percent < 25? -25: -percent)+30+(130+diff)+2*((27+bonus)-clvl);
	TD[54].firstChild.nodeValue = AC;

	//black knight
	AC = (percent < 15? -15: -percent)+30+(110+diff)+2*((24+bonus)-30);
	TD[56].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(110+diff)+2*((24+bonus)-40);
	TD[57].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(110+diff)+2*((24+bonus)-50);
	TD[58].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(110+diff)+2*((24+bonus)-clvl);
	TD[59].firstChild.nodeValue = AC;

	//doom guard
	AC = (percent < 25? -25: -percent)+30+(130+diff)+2*((26+bonus)-30);
	TD[61].firstChild.nodeValue = AC;
	AC = (percent < 25? -25: -percent)+30+(130+diff)+2*((26+bonus)-40);
	TD[62].firstChild.nodeValue = AC;
	AC = (percent < 25? -25: -percent)+30+(130+diff)+2*((26+bonus)-50);
	TD[63].firstChild.nodeValue = AC;
	AC = (percent < 25? -25: -percent)+30+(130+diff)+2*((26+bonus)-clvl);
	TD[64].firstChild.nodeValue = AC;

	//steel lord
	AC = (percent < 20? -20: -percent)+30+(120+diff)+2*((28+bonus)-30);
	TD[66].firstChild.nodeValue = AC;
	AC = (percent < 20? -20: -percent)+30+(120+diff)+2*((28+bonus)-40);
	TD[67].firstChild.nodeValue = AC;
	AC = (percent < 20? -20: -percent)+30+(120+diff)+2*((28+bonus)-50);
	TD[68].firstChild.nodeValue = AC;
	AC = (percent < 20? -20: -percent)+30+(120+diff)+2*((28+bonus)-clvl);
	TD[69].firstChild.nodeValue = AC;

	//blood knight
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((30+bonus)-30);
	TD[71].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((30+bonus)-40);
	TD[72].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((30+bonus)-50);
	TD[73].firstChild.nodeValue = AC;
	AC = (percent < 15? -15: -percent)+30+(130+diff)+2*((30+bonus)-clvl);
	TD[74].firstChild.nodeValue = AC;

	//averages
	var ave1=0, ave2=0, ave3=0, ave4=0;
	for (i=6; i<=71; i=i+5)
	{
		ave1 += parseInt(TD[i].firstChild.nodeValue);
		ave2 += parseInt(TD[i+1].firstChild.nodeValue);
		ave3 += parseInt(TD[i+2].firstChild.nodeValue);
		ave4 += parseInt(TD[i+3].firstChild.nodeValue);
	}
	TD[81].firstChild.nodeValue = Math.floor(ave1/14);
	TD[82].firstChild.nodeValue = Math.floor(ave2/14);
	TD[83].firstChild.nodeValue = Math.floor(ave3/14);
	TD[84].firstChild.nodeValue = Math.floor(ave4/14);
}
