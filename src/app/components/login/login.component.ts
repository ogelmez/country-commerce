import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  socialUser: SocialUser | any;
  constructor(private socialAuthService: SocialAuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  signIn(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data => {
      localStorage.setItem("firstName",data.firstName)
      localStorage.setItem("lastName",data.lastName)
      this.router.navigate(['/dashboard'], { relativeTo: this.route });
      this.toastr.success('Başarıyla giriş yapıldı.', 'Bildirim');

    });
  }


}
