var jobs = {
    "jobs": [
    {
        "title": "Washing  Dishes",
        "duration": "1-8 hours",
    },
    {
        "title": "Plating Food",
        "duration": "1-8 hours",
    }, 
    {
        "title": "Kitchen Staff",
        "duration": "1-8 hours",
    },
    {
        "title": "Security",
        "duration": "1-8 hours",
    }, 
    {
        "title": "Cleaning",
        "duration": "1-8 hours",
    },
    {
        "title": "Social Media Managing",
        "duration": "1-8 hours",
    },
    ]
}

let i = 0;

for(let job of jobs.jobs) {
    let jobTitle = job.title;
    let jobDuration = job.duration;
    let jobRow = document.createElement("tr");
    let jobTitleCell = document.createElement("td");
    let jobDurationCell = document.createElement("td");
    let jobApplyCell = document.createElement("td");
    const button = document.createElement("button");
    button.innerHTML = "Apply Now"
    jobTitleCell.innerHTML = jobTitle;
    jobDurationCell.innerHTML = jobDuration;
    jobRow.appendChild(jobTitleCell);
    jobRow.appendChild(jobDurationCell);
    jobApplyCell.appendChild(button);
    jobRow.appendChild(jobApplyCell);
    document.getElementsByTagName("table")[0].appendChild(jobRow);
    
    button.addEventListener('click', (e) => {
        button.innerHTML = "Applied"
        button.disabled = true;
        alert(`Thank you for applying for ` + jobTitle + `!\n\nWe will get back to you in regards to your application within 72 hours.\n\nThank you for helping us HelpAlong.`);
        i = i + 1;
        document.getElementById("applied").innerHTML = "Applied For: " + i + " Job(s)";
    })
}