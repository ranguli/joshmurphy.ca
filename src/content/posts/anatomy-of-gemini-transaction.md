---
title: 'The antanomy of a gemini:// transaction'
pubDate: 2022-08-15
description: ""
author: "Joshua Murphy"
draft: true 
tags: ["gemini"]
---

This is the first in series of articles about the Gemini Protocol. I won't explain what Gemini actually is, because you'd get a better bang for your buck reading the Gemini [website](https://gemini.circumlunar.space/) and the Wikipedia [article](https://en.wikipedia.org/wiki/Gemini_(protocol)). So if you don't already know, read up, explore a little bit, and then come back if you're still interested.


What these articles do intend to explain are the _details_ of Gemini. 

Instead of writing long posts about the entire protocol (which to be fair is already [well documented](https://gemini.circumlunar.space/docs/specification.gmi)), I'm going to stay pretty laser-focused on single, small topics. They're easier to digest and they're easier to write. Plus generating any kind of attention around Gemini would be a great side effect of writing these articles.


## Step Overiew 


1. The client 💻 opens a connection to the server
1. The server 🌐 accepts the connection.
1. The client 💻 and server 🌐 perform a TLS handshake
1. The client 💻 validates the server certificate
1. The client 💻 sends a request
1. The server 🌐 sends a response header (and closes the connection if there are issues)
1. The server 🌐 sends a response body
1. The server 🌐 closes the connection (with `close_notify`)
1. The client 💻 handles the response


## Step-by-step


### The client 💻 opens a connection to the server
### The server 🌐 accepts the connection.
### The client 💻 and server 🌐 perform a TLS handshake 
The Gemini [specification](https://gemini.circumlunar.space/docs/specification.gmi) (Section 4) states that the use of TLS is _mandatory_, so this step is not optional. The client and server perform a good 'ol regular TLS handshake.

### The client 💻 validates the server certificate 
Unlike the last step, this step _is_ optional but is highly-encouraged.


Gemini uses something called _trust on first use_ (TOFU). 

Here it is straight from the horse's mouth:

> Clients can validate TLS connections however they like (including not at all) but the strongly RECOMMENDED approach is to implement a lightweight "TOFU" certificate-pinning system which treats self-signed certificates as first- class citizens. This greatly reduces TLS overhead on the network (only one cert needs to be sent, not a whole chain) and lowers the barrier to entry for setting up a Gemini site (no need to pay a CA or setup a Let's Encrypt cron job, just make a cert and go). 

### The client 💻 sends a request 
### The server 🌐 sends a response header (and closes the connection if there are issues)
### The server 🌐 sends a response body 
### The server 🌐 closes the connection (with `close_notify`)
So there's actually an extra half-step added in here. The spec states that servers _must_ send a TLS `close_notify` _before_ they close the connection. So before the connection is closed, a `close_notify` must be sent. Here it is from the horse's mouth:

> As per RFCs 5246 and 8446, Gemini servers MUST send a TLS `close_notify` prior to closing the connection after sending a complete response. This is essential to disambiguate completed responses from responses closed prematurely due to network error or attack. 

### The client 💻 handles the response 
This one is pretty open-ended. The client has the information they asked for, the transaction is essentially done, now _go do whatever you want with it_.



S: Accepts connection

C/S: Complete TLS handshake (see section 4)

C: Validates server certificate (see 4.2)

C: Sends a [request](#the-request) (one CRLF terminated line) (see section 2)

S: Sends response header (one CRLF terminated line), closes connection under non-success conditions (see 3.1 and 3.2)

S: Sends response body (text or binary data) (see 3.3)

S: Closes connection (including TLS close_notify, see section 4)

C: Handles response (see 3.4) 


## The handshake and T.O.F.U




## The request
A Gemini request basically couldn't get any simpler. The entire request is short enough to take place on a single line, and it is _literally just the URL you are asking for_.

![]("public/images/anatomy-of)

```
gemini://example.com/
```

**Note: the line must be terminated with `CRLF`** 

## The response

