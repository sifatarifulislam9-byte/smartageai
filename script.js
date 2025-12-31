function calculateAge(){
    let dob = document.getElementById("dob").value;
    if(!dob){
        alert("Please select your date of birth");
        return;
    }

    let birth = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if(days < 0){
        months--;
        days += 30;
    }

    if(months < 0){
        years--;
        months += 12;
    }

    let diff = today - birth;
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    document.getElementById("result").innerHTML = `
        <b>Your Exact Age:</b><br>
        ${years} Years ${months} Months ${days} Days<br><br>
        <b>Fun Stats:</b><br>
        ${hours} Hours lived<br>
        ${minutes} Minutes lived<br>
        ${seconds} Seconds lived
    `;
}
