# 03 Strange Kebab

## Author Details

-   Name : Raul
-   Surname: Bercea
-   Mail: raul.bercea@edu.itspiemonte.it

## Excercise requirements
Add a method to the String prototype called toStrangeKebab() that transforms strings to kebab-case

```javascript
// Given the following array
const source = [
 'MyNameIsMyPassportVerifyMe',
 'My Name Is My Passport Verify Me MMM',
 ' -- -My?Name&*is**my$$Passport???p??',
 'mY--name--- is- - 2023---',
 'mynameismypassport',
 '2022 my name is',
 '2024-my-name-is'
];

source.forEach(item => console.log(item.toStrangeKebab()));
```
The output should exactly match this:
```
my-name-is-my-passport-verify-me
my-name-is-my-passport-verify-me-m-m-m
my-name-is-my-passport-p
m-y-name-is-2023
mynameismypassport
my-name-is
my-name-is
```
## Aproach to Solution 

in order to add the method to the String object i've used prototype the way to modify strings in javascript is to use regular expressions to find matches in the string and using the replace method swapping them with the appropriate characters