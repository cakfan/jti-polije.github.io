var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
const monthNames = ["Januari", "Februari", "Maret", "April", "Mai", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
var today = dd+' '+monthNames[mm-1] + ' '+yyyy;

var nama_hari = new Array ("Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu");
   // Calculate the total number of days, with taking care of leapyear 
   var totalDays = dd + (2*mm) + parseInt(3*(mm+1)/5) + year + parseInt(yyyy/4) - parseInt(yyyy/100) + parseInt(yyyy/400) + 2;
   // Mod of the total number of days with 7 gives us the day number
   var dayNo = (totalDays%7);
   // if the resultant mod of 7 is 0 then its Saturday so assign the dayNo to 7
   if(dayNo == 0){
        dayNo = 7;
   }
 var hari = nama_hari[dayNo - 2];
 console.log(hari+", "+today);
 $('.soon .masehi').text(hari+", "+today);
