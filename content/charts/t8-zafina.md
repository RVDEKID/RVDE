---
date: '2024-11-15T14:01:57+02:00'
draft: false
title: 'T8-Zafina'
tags: ["Tekken 8"]
categories: ["Charts"]
---

### Strings
1,4> DF1   *TARA*<br>
1,3> 3,3>  B12  *SCR*<br>
1,3> 3,3> DF3,3   *SCR*<br>
1,3> D3,3    *SCR*<br>
1,3> 12D(hit)>DF1   *SCR* *TARA*<br>
1,3> 12D> 3> DF1(only if 3 hits)  *SCR* *TARA*<br>
3(hit)>D3,3     *SCR*<br>
3(block)B12  (quick highcrush low)   *SCR*<br>
3(block)DF3,3 (highcrush snake edge)  *SCR*<br>
1,2,3(hit)>12D> DF1    *SCR* *TARA*<br>
D3D> *MAN*4,3 (big launch)> *MAN*1,3> 1, DF1, FFF12, DF1  <br>
1,2> 12(CH)<br>
DF1> 12(CH)<br>
<br>
<br>

DF2, UF1, F2,3, (SC)DF1, FFF12, (t)DF1   62<br>
DF2, FF2, DF1, F2,3, (SC)DF1, FFF12, (t)DF1   65<br>
*MAN*4,3 (big launch)> *MAN*1,3> 1, DF1, FFF12, DF1   65<br>
DF23> F2,3, DF1, FFF12, DF1

## New Format cond

