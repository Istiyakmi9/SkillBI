import { Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isEmail: boolean = false;
  isCoupon: boolean = false;
  courseCUrriculum: Array<any> = [{
    ModuleName: "WELCOME",
    Title: "Welcome to the course!",
    Course: [{
      Name: "Introduction",
      Duration: "01:42",
      Type: Type.Video
    }]
  }, {
    ModuleName: "MODULE1",
    Title: "Goal Setting and Work-Life Balance",
    Course: [{
      Name: "Introduction",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "What Makes You Happy?",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Balancing Your Life",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Ideal Life",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Goal Creation",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Ideal Day vs Actual Day Worksheet",
      Type: Type.Worksheet
    }, {
      Name: "Assignment",
      Type: Type.Assignemnt
    }]
  }, {
    ModuleName: "MODULE2",
    Title: "Time Management",
    Course: [{
      Name: "Introduction",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Tracking Your Time",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Using Time Wisely",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Homework",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Assignment",
      Type: Type.Assignemnt
    }]
  }, {
    ModuleName: "MODULE3",
    Title: "Time Management",
    Course: [{
      Name: "Introduction",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Tracking Your Time",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Using Time Wisely",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Homework",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Assignment",
      Type: Type.Assignemnt
    }]
  }, {
    ModuleName: "MODULE4",
    Title: "Time Management",
    Course: [{
      Name: "Introduction",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Tracking Your Time",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Using Time Wisely",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Homework",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Assignment",
      Type: Type.Assignemnt
    }]
  }, {
    ModuleName: "MODULE5",
    Title: "Time Management",
    Course: [{
      Name: "Introduction",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Tracking Your Time",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Using Time Wisely",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Homework",
      Duration: "00:42",
      Type: Type.Video
    }, {
      Name: "Assignment",
      Type: Type.Assignemnt
    }]
  }]

  faqDetail: Array<any> =[{
    Question: "Will Dhruv Rathee teach the class himself?",
    Ans: "Yes, this course is made up of pre-recorded video lessons by Dhruv Rathee."
  }, {
    Question: "Is this course for me?",
    Ans: "Whether you're a student, an employee, or a homemaker, this course is designed to appeal to individuals from all walks of life. It's an inclusive program that is tailored to meet the unique needs and interests of every individual, regardless of their background or profession."
  }, {
    Question: "Will I have access to the video recording once the course is over?",
    Ans: "Yes! You have lifetime access to everything in this course – including the video lessons, resources and access to your discussions."
  }, {
    Question: "Will I get a certificate, as proof of my learning?",
    Ans: "Yes! You will receive a digital ‘Certificate of Completion.’ We can’t wait for you to proudly share your achievements with your friends and family."
  }, {
    Question: "In which language will the course be taught?",
    Ans: "The course is taught in English."
  }, {
    Question: "Will Dhruv Rathee teach the class himself?",
    Ans: "Yes, this course is made up of pre-recorded video lessons by Dhruv Rathee."
  }, {
    Question: "Is this course for me?",
    Ans: "Whether you're a student, an employee, or a homemaker, this course is designed to appeal to individuals from all walks of life. It's an inclusive program that is tailored to meet the unique needs and interests of every individual, regardless of their background or profession."
  }, {
    Question: "Will I have access to the video recording once the course is over?",
    Ans: "Yes! You have lifetime access to everything in this course – including the video lessons, resources and access to your discussions."
  }, {
    Question: "Will I get a certificate, as proof of my learning?",
    Ans: "Yes! You will receive a digital ‘Certificate of Completion.’ We can’t wait for you to proudly share your achievements with your friends and family."
  }, {
    Question: "In which language will the course be taught?",
    Ans: "The course is taught in English."
  },]

  loginPopUp() {
    $("#loginModal").modal('show');
  }
}

enum Type {
  Video = 1,
  Worksheet = 2,
  Assignemnt = 3
}