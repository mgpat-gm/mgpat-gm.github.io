function avgdps(theForm) {
   
    theForm.display.value = "Suffix:" + "\nNormal & Readiness:" + "\nSwiftness:" + "\nSpeed & Haste:";
    
    if(theForm.basetype.value == "sword") {
    theForm.display1.value = "Warrior:" + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .4).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .35).toFixed(2);
    theForm.display2.value = "Rogue:" + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .4).toFixed(2);
    theForm.display3.value = "Sorcerer:" + "\n" + parseFloat(theForm.avg.value / .6).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2);
    theForm.display4.value = "Monk:" + "\n" + parseFloat(theForm.avg.value / .6).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2);
    theForm.display5.value = "Bard:" + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .4).toFixed(2);
    theForm.display6.value = "Barbarian:" + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2) + " / " + parseFloat(theForm.avg.value / .4).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .4).toFixed(2) + " / " + parseFloat(theForm.avg.value / .35).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .35).toFixed(2) + " / " + parseFloat(theForm.avg.value / .3).toFixed(2);
    }
    
    if(theForm.basetype.value == "axe") {
    theForm.display1.value = "Warrior:" + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .4).toFixed(2);
    theForm.display2.value = "Rogue:" + "\n" + parseFloat(theForm.avg.value / .65).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .6).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2);
    theForm.display3.value = "Sorcerer:" + "\n" + parseFloat(theForm.avg.value / .8).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .75).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .7).toFixed(2);
    theForm.display4.value = "Monk:" + "\n" + parseFloat(theForm.avg.value / .7).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .65).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .6).toFixed(2);
    theForm.display5.value = "Bard:" + "\n" + parseFloat(theForm.avg.value / .65).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .6).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2);
    theForm.display6.value = "Barbarian:" + "\n" + parseFloat(theForm.avg.value / .4).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .35).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .3).toFixed(2);
    }
    
    if(theForm.basetype.value == "staff") {
    theForm.display1.value = "Warrior:" + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2);
    theForm.display2.value = "Rogue:" + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2);
    theForm.display3.value = "Sorcerer:" + "\n" + parseFloat(theForm.avg.value / .6).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2);
    theForm.display4.value = "Monk:" + "\n" + parseFloat(theForm.avg.value / .4).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .35).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .3).toFixed(2);
    theForm.display5.value = "Bard:" + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2);
    theForm.display6.value = "Barbarian:" + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .45).toFixed(2);
    }
    
    if(theForm.basetype.value == "bow") {
    theForm.display1.value = "Warrior:" + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .5).toFixed(2);
    theForm.display2.value = "Rogue:" + "\n" + parseFloat(theForm.avg.value / .35).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .3).toFixed(2);
    theForm.display3.value = "Sorcerer:" + "\n" + parseFloat(theForm.avg.value / .8).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .75).toFixed(2);
    theForm.display4.value = "Monk:" + "\n" + parseFloat(theForm.avg.value / .7).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .7).toFixed(2);
    theForm.display5.value = "Bard:" + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2);
    theForm.display6.value = "Barbarian:" + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2) + "\n" + parseFloat(theForm.avg.value / .55).toFixed(2);
    }
}
