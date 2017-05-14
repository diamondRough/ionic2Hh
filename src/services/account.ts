import { Injectable } from "@angular/core/src/di/metadata";
import "rxjs/Rx"
import { Request } from "./request";

@Injectable()
export class AccountService {

  constructor(private request: Request) {

  }

  current(): Promise<any> {
    return this.request.get('/api/account/current').toPromise();
  }
  loginWithPhone(account: { username: number, verify_code: string }): Promise<any> {
    return this.request.post('/account/login/with_phone', account).toPromise();
  }
}
