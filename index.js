let flag = 0;
function shownavbar() {
    if (flag == 0) {
        flag = 1;
        document.getElementsByClassName("nav")[0].setAttribute("id", "shownavbar");
    }
    else {
        flag = 0;
        document.getElementsByClassName("nav")[0].removeAttribute("id");
    }
}
let string = new Typed('#element', {
    strings: ['<div class="name">Python Programmer ........</div>', '<div class="name">LeetCoder ........</div>', '<div class="name">Web Developer ........</div>', '<div class="name">Django Developer ........</div>'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});
document.getElementsByClassName("work-buttons")[0].addEventListener("click", () => {
    document.getElementsByClassName("work-data")[0].firstElementChild.setAttribute("src", "images/profile photo.png");
    document.getElementsByClassName("work-data")[0].firstElementChild.setAttribute("alt", "my_imgage");
    document.getElementsByClassName("work-data")[0].lastElementChild.innerText = `
    This is the last step before selection, where the interview begins with a general introduction question. While talking about myself, I focused on my project-based learning experience and took the discussion towards what I learned. Thou it was a 30-minute interview, the discussion itself took 25 minutes in my case. After this, they move to basic DSA questions, where they check my logic-building and problem-solving skills by providing some set of data and asking questions around it. The questions were again not too hard, ranging between easy to medium level. After 2-3 DSA questions, they stepped into development. In this section, they checked my development knowledge by asking questions about what they had thought in the sessions. Most of the questions were from javascript and node.js. Moving towards the end of the interview they asked about the assignment that they asked to solve in the previous days.
            `;
});
document.getElementsByClassName("work-buttons")[1].addEventListener("click", () => {
    document.getElementsByClassName("work-data")[0].firstElementChild.setAttribute("src", "images/codequotient.jpeg");
    document.getElementsByClassName("work-data")[0].firstElementChild.setAttribute("alt", "CodeQuotient_image"); document.getElementsByClassName("work-data")[0].lastElementChild.innerText = `
    Completed a 45-day industrial training program at CodeQuotient, where I developed multiple web development projects, tackled data structures and algorithms problems, and honed critical thinking skills in problem-solving. This experience enriched my technical proficiency, enhanced my analytical capabilities, and prepared me for complex challenges in the tech industry. Additionally, I gained practical exposure, a deeper understanding of industry standards, and valuable teamwork experience, collaborating effectively with peers and mentors in a professional environment.
    `;
});
document.querySelectorAll('input,textarea').forEach((element) => {
    const label = element.nextElementSibling;

    const class_adder = () => {
        if (element.value == '') {
            label.removeAttribute('class');
        }
        else {
            label.setAttribute('class', 'label-active');
        }
    }
    element.addEventListener('input', class_adder);
});

function SendMail() {
    var elementdata = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        message: document.getElementById('message').value,
    }
    console.log(elementdata);
    emailjs.send("service_hdggm94","template_b7smqjj", elementdata).then(function (res) {
        alert("Success !" + res.status)
    }).catch(function (error) {
        console.error("Failed to send email:", error);
    });
}
