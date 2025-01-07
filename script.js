function calculateAge() {
    const dob = document.getElementById('dob').value;
    const dobDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - dobDate.getFullYear();
    let month = today.getMonth() - dobDate.getMonth();
    let day = today.getDate() - dobDate.getDate();
    
    if (day < 0) {
        month--;
        day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (month < 0) {
        age--;
        month += 12;
    }
    
    document.getElementById('result').innerText = `You are ${age} years, ${month} months, and ${day} days old.`;
}
