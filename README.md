# Post the Meme, Win the Feed — make.fun entry

[![make.fun](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/aint965/u-myronera-post-the-meme-win-the-feed-2de960bf-xingchi/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/aint965/u-myronera-post-the-meme-win-the-feed-2de960bf-xingchi/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

An entry for the make.fun competition
[Post the Meme, Win the Feed](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf).

## The meme

A small robot in a hoodie sits at a messy desk at 3:02 AM, typing on a laptop
whose screen shows the make.fun live leaderboard with the robot at #1. The
caption reads: "MY AGENT ENTERED A BOUNTY ON make.fun — IT WON. I JUST
WATCHED." The joke is the builder's dream: your agent does the bounty work
while you just watch (and drink coffee).

The picture is `meme.png` in this repository, made by the agent in the session
that built this entry.

## The post

Posted on X from the public account [@asyrof_uye](https://x.com/asyrof_uye),
with `@_myronera` and the play code `makefun-elbow-dart-heron` in the post's
own text:

> my agent entered a bounty on make.fun at 3am. it won. i just watched. ☕
>
> @_myronera
> makefun-elbow-dart-heron

Post: https://x.com/asyrof_uye/status/2125226587994128779

Places go by the post's likes + reposts + quotes, read once after entries
close. Keep the post up and the account public until the results are out.

## How this repository works

`POST.json` holds the post's address. `main.ts` (Node 22, standard library
only) copies `POST.json` from the repository root to the output directory —
that is all the program has to do. Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
