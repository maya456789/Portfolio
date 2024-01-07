import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Boston Finance ',
      desc: 'Boston advisory financial group is one of the most demanded outsouring partners for accounting and financial consulting purpose.',
      livedemo: 'https://bostonfagroup.com/#/',

      mediumlink: 'https://bostonfagroup.com/#/why-bfag',
      imgUrl: 'assets/images/bfag.png',
      tech: 'Angular16 ,Bootstrap 5 ,Html5 ,css'
    },

    {
      id: 2,
      title: 'Anubandh',
      desc: 'Anubandh is matromonial website to find best life partner.',
      livedemo: 'http://anubandh.ezii.live/',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/anubandh.jpg',
      tech: 'Angular,Bootstrap'
    },


    {
      id: 3,
      title: 'CRUD operation using Angular and node',
      desc: 'Perform CRUD operation with JWT Authentication',
      livedemo: 'https://github.com/maya456789/matApp/tree/master',
      githurl: 'https://github.com/maya456789/matApp/tree/master',
      mediumlink: '',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MySql, Express'
    },



  ]
  about2 = `Software Developer with 1 years (Internship) experience .
  Expertise in Angular 7+ All versions, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Angular Material, Bootstrap and MYSQL`

  about = "Like to work on Web Development.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '75%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '60%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '60%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'BOOTSTRAP,ANGULAR MATERIAL',
      'progress': '65%'
    },
    {
      'id': '6',
      'skill': 'WORDPRESS,REACT',
      'progress': '40%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2014 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Ag Patil Institute of technology is having Diploma and Engg. colllege in Solapur
Completed B.E in Computer Engineering with 8.1 CGPA with 61%.
`,
      'institution': 'AG PATIL INSTITUTE OF TECHNOLOGY, SOLAPUR ,MAHARASHTRA'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Destek Infosolution private limited',
      location: 'Pune',
      timeline: 'Jun 2023 to Sep 2023',
      role: 'Software Developer (Intern)',
      work: 'Working as a front end developer .Responsible for handling the UI in Angular and Managing the api calls from node.'

    },
    {
      id: 3,
      company: 'Narmadai Sotware Technology',
      location: 'Pune',
      timeline: 'April 2022 to Sep 2022',
      role: 'Software Developer (Intern)',
      work: `Technologies : Angular  .
      Worked on the web application built in Angular for different business and Campaigns .
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

    {
      id: 1,
      company: 'HalcionMinds Tech LLP',
      location: 'Pune',
      timeline: 'August 2021 - Sep 2021',
      role: 'Front End Developer  Trainee',
      work: `Technologies : Angular , Bootstrap  .


  Worked on UI forms , providing validations , making them responsive.
  `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
