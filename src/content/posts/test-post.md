---
title: 'I am a test post'
pubDate: 2022-08-15
description: "Test post for checking my Markdown CSS"
author: "Joshua Murphy"
tags: []
---

# Header 1
## Header 2
### Header 3

## Text formatting 

Hello this is normal text

__This sentence is in italics.__ 

**This sentence is bold**. 

This sentence has a `code()` thing. 

This sentence has a [link](https:///example.com).

## Table

| Foo | Bar | Baz |
|---|---|---|
| Foo | 1 | oh |
| Baz | bar | bar |

## Code Block

Here is a code block:


```
I am a code block
```

Here is one with syntax highlighting:

```python
def foo(bar):
    return baz
```

## Criminal use of `<br><br>`

This sentence is
<br><br>
interupted by `<br><br>`

## Blockquote

Here is some blockquote text using `>`: 

> This is a blockquote with two paragraphs. If we want a blank newline between the paragraphs we have to use two br's for some reason. Unfortunate.
> <br><br>
> But hey that is just how it is. 


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

Any decent text editor should make email-style quoting easy. For
example, with BBEdit, you can make a selection and choose Increase
Quote Level from the Text menu.


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
    > Hey! I'm in a blockquote but I'm broken.


### Ordered

1. Foo _italics_
1. Bar `code()`
1. Baz **bold**
1. [Link](https://example.com)