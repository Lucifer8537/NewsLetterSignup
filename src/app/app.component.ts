import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  email!: string;
  emailValid = true;
  submittedEmail = false;
  isDesktopView!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isDesktopView = !result.matches;
      });
  }

  validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.emailValid = !!emailRegex.test(this.email);
  };

  submitEmail = () => {
    this.validateEmail();
    if (this.emailValid) {
      this.submittedEmail = true;
    } else {
      this.submittedEmail = false;
    }
  };

  dismissMessageClick = () => {
    this.email = '';
    this.emailValid = true;
    this.submittedEmail = false;
  };
}
