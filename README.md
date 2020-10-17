# Mealtime
Recipe viewer for one or more recipes cooked together for a meal

The general idea is to present a set of recipes together, and coordinate prep steps with cooking so that food is ready at about the same time.

**Work in Progress**

## Ideas

* Present a checklist of recipe steps in a column
* Separate prep steps from cooking steps
* Identify the 'critical path' - longest time duration recipe, then work backwards from its completion time. Arrange cooking and prep steps for shorter recipes relative to the end of the longest cooking duration.
* Include a play/pause timer that overlays a duration line over the arranged recipes to highlight when certain steps should start or end.

* Probably local storage is enough state to get started, i.e. don't lose timer state if the page refreshes
