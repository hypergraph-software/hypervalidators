import {AbstractControl, FormControl} from '@angular/forms';
import {HyperValidators} from '../src/hypervalidators';

describe('HyperValidators', () => {
  describe('equalTo', () => {
    it('should not error if controls are equal',
      () => { expect(HyperValidators.equalTo(new FormControl(1))(new FormControl(1))).toBeNull(); });

    it('should pass if controls are same value but different types',
      () => { expect(HyperValidators.equalTo(new FormControl('1'))(new FormControl(1))).toBeNull(); });

    it('show fail if control values are not equal',
      () => { expect(HyperValidators.equalTo(new FormControl(1))(new FormControl(2))).toEqual({'equalTo': {'equalTo': 2, 'actual': 1}}); });
  });
  
  describe('identicalTo', () => {
    it('should not error if controls are equal',
      () => { expect(HyperValidators.identicalTo(new FormControl(1))(new FormControl(1))).toBeNull(); });

    it('should error if controls are same value but different types',
      () => { expect(HyperValidators.identicalTo(new FormControl('1'))(new FormControl(1))).toEqual({'identicalTo': {'identicalTo': 1, 'actual': '1'}}); });

    it('show fail if control values are not equal',
      () => { expect(HyperValidators.identicalTo(new FormControl(1))(new FormControl(2))).toEqual({'identicalTo': {'identicalTo': 2, 'actual': 1}}); });
  });
});
