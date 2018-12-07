const statusFeed = [
    {
        ProfPic: require('../images/ProfPic/profpic_toped.png'),
        Name: 'Tokopedia',
        Follower: 156124,
        DatePosted: '1m',
        StatusContent: 'Being able to take part in the growth of Indonesia tech industries always excite us!',
        Likes: 66,
        Comments: 21
    },
    {
        ProfPic: require('../images/ProfPic/profpic_bukalapak.png'),
        Name: 'Bukalapak',
        Follower: 64832,
        DatePosted: '15m',
        StatusContent: 'This month, Google For Indonesia held the 3rd annual event in Jakarta. In the spirit of “Maju Rame-Rame”, Google announced a variety of products and partnerships that will make technology more useful and relevant for Indonesians in this fast-paced and practical digital economy era.',
        Likes: 115,
        Comments: 1
    },
    {
        ProfPic: require('../images/ProfPic/profpic_badr.png'),
        Name: 'PT. Badr Interactive',
        Follower: 423,
        DatePosted: '2j 4m',
        StatusContent: 'Badr Interactive is a web and mobile applications developer. We helped our clients to build customized technology solutions, from e-commerce to e-learning, from corporate website to the sophisticated asset integrity management systems, from apps installed in your mobile to SaaS in the cloud. As January 2016, we have done more than 120 projects from various backgrounds, ranging from private companies to government agencies.',
        Likes: 12,
        Comments: 1
    },
]

const Experience = [
    {
        Thumbnail: require('../images/ProfPic/profpic_reston.png'),
        Name: 'PT. Reston Business Solution',
        Title: 'Freelance UI/UX Designer',
        YearStart: 'Oct 2017',
        YearEnd: 'Oct 2018',
        Time: '1 yr'
    },
    {
        Thumbnail: require('../images/ProfPic/profpic_badr.png'),
        Name: 'PT. Badr Interactive',
        Title: 'Intern UI/UX Designer',
        YearStart: 'May 2017',
        YearEnd: 'Sep 2017',
        Time: '5 mo'
    },
]

const Education = [
    {
        Thumbnail: require('../images/ProfPic/profpic_pnj.png'),
        Name: 'Politeknik Negeri Jakarta',
        Title: 'D4 Teknik Multimedia dan Jaringan',
        YearStart: '2014',
        YearEnd: '2018',
        Time: '4 yrs'
    },
    {
        Thumbnail: require('../images/ProfPic/profpic_dm.png'),
        Name: 'MA Darul Marhamah',
        Title: 'IPA',
        YearStart: '2010',
        YearEnd: '2013',
        Time: '3 yrs'
    },
]

const Contact = [
    {
        Thumbnail: require('../images/info_linkedin.png'),
        Title: 'Your LinkedIn',
        Content: 'www.linkedin.com/tazirahmb'
    },
    {
        Thumbnail: require('../images/info_mail.png'),
        Title: 'Email',
        Content: 'tazirahmb@outlook.com'
    },
    {
        Thumbnail: require('../images/info_phone.png'),
        Title: 'Phone Number',
        Content: '(+62) 816-889-880'
    },
]

const Messages = [
    {
        Thumbnail: require('../images/ProfPic/profpic_angdini.jpeg'),
        Title: 'Angdini Dea',
        Content: 'Halo Tazirah, selamat datang di Arkademy'
    },
    {
        Thumbnail: require('../images/ProfPic/profpic_isgi.jpg'),
        Title: 'Isgi Arriza',
        Content: '- Task 2 Grand Bootcamp -'
    },
    {
        Thumbnail: require('../images/ProfPic/profpic_rizka.jpg'),
        Title: 'Rizka Aristiyanti',
        Content: 'Zir, cara install unity di android gimana sih?'
    },
]

const friendRecommendation = [
    {
        Thumbnail: require('../images/ProfPic/profpic_rizka.jpg'),
        Name: 'Rizka Aristiyanti',
        Title: 'Product Executive at EMC Group'

    },
    {
        Thumbnail: require('../images/ProfPic/profpic_angdini.jpeg'),
        Name: 'Angdini Dea',
        Title: 'HR at Arkademy'

    },
    {
        Thumbnail: require('../images/ProfPic/profpic_isgi.jpg'),
        Name: 'Isgi Arriza',
        Title: 'Android Developer at Zahir.id'

    },
    {
        Thumbnail: require('../images/ProfPic/profpic_bayu.jpg'),
        Name: 'Muhammad Bayu Saputro',
        Title: 'Back-end Engineer at Tokopedia'

    },
    {
        Thumbnail: require('../images/ProfPic/profpic_fitra.jpeg'),
        Name: 'Muhammad Fitra Aditama',
        Title: 'Senior Web Developer at Rekeningku'

    },
    {
        Thumbnail: require('../images/ProfPic/profpic_risman.jpeg'),
        Name: 'Risman',
        Title: 'Back End Engineer at SCTV'

    },
    {
        Thumbnail: require('../images/ProfPic/profpic_arif.jpeg'),
        Name: 'Arif Muhammad',
        Title: 'Front End Engineer at Traveloka'
    }
]

const notification = [
    {
        Thumbnail: require('../images/notif_company.png'),
        Text: 'Kami mungkin menemukan pekerjaan yang anda minati di PT. Arkademy',
        Button: 'LIHAT PEKERJAAN'
    },
    {
        Thumbnail: require('../images/notif_people.png'),
        Text: 'Lima orang melihat status anda',
        Button: 'CEK SIAPA YANG MELIHAT'
    },
]

const splashComponent = [
    {text: 'Share your professional profile', Image: require('../images/splash1.jpg')},
    {text: 'Build relationships to unlock opportunity', Image: require('../images/splash2.jpg')},
    {text: 'Stay informed on topics, industries and people you care about', Image: require('../images/splash3.jpg')},
    {text: 'A more personal way to find jobs', Image: require('../images/splash4.jpg')},
]

export {
    statusFeed,
    splashComponent,
    Education,
    Experience,
    Contact,
    Messages,
    friendRecommendation,
    notification
};