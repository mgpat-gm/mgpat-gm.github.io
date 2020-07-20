function updated()
{
	calcM();
	calcEne();
}

function calcM()
{
	var DEX=0;
	var clvl = parseInt(document.SelectSta.Chlvl.options[document.SelectSta.Chlvl.selectedIndex].value);
	var diff = parseInt(document.SelectSta.Diph.options[document.SelectSta.Diph.selectedIndex].value);
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
	var percent = parseInt(document.SelectSta.Perce.options[document.SelectSta.Perce.selectedIndex].value);
	var TD = document.getElementById("MaxDEX").getElementsByTagName("td");

	DEX = percent+2*((30+bonus)-30);
	TD[6].firstChild.nodeValue = DEX;
	DEX = percent+2*((30+bonus)-40);
	TD[7].firstChild.nodeValue = DEX;
	DEX = percent+2*((30+bonus)-50);
	TD[8].firstChild.nodeValue = DEX;
	DEX = percent+2*((30+bonus)-clvl);
	TD[9].firstChild.nodeValue = DEX;
}

function calcEne()
{
	var DEX=0;
	var clvl = parseInt(document.SelectSta.Chlvl.options[document.SelectSta.Chlvl.selectedIndex].value);
	var diff = parseInt(document.SelectSta.Diph.options[document.SelectSta.Diph.selectedIndex].value);
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
	var percent = parseInt(document.SelectSta.Perce.options[document.SelectSta.Perce.selectedIndex].value);
	var TD = document.getElementById("EnemyDEX").getElementsByTagName("td");

	//lava maws
	DEX = percent+2*((25+bonus)-30);
	TD[6].firstChild.nodeValue = DEX;
	DEX = percent+2*((25+bonus)-40);
	TD[7].firstChild.nodeValue = DEX;
	DEX = percent+2*((25+bonus)-50);
	TD[8].firstChild.nodeValue = DEX;
	DEX = percent+2*((25+bonus)-clvl);
	TD[9].firstChild.nodeValue = DEX;

	//storm lord
	DEX = percent+2*((22+bonus)-30);
	TD[11].firstChild.nodeValue = DEX;
	DEX = percent+2*((22+bonus)-40);
	TD[12].firstChild.nodeValue = DEX;
	DEX = percent+2*((22+bonus)-50);
	TD[13].firstChild.nodeValue = DEX;
	DEX = percent+2*((22+bonus)-clvl);
	TD[14].firstChild.nodeValue = DEX;

	//maelstorm
	DEX = percent+2*((24+bonus)-30);
	TD[16].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-40);
	TD[17].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-50);
	TD[18].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-clvl);
	TD[19].firstChild.nodeValue = DEX;

	//guardian
	DEX = percent+2*((22+bonus)-30);
	TD[21].firstChild.nodeValue = DEX;
	DEX = percent+2*((22+bonus)-40);
	TD[22].firstChild.nodeValue = DEX;
	DEX = percent+2*((22+bonus)-50);
	TD[23].firstChild.nodeValue = DEX;
	DEX = percent+2*((22+bonus)-clvl);
	TD[24].firstChild.nodeValue = DEX;

	//vortex lord
	DEX = percent+2*((24+bonus)-30);
	TD[26].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-40);
	TD[27].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-50);
	TD[28].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-clvl);
	TD[29].firstChild.nodeValue = DEX;

	//balrog
	DEX = percent+2*((26+bonus)-30);
	TD[31].firstChild.nodeValue = DEX;
	DEX = percent+2*((26+bonus)-40);
	TD[32].firstChild.nodeValue = DEX;
	DEX = percent+2*((26+bonus)-50);
	TD[33].firstChild.nodeValue = DEX;
	DEX = percent+2*((26+bonus)-clvl);
	TD[34].firstChild.nodeValue = DEX;

	//cave viper
	DEX = percent+2*((21+bonus)-30);
	TD[36].firstChild.nodeValue = DEX;
	DEX = percent+2*((21+bonus)-40);
	TD[37].firstChild.nodeValue = DEX;
	DEX = percent+2*((21+bonus)-50);
	TD[38].firstChild.nodeValue = DEX;
	DEX = percent+2*((21+bonus)-clvl);
	TD[39].firstChild.nodeValue = DEX;

	//fire drake
	DEX = percent+2*((23+bonus)-30);
	TD[41].firstChild.nodeValue = DEX;
	DEX = percent+2*((23+bonus)-40);
	TD[42].firstChild.nodeValue = DEX;
	DEX = percent+2*((23+bonus)-50);
	TD[43].firstChild.nodeValue = DEX;
	DEX = percent+2*((23+bonus)-clvl);
	TD[44].firstChild.nodeValue = DEX;

	//gold viper
	DEX = percent+2*((25+bonus)-30);
	TD[46].firstChild.nodeValue = DEX;
	DEX = percent+2*((25+bonus)-40);
	TD[47].firstChild.nodeValue = DEX;
	DEX = percent+2*((25+bonus)-50);
	TD[48].firstChild.nodeValue = DEX;
	DEX = percent+2*((25+bonus)-clvl);
	TD[49].firstChild.nodeValue = DEX;

	//azure drake
	DEX = percent+2*((27+bonus)-30);
	TD[51].firstChild.nodeValue = DEX;
	DEX = percent+2*((27+bonus)-40);
	TD[52].firstChild.nodeValue = DEX;
	DEX = percent+2*((27+bonus)-50);
	TD[53].firstChild.nodeValue = DEX;
	DEX = percent+2*((27+bonus)-clvl);
	TD[54].firstChild.nodeValue = DEX;

	//black knight
	DEX = percent+2*((24+bonus)-30);
	TD[56].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-40);
	TD[57].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-50);
	TD[58].firstChild.nodeValue = DEX;
	DEX = percent+2*((24+bonus)-clvl);
	TD[59].firstChild.nodeValue = DEX;

	//doom guard
	DEX = percent+2*((26+bonus)-30);
	TD[61].firstChild.nodeValue = DEX;
	DEX = percent+2*((26+bonus)-40);
	TD[62].firstChild.nodeValue = DEX;
	DEX = percent+2*((26+bonus)-50);
	TD[63].firstChild.nodeValue = DEX;
	DEX = percent+2*((26+bonus)-clvl);
	TD[64].firstChild.nodeValue = DEX;

	//steel lord
	DEX = percent+2*((28+bonus)-30);
	TD[66].firstChild.nodeValue = DEX;
	DEX = percent+2*((28+bonus)-40);
	TD[67].firstChild.nodeValue = DEX;
	DEX = percent+2*((28+bonus)-50);
	TD[68].firstChild.nodeValue = DEX;
	DEX = percent+2*((28+bonus)-clvl);
	TD[69].firstChild.nodeValue = DEX;

	//blood knight
	DEX = percent+2*((30+bonus)-30);
	TD[71].firstChild.nodeValue = DEX;
	DEX = percent+2*((30+bonus)-40);
	TD[72].firstChild.nodeValue = DEX;
	DEX = percent+2*((30+bonus)-50);
	TD[73].firstChild.nodeValue = DEX;
	DEX = percent+2*((30+bonus)-clvl);
	TD[74].firstChild.nodeValue = DEX;

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
