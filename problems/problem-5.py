"""
Given a string, determine if you can remove any character to create a palindrome.
"""

def create_palindrome(s):
    for i in range(len(s)):
        word = s[:i] + s[i+1:]
        if word == word[::-1]:
            return True

    return False



print(create_palindrome("abcdcbea"))
# True
print(create_palindrome("abccba"))
# True
print(create_palindrome("abccaa"))
# False
