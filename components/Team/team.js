(function(){
    const teamSection = document.getElementById('team');
    teamSection.classlist = 'team section';
    const container = document.createElement('div');
    container.classList.add('container');
    teamSection.appendChild(container);

    const row = document.createElement('div');
    row.classList = 'row gy-4';
    container.appendChild(row);

    const teamMembers = [
        {
            name: 'Pavel Perebillo',
            position: 'CEO, Co-Founder, Light Designer',
            image: '../assets/img/team/pavel.png',
            x: '',
            facebook: '',
            instagram: '', 
            linkedin: ''
        },
        {
            name: 'Eric Gray',
            position: 'CFO, Co-Founder, Light Designer',
            image: '../assets/img/team/eric.png',
            x: '',
            facebook: '',
            instagram: '', 
            linkedin: ''
        },
        {
            name: 'Sallie Apple',
            position: 'Operations Manager',
            image: '../assets/img/team/sallie.png',
            x: '',
            facebook: '',
            instagram: '', 
            linkedin: ''
        },
        {
            name: 'John Charron',
            position: 'Sales Manager, Scenic Designer, Light Designer',
            image: '../assets/img/team/john.png',
            x: '',
            facebook: '',
            instagram: '', 
            linkedin: ''
        }
    ];
    teamMembers.forEach(member => {
        const col = document.createElement('div');
        col.classList = 'col-lg-3 col-md-6 d-flex align-items-stretch';
        col.setAttribute('data-aos', 'fade-up');
        col.setAttribute('data-aos-delay', '100');
        row.appendChild(col);

        const teamMember = document.createElement('div');
        teamMember.classList = 'team-member';
        col.appendChild(teamMember);

        const memberImg = document.createElement('div');
        memberImg.classList = 'member-img';
        const img = document.createElement('img');
        img.src = member.image;
        img.classList = 'img-fluid';
        memberImg.appendChild(img);
        teamMember.appendChild(memberImg);

        const social = document.createElement('div');
        social.classList = 'social';
        const socialLinks = [
            { icon: 'bi bi-twitter-x', href: member.x },
            { icon: 'bi bi-facebook', href: member.facebook },
            { icon: 'bi bi-instagram', href: member.instagram },
            { icon: 'bi bi-linkedin', href: member.linkedin }
        ];

        socialLinks.forEach(link => {
            const a = document.createElement('a');
            const i = document.createElement('i');
            i.classList = link.icon;
            a.href = link.href;
            a.appendChild(i);
            social.appendChild(a);
    });
        memberImg.appendChild(social);

        const memberInfo = document.createElement('div');
        memberInfo.classList = 'member-info';
        teamMember.appendChild(memberInfo);
        const name = document.createElement('h4');
        name.textContent = member.name;
        memberInfo.appendChild(name);
        const positions = member.position.split(', ');
        positions.forEach(pos => {
            const span = document.createElement('span');
            span.textContent = pos;
            memberInfo.appendChild(span);
        });
    });
})();