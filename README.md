# A chrome extension that brings the coolness of Trello to Github issues

Pronounced like the first bit of 'Ghetto' and the last bit of 'Trello'.

## Project goals:

 - Bring drag and drop issues between 'stacks' and easy to see and use metaphor
 - edit issues, comments etc
 - zero config, zero state, zero hosting only conventions and leveraging the Github API


## Conventions:

This plugin works by creating some conventions in the tags system for a project and also 
augmenting the markdown to store things like check lists.

 - A 'stack' is a tag with a format like 's1 Todo'
 - Any issue with multiple stack tags will be in the 'earliest' stack
 - A stack can have a colour (unlike Trello)
 - A comment which includes a list can have [ ] and [x] to indicate done items


## Exclusions:

Because the goal is to have zero state stored in the extension, with all data in Github, this means
 there are some concepts that don't make sense because github has no way to model it.

 - Votes are left out for now (not sure on a convention?)
 - Tasks can only be assigned to one person at a time

## Too hard for now... :(

For now at least these aren't in the plan:

 - Live/comet updating - will just have a refresh button or poll (but will probably do a delta ajax call for speed)

## Thanks!:

Lots of inspirations and libraries and other goodies...

 - Trello!
 - Github!
 - jQuery / jQuery UI
 - Bootstrap



