// written by Joshua Colson, do not modify without permission
// v1.01

<!-- Hide script from older browsers

// Starting Attributes
WarriorStartMagic	= 10
WarriorStartVitality	= 25
RogueStartMagic		= 15
RogueStartVitality	= 20
SorcererStartMagic	= 35
SorcererStartVitality	= 20 
MonkStartMagic		= 15
MonkStartVitality	= 20 
BardStartMagic		= 20
BardStartVitality	= 20 
BarbarianStartMagic	= 0
BarbarianStartVitality	= 25

// Gains Per Level
WarriorLifeGain		= 2
WarriorManaGain		= 1 
RogueLifeGain		= 2
RogueManaGain		= 2 
SorcererLifeGain	= 1
SorcererManaGain	= 2 
MonkLifeGain		= 2
MonkManaGain		= 2 
BardLifeGain		= 2
BardManaGain		= 2 
BarbarianLifeGain	= 2
BarbarianManaGain	= 0

// Gains Per Character Attribute
WarriorLifeChar		= 2
WarriorManaChar		= 1 
RogueLifeChar		= 1
RogueManaChar		= 1 
SorcererLifeChar	= 1
SorcererManaChar	= 2 
MonkLifeChar		= 1
MonkManaChar		= 1 
BardLifeChar		= 1
BardManaChar		= 1.5 
BarbarianLifeChar	= 2
BarbarianManaChar	= 1

// Gains Per Item Attribute
WarriorLifeItem		= 2
WarriorManaItem		= 1 
RogueLifeItem		= 1.5
RogueManaItem		= 1.5 
SorcererLifeItem	= 1
SorcererManaItem	= 2 
MonkLifeItem		= 1.5
MonkManaItem		= 1.5 
BardLifeItem		= 1.5
BardManaItem		= 1.75 
BarbarianLifeItem	= 2.5
BarbarianManaItem	= 1

// Starting Bonus
WarriorLifeBonus	= 18
WarriorManaBonus	= -1 
RogueLifeBonus		= 23
RogueManaBonus		= 5
SorcererLifeBonus	= 9
SorcererManaBonus	= -2 
MonkLifeBonus		= 23
MonkManaBonus		= 5 
BardLifeBonus		= 23
BardManaBonus		= 3 
BarbarianLifeBonus	= 18
BarbarianManaBonus	= 0
	
// Attribute Maximums
WarriorMaxMagic		= 50
WarriorMaxVitality	= 100
RogueMaxMagic		= 70
RogueMaxVitality	= 80
SorcererMaxMagic	= 250
SorcererMaxVitality	= 80 
MonkMaxMagic		= 80
MonkMaxVitality		= 80 
BardMaxMagic		= 120
BardMaxVitality		= 100 
BarbarianMaxMagic	= 0
BarbarianMaxVitality	= 150


// Regular Expression for validating whole numbers.
Rexp = /^[+-]?\d+$/

// Regular Expression for seperating out fractions.
Rexp2 = /^(-?\d+)\.?(\d*)$/

// Regular Expression for the input of life and mana modifiers.
Rexp3 = /^([+-]\d+)*$/

