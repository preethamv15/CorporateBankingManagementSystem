import { NavbarComponent } from './navbar';
import { vi } from 'vitest';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let router: any;

  beforeEach(() => {
    router = {
      navigate: vi.fn()
    };
    component = new NavbarComponent(router);
  });

  it('should return true when logged in', () => {
    localStorage.setItem('token', 'abc');
    expect(component.isLoggedIn()).toBe(true);
  });

  it('should return false when logged out', () => {
    localStorage.clear();
    expect(component.isLoggedIn()).toBe(false);
  });

  it('should logout user', () => {
    localStorage.setItem('token', 'abc');

    component.logout();

    expect(localStorage.getItem('token')).toBe(null);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
