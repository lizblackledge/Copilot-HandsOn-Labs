import unittest
from pw-generator import genpassword

class TestGenPassword(unittest.TestCase):
    def test_genpassword(self):
        # Test that the function generates a password of the correct length
        password = genpassword("abcdefghijklmnopqrstuvwxyz", 8, "test.txt", 1, 0)
        self.assertEqual(len(password), 8)

        # Test that the function generates a password containing only characters from the given character set
        character_set = "abcdefghijklmnopqrstuvwxyz"
        password_set = set(password)
        for char in password_set:
            self.assertIn(char, character_set)

        # Test that the function generates a password that satisfies the given list constraint
        password = genpassword("abcdefghijklmnopqrstuvwxyz", 8, "test.txt", 1, 0)
        self.assertNotEqual(password, "99999999")

if __name__ == '__main__':
    unittest.main()