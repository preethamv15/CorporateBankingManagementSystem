import { LoginComponent } from './login';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  it('should create', () => {
    const component = new LoginComponent(
      { login: () => of({ token: 'abc', role: 'RM' }) } as any,
      { navigateByUrl: () => {} } as any
    );
    expect(component).toBeTruthy();
  });
});
