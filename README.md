# HabitBuilder

HabitBuilder is an app for building good reading habits. The core premise is that habits are not tasks or to-dos, but rather tiny lifestyle choices that pay massive dividends over time. 

HabitBuilder strengthens users' reading habits through: 

- Daily challenges of increasing difficulty
- Prioritizing small, consistent wins
- Intention-setting and "habit stacking," or linking new to existing habits
- A point system for completing challenges and setting intentions
- Social accountability and support
 
## Getting started

To start the Rails backend, ```cd``` into the root project folder and run the following commands in the terminal:

```
bundle install
rails db:create db:migrate db:seed
rails s
```

To start the React frontened, ```cd``` into the ```client``` folder and run the following commands in a new terminal window:
```
npm install
npm start
```

## Credentials

Your unique versions of the following Stripe and Google credentials should be stored in a ```.env``` file in the root project directory. The ```.env``` file should look like this, with your credentials appended after each ```=```.

```
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## User stories

As a user, I can:
- Log in with my Google credentials 
- Receive a daily reading challenge
- Time myself on the daily challenge
- View my current points and current streak of completed challenges
- Post intentions for where, when, and how I will complete upcoming challenges
- Post tips for completed challenges
- See tips that others have posted
- Follow other users
- See a feed of activity for those I've followed
- Pay for HabitBuilder Premium tier using Stripe

## Built with

- Ruby on Rails
- React
- Stripe
- googleauth gem
- Google Ruby API client 

## Future enhancements

- HabitBuilder Premium features including Google Calendar integration
- Charts to track reading over time
- Unlimited attempts for Premium members
- Bonus challenges
- Tracking against user-set goals and rewards
- Multiple challenge tracks 

## Author

Matt Ishida <br/>
LinkedIn: https://www.linkedin.com/in/matthew-ishida/ <br/>
GitHub: github.com/mattIshida