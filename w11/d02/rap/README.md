# The RAP Stack
### Or: Dragging Rails Kicking and Screaming Into the 2010s

![DOOM](https://impossiblecity.files.wordpress.com/2009/03/doom-753530.jpg)
> A lotta guys wondering where they stacks went.

Rails actually works incredibly well to serve up a headless API, but it requires
a few changes from how we're used to doing things, and it's a good idea to
slightly modify things. Additionally, if we want to authenticate with JWTs,
there are a few other things that need to happen.

This intro will be divided into two parts:
  1. a field guide creating a rails app that serves as a headless API.
  2. the infrastructure you need to add for token-based authentication.

## Pt. 1: WSMD needs a new backend.
In the `frontend` folder, you will find the angular app from the MEAN stack version of WSMD.  This the version with authentication that we finished yesterday with, nothing has been changed yet.

We will create a rails backend to serve as our new API.  We will be following a similar flow to how we created the MEN backend.  For reference, here is the pivotal tracker we used the first time.

[User Stories](https://www.pivotaltracker.com/n/projects/1589567)

### Step One: Create the rails app
For those of you who have forgotten all about rails:

```ruby
rails new backend --database=postgresql -T
```

Run this command from the root of rap\_app, OUTSIDE of frontend.  When you ls from rap_app, there should now be two folders: frontend, containing our angular app and backend, containing our newly created rails app.

**?: What do the flags --database=postgresql -T do?**

At this point, I would git init and push my basic version to github, we will skip that in class today.  But remember, ABC (Always Be Committing).

### Step Two: App Config

Remember this is where I made some changes to my MEN stack app to suit my preferences, like one routes file, using dotenv, etc.  Since rails is convention over configuration, there is less to do for this step.  The one thing I want to do is delete all the folders inside of app, except for controllers and models.  Since we are making a simple api server, we will not need things like views or assets.

**?: Since we are using postgresql, what else do we have to do to properly set up our app?**

### Step Three: Create Show Model and Seeds
For those playing at home:

```ruby
rails g model Show title length:integer source
```
**?: Why don't I need a data type for title and source?**

**?: Who remembers what rails g model creates?  What else do we need to do to finish creating our show model?**

Now let's create some seeds for our database.

```ruby
if Show.count < 2
  Show.create([
    { title: "Flash", length: 60, source: "Hulu"},
    { title: "Modern Family", length: 30, source: "Hulu"},
    { title: "The Wire", length: 60, source: "HBO Go"}
    ])
end
```

Now run the seeds and check the database to make sure they got created.

```ruby
rake db:seed
rails c
Show.count
Show.first
```

### Step Four: Controller and Routes

Is rails starting to come back to you?  Good, lets create a controller.

And just kidding, that created a bunch of stuff we don't want again.  Also, we want to namespace our controller behind api.  So let's undo that rails g with a rails d and then run this command instead.

```ruby
rails g controller api/shows --skip-template-engine --skip-assets --skip-helper
```

This will only create the controller file and namespace shows under api.
[More Info on Rails Routing and Controllers with a namespace](http://guides.rubyonrails.org/routing.html#controller-namespaces-and-routing)

Now that we have a controller, your turn to write some code.  Take 10 mins to fill in the controller methods.  Feel free to use google or go back to weeks 4-6 and look at past RoR lessons/labs.  One thing I will give you for free, since we are building a JSON API this time, you probably want each action to `render json:`.

Using the link above, what should our routes look like?

#### A litle more about namespacing
We told our Rails router to expect a few things:

* First, to expect these controllers' names to be prefixed with
  `Api::` (e.g. `Api::ShowsController`).
* Second, to expect these controllers to be in `app/controllers/api`.
* Third, to expect these routes to be accessible from `/api/[whatever route we
  would usually access it at]`.

Why do this?

Rails can actually serve two apps at once: as Phil once said, your code is worthless;
your data is what's valuable. With Rails, if you want a few controllers to
render views, and other controllers to just serve JSON, they can both be backed
up by the same models. In this case, it's extremely useful to us to have our
routes namespaced, so that we know exactly what kind of data and functionality
we're dealing with.

#### A little more about render json:
When rails sees `render json:` what it actually does is call `as_json` on the models you're sending back, and send it back as JSON. Since
Angular is expecting JSON, this works seamlessly. If I were to have forgotten to
explicitly send back JSON, it would have looked for a view to render, not found
one, and returned an error.

### Test our backend
We have now created everything we need for our rails API backend.  How can we test it? What is a second way we can test it?

Let's try to POST a new show to our backend through Postman. Whoops, that doesn't look right.  What is the error we are getting? Hint: Click on the Preview button at the top of the response window.

[LMGTFY](http://lmgtfy.com/?q=raise+ActionController%3A%3AInvalidAuthenticityToken)

And the 6th answer from the first Stack Overflow question seems to solve our problem.  Feel free to look at the other answers and read the question to understand what the error was and how other people handled it.  The reason I chose this method was becase of the handy comment, generated by rails, in our `application.rb`.

Now we should be able to use Postman to full CRUD shows and get JSON responses back.

### Let's see if our frontend just magically works
You can probably tell by my wording of that header, I am expecting some issues.  First, everyone open a new terminal tab (leaving rails s running). Now cd out of backend and into fronted. From inside frontend, run `http-server`.  If you terminal yells at you, let's make your life easier and install http-server.

`npm install http-server -g`

[For more information about http-server](https://www.npmjs.com/package/http-server)

You should now be able to run `http-server`. If you ran it from the right directory, it will serve up index.html on localhost:8080.  So lets open a new chrome tab and look at it. Does it load up for you? Awesome!

Looks like I can navigate around, but none of my data is coming from the backend.  Let's open up inspector and see if we can debug our way to a working app.

When you try to go to the show list page, you should be getting this error in console. `GET http://localhost:8080/api/shows 404 (Not Found)`

**?: Any guesses on what the problem is and how to fix it?**

If you remember, for our MEAN stack app, we made our life easier by not fully seperating our angular app and api server.  We leveraged this fact in our ShowResource by using a relative path to tell $resource where to get shows from.  We need to change it to:

```javascript
http://localhost:3000/api/shows/:id
```

Note that your deployed version will need to know the deployed url of your api.  There are not any simple ways to deal with environment variables in angular, but feel free to look up some of the ways we can handle this better.

Now let's refresh our shows list page and see if that solved our problems.  Looks like it fixed the GET error but now we have a new one.

`XMLHttpRequest cannot load http://localhost:3000/api/shows. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.`

Which leads us to...

### Cross-Origin Resource Sharing
It's a good idea, in general, to have your headless (i.e. not rendering views)
API and your client-side app in different places. Since the domain from which
you'll be serving the front end will be different from the domain where you
serve the back-end, you need to enable cross-origin resource sharing on the back
end. Even if you run everything locally, the front end will be using `http-server`
to be served from `localhost:8080`, and the back end will be using `rails s` to
serve from `localhost:3000`. Even though they're both serving from your
computer, being on different ports means they're on different origins.

Luckily, there's a similar solution to saying `require('cors')` in our MEAN
apps. In this case, we can add `rack-cors` to our `Gemfile`, like so:

```ruby
# Necessary infrastructure for serving an API
gem 'rack-cors'
```

Reminder: You need to stop your rails server and bundle install after you add a new gem to your gemfile.

Then, just like we use our CORS middleware to handle our requests, we can use
the middleware we just included in the `Gemfile`. To `config/application.rb` we
add:

```ruby
config.middleware.use Rack::Cors do
  allow do
    origins '*'
    resource '*',
      :headers => :any,
      :methods => [:get, :put, :post, :delete, :options]
  end
end
```
This is an extremely (dangerously, even) permissive CORS policy. It's saying
that we can access any of our routes from anywhere on the Internet, at all of
the interesting HTTP methods. Middleware is by now a pretty familiar, well-worn
concept for us, and it behaves here quite similarly to how it does in MEAN apps.
At this point, once you've installed the CORS gem and inserted it into your
middleware, you're ready to start making cross-domain AJAX requests.

Now let's get our rails server back up and running and refresh our shows list page.  It should be showing shows now.  Now let's try and look at a show.  If you click on the See This Show link, the template should change, but have no info and your console should have this error `Error: [$resource:badcfg] http://errors.angularjs.org/1.5.5/$resource/badcfg?p0=Error%20in%20resource…t&p2=object&p3=array&p4=GET&p5=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fshows`

Any ideas? One hint, look at the url in your browser.  What's missing?

We switched from a Mongo database to a postgresql one, which means that we have to reference our object's id differently.  So let's go into the show list template and change the ui-sref to make it work.  Take some time to make similar changes anywhere else we probably need them.

Did you catch the one in our controllers? I believe there were 4, if not you will probably come across them soon. Test that you can now add, edit, see, and delete a show. Sweet!  We have successfully created a RAP stack app.  We have now built two full stack apps, who is ready for LAMP? I kid, I kid.  But, seriously, pat yourself on the back.  Two and a half months ago, you could barely build a static html page.  You now have the tools and knowledge to build a MEAN stack app and a RAP stack app.

## Pt. 2: And Since we all love auth...
We're switching gears a little. Once again, this is a blueprint for how to add JWTs to your RAP stack app.  You are not expected to be able to come up with all this code on your own, just know how to implement and use it.  Since our angular frontend is already set up to handle JWTs, we are going to continue on with them in our rails backend.  For those looking for other options, I recommend looking at
[Devise Token Auth](https://github.com/lynndylanhurley/devise_token_auth)
and
[ng-token-auth](https://github.com/lynndylanhurley/ng-token-auth).
They are designed to work well together.

### First: Requiring JWT
Ruby has a really nice implementation of a JWT encoder/decoder available as a
gem. Once again, let's add to our `Gemfile`, right under where we added rack-cors. Don't forget to stop rails server and run bundle install after.

```ruby
gem 'jwt'
```

This gives us access to a module that can encode and decode stuff for us. Still,
it'd be a little clunky to do all of the encoding and decoding in our
controllers. Let's abstract some of it out to a helper module.

### Second: `module AuthToken`
Inside of your lib folder, create a file called `auth_token.rb`. Inside that file, lets paste in some code.

```ruby
module AuthToken
  def self.encode(payload, ttl_in_minutes = 60*24*30)
    payload[:exp] = ttl_in_minutes.minutes.from_now.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def self.decode(token)
    decoded = JWT.decode(token, Rails.application.secrets.secret_key_base)
    HashWithIndifferentAccess.new(decoded[0])
  end
end
```

Similar to how in our MEAN version, we are just gonna bring in this code to create and decode JWTs.  Let's take a brief look at what it is and what it does.

Observe that it's a module– this is a _singleton_,
similar to Angular services. It's included everywhere in our Rails app, so we
can use its methods in our controller.

`AuthToken.encode` takes a hash to encode, sets an expiration date (called here
`ttl_in_minutes` and set to 30 days), and uses JWT to encode it as a hashed
string. It also uses Rails's built-in secret key to encrypt it– someone who
intercepts a JWT token between the server and us would have a tricky time
decoding it without the secret. Thanks, JWT!

`AuthToken.decode` is much the same– it takes a hashed string, feeds it through
the inverse of JWT's hashing algorithm with the secret as a key, and gets out a
Hash with Indifferent Access (so you can say `hash[:key]` or `hash["key"]` and
they work the same. If we go over to `users_controller.rb`, we'll see how this
is applied.

### Third: User model
Since we are talking about authentication, we probably need a user model.  So let's go ahead and `rails g model User name email password_digest`.  We want our user to look the same as our MEN stack user since that is what the frontend is expecting, if you are building a new RAP app, feel free to make your user model look however you want.  Also, since we will be storing passwords, we should bring in bcrypt, so let's uncomment it in the gemfile.  You can also take this time to delete or comment out all the gems we don't need, like sass-rails (we have no views in our rails app, so no need to style them).  Now let's run `rake db:migrate` and add `has_secure_password` to our user model.  You might also want to add some validations at this point and maybe some user seed data.

### Third: `api/token` and `api/me`
Now that we have our model set up, lets create the controller and routes.  Instead of using rails g, let's just create the controller file ourselves.  Lets put this new file inside our api folder that is inside the controllers folder and call it `users_controller.rb`.  Let's paste this code in:

```ruby
require 'auth_token'

class Api::UsersController < ApplicationController

  # POST api/users
  def create
    user = User.new(user_params)

    if user.save
      render json: user
    else
      render status: :unprocessable_entity
    end
  end

  # POST api/token
  def token
    user = User.find_by(email: user_params[:email])
    if user && user.authenticate(user_params[:password])
      payload = {
        user: {
          id: user.id
        }
      }

      render json: {token: AuthToken.encode(payload)}
    else
      render status: :unauthorized
    end
  end

  # POST api/me
  def me
    auth_header = request.headers["Authorization"]

    if auth_header
      auth_token = auth_header.split(' ').last
      credentials = AuthToken.decode(auth_token)

      user = User.find_by(id: credentials[:user][:id])

      if user
        render json: user
      else
        render status: :not_found
      end
    else
      render status: :bad_request
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.permit(:name, :email, :password)
    end
end
```
Lets take a quick look at that.

* You will notice that the first thing we do is `require auth_token`.  This gives us access to the module we created earlier.
* `create` is our classic method to make a new user. It's not terribly
  interesting.
* `token` is interesting. Note that it finds and authenticates a user– if the
  user authenticates correctly, it sends back a token containing the user's
  id. This is all the data we need at this point! As long as you're using
  HTTPS (which Heroku does by default), the encrypted id can be used
  to find and authenticate a user.
* `me` is also interesting– it has the same header parsing as in yesterday's
  Token Slinger exercise, and can be used as a template for token-based
  authentication in general. It shouldn't be a stretch of the imagination to
  think of wrapping the logic to decode the authorization token and find a user
  in a `before_filter` to make a route require authorization.

Now let's add the routes to our backend.  Inside our api namespace, add:

```ruby
resources :users, only: :create

get 'me', to: 'users#me'
post 'token', to: 'users#token'
```

Since these routes aren't very RESTful, we can't uses the resources method.  Don't forget, you can make api/me more RESTful if you want and make it a more traditional users#show.

Let's use Postman to check that our new backend routes work.  Can you create a new user? Get a token? And get the user data?

Now let's check in angular.  Let's try and sign in the user we created in Postman. This error should look familiar.  Go fix it.  And in one other place.  One last change.  In our MEN backend, we were just returning the token itself.  In our Rails backend, we are wrapping it in an object with the key being token, so we have to access it differently in our auth.service.js.  Instead of storing res.data, we now need to store res.data.token.

##### References

[rack-cors gem](https://github.com/cyu/rack-cors)
