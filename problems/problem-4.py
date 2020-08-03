"""
MS Excel column titles have the following pattern: A, B, C, ..., Z, AA, AB, ..., AZ, BA, BB, ..., ZZ, AAA, AAB, ... etc.
In other words, column 1 is named "A", column 2 is "B", column 26 is "Z", column 27 is "AA" and so forth.
Given a positive integer, find its corresponding column name.
"""

class Solution:
    def convertToTitle(self, n):
        numero = n
        column_title = ""
        
        while numero > 0:
            if numero % 26 != 0:
                column_title += (chr((96 + (numero % 26))).upper())
                numero = numero // 26
            else:
                column_title += chr(122).upper()
                numero = numero // 26 - 1
       
        return column_title[::-1]


input1 = 1
input2 = 456976
input3 = 28
print(Solution().convertToTitle(input1))
# A
print(Solution().convertToTitle(input2))
# YYYZ
print(Solution().convertToTitle(input3))
# AB
