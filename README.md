###You can see it live on: https://form-test-omnipresent.vercel.app/



### What problem are you trying to solve?
* _We are trying to make this code production ready, in order to deploy it safely._

### Why should we solve it?
* _Improving our software is a way of delivering a better user experience, creating a sense of comfort and safety._ 

### How do you propose to solve it?
* _The first thing we should add is an authentication system, so the user can keep their submitted forms and access this data, and assure the ownership of their data, not allowing thid-party people to visualize or edit it. We would use Firebase for our auth system, using their prebuilt libraries to authenticate with email and password, google and facebook_
* _Next, we would need to add a dashboard, so the user would be able to view, edit and delete the information they added._

### What could go wrong?
* _If the system is not well designed, the user could get lost, leading to less time spent in the platform._
* _We will mitigate it using a simple and minimalistic design approach._
* _If the auth system fail, user data could be exploited, which would make them feel unsafe and not use our software. In order to avoid it, the system must be tested against exploits, with the intent to reduce the chance of information leaked._
