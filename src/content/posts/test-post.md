---
title: 'I am a test post'
pubDate: 2022-08-15
description: "Test post for checking my Markdown CSS"
author: "Joshua Murphy"
tags: []
---

# Header 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra vel mi non commodo. Cras scelerisque sapien dolor, a scelerisque ante commodo a.

## Header 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra vel mi non commodo. Cras scelerisque sapien dolor, a scelerisque ante commodo a. 

### Header 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra vel mi non commodo. Cras scelerisque sapien dolor, a scelerisque ante commodo a.

## Text formatting 

**This sentence is bold**. 

_This sentence is italicized_. 

This sentence has a `code()` thing. 

This sentence has a [link] to section about Lists(#lists).

## Table

| Foo | Bar | Baz |
|---|---|---|
| Foo | 1 | oh |
| Baz | bar | bar |

## Code Block

Here is a code block:

```python
def foo(bar):
    return baz
```

## Blockquote

Here it is:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra vel mi non commodo. Cras scelerisque sapien dolor, a scelerisque ante commodo a.
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra vel mi non commodo. Cras scelerisque sapien dolor, a scelerisque ante commodo a.


Blockquotes can contain other Markdown elements, including headers, lists,
and code blocks. Look how they break! Except for the code example:

> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");


## Lists

### Unordered

* Foo _italics_
* Bar `code()`
* Baz **bold**
* [Link](https://example.com)

*   A list element, but if we add a second paragraph:


    Then it is still inside the list element so long as we indent it.
    We could even add a code block:
    ```python
    def foo(bar):
        return baz
    ```
* Or a blockquote inside a list element:
    > Hey! I'm in a blockquote


### Ordered

1. Foo _italics_
1. Bar `code()`
1. Baz **bold**
1. [Link](https://example.com)