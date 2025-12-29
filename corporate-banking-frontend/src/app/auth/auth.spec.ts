import { AuthService } from './auth';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('AuthService', () => {
  let service: AuthService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should login', () => {
    service.login('a', 'b').subscribe();

    const req = http.expectOne('http://localhost:8080/api/auth/login');
    req.flush({ token: 'x', role: 'RM' });
  });

  it('should register', () => {
    service.register('u', 'e', 'p', 'RM').subscribe();

    const req = http.expectOne('http://localhost:8080/api/auth/register');
    req.flush({});
  });
});
