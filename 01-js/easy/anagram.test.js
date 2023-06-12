const isAnagram = require('./anagram')

describe('isAnagram', () => {
    it('should return true for anagrams', () => {
      expect(isAnagram('listen', 'silent')).toBe(true);
      expect(isAnagram('race', 'care')).toBe(true);
    });
  
    it('should return false for non-anagrams', () => {
      expect(isAnagram('hello', 'world')).toBe(false);
      expect(isAnagram('test', 'text')).toBe(false);
    });
  
    it('should be case-insensitive', () => {
      expect(isAnagram('Listen', 'Silent')).toBe(true);
      expect(isAnagram('Race', 'Care')).toBe(true);
    });
  
    it('should ignore spaces and punctuation', () => {
      expect(isAnagram('a gentleman', 'elegant man')).toBe(true);
      expect(isAnagram("an actor's cue", 'a stone cur')).toBe(true);
    });
  });
  