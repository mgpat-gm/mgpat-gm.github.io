function AcCalc(theForm){
 var myAc = theForm.base.value*1;
 var myAcRate = 1 + theForm.acrate.value*0.01;

 theForm.ac.value = Math.floor(myAc * myAcRate);
}
