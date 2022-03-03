function avgdps(theForm) {
    var space1 = "       ";
    var space2 = "     ";
    
    if(theForm.basetype.value == "sword") {
    theForm.display.value = "Suffix:              " + "Warrior:    " + "Rogue:    " + "Sorcerer:" + "\nNormal & Readiness:  " + parseFloat(theForm.avg.value / .45).toFixed(2) + space1 + parseFloat(theForm.avg.value / .5).toFixed(2) + space2 + parseFloat(theForm.avg.value / .6).toFixed(2) + "\nSwiftness:           " + parseFloat(theForm.avg.value / .4).toFixed(2) + space1 + parseFloat(theForm.avg.value / .45).toFixed(2) + space2 + parseFloat(theForm.avg.value / .55).toFixed(2) + "\nSpeed & Haste:       " + parseFloat(theForm.avg.value / .35).toFixed(2) + space1 + parseFloat(theForm.avg.value / .4).toFixed(2) + space2 + parseFloat(theForm.avg.value / .5).toFixed(2);
    }
    
    if(theForm.basetype.value == "axe") {
    theForm.display.value = "Suffix:              " + "Warrior:    " + "Rogue:    " + "Sorcerer:" + "\nNormal & Readiness:  " + parseFloat(theForm.avg.value / .5).toFixed(2) + space1 + parseFloat(theForm.avg.value / .65).toFixed(2) + space2 + parseFloat(theForm.avg.value / .8).toFixed(2) + "\nSwiftness:           " + parseFloat(theForm.avg.value / .45).toFixed(2) + space1 + parseFloat(theForm.avg.value / .6).toFixed(2) + space2 + parseFloat(theForm.avg.value / .75).toFixed(2) + "\nSpeed & Haste:       " + parseFloat(theForm.avg.value / .4).toFixed(2) + space1 + parseFloat(theForm.avg.value / .55).toFixed(2) + space2 + parseFloat(theForm.avg.value / .7).toFixed(2);
    }
    
    if(theForm.basetype.value == "staff") {
    theForm.display.value = "Suffix:              " + "Warrior:    " + "Rogue:    " + "Sorcerer:" + "\nNormal & Readiness:  " + parseFloat(theForm.avg.value / .55).toFixed(2) + space1 + parseFloat(theForm.avg.value / .55).toFixed(2) + space2 + parseFloat(theForm.avg.value / .6).toFixed(2) + "\nSwiftness:           " + parseFloat(theForm.avg.value / .5).toFixed(2) + space1 + parseFloat(theForm.avg.value / .5).toFixed(2) + space2 + parseFloat(theForm.avg.value / .55).toFixed(2) + "\nSpeed & Haste:       " + parseFloat(theForm.avg.value / .45).toFixed(2) + space1 + parseFloat(theForm.avg.value / .45).toFixed(2) + space2 + parseFloat(theForm.avg.value / .5).toFixed(2);
    }
    
    if(theForm.basetype.value == "bow") {
    theForm.display.value = "Suffix:              " + "Warrior:    " + "Rogue:    " + "Sorcerer:" + "\nNormal & Readiness:  " + parseFloat(theForm.avg.value / .55).toFixed(2) + space1 + parseFloat(theForm.avg.value / .35).toFixed(2) + space2 + parseFloat(theForm.avg.value / .8).toFixed(2) + "\nSwiftness:           " + parseFloat(theForm.avg.value / .5).toFixed(2) + space1 + parseFloat(theForm.avg.value / .3).toFixed(2) + space2 + parseFloat(theForm.avg.value / .75).toFixed(2);
    }
}
