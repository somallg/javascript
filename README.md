# Git Complete: The definitive, step-by-step guide to Git

# Section 1. Introduction

## 1.1 Welcome and Course Goals
* Help yourself
* Understand core concepts
* Master main commands
* Compare with ease
* Conquer branching and merging
* Exposed to GitHub
* Teach a friend!
* Enjoy Bonuses!

## 1.2 Course Overview
* Introduction / Key concepts
* Git Installation and Setup
* Quick Start / Quick Win!
* The Basic Commands
* Comparing
* Branching and Merging
* GitHub Introduction
* Tools Setup (Text Editor, Compare / Merge Tool)
* Bonuses! (And more sections on the way!)

## 1.3 About the Author / Instructor

## 1.4 Course Audience and Course Study Tips
* Basic Computer Skills
* Install Software
    * Admin rights
* Need for Source Control
    * Freelancer
    * Software developer / programmer
    * Web designer
    * Graphic designer
* Interest in learning about Git
* Follow along
    * Use another monitor or device, if possible
    * Pause video when needed
* Supplemental materials
    * Command listings
    * Diagrams
    * Source and more
* Check back frequently
    * Adding more sections and bonus lectures
    
## 1.5 Why Command Line?
* History
* New features
* Online help
* Power!
* Consistent
    * Terminal on Mac/Linux
    * Git Bash on Windows
* Graphical Clients later...

## 1.6 Why Source Control?
* Backup / Archive
* Versioning / History
* Undo Changes
* Comparing
* Collaboration / Teamwork
* Blame / Learning Moment
* Isolation of Changes
* Experimentation
* Context Switching
* Code Review

* Who need source control?
    * Software developers/engineers/programmers
    * Freelancers
    * Web Designers
    * Graphic Artists
    * Share code / Open source

* Source Control Options
    * Two Main Types
        * Centralized
        * Decentralized / Distributed
    * Centralized
        * Free: Subversion, CVS
        * Commercial: ClearCase, Perfoce, Team Foundation Server
        * Requires connection to central server for most operations
    * Distributed
        * Mecurial (Hg)
        * Git
        * Most operations are local
        * Central server not required
        
## 1.7 Why Git?
* Distributed source control system
    * Not required to be decentralized
* Massively scales
* Open Source
* Developed for Linux project requirements
* Most operations are local
* Very fast
* Active community
* Most popular DVCS, VCS

## 1.8 Key Git Terminology
* Repository contains files, history, config managed by Git
* Three States of Git
    * Working directory
    * Staging area - pre-commit holding area
    * Commit - Git Repository (history)
* Remote repository (GitHub)
* Master branch

# Section 2. Git Installation

## 2.9 Installation Overview

## 2.10 Installing Git for Windows

## 2.11 Installing Git for Mac OS X

# Section 3. Git Quick Start

## 3.12 Quick Start, Part 1: Starting with GitHub and Project Setup

## 3.13 Quick Start, Part 2: Configuration, Clone and Git Basic Workflow
`
$ git config --global user.name "Username"
$ git config --global user.email "Email"
$ git config --global --list
`
## 3.14 Quick Start Resources

# Section 4. Text Editor Installation

## 4.15 Text Editor Installation Overview

## 4.16 Windows Text Editor: Notepad++ Installation

## 4.17 COnfigure Notepad++ wiht Git (Windows Only)

## 4.18 Mac Text Editor: TextMate 2 Installation

## 4.19 Configure TExt Mate 2 with Git (Mac Only)

## 4.20 Text Editor Resources

# Section 5. Basic Git Commands

## 5.21 Basic Commands Overview

## 5.22 Starting with a Fresh Project (git init)

## 5.23 Adding Git to an Existing Project (git init)

## 5.24 Starting on GitHub by Joining an Existing Project (git clone)

## 5.25 Basic Git Workflow (add, commit, pull & push)
* https://github.com/scm-ninja/starter-web
* http://meettheipsums.com/
* http://hipsum.co/

`
$ git add
$ git commit
$ git pull origin master
$ git push origin master
`

## 5.26 Tracked Files
`
$ git commit -am "Commit"
$ git ls-files # get tracked files
`
## 5.27 Editing Files

## 5.28 Recursive Add
`
$ git add .
`

## 5.29 Backing Out Changes
`
$ git reset HEAD <file>
$ git checkout -- <file>
`
## 5.30 Renaming and Moving Files
`
$ git mv
`
## 5.31 Deleting Files
`
$ git rm <file>
`
## 5.32 History
`
$ git log --oneline --graph --decorate
$ git log -- <file>
$ git log --follow -- <file> # show moving file
$ git show <SHA-1>
`
## 5.33 Git Alias
`
$ git config --global alias.hist "log --all --graph --decorate --oneline"
`
## 5.34 Ignoring Unwanted Files and Folders

## 5.35 Cleanup and Back to Origin (GitHub)

## 5.36 Git Basics Resources
