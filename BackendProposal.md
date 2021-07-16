### What problem are you trying to solve?
* _We are trying to develop a Backend System that receives data about some employees and returns additional parameters._
* _The parameters that we receive are:_ 
*__First Name__ 
*__Last Name__ 
*__Date of Birth__ 
*__Job Title__ 
*__Company and Country ISO Code__

* _We are supposed to add the following information:_
*__Full Name of the Country__ 
*__Currency used in the Country__ 
*__Language/s of the Country__ 
*__Timezone/s of the Country__
* _We would also like employees in Asia and Europe regions to have an additional identifier which takes the form of `{firstName}{lastName}{dateOfBirth}`. So for Leonardo Teixeira born 28/01/2002, this would be `leonardoteixeira28012002`._


### How do you propose to solve it?
* _We would develop an __API REST__ using __Node.js with Express__. The user would do a __POST__ request sending a JSON with the employee's data. The system would map the JSON and take the country ISO code, using it to do a request in the Rest Countries free API, sending a request to the following URL: __https://restcountries.eu/rest/v2/alpha/{code}___
* _Then, we would receive a JSON file with all country information, we would get the parameters we want to add and return a new JSON containing it. We would also check the country region, and if it is in Europe or Asia we would create a new parameter, containing the identifier string._

### What other approaches did you consider?
* _We could store the countries data in an internal variable, and check if the country is there before doing the request, saving computational power and time._
* _As the JSON is too short, it would just be an extra code, but in future updates, it might be useful having those data in cache._

### What could go wrong?
* _Doing multiples requests to an open API is always dangerous, as the connection can be accessed by anyone, which increases the risk of being invaded by hackers._
* _in this example We are not storing the data in any DB, but in production we should verify the data format before adding, not allowing simple SQL injections._
* _If the data in the DB get messed up, other components that depend on it could go down, which would lead to the system getting offline._
