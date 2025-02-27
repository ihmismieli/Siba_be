# Things to improve or at least study the current best practices:

Vili? Eetu? Emad? Use min 3h (max 5h?). 

1h for studying BE parts in general before diving into own topic.

In own topic then collect examples, differences, possible ways to improve.


* ???: validators in general. E.g. how to get rid of our "validate" middleware?
    - e.g. currently all or at least some validators only validate if validate added as last middleware

* Le: role requirement middleware system:
   - e.g. currently role checking only works if roleChecker added as last middleware (risk for mistake)
   - currently if roles are missing, anybody can run that service 
     (=by default role-based method-level authorization is disabled (another point for mistake/security prob))
   - same for the authenticator middleware too
   - usually security is reversed: pessimistic or safe way: Nothing allowed unless explicitly stated

* Benjamin: Some non-TS detected, e.g. in Knex code. 
  - How to config tools so that it's warned about? (non TS features, use of 'any', ...)
  - New versions of each library/module so that they would support TS and provide TS types

* Temmy: The BE structure is not exactly following common MVC or so pattern.
  - Is it still ok,
  - or are there easy non-breaking ways to do it better

* Cloe:  Is the the custom types file the correct way to define the types? 
  - What are best practices on them nowadays?
  - Also best practices on the type definitions themselves?
  - Are these somehow used in/with validators?