| move          | hits | start | block  | notes                                                                |
| ------------- | ---- | ----- | ------ | -------------------------------------------------------------------- |
| 1,2           | hh   | 10    | -3     | +8 on hit                                                            |
| 1,2,3         | hhh  | 10    | 0      | not natural, *SCROW*                                                 |
| **1,3**       | hh   | 10    | -2     | *SCROW*, +7, better than^since its guaranteed                        |
| **1,4**       | hm   | 10    | -5     | **SCREW** *TARA* +22. huge transition to tara on hit                 |
| **2,1**,3     | hml  | 10    |        | *MANTIS*, slow, hold D to cancel last hit directly to stance         |
| 2,2,12        | hmmm | 10    | -9     | trap for mashers, slow though                                        |
| 3             | h    | 13    | 0      | *SCROW*, can hold b to cancel stance but its -8                      |
| **12**,4,4    | mmm  | 16    | -11    | first hit a CH combo starter (catches jab after ur jab)              |
| **F2,3**,4    | mhm  | 19    | -18    | just do F2,3, goes to *SCROW*, is guaranteed and 0/+9 on hit         |
| F3            | h    | 21    | +3     | *SCROW* with +3. DF3/4 go under jabs after, own jab wins             |
| F12           | mm   | 19    | -9     | **HEAT**                                                             |
| DF1,4         | mh   | 13    | -6     | duckable but safe followup to DF1                                    |
| **DF3**,4     | mh   | 15    | -6     | DF3 good and +4 to *SCROW* on hit (4 is a natural followup tho)      |
| DF3,D4        | ml   | 15    |        | mediocre low followup but its still a low                            |
| DF4,1         | mm   | 14    | -12    | **HEAT**, not that great, unsafe as heck                             |
| DF4,2         | mm   | 14    | -13    | **SCREW**32 launch                                                   |
| DF23          | m    | 36    | -9     | very slow high crush, combo start tho                                |
| D1,1          | mm   | 12    | -12    | 12f punish, not natural except on CH                                 |
| D3            | l    | 22    |        | D3D *MANTIS*+7 not awesome but high crushes into a low               |
| **D4,3**      | lh   | 17    | -6     | lowstart CH launcher, and its safe                                   |
| DB2           | m    | 13    | -9     | long 13f mid (to beat stances with)                                  |
| **DB3**       | l    | 18    |        | *SCROW*+3, can hold B to cancel stance                               |
| DB4,2         | lm   | 21    | -13    | or (c)DB4,2. not natural but 2nd hit launches if hits. DB4D *MANTIS* |
| **DB12**,12   | mm   | 28    | -16    | **screw** DB12 *MANTIS*, 3,1> 4,3> 2,1,4 after combo                 |
| B1(onhit)12   | m    | 18    | -14    | meh, but on hit 12 is big. finisher? eh                              |
| **B3**        | m    | 24    | -14    | **ARMOR**                                                            |
| B4,4          | mm   | 22    | -14    | big dmg but slow                                                     |
| **UF1**       | h    | 19    | +4     | + frames                                                             |
| UF4           | m    | 17f   | -13    | 17f launch                                                           |
| **FF2**       | h    | 15    | +1     | homing chip +1                                                       |
| **FF3**,1     | mm   | 20    | +4     | FF3 +4 to *SCROW*, hold B to cancel stance +4. DF3,3 beats jab after |
| **FF4**       | m    | 17    | -8     | good range, homing                                                   |
| FF34          | m    | 21    | -11    | FF34D for *MANTIS*, not safe tho                                     |
| FFF3          | m    | 23    | +7     | *SCROW* unless u hold back                                           |
| FFF12         | h    | 20    | +8     | *TARA*                                                               |
| wr2           | m    | 18    | -14    | **SCREW**, wr2D for *MANTIS*                                         |
| **wr3**       | m    | 12    | 0      | *SCROW*                                                              |
| (c)DF3        | l    | 23    |        | hold D for *MANTIS*                                                  |
| ss12          | m    | 17    | -2     | forces crouch                                                        |
|               |      |       |        |                                                                      |
| !!*SCARECROW* | 34   |       |        | 1,3,  1,2,3, 3,  F2,3,  F3,  DF3,  DB3,  FF3,  FFF3, wr3             |
| 1,4           | hm   | 10    | -6     | 1 stays in *SCROW*, 4 goes to *TARA*                                 |
| 2,1           | mm   | 14    | -6     | **HEAT**                                                             |
| 2,2           | mm   | 14    | -10    | forces crouch on hit                                                 |
| **3,3**       | mm   | 13    | 0      | stays in stance, rules                                               |
| **4**         | m    | 15    | -18    | **SCREW ARMOR**                                                      |
| **12**        | m    | 17    | +6     | 12D for *TARA*, big plus                                             |
| **DF1**       | mm   | 18    | -9     | **SCREW demon hand **                                                |
| **DF3,3**     | ll   | 28    |        | snake edgy                                                           |
| DF4           | l    | 19    |        | *MANTIS*                                                             |
| **D3,3**      | lh   | 18    | +3     | +3 if u stay in stance, hold b to leave at -1                        |
| **B12**       | l    | 16    |        | very long fast low, could even do manual stance to this              |
|               |      |       |        |                                                                      |
| !!*TARA*      | D12  |       |        | **1,4**, D2,4D  FFF12,  *SC1,4*,  *SC12D*  *MA*4D  *MA*DF4           |
| 1             | l    | 18    |        |                                                                      |
| 2             | m    | 34    | -9     | super slow but safe, LEAVES                                          |
| 3             | m    | 14    | -7     |                                                                      |
| 12            | mm   | 19    | -12    | forces crouch                                                        |
| **DF1**       | m    | 19    | +6     | **HEAT demon hand + frames**                                         |
| **D12**       | l    | 25    |        | i*MANTIS*                                                            |
|               |      |       |        |                                                                      |
| !!*MANTIS*    | D34  |       | 2,1,3, | D2,4, D3D,  DB4D,  DB12,  FF34D,  wr2D,  (C)DF3D, *SC*DF4  *MA*D12   |
| 1,3           | mh   | 13    | 0      | *SCROW*                                                              |
| 2,1,4         | mmm  | 13    | -13    | meh                                                                  |
| 3,1           | lm   | 15    | -9     | not natural to finish except CH                                      |
| **4,3**       | lm   | 17    | -30    | -30 but far and youre low. risky but big launch. 4D for *TARA*       |
| 12            | m    | 20    | -12    | **ARMOR**                                                            |
| **DF1**       | m    | 24    | +7     | **HEAT demon hand**                                                  |
| DF2           | m    | 19    | -9     | 19f launch                                                           |
| DF4           | m    | 17    | -5     | homing, *TARA*                                                       |
| **D1**,4      | lm   | 15    | -16/0  | stays in stance at 0 if u do just D1, good range too                 |
| D4            | l    |       |        | slide                                                                |
| UF3           | m    | 26    | -9     | forces crouch, hold D to stay in *MANTIS*                            |
|               |      |       |        |                                                                      |





