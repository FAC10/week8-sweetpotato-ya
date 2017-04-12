
# :sweet_potato: Sweet Potato CMS :sweet_potato:
https://enigmatic-savannah-93237.herokuapp.com

[![Build Status](https://travis-ci.org/yvonne-liu/week7-sweetpotato-cms.svg?branch=master)](https://travis-ci.org/yvonne-liu/week7-sweetpotato-cms)
![codecov](https://codecov.io/gh/yvonne-liu/week7-sweetpotato-cms/branch/master/graph/badge.svg)

## How to do a run of your app?
* clone this repo
* ```npm i```
* ```npm run devStart```
* (we don't have any tests, we know, bad us)
* We will post the usernames and passwords in gitter (security n that)

### User stories

**As a** member of Founders and Coders, who wants to learn from my fellow devs
> **I want to** log in with my Github account  
> **So that** I can use my Github organisation's info to see posts from my fellow students.

Acceptance criteria:

+ [ ] I can click on a button, which allows me to log in via my Github account
+ [ ] The look of the button should make it obvious that it is this form of login
+ [ ] Once I'm logged in, I should see a list of blog posts
+ [ ] I shouldn't be left with a blank loading screen for too long during the authorisation process, otherwise I will lose confidence in your website and leave.

**As** any user who is logged in
> **I want to** see my username & Github profile picture on the homepage  
> **So that** I benefit from logging in with Github OAuth, and don't have to do any profile setup on your site.

Acceptance criteria:

+ [ ] I can see my username & profile picture on each page that I visit

## What?
A basic CMS blog platform with authentication, session management and templating with handlebars.

## How?
hapi for server creation and general back end stuff<br>
PSQL hosted on heroku for the database<br>
bcrypt for password hashing<br>
handlebars for templating<br>

## What did u learn tho?
[leaaaaaaaaarnings](./learnings.md)
