import { Component, OnInit } from '@angular/core';
import {MainService} from  '../../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-audpress-creator',
  templateUrl: './audpress-creator.component.html',
  styleUrls: ['./audpress-creator.component.css']
})
export class AudpressCreatorComponent implements OnInit {

  constructor(private service: MainService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
    window.location.reload();
    this.router.navigate(['/auth']);
  }
}
