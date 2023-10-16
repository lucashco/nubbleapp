import {stringUtils} from '../stringUtils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each words', () => {
      expect(stringUtils.capitalizeFirsLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirsLetter('AnA mARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirsLetter('ana mariA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirsLetter('maRia')).toBe('Maria');
    });

    it('should remove leading and trailing spaces', () => {
      expect(stringUtils.capitalizeFirsLetter('  Ana mariA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirsLetter('Ana mariA  ')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirsLetter('  Ana mariA  ')).toBe(
        'Ana Maria',
      );
    });
  });
});
