function calculateAge(){
   // your age calculation code...

   // After calculation success
   document.getElementById("dashboard").style.display = "block";
}
 

 let birth = new Date(dob);
 let now = new Date();

 let diff = now - birth;

 let years = Math.floor(diff / (1000*60*60*24*365.25));
 let months = Math.floor((diff % (1000*60*60*24*365.25)) / (1000*60*60*24*30));
 let days = Math.floor((diff % (1000*60*60*24*30)) / (1000*60*60*24));

 let zodiac = getZodiac(birth.getDate(), birth.getMonth()+1);

 document.getElementById("result").innerHTML = `
<b>Your Exact Age</b><br>
${years} Years ${months} Months ${days} Days <br><br>
<b>Zodiac Sign:</b> ${zodiac} <br>
<b>Birthday Countdown:</b> ${birthdayCountdown(birth)}
`;

document.getElementById("ai").innerHTML = `
<b>SmartAgeAI Insight 🤖</b><br>
You are unique, strong & full of potential. Use your time wisely —
great things are waiting ahead 🌍
`;
}

function birthdayCountdown(birth){
 let now = new Date();
 let next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
 if(next < now){ next.setFullYear(now.getFullYear()+1); }
 let diff = next - now;
 let days = Math.floor(diff / (1000*60*60*24));
 return days + " days left 🎂";
}

function getZodiac(d,m){
const z = [
["Capricorn",1,20],["Aquarius",2,19],["Pisces",3,20],
["Aries",4,20],["Taurus",5,21],["Gemini",6,21],
["Cancer",7,22],["Leo",8,23],["Virgo",9,23],
["Libra",10,23],["Scorpio",11,22],["Sagittarius",12,21],
["Capricorn",12,32]
];
return z.filter(r=>m==r[1]&&d<=r[2])[0][0];
}
