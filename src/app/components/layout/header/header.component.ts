import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/services/shared.service';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/services/data.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs-compat';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  socialUser: SocialUser | any;
  countries = []
  country = new FormControl();
  filteredCountries: Observable<any> | any;
  subscriptionCountry: Subscription | any;
  firstName: any;
  lastName: any;
  constructor(private socialAuthService: SocialAuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private sharedService: SharedService,
    private dataService: DataService) {

  }
  ngOnDestroy(): void {
    this.subscriptionCountry.unsubscribe()
  }
  ngOnInit() {
    this.getUser();
    this.getCountries();
    this.getFilteredCountries();
    this.firstName = localStorage.getItem("firstName")
    this.lastName = localStorage.getItem("lastName")
  }

  filterCountries(value: string): any {
    if (value.length >= 3) {
      const filterValue = value.toLowerCase();
      return this.countries.filter((state: any) => state.properties.name.toLowerCase().indexOf(filterValue) === 0)
    }
  }

  getFilteredCountries() {
    this.filteredCountries = this.country.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterCountries(state) : [])
      );
  }

  getUser() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
    });
  }

  getCountries() {
    this.subscriptionCountry = this.dataService
      .get(`${environment.url}/countries`)
      .subscribe((data: any) => {
        this.countries = data;
      });
  }

  onSelectionChange(e: any) {
    this.sharedService.changeCountry(e.option.value)
  }

  displayFn(state: any) {
    if (state) {
      return state.properties.name;
    }
  }

  signOut(): void {
    this.toastr.warning('Oturum kapanıyor...', 'Bildirim');
    this.socialAuthService.signOut().then(data => {
      this.router.navigate(['/login'], { relativeTo: this.route });
      this.toastr.success('Başarıyla çıkış yapıldı.', 'Bildirim');
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
    }).catch(error => {
      if (error = "Not logged in") {
        this.router.navigate(['/login'], { relativeTo: this.route });
        this.toastr.warning('Tekrar giriş yapınız.', 'Bildirim');
      }
    });


  }

}
