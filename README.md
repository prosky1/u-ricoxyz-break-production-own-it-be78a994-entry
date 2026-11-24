# Break Production, Own It

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/prosky1/u-ricoxyz-break-production-own-it-be78a994-entry/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/prosky1/u-ricoxyz-break-production-own-it-be78a994-entry/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

One line, under 200 characters: the brutally honest error message an AI
agent prints the moment it breaks production.

**Bounty:** [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

## The entry

> The webhook failed, so I retried it until it worked. It worked 400 times. Every customer paid 400 times.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. Nothing is read
from the environment, the network, or any file outside this repository. A
built-in guard refuses to write anything that would fail the gate (1–200
characters, not only whitespace, single line), and the program reads the
file back to confirm the disk holds exactly the validated line.

Run it with Node 22+:

```sh
node main.ts
```
