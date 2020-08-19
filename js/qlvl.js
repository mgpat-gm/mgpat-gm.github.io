var specialIlvl = function(clvl) {
	if(clvl<10)      return 6; 
  else if(clvl<12) return 7;
  else if(clvl<14) return 8;
  else if(clvl<16) return 9;
  else if(clvl<18) return 10;
  else if(clvl<20) return 11;
  else if(clvl<22) return 12;
  else if(clvl<24) return 13;
  else if(clvl<26) return 14;
  else if(clvl<28) return 15;
  else return 16;
}

var grisMinMaxIlvl=function(qlvl){return Math.max(1, Math.min(qlvl, 30));};
var calcGriswoldsBaseQlvl = function(ilvl){
  ilvl = grisMinMaxIlvl(ilvl);
	return grisMinMaxIlvl(parseInt(ilvl/4)) + "-" + Math.min(25,ilvl);
};

var calcGriswoldsAffixQlvl = function(ilvl){
  ilvl = grisMinMaxIlvl(ilvl);
	return grisMinMaxIlvl(parseInt(ilvl/2)) + "-" + ilvl
};

var calcGriswoldsMinMaxQlvls = function(clvl){
	if(clvl>30)
return `qlvl range for affixes for each slot:
Slot 1:  ${calcGriswoldsAffixQlvl(30-1)}
Slot 2:  ${calcGriswoldsAffixQlvl(30-1)}
Slot 3:  ${calcGriswoldsAffixQlvl(clvl)}
Slot 4:  ${calcGriswoldsAffixQlvl(clvl)}
Slot 5:  ${calcGriswoldsAffixQlvl(clvl+1)}
Slot 6:  ${calcGriswoldsAffixQlvl(clvl+2)}
qlvl range for base items for each slot:
Slot 1:  ${calcGriswoldsBaseQlvl(30-1)}
Slot 2:  ${calcGriswoldsBaseQlvl(30-1)}
Slot 3:  ${calcGriswoldsBaseQlvl(clvl)}
Slot 4:  ${calcGriswoldsBaseQlvl(clvl)}
Slot 5:  ${calcGriswoldsBaseQlvl(clvl+1)}
Slot 6:  ${calcGriswoldsBaseQlvl(clvl+2)}`;
	else
return `qlvl range for affixes for each slot:
Slot 1:  ${calcGriswoldsAffixQlvl(clvl-1)}
Slot 2:  ${calcGriswoldsAffixQlvl(clvl-1)}
Slot 3:  ${calcGriswoldsAffixQlvl(clvl)}
Slot 4:  ${calcGriswoldsAffixQlvl(clvl)}
Slot 5:  ${calcGriswoldsAffixQlvl(clvl+1)}
Slot 6:  ${calcGriswoldsAffixQlvl(clvl+2)}
qlvl range for base items for each slot:
Slot 1:  ${calcGriswoldsBaseQlvl(clvl-1)}
Slot 2:  ${calcGriswoldsBaseQlvl(clvl-1)}
Slot 3:  ${calcGriswoldsBaseQlvl(clvl)}
Slot 4:  ${calcGriswoldsBaseQlvl(clvl)}
Slot 5:  ${calcGriswoldsBaseQlvl(clvl+1)}
Slot 6:  ${calcGriswoldsBaseQlvl(clvl+2)}`;
}

var calcWirtQlvls = function (clvl){
	return `qlvl range for base items:  1-${Math.min(clvl,25)}
qlvl range for affixes:  ${Math.min(clvl,25)}-${Math.min(2*clvl,60)}`
}

var calcAdriaQlvls = function (clvl){
	var ilvl = specialIlvl(clvl);
	return `qlvl range of base items and spells (of staffs or books):  1-${ilvl}
qlvl range for prefixes on staffs with spell:  1-${2*ilvl}
qlvl range for affixes on staffs without spell:  ${ilvl}-${2*ilvl}`
}


$(function(){
	$("#calc").on("submit",function(e){
  	e.preventDefault();
    var clvl = parseInt($("#clvl").val());
  	$("#grisresult").html(calcGriswoldsMinMaxQlvls(clvl));
    $("#wirtresult").html(calcWirtQlvls(clvl));
    $("#adriaresult").html(calcAdriaQlvls(clvl));
  });
})
