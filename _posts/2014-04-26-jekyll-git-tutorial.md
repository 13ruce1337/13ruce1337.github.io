---
layout: post
title:  "Jekyll and Git Tutorial"
date:   2014-04-26 14:53:07
categories:
- tech
img: /imgs/jekyll_logo.png
---

<div style='text-align:center;'>
  <img src='{{site.base}}/imgs/jekyll_logo.png' width='auto' height='auto'/>
</div>

Seeing as how [GitHub][GitHub] is free and amazing, I chose to host my page on it. [GitHub Pages(GH-Pages)][GH-Pages] allows you to generate a webpage using Github's free repository hosting. This is a tutorial on how to get up and running on GH-Pages using [Jekyll][Jekyll].

Tools
---

- [GitHub account](https://github.com/join)
- Commandline Tool (This will reference Linux. Windows and Mac OS is not much different. I will try my best to accommodate as much as possible.)
- Editor (I use [VIM](http://www.vim.org/download.php). Some use [Sublime](http://www.sublimetext.com/). Find what's right for you.)
- Some knowledge of HTML, CSS, Markdown and command line

<br/>

The Basics
---

After creating your GitHub account you will want to dive in and [create a repository(repo)](https://help.github.com/articles/create-a-repo). You MUST name the GH-Pages repository your user name! You can create project folders from there. If you do want to do projects then you must publish your page under the branch `gh-pages`. Otherwise you may do as you please with branching.

Once you've sucessfully created a repository. You should be able to create an index.html page, push it to the repo and view it at `http://<username>.github.io`.

<br/>

Jekyll
---

Now to install Jekyll. This is where it may differ because this references Linux command line. For my Windows buddies out there refer to [Running Jekyll on Windows](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html). 

<br/>

Mac OS 10.9
---
Now for Mac OS Mavericks you will need to install Ruby on your user account:

1. Download XCode on the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
2. Open terminal and type `xcode-select --install`
3. Install [Brew](http://brew.sh/) by typing in:

`ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`

4.[Ruby Version Manager (RVM)](https://rvm.io/) by typing in:

`\curl -sSL https://get.rvm.io | bash -s stable`

5. Close terminal and reopen then type:

`rvm list known`

At the time of this tutorial, 2.1.1 is the latest version, so type:

`rvm install 2.1.1` or `rvm install x.x.x` x being the version you want

Make sure you are using the correct version of Ruby by typing : `ruby --version`

If you aren't, then type: `rvm use x.x.x` x being the version you want(2.1.1 in our situation)

6. Type in `gem install -V jekyll` you will want the `-V` for verbose so it shows it is working. Otherwise you'll be staring at a blank screen for an exhorbitant amount of time.

7. Navigate to your repo and type `jekyll new /path/to/repo`

8. Within the repo directory type `jekyll serve --watch` the `--watch` is so that the local server will "watch" for changes (auto updating)

9. Visit the page at [http://localhost:4000/](http://localhost:4000/) or [http://0.0.0.0:4000](http://0.0.0.0:4000)

<br/>

Linux
---
For Linux it is a lot easier. Ruby should already be installed on your distribution. Simply:

1. Install Bundler via `gem install bundler`
2. Create a `Gemfile` in the repo directory with the contents:

{% highlight ruby %}
source 'https://rubygems.org'
gem 'github-pages'
{% endhighlight %}

3. Type `bundle install` while in the repo directory
4. Start the server by typing `bundle exec jekyll serve --watch`
5. Visit the page at [http://localhost:4000/](http://localhost:4000/) or [http://0.0.0.0:4000/](http://0.0.0.0:4000/)

<br/>

From here, get familiar with [Front-matter](http://jekyllrb.com/docs/frontmatter/) and start working on your layout in the directory `_layouts`. When ever you are ready to publish, just `git push origin master` and refresh your github.io page. If you want to add a CNAME to your github page, create a `CNAME` file in the repo root directory with the contents of what ever url you want ex) `www.yoururl.com` or `your.url.com` then push to the remote repo. You will of course have to add the CNAME at your hosting provider.

[GitHub]:     https://github.com
[GH-Pages]:   https://pages.github.com
[jekyll]:     http://jekyllrb.com
