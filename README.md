# Interview Scheduler

Using the React framework, this application allows users to book and manage appointments with available interviewers. Users have the ability to edit or delete the appointment. If there are no spots remaining on a particular day, the day's color will fade indicating no availability. The available spots for each day update in real time based on the creation or deletion of appointments. 

## Tech Specs
- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library

The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Animation of UI and Functionality
!["Interview Scheduler UI"](https://github.com/cmaher15/Interview-Scheduler/blob/master/project_photos/SchedulerClip1_.gif)
!["Interview Scheduler Error Message"](https://github.com/cmaher15/Interview-Scheduler/blob/master/project_photos/SchedulerClip2_.gif)


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