// Regular Expression for the life and mana modifiers calculations.
Rexp47 = /^([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)$/

// Regular Expression for the life and mana modifiers calculations.
Rexp46 = /^([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)$/

// Regular Expression for the life and mana modifiers calculations.
Rexp45 = /^([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)$/

// Regular Expression for the life and mana modifiers calculations.
Rexp44 = /^([+-]\d+)([+-]\d+)([+-]\d+)([+-]\d+)$/

// Regular Expression for the life and mana modifiers calculations.
Rexp43 = /^([+-]\d+)([+-]\d+)([+-]\d+)$/

// Regular Expression for the life and mana modifiers calculations.
Rexp42 = /^([+-]\d+)([+-]\d+)$/

// Regular Expression for the life and mana modifiers calculations.
Rexp41 = /^([+-]\d+)$/


// Resets the form as a beginning character of the currently selected type.
function ResetForm(ResetClass)
	{
	LifeManaForm.CharLevel.value			= 1
	LifeManaForm.LifeMods.value			= ""
	LifeManaForm.ManaMods.value			= ""

	if(ResetClass.value == "Warrior")
	{
		LifeManaForm.BaseMagic.value		= WarriorStartMagic
		LifeManaForm.BaseVitality.value		= WarriorStartVitality
		LifeManaForm.FinalMagic.value		= WarriorStartMagic
		LifeManaForm.FinalVitality.value	= WarriorStartVitality
	}

	if(ResetClass.value == "Rogue")
	{
		LifeManaForm.BaseMagic.value		= RogueStartMagic
		LifeManaForm.BaseVitality.value		= RogueStartVitality
		LifeManaForm.FinalMagic.value		= RogueStartMagic
		LifeManaForm.FinalVitality.value	= RogueStartVitality
	}

	if(ResetClass.value == "Sorcerer")
	{
		LifeManaForm.BaseMagic.value		= SorcererStartMagic
		LifeManaForm.BaseVitality.value		= SorcererStartVitality
		LifeManaForm.FinalMagic.value		= SorcererStartMagic
		LifeManaForm.FinalVitality.value	= SorcererStartVitality
	}

	if(ResetClass.value == "Monk")
	{
		LifeManaForm.BaseMagic.value		= MonkStartMagic
		LifeManaForm.BaseVitality.value		= MonkStartVitality
		LifeManaForm.FinalMagic.value		= MonkStartMagic
		LifeManaForm.FinalVitality.value	= MonkStartVitality
	}

	if(ResetClass.value == "Bard")
	{
		LifeManaForm.BaseMagic.value		= BardStartMagic
		LifeManaForm.BaseVitality.value		= BardStartVitality
		LifeManaForm.FinalMagic.value		= BardStartMagic
		LifeManaForm.FinalVitality.value	= BardStartVitality
	}

	if(ResetClass.value == "Barbarian")
	{
		LifeManaForm.BaseMagic.value		= BarbarianStartMagic
		LifeManaForm.BaseVitality.value		= BarbarianStartVitality
		LifeManaForm.FinalMagic.value		= BarbarianStartMagic
		LifeManaForm.FinalVitality.value	= BarbarianStartVitality
	}

}

// Resets the form as a maxed out character of the currently selected type.
function MaxForm(ResetClass)
{
	LifeManaForm.CharLevel.value	= 50
	LifeManaForm.LifeMods.value	= ""
	LifeManaForm.ManaMods.value	= ""

	if(ResetClass.value == "Warrior")
	{
		LifeManaForm.BaseMagic.value		= WarriorMaxMagic
		LifeManaForm.BaseVitality.value		= WarriorMaxVitality
		LifeManaForm.FinalMagic.value		= WarriorMaxMagic
		LifeManaForm.FinalVitality.value	= WarriorMaxVitality
	}

	if(ResetClass.value == "Rogue")
	{
		LifeManaForm.BaseMagic.value		= RogueMaxMagic
		LifeManaForm.BaseVitality.value		= RogueMaxVitality
		LifeManaForm.FinalMagic.value		= RogueMaxMagic
		LifeManaForm.FinalVitality.value	= RogueMaxVitality
	}

	if(ResetClass.value == "Sorcerer")
	{
		LifeManaForm.BaseMagic.value		= SorcererMaxMagic
		LifeManaForm.BaseVitality.value		= SorcererMaxVitality
		LifeManaForm.FinalMagic.value		= SorcererMaxMagic
		LifeManaForm.FinalVitality.value	= SorcererMaxVitality
	}

	if(ResetClass.value == "Monk")
	{
		LifeManaForm.BaseMagic.value		= MonkMaxMagic
		LifeManaForm.BaseVitality.value		= MonkMaxVitality
		LifeManaForm.FinalMagic.value		= MonkMaxMagic
		LifeManaForm.FinalVitality.value	= MonkMaxVitality
	}

	if(ResetClass.value == "Bard")
	{
		LifeManaForm.BaseMagic.value		= BardMaxMagic
		LifeManaForm.BaseVitality.value		= BardMaxVitality
		LifeManaForm.FinalMagic.value		= BardMaxMagic
		LifeManaForm.FinalVitality.value	= BardMaxVitality
	}

	if(ResetClass.value == "Barbarian")
	{
		LifeManaForm.BaseMagic.value		= BarbarianMaxMagic
		LifeManaForm.BaseVitality.value		= BarbarianMaxVitality
		LifeManaForm.FinalMagic.value		= BarbarianMaxMagic
		LifeManaForm.FinalVitality.value	= BarbarianMaxVitality
	}

}
	
// Validates the form, then performs calculations and displays results
function GoButton()
{
	// Validating

	if(!Rexp.test(LifeManaForm.CharLevel.value))
	{
		var charl = document.getElementById('alert');
		charl.value = "Character Level must be a whole number.";
		return
	}

	if(!Rexp.test(LifeManaForm.BaseMagic.value))
	{
		var bmag = document.getElementById('alert');
		bmag.value = "Base Magic must be a whole number.";
		return
	}

	if(!Rexp.test(LifeManaForm.FinalMagic.value))
	{
		var fmag = document.getElementById('alert');
		fmag.value = "Final Magic must be a whole number.";
		return
	}

	if(!Rexp.test(LifeManaForm.BaseVitality.value))
	{
		var bvit = document.getElementById('alert');
		bvit.value = "Base Vitality must be a whole number.";
		return
	}

	if(!Rexp.test(LifeManaForm.FinalVitality.value))
	{
		var fvit = document.getElementById('alert');
		fvit.value = "Final Vitality must be a whole number.";
		return
	}

	if(!Rexp3.test(LifeManaForm.LifeMods.value))
	{
		var lifem = document.getElementById('alert');
		lifem.value = "Incorrect formatting of Life Modifiers.";
		return
	}

	if(!Rexp3.test(LifeManaForm.ManaMods.value))
	{
		var manam = document.getElementById('alert');
		manam.value = "Incorrect formatting of Mana Modifiers.";
		return
	}

	// Variables

	Life		= 0
	Mana		= 0
	Clvl		= LifeManaForm.CharLevel.value
	BaseM		= LifeManaForm.BaseMagic.value
	ItemM		= LifeManaForm.FinalMagic.value - BaseM
	BaseV		= LifeManaForm.BaseVitality.value
	ItemV		= LifeManaForm.FinalVitality.value - BaseV

	// Characters do not gain Life or Mana on reaching clvl 50
	if(Clvl == 50) Clvl = 49

	// Calculations for Life and Mana

	if(LifeManaForm.CharClass.value == "Warrior")
	{
		Life = (WarriorLifeBonus) + (Clvl * WarriorLifeGain) + (BaseV * WarriorLifeChar) + (ItemV * WarriorLifeItem)
		Mana = (WarriorManaBonus) + (Clvl * WarriorManaGain) + (BaseM * WarriorManaChar) + (ItemM * WarriorManaItem)
	}

	if(LifeManaForm.CharClass.value == "Rogue")
	{
		Life = (RogueLifeBonus) + (Clvl * RogueLifeGain) + (BaseV * RogueLifeChar) + (ItemV * RogueLifeItem)
		Mana = (RogueManaBonus) + (Clvl * RogueManaGain) + (BaseM * RogueManaChar) + (ItemM * RogueManaItem)

		Life = truncate(Life)
		Mana = truncate(Mana)
	}

	if(LifeManaForm.CharClass.value == "Sorcerer")
	{
		Life = (SorcererLifeBonus) + (Clvl * SorcererLifeGain) + (BaseV * SorcererLifeChar) + (ItemV * SorcererLifeItem)
		Mana = (SorcererManaBonus) + (Clvl * SorcererManaGain) + (BaseM * SorcererManaChar) + (ItemM * SorcererManaItem)
	}

	if(LifeManaForm.CharClass.value == "Monk")
	{
		Life = (MonkLifeBonus) + (Clvl * MonkLifeGain) + (BaseV * MonkLifeChar) + (ItemV * MonkLifeItem)
		Mana = (MonkManaBonus) + (Clvl * MonkManaGain) + (BaseM * MonkManaChar) + (ItemM * MonkManaItem)

		Life = truncate(Life)
		Mana = truncate(Mana)
	}

	if(LifeManaForm.CharClass.value == "Bard")
	{
		Life = (BardLifeBonus) + (Clvl * BardLifeGain) + (BaseV * BardLifeChar) + (ItemV * BardLifeItem)
		Mana = (BardManaBonus) + (Clvl * BardManaGain) + (BaseM * BardManaChar) + (ItemM * BardManaItem)

		Life = truncate(Life)
		Mana = truncate(Mana)
	}

	if(LifeManaForm.CharClass.value == "Barbarian")
	{
		Life = (BarbarianLifeBonus) + (Clvl * BarbarianLifeGain) + (BaseV * BarbarianLifeChar) + (ItemV * BarbarianLifeItem)
		Mana = (BarbarianManaBonus) + (Clvl * BarbarianManaGain) + (BaseM * BarbarianManaChar) + (ItemM * BarbarianManaItem)

		Life = truncate(Life)
	}

	// Account for Life modifiers on equipment
	if(Rexp41.exec(LifeManaForm.LifeMods.value))
	{
		Life = AddStringAsNum(Life, RegExp.$1)
	}

	else if(Rexp42.exec(LifeManaForm.LifeMods.value))
	{
		Life = AddStringAsNum(Life, RegExp.$1)
		Life = AddStringAsNum(Life, RegExp.$2)
	}

	else if(Rexp43.exec(LifeManaForm.LifeMods.value))
	{
		Life = AddStringAsNum(Life, RegExp.$1)
		Life = AddStringAsNum(Life, RegExp.$2)
		Life = AddStringAsNum(Life, RegExp.$3)
	}

	else if(Rexp44.exec(LifeManaForm.LifeMods.value))
	{
		Life = AddStringAsNum(Life, RegExp.$1)
		Life = AddStringAsNum(Life, RegExp.$2)
		Life = AddStringAsNum(Life, RegExp.$3)
		Life = AddStringAsNum(Life, RegExp.$4)
	}

	else if(Rexp45.exec(LifeManaForm.LifeMods.value))
	{
		Life = AddStringAsNum(Life, RegExp.$1)
		Life = AddStringAsNum(Life, RegExp.$2)
		Life = AddStringAsNum(Life, RegExp.$3)
		Life = AddStringAsNum(Life, RegExp.$4)
		Life = AddStringAsNum(Life, RegExp.$5)
	}

	else if(Rexp46.exec(LifeManaForm.LifeMods.value))
	{
		Life = AddStringAsNum(Life, RegExp.$1)
		Life = AddStringAsNum(Life, RegExp.$2)
		Life = AddStringAsNum(Life, RegExp.$3)
		Life = AddStringAsNum(Life, RegExp.$4)
		Life = AddStringAsNum(Life, RegExp.$5)
		Life = AddStringAsNum(Life, RegExp.$6)
	}

	else if(Rexp47.exec(LifeManaForm.LifeMods.value))
	{
		Life = AddStringAsNum(Life, RegExp.$1)
		Life = AddStringAsNum(Life, RegExp.$2)
		Life = AddStringAsNum(Life, RegExp.$3)
		Life = AddStringAsNum(Life, RegExp.$4)
		Life = AddStringAsNum(Life, RegExp.$5)
		Life = AddStringAsNum(Life, RegExp.$6)
		Life = AddStringAsNum(Life, RegExp.$7)
	}
		
	else if(LifeManaForm.LifeMods.value == "")
	{
		// Do nothing
	}

	else
	{
		var lifex = document.getElementById('alert');
		lifex.value = "You may only have up to 7 life modifiers.";
		return
	}

	// Account for Mana modifiers on equipment
	if(Rexp41.exec(LifeManaForm.ManaMods.value))
	{
		Mana = AddStringAsNum(Mana, RegExp.$1)
	}

	else if(Rexp42.exec(LifeManaForm.ManaMods.value))
	{
		Mana = AddStringAsNum(Mana, RegExp.$1)
		Mana = AddStringAsNum(Mana, RegExp.$2)
	}

	else if(Rexp43.exec(LifeManaForm.ManaMods.value))
	{
		Mana = AddStringAsNum(Mana, RegExp.$1)
		Mana = AddStringAsNum(Mana, RegExp.$2)
		Mana = AddStringAsNum(Mana, RegExp.$3)
	}

	else if(Rexp44.exec(LifeManaForm.ManaMods.value))
	{
		Mana = AddStringAsNum(Mana, RegExp.$1)
		Mana = AddStringAsNum(Mana, RegExp.$2)
		Mana = AddStringAsNum(Mana, RegExp.$3)
		Mana = AddStringAsNum(Mana, RegExp.$4)
	}

	else if(Rexp45.exec(LifeManaForm.ManaMods.value))
	{
		Mana = AddStringAsNum(Mana, RegExp.$1)
		Mana = AddStringAsNum(Mana, RegExp.$2)
		Mana = AddStringAsNum(Mana, RegExp.$3)
		Mana = AddStringAsNum(Mana, RegExp.$4)
		Mana = AddStringAsNum(Mana, RegExp.$5)
	}

	else if(Rexp46.exec(LifeManaForm.ManaMods.value))
	{
		Mana = AddStringAsNum(Mana, RegExp.$1)
		Mana = AddStringAsNum(Mana, RegExp.$2)
		Mana = AddStringAsNum(Mana, RegExp.$3)
		Mana = AddStringAsNum(Mana, RegExp.$4)
		Mana = AddStringAsNum(Mana, RegExp.$5)
		Mana = AddStringAsNum(Mana, RegExp.$6)
	}

	else if(Rexp47.exec(LifeManaForm.ManaMods.value))
	{
		Mana = AddStringAsNum(Mana, RegExp.$1)
		Mana = AddStringAsNum(Mana, RegExp.$2)
		Mana = AddStringAsNum(Mana, RegExp.$3)
		Mana = AddStringAsNum(Mana, RegExp.$4)
		Mana = AddStringAsNum(Mana, RegExp.$5)
		Mana = AddStringAsNum(Mana, RegExp.$6)
		Mana = AddStringAsNum(Mana, RegExp.$7)
	}

	else if(LifeManaForm.ManaMods.value == "")
	{
		// Do nothing
	}

	else
	{
		var manax = document.getElementById('alert');
		manax.value = "You may only have up to 7 mana modifiers.";
		return
	}

	// Display Output

	var OutString = document.getElementById('alert');
	OutString.value = "Your total Life should be: " + Life + "\nYour total Mana should be: " + Mana;
}

// truncates fractions (and keeps number from becoming a string using ++,-- routine)
function truncate(number)
{
	Rexp2.exec(number)
	temp = RegExp.$1
	temp++
	temp--
	return temp
}

// takes a string and convinces Javascript it is a number so it can be added
function AddStringAsNum(number, string)
{
	temp = string
	temp++
	temp--
	number += temp
	return number
}

// End hiding script -->
