---
title: 'Linux convergence is alive and well (and phosh on the PinePhone is cool as hell)'
pubDate: 2023-08-21
description: ""
author: "Joshua Murphy"
tags: ["gnome", "flatpak", "pinephone", "phosh", "linux", "convergence"]
---

First of all, your calendar has not been set back - I know, I know, I'm very late to the mobile Linux convergence party. But the party has been heating up before I got here and by god is it party time. Has anyone checked in on the state of Linux convergence recently? I have, and hot damn - things are actually kind of cooking.

If you don't already have a [PinePhone](https://www.pine64.org/pinephone/) (or a Librem 5 if you've got clout) and are at all interested in the Linux desktop, I'd _highly_ recommend taking an exploration down that rabbit hole. Look at me, I did and now I'm evangelizing it. My sermon to you is:

> Buy the PinePhone, install postmarketOS or Manjaro ARM or mobian, anything that allows you to run [phosh](https://puri.sm/posts/phosh-overview/).

Then run phosh. Check it the heck out. Yes yes, I know, you didn't have $1200 for a Librem 5 because some evangelical stranger online got you in a tizzy whispering sweet negations of the death of convergence in your ear. So the $200 PinePhone you bought is slow as hell, it takes ages to open an app up, and you're already wondering if this is a cult.

Forgive thy $200 hardware. Appreciate the fact that we're in the timeline where an open-source-friendly manufacturer has produced a Linux smartphone for $200. Redirect your attention back to phosh, and take a moment to be in awe about what's actually going on under the hood.

I don't care if it's 2023 now and we were all excited about this `n` years ago and now it's old news: There's a frickin phone, in your hand, it's running Linux (you can pick your distro), and all the shit on there looks an awful lot like GNOME. _Nice. Thank you phosh, very cool_. But just who is this phosh? Is it in the room with us right now?

Phosh calls itself a 'graphical shell', perhaps so as not to be conflated with being a desktop environment. But Joshua, I hear you say, _"I see _GNOME_ on my phone. And where is my kidney?"_

You see something like GNOME on your phone because **phosh is cool as hell**. That's what I've been trying to tell you, duh.

Phosh aims to provide a seamless layer between not only your bread and butter GNOME tech like `GTK`, `GObject`, but other fun friends packed under the hood like `gnome-settings-daemon` and `gnome-sesion`. The party wouldn't be complete of course until the Freedesktop.org gang shows up too (GNOME needs them after all). And they're here! Everyone's favorite party animal `polkit` is here. `upower` is buying everyone a round of shots. And oh my god, `NetworkManager` and his quiet mysterious brother `ModemManager` have arrived.

### **TL;DR** Phosh isn't GNOME, but it brings parts of GNOME and some of his cool drunk friends to the party happening on your PinePhone.

Arguably the coolest thing about Phosh is not the end product on your phone _right now_, but where Phosh can go from here and how the tech can develop. I'm not going to pretend like we're all going to be carrying around PinePhones in the future - we're not. But hot damn, if the idea of being able to have one app with one codebase run on both your Linux phone and your Linux desktop, with a UI that accounts for both, doesn't excite the shit out of you then you probably either stopped reading this article ages ago or are taking notes for the storm you're about to type up in my replies.

And it's not like that concept is dead or even vaporware. You can buy a PinePhone or a Librem 5 right now. Phosh and GNOME are under active development and building steam. It needs some more time and some work, sure. But when _hasn't_ something on Linux needed some more time and some more work? The point is, we're surprisingly _getting there_.


### Just how close are we getting? ###

The question becomes, how far along has all this stuff come? I'd say a few important takeaways would be:

- **GTK4 was a gorgeous upgrade from GTK3, and there are already whispers of GTK5.** 
- **Developers are writing gorgeous, responsive, GTK native apps in languages like Rust and TypeScript.** 
- **We're not far off from a proper ecosystem, complete with a genuine app store**

There are _tons_ of amazing, gorgeous, and (crucially) responsive GTK-native apps being built right now on GitHub. Critically, the vast majority of them are already distributed as Flatpaks and available through Flathub. What's the significance of that?

Here's my prediction on where I think this could all be heading:

> When the time comes that mobile distros choose to officially support (and encourage) Flatpak, an entire app store ecosystem with a full catalog of good-looking responsive apps will be bestowed onto mobile Linux users, almost overnight. Once Flatpaks are wholly embraced on postmarketOS, Manjaro ARM, etc, and there's a nice GUI frontend for Flathub installed by default, the proverbial floodgate will open and there will be a flurry of activity and interest.

And the great thing about that flurry of activity is that it's a symbiotic relationship with Linux on the desktop. Developers writing responsive apps distributed via Flatpak are a boon for Linux as a desktop platform. That gift will automatically get handed down to mobile users. As a bonus, those developers will be rewarded by that one mobile user who identifies a bug. They'll gain a few more (grateful) users. Maybe some pull requests. It's like a trickle-down effect, but the trickling is bi-directional and not a dubious economic policy. And if these apps are well-written and responsive, the overhead for supporting mobile is significantly less depending on the application.  


### Closing thoughts

Obviously what's missing is mass adoption (or even minor adoption). The average mobile Linux user is an enthusiast, and very likely a developer. Linux on mobile is a niche of a niche, unequivocally. The vast majority of the Linux users that make up its 3% desktop market share aren't going to suddenly materialize over in the mobile market space, no matter how grandiose a way my Flatpak floodgate prediction could unfold. People might have multiple computers, but people tend to only have one (personal) phone, and not many of them are willing to jump headfirst onto a mobile platform that's not matured yet. 

The thing Linux mobile has got going for us is that for the first time, the notion of rejecting big tech is percolating in the public zeitgeist. People seeing Twitter go up in smoke even led the BBC to start using Mastodon. News agencies are also similarly pissed at Meta. There's at least a nascent idea amongst some people paying attention that yeah, these guys _are_ shitty, and as a society, we might want to ask ourselves some questions about alternatives. 

If apps like Twitter, Facebook, etc start dying, and more and more people find peace being off of social media _as a whole_, then that's a whole host of killer apps off the table. A whole lot fewer people are going to think about a Linux phone and ask "Can I check Instagram on it? Can I use iMessage?". The less people that use Instagram, the less people are going to care if their phone can't use Instagram. And if the European Union pushes iMessage to be some kind of cross-platform standard, then good lord half the reason to own an iPhone goes right out the window anyways.

I'm not saying everyone is going to be running around with Linux phones in their pockets in the future - not a chance. But, if factors both internal and external to the mobile Linux platform trend well, there's a chance for some of us out there who are on the fence, saying _"Maybe I could maybe see myself daily-driving a Linux phone when x y and z_".

I'll certainly be here waiting for x y and z to happen.