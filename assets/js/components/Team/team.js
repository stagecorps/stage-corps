(function () {
    const teamSection = document.getElementById('team');
    const teamMembers = [
        {
            name: 'Pavel Perebillo',
            positions: ['CEO', 'Co-Founder', 'Light Designer'],
            image: '../assets/img/team/pavel.png',
            x: '',
            facebook: '',
            instagram: '',
            linkedin: ''
        },
        {
            name: 'Eric Gray',
            positions: ['CFO', 'Co-Founder', 'Light Designer'],
            image: '../assets/img/team/eric.png',
            x: '',
            facebook: '',
            instagram: '',
            linkedin: ''
        },
        {
            name: 'Sallie Apple',
            positions: ['Operations Manager'],
            image: '../assets/img/team/sallie.png',
            x: '',
            facebook: '',
            instagram: '',
            linkedin: ''
        },
        {
            name: 'John Charron',
            positions: ['Sales Manager', 'Scenic Designer', 'Light Designer'],
            image: '../assets/img/team/john.png',
            x: '',
            facebook: '',
            instagram: '',
            linkedin: ''
        }
    ];
    teamSection.innerHTML = `
<div class="container section-title" data-aos="fade-up">
    <h2>Team</h2>
</div><!-- End Section Title -->

<div class="container">

    <div class="row gy-4">

    ${teamMembers.map(member=>{
        return `
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
                <div class="member-img">
                    <img src=${member.image} class="img-fluid" alt="">
                    <div class="social">
                        <a href=${member.x}><i class="bi bi-twitter-x"></i></a>
                        <a href=${member.facebook}><i class="bi bi-facebook"></i></a>
                        <a href=${member.instagram}><i class="bi bi-instagram"></i></a>
                        <a href=${member.linkedin}><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div class="member-info">
                    <h4>${member.name}</h4>
                    ${member.positions.map(pos => `<span>${pos}</span>`).join('')}
                </div>
            </div>
        </div>
        `
    }).join('')}

    </div>

</div>`
})();