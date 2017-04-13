
# :sweet_potato: Sweet Potato YA! :sweet_potato:

## How to do a run of your app?
* clone this repo
* run ```npm install```
* create ```config.env```
* add a ```DATABASE_URL``` variable
* We will post the usernames and passwords in gitter (security n that)

### User stories

**As a** member of Founders and Coders, who wants to learn from my fellow devs
> **I want to** log in with my Github account  
> **So that** I can use my Github organisation's info to see posts from my fellow students.

Acceptance criteria:

+ [x] I can click on a button, which allows me to log in via my Github account
+ [ ] The look of the button should make it obvious that it is this form of login
+ [x] Once I'm logged in, I should see a list of blog posts
+ [x] I shouldn't be left with a blank loading screen for too long during the authorisation process, otherwise I will lose confidence in your website and leave.

**As** any user who is logged in
> **I want to** see my username & Github profile picture on the homepage  
> **So that** I benefit from logging in with Github OAuth, and don't have to do any profile setup on your site.

Acceptance criteria:

+ [ ] I can see my username & profile picture on each page that I visit

## Database schema:

### Users:
Column | Type | Modifiers
--- | --- | ---
user_id | serial  | primary key
github_id | integer | not null unique
username | varchar(100) | not null
avatar_url | varchar(500) | not null
access_token | varchar(500) | not null

### Posts:

Column | Type | Modifiers
--- | --- | ---
post_id | integer | not null default
title | character varying(50) | not null
body | character varying(500) | not null
date | date | not null
user_id | integer | references users(user_id)