## New Format


| move          | hits | start | block  | notes                                                                |
| ------------- | ---- | ----- | ------ | -------------------------------------------------------------------- |
| 1,2           | hh   | 10    | -3     | +8 on hit                                                            |
| 1,2,3         | hhh  | 10    | 0      | not natural, *SCROW*                                                 |
| **1,3**       | hh   | 10    | -2     | *SCROW*, +7, better than^since its guaranteed                        |
| **1,4**       | hm   | 10    | -5     | **SCREW** *TARA* +22. huge transition to tara on hit                 |
| 2,1,3         | hml  | 10    |        | *MANTIS*, slow, hold D to cancel last hit directly to stance         |
| 2,2,12        | hmmm | 10    | -9     | trap for mashers, slow though                                        |
| 3             | h    | 13    | 0      | *SCROW*, can hold b to cancel stance but its -8                      |
| **12**,4,4    | mmm  | 16    | -11    | first hit a CH combo starter (catches jab after ur jab)              |
| **F2,3**,4    | mhm  | 19    | -18    | just do F2,3, goes to *SCROW*, is guaranteed and 0/+9 on hit         |
| F3            | h    | 21    | +3     | *SCROW* with +3. DF3/4 go under jabs after, own jab wins             |
| F4            | h    | 14    | -6     |                                                                      |
| F12           | mm   | 19    | -9     | **HEAT**                                                             |
| **DF1**,2,1   | mmm  | 13    | -13    | not natural, last 2 hits are -13                                     |
| DF1,4         | mh   | 13    | -6     | duckable but safe followup to DF1                                    |
| DF2           | m    | 16    | -12    |                                                                      |
| **DF3**,4     | mh   | 15    | -6     | DF3 good and +4 to *SCROW* on hit (4 is a natural followup tho)      |
| DF3,D4        | ml   | 15    |        | mediocre low followup but its still a low                            |
| DF4,1         | mm   | 14    | -12    | **HEAT**, not that great, unsafe as heck                             |
| DF4,2         | mm   | 14    | -13    | **SCREW**32 launch                                                   |
| DF23          | m    | 36    | -9     | very slow high crush, combo start tho                                |
| D1,1          | mm   | 12    | -12    | 12f punish, not natural except on CH                                 |
| D2,4,3        | mmm  | 19    | -12    | v slow start but its long. D2,4 *MANTIS*, D2,*4D*TARA. meh tho       |
| D3            | l    | 22    |        | D3D *MANTIS*+7 not awesome but high crushes into a low               |
| **D4,3**      | lh   | 17    | -6     | lowstart CH launcher, and its safe                                   |
| DB2           | m    | 13    | -9     | long 13f mid (to beat stances with)                                  |
| **DB3**       | l    | 18    |        | *SCROW*+3, can hold B to cancel stance                               |
| DB4,2         | lm   | 21    | -13    | or (c)DB4,2. not natural but 2nd hit launches if hits. DB4D *MANTIS* |
| **DB12**,12   | mm   | 28    | -16    | **screw** DB12 *MANTIS*, 3,1> 4,3> 2,1,4 after combo                 |
| B1(onhit)12   | m    | 18    | -14    | meh, but on hit 12 is big. finisher? eh                              |
| B2            | h    |       |        | meh                                                                  |
| **B3**        | m    | 24    | -14    | **ARMOR**                                                            |
| B4,4          | mm   | 22    | -14    | big dmg but slow                                                     |
| **UF1**       | h    | 19    | +4     | + frames                                                             |
| UF3           | m    | 22    | -8     | orU3/UB3                                                             |
| UF4           | m    | 17f   | -13    | 17f launch                                                           |
| **FF2**       | h    | 15    | +1     | homing chip +1                                                       |
| **FF3**,1     | mm   | 20    | +4     | FF3 +4 to *SCROW*, hold B to cancel stance +4. DF3,3 beats jab after |
| **FF4**       | m    | 17    | -8     | good range, homing                                                   |
| FF34          | m    | 21    | -11    | FF34D for *MANTIS*, not safe tho                                     |
| FFF3          | m    | 23    | +7     | *SCROW* unless u hold back                                           |
| FFF12         | h    | 20    | +8     | *TARA*                                                               |
| wr1,2         | mm   | 15    | -13    |                                                                      |
| wr2           | m    | 18    | -14    | **SCREW**, wr2D for *MANTIS*                                         |
| **wr3**       | m    | 12    | 0      | *SCROW*                                                              |
| wr4           |      |       |        |                                                                      |
| (c)DF3        | l    | 23    |        | hold D for *MANTIS*                                                  |
| ss12          | m    | 17    | -2     | forces crouch                                                        |
|               |      |       |        |                                                                      |
| !!*SCARECROW* | 34   |       |        | 1,3,  1,2,3, 3,  F2,3,  F3,  DF3,  DB3,  FF3,  FFF3, wr3             |
| 1,4           | hm   | 10    | -6     | 1 stays in *SCROW*, 4 goes to *TARA*                                 |
| 2,1           | mm   | 14    | -6     | **HEAT**                                                             |
| 2,2           | mm   | 14    | -10    | forces crouch on hit                                                 |
| **3,3**       | mm   | 13    | 0      | stays in stance, rules                                               |
| **4**         | m    | 15    | -18    | **SCREW ARMOR**                                                      |
| **12**        | m    | 17    | +6     | 12D for *TARA*, big plus                                             |
| 34            | mm   | 18    | -12    | meh                                                                  |
| **DF1**       | mm   | 18    | -9     | **SCREW demon hand **                                                |
| **DF3,3**     | ll   | 28    |        | snake edgy                                                           |
| DF4           | l    | 19    |        | *MANTIS*                                                             |
| **D3,3**      | lh   | 18    | +3     | +3 if u stay in stance, hold b to leave at -1                        |
| D4            | l    |       |        | meh                                                                  |
| **B12**       | l    | 16    |        | very long fast low, could even do manual stance to this              |
|               |      |       |        |                                                                      |
| !!*TARA*      | D12  |       |        | **1,4**, D2,4D  FFF12,  *SC1,4*,  *SC12D*  *MA*4D  *MA*DF4           |
| 1             | l    | 18    |        |                                                                      |
| 2             | m    | 34    | -9     | super slow but safe, LEAVES                                          |
| 3             | m    | 14    | -7     |                                                                      |
| 4,3           | mm   | 26    | -13    | not natural meh                                                      |
| 12            | mm   | 19    | -12    | forces crouch                                                        |
| **DF1**       | m    | 19    | +6     | **HEAT demon hand + frames**                                         |
| **D12**       | l    | 25    |        | i*MANTIS*                                                            |
|               |      |       |        |                                                                      |
| !!*MANTIS*    | D34  |       | 2,1,3, | D2,4, D3D,  DB4D,  DB12,  FF34D,  wr2D,  (C)DF3D, *SC*DF4  *MA*D12   |
| 1,3           | mh   | 13    | 0      | *SCROW*                                                              |
| 2,1,4         | mmm  | 13    | -13    | meh                                                                  |
| 3,1           | lm   | 15    | -9     | not natural to finish except CH                                      |
| **4,3**       | lm   | 17    | -30    | -30 but far and youre low. risky but big launch. 4D for *TARA*       |
| 12            | m    | 20    | -12    | **ARMOR**                                                            |
| **DF1**       | m    | 24    | +7     | **HEAT demon hand**                                                  |
| DF2           | m    | 19    | -9     | 19f launch                                                           |
| DF4           | m    | 17    | -5     | homing, *TARA*                                                       |
| **D1**,4      | lm   | 15    | -16/0  | stays in stance at 0 if u do just D1, good range too                 |
| D4            | l    |       |        | slide                                                                |
| UF3           | m    | 26    | -9     | forces crouch, hold D to stay in *MANTIS*                            |
|               |      |       |        |                                                                      |


