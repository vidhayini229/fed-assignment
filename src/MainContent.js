import React from 'react';

function MainContent() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}}> web API </h2>
         <p lang='eng'>Web APIs are very useful in implementation of RESTFUL web services using .NET framework.
Web API helps in enabling the development of HTTP services to reach out to client entities like browser, devices or tablets.
ASP.NET Web API can be used with MVC for any type of application.
A web API can help you develop ASP.NET application via AJAX.
Hence, web API makes it easier for the developers to build an ASP.NET application that is compatible with any browser and almost any device.
<br></br>Steps to use Web API:<br></br>

Most APIs require an API key. Once you find an API you want to play with, look in the documentation for access requirements. Most APIs will ask you to complete an identity verification, like signing in with your Google account. You’ll get a unique string of letters and numbers to use when accessing the API.
The easiest way to start using an API is by finding an HTTP client online, like REST-Client, Postman, or Paw. These ready-made tools help you structure your requests to access existing APIs with the API key you received. You’ll still need to know some of the syntaxes from the documentation, but there is very little coding knowledge required.
The next best way to pull data from an API is by building a URL from existing API documentation.
</p><br />
<div className='r' id="r">
<p>The Fetch API<br/>
The Fetch API provides an interface for fetching resources. We’ll use it to fetch data from a third-party API and see how to use it when fetching data from an API built in-house.
<br/></p><p className='example'>
fetchUsers() &#123;<br></br>
  // Where we're fetching data from<br></br><br></br>
  fetch(`https://jsonplaceholder.typicode.com/users`)
    // We get the API response and receive data in JSON format...<br></br><br></br>
    .then(response =&gt; response.json())<br></br><br></br>
    // ...then we update the users state
    .then(data =&gt;
      this.setState(&#123;
        users: data,
        isLoading: false,
        &#123;)
    )<br></br>
    // Catch any errors we hit and update the app<br></br><br></br>
    .catch(error =&gt; this.setState(&#125; error, isLoading: false &#125;));
&#125;
  
</p>
<p>
We create a method called fetchUser() and use it to do exactly what you might think: request user data from the API endpoint and fetch it for our app. Fetch is a promise-based API which returns a response object. So, we make use of the json() method to get the response object which is stored in data and used to update the state of users in our application. We also need to change the state of isLoading to false so that our application knows that loading has completed and all is clear to render the data.
<br></br>The first time the application renders, the data won’t have been received — it can take seconds. We want to trigger the method to fetch the users when the application state can be accessed for an update and the application re-rendered. React’s componentDidMount() is the best place for this, so we’ll place the fetchUsers() method in it. 
</p>
</div><br/>

<div className='c' id="c">
  <p>
  Using the Fetch API<br/>
  The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, as soon as the server responds with headers, the Promise will resolve normally (with the ok property of the response set to false if the response isn't in the range 200–299), and it will only reject on network failure or if anything prevented the request from completing.

  </p><p className='example'>

  fetch('http://example.com/movies.json')
  .then((response) =&gt; response.json())
  .then((data) =&gt; console.log(data));</p>
  <p>  Here we are fetching a JSON file across the network and printing it to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.</p>
</div><br/>
<div className='e' id="e">
  <p>React axios<br/>
  n ReactJS, Axios is a library that serves to create HTTP requests that are present externally. It is evident from the fact that we may sometimes in React applications need to get data from the external source. It is quite difficult to fetch such data so that they can be normally shown on the website. Thus, it helps in retrieving the data thereby adding it to the state to facilitate the application whenever the requirement arises.
  <br></br>

  </p>

<p className='example'>Step 1: Below is the command to create React app in your project…
<br></br>
npx create-react-app new_files
<br></br>
Step 2: Enter in the directory created in the first step.
<br></br>
cd new_files
<br></br>
Step 3: Install Axios library using the command given below…
<br></br>
npm install axios
<br></br>
Step 4: Once this has been done, you can start the server using the command given below..
<br></br>
npm start</p>
<p>Additionally, react Axios is very easy to modify and is quite lightweight. It also works great with many other frameworks present today. The main purpose of using Axios is to get support for request and response interception, conversion of data into JSON format, and transform it. It also helps you in protecting XSRF forgery by default while you request cross-site access.
</p>
</div><br/>
<div className='l' id="l">
  <p>
  Getting GET request with Axios<br/>
  First, you need to import the React and Axios so that both can be used in the component. Further you require looking into the componentDidMount lifecycle hook and performing a GET request.

  </p><p className='example'>import React from 'react';  
  
  import axios from 'axios';  
    <br></br>
  export default class AnimalList extends React.Component &#123;  <br></br>
    state = &#123;  <br></br>
      persons: [ ]  <br></br>
      &#125;  <br></br>
  componentDidMount() &#123;  <br></br>
      axios.get(`https://jsonholder.com/users`)  <br></br>
        .then(res =&gt; &#123;  <br></br>
          const animals = res.data;  <br></br>
          this.setState(&#123; animals &#125;);  <br></br>
          &#125;)  <br></br>
          &#125;  <br></br>
</p>
<p> n the above code, we have first imported React and Axios components to get all the features into our code. You can then hook the componentDidMount() function for the lifecycle management to create a GET request. We have used axios.get URL, which will collectively get a promise to return an object. Inside this generated request you might get the data that is assigned. You can also get the status code and request logs under the res.request and res.status paradigm.</p>
</div><br/>
<div className='p' id="p">
  <p>Getting POST request with Axios<br/>
  Getting an HTTP request is quite an easy task just like the object config is passed to the Axios function. You can easily make such POST requests and trigger events with the help of given endpoints. Therefore, to perform an HTTP POST request in Axios, you will need to call the axios.post() function followed by passing two parameters i.e. the URI of the endpoint service.
  <br></br>These objects contain the same properties you want to send to the server. Hence, to create a simple POST request through Axios, the object must possess the property of URL. If no such method exists, the GET request value will be carried forward for the process. Take a look at a simple POST request example.</p>
<p className='example'>axios(&#123; <br></br> 
  method: 'post',  <br></br>
  url: '/login',  <br></br>
  data: &#123;  <br></br>
    firstName: 'Finn',  <br></br>
    lastName: 'Williams'  <br></br>
    &#125;  <br></br>
    &#125;);  <br></br>
</p><p>
The above Axios snippet looks familiar to that of JQuery's Ajax function. This snippet orders Axios to send a POST request to log in with object values or keys and the axios will convert this piece of code in the JSON format. Later, this JSON converted data is passed onto the request body which is further processed into the components you have included in your react.
</p>
</div><br/>

<div className='p' id="p"><p><br/>
Features of Axios Library


</p>
<p className='example'> 
JSON data is transformed automatically.<br></br>
It transforms the request and response data.<br></br>
Useful in making HTTP requests from Node.js<br></br>
It makes XMLHttpRequests from the browser.<br></br>
Provide client-side support for protecting against XSRF.<br></br>
Supports promise API.<br></br>
Ability to cancel the request.</p>
</div>

        </div>
        <div className='blog-card'>
          <div className='content-blog'>
             <div>In this article </div>
             <div className='options'>
             <div><a href='#r'>1.Fetch API</a></div>
             <div><a href='#c'>2.Using the Fetch API</a></div>
             <div> <a href="#e">3.React axios</a></div>
             <div> <a href="#l">4.Getting GET request with Axios</a></div>
             <div> <a href="#p">5.Getting POST request with Axios</a></div>
             
             <div> <a href="#p">7.
Features of Axios Library</a></div>
             </div>
             
            
          </div>
          <div className='scrolltop'><a href="#"><button>Scroll to Top</button></a></div>
        </div>

    </div>
  )
}

export default MainContent;