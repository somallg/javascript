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
```
$ git config --global user.name "Username"
$ git config --global user.email "Email"
$ git config --global --list
```
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

```
$ git add
$ git commit
$ git pull origin master
$ git push origin master
```
## 5.26 Tracked Files
```
$ git commit -am "Commit"
$ git ls-files # get tracked files
```
## 5.27 Editing Files

## 5.28 Recursive Add
```
$ git add .
```
## 5.29 Backing Out Changes
```
$ git reset HEAD <file>
$ git checkout -- <file>
```
## 5.30 Renaming and Moving Files
```
$ git mv
```
## 5.31 Deleting Files
```
$ git rm <file>
```
## 5.32 History
```
$ git log --oneline --graph --decorate
$ git log -- <file>
$ git log --follow -- <file> # show moving file
$ git show <SHA-1>
```
## 5.33 Git Alias
```
$ git config --global alias.hist "log --all --graph --decorate --oneline"
```
## 5.34 Ignoring Unwanted Files and Folders
* Specific File: MyFile.ext
* File Pattern: *.ext
* Folder: my-folder/

## 5.35 Cleanup and Back to Origin (GitHub)
```
$ git pull origin master
$ git push origin master
```
## 5.36 Git Basics Resources

# Section 6. Visual Merge/Diff Tool Installation

## 6.37 Visual Merge / Diff Tool Installation Overview

## 6.38 P4Merge Install on Windows

## 6.39 P4Merge for Windows Git Configuration

## 6.40 P4Merge for Mac Installation

## 6.41 P4Merge for Mac Git Configuration
```
$ git config --global diff.tool p4merge
$ git config --global difftool.p4merge.path "/opt/homebrew-cask/Caskroom/p4merge/2014.3-1007540/p4merge.app/Contents/MacOS/p4merge"
$ git config --global difftool.prompt false

$ git config --global merge.tool p4merge
$ git config --global mergetool.p4merge.path "/opt/homebrew-cask/Caskroom/p4merge/2014.3-1007540/p4merge.app/Contents/MacOS/p4merge"
$ git config --global mergetool.prompt false
```
## 6.42 Visual Merge / Diff Tool Resources

# Section 7. Comparisons

## 7.43 Git Repository Setup (for comparing examples)

## 7.44 Comparing Working Directory and the Staging Area
```
$ git diff
$ git difftool
```
## 7.45 Comparing Working Directory and Git Repository (Last Commit)
```
$ git diff HEAD
$ git difftool HEAD
```
## 7.46 Comparing between the Staging Area and the Git Repository (Last Commit)
```
$ git diff --staged HEAD
$ git difftool --staged HEAD
```
## 7.47 Limiting Comparsons to one File (or path)
```
$ git diff -- README.md
$ git difftool -- README.md
```
## 7.48 Comparing Between Commits
```
$ git diff HEAD HEAD^
$ git difftool HEAD HEAD^
```
## 7.49 Comparing Between Local and Remote Master Branches
```
$ git diff master origin/master
$ git difftool master origin/master
```
## 7.50 Comparison Section Cleanup and Push back to GitHub
```
$ git pull
$ git push origin master
```

# Section 8. Branching and Merging

## 8.51 Branching Basics
```
$ git branch -a # -all
$ git branch mynewbranch
$ git checkout mynewbranch
$ git branch -m mynewbranch newbranch # rename branch
$ git branch -d newbranch # delete branch
```
## 8.52 Happy Path / Fast Forward Merges
```
$ git checkout -b title-change # create branch and checkout
$ git diff master title-change
$ git merge title-change
$ git branch -d title-change # delete after merged
```
## 8.53 Happy Path / Disable Fast Forward Merges
```
$ git checkout -b add-copyright
$ git branch
$ git checkout master
$ git merge add-copyright --no-ff
$ git branch -d add-copyright
```
## 8.54 Automatic Merges
```
$ git checkout -b simple-changes
$ git merge simple-changes -m "Merging changes from simple-changes branch"
$ git branch -d simple-changes
```
## 8.55 Conflicting Merges and Resolution
```
$ git checkout -b realwork
$ git checkout master
$ git diff master realwork
$ git merge realwork
$ git mergetool
```
## 8.56 Section Cleanup and Push back to GitHub

# Section 9. Rebasing

## 9.1 Simple Rebase Example
```
$ git checkout -b myfeature
$ git checkout master
$ git checkout myfeature
$ git rebase master
$ git checkout master
$ git diff master myfeature
$ git merge myfeature
$ git branch -d myfeature
```
## 9.2 Setup for rebasing conflict
```
$ git checkout -b bigtrouble
$ git checkout master
```
## 9.3 Abort a Rebase
```
$ git difftool master bigtrouble
$ git rebase master
$ git rebase --abort
$ git status
```
## 9.4 Rebase Conflict and Resolution
```
$ git rebase master
$ git mergetool
$ git add <file>
$ git rebase --continue
$ git checkout master
$ git merge bigtrouble
```
## 9.5 Pull with Rebase (GitHub)
```
$ git fetch origin master
$ git pull --rebase origin master
```
## 9.6 Section Cleanup and push to GitHub
```
$ git branch -d bigtrouble
$ git pull origin master
$ git push origin master
```

# Section 10. Stashing

## 10.63 Simple Stash Example
```
$ git stash
$ git stash apply
$ git stash drop
```
## 10.64 Stashing Untracked Files and Using Pop
```
$ git stash -u
$ git stash pop # ~~ git stash apply && git stash drop
$ git stash save <message>
$ git stash pop
```
## 10.65 Managing Multple Stashes
```
$ git stash show stash@{1}
$ git stash list
$ git stash apply stash@{1}
$ git stash drop stash@{1}
$ git stash clear
```
## 10.66 Stashing into a Branch
```
$ git stash -u
$ git stash branch newchanges
$ git commit
$ git checkout master
$ git merge newchanges
```
## 10.67 Section Cleanup and push to GitHub
```
$ git pull origin master
$ git push origin master
```
## 10.68 Stashing Section Resources

# Section 11. Tagging

## 11.69 Simple Tag Example / Lightweight Tags
```
$ git tag myTag
$ git tag --list
$ git show myTag
$ git tag --delete myTag
```
## 11.70 Annotated Tags
```
$ git tag -a v-1.0
```
## 11.71 Comparing Tags
```
$ git tag -a v-1.1
$ git commit --amend
$ git tag -a v-1.2 -m "Release 1.2"
$ git diff v-1.0 v-1.2
```
## 11.72 Tagging a Specific Commit
```
$ git tag -a v-0.9-beta 3d5ce4a
$ git tag -a v-0.8-alpha 2e676a1
```
## 11.73 Updating Tags
```
$ git tag -a v-0.8-alpha -f d33fd89
```
## 11.74 Using Tags with GitHub
```
$ git push origin v-0.9-beta
$ git push origin v-1.1
$ git push origin master --tags
$ git push origin :v-0.8-alpha
```
## 11.75 Tagging Section Resources

# Section 12. Bonus: Office Hour Sessions

## 12.76 Reset and Reflog (Office Hours, Session 1)

## 12.77 Compare Branches via GitHub (Office Hours, Session 1)

## 12.78 Campare Branches via Command Line (Office Hours, Session 1)

## 12.79 Stash vs Branch (Office Hours, Session 1)

## 12.80 Gitting Help (Office Hours, Session 1)

## 12.81 Cherry Pick (Office Hours, Session 1)

# Section 13. Updates and Errata

## 13.1 Git Mac OS X Updates

# Section 14. Bonus: Resources and Special Offers

## 14.1 Bonus: Special Offers for Existing Students