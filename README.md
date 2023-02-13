# Technical Assessment: Front End Developer

This assessment helps Vanti to hire people suited for the role of **Front End Developer**. As part of this role you will
be developing user interfaces using Vue.js that integrate with backend systems via APIs. A polished and responsive user
experience is key.

This assessment provides a sample application that presents occupancy statistics for a fictional building. This is
typical of the type of feature we work with daily here at Vanti. Working through this assessment you will add new
features to the application to improve the utility and user experience.

Outside of the technical requirements listed, we place no limits on how you want to deliver this solution. One of the
things we are hoping to extract from your evaluation is an idea of what a good solution looks like to you. As this is a
front end role, an attention to detail is expected but we aren't going to penalise the odd spelling mistake or
duplicated code. These things happen and we are aware that interviews and assessments add extra pressure.

When solving the below tasks try to break your work down into small changes and commit these into Git independently. The
Git history really helps us to understand how you approach problem solving. Don't worry if you commit something you wish
you hadn't, people change their minds or find better ways to do things all the time, this is part of our work and we
like to see how you deal with this too.

## Setup and submission

This repository is read-only, you will not be able to push changes to it. We'd like you to clone the repository, and
push your changes to a code hosting site of your choosing. Try not to fork this repository directly, forks can be
tracked and we'd like to reduce easy plagiarism. Using the [GitHub importer](https://github.com/new/import) to create a
private copy is perfect!

Once your repository is available, send us a link / access, and let us know when you're done and we'll take a look.

Thank you for taking the time to complete this assessment, let's get started :rocket:

## Goals

We are developing a building operations web app, one of the features of this application is to show the user the
occupancy history of their building. The current application version presents all known occupancy readings for the
building in a paginated table on the home page of the app.

The API integration is currently mocked, but will be updated once you've completed your work.

### Goal 1: Provide filtering of occupancy data by floor

During a design review it was noticed that while the application does show all the information, it's not presented in a
way that is easily consumed by the operator. The designer has decided that it would be a better user experience if the
user had the choice to show only a single floor of data at once.

Your task is to add a sidebar to the application that lists all floors. When the user clicks on a floor the occupancy
table should only show rows for that floor.

### Goal 2: Deep linking to a floor

After some user testing we found that the user kept sending links to the app to their colleagues expecting the app to
load showing the same floors data they were seeing. This did not happen as the links were top level and didn't include
any filter information in them. We think this should work and would help with how the user uses the application in the
real world.

Using `vue-router@3.6`, setup routes to allow direct linking to occupancy data filtered by floor.


