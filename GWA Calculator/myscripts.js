function calculate()
{
var Fi,Ma,Sc,En,Ap,res,nm;
Fi=Number(document.form1.Fil.value);
En=Number(document.form1.Eng.value);
Ma=Number(document.form1.Math.value);
Sc=Number(document.form1.Scie.value);
Ap=Number(document.form1.AP.value);

res=(Fi+Ma+Sc+En+Ap)/5;
document.form1.Res.value=res;

  
}
