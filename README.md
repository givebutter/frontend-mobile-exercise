# Givebutter Frontend Mobile Take-home

## Overview

Our goal is to fix and enhance a Pokedex mobile application. If you are unfamiliar with the world of Pokemon, here is a brief
explanation:

> The Pokedex is an electronic device created and designed to catalog and provide information regarding the various
> species of Pokemon featured in the Pokemon video game, anime and manga series.

[Source](https://pokemon.fandom.com/wiki/Pokedex)

Our version of the Pokedex is able to list and search through Pokemon. However, our search is a bit buggy. Additionally,
we want to add a feature that shows a selected Pokemon's details like its **type** and **moves** as well as seamlessly
navigate between Pokemon while in this view.

Your time is valuable, and we are extremely appreciative of you participating in this assessment. We're looking to gauge
your ability to read and edit code, understand instructions, and deliver features, just as you would during your typical
day-to-day work. We expect this test to take no more than a few hours and ask to complete this work within the next two
days. Upon submit, we will review and provide feedback to you regardless of our decision to continue the process.

Please update and add code in `App.js` based on the requirements found below. Additionally, we ask you
to edit the `readme.md` with answers to a few questions found in the `Follow-up Questions` section also found below.

When you are finished, please send the url of your completed Expo Snack to the Givebutter team.

## Setup

- We will be working in an [Expo Snack](https://snack.expo.dev/).
- Go to https://snack.expo.dev/.
- In the left sidebar next to `Project`, click the menu and select `Import git repository`
- Paste `` (the url of this repo) in the input and click the import button.
- You should now be able to use the Snack IDE to complete the exercise.
- Please reach out to the Givebutter team if you have any issues with the initial setup or have any problems when
  running the initial app.

## Requirements

### Search

- Typing in the search input should filter the existing Pokemon list and render only matches found.
- Fix any bugs that prevent the search functionality from working correctly.
- If there are no results from search, render "No Results Found".
- The search results container should be scrollable.
- The UI should match the below mockup.

### Details Card

- Clicking "Get Details" for any given Pokemon should render a card that has the Pokemon's `name`, `avatar`, `types`,
  and `moves`.
- Use the api functions defined in `api.js` to retrieve this data. Adding new endpoints or editing existing ones are out
  of scope.
- Each card should have a navigation at the bottom with an up and down arrow that goes to the previous or next Pokemon.
  If no previous or next Pokemon exists, don't render anything.
- The details card should match the below mockup.

## Follow-up Questions

Please take some time to answer the following questions. Your answers should go directly in this `readme`.

- Given more time, what would you suggest for improving the performance of this app?

- Is there anything you would consider doing if we were to go live with this app?

- What was the most challenging aspect of this work for you (if at all)?
