import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

enum PAYMENT_TYPES {
  FIXEDPAY,
  PAYPERHOUR,
  PAYPERWIN,
}

@Component({
  selector: 'app-add-scholarship',
  templateUrl: './add-scholarship.component.html',
  styleUrls: ['./add-scholarship.component.scss'],
})
export class AddScholarshipComponent implements OnInit {
  p_types = PAYMENT_TYPES;

  progress = 1;
  readonly maxProgress = 5;
  readonly minProgress = 1;

  paymentTypes = {
    [PAYMENT_TYPES.FIXEDPAY]: 'Fixed Pay',
    [PAYMENT_TYPES.PAYPERHOUR]: 'Pay Per Hour',
    [PAYMENT_TYPES.PAYPERWIN]: 'Pay Per Win',
  };

  paymentType: string = this.paymentTypes[PAYMENT_TYPES.FIXEDPAY];
  title = '';
  description = '';
  budget = 0;

  constructor(
    private api: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.getScholars();
  }

  onPaymentTypeSelect(type: PAYMENT_TYPES) {
    this.paymentType = this.paymentTypes[type];
  }
  nextProgress() {
    if (this.progress < this.maxProgress) this.progress++;
  }
  backProgress() {
    if (this.progress > this.minProgress) {
      this.progress--;
    }
  }

  async postScholarship() {
    try {
      const managerId = await this.userService.getUserId();
      const res = this.api
        .addScholarship(
          this.title,
          this.description,
          this.paymentType,
          'SLP',
          this.budget,
          managerId
        )
        .toPromise() as any;

      this.router.navigate(['/scholarships']);
    } catch (e) {
      this.router.navigate(['/addScholarship']);
    }
  }
}
