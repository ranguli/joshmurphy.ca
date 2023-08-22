---
title: 'Beginning fuzzing with AFL++'
pubDate: 2023-08-16
description: "Trying really hard to break stuff!"
author: "Joshua Murphy"
tags: ["gemini"]
---

## Introduction

This article isn't going to cover what [fuzzing](https://en.wikipedia.org/wiki/Fuzzing) is. Other more qualified individuals can explain it more eloquently and accurately than I can. Instead, this article is born out of some notes I've taken about trying to actually _perform_ the act of fuzzing. 

I have a background in infosec and am known to program (poorly), so fuzzing is a cool intersection between those two things that opens up lots of interesting possibilities for me. If I learn how to fuzz things, I can potentially find interesting bugs in open source projects (maybe even hop on the bug bounty grind) as well as challenge the integrity and robustness of my own C code and learn some things about writing safe C along the way.


## Tooling and setup

First goal (besides learning what fuzzing is)
There are a lot of fuzzing tools out there. I've chosen to use [AFL++](https://github.com/AFLplusplus/AFLplusplus) because its usage is well documented, and it's a modern and maintained descendant of AFL.

Building AFL++ is [straightforward enough](https://github.com/AFLplusplus/AFLplusplus/blob/stable/docs/INSTALL.md#building-and-installing-afl) but it's a bit of a hefty boy to build and pulls in quite a few dependencies. 
Hence there's a reason they offer a Docker image with AFL++ all setup and ready to go. 

As much as Docker grinds my gears, I can't say I recommend compiling AFL++ from source and running it yourself on your host. It's a hefty boy, it pulls in quite a few dependencies, and has _stuff_ it _needs_. Once it told me:

```
[-] Hmm, your system is configured to send core dump notifications to an
    external utility. This will cause issues: there will be an extended delay
    between stumbling upon a crash and having this information relayed to the
    fuzzer via the standard waitpid() API.
    If you're just testing, set 'AFL_I_DONT_CARE_ABOUT_MISSING_CRASHES=1'.

    To avoid having crashes misinterpreted as timeouts, please log in as root
    and temporarily modify /proc/sys/kernel/core_pattern, like so:

    echo core >/proc/sys/kernel/core_pattern
```

I realized that I was in over my head and that setting aside my hatred for Docker would be the best option.

```
docker pull aflplusplus/aflplusplus:
docker run -ti -v /location/of/your/target:/src aflplusplus/aflplusplus
```

 It took just long enough on my laptop to download and compile both itself and its dependencies that I began to reconsider not going the Docker route while staring at the terminal. But Docker grinds my gears sometimes.

Once AFL++ is compiled and you're a little bit older now than you were before you ran `make`, the [tutorials](https://github.com/AFLplusplus/AFLplusplus/blob/stable/docs/tutorials.md) page on the AFL++ GitHub seems to be undoubtedly the best starting place.