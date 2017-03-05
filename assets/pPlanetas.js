function pesoPlanetas(peso_t){

 peso_t=  document.getElementById('pTierra').value;

  var mercurio = ((peso_t * 2.8)/9.8).toFixed(2);
  var venus = ((peso_t * 8.9)/9.8).toFixed(2);
  var marte = ((peso_t * 3.7)/9.8).toFixed(2);
  var  jupiter =( (peso_t * 22.9)/9.8).toFixed(2);
  var saturno = ((peso_t * 9.1)/9.8).toFixed(2)
  var urano = ((peso_t * 7.8) /9.8).toFixed(2);
  var neptuno = ((peso_t * 11.0) /9.8).toFixed(2);

  alert ("tu peso en otros planetas son los siguientes:" + "\n" + "\n"
          + "En Mercurio: " + mercurio + "\n"
          + "En Venus: " + venus + "\n"
          + "En Marte: " + marte + "\n "   + "En Jupiter: " + jupiter  + "\n En Saturno: " + saturno +
          "\nEn Urano: " + urano + "\n"   +  "En Neptuno: " + neptuno )};
