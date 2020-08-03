"""
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
"""

class Solution:
    def reverseWords(self, str):
        array = str[::-1].split(" ")
        return (" ").join(array[::-1])

print(Solution().reverseWords("The cat in the hat"))
# ehT tac ni eht tah

