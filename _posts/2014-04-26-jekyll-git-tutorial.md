---
layout: post
title:  "Jekyll and Git Tutorial"
date:   2014-04-26 14:53:07
categories:
- Technical
img: /imgs/jekyll_logo.png
---

<div style='text-align:center;'>
  <img src='{{site.base}}/imgs/jekyll_logo.png' width='auto' height='auto'/>
</div>

Seeing as how [GitHub][GitHub] is free and amazing, I chose to host my page on it. [GitHub Pages(GH-Pages)][GH-Pages], allows you to generate a webpage using their free repository hosting. This is a tutorial on how to get up and running on GH-Pages using [Jekyll][Jekyll].

Tools

- [GitHub account](https://github.com/join)
- Commandline Tool (This will reference Linux. Windows and Mac OS is not much different. I will try my best to accommodate as much as possible.)
- Editor (I use [VIM](http://www.vim.org/download.php). Some use [Sublime](http://www.sublimetext.com/). Find what's right for you.)
- Some knowledge of HTML, CSS, and command line

After creating your GitHub account you will want to dive in and [create a repository(repo)](https://help.github.com/articles/create-a-repo). You MUST name the GH-Pages repository your user name! You can create project folders from there. If you do want to do projects then you must publish your page under the branch `gh-pages`. Otherwise you may do as you please with branching.

Once you've sucessfully created a repository. You should be able to create an index.html page, push it to the repo and view it at `http://<username>.github.io`.

Now to install Jekyll. This is where it may differ because this references Linux command line. For my Windows buddies out there refer to [Running Jekyll on Windows](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html). Now for Mac OS Mavericks you will need to install Ruby on your user account:

1. Download XCode on the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
2. Open terminal and type `xcode-select --install`
3. Install [Brew](http://brew.sh/) by typeing in:

`ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`

[GitHub]:     https://github.com
[GH-Pages]:   https://pages.github.com
[jekyll]:     http://jekyllrb.com
