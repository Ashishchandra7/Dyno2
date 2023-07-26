import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {

  isShowDiv = true;
  showotpform= false;
  reactiveForm!: FormGroup;
  formSubmitted = false;
  timeStart: number =120;
  showLoginButton:boolean=true
  otpForm!: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder) {}


  ngOnInit(){
    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.required, 
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+.[a-zA-Z]+@tibilsolutions.com$')])
    });
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(4)]],
    });

  }


  toggleDisplayDiv() {  
    let result=this.onSubmit();
    if(result){
      this.isShowDiv = false;
      this.showotpform = !this.showotpform
    }
    this.onSubmit();
   
    this.startTime()
    
  }  
  login(){
    this.router.navigate(['home']);
  }

  get f() { return this.reactiveForm.get('email')?.value; }
  onSubmit(){
    this.formSubmitted = true;
    return this.reactiveForm.get('email')?.valid
  }
  
  startTime(){
    let  timeInterbval = setInterval(() =>{
      if(this.timeStart >0){
        this.timeStart--;
        this.updateTimer()
      }
      else {
        clearInterval(timeInterbval)
        this.showotpform=true;
        this.showLoginButton=false;
        this.startTime()
      }
    },1000)
  }
  
  
  updateTimer(){
    const minute = Math.floor(this.timeStart / 60)
    const seconds = this.timeStart%60;
    const displayTime =document.getElementById('timer')
    if(displayTime){
      displayTime.textContent=this.formatTime(minute) + ':' + this.formatTime(seconds)
    }
  }
  
  formatTime(time: number): string {
    return time < 10 ? '0' + time : String(time);
  }
  
  
}
