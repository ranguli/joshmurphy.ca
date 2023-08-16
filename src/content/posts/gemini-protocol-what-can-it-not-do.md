---
title: 'The Gemini protocol: what can it (not) do?'
pubDate: 2023-08-16
description: "Beginning adventure into gemini:// space"
author: "Joshua Murphy"
tags: ["gemini"]
---


## Can Gemini only send and receive text?

The opening sentence on the Project Gemini [site](https://gemini.circumlunar.space) is the following:

> Gemini is a new internet technology supporting an electronic library of interconnected text documents.
>
> ...
>
> It's timeless, and deserves tools which treat it as a first class concept, not a vestigial corner case


In other words, Gemini is an Internet protocol that makes _interconnected text documents_ the top priority. No images, no multimedia, no styling or client scripting, no applications, no games. 

I read this and incorrectly interpreted it as "Gemini can only send and receive text files", which is not the case. Text files are just _the main thing_. This distinction is important enough that I'm writing this with the hope that it will give clarity to other people learning about Gemini. 


## So Gemini can send and receive any kind of file?

Here's how I understand it:

Servers can **send any file type**, but can **only receive text**.

Clients can **only send text** (including as a form of user input) and **receive any filetype**. _However: any non-text file that can't be displayed gets downloaded so that the user may open it in a supported program._


Let's put some of this into practice as an example in the next section. 

## It's not about what you can send, but what you can _show_

Really some of my confusion came down to the difference between what a Gemini client is expected to be able to render and display versus what it can actually receive (and just save as a file). 

**That's to say you can download images from a server over Gemini. But you can't _see_ them in your browser, because the specification is all about rendering text only. You'll need to open the downloaded image in another application (or use a client that breaks the spec).** 


Clients can't upload images, nor do servers support receiving them.

## You _can_ get user input though

Not being able to upload things like images scratches a few potential project ideas off my list (like making a [piclog](https://piclog.blue) clone). We _can_ get user input though. So a [status.cafe](https://status.cafe) clone shouldn't be off the table.

Exploring how user input is obtained is something I'll leave as an exercise to the reader. You'll want to review the Gemini protocol [specification](https://gemini.circumlunar.space/docs/specification.gmi). Start with Section 3.2.1, and happy hunting.